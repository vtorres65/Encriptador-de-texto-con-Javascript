const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".cajaMensaje");
const informacion = document.querySelector(".informacion");

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function ocultar(elemento){
    document.querySelector(elemento).style.display = "none";
}

function mostrar(elemento){
    document.querySelector(elemento).style.display = "block";
}

function copiarTexto(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.mensaje.writeText(mensaje.value);
}

function btnEncriptar(){
    const encriptacion = encriptar(textArea.value);
    if(isValid(encriptacion) && encriptacion != ""){
        mensaje.innerHTML = encriptacion;
        textArea.value = "";
        informacion.style.color = "green";
        mostrar(".copiar"); 
    }
    else{
        informacion.style.color = "red";
    }
}

function encriptar(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function btnDesencriptar(){
    const desencriptacion = desencriptar(textArea.value);
    if(isValid(desencriptacion) && desencriptacion != ""){
        mensaje.innerHTML = desencriptacion;
        textArea.value = "";
        informacion.style.color = "green";
    }
    else{
        informacion.style.color = "red";
    }
}     

function desencriptar(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function isValid(texto) {
    return texto ? !/[^a-z\sñ]/.test(texto) : true;
}