/* Listening DOM Content loaded. */
document.addEventListener("DOMContentLoaded", function (event) {

    /* Getting object of `boton_ingreso` */
    let loginButton = document.getElementById('boton_ingreso');

    /* Verifying if button is valid. */
    if (loginButton) {
        /* Registering listener to handle Click event */
        loginButton.addEventListener('click', ingreso)
    }


    /* Getting object of `boton_enviar` */
    let sendButton = document.getElementById('boton_enviar');

    /* Verifying if button is valid */
    if (sendButton) {
        /* Registering listener to handle Click event */
        sendButton.addEventListener('click', recibirMensaje)
    }

});

function recibirMensaje(e) {
    /* Preventing default action */
    /* In this case the default action is call the fetch of form. */
    e.preventDefault()

    var email = document.getElementById("ingreso_email").value;
    var mensaje = document.getElementById("texto_mensaje").value;

    /* Validating email and message, checking if not have spaces and if is major to 0 */
    let validEmail = email && email.trim().length > 0;
    let validMessage = mensaje && mensaje.trim().length > 0;

    /* If both true, continue. */
    if (validEmail && validMessage) {
        alert("Su mensaje se ha mandado con exito")
        email = "";
        mensaje = "";
    } else {
        alert("Debe completar los campos de email y mensaje antes de enviar")
    }
};

function ingreso(e) {
    /* Preventing default action */
    /* In this case the default action is call the fetch of form. */
    e.preventDefault()

    var nombre = document.getElementById("nombre_index").value;
    localStorage.setItem("Nombre", nombre);
    window.location.href = "games.html"
};
function salir() {
    localStorage.clear();
    location.href = "index.html";
};
