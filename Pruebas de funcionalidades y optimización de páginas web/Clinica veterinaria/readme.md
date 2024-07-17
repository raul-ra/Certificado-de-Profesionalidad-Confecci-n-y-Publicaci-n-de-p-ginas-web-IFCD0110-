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
    - Validación: Puede ser "Sí" o "No"; debe ser anterior a la fecha de ingreso

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

### Lógica de las Funciones

- **loadProvinces:** Carga las provincias en el select de provincias.
- **loadLocalities:** Carga las localidades en el select de localidades basado en la provincia seleccionada.
- **loadPostalCode:** Carga el código postal basado en la provincia y la localidad seleccionada.
- **loadSpecies:** Carga las especies en el select de especies.
- **loadBreeds:** Carga las razas en el select de razas basado en la especie seleccionada.
- **loadVaccinations:** Carga las vacunaciones en el select de vacunaciones basado en la especie seleccionada.
- **validateFields:** Valida los campos del formulario asegurando que cumplen con los criterios especificados.
- **handleSubmit:** Maneja el envío del formulario, validando los campos y mostrando una ventana de confirmación antes de guardar los datos.
- **handleCancel:** Maneja el botón de cancelar, mostrando una ventana de alerta para confirmar la cancelación.
- **handleViewRecords:** Maneja la visualización de registros guardados en localStorage, mostrando los datos en una ventana paralela.
- **handleEndProgram:** Maneja el botón de fin de programa, mostrando una confirmación antes de cerrar la aplicación.
