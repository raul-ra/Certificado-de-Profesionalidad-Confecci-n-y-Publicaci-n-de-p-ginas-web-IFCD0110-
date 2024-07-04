# Exercise 3: Replace Letters and Words

This exercise involves replacing all instances of the letters `t`, `n`, and `p` with the word "curso" in a sentence entered by the user. It also allows reversing the changes to restore the original sentence and clearing the result.

## Project Files

- `reemplazarletrasypalabras.html`
- `reemplazarletrasypalabras.css`
- `reemplazarletrasypalabras.js`

## File Descriptions

### HTML File (`reemplazarletrasypalabras.html`)

This file contains the basic structure of the webpage and the elements needed to interact with the user. The main elements include:

- A text input (`input`) for the user to enter a sentence.
- Buttons to execute the replace, revert, and clear functions.
- A container (`div`) to display the results.
- A section with a brief explanation and a code block (`pre` and `code`) showing the JavaScript code used to solve the exercise.

### CSS File (`reemplazarletrasypalabras.css`)

This file contains the CSS styles to format the page. The styles include:

- General font and spacing configuration of the page.
- Styles for headers (`h1` and `h2`).
- Styles for buttons, including hover states.
- Styles for the form and its elements.
- Styles for the result container.
- Styles for the code block (`pre` and `code`) to look like in a code editor.
- Responsive styles to improve display on mobile devices.

### JavaScript File (`reemplazarletrasypalabras.js`)

This file contains the JavaScript code that handles the logic of the exercise. The main functions include:

1. **Add Event Listeners**: Events are added to the "Replace", "Revert", and "Clear" buttons to call the corresponding functions when clicked.

2. **Global Variables**: Two global variables are defined to store the original sentence and the modified sentence.

3. **replaceWords Function**:
   - Gets the value of the text input.
   - Replaces all instances of the letters `t`, `n`, and `p` (both uppercase and lowercase) with the word "curso".
   - Displays the modified sentence in the result container and makes the container visible.

4. **revertWords Function**:
   - Restores the original sentence in the result container.

5. **clearInputReplace Function**:
   - Clears the text input value.
   - Hides the result container.

## Usage Instructions

1. **Replace**:
   - Enter a sentence in the text input.
   - Press the "Replace" button.
   - The result will show the sentence with all instances of the letters `t`, `n`, and `p` replaced with the word "curso".

2. **Revert**:
   - After replacing the letters, press the "Revert" button.
   - The result will show the original sentence entered.

3. **Clear**:
   - Press the "Clear" button to clear the text input and the result.

## Step-by-Step Explanation

1. **Add Event Listeners**:
   - Used to call the replace, revert, and clear functions when the respective buttons are clicked.

2. **Global Variables**:
   - Two global variables are defined to store the original sentence and the modified sentence.

3. **replaceWords Function**:
   - Gets the sentence entered by the user.
   - Uses a regular expression to find all instances of the letters `t`, `n`, `p` (both uppercase and lowercase) and replaces them with the word "curso".
   - Displays the modified sentence in the result container and makes the container visible.

4. **revertWords Function**:
   - Restores the original sentence by displaying the original content in the result container.

5. **clearInputReplace Function**:
   - Clears the content of the text input.
   - Hides the result container.

This documentation provides a detailed description of how the exercise works and how to interact with it.

-------------------------------------------------------------------------------------------------------------------------------

# Ejercicio 3: Reemplazar letras y palabras

Este ejercicio consiste en reemplazar todas las letras `t`, `n` y `p` por la palabra "curso" en una frase ingresada por el usuario. También permite revertir los cambios para restaurar la frase original y limpiar el resultado.

## Archivos del proyecto

- `reemplazarletrasypalabras.html`
- `reemplazarletrasypalabras.css`
- `reemplazarletrasypalabras.js`

## Descripción de los archivos

### Archivo HTML (`reemplazarletrasypalabras.html`)

Este archivo contiene la estructura básica de la página web y los elementos necesarios para interactuar con el usuario. Los elementos principales incluyen:

- Un campo de texto (`input`) para que el usuario ingrese una frase.
- Botones para ejecutar las funciones de reemplazar, revertir y limpiar.
- Un contenedor (`div`) para mostrar los resultados.
- Una sección con una breve explicación y un bloque de código (`pre` y `code`) que muestra el código JavaScript utilizado para resolver el ejercicio.

### Archivo CSS (`reemplazarletrasypalabras.css`)

Este archivo contiene los estilos CSS para dar formato a la página. Los estilos incluyen:

- Configuración de la fuente y el espaciado general de la página.
- Estilos para los encabezados (`h1` y `h2`).
- Estilos para los botones, incluyendo estados de hover.
- Estilos para el formulario y sus elementos.
- Estilos para el contenedor de resultados.
- Estilos para el bloque de código (`pre` y `code`) para que se vea como en un editor de código.
- Estilos responsivos para mejorar la visualización en dispositivos móviles.

### Archivo JavaScript (`reemplazarletrasypalabras.js`)

Este archivo contiene el código JavaScript que maneja la lógica del ejercicio. Las funciones principales incluyen:

1. **Agregar Event Listeners**: Se añaden eventos a los botones "Reemplazar", "Revertir" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Variables globales**: Se definen dos variables globales para almacenar la frase original y la frase modificada.

3. **Función reemplazarPalabras**:
   - Obtiene el valor del campo de texto.
   - Reemplaza todas las letras `t`, `n`, `p` (tanto mayúsculas como minúsculas) por la palabra "curso".
   - Muestra la frase modificada en el contenedor de resultados y hace visible dicho contenedor.

4. **Función revertirPalabras**:
   - Restaura la frase original en el contenedor de resultados.

5. **Función limpiarEntradaReplace**:
   - Limpia el valor del campo de texto.
   - Oculta el contenedor de resultados.

## Instrucciones de uso

1. **Reemplazar**:
   - Ingresa una frase en el campo de texto.
   - Presiona el botón "Reemplazar".
   - El resultado mostrará la frase con todas las letras `t`, `n` y `p` reemplazadas por la palabra "curso".

2. **Revertir**:
   - Después de haber reemplazado las letras, presiona el botón "Revertir".
   - El resultado mostrará la frase original ingresada.

3. **Limpiar**:
   - Presiona el botón "Limpiar" para borrar el campo de texto y el resultado.

## Explicación paso a paso

1. **Agregar Event Listeners**:
   - Se utilizan para llamar a las funciones de reemplazar, revertir y limpiar cuando se hace clic en los respectivos botones.

2. **Función reemplazarPalabras**:
   - Obtiene la frase ingresada por el usuario.
   - Utiliza una expresión regular para buscar todas las ocurrencias de las letras `t`, `n` y `p` y las reemplaza por la palabra "curso".
   - Muestra la frase modificada en el contenedor de resultados y hace visible dicho contenedor.

3. **Función revertirPalabras**:
   - Restaura la frase original mostrando el contenido original en el contenedor de resultados.

4. **Función limpiarEntradaReplace**:
   - Limpia el contenido del campo de texto y oculta el contenedor de resultados.

Esta documentación proporciona una descripción detallada de cómo funciona el ejercicio y cómo interactuar con él.
