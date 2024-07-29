# Formulario de Admisión Veterinaria

## Descripción del Proyecto

Este proyecto implementa un formulario de admisión veterinaria para registrar datos de mascotas y sus dueños. El formulario incluye validaciones de datos y almacenamiento en localStorage. Las validaciones aseguran la integridad de los datos y la seguridad contra inyecciones de scripts.

## Campos del Formulario

1. **Nombre del Dueño:**
   - Tipo: Texto
   - Longitud máxima: 25 caracteres
   - Validación: No se permiten caracteres especiales que puedan ser utilizados para inyección de scripts

2. **DNI:**
   - Tipo: Número
   - Validación: Comprobar y verificar mediante algoritmo específico (como el algoritmo de verificación del NIF/NIE español)

3. **Dirección:**
   - Tipo: Texto
   - Longitud máxima: 40 caracteres
   - Validación: No se permiten caracteres especiales que puedan ser utilizados para inyección de scripts

4. **Localidad:**
   - Tipo: Desplegable
   - Opciones: Localidades por código postal

5. **Provincia:**
   - Tipo: Desplegable
   - Opciones: 52 provincias

6. **Código Postal:**
   - Tipo: Número
   - Validación: Localidades por código postal

7. **Teléfono:**
   - Tipo: Número
   - Validación: 9 números más código de país

8. **Nombre del Animal:**
   - Tipo: Texto
   - Validación: No puede estar en blanco, no se permiten caracteres especiales que puedan ser utilizados para inyección de scripts

9. **Número de Chip:**
   - Tipo: Alfanumérico
   - Longitud: 15 caracteres
   - Validación: No se permiten caracteres especiales que puedan ser utilizados para inyección de scripts

10. **Fecha de Ingreso:**
    - Tipo: Fecha
    - Validación: Fecha del día que se ingresa el dato

11. **Fecha de Intervención Quirúrgica:**
    - Tipo: Fecha
    - Validación: Debe ser anterior a la fecha de ingreso

12. **Especie:**
    - Tipo: Desplegable
    - Opciones:
      - Perro
      - Gato
      - Reptil
      - Roedor
      - Ave
      - Caballo

13. **Raza:**
    - Tipo: Desplegable (dependiente de la especie seleccionada)

14. **Vacunación:**
    - Tipo: Desplegable
    - Opciones: Lista de vacunaciones por especie de animal

15. **Fecha de Vacunación:**
    - Tipo: Fecha
    - Validación: Igual o mayor a la fecha de ingreso

## Botones del Formulario

1. **Aceptar:**
   - Validación de datos: Si hay algún error, el cursor se situará en el campo con error.
   - Al aceptar:
     - Guardar datos del animal (número de chip, fecha de ingreso, especie, raza, nombre de animal, nombre del dueño y vacunación) en un array.
     - Mostrar ventana de confirmación: "¿Estás seguro de querer continuar?" con opciones "Sí" o "No".
       - Si se presiona "Sí": Guardar en el array y limpiar los campos.
       - Si se presiona "No": Devolver al formulario.

2. **Cancelar:**
   - Mostrar ventana de alerta: "¿Estás seguro de cancelar?" con opciones "Sí" o "No".
     - Si se presiona "Sí": Borrar los datos rellenados.
     - Si se presiona "No": Cerrar ventana de alerta y continuar con la carga de datos.

3. **Visualizar Fichas:**
   - Mostrar los datos guardados en el array en una ventana paralela al formulario.
   - La ventana de fichas debe tener:
     - Flechas para moverse entre las fichas.
     - Números para indicar en qué ficha se encuentra.

4. **Fin de Programa:**
   - Cerrar el programa.

## Funcionalidades y Validaciones

### Validación de Campos

- **Nombre del dueño:** Máximo 25 caracteres, sin caracteres especiales.
- **DNI:** Verificación numérica mediante algoritmo específico.
- **Dirección:** Máximo 40 caracteres, sin caracteres especiales.
- **Teléfono:** Validación de 9 números más código de país.
- **Nombre del animal:** No puede estar en blanco, sin caracteres especiales.
- **Número de chip:** Exactamente 15 caracteres, sin caracteres especiales.
- **Fecha de intervención quirúrgica:** Debe ser anterior a la fecha de ingreso.
- **Fecha de vacunación:** Igual o mayor a la fecha de ingreso.

### Seguridad

- Implementar validaciones para evitar la inyección de scripts en todos los campos de texto y alfanuméricos.
- Escapar caracteres especiales que puedan ser utilizados para inyección de scripts.

### Guardado de Datos

- Los datos del animal (número de chip, fecha de ingreso, especie, raza, nombre de animal, nombre del dueño y vacunación) se guardarán en un array.
- La visualización de las fichas mostrará los datos guardados en el array.

