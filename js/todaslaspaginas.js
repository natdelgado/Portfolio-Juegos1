function recibirMensaje(){
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

function ingreso(){
    var nombre = document.getElementById("nombre_index").value;
    localStorage.setItem("Nombre", nombre);
    location.href="games.html";
};
function salir(){ 
    localStorage.clear();
    location.href="index.html";
};
