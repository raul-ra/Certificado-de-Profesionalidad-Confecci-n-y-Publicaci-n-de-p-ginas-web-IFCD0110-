import { provincias, codigosPostales, especies, vacunas, breedCare, breedImages } from './storage.js';

// Función para sanitizar la entrada
export function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}

// Función para cargar provincias
export function loadProvinces(provinceSelect) {
    console.log("Cargando provincias...");  // Depuración
    provinceSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
    Object.keys(provincias).forEach(province => {
        const option = document.createElement('option');
        option.value = sanitizeInput(province);
        option.textContent = sanitizeInput(province);
        provinceSelect.appendChild(option);
    });
    console.log("Provincias cargadas:", Object.keys(provincias));
}

// Función para cargar localidades
export function loadLocalities(province, localitySelect) {
    console.log("Cargando localidades para provincia:", province);  // Depuración
    localitySelect.innerHTML = '<option value="">Selecciona una localidad</option>';
    provincias[sanitizeInput(province)].forEach(locality => {
        const option = document.createElement('option');
        option.value = sanitizeInput(locality);
        option.textContent = sanitizeInput(locality);
        localitySelect.appendChild(option);
    });
    console.log("Localidades cargadas:", provincias[sanitizeInput(province)]);
}

// Función para cargar el código postal
export function loadPostalCode(province, locality, postalCodeInput) {
    console.log(`Cargando código postal para ${province}, ${locality}`);  // Depuración
    postalCodeInput.value = sanitizeInput(codigosPostales[sanitizeInput(province)][sanitizeInput(locality)] || '');
}

// Función para cargar especies
export function loadSpecies(speciesSelect) {
    console.log("Cargando especies...");  // Depuración
    speciesSelect.innerHTML = '<option value="">Selecciona una especie</option>';
    Object.keys(especies).forEach(species => {
        const option = document.createElement('option');
        option.value = sanitizeInput(species);
        option.textContent = sanitizeInput(species.charAt(0).toUpperCase() + species.slice(1));
        speciesSelect.appendChild(option);
    });
    console.log("Especies cargadas:", Object.keys(especies));
}

// Función para cargar razas
export function loadBreeds(species, breedSelect) {
    console.log("Cargando razas para especie:", species);  // Depuración
    breedSelect.innerHTML = '<option value="">Selecciona una raza</option>';
    especies[sanitizeInput(species)].forEach(breed => {
        const option = document.createElement('option');
        option.value = sanitizeInput(breed);
        option.textContent = sanitizeInput(breed);
        option.dataset.image = sanitizeInput(breedImages[sanitizeInput(species)][sanitizeInput(breed.toLowerCase().replace(/ /g, ''))]);
        breedSelect.appendChild(option);
    });
    console.log("Razas cargadas:", especies[sanitizeInput(species)]);
}

// Función para cargar vacunaciones
export function loadVaccinations(species, vaccinationSelect) {
    console.log("Cargando vacunaciones para especie:", species);  // Depuración
    vaccinationSelect.innerHTML = '<option value="">Selecciona una vacunación</option>';
    vacunas[sanitizeInput(species)].forEach(vaccine => {
        const option = document.createElement('option');
        option.value = sanitizeInput(vaccine);
        option.textContent = sanitizeInput(vaccine);
        vaccinationSelect.appendChild(option);
    });
    console.log("Vacunaciones cargadas:", vacunas[sanitizeInput(species)]);
}

// Función para mezclar el array de URLs
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para inicializar el carrusel
export function initCarousel() {
    const breedImageUrls = [];
    console.log("Iniciando carrusel"); // Depuración
    Object.keys(breedImages).forEach(species => {
        Object.keys(breedImages[species]).forEach(breed => {
            breedImageUrls.push(breedImages[species][breed]);
        });
    });

    if (breedImageUrls.length === 0) {
        console.error("No se han encontrado imágenes para el carrusel");
    } else {
        console.log("Imágenes cargadas para el carrusel:", breedImageUrls);
    }

    const shuffledImageUrls = shuffle(breedImageUrls);
    const carouselWrapper = document.querySelector('.carousel__wrapper');
    let currentIndex = 0;

    shuffledImageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.classList.add('carousel__slide');
        const img = document.createElement('img');
        img.src = url;
        slide.appendChild(img);
        carouselWrapper.appendChild(slide);
    });

    shuffledImageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.classList.add('carousel__slide');
        const img = document.createElement('img');
        img.src = url;
        slide.appendChild(img);
        carouselWrapper.appendChild(slide);
    });

    function showNextSlide() {
        currentIndex++;
        if (currentIndex === shuffledImageUrls.length) {
            setTimeout(() => {
                carouselWrapper.style.transition = 'none';
                currentIndex = 0;
                carouselWrapper.style.transform = `translateX(-${currentIndex * 250}px)`;
                setTimeout(() => {
                    carouselWrapper.style.transition = 'transform 0.5s ease';
                }, 0);
            }, 500);
        } else {
            carouselWrapper.style.transform = `translateX(-${currentIndex * 250}px)`;
        }
    }

    setInterval(showNextSlide, 3000);
}

