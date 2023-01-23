function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras mayusculas y minisculas
    // m = tome en cuenta multiples lineas
    // g = toma en cuenta toda la linea o la oracion
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    // i = es para que tome letras mayusculas y minisculas
    // m = tome en cuenta multiples lineas
    // g = toma en cuenta toda la linea o la oracion
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    limpiar();
    alert("Mensaje copiado");
}

function limpiar(){
    document.getElementById("textoEncriptado").value = "";
}