var readlineSync = require('readline-sync');

var nome = readlineSync.question("Qual seu nome? ");

console.log(saudacao());

var nota1 = readlineSync.questionFloat("Digite a sua primeira nota? ");
var nota2 = readlineSync.questionFloat("Digite a sua segunda nota? ");
console.log(quantoRestaNota(nota1, nota2));

var nota3 = readlineSync.questionFloat("Digite a sua terceira nota? ");

var mediaAluno = media(nota1, nota2, nota3);

console.log("Sua média foi " + mediaAluno);

var aprovado = (media) => {
    if (media >= 7.0) {
        return "aprovado carai!";
    } else {
        return "reprovado porra, va estudar!";
    }
}

console.log(nome + " voce foi " + aprovado(mediaAluno));

function saudacao() {
    return "Ola aluno(a) " + nome;
}

function quantoRestaNota(n1, n2) {
    var n3 = 21 - n1 - n2;
    return "Voce precisa de " + n3 + " como sua ultima nota.";
}

function media(b1, b2, b3) {
    return (b1 + b2 + b3) / 3;
}

