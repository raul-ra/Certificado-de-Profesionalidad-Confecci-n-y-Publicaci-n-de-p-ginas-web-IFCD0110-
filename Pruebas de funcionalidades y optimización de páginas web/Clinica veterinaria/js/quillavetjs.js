// Especies y razas
const especies = {
    perro: [
        "Labrador", "Bulldog", "Poodle", "Pastor Alemán", "Golden Retriever", "Beagle", "Chihuahua",
        "Pomerania", "Dálmata", "Rottweiler", "Boxer", "Shih Tzu", "Bulldog Francés", "Cocker Spaniel", "Doberman"
    ],
    gato: [
        "Siames", "Persa", "Maine Coon", "Bengala", "Sphynx", "Ragdoll", "British Shorthair",
        "Abyssinian", "Birmano", "Oriental", "Scottish Fold", "Siberiano", "Exótico", "Savannah", "Devon Rex"
    ],
    reptil: [
        "Iguana", "Gecko", "Pitón", "Camaleón", "Dragón Barbudo", "Serpiente del Maíz", "Anolis",
        "Tortuga", "Boa", "Lagarto Monitor", "Caimán", "Tarántula", "Escorpión", "Salamandra", "Axolotl"
    ],
    roedor: [
        "Hamster", "Cobaya", "Ratón", "Chinchilla", "Jerbo", "Rata", "Ardilla", "Degú",
        "Conejo", "Erizo", "Cuy", "Paca", "Pacarana", "Agutí", "Capibara"
    ],
    ave: [
        "Canario", "Periquito", "Cacatúa", "Agapornis", "Loro", "Ninfa", "Jilguero", "Gorrión",
        "Halcón", "Águila", "Búho", "Lechuza", "Cisne", "Pato", "Flamenco"
    ],
    caballo: [
        "Andaluz", "Árabe", "Pura Sangre", "Percherón", "Mustang", "Appaloosa", "Cuarto de Milla",
        "Frisón", "Clydesdale", "Shetland", "Lusitano", "Morgan", "Tennessee Walker", "Lipizzano", "Hannoveriano"
    ]
};

