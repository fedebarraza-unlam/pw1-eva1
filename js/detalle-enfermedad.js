var regexCampoNumerico=/^[0-9]+$/
var regexCampoDNI=/^[0-9]{8}$/
var positivos = 0;
var sintomas = 0;
let formContacto;

function mostrarOcultar(ocultar, valor){
    if(valor){
        document.getElementById(ocultar).style.display="block";
    }
    if(!valor){
        document.getElementById(ocultar).style.display="none";
    }
}

function contadorSintomas(tipoDeSintoma){
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
        grpNombre.classList.add("error");
        mensajesError += "<p>El campo nombre no puede estar vacío</p>"
    }else{
        grpNombre.classList.remove("error");
    }
    if(!regexCampoDNI.test(document.getElementById("dni").value)){
        error = true;
        grpDni.classList.add("error");
        mensajesError += "<p>El campo DNI no cumple los requisitos</p>";
    }else{
        grpDni.classList.remove("error");
    }
    if(!regexCampoNumerico.test(document.getElementById("tel").value)){
        error = true;
        grpTelefono.classList.add("error");
        mensajesError += "<p>El campo teléfono no cumple los requisitos</p>"
    }else{
        grpTelefono.classList.remove("error");
    }

    contadorSintomas("fiebre")
    contadorSintomas("cabeza")
    contadorSintomas("tos")
    contadorSintomas("garganta")
    contadorSintomas("respirar")
    
    if(sintomas<5){
        error = true;
        mensajesError+="<p>Debe seleccionar todos los síntomas</p>";
    }

    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        alert("El formulario fue completado correctamente. " +positivos+ " síntomas de COVID-19 fueron registrados");
        return false;
    }
}
