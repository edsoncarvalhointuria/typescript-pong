import CanvasObject from "./CanvasObject.js";
class Score extends CanvasObject {
    texto;
    constructor(canvas, x, y, texto, cor = "white") {
        super(canvas, x, y, cor);
        this.texto = texto;
    }
    draw(newTexto) {
        super.draw();
        this.ctx.font = "40px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText(newTexto, this.x, this.y);
    }
}
export default Score;
//# sourceMappingURL=Score.js.map