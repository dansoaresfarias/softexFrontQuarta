function calcCircu() {
    let raio = parseFloat(document.getElementById("raio").value);
    let resultado = 2.0 * 3.14159 * raio;
    document.getElementById("resultadoEsf").innerHTML = "<b>Resultado : </b>" + resultado;
}

function calcArea() {
    let raio = parseFloat(document.getElementById("raio").value);
    let resultado = 3.14159 * raio * raio;
    document.getElementById("resultadoEsf").innerHTML = "<b>Resultado : </b>" + resultado;
}

function calcVol() {
    let raio = parseFloat(document.getElementById("raio").value);
    let resultado = (3.14159 * raio * raio * raio) * 3/4;
    document.getElementById("resultadoEsf").innerHTML = "<b>Resultado : </b>" + resultado;
}