function exponenciacao() {
    var base = parseInt(document.getElementById("base").value);
    var expoente = parseInt(document.getElementById("expoente").value);
    var resultado = base**expoente;
    document.getElementById("resultadoExp").innerHTML = "<b>Resultado: </b>" + resultado;
}

function fatorial() {
    var num = parseInt(document.getElementById("numFat").value);
    try {
        var resultadoFat = 1;
        if(num<0) throw "Não existe fatorial de um número NEGATIVO!";
        for (let index = num; index >= 1; index--) {
            resultadoFat = resultadoFat * index;        
        }
        document.getElementById("resultadoFat").innerHTML = "<b>Resultado: </b>" + resultadoFat;        
    } catch (error) {
        document.getElementById("resultadoFat").innerHTML = error;
    }
    
}