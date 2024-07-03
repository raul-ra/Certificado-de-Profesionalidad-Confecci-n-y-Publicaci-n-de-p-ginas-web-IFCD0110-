//  Problema Minimo Comun Divisor

// Si en un momento determinado en un cuartel hay menos de 600 soldados y se pueden agrupar en grupos de 2 o de 3 o de 5 o de 10,
// ¿Cuántos soldados hay en el cuartel?.

// Este problema debe cumplir dos condiciones:

//El número de soldados debe ser menor de 600.
//El número de soldados se puede agrupar en grupos de 2, 3, 5 y 10, lo que significa que el número debe ser divisible por 2, 3, 5 y 10.

// Primero hay que calcular el MCM(Minimo comun multiple) de 2, 3, 5 y 10.

// El MCM se obtiene tomando los mayores exponentes de los factores primos involucrados:

//2:2
//3:3
//5:5
//10:2*5

//MCM = 2 * 3 * 5 = 30

//Formula para calcular el MCM:
//MCM(a,b)= a*b/MCD(a,b)


//El número de soldados debe ser un múltiplo de 30. Además, debe ser menor de 600.
// Los múltiplos de 30 menores de 600 son: 30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570.

//--------------------------------------------------------------------------------------------------------------------------------------

function calcularSoldados() {
    // Función para calcular el MCM de dos números.
    function mcm(a, b) {
        return (a * b) / mcd(a, b);
    }

    // Función para calcular el MCD (Máximo Común Divisor) de dos números.
    function mcd(a, b) {
        if (b === 0) {
            return a;
        }
        return mcd(b, a % b);
    }

    // Calculamos el MCM de 2, 3, 5 y 10.
    let base = mcm(mcm(mcm(2, 3), 5), 10);

    // Definimos el límite superior.
    const limiteSuperior = 600;

    // Creamos un array para almacenar los resultados.
    let soldados = [];

    // Iteramos desde 30 hasta el límite superior.
    for (let i = base; i < limiteSuperior; i += base) {
        soldados.push(i);
    }

    // Realizamos un console log para calcular el número de soldados que hay en la base.
    console.log("Los posibles números de soldados en el cuartel son: ", soldados);

    // Mostrar el resultado en la página.
    document.getElementById('resultado').innerText = "Los posibles números de soldados en el cuartel son: " + soldados.join(', ');
}

// Función para limpiar el resultado
function limpiarResultado() {
    document.getElementById('resultado').innerText = '';
}
