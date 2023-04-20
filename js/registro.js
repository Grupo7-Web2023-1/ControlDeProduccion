function validarFormulario() {
    var contraseña = document.getElementById("password").value;
    var confirmarContraseña = document.getElementById("confirm-password").value;

    if (contraseña.length >= 8 || contraseña != confirmarContraseña) {
        // Las contraseñas no coinciden, mostrar mensaje de error
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    }
    if (a) window.open("registrado.html");
}
