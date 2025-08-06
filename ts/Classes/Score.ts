import CanvasObject from "./CanvasObject.js";
import Raquete from "./Raquete.js";

class Score extends CanvasObject {
    constructor(
        canvas: HTMLCanvasElement,
        x: number,
        y: number,
        protected texto: string,
        cor: string = "white"
    ) {
        super(canvas, x, y, cor);
    }

    draw(newTexto: string): void {
        super.draw();
        this.ctx.font = "40px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText(newTexto, this.x, this.y);
    }
}

export default Score;