### Interfaz del Usuario

- Botones de "Aceptar" y "Cancelar" con validaciones y ventanas de alerta para confirmar las acciones.
- Botón de "Visualizar Fichas" para mostrar los datos guardados en una ventana paralela al formulario con flechas de navegación y numeración de fichas.
- Botón de "Fin de Programa" para cerrar la aplicación.

## Lógica de las Funciones

### 1. `sanitizeInput(input)`
- **Descripción**: Sanitiza la entrada del usuario para evitar scripts maliciosos.
- **Entrada**: `input` (string) - La cadena de entrada del usuario.
- **Salida**: Una cadena sanitizada que es segura para insertar en el DOM.

### 2. `saveData(animalData)`
- **Descripción**: Almacena los datos del animal en el almacenamiento local (localStorage).
- **Entrada**: `animalData` (objeto) - Los datos del animal a almacenar.
- **Salida**: Ninguna.
- **Medidas de Seguridad**: Sanitización de datos antes de almacenarlos.

### 3. `getData()`
- **Descripción**: Obtiene los datos almacenados en el almacenamiento local.
- **Entrada**: Ninguna.
- **Salida**: Un array de objetos con los datos de los animales almacenados.

### 4. `loadProvinces(provinceSelect)`
- **Descripción**: Carga las provincias en el select de provincias.
- **Entrada**: `provinceSelect` (elemento DOM) - El elemento select donde se cargarán las provincias.
- **Salida**: Ninguna.

### 5. `loadLocalities(province, localitySelect)`
- **Descripción**: Carga las localidades basadas en la provincia seleccionada en el select de localidades.
- **Entrada**: `province` (string) - La provincia seleccionada.
               `localitySelect` (elemento DOM) - El elemento select donde se cargarán las localidades.
- **Salida**: Ninguna.

### 6. `loadPostalCode(province, locality, postalCodeInput)`
- **Descripción**: Carga el código postal basado en la provincia y la localidad seleccionada.
- **Entrada**: `province` (string) - La provincia seleccionada.
               `locality` (string) - La localidad seleccionada.
               `postalCodeInput` (elemento DOM) - El campo de entrada del código postal.
- **Salida**: Ninguna.

### 7. `loadSpecies(speciesSelect)`
- **Descripción**: Carga las especies en el select de especies.
- **Entrada**: `speciesSelect` (elemento DOM) - El elemento select donde se cargarán las especies.
- **Salida**: Ninguna.

### 8. `loadBreeds(species, breedSelect)`
- **Descripción**: Carga las razas basadas en la especie seleccionada en el select de razas.
- **Entrada**: `species` (string) - La especie seleccionada.
               `breedSelect` (elemento DOM) - El elemento select donde se cargarán las razas.
- **Salida**: Ninguna.

### 9. `loadVaccinations(species, vaccinationSelect)`
- **Descripción**: Carga las vacunaciones basadas en la especie seleccionada en el select de vacunaciones.
- **Entrada**: `species` (string) - La especie seleccionada.
               `vaccinationSelect` (elemento DOM) - El elemento select donde se cargarán las vacunaciones.
- **Salida**: Ninguna.

### 10. `calcularLetraDni(dni)`
- **Descripción**: Calcula la letra correspondiente al DNI.
- **Entrada**: `dni` (string) - El número del DNI sin la letra.
- **Salida**: La letra correspondiente al DNI.

### 11. `formatoNifValido(nif)`
- **Descripción**: Verifica si el formato del NIF es válido.
- **Entrada**: `nif` (string) - El NIF completo.
- **Salida**: `true` si el formato es válido, `false` en caso contrario.

### 12. `validarNif(nif)`
- **Descripción**: Valida si el NIF es correcto.
- **Entrada**: `nif` (string) - El NIF completo.
- **Salida**: `true` si el NIF es válido, `false` en caso contrario.

### 13. `showRecords(records)`
- **Descripción**: Muestra los registros almacenados en una vista detallada.
- **Entrada**: `records` (array) - Un array de objetos con los datos de los animales.
- **Salida**: Ninguna.
- **Medidas de Seguridad**: Sanitización de todos los datos antes de mostrarlos en el DOM.

### 14. `showBreedImageOnHover(breedSelect)`
- **Descripción**: Muestra una imagen de la raza al pasar el ratón sobre el select de razas.
- **Entrada**: `breedSelect` (elemento DOM) - El elemento select de las razas.
- **Salida**: Ninguna.

### 15. `formatDate(date)`
- **Descripción**: Formatea una fecha al formato europeo (DD/MM/YYYY).
- **Entrada**: `date` (string) - La fecha en formato YYYY-MM-DD.
- **Salida**: La fecha en formato DD/MM/YYYY.

