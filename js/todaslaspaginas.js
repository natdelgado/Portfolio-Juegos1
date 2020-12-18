
document.addEventListener("DOMContentLoaded", function (event) {

    let loginButton = document.getElementById('boton_ingreso');

    
    if (loginButton) {
       
        loginButton.addEventListener('click', ingreso)
    }

    let sendButton = document.getElementById('boton_enviar');

    if (sendButton) {
        sendButton.addEventListener('click', recibirMensaje)
    }

});

function recibirMensaje(e) {
 
    e.preventDefault()

    var email = document.getElementById("ingreso_email").value;
    var mensaje = document.getElementById("texto_mensaje").value;

    if (email !="" && mensaje!= "" ){
        alert("Su mensaje se ha mandado con exito") 
        email = "";
        mensaje= "";
    } else {
        alert("Debe completar los campos de email y mensaje antes de enviar")
    }
};

function ingreso(e) {
  
    e.preventDefault()

    var nombre = document.getElementById("nombre_index").value;
    localStorage.setItem("Nombre", nombre);
    window.location.href = "games.html"
};
function salir() {
    localStorage.clear();
    location.href = "index.html";
};
