# 🏓 Pong com TypeScript Puro

![Adobe Express - 0806 (1)](https://github.com/user-attachments/assets/334454da-438b-4766-b5f5-519ef62ff91b)

---

### ✨ Sobre

Este projeto é uma recriação moderna do clássico Pong, desenvolvido inteiramente com **TypeScript puro** e a **API do HTML5 Canvas**, sem o uso de frameworks de frontend. O objetivo principal foi aprofundar os conhecimentos fundamentais da web, construindo um motor de jogo 2D do zero.

Toda a lógica de renderização, física dos objetos e interatividade foi implementada manualmente para demonstrar um entendimento profundo de como os jogos funcionam por baixo dos panos.

📌 **Jogue agora:** [Pong TypeScript](https://edsoncarvalhointuria.github.io/typescript-pong/)

---

### 🛠️ Funcionalidades

-   **Motor de Jogo Customizado:** Lógica de `gameLoop` construída com `requestAnimationFrame` para animações fluidas.
-   **Física Realista:** Todo o movimento é baseado em `deltaTime` para garantir uma velocidade consistente em qualquer monitor.
-   **IA Dinâmica:** O oponente possui uma inteligência artificial simples que reage à posição da bola, com uma dificuldade que simula o comportamento humano.
-   **Controle Preciso:** A raquete do jogador responde diretamente aos movimentos do mouse.
-   **Sistema de Som:** Efeitos sonoros de rebatida e pontuação implementados com **Tone.js**, importado via tag `<script>`.
-   **Arquitetura Orientada a Objetos:** O jogo é estruturado com classes para `Bola`, `Raquete` e outros elementos, demonstrando um design de software limpo e encapsulado.

---

### 🚀 Tecnologias Utilizadas

-   **TypeScript**
-   **HTML5** (com a tag `<canvas>`)
-   **CSS**
-   **JavaScript (ES6+)**
-   **Tone.js** (para áudio)

---

### 📦 Como Rodar o Projeto Localmente

Como este projeto usa TypeScript, é necessário compilá-lo para JavaScript antes de abrir no navegador.

```bash
# Clone este repositório
$ git clone [https://github.com/edsoncarvalhointuria/typescript-pong.git](https://github.com/edsoncarvalhointuria/typescript-pong.git)

# Acesse a pasta do projeto
$ cd typescript-pong

# Instale o compilador do TypeScript (se ainda não tiver)
$ npm install -g typescript

# Compile os arquivos .ts para .js
$ npx tsc

# Abra o arquivo index.html no seu navegador!
```

---

### 💌 Contato

**Edson Carvalho Inturia**

<p align="left">  
<a href="mailto:edsoncarvalhointuria@gmail.com" title="Gmail">  
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white" alt="Gmail"/>  
</a>  
<a href="https://br.linkedin.com/in/edson-carvalho-inturia-1442a0129" title="LinkedIn">  
  <img src="https://img.shields.io/badge/-LinkedIn-0e76a8?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/>  
</a> 
</p>

Obrigado pela visita!
