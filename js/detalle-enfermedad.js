var regexCampoNumerico=/^[0-9]+$/
var regexCampoDNI=/^[0-9]{8}$/
var positivos = 0;
var sintomas = 0;

function mostrarOcultar(ocultar, valor){
    if(valor){
        document.getElementById(ocultar).style.display="block";
    }
    if(!valor){
        document.getElementById(ocultar).style.display="none";
    }
}

function contadorSintomas(tipoDeSintoma, id){
    var tempSintoma = sintomas; 
    tipoDeSintoma = document.getElementsByName(tipoDeSintoma);
    for(i in tipoDeSintoma){
        if(tipoDeSintoma[i].checked){
            if(tipoDeSintoma[i].value=='si'){
                positivos++;
                sintomas++;
            }else{
                sintomas++;
            }
        }
    }
}

function validar(){
    var error = false;
    var mensajesError = "";
    if(document.getElementById("nombre").value==''){
        error = true;
        document.getElementById("nombre").style.borderColor="red";
        mensajesError += "<p>El campo nombre no puede estar vacío</p>"
    }
    if(!regexCampoDNI.test(document.getElementById("dni").value)){
        error = true;
        document.getElementById("dni").style.borderColor="red";
        mensajesError += "<p>El campo DNI no cumple los requisitos</p>";
    }
    if(!regexCampoNumerico.test(document.getElementById("tel").value)){
        error = true;
        document.getElementById("tel").style.borderColor="red";
        mensajesError += "<p>El campo teléfono no cumple los requisitos</p>"
    }

    contadorSintomas("fiebre", "1")
    contadorSintomas("cabeza", "2")
    contadorSintomas("tos", "3")
    contadorSintomas("garganta", "4")
    contadorSintomas("respirar", "5")
    
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