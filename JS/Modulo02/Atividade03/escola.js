function media() {
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var media = (n1+n2+n3)/3;
    if(media >= 7.0){
        document.getElementById("media").innerHTML = "<b>Média: </b>" + media + " | <b>APROVADO!</b>";
    }else{
        document.getElementById("media").innerHTML = "<b>Média: </b>" + media + " | <b>REPROVADO!</b>";
    }
}

function notaFaltante(){
    var n1 = parseFloat(document.getElementById("notafaltante1").value);
    var n2 = parseFloat(document.getElementById("notafaltante2").value);
    var n3 = 21 - n1 - n2;
    document.getElementById("notaFaltante").innerHTML = "<b>Falta Tira: </b>" + n3;
}