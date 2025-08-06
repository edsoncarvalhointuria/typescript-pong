class CanvasObject {
    canvas;
    x;
    y;
    cor;
    ctx;
    xInicial;
    yInicial;
    constructor(canvas, x, y, cor = "white") {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.ctx = canvas.getContext("2d");
        this.xInicial = x;
        this.yInicial = y;
    }
    draw(texto) {
        this.ctx.fillStyle = this.cor;
        this.ctx.beginPath();
    }
    reset() {
        this.x = this.xInicial;
        this.y = this.yInicial;
    }
    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    }
    get getCor() {
        return this.cor;
    }
}
export default CanvasObject;
//# sourceMappingURL=CanvasObject.js.map