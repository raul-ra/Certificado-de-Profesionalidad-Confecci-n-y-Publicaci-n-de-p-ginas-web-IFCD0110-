//Calcular suma y media de un grupo de 10 números.

//1- ¿Cuántos números quieres calcular? = x
//2- Pedir x números
//3- Calcular la suma de los números
//4- Calcular la media de los números introducidos
//5- Mostrar el resultado con un alert

//----------------------------------------------------------------------------------------------------------------------------------

function calcularSumaYMedia() {
    // 1. Cuántos números quieres calcular = x
    // Obtener el valor del input con id 'cantidad' y convertirlo a un entero
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // 2. Pedir x números
    // Inicializar un array para almacenar los números que el usuario va a ingresar
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        // Mostrar un prompt para que el usuario ingrese cada número
        let num = parseFloat(prompt('Ingresa el número ' + (i + 1) + ':'));
        // Agregar el número ingresado al array 'numeros'
        numeros.push(num);
    }

    // 3. Calcular la suma de los x números
    // Usar el método reduce para sumar todos los elementos del array 'numeros'
    let suma = numeros.reduce((a, b) => a + b, 0);

    // 4. Calcular la media de los números introducidos
    // Dividir la suma de los números por la cantidad de números
    let media = suma / numeros.length;

    // 5. Mostrar el resultado con un alert
    // Actualizar el contenido del elemento con id 'resultado2' con la suma y la media
    document.getElementById('resultado2').innerText = "Suma: " + suma + ", Media: " + media;
    // Mostrar un alert con la suma y la media
    alert("Suma: " + suma + ", Media: " + media);

    // Prevenir el envío del formulario para que la página no se recargue
    return false;
}

// Función para limpiar el resultado
function limpiarResultado2() {
    document.getElementById('resultado2').innerText = '';
}
