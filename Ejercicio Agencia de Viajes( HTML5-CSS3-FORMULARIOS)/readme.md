# Proyecto de Hacia Rutas Salvajes

Maqueta de aplicación web destinada a viajes de aventura.

## Descripción del Proyecto

Este proyecto se ha desarrollado en el marco del curso "Certificado de Profesionalidad en Confección y Publicación de Páginas Web (IFCD0110)" y tiene como objetivo la creación de formularios de registro para diferentes destinos de viaje. El enfoque principal ha sido el uso de HTML y CSS para construir formularios funcionales y visualmente atractivos, haciendo hincapié en la validación de datos del lado del cliente sin el uso de JavaScript.

## Estructura del Desarrollo

El desarrollo del proyecto ha seguido una estructura clara y organizada, dividiéndose en varias etapas clave:

1. **Diseño de la Página Principal**:
   - La página principal consta de un header con una navegación integrada, un aside con noticias de diferentes lugares, un main con un carrusel y una sección de "Próximos destinos", y un footer sencillo.
   - La sección de "Próximos destinos" incluye enlaces a los formularios de registro específicos para cada destino.

2. **Creación de Formularios Individuales**:
   - Se han creado seis formularios individuales, cada uno correspondiente a un destino diferente: Marruecos, Japón, Bali, Perú, Islas Galápagos y Tailandia.
   - Cada formulario está diseñado para recopilar información básica del usuario, incluyendo nombre, apellidos, número de pasaporte y fechas de viaje.

3. **Validación de Datos**:
   - Se han implementado diferentes técnicas de validación de datos en HTML, como el uso de los atributos `required`, `minlength`, `maxlength`, `pattern`, `min` y `max`, entre otros.
   - La validación asegura que los usuarios ingresen datos en el formato correcto antes de enviar el formulario.

4. **Diseño Responsivo y Estilización**:
   - Se ha utilizado CSS para estilizar los formularios, asegurando un diseño limpio y profesional.
   - Se ha empleado la fuente 'Poppins' para el cuerpo del formulario y 'Feeling Passionate' para los títulos, aportando una estética agradable y coherente con el tema del sitio.
   - Se ha aplicado un fondo suave y sombras para dar un efecto 3D tanto a los formularios como a los botones, mejorando la usabilidad y el atractivo visual.

## Uso de CSS Grid y Flexbox

- **CSS Grid**: Se ha utilizado CSS Grid para la estructura general de la página principal, dividiendo el contenido en diferentes áreas (header, aside, main, footer), lo que facilita un diseño adaptable y bien organizado.
- **Flexbox**: Dentro de los formularios, Flexbox se ha utilizado para alinear y distribuir los elementos de manera uniforme. Particularmente, se ha aplicado Flexbox en la disposición de los campos del formulario para asegurar que los inputs y etiquetas se alineen correctamente, proporcionando una experiencia de usuario fluida y consistente.

## Formularios

El núcleo de este proyecto ha sido la creación y validación de formularios. Cada formulario incluye:

- **Campos de Texto**: Para la entrada de nombre, primer apellido, segundo apellido y número de pasaporte.
- **Selección de Experiencia**: Se han incluido opciones de selección múltiple para el tipo de experiencia (Náufrago/a, Aventura, Explorador/a, Mochilero/a), permitiendo seleccionar hasta dos opciones.
- **Fechas de Viaje**: Campos de selección de fecha para la fecha de inicio y regreso del viaje, integrando un calendario emergente para facilitar la selección.
- **Validación**: La validación en HTML asegura que los datos ingresen cumplan con los requisitos especificados, reduciendo errores y mejorando la calidad de los datos recibidos.

### Validaciones Utilizadas

A continuación se detallan las diferentes técnicas de validación utilizadas y los formularios en los que se aplicaron:

- **Marruecos**: Validación mediante el atributo `required`.
  - Campos como `nombre`, `primer apellido`, `segundo apellido`, `número de pasaporte`, `fecha de inicio` y `fecha de regreso` requieren ser completados antes de enviar el formulario.

- **Japón**: Validación con `minlength` y `maxlength`.
  - Campos de texto como `nombre`, `primer apellido`, `segundo apellido` y `número de pasaporte` tienen restricciones de longitud mínima y máxima.

- **Bali**: Validación con `pattern`.
  - Los campos de texto deben seguir un patrón específico. Por ejemplo, el `nombre`, `primer apellido` y `segundo apellido` solo permiten letras y espacios, mientras que el `número de pasaporte` permite letras y números.

- **Perú**: Validación con `min` y `max`.
  - El campo `número de pasaporte` debe estar entre un rango numérico específico. Las fechas de inicio y regreso también deben estar dentro de un rango específico del año.

- **Islas Galápagos**: Validación con `step`.
  - Los campos de fecha (`fecha de inicio` y `fecha de regreso`) utilizan el atributo `step` para forzar la selección de fechas con un intervalo específico.

- **Tailandia**: Uso de `readonly` y `disabled`.
  - Algunos campos están predefinidos y no pueden ser editados (`readonly`), y el botón de envío puede estar deshabilitado (`disabled`) hasta que se completen ciertos requisitos.

## Instalación de la Fuente "Feeling Passionate"

Para asegurar la correcta visualización de la fuente 'Feeling Passionate', sigue los siguientes pasos:

1. Navega hasta la carpeta `assets/fonts` en tu proyecto.
2. Copia el archivo `Feeling Passionate.otf` que se encuentra en la carpeta `C:\Users\raulr\Documents\GitHub\Certificate-of-Professionalism-in-Web-Page-Design-and-Publication-IFCD0110-\Ejercicio Agencia de Viajes( HTML5-CSS3-FORMULARIOS)\assets\fonts\Feeling Passionate.otfcarpeta` a la carpeta `assets/fonts` de tu proyecto.
3. Asegúrate de incluir la fuente en tu archivo CSS.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Empuja los cambios a tu rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.
