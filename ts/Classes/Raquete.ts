import CanvasObject from "./CanvasObject.js";

class Raquete extends CanvasObject {
    protected pontos: number = 0;
    protected _cor: string;
    protected dificuldade: number = 0.05;
    constructor(
        canvas: HTMLCanvasElement,
        x: number,
        y: number,
        protected largura: number,
        protected altura: number,
        cor: string = "white"
    ) {
        super(canvas, x, y, cor);
        this._cor = cor;
    }

    update(y: number, oponente = false) {
        if (!oponente) this.y = y - this.altura / 2;
        else {
            if (this.y !== y)
                this.y += (y - this.altura / 2 - this.y) * this.dificuldade;
        }
    }

    draw(): void {
        super.draw();
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }

    reset(): void {
        super.reset();
        this.cor = this._cor;
        this.dificuldade = 0.05;
        this.pontos = 0;
    }

    modoFuria() {
        this.dificuldade = 0.11;
        this.cor = "crimson";
    }

    sairModoFuria() {
        this.dificuldade = 0.09;
        this.cor = this._cor;
    }

    get getLargura(): number {
        return this.largura;
    }
    get getAltura(): number {
        return this.altura;
    }
    get getPontos(): number {
        return this.pontos;
    }
    set setPontos(value: number) {
        this.pontos = value;
    }
}

export default Raquete;
