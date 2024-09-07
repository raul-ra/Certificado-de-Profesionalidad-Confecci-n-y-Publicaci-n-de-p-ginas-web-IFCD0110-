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

// Cuidados y enfermedades por raza
const breedCare = {
    "Labrador": {
        "care": "Ejercicio regular, dieta equilibrada, aseo rutinario",
        "diseases": "Displasia de cadera, displasia de codo, obesidad"
    },
    "Bulldog": {
        "care": "Ejercicio moderado, limpieza frecuente de los pliegues faciales",
        "diseases": "Problemas respiratorios, displasia de cadera, infecciones de piel"
    },
    "Poodle": {
        "care": "Ejercicio regular, aseo frecuente, limpieza de oídos",
        "diseases": "Problemas dentales, displasia de cadera, atrofia progresiva de retina"
    },
    "Pastor Alemán": {
        "care": "Ejercicio intensivo, entrenamiento regular, dieta rica en proteínas",
        "diseases": "Displasia de cadera, displasia de codo, problemas digestivos"
    },
    "Golden Retriever": {
        "care": "Ejercicio regular, cepillado frecuente, chequeos de salud",
        "diseases": "Displasia de cadera, problemas cardíacos, cáncer"
    },
    "Beagle": {
        "care": "Ejercicio diario, limpieza de orejas, dieta controlada",
        "diseases": "Problemas de tiroides, epilepsia, problemas de espalda"
    },
    "Chihuahua": {
        "care": "Ejercicio ligero, protección contra el frío, dieta adecuada",
        "diseases": "Problemas dentales, luxación de rótula, problemas cardíacos"
    },
    "Pomerania": {
        "care": "Ejercicio moderado, aseo regular, protección contra el calor",
        "diseases": "Colapso traqueal, problemas dentales, displasia de cadera"
    },
    "Dálmata": {
        "care": "Ejercicio intenso, dieta rica en proteínas, socialización temprana",
        "diseases": "Sordera, cálculos urinarios, alergias de piel"
    },
    "Rottweiler": {
        "care": "Ejercicio intensivo, entrenamiento firme, chequeos de salud",
        "diseases": "Displasia de cadera, problemas cardíacos, cáncer"
    },
    "Boxer": {
        "care": "Ejercicio moderado, socialización temprana, dieta equilibrada",
        "diseases": "Problemas cardíacos, cáncer, displasia de cadera"
    },
    "Shih Tzu": {
        "care": "Ejercicio ligero, aseo frecuente, limpieza de ojos",
        "diseases": "Problemas dentales, problemas respiratorios, infecciones de oído"
    },
    "Bulldog Francés": {
        "care": "Ejercicio moderado, protección contra el calor, aseo regular",
        "diseases": "Problemas respiratorios, alergias de piel, problemas de espalda"
    },
    "Cocker Spaniel": {
        "care": "Ejercicio regular, cepillado frecuente, limpieza de orejas",
        "diseases": "Problemas de oído, problemas cardíacos, displasia de cadera"
    },
    "Doberman": {
        "care": "Ejercicio intensivo, entrenamiento firme, dieta rica en proteínas",
        "diseases": "Problemas cardíacos, displasia de cadera, problemas de tiroides"
    },
    "Siames": {
        "care": "Dieta equilibrada, cepillado regular, atención veterinaria periódica",
        "diseases": "Problemas respiratorios, problemas dentales, problemas hepáticos"
    },
    "Persa": {
        "care": "Cepillado diario, limpieza de ojos, dieta equilibrada",
        "diseases": "Problemas respiratorios, problemas renales, problemas dentales"
    },
    "Maine Coon": {
        "care": "Cepillado frecuente, dieta rica en proteínas, ejercicio regular",
        "diseases": "Displasia de cadera, problemas cardíacos, atrofia muscular espinal"
    },
    "Bengala": {
        "care": "Ejercicio intensivo, dieta rica en proteínas, chequeos regulares",
        "diseases": "Problemas cardíacos, problemas intestinales, displasia de cadera"
    },
    "Sphynx": {
        "care": "Baños frecuentes, protección contra el frío, dieta equilibrada",
        "diseases": "Problemas de piel, problemas dentales, problemas cardíacos"
    },
    "Ragdoll": {
        "care": "Cepillado regular, dieta rica en proteínas, atención veterinaria",
        "diseases": "Problemas cardíacos, problemas renales, problemas de vejiga"
    },
    "British Shorthair": {
        "care": "Ejercicio moderado, cepillado regular, dieta equilibrada",
        "diseases": "Problemas cardíacos, displasia de cadera, problemas renales"
    },
    "Abyssinian": {
        "care": "Ejercicio regular, dieta equilibrada, chequeos de salud",
        "diseases": "Problemas renales, problemas dentales, atrofia muscular espinal"
    },
    "Birmano": {
        "care": "Cepillado regular, dieta rica en proteínas, ejercicio moderado",
        "diseases": "Problemas cardíacos, problemas renales, problemas de vejiga"
    },
    "Oriental": {
        "care": "Ejercicio regular, dieta equilibrada, cepillado ocasional",
        "diseases": "Problemas dentales, problemas cardíacos, problemas respiratorios"
    },
    "Scottish Fold": {
        "care": "Ejercicio moderado, cepillado regular, atención veterinaria",
        "diseases": "Problemas articulares, problemas cardíacos, problemas renales"
    },
    "Siberiano": {
        "care": "Cepillado regular, dieta rica en proteínas, ejercicio regular",
        "diseases": "Problemas cardíacos, problemas renales, problemas respiratorios"
    },
    "Exótico": {
        "care": "Cepillado regular, limpieza de ojos, dieta equilibrada",
        "diseases": "Problemas respiratorios, problemas cardíacos, problemas renales"
    },
    "Savannah": {
        "care": "Ejercicio intensivo, dieta rica en proteínas, chequeos regulares",
        "diseases": "Problemas cardíacos, problemas intestinales, problemas renales"
    },
    "Devon Rex": {
        "care": "Baños regulares, dieta equilibrada, ejercicio moderado",
        "diseases": "Problemas de piel, problemas cardíacos, problemas renales"
    },
    "Iguana": {
        "care": "Terrario adecuado, dieta rica en vegetales, iluminación UVB",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones respiratorias, problemas de piel"
    },
    "Gecko": {
        "care": "Terrario adecuado, dieta balanceada de insectos, iluminación UVB",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones respiratorias, problemas de piel"
    },
    "Pitón": {
        "care": "Terrario adecuado, dieta de roedores, humedad controlada",
        "diseases": "Enfermedades respiratorias, problemas de piel, parásitos"
    },
    "Camaleón": {
        "care": "Terrario adecuado, dieta de insectos, humedad y temperatura controladas",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones oculares, infecciones respiratorias"
    },
    "Dragón Barbudo": {
        "care": "Terrario adecuado, dieta balanceada, iluminación UVB",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones respiratorias, problemas de piel"
    },
    "Serpiente del Maíz": {
        "care": "Terrario adecuado, dieta de roedores, temperatura controlada",
        "diseases": "Enfermedades respiratorias, problemas de piel, parásitos"
    },
    "Anolis": {
        "care": "Terrario adecuado, dieta de insectos, humedad y temperatura controladas",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones respiratorias, problemas de piel"
    },
    "Tortuga": {
        "care": "Acuario o terrario adecuado, dieta balanceada, iluminación UVB",
        "diseases": "MBD (Enfermedad metabólica ósea), infecciones respiratorias, problemas de caparazón"
    },
    "Boa": {
        "care": "Terrario adecuado, dieta de roedores, temperatura controlada",
        "diseases": "Enfermedades respiratorias, problemas de piel, parásitos"
    },
    "Lagarto Monitor": {
        "care": "Terrario adecuado, dieta de roedores y aves, temperatura controlada",
        "diseases": "Enfermedades respiratorias, problemas de piel, parásitos"
    },
    "Caimán": {
        "care": "Terrario amplio, dieta de carne y pescado, temperatura y humedad controladas",
        "diseases": "Enfermedades respiratorias, problemas de piel, parásitos"
    },
    "Tarántula": {
        "care": "Terrario adecuado, dieta de insectos, humedad controlada",
        "diseases": "Muda problemática, infecciones de hongos, parásitos"
    },
    "Escorpión": {
        "care": "Terrario adecuado, dieta de insectos, humedad controlada",
        "diseases": "Muda problemática, infecciones de hongos, parásitos"
    },
    "Salamandra": {
        "care": "Terrario adecuado, dieta de insectos, humedad controlada",
        "diseases": "Infecciones bacterianas, infecciones fúngicas, problemas de piel"
    },
    "Axolotl": {
        "care": "Acuario adecuado, dieta de lombrices y pellets, temperatura controlada",
        "diseases": "Infecciones bacterianas, infecciones fúngicas, problemas de piel"
    },
    "Hamster": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, tumores"
    },
    "Cobaya": {
        "care": "Jaula adecuada, dieta rica en vitamina C, ejercicio regular",
        "diseases": "Escorbuto, problemas dentales, infecciones respiratorias"
    },
    "Ratón": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, tumores"
    },
    "Chinchilla": {
        "care": "Jaula adecuada, baño de polvo, dieta alta en fibra",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Jerbo": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, tumores"
    },
    "Rata": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, tumores"
    },
    "Ardilla": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas de piel"
    },
    "Degú": {
        "care": "Jaula adecuada, dieta alta en fibra, ejercicio regular",
        "diseases": "Diabetes, problemas dentales, infecciones respiratorias"
    },
    "Conejo": {
        "care": "Jaula adecuada, dieta alta en fibra, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Erizo": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas de piel"
    },
    "Cuy": {
        "care": "Jaula adecuada, dieta rica en vitamina C, ejercicio regular",
        "diseases": "Escorbuto, problemas dentales, infecciones respiratorias"
    },
    "Paca": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Pacarana": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Agutí": {
        "care": "Jaula adecuada, dieta balanceada, ejercicio regular",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Capibara": {
        "care": "Jaula amplia, dieta alta en fibra, acceso a agua para nadar",
        "diseases": "Problemas dentales, infecciones respiratorias, problemas digestivos"
    },
    "Canario": {
        "care": "Jaula adecuada, dieta de semillas y frutas, baños regulares",
        "diseases": "Infecciones respiratorias, problemas de piel, parásitos"
    },
    "Periquito": {
        "care": "Jaula adecuada, dieta de semillas y frutas, socialización",
        "diseases": "Problemas respiratorios, problemas de piel, parásitos"
    },
    "Cacatúa": {
        "care": "Jaula grande, dieta de semillas, frutas y verduras, socialización",
        "diseases": "Problemas respiratorios, problemas de piel, problemas de comportamiento"
    },
    "Agapornis": {
        "care": "Jaula adecuada, dieta de semillas y frutas, socialización",
        "diseases": "Problemas respiratorios, problemas de piel, parásitos"
    },
    "Loro": {
        "care": "Jaula grande, dieta de semillas, frutas y verduras, socialización",
        "diseases": "Problemas respiratorios, problemas de piel, problemas de comportamiento"
    },
    "Ninfa": {
        "care": "Jaula adecuada, dieta de semillas y frutas, socialización",
        "diseases": "Problemas respiratorios, problemas de piel, parásitos"
    },
    "Jilguero": {
        "care": "Jaula adecuada, dieta de semillas y frutas, baños regulares",
        "diseases": "Infecciones respiratorias, problemas de piel, parásitos"
    },
    "Gorrión": {
        "care": "Jaula adecuada, dieta de semillas y frutas, baños regulares",
        "diseases": "Infecciones respiratorias, problemas de piel, parásitos"
    },
    "Halcón": {
        "care": "Jaula amplia, dieta de carne, entrenamiento regular",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Águila": {
        "care": "Jaula muy amplia, dieta de carne, entrenamiento regular",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Búho": {
        "care": "Jaula amplia, dieta de carne, entrenamiento regular",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Lechuza": {
        "care": "Jaula amplia, dieta de carne, entrenamiento regular",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Cisne": {
        "care": "Acceso a agua, dieta de vegetales y granos, espacio amplio",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Pato": {
        "care": "Acceso a agua, dieta de vegetales y granos, espacio amplio",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Flamenco": {
        "care": "Acceso a agua, dieta de crustáceos y vegetales, espacio amplio",
        "diseases": "Problemas respiratorios, infecciones bacterianas, parásitos"
    },
    "Andaluz": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas respiratorios"
    },
    "Árabe": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas respiratorios"
    },
    "Pura Sangre": {
        "care": "Ejercicio intensivo, dieta rica en proteínas, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas cardíacos"
    },
    "Percherón": {
        "care": "Ejercicio moderado, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas articulares, cólicos"
    },
    "Mustang": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas respiratorios"
    },
    "Appaloosa": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas oculares, cólicos"
    },
    "Cuarto de Milla": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas musculares"
    },
    "Frisón": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Problemas cardíacos, cólicos, laminitis"
    },
    "Clydesdale": {
        "care": "Ejercicio moderado, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas articulares, cólicos"
    },
    "Shetland": {
        "care": "Ejercicio moderado, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas respiratorios, cólicos"
    },
    "Lusitano": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas respiratorios"
    },
    "Morgan": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas cardíacos, cólicos"
    },
    "Tennessee Walker": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, problemas articulares, cólicos"
    },
    "Lipizzano": {
        "care": "Ejercicio regular, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas cardíacos"
    },
    "Hannoveriano": {
        "care": "Ejercicio intensivo, dieta balanceada, aseo y cuidado de cascos",
        "diseases": "Laminitis, cólicos, problemas articulares"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Rutas de imagenes
    const breedImages = {
        gato: {
            abisinio: './assets/img/gato/abisinio.jpeg',
            bengala: './assets/img/gato/bengala.jpeg',
            birmano: './assets/img/gato/birmano.jpeg',
            britishShorthair: './assets/img/gato/britishShorthair.jpeg',
            devonRex: './assets/img/gato/devonRex.jpeg',
            exotico: './assets/img/gato/exotico.jpeg',
            maineCoon: './assets/img/gato/maineCoon.jpeg',
            oriental: './assets/img/gato/oriental.jpeg',
            persa: './assets/img/gato/persa.jpeg',
            ragdoll: './assets/img/gato/ragdoll.jpeg',
            savannah: './assets/img/gato/savannah.jpeg',
            scottishFold: './assets/img/gato/scottishFold.jpeg',
            siames: './assets/img/gato/siames.jpeg',
            siberiano: './assets/img/gato/siberiano.jpeg',
            sphynx: './assets/img/gato/sphynx.jpeg'
        },
        perro: {
            beagle: './assets/img/perro/beagle.jpeg',
            boxer: './assets/img/perro/boxer.jpeg',
            bulldog: './assets/img/perro/bulldog.jpeg',
            bulldogFrances: './assets/img/perro/bulldogFrances.jpeg',
            caniche: './assets/img/perro/caniche.jpeg',
            chihuahua: './assets/img/perro/chihuahua.jpeg',
            cockerSpaniel: './assets/img/perro/cockerSpaniel.jpeg',
            dalmata: './assets/img/perro/dalmata.jpeg',
            doberman: './assets/img/perro/doberman.jpeg',
            golden: './assets/img/perro/golden.jpeg',
            labrador: './assets/img/perro/labrador.jpeg',
            pastorAleman: './assets/img/perro/pastorAleman.jpeg',
            pomerania: './assets/img/perro/pomerania.jpeg',
            rottweiler: './assets/img/perro/rottweiler.jpeg',
            shihTzu: './assets/img/perro/shihTzu.jpeg'
        },
        caballo: {
            andaluz: './assets/img/caballo/andaluz.jpeg',
            appaloosa: './assets/img/caballo/appaloosa.jpeg',
            clydesdale: './assets/img/caballo/clydesdale.jpeg',
            cuartoDeMilla: './assets/img/caballo/cuartoDeMilla.jpeg',
            frison: './assets/img/caballo/frison.jpeg',
            hannoveriano: './assets/img/caballo/hannoveriano.jpeg',
            lipizano: './assets/img/caballo/lipizano.jpeg',
            lusitano: './assets/img/caballo/lusitano.jpeg',
            morgan: './assets/img/caballo/morgan.jpeg',
            mustang: './assets/img/caballo/mustang.jpeg',
            percheron: './assets/img/caballo/percheron.jpeg',
            puraSangre: './assets/img/caballo/puraSangre.jpeg',
            shetland: './assets/img/caballo/shetland.jpeg',
            tennesseeWalker: './assets/img/caballo/tennesseeWalker.jpeg'
        },
        reptil: {
            anolis: './assets/img/reptil/anolis.jpeg',
            axolotl: './assets/img/reptil/axolotl.jpeg',
            boa: './assets/img/reptil/boa.jpeg',
            caiman: './assets/img/reptil/caiman.jpeg',
            camaleon: './assets/img/reptil/camaleon.jpeg',
            dragonBarbudo: './assets/img/reptil/dragonBarbudo.jpeg',
            escorpion: './assets/img/reptil/escorpion.jpeg',
            gecko: './assets/img/reptil/gecko.jpeg',
            iguana: './assets/img/reptil/iguana.jpeg',
            lagartoMonitor: './assets/img/reptil/lagartoMonitor.jpeg',
            piton: './assets/img/reptil/piton.jpeg',
            salamandra: './assets/img/reptil/salamandra.jpeg',
            serpienteDelMaiz: './assets/img/reptil/serpienteDelMaiz.jpeg',
            tortuga: './assets/img/reptil/tortuga.jpeg',
            tarantula: './assets/img/reptil/tarantula.jpeg'
        },
        roedor: {
            aguti: './assets/img/roedor/aguti.jpeg',
            ardilla: './assets/img/roedor/ardilla.jpeg',
            capibara: './assets/img/roedor/capibara.jpeg',
            chinchilla: './assets/img/roedor/chinchilla.jpeg',
            cobaya: './assets/img/roedor/cobaya.jpeg',
            conejo: './assets/img/roedor/conejo.jpeg',
            cuy: './assets/img/roedor/cuy.jpeg',
            degu: './assets/img/roedor/degu.jpeg',
            erizo: './assets/img/roedor/erizo.jpeg',
            hamster: './assets/img/roedor/hamster.jpeg',
            jerbo: './assets/img/roedor/jerbo.jpeg',
            paca: './assets/img/roedor/paca.jpeg',
            rata: './assets/img/roedor/rata.jpeg',
            raton: './assets/img/roedor/raton.jpeg'
        },
        ave: {
            agapornis: './assets/img/ave/agapornis.jpeg',
            aguila: './assets/img/ave/aguila.jpeg',
            arabe: './assets/img/ave/arabe.jpeg',
            buho: './assets/img/ave/buho.jpeg',
            cacatua: './assets/img/ave/cacatua.jpeg',
            canario: './assets/img/ave/canario.jpeg',
            cisne: './assets/img/ave/cisne.jpeg',
            flamenco: './assets/img/ave/flamenco.jpeg',
            gorrion: './assets/img/ave/gorrion.jpeg',
            halcon: './assets/img/ave/halcon.jpeg',
            jilguero: './assets/img/ave/jilguero.jpeg',
            lechuza: './assets/img/ave/lechuza.jpeg',
            loro: './assets/img/ave/loro.jpeg',
            ninfa: './assets/img/ave/ninfa.jpeg',
            pato: './assets/img/ave/pato.jpeg',
            periquito: './assets/img/ave/periquito.jpeg'
        }
    };
    
    const breedImageUrls = [];
    Object.keys(breedImages).forEach(species => {
        Object.keys(breedImages[species]).forEach(breed => {
            breedImageUrls.push(breedImages[species][breed]);
        });
    });
    
    // Función para mezclar el array de URLs
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Mezclar las URLs de las imágenes
    const shuffledImageUrls = shuffle(breedImageUrls);
    
    // Seleccionar el contenedor del carrusel
    const carouselWrapper = document.querySelector('.carousel__wrapper');
    let currentIndex = 0;
    
    // Crear slides para cada imagen y duplicarlas para el efecto continuo
    shuffledImageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.classList.add('carousel__slide');
        const img = document.createElement('img');
        img.src = url;
        slide.appendChild(img);
        carouselWrapper.appendChild(slide);
    });
    
    // Duplicar las imágenes al final del contenedor para el efecto continuo
    shuffledImageUrls.forEach(url => {
        const slide = document.createElement('div');
        slide.classList.add('carousel__slide');
        const img = document.createElement('img');
        img.src = url;
        slide.appendChild(img);
        carouselWrapper.appendChild(slide);
    });
    
    // Función para mostrar la siguiente diapositiva
    function showNextSlide() {
        currentIndex++;
        if (currentIndex === shuffledImageUrls.length) {
            // Salto invisible al inicio cuando se alcanza el final duplicado
            setTimeout(() => {
                carouselWrapper.style.transition = 'none';
                currentIndex = 0;
                carouselWrapper.style.transform = `translateX(-${currentIndex * 250}px)`;
                setTimeout(() => {
                    carouselWrapper.style.transition = 'transform 0.5s ease';
                }, 0);
            }, 500); // Espera la duración de la transición antes de hacer el salto
        } else {
            carouselWrapper.style.transform = `translateX(-${currentIndex * 250}px)`;
        }
    }
    
    // Muestra la siguiente diapositiva cada 3 segundos
    setInterval(showNextSlide, 3000);
    
    // Evento para manejar el efecto de ampliación al pasar el ratón
    carouselWrapper.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'IMG') {
            const slides = document.querySelectorAll('.carousel__slide');
            slides.forEach(slide => slide.classList.remove('carousel__slide--active'));
            event.target.parentElement.classList.add('carousel__slide--active');
        }
    });
    
    // Evento para manejar el efecto de reducción al quitar el ratón
    carouselWrapper.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'IMG') {
            event.target.parentElement.classList.remove('carousel__slide--active');
        }
    });

    // Funciones

    // Función para sanitizar la entrada y proteger contra scripts maliciosos
    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    }

    // Función para almacenamiento de datos
    function saveData(animalData) {
        let records = JSON.parse(localStorage.getItem('animalRecords')) || [];
        records.push(animalData);
        localStorage.setItem('animalRecords', JSON.stringify(records));
        showModal('Datos guardados correctamente.');  // Modal para mostrar mensaje
    }

    // Función para obtener datos del almacenamiento local
    function getData() {
        return JSON.parse(localStorage.getItem('animalRecords')) || [];
    }

    // Función para cargar las provincias en el select de provincias
    function loadProvinces(provinceSelect) {
        provinceSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
        Object.keys(provincias).forEach(province => {
            const option = document.createElement('option');
            option.value = sanitizeInput(province);
            option.textContent = sanitizeInput(province);
            provinceSelect.appendChild(option);
        });
    }

    // Función para cargar las localidades en el select de localidades basado en la provincia seleccionada
    function loadLocalities(province, localitySelect) {
        localitySelect.innerHTML = '<option value="">Selecciona una localidad</option>';
        provincias[sanitizeInput(province)].forEach(locality => {
            const option = document.createElement('option');
            option.value = sanitizeInput(locality);
            option.textContent = sanitizeInput(locality);
            localitySelect.appendChild(option);
        });
    }

    // Función para cargar el código postal basado en la provincia y la localidad seleccionada
    function loadPostalCode(province, locality, postalCodeInput) {
        postalCodeInput.value = sanitizeInput(codigosPostales[sanitizeInput(province)][sanitizeInput(locality)] || '');
    }

    // Función para cargar las especies en el select de especies
    function loadSpecies(speciesSelect) {
        speciesSelect.innerHTML = '<option value="">Selecciona una especie</option>';
        Object.keys(especies).forEach(species => {
            const option = document.createElement('option');
            option.value = sanitizeInput(species);
            option.textContent = sanitizeInput(species.charAt(0).toUpperCase() + species.slice(1));
            speciesSelect.appendChild(option);
        });
    }

    // Función para cargar las razas en el select de razas basado en la especie seleccionada
    function loadBreeds(species, breedSelect) {
        breedSelect.innerHTML = '<option value="">Selecciona una raza</option>';
        especies[sanitizeInput(species)].forEach(breed => {
            const option = document.createElement('option');
            option.value = sanitizeInput(breed);
            option.textContent = sanitizeInput(breed);
            option.dataset.image = sanitizeInput(breedImages[sanitizeInput(species)][sanitizeInput(breed.toLowerCase().replace(/ /g, ''))]);
            breedSelect.appendChild(option);
        });
    }

    // Función para cargar las vacunaciones en el select de vacunaciones basado en la especie seleccionada
    function loadVaccinations(species, vaccinationSelect) {
        vaccinationSelect.innerHTML = '<option value="">Selecciona una vacunación</option>';
        vacunas[sanitizeInput(species)].forEach(vaccine => {
            const option = document.createElement('option');
            option.value = sanitizeInput(vaccine);
            option.textContent = sanitizeInput(vaccine);
            vaccinationSelect.appendChild(option);
        });
    }

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

    // Función para manejar la presentación de registros
    function showRecords(records) {
        const recordsView = document.getElementById('records-view');
        recordsView.style.display = 'block';
        const recordDetails = document.getElementById('record-details');
        let currentIndex = 0;

        function updateRecordDetails() {
            const record = records[currentIndex];
            const breedImage = sanitizeInput(breedImages[record.species.toLowerCase()][record.breed.toLowerCase().replace(/ /g, '')]);
            const breedCareDetails = breedCare[record.breed] || { care: 'No disponible', diseases: 'No disponible' };
            
            // Crear elementos HTML de manera segura
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
            
            // Agregar elementos al contenedor de detalles
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

    // Función para mostrar imagen de raza al pasar el ratón
    function showBreedImageOnHover(breedSelect) {
        const breedImagePreview = document.getElementById('breed-image-preview');

        breedSelect.addEventListener('mouseover', (event) => {
            const breed = sanitizeInput(event.target.value.toLowerCase().replace(/ /g, ''));
            const species = document.getElementById('species').value.toLowerCase();
            if (breedImages[sanitizeInput(species)] && breedImages[sanitizeInput(species)][breed]) {
                breedImagePreview.src = sanitizeInput(breedImages[sanitizeInput(species)][breed]);
                breedImagePreview.style.display = 'block';
            }
        });

        breedSelect.addEventListener('mouseout', () => {
            breedImagePreview.style.display = 'none';
        });
    }

    // Formatear fecha al formato europeo (DD/MM/YYYY)
    function formatDate(date) {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    // Función para mostrar una ventana modal
    function showModal(message, onConfirm) {
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

    // Validación de campos del formulario
    function validateForm() {
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
        const regexPhone = /^\+[0-9]{13}$/; // Número de teléfono con código de país (14 dígitos en total incluyendo el '+')

        if (ownerName.length > 25 || ownerName === '' || !regexNoSpecialChars.test(ownerName)) {
            showModal('El nombre del dueño no puede estar vacío, debe tener máximo 25 caracteres y no puede contener caracteres especiales.');
            return false;
        }

        if (!validarNif(dni)) {
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

    // Evento para cargar las provincias y localidades al cargar la página
    const provinceSelect = document.getElementById('province');
    const localitySelect = document.getElementById('locality');
    const postalCodeInput = document.getElementById('postal-code');
    const speciesSelect = document.getElementById('species');
    const breedSelect = document.getElementById('breed');
    const vaccinationSelect = document.getElementById('vaccination');

    loadProvinces(provinceSelect);

    provinceSelect.addEventListener('change', () => {
        loadLocalities(provinceSelect.value, localitySelect);
    });

    localitySelect.addEventListener('change', () => {
        loadPostalCode(provinceSelect.value, localitySelect.value, postalCodeInput);
    });

    loadSpecies(speciesSelect);

    speciesSelect.addEventListener('change', () => {
        loadBreeds(speciesSelect.value, breedSelect);
        loadVaccinations(speciesSelect.value, vaccinationSelect);
    });

    // Llamar a la función para mostrar la imagen de la raza al pasar el ratón
    showBreedImageOnHover(breedSelect);

    // Evento para manejar el envío del formulario
    document.getElementById('submit-button').addEventListener('click', (event) => {
        event.preventDefault();  // Evita el envío del formulario de forma predeterminada
        if (validateForm()) {
            const animalData = {
                owner: sanitizeInput(document.getElementById('owner-name').value),
                dni: sanitizeInput(document.getElementById('dni').value),
                address: sanitizeInput(document.getElementById('address').value),
                province: sanitizeInput(provinceSelect.value),
                locality: sanitizeInput(localitySelect.value),
                postalCode: sanitizeInput(postalCodeInput.value),
                phone: sanitizeInput(document.getElementById('phone').value),
                animalName: sanitizeInput(document.getElementById('animal-name').value),
                chipNumber: sanitizeInput(document.getElementById('chip-number').value),
                admissionDate: sanitizeInput(document.getElementById('admission-date').value),
                surgeryDate: sanitizeInput(document.getElementById('surgery-date').value),
                species: sanitizeInput(speciesSelect.value),
                breed: sanitizeInput(breedSelect.value),
                vaccination: sanitizeInput(vaccinationSelect.value),
                vaccinationDate: sanitizeInput(document.getElementById('vaccination-date').value),
            };
            showModal('¿Estás seguro de querer continuar?', () => {
                saveData(animalData);
                document.getElementById('admission-form').reset();
            });
        }
    });

    // Evento para manejar la cancelación del formulario
    document.getElementById('cancel-button').addEventListener('click', (event) => {
        event.preventDefault();  // Evita el envío del formulario de forma predeterminada
        showModal('¿Estás seguro de cancelar?', () => {
            document.getElementById('admission-form').reset();
        });
    });

    // Evento para manejar la visualización de registros
    document.getElementById('view-records-button').addEventListener('click', (event) => {
        event.preventDefault();  // Evita el envío del formulario de forma predeterminada
        const records = getData();
        if (records.length > 0) {
            showRecords(records);
        } else {
            showModal('No hay registros disponibles.');
        }
    });

    // Evento para manejar el fin de programa
    document.getElementById('end-program-button').addEventListener('click', (event) => {
        event.preventDefault();  // Evita el envío del formulario de forma predeterminada
        showModal('¿Estás seguro de que quieres finalizar el programa?', () => {
            localStorage.clear();
            showModal('Programa finalizado. Todos los datos han sido borrados.', () => {
                window.location.reload();
            });
        });
    });
});