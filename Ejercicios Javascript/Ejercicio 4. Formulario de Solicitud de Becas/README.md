# Exercise 4: Scholarship Application Form

## Exercise Description

This exercise involves creating a form that captures the information of a student: name, age, parents' income, and scholarship amount. Depending on the student's age and parents' income, the amount of the scholarship the student will receive is calculated.

## Scholarship Rules

1. If the student's age is greater than 14 and less than 18 years old, and the parents' income is equal to or less than 25,000 euros, the scholarship will be 1,000 euros.
2. If the student's age is between 8 and 13 years old, and the parents' income is equal to or less than 25,000 euros, the scholarship will be 1,800 euros.
3. If the student's age is between 3 and 7 years old, and the parents' income is equal to or less than 25,000 euros, the scholarship will be 2,200 euros.
4. If the student does not meet any of the above requirements, they will not receive any scholarship, and a message indicating that they do not meet the requirements will be displayed.

## Project Files

- `formularioSolicitudBeca.html`
- `formularioSolicitudBeca.css`
- `formularioSolicitudBeca.js`

## File Descriptions

### HTML File (`formularioSolicitudBeca.html`)

This file contains the basic structure of the form and the elements necessary to capture the user's information. The main elements include:

- Text fields (`input`) to capture the student's name, age, parents' income, and scholarship amount.
- Buttons to calculate and clear the form.
- A container (`div`) to display the calculated scholarship result.

### CSS File (`formularioSolicitudBeca.css`)

This file contains the CSS styles to format the page. The styles include:

- General page font and spacing settings.
- Styles for the headings (`h1` and `h2`).
- Styles for the buttons, including hover states.
- Styles for the form and its elements, including labels and input fields.
- Styles for the results container.
- Styles for the code block (`pre` and `code`) to make it look like in a code editor.
- Responsive styles to improve the display on mobile devices.

### JavaScript File (`formularioSolicitudBeca.js`)

This file contains the JavaScript code that handles the logic of the exercise. The main functions include:

1. **Adding Event Listeners**: Events are added to the "Calculate Scholarship" and "Clear" buttons to call the corresponding functions when clicked.

2. **Function calculateScholarship**:
   - Retrieves the values from the input fields: name, age, and parents' income.
   - Calculates the scholarship according to the defined rules.
   - Displays the scholarship amount in the scholarship field and in the results container.
   - If none of the requirements are met, a message indicating that the requirements are not met is displayed.
   - Makes the results container visible.

3. **Function clearForm**:
   - Clears the form values.
   - Hides the results container.

## Usage Instructions

1. **Calculate Scholarship**:
   - Enter the student's information in the corresponding fields.
   - Click the "Calculate Scholarship" button.
   - The result will show the scholarship amount according to the student's age and parents' income, or a message indicating that the requirements are not met.

2. **Clear**:
   - Click the "Clear" button to erase the form and the result.

## Step-by-Step Explanation

1. **Adding Event Listeners**:
   - Events are added to the "Calculate Scholarship" and "Clear" buttons to call the corresponding functions when clicked.

2. **Function calculateScholarship**:
   - Retrieves the values from the input fields: name, age, and parents' income.
   - Calculates the scholarship according to the defined rules:
     - If the age is between 14 and 17 years old (inclusive) and the parents' income is equal to or less than 25,000 euros, the scholarship is 1,000 euros.
     - If the age is between 8 and 13 years old (inclusive) and the parents' income is equal to or less than 25,000 euros, the scholarship is 1,800 euros.
     - If the age is between 3 and 7 years old (inclusive) and the parents' income is equal to or less than 25,000 euros, the scholarship is 2,200 euros.
     - If none of the requirements are met, a message indicating that the requirements are not met is displayed.
   - Displays the scholarship amount in the scholarship field and in the results container, or a message if the requirements are not met.
   - Makes the results container visible.

3. **Function clearForm**:
   - Clears the form values.
   - Hides the results container.


-----------------------------------------------------------------------------------------------------------------------

# Ejercicio 4: Formulario de Solicitud de Becas

## Descripción del ejercicio

Este ejercicio consiste en crear un formulario que capture la información de un estudiante: nombre, edad, ingresos de los padres y la beca. Dependiendo de la edad del estudiante y los ingresos de los padres, se calculará la cantidad de la beca que el estudiante recibirá.

## Reglas para la beca

