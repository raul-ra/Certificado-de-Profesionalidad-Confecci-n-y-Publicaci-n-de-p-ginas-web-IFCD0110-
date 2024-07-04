

# Calculation Problems in Javascript

This project contains two calculation problems implemented in Javascript. The problems are solved using basic Javascript functions and presented in a simple web page. Below are the descriptions of both problems and their solutions.

## Problem 1: LCM in the Barracks

### Problem Statement
If at a certain moment in a barracks there are fewer than 600 soldiers and they can be grouped in groups of 2, 3, 5, or 10, how many soldiers are in the barracks?

### Solution
To solve this problem, the Least Common Multiple (LCM) of the numbers 2, 3, 5, and 10 must be calculated. The multiples of this LCM that are less than 600 will be the possible numbers of soldiers in the barracks.

### Implementation
A function is defined to calculate the LCM of two numbers and another to calculate the GCD (Greatest Common Divisor) of two numbers. Then, a loop is used to find all multiples of the LCM less than 600.

### Step-by-Step
1. **Define the functions:** Two functions are defined, one to calculate the LCM (Least Common Multiple) and another to calculate the GCD (Greatest Common Divisor) of two numbers.
2. **Calculate the LCM:** The LCM of the numbers 2, 3, 5, and 10 is calculated using the previously defined functions.
3. **Define the limit:** The upper limit is set to 600.
4. **Create an array for the results:** An empty array is initialized to store the multiples of 30 that are less than 600.
5. **Iterate and find multiples:** A loop is used to find all multiples of 30 less than 600 and add them to the array.
6. **Display the result:** The result is shown in the console and in the HTML element with id 'resultado'.

## Problem 2: Sum and Average of Numbers

### Problem Statement
Calculate the sum and average of a group of numbers. The user must enter the number of numbers to calculate and then input the numbers.

### Solution
The user is asked to enter the number of numbers to calculate. Then, the user is asked to input each number. The sum and average of the entered numbers are calculated.

### Implementation
A function is defined to ask the user for the numbers, calculate the sum and average of the entered numbers, and display the results.

### Step-by-Step
1. **How many numbers to calculate:** The value of the input with id 'cantidad' is obtained and converted to an integer using `parseInt`.
2. **Ask for numbers:** An empty array `numeros` is initialized to store the numbers the user inputs. A `for` loop is used to iterate `cantidad` times and ask the user to input a number in each iteration.
3. **Calculate the sum of the numbers:** The `reduce` method is used on the `numeros` array to sum all the elements.
4. **Calculate the average of the entered numbers:** The sum of the numbers is divided by the length of the `numeros` array to get the average.
5. **Display the result:** The content of the element with id 'resultado2' is updated to show the sum and the average. An `alert` is shown with the sum and the average.
6. **Prevent form submission:** The function returns `false` to prevent the form from being submitted and the page from reloading.

## Project Structure

- `index.html`: Contains the structure of the web page and references to the JavaScript and CSS files.
- `MCMproblem.js`: Contains the JavaScript code to solve problem 1.
- `CalculoSumayMedia.js`: Contains the JavaScript code to solve problem 2.
- `Problemasconjavascript.css`: Contains the CSS styles for the web page.

## Usage

1. Clone this repository.
2. Open the `index.html` file in your web browser.
3. Interact with the problems presented on the page.

## Notes

- Make sure to have JavaScript enabled in your browser.
- The results are displayed on the page and via alerts.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

