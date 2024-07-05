// Agregamos event listeners a los botones para que llamen a las funciones correspondientes cuando se haga clic en ellos
document.getElementById('calculatePrimes').addEventListener('click', calcularPrimos);
document.getElementById('clearForm').addEventListener('click', limpiarFormulario);

// Función que determina si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

// Función que calcula los números primos dentro del rango especificado
function calcularPrimos() {
    // Obtenemos los valores de los campos de entrada
    const desde = parseInt(document.getElementById('from').value);
    const hasta = parseInt(document.getElementById('to').value);
    let primos = [];

    // Iteramos desde el valor 'desde' hasta el valor 'hasta' y verificamos si cada número es primo
    for (let i = desde; i <= hasta; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    // Mostramos los números primos en el contenedor de resultados
    document.getElementById('resultText').innerHTML = primos.join(', ');
    document.getElementById('resultBox').style.display = 'block';
}

// Función que limpia los valores del formulario y oculta el contenedor de resultados
function limpiarFormulario() {
    document.getElementById('primeForm').reset();
    document.getElementById('resultBox').style.display = 'none';
}