1. Si la edad del estudiante es mayor de 14 y menor de 18 años, y los ingresos de los padres son iguales o menores a 25,000 euros, la beca será de 1,000 euros.
2. Si la edad del estudiante está comprendida entre 8 y 13 años, y los ingresos de los padres son iguales o menores a 25,000 euros, la beca será de 1,800 euros.
3. Si la edad del estudiante está comprendida entre 3 y 7 años, y los ingresos de los padres son iguales o menores a 25,000 euros, la beca será de 2,200 euros.
4. Si el estudiante no cumple con ninguno de los requisitos anteriores, no recibirá ninguna beca y se mostrará un mensaje indicando que no cumple con los requisitos.

## Archivos del proyecto

- `formularioSolicitudBeca.html`
- `formularioSolicitudBeca.css`
- `formularioSolicitudBeca.js`

## Descripción de los archivos

### Archivo HTML (`formularioSolicitudBeca.html`)

Este archivo contiene la estructura básica del formulario y los elementos necesarios para capturar la información del usuario. Los elementos principales incluyen:

- Campos de texto (`input`) para capturar el nombre, edad, ingresos de los padres y la beca del estudiante.
- Botones para calcular y limpiar el formulario.
- Un contenedor (`div`) para mostrar el resultado de la beca calculada.

### Archivo CSS (`formularioSolicitudBeca.css`)

Este archivo contiene los estilos CSS para dar formato a la página. Los estilos incluyen:

- Configuración de la fuente y el espaciado general de la página.
- Estilos para los encabezados (`h1` y `h2`).
- Estilos para los botones, incluyendo estados de hover.
- Estilos para el formulario y sus elementos, incluyendo etiquetas y campos de entrada.
- Estilos para el contenedor de resultados.
- Estilos para el bloque de código (`pre` y `code`) para que se vea como en un editor de código.
- Estilos responsivos para mejorar la visualización en dispositivos móviles.

### Archivo JavaScript (`formularioSolicitudBeca.js`)

Este archivo contiene el código JavaScript que maneja la lógica del ejercicio. Las funciones principales incluyen:

1. **Agregar Event Listeners**: Se añaden eventos a los botones "Calcular Beca" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Función calcularBeca**:
   - Obtiene los valores de los campos de entrada: nombre, edad e ingresos de los padres.
   - Calcula la beca según las reglas definidas.
   - Muestra el monto de la beca en el campo de beca y en el contenedor de resultados.
   - Si no cumple con ninguno de los requisitos, muestra un mensaje indicando que no cumple con los requisitos.
   - Hace visible el contenedor de resultados.

3. **Función limpiarFormulario**:
   - Limpia los valores del formulario.
   - Oculta el contenedor de resultados.

## Instrucciones de uso

1. **Calcular Beca**:
   - Introduce la información del estudiante en los campos correspondientes.
   - Haz clic en el botón "Calcular Beca".
   - El resultado mostrará el monto de la beca según la edad del estudiante y los ingresos de los padres, o un mensaje indicando que no cumple con los requisitos.

2. **Limpiar**:
   - Haz clic en el botón "Limpiar" para borrar el formulario y el resultado.

## Explicación paso a paso

1. **Agregar Event Listeners**:
   - Se añaden eventos a los botones "Calcular Beca" y "Limpiar" para que llamen a las funciones correspondientes cuando se hace clic en ellos.

2. **Función calcularBeca**:
   - Obtiene los valores de los campos de entrada: nombre, edad e ingresos de los padres.
   - Calcula la beca según las reglas definidas:
     - Si la edad está entre 14 y 17 años (inclusive) y los ingresos de los padres son menores o iguales a 25,000 euros, la beca es de 1,000 euros.
     - Si la edad está entre 8 y 13 años (inclusive) y los ingresos de los padres son menores o iguales a 25,000 euros, la beca es de 1,800 euros.
     - Si la edad está entre 3 y 7 años (inclusive) y los ingresos de los padres son menores o iguales a 25,000 euros, la beca es de 2,200 euros.
     - Si no cumple con ninguno de los requisitos, se muestra un mensaje indicando que no cumple con los requisitos.
   - Muestra el monto de la beca en el campo de beca y en el contenedor de resultados, o un mensaje si no cumple con los requisitos.
   - Hace visible el contenedor de resultados.

3. **Función limpiarFormulario**:
   - Limpia los valores del formulario.
   - Oculta el contenedor de resultados.