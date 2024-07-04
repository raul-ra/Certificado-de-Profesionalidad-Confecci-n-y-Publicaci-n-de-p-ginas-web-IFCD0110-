# Problemas de Cálculo en Javascript

Este proyecto contiene dos problemas de cálculo implementados en Javascript. Los problemas se resuelven utilizando funciones básicas de Javascript y se presentan en una página web simple. A continuación se describen ambos problemas y su solución.

## Problema 1: MCM en el Cuartel

### Enunciado
Si en un momento determinado en un cuartel hay menos de 600 soldados y se pueden agrupar en grupos de 2, 3, 5 o 10, ¿Cuántos soldados hay en el cuartel?

### Solución
Para resolver este problema, se debe calcular el Mínimo Común Múltiplo (MCM) de los números 2, 3, 5 y 10. Los múltiplos de este MCM que son menores de 600 serán los posibles números de soldados en el cuartel.

### Implementación
Se define una función para calcular el MCM de dos números y otra para calcular el MCD (Máximo Común Divisor) de dos números. Luego, se utiliza un bucle para encontrar todos los múltiplos del MCM menores de 600.

### Paso a paso
1. **Definir las funciones:** Se definen dos funciones, una para calcular el MCM (Mínimo Común Múltiplo) y otra para calcular el MCD (Máximo Común Divisor) de dos números.
2. **Calcular el MCM:** Se calcula el MCM de los números 2, 3, 5 y 10 usando las funciones definidas anteriormente.
3. **Definir el límite:** Se establece el límite superior en 600.
4. **Crear un array para los resultados:** Se inicializa un array vacío para almacenar los múltiplos de 30 que son menores de 600.
5. **Iterar y encontrar múltiplos:** Se usa un bucle para encontrar todos los múltiplos de 30 menores de 600 y se agregan al array.
6. **Mostrar el resultado:** Se muestra el resultado en la consola y en el elemento HTML con id 'resultado'.

## Problema 2: Suma y Media de Números

### Enunciado
Calcular la suma y media de un grupo de números. El usuario debe ingresar la cantidad de números a calcular y luego introducir los números.

### Solución
Se solicita al usuario que ingrese la cantidad de números a calcular. Luego, se pide al usuario que introduzca cada uno de los números. Se calcula la suma y la media de los números introducidos.

### Implementación
Se define una función para pedir al usuario los números, calcular la suma y la media de los números introducidos, y mostrar los resultados.

### Paso a paso

1. **Cuántos números quieres calcular:** Se obtiene el valor del input con id 'cantidad' y se convierte a un número entero usando `parseInt`.
2. **Pedir números:** Se inicializa un array vacío `numeros` para almacenar los números que el usuario ingrese. Se usa un bucle `for` para iterar `cantidad` de veces y pedir al usuario que ingrese un número en cada iteración.
3. **Calcular la suma de los números:** Se usa el método `reduce` en el array `numeros` para sumar todos los elementos.
4. **Calcular la media de los números introducidos:** Se divide la suma de los números por la longitud del array `numeros` para obtener la media.
5. **Mostrar el resultado:** Se actualiza el contenido del elemento con id 'resultado2' para mostrar la suma y la media. Se muestra un `alert` con la suma y la media.
6. **Prevenir el envío del formulario:** La función retorna `false` para evitar que el formulario se envíe y la página se recargue.

## Estructura del Proyecto

- `index.html`: Contiene la estructura de la página web y las referencias a los archivos JavaScript y CSS.
- `MCMproblem.js`: Contiene el código JavaScript para resolver el problema 1.
- `CalculoSumayMedia.js`: Contiene el código JavaScript para resolver el problema 2.
- `Problemasconjavascript.css`: Contiene los estilos CSS para la página web.

## Uso

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador web.
3. Interactúa con los problemas presentados en la página.

## Notas

- Asegúrate de tener habilitado JavaScript en tu navegador.
- Los resultados se muestran en la página y mediante alertas.
