import { 
    sanitizeInput, 
    validateForm, 
    loadProvinces, 
    loadLocalities, 
    loadPostalCode, 
    loadSpecies, 
    loadBreeds, 
    loadVaccinations, 
    saveData, 
    getData, 
    showRecords, 
    showModal, 
    initCarousel 
} from './functions.js';

// Evento para cargar provincias y localidades cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada. Iniciando funciones...");
    const provinceSelect = document.getElementById('province');
    const localitySelect = document.getElementById('locality');
    const postalCodeInput = document.getElementById('postal-code');
    const speciesSelect = document.getElementById('species');
    const breedSelect = document.getElementById('breed');
    const vaccinationSelect = document.getElementById('vaccination');

    // Cargar provincias y especies al cargar la página
    loadProvinces(provinceSelect);
    loadSpecies(speciesSelect);

    // Inicialización del carrusel
    initCarousel();

    // Cargar localidades al seleccionar provincia
    provinceSelect.addEventListener('change', () => {
        console.log("Provincia seleccionada:", provinceSelect.value);
        loadLocalities(provinceSelect.value, localitySelect);
    });

    // Cargar código postal al seleccionar localidad
    localitySelect.addEventListener('change', () => {
        console.log("Localidad seleccionada:", localitySelect.value);
        loadPostalCode(provinceSelect.value, localitySelect.value, postalCodeInput);
    });

    // Cargar razas y vacunaciones al seleccionar especie
    speciesSelect.addEventListener('change', () => {
        console.log("Especie seleccionada:", speciesSelect.value);
        loadBreeds(speciesSelect.value, breedSelect);
        loadVaccinations(speciesSelect.value, vaccinationSelect);
    });
});

// Evento para manejar el envío del formulario
document.getElementById('submit-button').addEventListener('click', (event) => {
    event.preventDefault();  // Evitar envío predeterminado del formulario
    console.log("Botón de enviar clicado");
    if (validateForm()) {
        const animalData = {
            owner: sanitizeInput(document.getElementById('owner-name').value),
            dni: sanitizeInput(document.getElementById('dni').value),
            address: sanitizeInput(document.getElementById('address').value),
            province: sanitizeInput(document.getElementById('province').value),
            locality: sanitizeInput(document.getElementById('locality').value),
            postalCode: sanitizeInput(document.getElementById('postal-code').value),
            phone: sanitizeInput(document.getElementById('phone').value),
            animalName: sanitizeInput(document.getElementById('animal-name').value),
            chipNumber: sanitizeInput(document.getElementById('chip-number').value),
            admissionDate: sanitizeInput(document.getElementById('admission-date').value),
            surgeryDate: sanitizeInput(document.getElementById('surgery-date').value),
            species: sanitizeInput(document.getElementById('species').value),
            breed: sanitizeInput(document.getElementById('breed').value),
            vaccination: sanitizeInput(document.getElementById('vaccination').value),
            vaccinationDate: sanitizeInput(document.getElementById('vaccination-date').value),
        };
        console.log("Datos del formulario:", animalData);
        showModal('¿Estás seguro de querer continuar?', () => {
            saveData(animalData);
            document.getElementById('admission-form').reset();
        });
    } else {
        console.log("La validación falló");
    }
});

// Evento para cancelar el formulario
document.getElementById('cancel-button').addEventListener('click', (event) => {
    event.preventDefault();  // Evitar envío predeterminado del formulario
    console.log("Formulario cancelado");
    showModal('¿Estás seguro de que quieres cancelar?', () => {
        document.getElementById('admission-form').reset();
    });
});

// Evento para mostrar registros guardados
document.getElementById('view-records-button').addEventListener('click', (event) => {
    event.preventDefault();  // Evitar el comportamiento predeterminado
    console.log("Mostrando registros...");
    const records = getData();
    if (records.length > 0) {
        showRecords(records);
    } else {
        showModal('No hay registros disponibles.');
    }
});

// Evento para finalizar el programa y limpiar el LocalStorage
document.getElementById('end-program-button').addEventListener('click', (event) => {
    event.preventDefault();  // Evitar el comportamiento predeterminado
    console.log("Finalizando el programa");
    showModal('¿Estás seguro de que quieres finalizar el programa?', () => {
        localStorage.clear();
        showModal('Programa finalizado. Todos los datos han sido borrados.', () => {
            window.location.reload();
        });
    });
});
