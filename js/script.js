function validaciones() {
    var retornoContra = validarPass();
    var retornoDireccion = validar_direccion();
    var retornoComuna = validar_comunas();
    var retornoNum = validar_telefono();
    var retornoWeb = validar_pag();
    return retornoContra && retornoDireccion && retornoComuna && retornoNum && retornoWeb;
}

function validarPass() {
    var inputClave1 = document.getElementById("input-clave1");
    var inputClave2 = document.getElementById("input-clave2");
    var errorClave1 = document.getElementById("error-clave1");
    var errorClave2 = document.getElementById("error-clave2");

    var contrasena = inputClave1.value.trim();
    var confirmContrasena = inputClave2.value.trim();

    var numeros = false;
    var letras = false;

    errorClave1.textContent = "";
    errorClave2.textContent = "";

    if (contrasena === "") {
        errorClave1.textContent = "La contraseña es obligatoria";
        errorClave1.className = "text-danger small";
        return false;
    } else if (contrasena.length < 3) {
        errorClave1.innerHTML = "La contraseña es muy corta <br> * Mínimo de 3 caracteres <br> * Máximo de 6 caracteres";
        errorClave1.className = "text-danger small";
        return false;
    } else if (contrasena.length > 12) {
        errorClave1.innerHTML = "La contraseña es muy larga <br> * Mínimo de 3 caracteres <br> * Máximo de 6 caracteres";
        errorClave1.className = "text-danger small";
        return false;
    }

    for (var i = 0; i < contrasena.length; i++) {
        var char = contrasena[i];
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            letras = true;
        } else if (char >= "0" && char <= "9") {
            numeros = true;
        }
    }

    if (!letras || !numeros) {
        errorClave1.textContent = "La contraseña debe contener letras y números";
        errorClave1.className = "text-danger small";
        return false;
    }

    if (confirmContrasena !== "") {
        if (contrasena !== confirmContrasena) {
            errorClave2.textContent = "¡Las contraseñas no coinciden!";
            errorClave2.className = "text-danger small";
            return false;
        }
    }

    errorClave1.textContent = "";
    errorClave2.textContent = "";
    return true;
}
/*
function validarMail() {
    var inputEmail = document.getElementById("mail").value;
    var divErrorMail = document.getElementById("error-mail");
    var posArroba = inputEmail.indexOf("@");
    var posPunto = inputEmail.lastIndexOf(".");
    var arCorreo = inputEmail.split(".");
    var ext = arCorreo[arCorreo.length - 1];

    if (posArroba > 0 && posPunto > posArroba && (ext.length > 1 && ext.length <= 3)) {
        divErrorMail.textContent = "";
        return true;
    } else {
        divErrorMail.textContent = "El formato del correo electrónico no es válido (Ej: xxxxx@gmail.com)";
        divErrorMail.className = "text-danger small";
        return false;
    }
}
*/
function validar_direccion() {
    var inputDireccion = document.getElementById("input-direccion").value.trim();
    var divErrorDirec = document.getElementById("error-direccion");

    if (inputDireccion === "") {
        divErrorDirec.textContent = "Por favor, ingrese una direccion!";
        divErrorDirec.className = "text-danger small";
        return false;
    } else {
        divErrorDirec.textContent = "";
        return true;
    }
}

function validar_comunas() {
    var comuna = document.getElementById("select-comunas").value;
    var ComError = document.getElementById("error-comunas");

    if (comuna === "") {
        ComError.textContent = "Por favor, seleccione una comuna";
        ComError.className = "text-danger small";
        return false;
    } else {
        ComError.textContent = "";
        return true;
    }
}

function validar_telefono() {
    var inputTelefono = document.getElementById("celular");
    var errorTelefono = document.getElementById("error-celular");
    var telefono = inputTelefono.value.trim();
    var posMas = telefono.indexOf("+569");
    var numtelf = 0;
    if (posMas === 0) {
        for (var i = posMas + 4; i < telefono.length; i++) {
            if (telefono[i] === ' ') {
                continue;
            }
            if (!isNaN(telefono[i])) {
                numtelf++;
            } else {
                break;
            }
        }
        if (numtelf === 8) {
            errorTelefono.innerHTML = "";
            return true;
        } else {
            errorTelefono.innerHTML = "Por favor ingrese un número de teléfono con formato correcto (+569 xxxx xxxx)";
            errorTelefono.className = "text-danger small";
            return false;
        }
    } else if (telefono === "") {
        errorTelefono.innerHTML = "Por favor ingrese un número de teléfono";
        errorTelefono.className = "text-danger small";
        return false;
    } else {
        errorTelefono.innerHTML = "¡Ingrese el numero en formato correcto! (+569 xxxx xxxx)";
        errorTelefono.className = "text-danger small";
        return false;
    }
}

function validar_pag() {
    var input = document.getElementById("input-pag");
    var error = document.getElementById("error-web");
    var value = input.value.trim();

    var isValid = false;

    if (value === "") {
        error.style.display = 'block';
        error.innerHTML = "Debe ingresar una URL!";
        return false;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        var restOfUrl = value.startsWith('https://') ? value.slice(8) : value.slice(7); 
        var posPunto = restOfUrl.indexOf(".");
        
        if (posPunto > 0 && posPunto < restOfUrl.length - 1) {
            isValid = true;
        }
    } else if (value.startsWith('www.')) {
        var restOfUrl = value.slice(4); 
        var posPunto = restOfUrl.indexOf(".");
        
        if (posPunto > 0 && posPunto < restOfUrl.length - 1) {
            isValid = true;
        }
    }

    if (isValid) {
        input.classList.remove('is-invalid');
        error.style.display = 'none';
    } else {
        input.classList.add('is-invalid');
        error.style.display = 'block';
        error.innerHTML = "Por favor, ingrese una URL válida (Ej: https://www.ejemplo.com)";
    }
    return isValid;
}


function validarHobbies() {
    var hobbiesList = document.getElementById('hobbiesList').children;
    var divErrorHobbies = document.getElementById('error-hobbies');

    if (hobbiesList.length >= 2) {
        divErrorHobbies.innerHTML = "";
        return true;
    } else {
        divErrorHobbies.innerHTML = "Debe agregar al menos 2 aficiones";
        divErrorHobbies.className = "text-danger small mt-1";
        return false;
    }
}

document.getElementById('addHobbyButton').addEventListener('click', function() {
    const hobbyInput = document.getElementById('hobbyInput');
    const hobbiesList = document.getElementById('hobbiesList');
    const hobby = hobbyInput.value.trim();

    if (hobby) {
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const hobbyText = document.createElement('span');
        hobbyText.textContent = hobby;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.style.marginLeft = '15px'; 
        deleteButton.addEventListener('click', function() {
            hobbiesList.removeChild(li);
            validarHobbies(); 
        });

        li.appendChild(hobbyText);
        li.appendChild(deleteButton);
        hobbiesList.appendChild(li);

        hobbyInput.value = '';

        validarHobbies();
    }
});
