import CanvasObject from "./CanvasObject.js";
class Arc extends CanvasObject {
    raio;
    velocidadeX;
    velocidadeY;
    constructor(canvas, x, y, raio, velocidadeX, velocidadeY, cor = "white") {
        super(canvas, x, y, cor);
        this.raio = raio;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY;
    }
    draw() {
        super.draw();
        this.ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
        this.ctx.fill();
    }
}
export default Arc;
//# sourceMappingURL=Arc.js.map