### 16. `showModal(message, onConfirm)`
- **Descripción**: Muestra una ventana modal con un mensaje y una acción de confirmación.
- **Entrada**: `message` (string) - El mensaje a mostrar en el modal.
               `onConfirm` (función) - La función a ejecutar si el usuario confirma.
- **Salida**: Ninguna.

### 17. `validateForm()`
- **Descripción**: Valida los campos del formulario antes de enviarlo.
- **Entrada**: Ninguna.
- **Salida**: `true` si todos los campos son válidos, `false` en caso contrario.
- **Validaciones**:
    - `ownerName`: No puede estar vacío, máximo 25 caracteres, sin caracteres especiales.
    - `dni`: Debe ser un NIF válido.
    - `address`: No puede estar vacío, máximo 40 caracteres, sin caracteres especiales.
    - `phone`: Debe ser un número de 9 dígitos más el código del país.
    - `animalName`: No puede estar vacío, sin caracteres especiales.
    - `chipNumber`: Debe ser de 15 caracteres alfanuméricos.
    - `admissionDate` y `surgeryDate`: La fecha de cirugía debe ser anterior a la fecha de ingreso.
    - `vaccinationDate`: La fecha de vacunación debe ser igual o mayor a la fecha de ingreso.

## Medidas de Seguridad Contra XSS

1. **Sanitización de Entrada**:
    - La función `sanitizeInput` se utiliza para limpiar cualquier entrada del usuario antes de que se procese o se inserte en el DOM.

2. **Sanitización de Salida**:
    - Antes de mostrar cualquier dato en el DOM, se utiliza `sanitizeInput` para asegurar que no se ejecutará código malicioso.

3. **Uso Seguro de `innerHTML`**:
    - En lugar de utilizar `innerHTML` directamente con datos del usuario o almacenados, se crean y manipulan elementos DOM de forma segura para evitar la inyección de HTML no deseado.

4. **Validaciones Exhaustivas**:
    - Validaciones estrictas en los campos del formulario para asegurar que los datos son correctos y seguros.

Estas medidas aseguran que la aplicación es robusta frente a ataques de XSS, protegiendo tanto los datos como la experiencia del usuario.

## Pruebas de `quillavetjs.js` con Jest y Testing Library

### Requisitos

Asegúrate de tener instalados los siguientes componentes antes de proceder:

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

### Instalación

Sigue estos pasos para instalar las dependencias necesarias para ejecutar las pruebas:

1. Clona el repositorio de tu proyecto.
2. Navega hasta el directorio raíz del proyecto en tu terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

    ```sh
    npm install --save-dev jest @testing-library/dom @testing-library/jest-dom
    ```

### Estructura del Proyecto

La estructura relevante del proyecto debe parecerse a esto:

.
├── assets
│ └── img
│ ├── ave
│ ├── caballo
│ ├── gato
│ ├── perro
│ ├── reptil
│ └── roedor
├── js
│ └── quillavetjs.js
├── styles
│ └── quillavetstyles.css
├── test
│  └── test.js
├── quillavet.html
├── package.json
├── package-lock.json
├── jest.config.js
├── jest.setup.js
├── .gitignore
└── README.md


### Descripción de las Pruebas

El archivo de prueba `test.js` incluye pruebas para validar la funcionalidad y seguridad del formulario. A continuación, se describen las pruebas realizadas:

#### Pruebas de Validación de Campos

- **Nombre del Dueño**:
  - Longitud máxima: 25 caracteres
  - Sin caracteres especiales

- **DNI**:
  - Formato y cálculo de letra correctos

- **Dirección**:
  - Longitud máxima: 40 caracteres
  - Sin caracteres especiales

- **Teléfono**:
  - Formato correcto con 9 dígitos más el código del país

- **Nombre del Animal**:
  - No vacío
  - Sin caracteres especiales

- **Número de Chip**:
  - Exactamente 15 caracteres alfanuméricos

- **Fecha de Intervención Quirúrgica**:
  - Debe ser anterior a la fecha de ingreso

- **Fecha de Vacunación**:
  - Igual o mayor a la fecha de ingreso

#### Pruebas de Funcionalidades

- **Sanitización de Entrada**:
  - Verificación de que los datos ingresados no contienen caracteres que puedan ser utilizados para inyección de scripts

- **Guardado de Datos**:
  - Verificación de que los datos se almacenan correctamente en localStorage

- **Carga de Provincias, Localidades y Código Postal**:
  - Verificación de que los datos se cargan correctamente en los selectores correspondientes

- **Carga de Especies, Razas y Vacunaciones**:
  - Verificación de que los datos se cargan correctamente en los selectores correspondientes

- **Mostrar y Navegar Fichas**:
  - Verificación de que los datos se muestran correctamente y se pueden navegar entre las fichas

### Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```sh
npm test
