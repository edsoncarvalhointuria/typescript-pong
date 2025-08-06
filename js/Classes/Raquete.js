import CanvasObject from "./CanvasObject.js";
class Raquete extends CanvasObject {
    largura;
    altura;
    pontos = 0;
    _cor;
    dificuldade = 0.05;
    constructor(canvas, x, y, largura, altura, cor = "white") {
        super(canvas, x, y, cor);
        this.largura = largura;
        this.altura = altura;
        this._cor = cor;
    }
    update(y, oponente = false) {
        if (!oponente)
            this.y = y - this.altura / 2;
        else {
            if (this.y !== y)
                this.y += (y - this.altura / 2 - this.y) * this.dificuldade;
        }
    }
    draw() {
        super.draw();
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
    reset() {
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
    get getLargura() {
        return this.largura;
    }
    get getAltura() {
        return this.altura;
    }
    get getPontos() {
        return this.pontos;
    }
    set setPontos(value) {
        this.pontos = value;
    }
}
export default Raquete;
//# sourceMappingURL=Raquete.js.map