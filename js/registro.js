function validarFormulario() {
    var contraseña = document.getElementById("password").value;
    var confirmarContraseña = document.getElementById("confirm-password").value;

    if (contraseña.length >= 8 || contraseña != confirmarContraseña) {
        // Las contraseñas no coinciden, mostrar mensaje de error
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    } else
        window.open("registrado.html");
}


function logear() {
    var contraseña = document.getElementById("password").value;
    var usuario = document.getElementById("username").value;

    if (usuario == 'admin' && contraseña == 'admin') {
        window.open("admin.html");
    }


    if (contraseña.length < 8) {
        // Las contraseñas no coinciden, mostrar mensaje de error
        alert("La contraseña es muy corta");
    } else if (usuario.length < 5) {
        alert('ingrese un usuario válido')
    } else {
        window.open("registrado.html");
    }
}