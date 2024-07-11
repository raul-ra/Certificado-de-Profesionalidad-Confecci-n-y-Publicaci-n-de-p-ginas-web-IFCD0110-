document.addEventListener('DOMContentLoaded', function() {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        const path = window.location.pathname;
        let navbarPath = 'components/navbar/navbar.html';
        if (path.includes('/pages/history/')) {
            navbarPath = '../../components/navbar/navbar.html';
        }
        loadComponent('navbar', navbarPath, attachNavbarListeners);
    }
});

const vehicles = {
    volkswagen: [
        { model: "Volkswagen T1", img: "assets/images/t1.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1964, brandLogo: "assets/logo/wwlogo.png", brandUrl: "https://www.volkswagen.es/comunicacion/category/compania/historia/", actualidadUrl: "https://www.volkswagen.es/comunicacion/alrededor-de-487-millones-de-vehiculos-en-todo-el-mundo-la-marca-volkswagen-aumenta-sus-entregas-en-2023/", historyUrl: "pages/history/volkswagen-t1.html" },
        { model: "Volkswagen T2", img: "assets/images/t2.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1968, brandLogo: "assets/logo/wwlogo.png", brandUrl: "https://www.volkswagen.es/comunicacion/category/compania/historia/", actualidadUrl: "https://www.volkswagen.es/comunicacion/alrededor-de-487-millones-de-vehiculos-en-todo-el-mundo-la-marca-volkswagen-aumenta-sus-entregas-en-2023/", historyUrl: "pages/history/volkswagen-t2.html" },
        { model: "Volkswagen T3", img: "assets/images/t3.jpg", basePrice: 25000, matriculation: 600, iva: 5250, year: 1979, brandLogo: "assets/logo/wwlogo.png", brandUrl: "https://www.volkswagen.es/comunicacion/category/compania/historia/", actualidadUrl: "https://www.volkswagen.es/comunicacion/alrededor-de-487-millones-de-vehiculos-en-todo-el-mundo-la-marca-volkswagen-aumenta-sus-entregas-en-2023/", historyUrl: "pages/history/volkswagen-t3.html" },
        { model: "Volkswagen LT", img: "assets/images/lt.jpg", basePrice: 27000, matriculation: 650, iva: 5670, year: 1975, brandLogo: "assets/logo/wwlogo.png", brandUrl: "https://www.volkswagen.es/comunicacion/category/compania/historia/", actualidadUrl: "https://www.volkswagen.es/comunicacion/alrededor-de-487-millones-de-vehiculos-en-todo-el-mundo-la-marca-volkswagen-aumenta-sus-entregas-en-2023/", historyUrl: "pages/history/volkswagen-lt.html" },
    ],
    mercedes: [
        { model: "Mercedes-Benz L319", img: "assets/images/l319.jpg", basePrice: 30000, matriculation: 700, iva: 6300, year: 1955, brandLogo: "assets/logo/mercedeslogo.png", brandUrl: "https://www.mercedes-benz.es/passengercars/brand.html", actualidadUrl: "https://www.mercedes-benz.es/passengercars/brand.html", historyUrl: "pages/history/mercedes-l319.html" },
        { model: "Mercedes-Benz T1", img: "assets/images/mt1.jpg", basePrice: 32000, matriculation: 750, iva: 6720, year: 1977, brandLogo: "assets/logo/mercedeslogo.png", brandUrl: "https://www.mercedes-benz.es/passengercars/brand.html", actualidadUrl: "https://www.mercedes-benz.es/passengercars/brand.html", historyUrl: "pages/history/mercedes-t1.html" },
        { model: "Mercedes-Benz 206D", img: "assets/images/206d.jpg", basePrice: 35000, matriculation: 800, iva: 7350, year: 1967, brandLogo: "assets/logo/mercedeslogo.png", brandUrl: "https://www.mercedes-benz.es/passengercars/brand.html", actualidadUrl: "https://www.mercedes-benz.es/passengercars/brand.html", historyUrl: "pages/history/mercedes-206d.html" },
        { model: "Mercedes-Benz 508D", img: "assets/images/508d.jpg", basePrice: 37000, matriculation: 850, iva: 7770, year: 1980, brandLogo: "assets/logo/mercedeslogo.png", brandUrl: "https://www.mercedes-benz.es/passengercars/brand.html", actualidadUrl: "https://www.mercedes-benz.es/passengercars/brand.html", historyUrl: "pages/history/mercedes-508d.html" },
    ],
    ford: [
        { model: "Ford Transit Mk1", img: "assets/images/mk1.jpg", basePrice: 18000, matriculation: 450, iva: 3780, year: 1965, brandLogo: "assets/logo/fordlogo.png", brandUrl: "https://www.ford.es/experiencia-ford/noticias-ford/nuestro-legado", actualidadUrl: "https://www.ford.es/experiencia-ford/noticias-ford/ventas-2021-ford-europa", historyUrl: "pages/history/ford-transit-mk1.html" },
        { model: "Ford Transit Mk2", img: "assets/images/mk2.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1978, brandLogo: "assets/logo/fordlogo.png", brandUrl: "https://www.ford.es/experiencia-ford/noticias-ford/nuestro-legado", actualidadUrl: "https://www.ford.es/experiencia-ford/noticias-ford/ventas-2021-ford-europa", historyUrl: "pages/history/ford-transit-mk2.html" },
        { model: "Ford Econoline E-100", img: "assets/images/e100.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1975, brandLogo: "assets/logo/fordlogo.png", brandUrl: "https://www.ford.es/experiencia-ford/noticias-ford/nuestro-legado", actualidadUrl: "https://www.ford.es/experiencia-ford/noticias-ford/ventas-2021-ford-europa", historyUrl: "pages/history/ford-econoline-e100.html" },
        { model: "Ford Thames 400E", img: "assets/images/400e.jpg", basePrice: 25000, matriculation: 600, iva: 5250, year: 1957, brandLogo: "assets/logo/fordlogo.png", brandUrl: "https://www.ford.es/experiencia-ford/noticias-ford/nuestro-legado", actualidadUrl: "https://www.ford.es/experiencia-ford/noticias-ford/ventas-2021-ford-europa", historyUrl: "pages/history/ford-thames-400e.html" },
    ],
    citroen: [
        { model: "Citroën HY", img: "assets/images/hy.jpg", basePrice: 16000, matriculation: 400, iva: 3360, year: 1947, brandLogo: "assets/logo/citroenlogo.png", brandUrl: "https://www.citroen.es/universo-citroen/historia.html", actualidadUrl: "https://www.citroen.es/universo-citroen/citroen-en-cifras.html", historyUrl: "pages/history/citroen-hy.html" },
        { model: "Citroën C25", img: "assets/images/c25.jpg", basePrice: 18000, matriculation: 450, iva: 3780, year: 1981, brandLogo: "assets/logo/citroenlogo.png", brandUrl: "https://www.citroen.es/universo-citroen/historia.html", actualidadUrl: "https://www.citroen.es/universo-citroen/citroen-en-cifras.html", historyUrl: "pages/history/citroen-c25.html" },
        { model: "Citroën Type H", img: "assets/images/typeh.jpg", basePrice: 20000, matriculation: 500, iva: 4200, year: 1948, brandLogo: "assets/logo/citroenlogo.png", brandUrl: "https://www.citroen.es/universo-citroen/historia.html", actualidadUrl: "https://www.citroen.es/universo-citroen/citroen-en-cifras.html", historyUrl: "pages/history/citroen-typeh.html" },
        { model: "Citroën 2CV Fourgonnette", img: "assets/images/2cv.jpg", basePrice: 22000, matriculation: 550, iva: 4620, year: 1951, brandLogo: "assets/logo/citroenlogo.png", brandUrl: "https://www.citroen.es/universo-citroen/historia.html", actualidadUrl: "https://www.citroen.es/universo-citroen/citroen-en-cifras.html", historyUrl: "pages/history/citroen-2cv.html" },
    ],
};

// Función para cargar componentes HTML de manera dinámica
function loadComponent(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

// Función para adjuntar oyentes de eventos a los enlaces de la barra de navegación
function attachNavbarListeners() {
    const links = document.querySelectorAll('.navbar__link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const brand = this.textContent.toLowerCase().replace(/-benz/g, '').replace('é', 'e');
            showModels(brand);
        });
    });
}

// Función para mostrar la lista de modelos de una marca seleccionada
function showModels(brand) {
    const modelList = document.getElementById('model-list');
    modelList.innerHTML = '';

    vehicles[brand].forEach(vehicle => {
        const modelItem = document.createElement('div');
        modelItem.className = 'model-list__item';
        modelItem.innerHTML = `<a href="#" onclick="showVehicleInfo('${brand}', '${vehicle.model}')">${vehicle.model}</a>`;
        modelList.appendChild(modelItem);
    });
}

// Función para mostrar la información del vehículo seleccionado
function showVehicleInfo(brand, model) {
    clearHistory();  // Limpiar el contenido de la historia antes de mostrar la nueva información
    const vehicle = vehicles[brand].find(v => v.model === model);
    const vehicleInfo = document.getElementById('vehicle-info');
    vehicleInfo.style.display = 'flex';
    vehicleInfo.innerHTML = `
        <div class="vehicle-info__header-container">
            <img src="${vehicle.brandLogo}" alt="${brand} logo" class="vehicle-info__logo" onclick="window.location.href='${vehicle.brandUrl}'">
            <div class="vehicle-info__header">${vehicle.model}</div>
        </div>
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
            <div class="vehicle-info__model-name">${vehicle.model}, ${vehicle.year}</div>
        </div>
        <div class="vehicle-info__buttons">
            <button class="button vehicle-info__button" onclick="window.location.href='${vehicle.historyUrl}'">Historia</button>
            <button class="button vehicle-info__button" onclick="window.open('${vehicle.actualidadUrl}', '_blank')">Actualidad</button>
            <button class="button vehicle-info__button" onclick="showPriceList()">Lista de precios</button>
        </div>
    `;
}

// Función para mostrar la lista de precios de todos los modelos
function showPriceList() {
    const vehicleInfo = document.getElementById('vehicle-info');
    vehicleInfo.innerHTML = ''; // Limpiar contenido actual

    let priceListHTML = '';

    Object.keys(vehicles).forEach(brand => {
        priceListHTML += `
            <div class="price-list__header">
                <img src="${vehicles[brand][0].brandLogo}" alt="${brand} logo" class="price-list__logo">
                <h2>${brand.charAt(0).toUpperCase() + brand.slice(1)}</h2>
            </div>
            <table class="price-list__table">
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Precio Base</th>
                        <th>Precio Matriculación</th>
                        <th>IVA</th>
                        <th>Precio Final</th>
                    </tr>
                </thead>
                <tbody>
        `;

        vehicles[brand].forEach(vehicle => {
            const finalPrice = vehicle.basePrice + vehicle.matriculation + vehicle.iva;
            priceListHTML += `
                <tr>
                    <td>${vehicle.model}</td>
                    <td>${vehicle.basePrice} €</td>
                    <td>${vehicle.matriculation} €</td>
                    <td>${vehicle.iva} €</td>
                    <td>${finalPrice} €</td>
                </tr>
            `;
        });

        priceListHTML += `
                </tbody>
            </table>
        `;
    });

    vehicleInfo.innerHTML = priceListHTML;
}

// Limpiar el contenido de la historia cuando se selecciona un nuevo modelo
function clearHistory() {
    const historyElement = document.querySelector('.history');
    if (historyElement) {
        historyElement.remove();
    }
}
