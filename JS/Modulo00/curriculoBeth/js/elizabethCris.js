function menu(sessao) {
    if (sessao == "identificacao") {
        document.getElementById("identificacao").scrollIntoView();
    } else if (sessao == "formacao"){
        document.getElementById("formacao").scrollIntoView();
    } else if (sessao == "experiencia") {
        document.getElementById("experiencia").scrollIntoView();
    }
}