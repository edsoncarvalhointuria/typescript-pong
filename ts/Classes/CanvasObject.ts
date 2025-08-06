abstract class CanvasObject {
    protected ctx: CanvasRenderingContext2D;
    protected xInicial: number;
    protected yInicial: number;
    constructor(
        protected canvas: HTMLCanvasElement,
        protected x: number,
        protected y: number,
        protected cor: string = "white"
    ) {
        this.ctx = canvas.getContext("2d")!;
        this.xInicial = x;
        this.yInicial = y;
    }

    draw(texto?: string): void {
        this.ctx.fillStyle = this.cor;
        this.ctx.beginPath();
    }

    reset() {
        this.x = this.xInicial;
        this.y = this.yInicial;
    }

    get getX(): number {
        return this.x;
    }
    get getY(): number {
        return this.y;
    }
    get getCor(): string {
        return this.cor;
    }
}

export default CanvasObject;
