import { EstadoJogoInterface } from "../Interfaces/EstadoJogoInterface.js";

class EstadoJogo {
    protected estadoAtual:
        | "inicial"
        | "play"
        | "pause"
        | "vitoria"
        | "game-over"
        | "restart" = "inicial";
    constructor(
        protected textElement: HTMLElement,
        protected mensagens: EstadoJogoInterface,
        protected buttonElement?: HTMLElement
    ) {}

    private esconderElemento() {
        this.textElement.classList.add("remove");
    }
    private mostrarElemento(mensagem: string) {
        this.textElement.textContent = mensagem;
        this.textElement.classList.remove("remove");
    }

    play(): void {
        if (
            this.estadoAtual === "inicial" ||
            this.estadoAtual === "pause" ||
            this.estadoAtual === "restart"
        ) {
            this.estadoAtual = "play";
            this.esconderElemento();
        }
    }
    pause(): void {
        if (this.estadoAtual === "play") {
            this.estadoAtual = "pause";
            this.mostrarElemento(this.mensagens.pause);
        }
    }
    restart(): void {
        this.estadoAtual = "restart";
        this.textElement.classList.remove("winner");
        this.textElement.classList.remove("game-over");
        if (this.buttonElement) this.buttonElement.style = "none";
    }
    inicial() {
        this.estadoAtual = "inicial";
        this.mostrarElemento(this.mensagens.inicial);
    }

    gameOver(vitoria: boolean): void {
        if (vitoria) {
            this.estadoAtual = "vitoria";
            this.mostrarElemento(this.mensagens.vitoria);
            this.textElement.classList.add("winner");
            if (this.buttonElement) this.buttonElement.style.display = "block";
        } else {
            this.estadoAtual = "game-over";
            this.mostrarElemento(this.mensagens["game-over"]);
            this.textElement.classList.add("game-over");
            if (this.buttonElement) this.buttonElement.style.display = "block";
        }
    }

    isPlay(): boolean {
        return this.estadoAtual === "play";
    }
    isPause(): boolean {
        return this.estadoAtual === "pause" || this.estadoAtual === "inicial";
    }
    isRestart() {
        return this.estadoAtual === "restart";
    }
}

export default EstadoJogo;
