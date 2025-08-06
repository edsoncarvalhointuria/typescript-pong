import Arc from "./Arc.js";
import Particula from "./Particula.js";
class Bola extends Arc {
    raio;
    velocidadeX;
    velocidadeY;
    _velocidadeX;
    _velocidadeY;
    constructor(canvas, x, y, raio, velocidadeX, velocidadeY, cor = "white") {
        super(canvas, x, y, raio, velocidadeX, velocidadeY, cor);
        this.raio = raio;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY;
        this._velocidadeX = velocidadeX;
        this._velocidadeY = velocidadeX;
    }
    colisaoParede(jogador, oponente, synth) {
        if (this.x + this.raio > this.canvas.width) {
            this.velocidadeX *= -1;
            this._velocidadeX = -Math.abs(this._velocidadeX);
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.resetVelocidade();
            if (synth)
                synth.triggerAttackRelease("C4", "8n");
            if (jogador)
                jogador.setPontos = jogador.getPontos + 1;
        }
        else if (this.x - this.raio < 0) {
            this.velocidadeX *= -1;
            this._velocidadeX = Math.abs(this._velocidadeX);
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.resetVelocidade();
            if (synth)
                synth.triggerAttackRelease("C4", "8n");
            if (oponente)
                oponente.setPontos = oponente.getPontos + 1;
        }
        if (this.y + this.raio > this.canvas.height) {
            this.velocidadeY *= -1;
            this.y = this.canvas.height - this.raio;
            if (synth)
                synth.triggerAttackRelease("E1", "8n");
        }
        else if (this.y - this.raio < 0) {
            this.velocidadeY *= -1;
            this.y = this.raio;
            if (synth)
                synth.triggerAttackRelease("E1", "8n");
        }
    }
    isColisaoRaquete(raquete) {
        const bolaTopo = this.y - this.raio;
        const bolaBase = this.y + this.raio;
        const bolaEsquerda = this.x - this.raio;
        const bolaDireita = this.x + this.raio;
        const raqueteTopo = raquete.getY;
        const raqueteBase = raquete.getY + raquete.getAltura;
        const raqueteEsquerda = raquete.getX;
        const raqueteDireita = raquete.getX + raquete.getLargura;
        return !(bolaBase < raqueteTopo ||
            bolaTopo > raqueteBase ||
            bolaEsquerda > raqueteDireita ||
            bolaDireita < raqueteEsquerda);
    }
    colisaoRaquete(raquete) {
        this.velocidadeX *= -1;
        const deltaY = (this.y - (raquete.getY + raquete.getAltura / 2)) /
            (raquete.getAltura / 2);
        const maxVelocidade = 8;
        const deltaNormalizado = Math.max(-1, Math.min(1, deltaY));
        this.velocidadeY = deltaNormalizado * maxVelocidade;
    }
    resetVelocidade() {
        this.velocidadeX = this._velocidadeX;
        this.velocidadeY = Math.random() > 0.5 ? 2 : -2;
    }
    criarExplosao(particulasExplosao, raquete) {
        const x = this.x;
        const y = this.y;
        const numeroParticulas = 20;
        const raio = 1;
        const direcaoBase = raquete.getX < this.canvas.width / 2 ? 0 : Math.PI;
        for (let i = 0; i < numeroParticulas; i++) {
            const anguloRelativo = Math.random() * Math.PI - Math.PI / 2;
            const angulo = direcaoBase + anguloRelativo;
            const velocidade = Math.random() * 2 + 1;
            const velocidadeX = Math.cos(angulo) * velocidade;
            const velocidadeY = Math.sin(angulo) * velocidade;
            const cor = `hsl(${Math.random() * 360}, 100%, 75%)`;
            particulasExplosao.push(new Particula(this.canvas, x, y, raio, velocidadeX, velocidadeY, cor));
        }
    }
    update(jogador, oponente, hitSynth, scoreSynth, particulasExplosao) {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
        if (this.isColisaoRaquete(jogador)) {
            if (hitSynth)
                hitSynth.triggerAttackRelease("E2", "8n");
            if (particulasExplosao)
                this.criarExplosao(particulasExplosao, jogador);
            this.x = jogador.getX + jogador.getLargura + this.raio;
            this.velocidadeX *= 1.15;
            this.colisaoRaquete(jogador);
        }
        else if (this.isColisaoRaquete(oponente)) {
            if (hitSynth)
                hitSynth.triggerAttackRelease("C2", "8n");
            if (particulasExplosao)
                this.criarExplosao(particulasExplosao, oponente);
            this.velocidadeX *= 1.15;
            this.x = oponente.getX - this.raio;
            this.colisaoRaquete(oponente);
        }
        this.colisaoParede(jogador, oponente, scoreSynth);
    }
    reset() {
        super.reset();
        this.velocidadeX = Math.abs(this._velocidadeX);
        this.velocidadeY = this._velocidadeY;
    }
}
export default Bola;
//# sourceMappingURL=Bola.js.map