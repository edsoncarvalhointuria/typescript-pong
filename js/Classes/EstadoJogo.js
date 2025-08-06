class EstadoJogo {
    textElement;
    mensagens;
    buttonElement;
    estadoAtual = "inicial";
    constructor(textElement, mensagens, buttonElement) {
        this.textElement = textElement;
        this.mensagens = mensagens;
        this.buttonElement = buttonElement;
    }
    esconderElemento() {
        this.textElement.classList.add("remove");
    }
    mostrarElemento(mensagem) {
        this.textElement.textContent = mensagem;
        this.textElement.classList.remove("remove");
    }
    play() {
        if (this.estadoAtual === "inicial" ||
            this.estadoAtual === "pause" ||
            this.estadoAtual === "restart") {
            this.estadoAtual = "play";
            this.esconderElemento();
        }
    }
    pause() {
        if (this.estadoAtual === "play") {
            this.estadoAtual = "pause";
            this.mostrarElemento(this.mensagens.pause);
        }
    }
    restart() {
        this.estadoAtual = "restart";
        this.textElement.classList.remove("winner");
        this.textElement.classList.remove("game-over");
        if (this.buttonElement)
            this.buttonElement.style = "none";
    }
    inicial() {
        this.estadoAtual = "inicial";
        this.mostrarElemento(this.mensagens.inicial);
    }
    gameOver(vitoria) {
        if (vitoria) {
            this.estadoAtual = "vitoria";
            this.mostrarElemento(this.mensagens.vitoria);
            this.textElement.classList.add("winner");
            if (this.buttonElement)
                this.buttonElement.style.display = "block";
        }
        else {
            this.estadoAtual = "game-over";
            this.mostrarElemento(this.mensagens["game-over"]);
            this.textElement.classList.add("game-over");
            if (this.buttonElement)
                this.buttonElement.style.display = "block";
        }
    }
    isPlay() {
        return this.estadoAtual === "play";
    }
    isPause() {
        return this.estadoAtual === "pause" || this.estadoAtual === "inicial";
    }
    isRestart() {
        return this.estadoAtual === "restart";
    }
}
export default EstadoJogo;
//# sourceMappingURL=EstadoJogo.js.map