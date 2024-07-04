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
