# Libropolis - Libros y Comics

Este proyecto es una página web para la tienda de libros y cómics Libropolis. A continuación, se detalla el proceso de creación y los ajustes realizados para obtener el diseño final.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos y directorios principales:

- `Libropolis.html`: Archivo principal de la página.
- `css/`: Directorio que contiene los archivos de estilos CSS.
  - `libropolis.css`: Archivo CSS específico para la estructura de la página principal.
  - `components/`: Directorio con estilos CSS para componentes específicos.
    - `header.css`: Estilos para el encabezado.
    - `footer.css`: Estilos para el pie de página.

## Proceso de Creación

### 1. Estructura HTML Inicial

Se creó la estructura HTML básica con un encabezado, una sección principal (`main`) y un pie de página (`footer`). Dentro de la sección principal, se definieron tres módulos principales:

1. **Ventas Top**
2. **Novedades**
3. **Próximamente**

### 2. Diseño de la Sección de Ventas Top

Se diseñó una sección para mostrar un libro destacado con una imagen, descripción extendida y nota sobre el autor. Se utilizó una estructura de tres columnas dentro de un `article` horizontal.

### 3. Diseño de la Sección de Novedades

Se implementó una cuadrícula (`grid`) con seis casillas, cada una representando un libro o cómic nuevo. Al hacer clic en una casilla, se muestra más información sobre el elemento seleccionado.

### 4. Diseño de la Sección Próximamente

Se añadió una sección "Próximamente" con una animación CSS que mueve una imagen por todo el div de manera aleatoria. Esta sección ocupa el espacio restante de la página.

### 5. Ajustes de Estilos CSS

Se realizaron varios ajustes de estilos para asegurar que el diseño fuera coherente y estéticamente agradable:

- **Grid Layout**: Se definió un `grid-template` con dos columnas y varias filas para organizar las secciones.
- **Animaciones**: Se utilizó `@keyframes` para crear una animación que mueve una imagen dentro de la sección "Próximamente".
- **Responsive Design**: Se aseguraron que las imágenes y los textos se adaptaran correctamente a diferentes tamaños de pantalla.
- **Interactividad**: Se añadió funcionalidad para mostrar y ocultar información adicional al hacer clic en los elementos de la cuadrícula.

### 6. Solución de Problemas

Durante el desarrollo, se presentaron algunos problemas que fueron solucionados:

- **Espaciado entre Secciones**: Se ajustó el `margin` y `padding` para reducir el espacio entre las secciones "Novedades" y "Próximamente".
- **Compatibilidad con el Aside**: Se aseguraron de que los cambios en el CSS no afectaran la disposición del `aside`.

## Consideraciones Finales

El diseño final garantiza una experiencia de usuario fluida y atractiva, con una disposición clara de las secciones y una navegación intuitiva. La animación en la sección "Próximamente" añade un toque dinámico al sitio, manteniendo a los usuarios interesados en futuros lanzamientos.

Esperamos que este proyecto cumpla con las expectativas y brinde una plataforma efectiva para la promoción y venta de libros y cómics en Libropolis.

## Autor

Desarrollado por Raúl Radillo.

