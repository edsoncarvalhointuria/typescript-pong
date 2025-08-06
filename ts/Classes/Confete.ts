import Arc from "./Arc.js";

class Confete extends Arc {
    update() {
        this.y += this.velocidadeY;
        this.x += Math.random() * this.velocidadeX - this.velocidadeX / 2;
        if (this.y > this.canvas.height) this.y = 0;
    }
}

export default Confete;