// Función para almacenar datos
export function saveData(animalData) {
    let records = JSON.parse(localStorage.getItem('animalRecords')) || [];
    records.push(animalData);
    localStorage.setItem('animalRecords', JSON.stringify(records));
    showModal('Datos guardados correctamente.');
}

// Función para obtener datos del almacenamiento local
export function getData() {
    return JSON.parse(localStorage.getItem('animalRecords')) || [];
}

// Función para manejar la presentación de registros
export function showRecords(records) {
    const recordsView = document.getElementById('records-view');
    recordsView.style.display = 'block';
    const recordDetails = document.getElementById('record-details');
    let currentIndex = 0;

    function updateRecordDetails() {
        const record = records[currentIndex];
        const breedImage = sanitizeInput(breedImages[record.species.toLowerCase()][record.breed.toLowerCase().replace(/ /g, '')]);
        const breedCareDetails = breedCare[record.breed] || { care: 'No disponible', diseases: 'No disponible' };

        recordDetails.innerHTML = ''; // Limpiar contenido anterior
        
        const title = document.createElement('h2');
        title.textContent = `Ficha de Registro de ${sanitizeInput(record.animalName)}`;
        
        const image = document.createElement('img');
        image.src = breedImage;
        image.alt = sanitizeInput(record.breed);
        image.className = 'breed-image';
        
        const owner = document.createElement('p');
        owner.innerHTML = `<strong>Dueño:</strong> ${sanitizeInput(record.owner)}`;
        
        const dni = document.createElement('p');
        dni.innerHTML = `<strong>DNI:</strong> ${sanitizeInput(record.dni)}`;
        
        const address = document.createElement('p');
        address.innerHTML = `<strong>Dirección:</strong> ${sanitizeInput(record.address)}`;
        
        const province = document.createElement('p');
        province.innerHTML = `<strong>Provincia:</strong> ${sanitizeInput(record.province)}`;
        
        const locality = document.createElement('p');
        locality.innerHTML = `<strong>Localidad:</strong> ${sanitizeInput(record.locality)}`;
        
        const postalCode = document.createElement('p');
        postalCode.innerHTML = `<strong>Código Postal:</strong> ${sanitizeInput(record.postalCode)}`;
        
        const phone = document.createElement('p');
        phone.innerHTML = `<strong>Teléfono:</strong> ${sanitizeInput(record.phone)}`;
        
        const animalName = document.createElement('p');
        animalName.innerHTML = `<strong>Nombre del Animal:</strong> ${sanitizeInput(record.animalName)}`;
        
        const chipNumber = document.createElement('p');
        chipNumber.innerHTML = `<strong>Número de Chip:</strong> ${sanitizeInput(record.chipNumber)}`;
        
        const admissionDate = document.createElement('p');
        admissionDate.innerHTML = `<strong>Fecha de Ingreso:</strong> ${formatDate(record.admissionDate)}`;
        
        const surgeryDate = document.createElement('p');
        surgeryDate.innerHTML = `<strong>Fecha de Intervención Quirúrgica:</strong> ${formatDate(record.surgeryDate)}`;
        
        const species = document.createElement('p');
        species.innerHTML = `<strong>Especie:</strong> ${sanitizeInput(record.species)}`;
        
        const breed = document.createElement('p');
        breed.innerHTML = `<strong>Raza:</strong> ${sanitizeInput(record.breed)}`;
        
        const vaccination = document.createElement('p');
        vaccination.innerHTML = `<strong>Vacunación:</strong> ${sanitizeInput(record.vaccination)}`;
        
        const vaccinationDate = document.createElement('p');
        vaccinationDate.innerHTML = `<strong>Fecha de Vacunación:</strong> ${formatDate(record.vaccinationDate)}`;
        
        const breedCareDiv = document.createElement('div');
        breedCareDiv.className = 'breed-care';
        const breedCareTitle = document.createElement('h3');
        breedCareTitle.textContent = 'Cuidados y Enfermedades Habituales';
        const breedCareDetailsCare = document.createElement('p');
        breedCareDetailsCare.innerHTML = `<strong>Cuidados:</strong> ${sanitizeInput(breedCareDetails.care)}`;
        const breedCareDetailsDiseases = document.createElement('p');
        breedCareDetailsDiseases.innerHTML = `<strong>Enfermedades:</strong> ${sanitizeInput(breedCareDetails.diseases)}`;
        
        breedCareDiv.appendChild(breedCareTitle);
        breedCareDiv.appendChild(breedCareDetailsCare);
        breedCareDiv.appendChild(breedCareDetailsDiseases);
        
        recordDetails.appendChild(title);
        recordDetails.appendChild(image);
        recordDetails.appendChild(owner);
        recordDetails.appendChild(dni);
        recordDetails.appendChild(address);
        recordDetails.appendChild(province);
        recordDetails.appendChild(locality);
        recordDetails.appendChild(postalCode);
        recordDetails.appendChild(phone);
        recordDetails.appendChild(animalName);
        recordDetails.appendChild(chipNumber);
        recordDetails.appendChild(admissionDate);
        recordDetails.appendChild(surgeryDate);
        recordDetails.appendChild(species);
        recordDetails.appendChild(breed);
        recordDetails.appendChild(vaccination);
        recordDetails.appendChild(vaccinationDate);
        recordDetails.appendChild(breedCareDiv);
        
        document.getElementById('record-number').textContent = `${currentIndex + 1} / ${records.length}`;
    }

    document.getElementById('prev-record').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateRecordDetails();
        }
    });

    document.getElementById('next-record').addEventListener('click', () => {
        if (currentIndex < records.length - 1) {
            currentIndex++;
            updateRecordDetails();
        }
    });

    document.getElementById('delete-record').addEventListener('click', () => {
        showModal('¿Estás seguro de que quieres eliminar este registro?', () => {
            records.splice(currentIndex, 1);
            localStorage.setItem('animalRecords', JSON.stringify(records));
            if (records.length === 0) {
                recordsView.style.display = 'none';
            } else {
                if (currentIndex >= records.length) {
                    currentIndex--;
                }
                updateRecordDetails();
            }
        });
    });

    updateRecordDetails();
}

