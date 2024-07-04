// Agrega event listeners a los botones para que llamen a las funciones correspondientes cuando se haga clic en ellos
document.getElementById('botonReemplazar').addEventListener('click', reemplazarPalabras);
document.getElementById('botonRevertir').addEventListener('click', revertirPalabras);
document.getElementById('botonLimpiarReplace').addEventListener('click', limpiarEntradaReplace);

// Variables globales para almacenar la frase original y la frase modificada
let fraseOriginal = '';
let fraseModificada = '';

// Función que reemplaza las letras 't', 'n', o 'p' por la palabra "curso"
function reemplazarPalabras() {
    // Obtiene el valor del input
    fraseOriginal = document.getElementById('fraseInputReplace').value;
    
    // Reemplaza las letras 't', 'n', 'p' (mayúsculas y minúsculas) por la palabra "curso"
    fraseModificada = fraseOriginal.replace(/[tnp]/gi, 'curso');

    // Muestra la frase modificada en el elemento con id 'textoResultadoReplace'
    document.getElementById('textoResultadoReplace').innerHTML = fraseModificada;
    // Hace visible la caja de resultados
    document.getElementById('cajaResultadoReplace').style.display = 'block';
}

// Función que revierte las palabras "curso" a su forma original
function revertirPalabras() {
    // Muestra la frase original en el elemento con id 'textoResultadoReplace'
    document.getElementById('textoResultadoReplace').innerHTML = fraseOriginal;
}

// Función que limpia el valor del input y oculta la caja de resultados
function limpiarEntradaReplace() {
    // Limpia el valor del input
    document.getElementById('fraseInputReplace').value = '';
    // Oculta la caja de resultados
    document.getElementById('cajaResultadoReplace').style.display = 'none';
}
