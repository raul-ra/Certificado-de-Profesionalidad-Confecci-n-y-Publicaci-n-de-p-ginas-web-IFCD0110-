// Agregamos event listeners a los botones para que llamen a las funciones correspondientes cuando se haga clic en ellos
document.getElementById('botonContar').addEventListener('click', contarVocales);
document.getElementById('botonLimpiar').addEventListener('click', limpiarEntrada);

// Función que cuenta las vocales en la frase ingresada
function contarVocales() {
    // Obtenemos el valor del input
    const frase = document.getElementById('fraseInput').value;

    // Inicializamos un objeto para contar las vocales
    const contadorVocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0 };
    let vocalesEncontradas = false; // Variable para verificar si se encontraron vocales

    // Inicializamos una variable para contar el total de letras
    let totalLetras = 0;

    // Expresión regular para verificar si un carácter es una letra
    const letras = /[a-zA-Z]/; 
    // Recorremos cada carácter de la frase
    for (let caracter of frase) {
        // Si el carácter es una vocal, incrementamos su conteo
        if (contadorVocales.hasOwnProperty(caracter)) {
            contadorVocales[caracter]++;
            // Indicamos que se encontró al menos una vocal
            vocalesEncontradas = true; 
        }
        // Si el carácter es una letra, incrementamos el contador de letras
        if (letras.test(caracter)) {
            totalLetras++;
        }
    }

    // Si no se encontraron vocales, mostramos un mensaje
    if (!vocalesEncontradas) {
        document.getElementById('textoResultado').innerHTML = "No se encontraron vocales.";
    } else {
        // Si se encontraron vocales, construimos el texto del resultado
        let textoResultado = '';
        for (let [vocal, contador] of Object.entries(contadorVocales)) {
            if (contador > 0) {
                textoResultado += `${vocal} = ${contador}<br>`;
            }
        }
        document.getElementById('textoResultado').innerHTML = textoResultado;
    }

    // Mostramos el total de letras
    document.getElementById('totalCaracteres').innerHTML = "Total de letras: " + totalLetras;

    // Mostramos la caja de resultados
    document.getElementById('cajaResultado').style.display = 'block';
}

// Función que limpia el input y oculta la caja de resultados
function limpiarEntrada() {
    // Limpiamos el input y ocultamos la caja de resultados
    document.getElementById('fraseInput').value = ''; 
    // Ocultamos la caja de resultados
    document.getElementById('cajaResultado').style.display = 'none'; 
}
