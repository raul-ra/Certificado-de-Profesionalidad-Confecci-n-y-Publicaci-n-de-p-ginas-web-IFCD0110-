# Exercise 2: Count Letters

This exercise involves counting the vowels (both uppercase and lowercase) in a sentence entered by the user. It also calculates the total number of letters in the sentence.

## Project Files

- `contadordevocales.html`
- `contadordevocales.css`
- `contadordevocales.js`

## File Descriptions

### HTML File (`contadordevocales.html`)

This file contains the basic structure of the webpage and the elements needed to interact with the user. The main elements include:

- A text input (`input`) for the user to enter a sentence.
- Buttons to execute the count and clear functions.
- A container (`div`) to display the results.
- A section with a brief explanation and a code block (`pre` and `code`) showing the JavaScript code used to solve the exercise.

### CSS File (`contadordevocales.css`)

This file contains the CSS styles to format the page. The styles include:

- General font and spacing configuration of the page.
- Styles for headers (`h1` and `h2`).
- Styles for buttons, including hover states.
- Styles for the form and its elements.
- Styles for the result container.
- Styles for the code block (`pre` and `code`) to look like in a code editor.
- Responsive styles to improve display on mobile devices.

### JavaScript File (`contadordevocales.js`)

This file contains the JavaScript code that handles the logic of the exercise. The main functions include:

1. **Add Event Listeners**: Events are added to the "Count" and "Clear" buttons to call the corresponding functions when clicked.

2. **countVowels Function**:
   - Gets the value of the text input.
   - Counts the vowels (both uppercase and lowercase) in the entered sentence.
   - Calculates the total number of letters in the sentence.
   - Displays the vowel count and the total number of letters in the result container.
   - Makes the result container visible.

3. **clearInput Function**:
   - Clears the text input value.
   - Hides the result container.

## Usage Instructions

1. **Count**:
   - Enter a sentence in the text input.
   - Press the "Count" button.
   - The result will show the count of vowels and the total number of letters in the entered sentence.

2. **Clear**:
   - Press the "Clear" button to clear the text input and the result.

## Step-by-Step Explanation

1. **Add Event Listeners**:
   - Used to call the count and clear functions when the respective buttons are clicked.

2. **countVowels Function**:
   - Gets the sentence entered by the user.
   - Initializes an object to count the vowels.
   - Iterates over each character of the sentence to check if it is a vowel, and if so, increments the corresponding count.
   - Calculates the total number of letters in the sentence.
   - If no vowels are found, displays a message indicating this.
   - If vowels are found, constructs the result text showing the count of each vowel and the total number of letters.
   - Displays the result in the result container and makes the container visible.

3. **clearInput Function**:
   - Clears the content of the text input.
   - Hides the result container.

This documentation provides a detailed description of how the exercise works and how to interact with it.

---------------------------------------------------------------------------------------------------------------------------------------

# Ejercicio 2: Contador de letras

Este ejercicio consiste en contar las vocales (tanto mayúsculas como minúsculas) en una frase ingresada por el usuario. También se calcula el número total de letras en la frase.

## Archivos del proyecto

- `contadordevocales.html`
- `contadordevocales.css`
- `contadordevocales.js`

## Descripción de los archivos

### Archivo HTML (`contadordevocales.html`)

Este archivo contiene la estructura básica de la página web y los elementos necesarios para interactuar con el usuario. Los elementos principales incluyen:

- Un campo de texto (`input`) para que el usuario ingrese una frase.
- Botones para ejecutar las funciones de contar y limpiar.
- Un contenedor (`div`) para mostrar los resultados.
- Una sección con una breve explicación y un bloque de código (`pre` y `code`) que muestra el código JavaScript utilizado para resolver el ejercicio.

### Archivo CSS (`contadordevocales.css`)

Este archivo contiene los estilos CSS para dar formato a la página. Los estilos incluyen:

- Configuración de la fuente y el espaciado general de la página.
- Estilos para los encabezados (`h1` y `h2`).
- Estilos para los botones, incluyendo estados de hover.
- Estilos para el formulario y sus elementos.
- Estilos para el contenedor de resultados.
- Estilos para el bloque de código (`pre` y `code`) para que se vea como en un editor de código.
- Estilos responsivos para mejorar la visualización en dispositivos móviles.

### Archivo JavaScript (`contadordevocales.js`)

Este archivo contiene el código JavaScript que maneja la lógica del ejercicio. Las funciones principales incluyen:

1. **Agregar Event Listeners**: Se añaden eventos a los botones "Contar" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Función contarVocales**:
   - Obtiene el valor del campo de texto.
   - Cuenta las vocales (tanto mayúsculas como minúsculas) en la frase ingresada.
   - Calcula el número total de letras en la frase.
   - Muestra el conteo de vocales y el número total de letras en el contenedor de resultados.
   - Hace visible el contenedor de resultados.

3. **Función limpiarEntrada**:
   - Limpia el valor del campo de texto.
   - Oculta el contenedor de resultados.

## Instrucciones de uso

1. **Contar**:
   - Ingresa una frase en el campo de texto.
   - Presiona el botón "Contar".
   - El resultado mostrará el conteo de vocales y el número total de letras en la frase ingresada.

2. **Limpiar**:
   - Presiona el botón "Limpiar" para borrar el campo de texto y el resultado.

## Explicación paso a paso

1. **Agregar Event Listeners**:
   - Se utilizan para llamar a las funciones de contar y limpiar cuando se hace clic en los respectivos botones.

2. **Función contarVocales**:
   - Obtiene la frase ingresada por el usuario.
   - Inicializa un objeto para contar las vocales.
   - Recorre cada carácter de la frase para verificar si es una vocal y, en tal caso, incrementa el conteo correspondiente.
   - Calcula el número total de letras en la frase.
   - Si no se encuentran vocales, muestra un mensaje indicando esto.
   - Si se encuentran vocales, construye el texto del resultado mostrando el conteo de cada vocal y el número total de letras.
   - Muestra el resultado en el contenedor de resultados y hace visible dicho contenedor.

3. **Función limpiarEntrada**:
   - Limpia el contenido del campo de texto.
   - Oculta el contenedor de resultados.

Esta documentación proporciona una descripción detallada de cómo funciona el ejercicio y cómo interactuar con él.