// Formatear fecha al formato europeo (DD/MM/YYYY)
export function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

// Función para mostrar una ventana modal
export function showModal(message, onConfirm) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const confirmButton = document.getElementById('modal-confirm');
    const cancelButton = document.getElementById('modal-cancel');

    modalMessage.textContent = message;
    modal.style.display = 'block';

    confirmButton.onclick = () => {
        modal.style.display = 'none';
        if (onConfirm) onConfirm();
    };

    cancelButton.onclick = () => {
        modal.style.display = 'none';
    };
}

// Validación de formulario
export function validateForm() {
    const ownerName = document.getElementById('owner-name').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const animalName = document.getElementById('animal-name').value.trim();
    const chipNumber = document.getElementById('chip-number').value.trim();
    const admissionDate = document.getElementById('admission-date').value;
    const surgeryDate = document.getElementById('surgery-date').value;
    const vaccinationDate = document.getElementById('vaccination-date').value;

    const regexNoSpecialChars = /^[a-zA-Z0-9\s]*$/; // Solo letras, números y espacios
    const regexAlphanumeric15 = /^[a-zA-Z0-9]{15}$/; // 15 caracteres alfanuméricos
    const regexPhone = /^\+[0-9]{13}$/; // Número de teléfono con código de país

    if (ownerName.length > 25 || ownerName === '' || !regexNoSpecialChars.test(ownerName)) {
        showModal('El nombre del dueño no puede estar vacío, debe tener máximo 25 caracteres y no puede contener caracteres especiales.');
        return false;
    }

    if (!validarNif(dni)) {  // Asegúrate de que `validarNif` se llame aquí correctamente
        showModal('El DNI no es válido.');
        return false;
    }

    if (address.length > 40 || address === '' || !regexNoSpecialChars.test(address)) {
        showModal('La dirección no puede estar vacía, debe tener máximo 40 caracteres y no puede contener caracteres especiales.');
        return false;
    }

    if (phone === '' || !regexPhone.test(phone)) {
        showModal('El teléfono debe incluir el código de país y tener un total de 13 dígitos, incluyendo el símbolo "+". Ejemplo: +0034666555777');
        return false;
    }

    if (animalName === '' || !regexNoSpecialChars.test(animalName)) {
        showModal('El nombre del animal no puede estar vacío y no puede contener caracteres especiales.');
        return false;
    }

    if (!regexAlphanumeric15.test(chipNumber)) {
        showModal('El número de chip debe ser de 15 caracteres alfanuméricos.');
        return false;
    }

    if (new Date(surgeryDate) > new Date(admissionDate)) {
        showModal('La fecha de intervención quirúrgica debe ser anterior a la fecha de ingreso.');
        return false;
    }

    if (new Date(vaccinationDate) < new Date(admissionDate)) {
        showModal('La fecha de vacunación debe ser igual o mayor a la fecha de ingreso.');
        return false;
    }

    return true;
}

// Funciones de validación del NIF
export function calcularLetraDni(dni) {
    const cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    const posicion = dni % 23;
    return cadena.charAt(posicion);
}

export function formatoNifValido(nif) {
    const regex = /^\d{8}[A-Z]$/i;
    return regex.test(nif);
}

export function validarNif(nif) {
    if (!formatoNifValido(nif)) return false;
    const numero = nif.slice(0, -1);  // Los primeros 8 dígitos son el número
    const letra = nif.slice(-1).toUpperCase();  // El último carácter es la letra
    return calcularLetraDni(numero) === letra;  // Comparar la letra calculada con la dada
}
