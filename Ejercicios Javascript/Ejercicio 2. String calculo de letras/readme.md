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
