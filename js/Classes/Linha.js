import CanvasObject from "./CanvasObject.js";
class Linha extends CanvasObject {
    xContorno;
    yContorno;
    largura;
    espacoLinha;
    constructor(canvas, x, y, xContorno, yContorno, largura, espacoLinha, cor = "white") {
        super(canvas, x, y, cor);
        this.xContorno = xContorno;
        this.yContorno = yContorno;
        this.largura = largura;
        this.espacoLinha = espacoLinha;
    }
    draw() {
        super.draw();
        this.ctx.strokeStyle = this.cor;
        this.ctx.lineWidth = this.largura;
        this.ctx.setLineDash(this.espacoLinha);
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.xContorno, this.yContorno);
        this.ctx.stroke();
    }
}
export default Linha;
//# sourceMappingURL=Linha.js.map