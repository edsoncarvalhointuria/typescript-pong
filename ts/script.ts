import Bola from "./Classes/Bola.js";
import Confete from "./Classes/Confete.js";
import EstadoJogo from "./Classes/EstadoJogo.js";
import Linha from "./Classes/Linha.js";
import Particula from "./Classes/Particula.js";
import Raquete from "./Classes/Raquete.js";

// ---- Configurações Iniciais ----
const canvas = document.querySelector("#pong") as HTMLCanvasElement;
const winnerCanvas = document.querySelector("#winner") as HTMLCanvasElement;
const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;
const winnerCtx = winnerCanvas?.getContext("2d") as CanvasRenderingContext2D;

const pontosJogadorEl = document.getElementById(
    "pontos-jogador"
) as HTMLElement;
const pontosOponenteEl = document.getElementById(
    "pontos-oponente"
) as HTMLElement;
const estadoEl = document.getElementById("estado-jogo") as HTMLElement;
const restartEl = document.getElementById("restart") as HTMLElement;

const PONTOS_PARA_VENCER = 7;

// ---- INICIANDO OBJETOS ----
canvas.width = window.innerWidth - innerWidth / 4;
canvas.height = window.innerHeight - innerWidth / 6;
winnerCanvas.width = window.innerWidth;
winnerCanvas.height = window.innerHeight;
pontosJogadorEl.style.left = `${canvas.width * 0.25}px`;
pontosJogadorEl.style.top = `${canvas.height * 0.05}px`;
pontosOponenteEl.style.left = `${canvas.width * 0.75}px`;
pontosOponenteEl.style.top = `${canvas.height * 0.05}px`;

//@ts-ignore
const hitSynth = new Tone.Synth().toDestination();
//@ts-ignore
const scoreSynth = new Tone.Synth({
    oscillator: { type: "triangle" },
}).toDestination();
// @ts-ignore
const victoryJingle = new Tone.Sequence(
    (time: number, note: string) => {
        scoreSynth.triggerAttackRelease(note, "8n", time);
    },
    ["C4", "E4", "G4", "C5"],
    "8n"
);
// @ts-ignore
const defeatJingle = new Tone.Sequence(
    (time: number, note: string) => {
        scoreSynth.triggerAttackRelease(note, "8n", time);
    },
    ["C4", "Eb4", "G3"],
    "8n"
);

const particulasExplosao: Particula[] = [];
const confetes: Confete[] = [];
const mouse = {
    x: null as number | null,
    y: null as number | null,
};

const estadoJogo = new EstadoJogo(
    estadoEl,
    {
        "game-over": "Game Over!",
        pause: "Pausado",
        inicial: "Clique para começar",
        vitoria: "Parabéns, você venceu!",
    },
    restartEl
);

const bolinha = new Bola(
    canvas,
    Math.round(canvas.width / 2),
    Math.round(canvas.height / 2),
    13,
    5,
    5
);

const jogador = new Raquete(canvas, 10, canvas.height / 2 - 50, 10, 100);
const oponente = new Raquete(
    canvas,
    canvas.width - 20,
    canvas.height / 2 - 50,
    10,
    100
);

const linha = new Linha(
    canvas,
    canvas.width / 2,
    0,
    canvas.width / 2,
    canvas.height,
    5,
    [15, 10],
    "rgba(255, 255, 255, 0.5)"
);

// ----- Events Listeners -----
canvas.addEventListener("mousemove", (evt) => {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
});

window.addEventListener("click", () => {
    //@ts-ignore
    Tone.start();
    if (estadoJogo.isPause()) estadoJogo.play();
    else estadoJogo.pause();
});

restartEl.addEventListener("click", () => {
    estadoJogo.restart();
});

const renderizar = () => {
    if (estadoJogo.isRestart()) {
        winnerCanvas.style.display = "none";
        jogador.reset();
        oponente.reset();
        bolinha.reset();
        confetes.length = 0;
        victoryJingle.stop();
        // @ts-ignore
        Tone.Transport.stop();
        defeatJingle.stop();
        // @ts-ignore
        Tone.Transport.stop();
        estadoJogo.inicial();
    }

    if (estadoJogo.isPlay()) {
        bolinha.update(
            jogador,
            oponente,
            hitSynth,
            scoreSynth,
            particulasExplosao
        );
        if (mouse.y) jogador.update(mouse.y);
        oponente.update(bolinha.getY, true);

        if (oponente.getPontos >= PONTOS_PARA_VENCER) {
            winnerCanvas.style.display = "block";
            winnerCanvas.classList.add("game-over");
            estadoJogo.gameOver(false);
            defeatJingle.start();
            // @ts-ignore
            Tone.Transport.start();
        } else if (jogador.getPontos >= PONTOS_PARA_VENCER) {
            chuvaConfetes(confetes);
            winnerCanvas.style.display = "block";
            winnerCanvas.classList.remove("game-over");
            estadoJogo.gameOver(true);
            victoryJingle.start();
            // @ts-ignore
            Tone.Transport.start();
        } else if (
            jogador.getPontos >= PONTOS_PARA_VENCER - 2 &&
            oponente.getPontos <= jogador.getPontos - 2
        ) {
            oponente.modoFuria();
        } else if (jogador.getPontos >= PONTOS_PARA_VENCER - 2) {
            oponente.sairModoFuria();
        }
    }

    // ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
    ctx.fillStyle = "rgba(13, 13, 13, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    winnerCtx.clearRect(0, 0, winnerCanvas.width, winnerCanvas.height);

    linha.draw();
    bolinha.draw();
    jogador.draw();
    oponente.draw();

    for (let i = particulasExplosao.length - 1; i >= 0; i--) {
        particulasExplosao[i].update();
        particulasExplosao[i].draw();
        if (particulasExplosao[i].getVida <= 0) {
            particulasExplosao.splice(i, 1);
        }
    }

    confetes.forEach((v) => {
        v.update();
        v.draw();
    });

    pontosJogadorEl.textContent = jogador.getPontos.toString();
    pontosOponenteEl.textContent = oponente.getPontos.toString();

    requestAnimationFrame(renderizar);
};

requestAnimationFrame(renderizar);

// ------ Funções Auxiliares -----
function chuvaConfetes(lista: Confete[]) {
    for (let i = 0; i < 100; i++) {
        lista.push(
            new Confete(
                winnerCanvas,
                Math.random() * winnerCanvas.width,
                Math.random() * winnerCanvas.height,
                5,
                3,
                2,
                `hsl(${Math.random() * 360}, 50%, 50%)`
            )
        );
    }
}
