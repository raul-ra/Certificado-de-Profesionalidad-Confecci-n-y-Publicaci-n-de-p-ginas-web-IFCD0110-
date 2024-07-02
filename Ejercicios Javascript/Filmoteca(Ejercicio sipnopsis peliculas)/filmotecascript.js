const movies = {
    movie1: {
        synopsis: "En un futuro distópico, un ex oficial de policía tiene la tarea de cazar y 'retirar' replicantes, seres artificiales que han regresado ilegalmente a la Tierra. Su misión lo lleva a un misterio más profundo sobre la identidad, la humanidad y su propio papel en este mundo duro.<br><br>Premios: Blade Runner recibió nominaciones a los Premios de la Academia por Mejor Dirección de Arte y Mejores Efectos Visuales.<br><br>Dato interesante: La película se basa en la novela '¿Sueñan los androides con ovejas eléctricas?' de Philip K. Dick.",
        trailer: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/eogpIG53Cis' frameborder='0' allowfullscreen></iframe>",
        backgroundVideo: "assets/video/bladerunner.mp4"
    },
    movie2: {
        synopsis: "Una representación cruda e intensa del entrenamiento y las experiencias de los soldados durante la Guerra de Vietnam. La película se centra en la dualidad del hombre y las brutales realidades de la guerra, siguiendo a un grupo de marines desde el campamento de entrenamiento hasta los campos de batalla.<br><br>Premios: Chaqueta Metálica fue nominada a un Premio de la Academia a Mejor Guion Adaptado.<br><br>Dato interesante: La mitad de la película fue filmada en una base abandonada de la RAF en Inglaterra, no en Vietnam.",
        trailer: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/x9f6JaaX7Wg' frameborder='0' allowfullscreen></iframe>",
        backgroundVideo: "assets/video/La chaqueta metalica.mp4"
    },
    movie3: {
        synopsis: "En una Gran Bretaña distópica, un joven delincuente lidera una banda de 'droogs' y se entrega a la ultraviolencia. Después de ser capturado, se somete a un programa experimental de rehabilitación que plantea preguntas sobre el libre albedrío, la moralidad y el control estatal.<br><br>Premios: La película fue nominada a cuatro Premios de la Academia, incluyendo Mejor Película.<br><br>Dato interesante: Stanley Kubrick retiró la película del Reino Unido debido a la controversia y amenazas que recibió.",
        trailer: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/MmUhbSZMjOY?si=6tULx1hJGWmSxUhi' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        backgroundVideo: "assets/video/Naranjamecanica.mp4"
    },
    movie4: {
        synopsis: "Una historia escalofriante de una joven poseída por una entidad malévola. Su madre busca la ayuda de dos sacerdotes para realizar un exorcismo. La película explora temas de fe, maldad y la batalla entre la luz y la oscuridad.<br><br>Premios: El Exorcista ganó dos Premios de la Academia y fue nominada a diez en total.<br><br>Dato interesante: Muchas personas involucradas en la producción experimentaron eventos extraños, lo que llevó a la creencia de que la película estaba maldita.",
        trailer: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/YDGw1MTEe9k' frameborder='0' allowfullscreen></iframe>",
        backgroundVideo: "assets/video/Elexorcista.mp4"
    },
    movie5: {
        synopsis: "Ambientada en una ciudad futurista dividida entre la clase trabajadora y los planificadores de la ciudad. El hijo del cerebro de la ciudad se enamora de una profetisa de la clase trabajadora que predice la llegada de un salvador para mediar sus diferencias.<br><br>Premios: Aunque no ganó premios en su época, Metrópolis es ahora considerada una de las películas más importantes de la historia del cine.<br><br>Dato interesante: La película es una de las primeras en el género de la ciencia ficción y su metraje original fue restaurado en 2008 después de haber estado perdido durante décadas.",
        trailer: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/rXpKwH2oJkM?si=l3CE2cQfwLInUQyB' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
        backgroundVideo: "assets/video/metropolis.mp4"
    }
};

function showMovieDetails(movieId) {
    const selectedMovie = movies[movieId];
    if (selectedMovie) {
        document.getElementById('synopsis').innerHTML = `<h2 class="filmoteca__section-title">Sinopsis</h2><p>${selectedMovie.synopsis}</p>`;
        document.getElementById('trailer').innerHTML = `<h2 class="filmoteca__section-title">Trailer</h2>${selectedMovie.trailer}`;
        const videoElement = document.getElementById('background-video');
        const videoSource = videoElement.querySelector('source');
        videoSource.src = selectedMovie.backgroundVideo;
        videoElement.load();
    }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
