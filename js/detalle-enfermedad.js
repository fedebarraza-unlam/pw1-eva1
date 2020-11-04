const regexCampoNumerico = /^[0-9]+$/;
const regexCampoDNI = /^[0-9]{8}$/;

let formDetalle;
let positivos = 0;
let sintomas = 0;

function mostrarOcultar(ocultar, valor) {
    if (valor) {
        document.getElementById(ocultar).style.display = "block";
    } else {
        document.getElementById(ocultar).style.display = "none";
    }
}

function contadorSintomas(tipoDeSintoma) {
    tipoDeSintoma = document.getElementsByName(tipoDeSintoma);
    let tieneValor = false;
    for (i in tipoDeSintoma) {
        if (tipoDeSintoma[i].checked) {
            tieneValor = true;
            sintomas++;
        }
        if (tieneValor && tipoDeSintoma[i].value == 'si') {
            positivos++;
        }
    }
}

function validar() {
    let mensajesError = "";

    limpiarForm();

    if (formDetalle.txtNombre.value == '') {
        mensajesError += "<p>El campo nombre no puede estar vacío</p>";
        formDetalle.grpNombre.classList.add("error");
    } else {
        formDetalle.grpNombre.classList.remove("error");
    }

    if (!regexCampoDNI.test(formDetalle.txtDni.value)) {
        mensajesError += "<p>El campo DNI no cumple los requisitos</p>";
        formDetalle.grpDni.classList.add("error");
    } else {
        formDetalle.grpDni.classList.remove("error");
    }

    if (!regexCampoNumerico.test(formDetalle.txtTelefono.value)) {
        mensajesError += "<p>El campo teléfono no cumple los requisitos</p>";
        formDetalle.grpTelefono.classList.add("error");
    } else {
        formDetalle.grpTelefono.classList.remove("error");
    }

    contadorSintomas("fiebre")
    contadorSintomas("cabeza")
    contadorSintomas("tos")
    contadorSintomas("garganta")
    contadorSintomas("respirar")

    if (sintomas < 5) {
        mensajesError += "<p>Debe seleccionar todos los síntomas</p>";
    }

    if (mensajesError) {
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    }

    alert("El formulario fue completado correctamente. " + positivos + " síntomas de COVID-19 fueron registrados");
    return true;
}

function limpiarForm() {
    formDetalle.mensaje.innerHTML = '';
    positivos = 0;
    sintomas = 0;
}

function iniciar() {
    formDetalle = {};

    // Set Nombre
    formDetalle.grpNombre = document.getElementById("grpNombre");
    formDetalle.txtNombre = document.getElementById("nombre");

    // Set DNI
    formDetalle.grpDni = document.getElementById("grpDni");
    formDetalle.txtDni = document.getElementById("dni");

    // Set Telefono
    formDetalle.grpTelefono = document.getElementById("grpTelefono");
    formDetalle.txtTelefono = document.getElementById("tel");

    // Set Mensaje
    formDetalle.mensaje = document.getElementById("mensaje");
}

iniciar();