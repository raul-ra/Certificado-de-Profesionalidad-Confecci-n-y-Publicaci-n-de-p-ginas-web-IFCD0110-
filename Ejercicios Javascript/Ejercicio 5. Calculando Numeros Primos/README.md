# Exercise 5: Calculating Prime Numbers

## Exercise Description

This exercise involves creating a form that captures a range of numbers and calculates all the prime numbers within that range. The form includes two input fields to define the range ("From" and "To") and buttons to calculate the prime numbers and clear the form.

## Project Files

- `calcularNumerosPrimos.html`
- `calcularNumerosPrimos.css`
- `calcularNumerosPrimos.js`

## File Descriptions

### HTML File (`calcularNumerosPrimos.html`)

This file contains the basic structure of the form and the necessary elements to capture the range of numbers. The main elements include:

- Number fields (`input`) to capture the range "From" and "To".
- Buttons to calculate the prime numbers and clear the form.
- A container (`div`) to display the calculated prime numbers.

### CSS File (`calcularNumerosPrimos.css`)

This file contains the CSS styles to format the page. The styles include:

- Setting the font and general spacing of the page.
- Styles for headers (`h1` and `h2`).
- Styles for buttons, including hover states.
- Styles for the form and its elements, including labels and input fields.
- Styles for the results container.
- Styles for the code block (`pre` and `code`) to make it look like in a code editor.
- Responsive styles to improve display on mobile devices.

### JavaScript File (`calcularNumerosPrimos.js`)

This file contains the JavaScript code that handles the logic of the exercise. The main functions include:

1. **Adding Event Listeners**: Events are added to the "Calculate" and "Clear" buttons to call the corresponding functions when clicked.

2. **Function esPrimo**:
   - Determines if a number is prime.

3. **Function calcularPrimos**:
   - Retrieves the values from the "From" and "To" input fields.
   - Calculates the prime numbers within the specified range.
   - Displays the prime numbers in the results container.

4. **Function limpiarFormulario**:
   - Clears the form values.
   - Hides the results container.

## Usage Instructions

1. **Calculate Prime Numbers**:
   - Enter the range of numbers in the corresponding fields.
   - Click the "Calculate" button.
   - The result will show the prime numbers within the specified range.

2. **Clear**:
   - Click the "Clear" button to erase the form and the result.

## Step-by-Step Explanation

1. **Adding Event Listeners**:
   - Events are added to the "Calculate" and "Clear" buttons to call the corresponding functions when clicked.

2. **Function calcularPrimos**:
   - Retrieves the values from the "From" and "To" input fields.
   - Checks each number within the range to determine if it is prime.
   - If a number is prime, it is added to the list of prime numbers.
   - Displays the prime numbers in the results container.

3. **Function limpiarFormulario**:
   - Clears the form values.
   - Hides the results container.
  
----------------------------------------------------------------

# Ejercicio 5: Calculando Números Primos

## Descripción del ejercicio

Este ejercicio consiste en crear un formulario que capture un rango de números y calcule todos los números primos dentro de ese rango. El formulario incluye dos campos de entrada para definir el rango ("Desde" y "Hasta") y botones para calcular los números primos y limpiar el formulario.

## Archivos del proyecto

- `calcularNumerosPrimos.html`
- `calcularNumerosPrimos.css`
- `calcularNumerosPrimos.js`

## Descripción de los archivos

### Archivo HTML (`calcularNumerosPrimos.html`)

Este archivo contiene la estructura básica del formulario y los elementos necesarios para capturar el rango de números. Los elementos principales incluyen:

- Campos de número (`input`) para capturar el rango "Desde" y "Hasta".
- Botones para calcular los números primos y limpiar el formulario.
- Un contenedor (`div`) para mostrar los números primos calculados.

### Archivo CSS (`calcularNumerosPrimos.css`)

Este archivo contiene los estilos CSS para dar formato a la página. Los estilos incluyen:

- Configuración de la fuente y el espaciado general de la página.
- Estilos para encabezados (`h1` y `h2`).
- Estilos para botones, incluyendo estados de hover.
- Estilos para el formulario y sus elementos, incluyendo etiquetas y campos de entrada.
- Estilos para el contenedor de resultados.
- Estilos para el bloque de código (`pre` y `code`) para que se vea como en un editor de código.
- Estilos responsivos para mejorar la visualización en dispositivos móviles.

### Archivo JavaScript (`calcularNumerosPrimos.js`)

Este archivo contiene el código JavaScript que maneja la lógica del ejercicio. Las funciones principales incluyen:

1. **Agregar Event Listeners**: Se añaden eventos a los botones "Calcular" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Función esPrimo**:
   - Determina si un número es primo.

3. **Función calcularPrimos**:
   - Obtiene los valores de los campos de entrada "Desde" y "Hasta".
   - Calcula los números primos dentro del rango especificado.
   - Muestra los números primos en el contenedor de resultados.

4. **Función limpiarFormulario**:
   - Limpia los valores del formulario.
   - Oculta el contenedor de resultados.

## Instrucciones de uso

1. **Calcular Números Primos**:
   - Introduce el rango de números en los campos correspondientes.
   - Haz clic en el botón "Calcular".
   - El resultado mostrará los números primos dentro del rango especificado.

2. **Limpiar**:
   - Haz clic en el botón "Limpiar" para borrar el formulario y el resultado.

## Explicación paso a paso

1. **Agregar Event Listeners**:
   - Se añaden eventos a los botones "Calcular" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Función calcularPrimos**:
   - Obtiene los valores de los campos de entrada "Desde" y "Hasta".
   - Verifica cada número dentro del rango para determinar si es primo.
   - Si un número es primo, se agrega a la lista de números primos.
   - Muestra los números primos en el contenedor de resultados.

3. **Función limpiarFormulario**:
   - Limpia los valores del formulario.
   - Oculta el contenedor de resultados.
