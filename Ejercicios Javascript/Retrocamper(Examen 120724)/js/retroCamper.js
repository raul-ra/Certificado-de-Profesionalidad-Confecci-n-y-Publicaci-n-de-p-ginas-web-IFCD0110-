// Ejecuta la función cuando el contenido del documento ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar', 'components/navbar/navbar.html');
});

// Objeto que contiene la información de los vehículos
const vehicles = {
    volkswagen: [
        { model: "Volkswagen T1", img: "assets/images/t1.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1964 },
        { model: "Volkswagen T2", img: "assets/images/t2.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1968 },
        { model: "Volkswagen T3", img: "assets/images/t3.jpg", basePrice: 25000, matriculation: 600, iva: 5250, year: 1979 },
        { model: "Volkswagen LT", img: "assets/images/lt.jpg", basePrice: 27000, matriculation: 650, iva: 5670, year: 1975 },
    ],
    mercedes: [
        { model: "Mercedes-Benz L319", img: "assets/images/l319.jpg", basePrice: 30000, matriculation: 700, iva: 6300, year: 1955 },
        { model: "Mercedes-Benz T1", img: "assets/images/mt1.jpg", basePrice: 32000, matriculation: 750, iva: 6720, year: 1977 },
        { model: "Mercedes-Benz 206D", img: "assets/images/206d.jpg", basePrice: 35000, matriculation: 800, iva: 7350, year: 1967 },
        { model: "Mercedes-Benz 508D", img: "assets/images/508d.jpg", basePrice: 37000, matriculation: 850, iva: 7770, year: 1980 },
    ],
    ford: [
        { model: "Ford Transit Mk1", img: "assets/images/mk1.jpg", basePrice: 18000, matriculation: 450, iva: 3780, year: 1965 },
        { model: "Ford Transit Mk2", img: "assets/images/mk2.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1978 },
        { model: "Ford Econoline E-100", img: "assets/images/e100.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1975 },
        { model: "Ford Thames 400E", img: "assets/images/400e.jpg", basePrice: 25000, matriculation: 600, iva: 5250, year: 1957 },
    ],
    citroen: [
        { model: "Citroën HY", img: "assets/images/hy.jpg", basePrice: 16000, matriculation: 400, iva: 3360, year: 1947 },
        { model: "Citroën C25", img: "assets/images/c25.jpg", basePrice: 18000, matriculation: 450, iva: 3780, year: 1981 },
        { model: "Citroën Type H", img: "assets/images/typeh.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1948 },
        { model: "Citroën 2CV Fourgonnette", img: "assets/images/2cv.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1951 },
    ],
};

// Función para cargar componentes HTML de manera dinámica
function loadComponent(id, url) {
    // Realiza una petición fetch para obtener el contenido del componente
    fetch(url)
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => document.getElementById(id).innerHTML = data); // Inserta el contenido en el elemento con el id especificado
}

// Función para mostrar la lista de modelos de una marca seleccionada
function showModels(brand) {
    const modelList = document.getElementById('model-list'); // Obtiene el elemento de la lista de modelos
    modelList.innerHTML = ''; // Limpia cualquier contenido previo en la lista

    // Itera sobre los vehículos de la marca seleccionada
    vehicles[brand].forEach(vehicle => {
        const modelItem = document.createElement('div'); // Crea un nuevo div para cada modelo
        modelItem.className = 'model-list__item'; // Asigna la clase BEM correspondiente
        // Inserta el enlace con el nombre del modelo y una función para mostrar la información del vehículo al hacer clic
        modelItem.innerHTML = `<a href="#" onclick="showVehicleInfo('${brand}', '${vehicle.model}')">${vehicle.model}</a>`;
        modelList.appendChild(modelItem); // Añade el modelo a la lista de modelos
    });
}

// Función para mostrar la información del vehículo seleccionado
function showVehicleInfo(brand, model) {
    // Encuentra el vehículo seleccionado en la lista de vehículos de la marca
    const vehicle = vehicles[brand].find(v => v.model === model);
    const vehicleInfo = document.getElementById('vehicle-info'); // Obtiene el elemento donde se mostrará la información del vehículo
    vehicleInfo.style.display = 'flex'; // Asegura que el contenedor de la información esté visible
    // Inserta la información del vehículo en el contenedor
    vehicleInfo.innerHTML = `
        <div class="vehicle-info__header">${vehicle.model}</div>
        <div class="vehicle-info__price-table">
            <div class="vehicle-info__price-item">
                <h3>Precio Base</h3>
                <p>${vehicle.basePrice} €</p>
            </div>
            <div class="vehicle-info__price-item">
                <h3>Precio Matriculación</h3>
                <p>${vehicle.matriculation} €</p>
            </div>
            <div class="vehicle-info__price-item">
                <h3>Precio con IVA</h3>
                <p>${vehicle.basePrice + vehicle.iva} €</p>
            </div>
        </div>
        <div class="vehicle-info__image-container">
            <img class="vehicle-info__image" src="${vehicle.img}" alt="${vehicle.model}">
            <div class="vehicle-info__model-name">${brand} ${vehicle.model}, ${vehicle.year}</div>
        </div>
    `;
}
