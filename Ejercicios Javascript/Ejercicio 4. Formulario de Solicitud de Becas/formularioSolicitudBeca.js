// Agregamos event listeners a los botones para que llamen a las funciones correspondientes cuando se haga clic en ellos
document.getElementById('calculateScholarship').addEventListener('click', calcularBeca);
document.getElementById('clearForm').addEventListener('click', limpiarFormulario);

// Función que calcula la beca según la edad del estudiante y los ingresos de los padres
function calcularBeca() {
    // Obtenemos los valores de los campos de entrada
    const nombre = document.getElementById('name').value;
    const edad = parseInt(document.getElementById('age').value);
    const ingresosPadres = parseInt(document.getElementById('parentsIncome').value);
    let beca = 0;

    // Calculamos la beca según las reglas definidas
    if (edad >= 14 && edad < 18 && ingresosPadres <= 25000) {
        beca = 1000;
    } else if (edad >= 8 && edad <= 13 && ingresosPadres <= 25000) {
        beca = 1800;
    } else if (edad >= 3 && edad <= 7 && ingresosPadres <= 25000) {
        beca = 2200;
    }

    // Mostramos el resultado según el valor de la beca
    if (beca == 0) {
        document.getElementById('resultText').innerHTML = "No cumple con los requisitos.";
        document.getElementById('scholarship').value = 0;
    } else {
        document.getElementById('scholarship').value = beca;
        document.getElementById('resultText').innerHTML = `El estudiante ${nombre} recibe una beca de ${beca} euros.`;
    }

    // Mostramos la caja de resultados
    document.getElementById('resultBox').style.display = 'block';
}

// Función que limpia los valores del formulario y oculta el contenedor de resultados
function limpiarFormulario() {
    document.getElementById('scholarshipForm').reset();
    document.getElementById('scholarship').value = ''; // Asegurarse de que el campo Beca esté vacío
    document.getElementById('resultBox').style.display = 'none';
}
