const regexCampoEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const regexCampoTelefonoConSigno = /^[0-9]{4}\-[0-9]{4}$/;
const regexCampoTelefono = /^[0-9]{8}$/;

function validarTelefono(telefono) {
    return !regexCampoTelefonoConSigno.test(telefono) &&
        !regexCampoTelefono.test(telefono);
}

function validarEmail(email) {
    return !regexCampoEmail.test(email);
}