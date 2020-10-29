var regexCampoNumerico=/^[0-9]+$/
var regexCampoDNI=/^[0-9]{8}$/
var positivos = 0;

function mostrarOcultar(ocultar, valor){
    if(valor){
        document.getElementById(ocultar).style.display="block";
    }
    if(!valor){
        document.getElementById(ocultar).style.display="none";
    }
}

function sintomaPositivo(){
    positivos++;
}

function validar(){
    var error = false;
    var mensajesError = "";
    var sintomas = 0;
    var sintomaActual;
    console.log("hola");
    if(document.getElementById("nombre").value==''){
        error = true;
        
        mensajesError += "<p>El campo nombre no puede estar vacío</p>"
    }
    if(!regexCampoDNI.test(document.getElementById("dni").value)){
        error = true;
        mensajesError += "<p>El campo DNI no cumple los requisitos</p>";
    }
    if(!regexCampoNumerico.test(document.getElementById("tel").value)){
        error = true;
        mensajesError += "<p>El campo teléfono no cumple los requisitos</p>";
    }

    sintomaActual = document.getElementsByName("fiebre");
    for(i in sintomaActual){
        if(sintomaActual[i].checked){
            sintomas++;
        }
    }

    sintomaActual = document.getElementsByName("cabeza");
    for(i in sintomaActual){
        if(sintomaActual[i].checked){
            sintomas++;
        }
    }

    sintomaActual = document.getElementsByName("tos");
    for(i in sintomaActual){
        if(sintomaActual[i].checked){
            sintomas++;
        }
    }

    sintomaActual = document.getElementsByName("garganta");
    for(i in sintomaActual){
        if(sintomaActual[i].checked){
            sintomas++;
        }
    }

    sintomaActual = document.getElementsByName("respirar");
    for(i in sintomaActual){
        if(sintomaActual[i].checked){
            sintomas++;
        }
    }
    if(sintomas<5){
        error = true;
        mensajesError+="<p>Debe seleccionar los síntomas</p>";
    }

    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        alert("El formulario fue completado correctamente. " +positivos+ " síntomas de COVID-19 fueron registrados");
        return false;
    }
}