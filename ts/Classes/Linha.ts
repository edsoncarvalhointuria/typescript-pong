import CanvasObject from "./CanvasObject.js";

class Linha extends CanvasObject {
    constructor(
        canvas: HTMLCanvasElement,
        x: number,
        y: number,
        protected xContorno: number,
        protected yContorno: number,
        protected largura: number,
        protected espacoLinha: number[],
        cor: string = "white"
    ) {
        super(canvas, x, y, cor);
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
