import Arc from "./Arc.js";
class Particula extends Arc {
    raio;
    velocidadeX;
    velocidadeY;
    vida;
    constructor(canvas, x, y, raio, velocidadeX, velocidadeY, cor = "white", vida = 1) {
        super(canvas, x, y, raio, velocidadeX, velocidadeY, cor);
        this.raio = raio;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY;
        this.vida = vida;
    }
    update() {
        if (this.vida > 0) {
            this.x += this.velocidadeX;
            this.y += this.velocidadeY;
            this.vida -= 0.05;
        }
    }
    get getVida() {
        return this.vida;
    }
}
export default Particula;
//# sourceMappingURL=Particula.js.map