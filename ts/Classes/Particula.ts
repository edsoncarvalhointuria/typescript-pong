import Arc from "./Arc.js";

class Particula extends Arc {
    constructor(
        canvas: HTMLCanvasElement,
        x: number,
        y: number,
        protected raio: number,
        protected velocidadeX: number,
        protected velocidadeY: number,
        cor: string = "white",
        protected vida: number = 1
    ) {
        super(canvas, x, y, raio, velocidadeX, velocidadeY, cor);
    }

    update() {
        if (this.vida > 0) {
            this.x += this.velocidadeX;
            this.y += this.velocidadeY;
            this.vida -= 0.05;
        }
    }

    get getVida(): number {
        return this.vida;
    }
}

export default Particula;