// Provincias y localidades
const provincias = {
    "Madrid": ["Madrid", "Alcalá de Henares", "Getafe", "Leganés", "Móstoles", "Fuenlabrada", "Alcorcón", "Torrejón de Ardoz", "Pozuelo de Alarcón", "Parla"],
    "Barcelona": ["Barcelona", "Badalona", "Hospitalet de Llobregat", "Sabadell", "Terrassa", "Mataró", "Santa Coloma de Gramenet", "Cornellà de Llobregat", "Sant Boi de Llobregat", "Manresa"],
    "Valencia": ["Valencia", "Gandía", "Torrent", "Paterna", "Sagunto", "Alzira", "Mislata", "Burjassot", "Xàtiva", "Cullera"],
    "Sevilla": ["Sevilla", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Mairena del Aljarafe", "Écija", "La Rinconada", "Los Palacios y Villafranca", "Carmona", "Coria del Río"],
    "Málaga": ["Málaga", "Marbella", "Mijas", "Fuengirola", "Estepona", "Torremolinos", "Benalmádena", "Vélez-Málaga", "Rincón de la Victoria", "Alhaurín de la Torre"],
    "A Coruña": ["A Coruña", "Santiago de Compostela", "Ferrol", "Narón", "Oleiros", "Carballo", "Arteixo", "Ribeira", "Culleredo", "Betanzos"],
    "Álava": ["Vitoria-Gasteiz", "Llodio", "Amurrio", "Salvatierra", "Ayala", "Agurain", "Artziniega", "Elciego", "Labastida", "Iruña Oka"],
    "Albacete": ["Albacete", "Hellín", "Villarrobledo", "Almansa", "La Roda", "Caudete", "Tobarra", "Tarazona de la Mancha", "Madrigueras", "Elche de la Sierra"],
    "Alicante": ["Alicante", "Elche", "Torrevieja", "Orihuela", "Benidorm", "Elda", "Alcoy", "Denia", "Villena", "San Vicente del Raspeig"],
    "Almería": ["Almería", "Roquetas de Mar", "El Ejido", "Níjar", "Adra", "Vícar", "Huércal de Almería", "Berja", "Cuevas del Almanzora", "Mojácar"],
    "Asturias": ["Oviedo", "Gijón", "Avilés", "Langreo", "Mieres", "Cangas del Narcea", "Siero", "Villaviciosa", "Llanes", "Navia"],
    "Ávila": ["Ávila", "Arévalo", "Arenas de San Pedro", "Cebreros", "El Tiemblo", "Las Navas del Marqués", "Piedralaves", "El Barco de Ávila", "Candeleda", "La Adrada"],
    "Badajoz": ["Badajoz", "Mérida", "Don Benito", "Almendralejo", "Villanueva de la Serena", "Zafra", "Montijo", "Olivenza", "Jerez de los Caballeros", "Azuaga"],
    "Baleares": ["Palma", "Ibiza", "Manacor", "Inca", "Ciutadella", "Maó", "Llucmajor", "Marratxí", "Calvià", "Felanitx"],
    "Burgos": ["Burgos", "Miranda de Ebro", "Aranda de Duero", "Briviesca", "Lerma", "Medina de Pomar", "Villarcayo", "Salas de los Infantes", "Belorado", "Melgar de Fernamental"],
    "Cáceres": ["Cáceres", "Plasencia", "Navalmoral de la Mata", "Trujillo", "Miajadas", "Coria", "Almoharín", "Jarandilla de la Vera", "Jaraíz de la Vera", "Moraleja"],
    "Cádiz": ["Cádiz", "Jerez de la Frontera", "Algeciras", "San Fernando", "El Puerto de Santa María", "Chiclana de la Frontera", "Sanlúcar de Barrameda", "La Línea de la Concepción", "Rota", "Conil de la Frontera"],
    "Cantabria": ["Santander", "Torrelavega", "Castro Urdiales", "Camargo", "Piélagos", "El Astillero", "Laredo", "Santa Cruz de Bezana", "Los Corrales de Buelna", "Reinosa"],
    "Castellón": ["Castellón de la Plana", "Villarreal", "Borriana", "Vila-real", "La Vall d'Uixó", "Onda", "Benicarló", "Vinaròs", "Almazora", "Segorbe"],
    "Ciudad Real": ["Ciudad Real", "Puertollano", "Alcázar de San Juan", "Valdepeñas", "Tomelloso", "Manzanares", "Daimiel", "La Solana", "Campo de Criptana", "Socuéllamos"],
    "Córdoba": ["Córdoba", "Lucena", "Puente Genil", "Montilla", "Priego de Córdoba", "Cabra", "Baena", "Pozoblanco", "Peñarroya-Pueblonuevo", "Rute"],
    "Cuenca": ["Cuenca", "Tarancón", "San Clemente", "Quintanar del Rey", "Mota del Cuervo", "Motilla del Palancar", "Horcajo de Santiago", "Iniesta", "Las Pedroñeras", "Las Mesas"],
    "Girona": ["Girona", "Figueres", "Blanes", "Lloret de Mar", "Olot", "Salt", "Palafrugell", "Sant Feliu de Guíxols", "Roses", "Banyoles"],
    "Granada": ["Granada", "Motril", "Almuñécar", "Armilla", "Maracena", "Loja", "Baza", "Huétor Vega", "Las Gabias", "Guadix"],
    "Guadalajara": ["Guadalajara", "Azuqueca de Henares", "Alovera", "Cabanillas del Campo", "El Casar", "Marchamalo", "Sigüenza", "Molina de Aragón", "Yunquera de Henares", "Chiloeches"],
    "Guipúzcoa": ["San Sebastián", "Irun", "Errenteria", "Eibar", "Zarautz", "Arrasate/Mondragón", "Hernani", "Lasarte-Oria", "Tolosa", "Andoain"],
    "Huelva": ["Huelva", "Lepe", "Almonte", "Moguer", "Isla Cristina", "Ayamonte", "Punta Umbría", "Cartaya", "Bollullos Par del Condado", "Valverde del Camino"],
    "Huesca": ["Huesca", "Monzón", "Barbastro", "Jaca", "Fraga", "Sabiñánigo", "Binéfar", "Graus", "Sariñena", "Almudévar"],
    "Jaén": ["Jaén", "Linares", "Andújar", "Úbeda", "Martos", "Alcalá la Real", "Bailén", "Baeza", "Jódar", "La Carolina"],
    "La Rioja": ["Logroño", "Calahorra", "Arnedo", "Haro", "Alfaro", "Nájera", "Lardero", "Santo Domingo de la Calzada", "Villamediana de Iregua", "Ezcaray"],
    "Las Palmas": ["Las Palmas de Gran Canaria", "Telde", "Santa Lucía de Tirajana", "Arrecife", "San Bartolomé de Tirajana", "Arucas", "Ingenio", "Agüimes", "Puerto del Rosario", "Gáldar"],
    "León": ["León", "Ponferrada", "San Andrés del Rabanedo", "Astorga", "La Bañeza", "Bembibre", "Villablino", "Sahagún", "Cistierna", "Valencia de Don Juan"],
    "Lleida": ["Lleida", "Balaguer", "Tàrrega", "La Seu d'Urgell", "Cervera", "Mollerussa", "Alcarràs", "Almacelles", "Alpicat", "Les Borges Blanques"],
    "Lugo": ["Lugo", "Monforte de Lemos", "Viveiro", "Vilalba", "Sarria", "Ribadeo", "Foz", "Burela", "Chantada", "Palas de Rei"],
    "Murcia": ["Murcia", "Cartagena", "Lorca", "Molina de Segura", "Alcantarilla", "Yecla", "Mazarrón", "Cieza", "Águilas", "San Javier"],
    "Navarra": ["Pamplona", "Tudela", "Barañáin", "Estella-Lizarra", "Zizur Mayor", "Burlada", "Villava", "Ansoáin", "Tafalla", "Berriozar"],
    "Ourense": ["Ourense", "Verín", "O Barco de Valdeorras", "Xinzo de Limia", "Celanova", "Allariz", "Barbadás", "O Carballiño", "Ribadavia", "A Rúa"],
    "Palencia": ["Palencia", "Aguilar de Campoo", "Venta de Baños", "Guardo", "Cervera de Pisuerga", "Villamuriel de Cerrato", "Saldaña", "Paredes de Nava", "Dueñas", "Velilla del Río Carrión"],
    "Pontevedra": ["Vigo", "Pontevedra", "Vilagarcía de Arousa", "Redondela", "Marín", "Cangas", "Lalín", "Moaña", "Tui", "O Porriño"],
    "Salamanca": ["Salamanca", "Béjar", "Ciudad Rodrigo", "Santa Marta de Tormes", "Villamayor", "Carbajosa de la Sagrada", "Peñaranda de Bracamonte", "Guijuelo", "Alba de Tormes", "Vitigudino"],
    "Segovia": ["Segovia", "Cuéllar", "El Espinar", "San Ildefonso", "Cantalejo", "Riaza", "Nava de la Asunción", "Carbonero el Mayor", "Turégano", "La Lastrilla"],
    "Soria": ["Soria", "Almazán", "El Burgo de Osma", "San Esteban de Gormaz", "Golmayo", "Ólvega", "Duruelo de la Sierra", "San Leonardo de Yagüe", "Vinuesa", "Covaleda"],
    "Tarragona": ["Tarragona", "Reus", "Vendrell", "Cambrils", "Salou", "Tortosa", "Amposta", "Calafell", "Valls", "Altafulla"],
    "Santa Cruz de Tenerife": ["Santa Cruz de Tenerife", "San Cristóbal de La Laguna", "Arona", "Adeje", "La Orotava", "Granadilla de Abona", "Los Realejos", "Puerto de la Cruz", "Icod de los Vinos", "Guía de Isora"],
    "Teruel": ["Teruel", "Alcañiz", "Andorra", "Calamocha", "Utrillas", "Monreal del Campo", "Cella", "Albarracín", "Alcorisa", "Mora de Rubielos"],
    "Toledo": ["Toledo", "Talavera de la Reina", "Illescas", "Seseña", "Torrijos", "Ocaña", "Sonseca", "Quintanar de la Orden", "Madridejos", "Mora"],
    "Valladolid": ["Valladolid", "Medina del Campo", "Laguna de Duero", "Tordesillas", "Cigales", "Tudela de Duero", "Arroyo de la Encomienda", "Zaratán", "Íscar", "Simancas"],
    "Vizcaya": ["Bilbao", "Barakaldo", "Getxo", "Portugalete", "Santurtzi", "Basauri", "Galdakao", "Sestao", "Leioa", "Erandio"],
    "Zamora": ["Zamora", "Benavente", "Toro", "Morales del Vino", "Villaralbo", "Coreses", "San Cristóbal de Entreviñas", "Fuentesaúco", "Villalpando", "Puebla de Sanabria"],
    "Zaragoza": ["Zaragoza", "Calatayud", "Utebo", "Ejea de los Caballeros", "Cuarte de Huerva", "Caspe", "Alagón", "Tarazona", "Zuera", "La Almunia de Doña Godina"]
};

// Códigos postales
const codigosPostales = {
    "Madrid": {
        "Madrid": "28001",
        "Alcalá de Henares": "28801",
        "Getafe": "28901",
        "Leganés": "28910",
        "Móstoles": "28930",
        "Fuenlabrada": "28940",
        "Alcorcón": "28920",
        "Torrejón de Ardoz": "28850",
        "Pozuelo de Alarcón": "28223",
        "Parla": "28980"
    },
    "Barcelona": {
        "Barcelona": "08001",
        "Badalona": "08910",
        "Hospitalet de Llobregat": "08901",
        "Sabadell": "08201",
        "Terrassa": "08221",
        "Mataró": "08301",
        "Santa Coloma de Gramenet": "08921",
        "Cornellà de Llobregat": "08940",
        "Sant Boi de Llobregat": "08830",
        "Manresa": "08240"
    },
    "Valencia": {
        "Valencia": "46001",
        "Gandía": "46730",
        "Torrent": "46900",
        "Paterna": "46980",
        "Sagunto": "46500",
        "Alzira": "46600",
        "Mislata": "46920",
        "Burjassot": "46100",
        "Xàtiva": "46800",
        "Cullera": "46400"
    },
    "Sevilla": {
        "Sevilla": "41001",
        "Dos Hermanas": "41700",
        "Alcalá de Guadaíra": "41500",
        "Utrera": "41710",
        "Mairena del Aljarafe": "41927",
        "Écija": "41400",
        "La Rinconada": "41309",
        "Los Palacios y Villafranca": "41720",
        "Carmona": "41410",
        "Coria del Río": "41100"
    },
    "Málaga": {
        "Málaga": "29001",
        "Marbella": "29601",
        "Mijas": "29650",
        "Fuengirola": "29640",
        "Estepona": "29680",
        "Torremolinos": "29620",
        "Benalmádena": "29630",
        "Vélez-Málaga": "29700",
        "Rincón de la Victoria": "29730",
        "Alhaurín de la Torre": "29130"
    },
    "A Coruña": {
        "A Coruña": "15001",
        "Santiago de Compostela": "15701",
        "Ferrol": "15401",
        "Narón": "15570",
        "Oleiros": "15173",
        "Carballo": "15100",
        "Arteixo": "15142",
        "Ribeira": "15960",
        "Culleredo": "15189",
        "Betanzos": "15300"
    },
    "Álava": {
        "Vitoria-Gasteiz": "01001",
        "Llodio": "01400",
        "Amurrio": "01470",
        "Salvatierra": "01200",
        "Ayala": "01476",
        "Agurain": "01200",
        "Artziniega": "01474",
        "Elciego": "01340",
        "Labastida": "01330",
        "Iruña Oka": "01230"
    },
    "Albacete": {
        "Albacete": "02001",
        "Hellín": "02400",
        "Villarrobledo": "02600",
        "Almansa": "02640",
        "La Roda": "02630",
        "Caudete": "02660",
        "Tobarra": "02500",
        "Tarazona de la Mancha": "02100",
        "Madrigueras": "02230",
        "Elche de la Sierra": "02430"
    },
    "Alicante": {
        "Alicante": "03001",
        "Elche": "03201",
        "Torrevieja": "03180",
        "Orihuela": "03300",
        "Benidorm": "03501",
        "Elda": "03600",
        "Alcoy": "03801",
        "Denia": "03700",
        "Villena": "03400",
        "San Vicente del Raspeig": "03690"
    },
    "Almería": {
        "Almería": "04001",
        "Roquetas de Mar": "04740",
        "El Ejido": "04700",
        "Níjar": "04100",
        "Adra": "04770",
        "Vícar": "04738",
        "Huércal de Almería": "04230",
        "Berja": "04760",
        "Cuevas del Almanzora": "04610",
        "Mojácar": "04638"
    },
    "Asturias": {
        "Oviedo": "33001",
        "Gijón": "33201",
        "Avilés": "33400",
        "Langreo": "33900",
        "Mieres": "33600",
        "Cangas del Narcea": "33800",
        "Siero": "33510",
        "Villaviciosa": "33300",
        "Llanes": "33500",
        "Navia": "33710"
    },
    "Ávila": {
        "Ávila": "05001",
        "Arévalo": "05200",
        "Arenas de San Pedro": "05400",
        "Cebreros": "05260",
        "El Tiemblo": "05270",
        "Las Navas del Marqués": "05230",
        "Piedralaves": "05440",
        "El Barco de Ávila": "05600",
        "Candeleda": "05480",
        "La Adrada": "05430"
    },
    "Badajoz": {
        "Badajoz": "06001",
        "Mérida": "06800",
        "Don Benito": "06400",
        "Almendralejo": "06200",
        "Villanueva de la Serena": "06700",
        "Zafra": "06300",
        "Montijo": "06480",
        "Olivenza": "06100",
        "Jerez de los Caballeros": "06380",
        "Azuaga": "06920"
    },
    "Baleares": {
        "Palma": "07001",
        "Ibiza": "07800",
        "Manacor": "07500",
        "Inca": "07300",
        "Ciutadella": "07760",
        "Maó": "07701",
        "Llucmajor": "07620",
        "Marratxí": "07141",
        "Calvià": "07184",
        "Felanitx": "07200"
    },
    "Burgos": {
        "Burgos": "09001",
        "Miranda de Ebro": "09200",
        "Aranda de Duero": "09400",
        "Briviesca": "09240",
        "Lerma": "09340",
        "Medina de Pomar": "09500",
        "Villarcayo": "09550",
        "Salas de los Infantes": "09600",
        "Belorado": "09250",
        "Melgar de Fernamental": "09100"
    },
    "Cáceres": {
        "Cáceres": "10001",
        "Plasencia": "10600",
        "Navalmoral de la Mata": "10300",
        "Trujillo": "10200",
        "Miajadas": "10100",
        "Coria": "10800",
        "Almoharín": "10130",
        "Jarandilla de la Vera": "10450",
        "Jaraíz de la Vera": "10400",
        "Moraleja": "10840"
    },
    "Cádiz": {
        "Cádiz": "11001",
        "Jerez de la Frontera": "11401",
        "Algeciras": "11201",
        "San Fernando": "11100",
        "El Puerto de Santa María": "11500",
        "Chiclana de la Frontera": "11130",
        "Sanlúcar de Barrameda": "11540",
        "La Línea de la Concepción": "11300",
        "Rota": "11520",
        "Conil de la Frontera": "11140"
    },
    "Cantabria": {
        "Santander": "39001",
        "Torrelavega": "39300",
        "Castro Urdiales": "39700",
        "Camargo": "39600",
        "Piélagos": "39470",
        "El Astillero": "39610",
        "Laredo": "39770",
        "Santa Cruz de Bezana": "39100",
        "Los Corrales de Buelna": "39400",
        "Reinosa": "39200"
    },
    "Castellón": {
        "Castellón de la Plana": "12001",
        "Villarreal": "12540",
        "Borriana": "12530",
        "Vila-real": "12540",
        "La Vall d'Uixó": "12600",
        "Onda": "12200",
        "Benicarló": "12580",
        "Vinaròs": "12500",
        "Almazora": "12550",
        "Segorbe": "12400"
    },
    "Ciudad Real": {
        "Ciudad Real": "13001",
        "Puertollano": "13500",
        "Alcázar de San Juan": "13600",
        "Valdepeñas": "13300",
        "Tomelloso": "13700",
        "Manzanares": "13200",
        "Daimiel": "13250",
        "La Solana": "13240",
        "Campo de Criptana": "13610",
        "Socuéllamos": "13630"
    },
    "Córdoba": {
        "Córdoba": "14001",
        "Lucena": "14900",
        "Puente Genil": "14500",
        "Montilla": "14550",
        "Priego de Córdoba": "14800",
        "Cabra": "14940",
        "Baena": "14850",
        "Pozoblanco": "14400",
        "Peñarroya-Pueblonuevo": "14200",
        "Rute": "14960"
    },
    "Cuenca": {
        "Cuenca": "16001",
        "Tarancón": "16400",
        "San Clemente": "16600",
        "Quintanar del Rey": "16220",
        "Mota del Cuervo": "16630",
        "Motilla del Palancar": "16200",
        "Horcajo de Santiago": "16410",
        "Iniesta": "16235",
        "Las Pedroñeras": "16650",
        "Las Mesas": "16650"
    },
    "Girona": {
        "Girona": "17001",
        "Figueres": "17600",
        "Blanes": "17300",
        "Lloret de Mar": "17310",
        "Olot": "17800",
        "Salt": "17190",
        "Palafrugell": "17200",
        "Sant Feliu de Guíxols": "17220",
        "Roses": "17480",
        "Banyoles": "17820"
    },
    "Granada": {
        "Granada": "18001",
        "Motril": "18600",
        "Almuñécar": "18690",
        "Armilla": "18100",
        "Maracena": "18200",
        "Loja": "18300",
        "Baza": "18800",
        "Huétor Vega": "18198",
        "Las Gabias": "18110",
        "Guadix": "18500"
    },
    "Guadalajara": {
        "Guadalajara": "19001",
        "Azuqueca de Henares": "19200",
        "Alovera": "19208",
        "Cabanillas del Campo": "19171",
        "El Casar": "19170",
        "Marchamalo": "19180",
        "Sigüenza": "19250",
        "Molina de Aragón": "19300",
        "Yunquera de Henares": "19210",
        "Chiloeches": "19160"
    },
    "Guipúzcoa": {
        "San Sebastián": "20001",
        "Irun": "20300",
        "Errenteria": "20100",
        "Eibar": "20600",
        "Zarautz": "20800",
        "Arrasate/Mondragón": "20500",
        "Hernani": "20120",
        "Lasarte-Oria": "20160",
        "Tolosa": "20400",
        "Andoain": "20140"
    },
    "Huelva": {
        "Huelva": "21001",
        "Lepe": "21440",
        "Almonte": "21730",
        "Moguer": "21800",
        "Isla Cristina": "21410",
        "Ayamonte": "21400",
        "Punta Umbría": "21100",
        "Cartaya": "21450",
        "Bollullos Par del Condado": "21710",
        "Valverde del Camino": "21600"
    },
    "Huesca": {
        "Huesca": "22001",
        "Monzón": "22400",
        "Barbastro": "22300",
        "Jaca": "22700",
        "Fraga": "22520",
        "Sabiñánigo": "22600",
        "Binéfar": "22500",
        "Graus": "22430",
        "Sariñena": "22200",
        "Almudévar": "22270"
    },
    "Jaén": {
        "Jaén": "23001",
        "Linares": "23700",
        "Andújar": "23740",
        "Úbeda": "23400",
        "Martos": "23600",
        "Alcalá la Real": "23680",
        "Bailén": "23710",
        "Baeza": "23440",
        "Jódar": "23500",
        "La Carolina": "23200"
    },
    "La Rioja": {
        "Logroño": "26001",
        "Calahorra": "26500",
        "Arnedo": "26580",
        "Haro": "26200",
        "Alfaro": "26540",
        "Nájera": "26300",
        "Lardero": "26140",
        "Santo Domingo de la Calzada": "26250",
        "Villamediana de Iregua": "26142",
        "Ezcaray": "26280"
    },
    "Las Palmas": {
        "Las Palmas de Gran Canaria": "35001",
        "Telde": "35200",
        "Santa Lucía de Tirajana": "35110",
        "Arrecife": "35500",
        "San Bartolomé de Tirajana": "35100",
        "Arucas": "35400",
        "Ingenio": "35250",
        "Agüimes": "35260",
        "Puerto del Rosario": "35600",
        "Gáldar": "35460"
    },
    "León": {
        "León": "24001",
        "Ponferrada": "24400",
        "San Andrés del Rabanedo": "24191",
        "Astorga": "24700",
        "La Bañeza": "24750",
        "Bembibre": "24300",
        "Villablino": "24100",
        "Sahagún": "24320",
        "Cistierna": "24800",
        "Valencia de Don Juan": "24200"
    },
    "Lleida": {
        "Lleida": "25001",
        "Balaguer": "25600",
        "Tàrrega": "25300",
        "La Seu d'Urgell": "25700",
        "Cervera": "25200",
        "Mollerussa": "25230",
        "Alcarràs": "25180",
        "Almacelles": "25100",
        "Alpicat": "25110",
        "Les Borges Blanques": "25400"
    },
    "Lugo": {
        "Lugo": "27001",
        "Monforte de Lemos": "27400",
        "Viveiro": "27850",
        "Vilalba": "27800",
        "Sarria": "27600",
        "Ribadeo": "27700",
        "Foz": "27780",
        "Burela": "27880",
        "Chantada": "27500",
        "Palas de Rei": "27200"
    },
    "Murcia": {
        "Murcia": "30001",
        "Cartagena": "30201",
        "Lorca": "30800",
        "Molina de Segura": "30500",
        "Alcantarilla": "30820",
        "Yecla": "30510",
        "Mazarrón": "30870",
        "Cieza": "30530",
        "Águilas": "30880",
        "San Javier": "30720"
    },
    "Navarra": {
        "Pamplona": "31001",
        "Tudela": "31500",
        "Barañáin": "31010",
        "Estella-Lizarra": "31200",
        "Zizur Mayor": "31180",
        "Burlada": "31600",
        "Villava": "31610",
        "Ansoáin": "31013",
        "Tafalla": "31300",
        "Berriozar": "31013"
    },
    "Ourense": {
        "Ourense": "32001",
        "Verín": "32600",
        "O Barco de Valdeorras": "32300",
        "Xinzo de Limia": "32630",
        "Celanova": "32800",
        "Allariz": "32660",
        "Barbadás": "32002",
        "O Carballiño": "32500",
        "Ribadavia": "32400",
        "A Rúa": "32350"
    },
    "Palencia": {
        "Palencia": "34001",
        "Aguilar de Campoo": "34800",
        "Venta de Baños": "34200",
        "Guardo": "34880",
        "Cervera de Pisuerga": "34840",
        "Villamuriel de Cerrato": "34190",
        "Saldaña": "34100",
        "Paredes de Nava": "34300",
        "Dueñas": "34210",
        "Velilla del Río Carrión": "34886"
    },
    "Pontevedra": {
        "Vigo": "36201",
        "Pontevedra": "36001",
        "Vilagarcía de Arousa": "36600",
        "Redondela": "36800",
        "Marín": "36900",
        "Cangas": "36940",
        "Lalín": "36500",
        "Moaña": "36950",
        "Tui": "36700",
        "O Porriño": "36400"
    },
    "Salamanca": {
        "Salamanca": "37001",
        "Béjar": "37700",
        "Ciudad Rodrigo": "37500",
        "Santa Marta de Tormes": "37900",
        "Villamayor": "37185",
        "Carbajosa de la Sagrada": "37188",
        "Peñaranda de Bracamonte": "37300",
        "Guijuelo": "37770",
        "Alba de Tormes": "37800",
        "Vitigudino": "37210"
    },
    "Segovia": {
        "Segovia": "40001",
        "Cuéllar": "40200",
        "El Espinar": "40400",
        "San Ildefonso": "40100",
        "Cantalejo": "40320",
        "Riaza": "40500",
        "Nava de la Asunción": "40450",
        "Carbonero el Mayor": "40320",
        "Turégano": "40370",
        "La Lastrilla": "40196"
    },
    "Soria": {
        "Soria": "42001",
        "Almazán": "42200",
        "El Burgo de Osma": "42300",
        "San Esteban de Gormaz": "42330",
        "Golmayo": "42190",
        "Ólvega": "42110",
        "Duruelo de la Sierra": "42158",
        "San Leonardo de Yagüe": "42140",
        "Vinuesa": "42150",
        "Covaleda": "42157"
    },
    "Tarragona": {
        "Tarragona": "43001",
        "Reus": "43201",
        "Vendrell": "43700",
        "Cambrils": "43850",
        "Salou": "43840",
        "Tortosa": "43500",
        "Amposta": "43870",
        "Calafell": "43820",
        "Valls": "43800",
        "Altafulla": "43893"
    },
    "Santa Cruz de Tenerife": {
        "Santa Cruz de Tenerife": "38001",
        "San Cristóbal de La Laguna": "38201",
        "Arona": "38650",
        "Adeje": "38670",
        "La Orotava": "38300",
        "Granadilla de Abona": "38600",
        "Los Realejos": "38410",
        "Puerto de la Cruz": "38400",
        "Icod de los Vinos": "38430",
        "Guía de Isora": "38680"
    },
    "Teruel": {
        "Teruel": "44001",
        "Alcañiz": "44600",
        "Andorra": "44500",
        "Calamocha": "44200",
        "Utrillas": "44760",
        "Monreal del Campo": "44300",
        "Cella": "44370",
        "Albarracín": "44100",
        "Alcorisa": "44550",
        "Mora de Rubielos": "44400"
    },
    "Zamora": {
        "Zamora": "49001",
        "Benavente": "49600",
        "Toro": "49800",
        "Morales del Vino": "49190",
        "Villaralbo": "49159",
        "Coreses": "49140",
        "San Cristóbal de Entreviñas": "49690",
        "Fuentesaúco": "49400",
        "Villalpando": "49630",
        "Puebla de Sanabria": "49300"
    },
    "Zaragoza": {
        "Zaragoza": "50001",
        "Calatayud": "50300",
        "Utebo": "50180",
        "Ejea de los Caballeros": "50600",
        "Cuarte de Huerva": "50410",
        "Caspe": "50700",
        "Alagón": "50630",
        "Tarazona": "50500",
        "Zuera": "50800",
        "La Almunia de Doña Godina": "50100"
    }
};

// Vacunas por especie
const vacunas = {
    perro: ["Rabia", "Moquillo", "Parvovirus", "Hepatitis", "Leptospirosis", "Parainfluenza", "Coronavirus", "Bordetella", "Lyme", "Giardia", "Tos de las perreras", "Influenza canina", "Leishmaniasis", "Dirofilariasis", "Crotalus Atrox"],
    gato: ["Rabia", "Panleucopenia", "Calicivirus", "Rinotraqueitis", "Leucemia felina", "Clamidiosis", "Peritonitis infecciosa felina", "Bordetella", "Dermatofitosis", "Giardia", "Inmunodeficiencia felina", "Toxoplasmosis", "Coronavirus felino", "Herpesvirus felino", "Calcivirus"],
    reptil: ["Salmonelosis", "Adenovirus", "Reovirus", "Paramixovirus", "Herpesvirus", "Iridovirus", "Chlamydophila", "Ranavirus", "Mycoplasma", "Cryptosporidium", "Ehrlichia", "Borrelia", "Anaplasma", "Entamoeba", "Pentastomiasis"],
    roedor: ["Rabia", "Salmonelosis", "Tifus murino", "Leptospirosis", "Pasteurelosis", "Estreptococosis", "Tétanos", "Colibacilosis", "Coxiella burnetii", "Listeriosis", "Enfermedad del Clostridium", "Hantavirus", "Yersiniosis", "Borreliosis", "Giardiasis"],
    ave: ["Newcastle", "Influenza aviar", "Marek", "Bronquitis infecciosa", "Enfermedad de Gumboro", "Encefalomielitis aviar", "Coccidiosis", "Coriza infecciosa", "Viruela aviar", "Reovirus aviar", "Adenovirus aviar", "E. coli", "Mycoplasma gallisepticum", "Salmonelosis", "Aspergilosis"],
    caballo: ["Influenza equina", "Tétanos", "Rinoneumonitis equina", "Virus del Nilo Occidental", "Encefalomielitis equina", "Rabia", "Leptospirosis", "Anemia infecciosa equina", "Adenovirus equino", "Salmonelosis", "Botulismo", "Gripe equina", "Herpesvirus equino", "Arteritis viral equina", "Rotavirus equino"]
};

// Función almacenamiento de datos
function saveData(animalData) {
    let records = JSON.parse(localStorage.getItem('animalRecords')) || [];
    records.push(animalData);
    localStorage.setItem('animalRecords', JSON.stringify(records));
    console.info('Datos guardados correctamente:', animalData);  // Información sobre los datos guardados
}

function getData() {
    console.debug('Obteniendo datos del almacenamiento local...');  // Mensaje de depuración
    return JSON.parse(localStorage.getItem('animalRecords')) || [];
}

// Comienza el script principal
document.addEventListener('DOMContentLoaded', () => {
    const provinceSelect = document.getElementById('province');
    const localitySelect = document.getElementById('locality');
    const postalCodeInput = document.getElementById('postal-code');
    const speciesSelect = document.getElementById('species');
    const breedSelect = document.getElementById('breed');
    const vaccinationSelect = document.getElementById('vaccination');

    // Cargar las provincias en el select de provincias
    function loadProvinces() {
        console.log('Cargando provincias...');  // Información general
        provinceSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
        Object.keys(provincias).forEach(province => {
            const option = document.createElement('option');
            option.value = province;
            option.textContent = province;
            provinceSelect.appendChild(option);
        });
    }

    // Cargar las localidades en el select de localidades basado en la provincia seleccionada
    function loadLocalities(province) {
        console.log('Cargando localidades para la provincia:', province);  // Información específica
        localitySelect.innerHTML = '<option value="">Selecciona una localidad</option>';
        provincias[province].forEach(locality => {
            const option = document.createElement('option');
            option.value = locality;
            option.textContent = locality;
            localitySelect.appendChild(option);
        });
    }

    // Cargar el código postal basado en la provincia y la localidad seleccionada
    function loadPostalCode(province, locality) {
        console.log('Cargando código postal para:', province, locality);  // Información específica
        postalCodeInput.value = codigosPostales[province][locality] || '';
    }

    // Cargar las especies en el select de especies
    function loadSpecies() {
        console.log('Cargando especies...');  // Información general
        speciesSelect.innerHTML = '<option value="">Selecciona una especie</option>';
        Object.keys(especies).forEach(species => {
            const option = document.createElement('option');
            option.value = species;
            option.textContent = species.charAt(0).toUpperCase() + species.slice(1);
            speciesSelect.appendChild(option);
        });
    }

    // Cargar las razas en el select de razas basado en la especie seleccionada
    function loadBreeds(species) {
        console.log('Cargando razas para la especie:', species);  // Información específica
        breedSelect.innerHTML = '<option value="">Selecciona una raza</option>';
        especies[species].forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            breedSelect.appendChild(option);
        });
    }

    // Cargar las vacunaciones en el select de vacunaciones basado en la especie seleccionada
    function loadVaccinations(species) {
        console.log('Cargando vacunaciones para la especie:', species);  // Información específica
        vaccinationSelect.innerHTML = '<option value="">Selecciona una vacunación</option>';
        vacunas[species].forEach(vaccine => {
            const option = document.createElement('option');
            option.value = vaccine;
            option.textContent = vaccine;
            vaccinationSelect.appendChild(option);
        });
    }

    // Event listener para cuando cambia la provincia
    provinceSelect.addEventListener('change', () => {
        const selectedProvince = provinceSelect.value;
        if (selectedProvince) {
            loadLocalities(selectedProvince);
        }
    });

    // Event listener para cuando cambia la localidad
    localitySelect.addEventListener('change', () => {
        const selectedProvince = provinceSelect.value;
        const selectedLocality = localitySelect.value;
        if (selectedProvince && selectedLocality) {
            loadPostalCode(selectedProvince, selectedLocality);
        }
    });

    // Event listener para cuando cambia la especie
    speciesSelect.addEventListener('change', () => {
        const selectedSpecies = speciesSelect.value;
        if (selectedSpecies) {
            loadBreeds(selectedSpecies);
            loadVaccinations(selectedSpecies);
        }
    });

    // Función para validar el NIF
    function calcularLetraDni(dni) {
        const cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
        const posicion = dni % 23;
        return cadena.charAt(posicion);
    }

    function formatoNifValido(nif) {
        const regex = /^\d{8}[A-Z]$/i;
        return regex.test(nif);
    }

    function validarNif(nif) {
        if (!formatoNifValido(nif)) return false;
        const numero = nif.slice(0, -1);
        const letra = nif.slice(-1).toUpperCase();
        const isValid = calcularLetraDni(numero) === letra;
        console.assert(isValid, 'NIF inválido:', nif);  // Validación con aserto
        return isValid;
    }

    // Validar campos del formulario
    function validateFields() {
        console.log('Validando campos...');  // Información general
        const ownerName = document.getElementById('owner-name');
        const dni = document.getElementById('dni');
        const address = document.getElementById('address');
        const phone = document.getElementById('phone');
        const animalName = document.getElementById('animal-name');
        const chipNumber = document.getElementById('chip-number');
        const admissionDate = document.getElementById('admission-date');
        const surgeryDate = document.getElementById('surgery-date');
        const vaccinationDate = document.getElementById('vaccination-date');

        if (ownerName.value.length > 25 || /[<>]/.test(ownerName.value)) {
            showModal('El nombre del dueño no es válido.', ownerName);
            return false;
        }

        if (!validarNif(dni.value)) {
            showModal('El DNI no es válido.', dni);
            return false;
        }

        if (address.value.length > 40 || /[<>]/.test(address.value)) {
            showModal('La dirección no es válida.', address);
            return false;
        }

        if (!/^[0-9]{9,15}$/.test(phone.value)) {
            showModal('El teléfono no es válido.', phone);
            return false;
        }

        if (animalName.value === '' || /[<>]/.test(animalName.value)) {
            showModal('El nombre del animal no es válido.', animalName);
            return false;
        }

        if (chipNumber.value.length !== 15 || /[<>]/.test(chipNumber.value)) {
            showModal('El número de chip no es válido.', chipNumber);
            return false;
        }

        if (surgeryDate.value && new Date(surgeryDate.value) >= new Date(admissionDate.value)) {
            showModal('La fecha de intervención quirúrgica debe ser anterior a la fecha de ingreso.', surgeryDate);
            return false;
        }

        if (new Date(vaccinationDate.value) < new Date(admissionDate.value)) {
            showModal('La fecha de vacunación no puede ser anterior a la fecha de ingreso.', vaccinationDate);
            return false;
        }

        return true;
    }

    // Función para mostrar el modal
    function showModal(message, element) {
        const modal = document.getElementById('genericModal');
        const modalMessage = document.getElementById('modal-message');
        const modalConfirm = document.getElementById('modal-confirm');

        modalMessage.textContent = message;
        modal.style.display = "block";

        modalConfirm.onclick = function () {
            modal.style.display = "none";
            if (element) element.focus();
        };

        document.getElementsByClassName("close")[0].onclick = function () {
            modal.style.display = "none";
            if (element) element.focus();
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                if (element) element.focus();
            }
        };
    }

    // Manejar el envío del formulario
    function handleSubmit() {
        console.log('Manejando el envío del formulario...');  // Información general
        const animalData = {
            ownerName: document.getElementById('owner-name').value,
            dni: document.getElementById('dni').value,
            address: document.getElementById('address').value,
            locality: document.getElementById('locality').value,
            province: document.getElementById('province').value,
            postalCode: document.getElementById('postal-code').value,
            phone: document.getElementById('phone').value,
            animalName: document.getElementById('animal-name').value,
            chipNumber: document.getElementById('chip-number').value,
            admissionDate: document.getElementById('admission-date').value,
            surgeryDate: document.getElementById('surgery-date').value,
            species: document.getElementById('species').value,
            breed: document.getElementById('breed').value,
            vaccination: document.getElementById('vaccination').value,
            vaccinationDate: document.getElementById('vaccination-date').value
        };

        if (validateFields()) {
            showModal('¿Estás seguro de querer continuar?', null);
            document.getElementById('modal-confirm').onclick = function () {
                saveData(animalData);
                document.getElementById('admission-form').reset();
                showModal('Datos guardados correctamente.', null);
            };
        }
    }

    // Manejar el botón de cancelar
    function handleCancel() {
        console.warn('Manejando el cancelado del formulario...');  // Advertencia
        if (confirm('¿Estás seguro de cancelar?')) {
            document.getElementById('admission-form').reset();
        }
    }

    // Manejar la visualización de registros
    function handleViewRecords() {
        console.log('Manejando la visualización de registros...');  // Información general
        const records = getData();  // Obtiene los registros del almacenamiento local
        if (records.length === 0) {
            alert('No hay registros para mostrar.');
            document.getElementById('records-view').style.display = 'none';  // Oculta la vista de registros si no hay registros
            return;
        }

        let currentIndex = 0;  // Índice del registro actual
        const recordDetails = document.getElementById('record-details');
        const recordNumber = document.getElementById('record-number');

        // Función para actualizar la vista del registro
        function updateRecordView() {
            const record = records[currentIndex];  // Obtiene el registro actual
            recordDetails.innerHTML = `
                <p>Nombre del Dueño: ${record.ownerName}</p>
                <p>DNI: ${record.dni}</p>
                <p>Dirección: ${record.address}</p>
                <p>Localidad: ${record.locality}</p>
                <p>Provincia: ${record.province}</p>
                <p>Código Postal: ${record.postalCode}</p>
                <p>Teléfono: ${record.phone}</p>
                <p>Nombre del Animal: ${record.animalName}</p>
                <p>Número de Chip: ${record.chipNumber}</p>
                <p>Fecha de Ingreso: ${record.admissionDate}</p>
                <p>Fecha de Intervención Quirúrgica: ${record.surgeryDate}</p>
                <p>Especie: ${record.species}</p>
                <p>Raza: ${record.breed}</p>
                <p>Vacunación: ${record.vaccination}</p>
                <p>Fecha de Vacunación: ${record.vaccinationDate}</p>
            `;
            recordNumber.textContent = `Ficha ${currentIndex + 1} de ${records.length}`;
        }

        // Maneja el botón "Anterior"
        document.getElementById('prev-record').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateRecordView();  // Actualiza la vista del registro
            }
        });

        // Maneja el botón "Siguiente"
        document.getElementById('next-record').addEventListener('click', () => {
            if (currentIndex < records.length - 1) {
                currentIndex++;
                updateRecordView();  // Actualiza la vista del registro
            }
        });

        updateRecordView();  // Muestra el primer registro
        console.group('Visualización de Registros');  // Inicia un grupo de mensajes
        records.forEach((record, index) => {
            console.log(`Registro ${index + 1}:`, record);
        });
        console.groupEnd();  // Finaliza el grupo de mensajes
        document.getElementById('records-view').style.display = 'block';  // Muestra la vista de registros
    }

    // Función para borrar un registro específico
    function deleteRecord() {
        const recordIndex = parseInt(document.getElementById('record-number').textContent.split(' ')[1], 10) - 1;
        if (!isNaN(recordIndex)) {
            const records = JSON.parse(localStorage.getItem('animalRecords')) || [];
            if (records.length > 0 && recordIndex >= 0 && recordIndex < records.length) {
                records.splice(recordIndex, 1);  // Elimina el registro del array
                localStorage.setItem('animalRecords', JSON.stringify(records));  // Actualiza el almacenamiento local
                console.warn('Registro eliminado:', records);  // Advertencia de eliminación de registro
                handleViewRecords();  // Recarga la vista de registros
            }
        }
    }

    // Vincula el botón de eliminación a la función deleteRecord
    document.getElementById('delete-record').addEventListener('click', deleteRecord);

    // Función para obtener datos de registros del almacenamiento local
    function getData() {
        console.debug('Obteniendo datos del almacenamiento local...');  // Mensaje de depuración
        return JSON.parse(localStorage.getItem('animalRecords')) || [];
    }

    // Manejar el fin del programa
    function handleEndProgram() {
        console.log('Manejando el fin del programa...');  // Información general
        if (confirm('¿Estás seguro de que quieres finalizar el programa?')) {
            window.close();
        }
    }

    document.getElementById('submit-button').addEventListener('click', handleSubmit);
    document.getElementById('cancel-button').addEventListener('click', handleCancel);
    document.getElementById('view-records-button').addEventListener('click', handleViewRecords);
    document.getElementById('end-program-button').addEventListener('click', handleEndProgram);

    loadProvinces();
    loadSpecies();
});

