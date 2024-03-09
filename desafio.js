const texto_area = document.querySelector("#texto-area");
const encriptado_area = document.querySelector("#encriptadoArea");

const cod_encriptado = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
const cod_desencriptado = [
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
    ["ai", "a"],
    ["enter", "e"],
];

function solo_texto(e){
     letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghaijklmnopqrstuvxyz"; 
     key = e.keyCode || e.which;
     tecla = String.fromCharCode(key).toString();  
     
     especiales = [8,13];
     tecla_especial = false
     for( var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
     }
     if(letras.indexOf(tecla)== -1 && !tecla_especial)
     alert("Ingresa solo texto");
    return false;
} 
function botonEncriptar(){
    
    const texto = encriptar(texto_area.value);
    encriptado_area.value = texto;
   
}
function encriptar(fraseEncriptada){
    for(let i = 0; i < cod_encriptado.length; i++){
        if(fraseEncriptada.includes(cod_encriptado[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                cod_encriptado[i][0],
                cod_encriptado[i][1]
            );
        } 
    } 
    return fraseEncriptada;
}
function botonDesencriptar(){
    const texto = desencriptar(texto_area.value);
    encriptado_area.value = texto;
}
function desencriptar(fraseDesencriptada){
    for(let i = 0; i < cod_desencriptado.length; i++){
        if(fraseDesencriptada.includes(cod_desencriptado[i][0])){
            fraseDesencriptada=fraseDesencriptada.replaceAll(
                cod_desencriptado[i][0],
                cod_desencriptado[i][1]
            );
        } 
    }
    return fraseDesencriptada;
}
function copiar(){
    let copia_texto = document.getElementById("encriptadoArea");

    copia_texto.select();
    copia_texto.setSelectionRange(0,99999);
    document.execCommand('copy');
    
}
function quitar(){
    document.getElementById("encriptadoArea").style.display = "block";
    document.getElementById("imagen").style.display = "none";
}
function mostrar(){
    document.getElementById("BotonCopiar").style.display = 'block';
}