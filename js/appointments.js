// Importar especies desde storage.js
import { especies } from './storage.js';

document.addEventListener("DOMContentLoaded", function () {
    console.log("El DOM está completamente cargado");

    // Configurar los eventos de las modales
    configurarModalesDeCitas();
    
    // Cargar las especies y razas en los formularios de Nueva Cita y Revisión
    cargarEspeciesYRazas();

    // Configurar eventos para checkbox de antecedentes
    configurarCheckboxAntecedentes();

    // Autocompletar los datos en Revisión según el número de chip
    document.getElementById("chip-number-revision").addEventListener("blur", buscarPorChip);

    // Validar y guardar la Nueva Cita
    document.getElementById("submit-new-appointment").addEventListener("click", function (event) {
        event.preventDefault();
        if (validarFormularioNuevaCita()) {
            guardarNuevaCita();
        }
    });

    // Validar y guardar la Revisión
    document.getElementById("submit-revision").addEventListener("click", function (event) {
        event.preventDefault();
        if (validarFormularioRevision()) {
            guardarRevision();
        }
    });

    // Mostrar las citas guardadas
    document.querySelectorAll('.btn-view-citas').forEach(button => {
        button.addEventListener('click', mostrarCitasGuardadas);
    });

    // Cancelar Nueva Cita
    document.getElementById("cancel-new-appointment").addEventListener("click", function () {
        document.getElementById("nueva-cita-form").reset();
        ocultarModal("new-appointment-modal");
    });

    // Cancelar Revisión
    document.getElementById("cancel-revision").addEventListener("click", function () {
        document.getElementById("revision-form").reset();
        ocultarModal("revision-modal");
    });
});

// Función para configurar los eventos de las modales de citas
function configurarModalesDeCitas() {
    const btnSolicitarCita = document.getElementById("btn-open-citas-modal");

    if (btnSolicitarCita) {
        btnSolicitarCita.addEventListener("click", () => {
            mostrarModal("modal-seleccionar-cita");
        });
    }

    // Configurar los eventos de cierre de las modales
    configurarCierreDeModal("close-seleccionar-cita-modal", "modal-seleccionar-cita");
    configurarCierreDeModal("close-new-appointment-modal", "new-appointment-modal");
    configurarCierreDeModal("close-revision-modal", "revision-modal");
    configurarCierreDeModal("close-appointments-modal", "appointments-modal");

    // Abrir modal de Nueva Cita
    document.getElementById("btn-open-new-appointment").addEventListener("click", () => {
        ocultarModal("modal-seleccionar-cita");
        mostrarModal("new-appointment-modal");
    });

    // Abrir modal de Revisión
    document.getElementById("btn-open-revision").addEventListener("click", () => {
        ocultarModal("modal-seleccionar-cita");
        mostrarModal("revision-modal");
    });
}

// Función para buscar por número de chip en Revisión y autocompletar los campos
function buscarPorChip() {
    const chipNumber = document.getElementById("chip-number-revision").value;
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];

    const cita = citasGuardadas.find(cita => cita.chipNumber === chipNumber);

    if (cita) {
        document.getElementById("nombre-mascota-revision").value = cita.nombre;
        document.getElementById("fecha-nacimiento-revision").value = cita.fechaNacimiento;
        document.getElementById("species-revision").value = cita.especie;
        document.getElementById("breed-revision").value = cita.raza;
        document.getElementById("symptoms-revision").value = cita.sintomas || ''; // Opcional
    } else {
        alert("No se encontraron coincidencias para este número de chip.");
    }
}

// Función para cargar las especies y razas en los selectores
function cargarEspeciesYRazas() {
    const speciesSelectNew = document.getElementById("species-new");
    const breedSelectNew = document.getElementById("breed-new");
    const speciesSelectRevision = document.getElementById("species-revision");
    const breedSelectRevision = document.getElementById("breed-revision");

    if (speciesSelectNew && breedSelectNew && speciesSelectRevision && breedSelectRevision) {
        cargarEspecies(speciesSelectNew);
        cargarEspecies(speciesSelectRevision);

        speciesSelectNew.addEventListener("change", function () {
            cargarRazas(speciesSelectNew.value, breedSelectNew);
        });

        speciesSelectRevision.addEventListener("change", function () {
            cargarRazas(speciesSelectRevision.value, breedSelectRevision);
        });
    }
}

// Función para cargar las especies
function cargarEspecies(selectElement) {
    selectElement.innerHTML = '<option value="">Seleccione una especie</option>';
    Object.keys(especies).forEach(function (especie) {
        const option = document.createElement('option');
        option.value = especie;
        option.textContent = especie.charAt(0).toUpperCase() + especie.slice(1);
        selectElement.appendChild(option);
    });
}

// Función para cargar las razas
function cargarRazas(especie, selectElement) {
    selectElement.innerHTML = '<option value="">Seleccione una raza</option>';
    if (especies[especie]) {
        especies[especie].forEach(function (raza) {
            const option = document.createElement('option');
            option.value = raza;
            option.textContent = raza;
            selectElement.appendChild(option);
        });
    }
}

