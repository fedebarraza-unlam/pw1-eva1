const maxLenght = 200;

let formContacto;

function contarTeclas() {
    const length = formContacto.txtConsulta.value.length;
    if (length > maxLenght) {
        formContacto.txtConsulta.value = textArea.value.substring(0, maxLenght);
    } else {
        let caracteresRestantes = maxLenght - length;
        formContacto.caracteresRestantes.innerHTML = caracteresRestantes;
        if (caracteresRestantes < 50) {
            formContacto.caracteresRestantes.classList.add("error");
        } else {
            formContacto.caracteresRestantes.classList.remove("error");
        }
    }
}

function validar() {
    let mensajesError = '';

    if (formContacto.txtNombre.value == '') {
        mensajesError += "<p>El campo Nombre no puede estar vacío</p>";
        formContacto.grpNombre.classList.add("error");
    } else {
        formContacto.grpNombre.classList.remove("error");
    }

    if (formContacto.txtApellido.value == '') {
        mensajesError += "<p>El campo Apellido no puede estar vacío</p>"
        formContacto.grpApellido.classList.add("error");
    } else {
        formContacto.grpApellido.classList.remove("error");
    }

    if (validarTelefono(formContacto.txtTelefono.value)) {
        mensajesError += "<p>El campo Telefono no cumple con su formato</p>";
        formContacto.grpTelefono.classList.add("error");
    } else {
        formContacto.grpTelefono.classList.remove("error");
    }

    if (validarEmail(formContacto.txtEmail.value)) {
        mensajesError += "<p>El campo Email no cumple con su formato</p>";
        formContacto.grpEmail.classList.add("error");
    } else {
        formContacto.grpEmail.classList.remove("error");
    }

    if (mensajesError) {
        formContacto.mensaje.innerHTML = mensajesError;
        return false;
    }

    return true;
}

function iniciar() {
    formContacto = {};

    // Set Nombre
    formContacto.grpNombre = document.getElementById("grpNombre");
    formContacto.txtNombre = document.getElementById("nombre");

    // Set Apellido
    formContacto.grpApellido = document.getElementById("grpApellido");
    formContacto.txtApellido = document.getElementById("apellido");

    // Set Telefono
    formContacto.grpTelefono = document.getElementById("grpTelefono");
    formContacto.txtTelefono = document.getElementById("telefono");

    // Set Email
    formContacto.grpEmail = document.getElementById("grpEmail");
    formContacto.txtEmail = document.getElementById("email");

    // Set Consulta
    formContacto.txtConsulta = document.getElementById("consulta");
    formContacto.caracteresRestantes = document.getElementById("caracteresRestantes");

    // Set Mensaje
    formContacto.mensaje = document.getElementById("mensaje");

    // Valores predefinidos
    formContacto.caracteresRestantes.innerHTML = maxLenght;
}

iniciar();