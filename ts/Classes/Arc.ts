import CanvasObject from "./CanvasObject.js";

abstract class Arc extends CanvasObject {
    constructor(
        canvas: HTMLCanvasElement,
        x: number,
        y: number,
        protected raio: number,
        protected velocidadeX: number,
        protected velocidadeY: number,
        cor: string = "white"
    ) {
        super(canvas, x, y, cor);
    }

    draw(): void {
        super.draw();
        this.ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
        this.ctx.fill();
    }
}

export default Arc;