// Configurar el checkbox de antecedentes en Nueva Cita y Revisión
function configurarCheckboxAntecedentes() {
    const antecedentesCheckboxNew = document.getElementById("antecedentes-checkbox");
    const antecedentesCampoNew = document.getElementById("antecedentes");

    const antecedentesCheckboxRevision = document.getElementById("antecedentes-checkbox-revision");
    const antecedentesCampoRevision = document.getElementById("antecedentes-revision");

    antecedentesCheckboxNew?.addEventListener("change", function () {
        antecedentesCampoNew.style.display = antecedentesCheckboxNew.checked ? "block" : "none";
    });

    antecedentesCheckboxRevision?.addEventListener("change", function () {
        antecedentesCampoRevision.style.display = antecedentesCheckboxRevision.checked ? "block" : "none";
    });
}

// Función para validar el formulario de Nueva Cita
function validarFormularioNuevaCita() {
    const camposRequeridos = ['chip-number-new', 'nombre-mascota-new', 'fecha-nacimiento-new', 'species-new', 'breed-new', 'appointment-date-new', 'appointment-time-new'];
    return validarCampos(camposRequeridos);
}

// Función para validar el formulario de Revisión
function validarFormularioRevision() {
    const camposRequeridos = ['chip-number-revision', 'nombre-mascota-revision', 'fecha-nacimiento-revision', 'species-revision', 'breed-revision', 'appointment-date-revision', 'appointment-time-revision'];
    return validarCampos(camposRequeridos);
}

// Función genérica para validar campos requeridos
function validarCampos(campos) {
    let valido = true;
    campos.forEach(function (campo) {
        const input = document.getElementById(campo);
        if (!input.value) {
            valido = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });
    return valido;
}

// Función para guardar una nueva cita en el almacenamiento local
function guardarNuevaCita() {
    const nuevaCita = {
        chipNumber: document.getElementById("chip-number-new").value,
        tipo: 'nueva',
        nombre: document.getElementById("nombre-mascota-new").value,
        fechaNacimiento: document.getElementById("fecha-nacimiento-new").value,
        especie: document.getElementById("species-new").value,
        raza: document.getElementById("breed-new").value,
        sintomas: document.getElementById("symptoms").value,
        fechaCita: document.getElementById("appointment-date-new").value,
        horaCita: document.getElementById("appointment-time-new").value,
    };
    guardarCitaEnLocalStorage(nuevaCita);
    ocultarModal("new-appointment-modal");
}

// Función para guardar una revisión en el almacenamiento local
function guardarRevision() {
    const revision = {
        chipNumber: document.getElementById("chip-number-revision").value,
        tipo: 'revision',
        nombre: document.getElementById("nombre-mascota-revision").value,
        fechaNacimiento: document.getElementById("fecha-nacimiento-revision").value,
        especie: document.getElementById("species-revision").value,
        raza: document.getElementById("breed-revision").value,
        sintomas: document.getElementById("symptoms-revision").value,
        fechaCita: document.getElementById("appointment-date-revision").value,
        horaCita: document.getElementById("appointment-time-revision").value,
    };
    guardarCitaEnLocalStorage(revision);
    ocultarModal("revision-modal");
}

// Función para guardar cita en el almacenamiento local
function guardarCitaEnLocalStorage(cita) {
    let citas = JSON.parse(localStorage.getItem("citas")) || [];
    citas.push(cita);
    localStorage.setItem("citas", JSON.stringify(citas));
}

// Función para mostrar las citas guardadas
function mostrarCitasGuardadas() {
    const appointmentsList = document.getElementById("appointments-list");
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    appointmentsList.innerHTML = ""; // Limpiar la lista

    if (citasGuardadas.length > 0) {
        citasGuardadas.forEach(cita => {
            const listItem = document.createElement("li");
            listItem.textContent = `Cita: ${cita.chipNumber} - ${cita.appointmentDate} a las ${cita.appointmentTime}`;
            
            // Asignar color dependiendo de si es una nueva cita o revisión
            listItem.classList.add(cita.tipo === 'nueva' ? 'cita-nueva' : 'cita-revision');
            appointmentsList.appendChild(listItem);
        });
        mostrarModal("appointments-modal");
    } else {
        alert("No hay citas guardadas.");
    }
}

// Función para mostrar una modal
function mostrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        modal.querySelector('.modal-content').addEventListener('click', event => event.stopPropagation());
        modal.addEventListener('click', () => ocultarModal(modalId));
    }
}

// Función para ocultar una modal
function ocultarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Función para configurar el botón de cierre de una modal
function configurarCierreDeModal(botonCerrarId, modalId) {
    const botonCerrar = document.getElementById(botonCerrarId);
    if (botonCerrar) {
        botonCerrar.addEventListener("click", () => ocultarModal(modalId));
    }
}
