const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector('.copiar');

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar (){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgrounImage = "none";
}


function encriptar(stringEncriptado){
    let matrizcodigo = [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
            if(stringEncriptado.includes(matrizcodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
                
            }
    }
    return stringEncriptado
}

//--------------------------------------------------//


function btnDesencriptar (){
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
}


function desencriptar(stringDesencriptar){
    let matrizcodigo = [["e", "enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]]
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
            if(stringDesencriptar.includes(matrizcodigo[i][1])){
                stringDesencriptar = stringDesencriptar.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
                
            }
    }
    return stringDesencriptar
}

//-----------------copiar----------------------------//
// Función para copiar el texto
function copiarAlPortapapeles() {
    // Selecciona el texto del textarea
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');
}
btnCopiar.addEventListener('click', copiarAlPortapapeles);
