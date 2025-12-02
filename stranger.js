let numeroAleatório = 0;
let tentativas = 0;
let númeroMáximoTentativas = 10;
let menorQueCem = 0;
let maiorQueCem = 100;

function gerarNúmeroAleatório() {
    numeroAleatório = parseInt(Math.random() * 100)
    console.log(numeroAleatório)

}

gerarNúmeroAleatório()

function chutar() {
    let input = document.getElementById("input").value

    if (input > numeroAleatório) {
        tentativas++
        let mensagemMenor = "Chute um número Menor!"
        document.getElementById("mensagens").textContent = mensagemMenor
        let tentativ = "Número de tentativas: " + tentativas
        document.getElementById("tentativas").textContent = tentativ
    }

    if (input < numeroAleatório) {
        tentativas++
        let mensagemMaior = "Chute um número Maior!"
        document.getElementById("mensagens").textContent = mensagemMaior
        let tentativa = "Número de tentativas: " + tentativas
        document.getElementById("tentativas").textContent = tentativa
    }

    if (input == numeroAleatório) {
        let mensagemSucesso = "Você acertou! O número é " + numeroAleatório + "."
        document.getElementById("mensagens").textContent = mensagemSucesso
        document.getElementById("tentativas").textContent = "Com " + tentativas + " tentativas."
    }

    if (tentativas > númeroMáximoTentativas) {
        let mensagemMaior = ""
        document.getElementById("mensagens").textContent = mensagemMaior
        let tentativa = ""
        document.getElementById("tentativas").textContent = tentativa
        let mensagemMenor = ""
        document.getElementById("mensagens").textContent = mensagemMenor
    }

    if (input < menorQueCem || input > maiorQueCem) {
        document.getElementById("mensagens").textContent = "Número inválido. Digite um número de 1 a 100!"
        document.getElementById("tentativas").textContent = ""
    }

    if (input == "") {
        document.getElementById("mensagens").textContent = "Digite algo!"
        document.getElementById("tentativas").textContent = ""
    }

    document.getElementById("input").value = ""
}