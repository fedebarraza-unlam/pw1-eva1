var regexCampoEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTelefonoConSigno = /^[0-9]{4}\-[0-9]{4}$/
var regexCampoTelefono = /^[0-9]{8}$/
var maxLenght = 1000;
document.getElementById("caracteresRestantes").value = maxLenght;

function contarTeclas(){
    var textArea = document.getElementById("consulta");
    if(textArea.value.length > maxLenght){
        textArea.value = textArea.value.substring(0, maxLenght);
    }else{
        document.getElementById("caracteresRestantes").value = maxLenght - textArea.value.length;
    }
}

function validar(){
    var error = false;
    var mensajesError = "";
    if(document.getElementById("nombre").value==''){
        error = true;
        mensajesError += "<p>El campo nombre no puede estar vacío</p>"
    }
    if(document.getElementById("apellido").value==''){
        error = true;
        mensajesError+= "<p>El campo Apellido no puede estar vacío</p>"
    }
    if(!regexCampoTelefonoConSigno.test(document.getElementById("telefono").value) && !regexCampoTelefono.test(document.getElementById("telefono").value) ){
        error = true;
        mensajesError += "<p>El campo Telefono no cumple con su formato</p>";
    }
    if(!regexCampoEmail.test(document.getElementById("email").value)){
        error = true;
        mensajesError += "<p>El campo Email no cumple con su formato</p>";
    }
    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }
    if(!error){
        return false;
    }
}