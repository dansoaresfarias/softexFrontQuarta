var readlineSync = require('readline-sync');

console.log("Calculadora SOFTEX");
var op = readlineSync.question("Qual operacao voce deseja realizar? (1-soma | 2- Subtracao | 3- Multiplicacao | 4- Divisao) : ");
var num1 = readlineSync.questionFloat("Digite o primeiro numero: ");
var num2 = readlineSync.questionFloat("Digite o segundo numero: ");

if(op == "1"){
    var resultado = num1 + num2;
    console.log("Resultado: " + resultado);
}else if(op == "2"){
    var resultado = num1 - num2;
    console.log("Resultado: " + resultado);
}else if(op == "3"){
    var resultado = num1 * num2;
    console.log("Resultado: " + resultado);
}else if(op == "4"){
    var resultado = num1 / num2;
    console.log("Resultado: " + resultado);
}else{
    console.log("Opção invalida!!!");
}