// Funciones globales para el DOM

// Función para borrar un registro en el DOM
window.deleteRecord = deleteRecord;

// Función para cargar provincias en un elemento select del DOM
window.loadProvinces = function() {
    // Utiliza la constante 'provincias' definida en la parte superior
    const provinceSelect = document.getElementById('province');
    Object.keys(provincias).forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });
};

// Función para cargar localidades en un elemento select del DOM, basado en la provincia seleccionada
window.loadLocalities = function(province) {
    // Utiliza la constante 'provincias' definida en la parte superior
    const localitySelect = document.getElementById('locality');
    localitySelect.innerHTML = '';  // Limpiar el select
    if (provincias[province]) {
        provincias[province].forEach(locality => {
            const option = document.createElement('option');
            option.value = locality;
            option.textContent = locality;
            localitySelect.appendChild(option);
        });
    }
};

// Función para cargar el código postal basado en la provincia y localidad seleccionadas
window.loadPostalCode = function(province, locality) {
    // Utiliza la constante 'codigosPostales' definida en la parte superior
    const postalCodeInput = document.getElementById('postal-code');
    if (codigosPostales[province] && codigosPostales[province][locality]) {
        postalCodeInput.value = codigosPostales[province][locality];
    } else {
        postalCodeInput.value = '';  // Limpiar el input si no hay coincidencia
    }
};

