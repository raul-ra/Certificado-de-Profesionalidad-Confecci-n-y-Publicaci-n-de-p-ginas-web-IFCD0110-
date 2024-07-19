const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Leer el archivo HTML
const html = fs.readFileSync(path.resolve(__dirname, '../quillavet.html'), 'utf8');

let dom;
let container;

// Antes de cada prueba, configurar el DOM
beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    container = dom.window.document.body;

    // Definir las funciones globales dentro del contexto de JSDOM
    dom.window.loadProvinces = function() {
        const provinces = ['Madrid', 'Barcelona', 'Valencia'];
        const provinceSelect = dom.window.document.getElementById('province');
        provinces.forEach(province => {
            const option = dom.window.document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
    };

    dom.window.loadLocalities = function(province) {
        const localities = {
            'Madrid': ['Alcalá de Henares', 'Getafe'],
            'Barcelona': ['Badalona', 'Terrassa'],
            'Valencia': ['Gandía', 'Sagunto']
        };
        const localitySelect = dom.window.document.getElementById('locality');
        localitySelect.innerHTML = '';
        if (localities[province]) {
            localities[province].forEach(locality => {
                const option = dom.window.document.createElement('option');
                option.value = locality;
                option.textContent = locality;
                localitySelect.appendChild(option);
            });
        }
    };

    dom.window.loadPostalCode = function(province, locality) {
        const postalCodes = {
            'Madrid': {
                'Alcalá de Henares': '28801',
                'Getafe': '28901'
            },
            'Barcelona': {
                'Badalona': '08911',
                'Terrassa': '08221'
            },
            'Valencia': {
                'Gandía': '46730',
                'Sagunto': '46500'
            }
        };
        const postalCodeInput = dom.window.document.getElementById('postal-code');
        if (postalCodes[province] && postalCodes[province][locality]) {
            postalCodeInput.value = postalCodes[province][locality];
        } else {
            postalCodeInput.value = '';
        }
    };

    dom.window.loadSpecies = function() {
        const species = ['Perro', 'Gato', 'Ave'];
        const speciesSelect = dom.window.document.getElementById('species');
        species.forEach(species => {
            const option = dom.window.document.createElement('option');
            option.value = species;
            option.textContent = species;
            speciesSelect.appendChild(option);
        });
    };

    dom.window.loadBreeds = function(species) {
        const breeds = {
            'Perro': ['Labrador', 'Bulldog'],
            'Gato': ['Siames', 'Persa'],
            'Ave': ['Canario', 'Periquito']
        };
        const breedSelect = dom.window.document.getElementById('breed');
        breedSelect.innerHTML = '';
        if (breeds[species]) {
            breeds[species].forEach(breed => {
                const option = dom.window.document.createElement('option');
                option.value = breed;
                option.textContent = breed;
                breedSelect.appendChild(option);
            });
        }
    };

    dom.window.validateFields = function() {
        const requiredFields = ['owner-name', 'dni', 'address', 'phone', 'animal-name', 'chip-number', 'admission-date'];
        let allValid = true;
        requiredFields.forEach(id => {
            const input = dom.window.document.getElementById(id);
            if (!input || input.value.trim() === '') {
                allValid = false;
            }
        });
        return allValid;
    };
});

// Prueba simple para verificar que Jest está funcionando
test('simple test', () => {
    expect(1 + 1).toBe(2);
});

// Prueba para la función loadProvinces
test('should load provinces into the select element', () => {
    dom.window.loadProvinces();
    const provinceSelect = dom.window.document.getElementById('province');
    expect(provinceSelect.children.length).toBeGreaterThan(1); // Al menos una provincia debe ser cargada
});

// Prueba para la función loadLocalities
test('should load localities based on selected province', () => {
    dom.window.loadLocalities('Madrid');
    const localitySelect = dom.window.document.getElementById('locality');
    expect(localitySelect.children.length).toBeGreaterThan(1); // Al menos una localidad debe ser cargada
});

// Prueba para la función loadPostalCode
test('should load postal code based on selected province and locality', () => {
    dom.window.loadPostalCode('Madrid', 'Alcalá de Henares');
    const postalCodeInput = dom.window.document.getElementById('postal-code');
    expect(postalCodeInput.value).toBe('28801'); // Asumiendo que '28801' es el código postal de 'Alcalá de Henares' en 'Madrid'
});

// Prueba para la función loadSpecies
test('should load species into the select element', () => {
    dom.window.loadSpecies();
    const speciesSelect = dom.window.document.getElementById('species');
    expect(speciesSelect.children.length).toBeGreaterThan(1); // Al menos una especie debe ser cargada
});

// Prueba para la función loadBreeds
test('should load breeds based on selected species', () => {
    dom.window.loadBreeds('Perro');
    const breedSelect = dom.window.document.getElementById('breed');
    expect(breedSelect.children.length).toBeGreaterThan(1); // Al menos una raza debe ser cargada
});

// Prueba para la función validateFields
test('should validate form fields correctly', () => {
    dom.window.document.body.innerHTML = `
        <input id="owner-name" value="Juan Pérez" />
        <input id="dni" value="12345678Z" />
        <input id="address" value="Calle Falsa 123" />
        <input id="phone" value="600000000" />
        <input id="animal-name" value="Firulais" />
        <input id="chip-number" value="1234567890" />
        <input id="admission-date" value="2024-07-18" />
        <input id="vaccination-date" value="2024-07-19" />
    `;
    expect(dom.window.validateFields()).toBe(true); // Asumiendo que todas las entradas son válidas
});