// Función para cargar especies en un elemento select del DOM
window.loadSpecies = function() {
    // Utiliza la constante 'especies' definida en la parte superior
    const speciesSelect = document.getElementById('species');
    Object.keys(especies).forEach(species => {
        const option = document.createElement('option');
        option.value = species;
        option.textContent = species.charAt(0).toUpperCase() + species.slice(1);
        speciesSelect.appendChild(option);
    });
};

// Función para cargar razas en un elemento select del DOM, basado en la especie seleccionada
window.loadBreeds = function(species) {
    // Utiliza la constante 'especies' definida en la parte superior
    const breedSelect = document.getElementById('breed');
    breedSelect.innerHTML = '';  // Limpiar el select
    if (especies[species]) {
        especies[species].forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed;
            breedSelect.appendChild(option);
        });
    }
};

// Función para validar los campos del formulario
window.validateFields = function() {
    const requiredFields = ['owner-name', 'dni', 'address', 'phone', 'animal-name', 'chip-number', 'admission-date'];
    let allValid = true;
    requiredFields.forEach(id => {
        const input = document.getElementById(id);
        if (!input || input.value.trim() === '') {
            allValid = false;
        }
    });
    console.assert(allValid, 'Faltan campos requeridos por completar.');  // Validación con aserto
    return allValid;
};
