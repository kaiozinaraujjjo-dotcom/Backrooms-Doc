import json
from pathlib import Path

ASSETS = {
    "frontrooms": [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1600&q=80",
    ],
    "yellow": ["./assets/backrooms/yellow-hallway-1.jpg", "./assets/backrooms/yellow-office-2.jpg", "./assets/backrooms/yellow-corridor-3.jpg"],
    "warehouse": ["./assets/backrooms/warehouse-dark-1.jpeg", "./assets/backrooms/warehouse-concrete-2.jpeg", "./assets/backrooms/warehouse-shelves-3.jpeg"],
    "pipes": ["./assets/backrooms/pipes-dark-1.jpg", "./assets/backrooms/pipes-industrial-2.jpg", "./assets/backrooms/pipes-close-3.jpg"],
    "office": ["./assets/backrooms/office-empty-1.jpeg", "./assets/backrooms/office-abandoned-2.jpeg", "./assets/backrooms/office-ruin-3.jpeg"],
    "hotel": ["./assets/backrooms/hotel-dark-1.jpg", "./assets/backrooms/hotel-corridor-2.jpg", "./assets/backrooms/hotel-empty-3.jpg"],
    "pool": ["./assets/backrooms/poolrooms-1.jpg", "./assets/backrooms/pool-blue-2.jpeg", "./assets/backrooms/pool-blue-3.jpeg"],
    "suburb": ["./assets/backrooms/suburb-night-1.jpg", "./assets/backrooms/suburb-night-2.jpg", "./assets/backrooms/suburb-night-3.jpeg"],
    "city": ["./assets/backrooms/city-empty-1.jpg", "./assets/backrooms/city-night-2.jpg", "./assets/backrooms/city-alley-3.jpg"],
    "cave": ["./assets/backrooms/cave-ocean-1.jpg", "./assets/backrooms/cave-ocean-2.jpg", "./assets/backrooms/cave-ocean-3.jpg"],
    "ocean": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        "./assets/backrooms/cave-ocean-1.jpg",
        "./assets/backrooms/pool-blue-2.jpeg",
    ],
    "field": [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80",
    ],
    "home": [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    ],
    "party": [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    ],
    "void": [
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",
    ],
    "lab": [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=80",
    ],
    "school": [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    ],
}

THEMES = {
    "safe": {"bg": "#071008", "text": "#D7F6B0", "accent": "#8FCE5D"},
    "yellow": {"bg": "#090B04", "text": "#F2E7A0", "accent": "#D4B43D"},
    "industrial": {"bg": "#070908", "text": "#DDE6C9", "accent": "#A58B45"},
    "danger": {"bg": "#110606", "text": "#FFE6D6", "accent": "#C44536"},
    "water": {"bg": "#031014", "text": "#D8FBFF", "accent": "#39B6D6"},
    "void": {"bg": "#020207", "text": "#C9D4FF", "accent": "#8D7BFF"},
    "city": {"bg": "#070B10", "text": "#DCEAFF", "accent": "#5CB3FF"},
    "party": {"bg": "#18040D", "text": "#FFEAF4", "accent": "#FF4FA3"},
}

SPECIAL_LEVELS = {
    0: ("The Lobby", "yellow", "Level 0 é o início clássico das Backrooms: salas monoamarelas, carpete úmido, papel de parede envelhecido e lâmpadas fluorescentes que zumbem sem fonte visível. O espaço é estimado em centenas de milhões de milhas quadradas e drena a orientação por repetição visual.", ["Howlers raros", "Sussurros miméticos", "Sombras periféricas"], "Classe 1"),
    1: ("Habitable Zone", "warehouse", "Level 1 é uma zona de armazéns, garagens e docas de concreto com suprimentos intermitentes. É mais utilizável que Level 0, porém mais perigoso durante apagões, quando Smilers, Hounds e ruídos de carga aparecem nos corredores.", ["Smilers em apagões", "Hounds", "Facelings passivos"], "Classe 2"),
    2: ("Pipe Dreams", "pipes", "Level 2 é uma rede claustrofóbica de túneis de manutenção, tubulações quentes, vapor pressurizado e passagens longas demais para a planta física fazer sentido. O calor, a falta de rotas limpas e Smilers tornam a permanência prolongada arriscada.", ["Smilers", "Hounds isolados", "Arranhadores de tubulação"], "Classe 3"),
    3: ("Electrical Station", "pipes", "Level 3 é composto por corredores técnicos, painéis elétricos, cabos energizados e salas de máquinas. A interferência eletromagnética corrompe gravações e as entidades usam o ruído industrial como cobertura.", ["Smilers", "Skin-Stealers", "Hounds"], "Classe 4"),
    4: ("Abandoned Office", "office", "Level 4 lembra um escritório corporativo abandonado: cubículos vazios, carpete seco, janelas sem exterior consistente e máquinas de venda que às vezes fornecem água de amêndoas. É um dos primeiros níveis relativamente habitáveis.", ["Facelings ocasionais", "Dullers raros"], "Classe 1"),
    5: ("Terror Hotel", "hotel", "Level 5 é um hotel antigo e escuro com salões, corredores longos, restaurantes vazios e uma sensação de luxo apodrecido. O lugar é instável, elegante e predatório, com áreas conhecidas por mudar de arquitetura.", ["Deathmoths", "Skin-Stealers", "The Beast of Level 5"], "Classe 3"),
    6: ("Lights Out", "void", "Level 6 é escuridão quase absoluta. Lanternas falham, ecos retornam com atraso e a navegação se torna dependente de toque, respiração e memória muscular. A sanidade cai rapidamente pela privação sensorial.", ["Entidades não confirmadas", "Presenças auditivas"], "Classe 5"),
    7: ("Thalassophobia", "ocean", "Level 7 é dominado por uma massa oceânica profunda. A exploração alterna entre salas inundadas, plataformas improváveis e água negra que desperta medo intenso de profundidade. Afogamento e desorientação são os principais riscos.", ["The Thing on Level 7", "Silhuetas submersas"], "Classe 4"),
    8: ("Cave System", "cave", "Level 8 é um sistema de cavernas escuras, úmidas e irregulares. Passagens estreitas, fungos luminescentes e ar viciado tornam o deslocamento lento; aranhas e entidades subterrâneas atacam por vibração.", ["Aranhas de caverna", "Hounds", "Clumps"], "Classe 4"),
    9: ("Darkened Suburbs", "suburb", "Level 9 é um subúrbio noturno interminável, com ruas vazias, casas silenciosas e postes de luz que criam zonas de falsa segurança. A Neighborhood Watch é uma ameaça persistente e a fuga exige seguir padrões urbanos que mudam.", ["Neighborhood Watch", "Facelings domésticos", "Hounds"], "Classe 3"),
    10: ("The Bumper Crop", "field", "Level 10 é um campo rural quase infinito, marcado por trigais, estradas de terra e estruturas agrícolas isoladas. Parece aberto e calmo, mas a distância engana e celeiros nem sempre levam de volta ao mesmo horizonte.", ["Entidades agrícolas raras", "Facelings trabalhadores"], "Classe 1"),
    11: ("The Endless City", "city", "Level 11 é uma cidade infinita e funcional demais para estar vazia. Ruas, lojas, apartamentos e túneis se repetem em escala urbana; Facelings são comuns e muitos agem como habitantes neutros.", ["Facelings", "Hounds urbanos", "Smilers em becos"], "Classe 1"),
    18: ("Childhood Memory", "school", "Level 18 manifesta memórias de infância do wanderer, frequentemente como creche, pré-escola, quarto antigo ou corredor de escola. Cada pessoa vê um espaço diferente, íntimo e perigoso por manipular nostalgia e identidade.", ["Entidades moldadas por memória", "Facelings infantis"], "Classe variável"),
    37: ("The Poolrooms", "pool", "Level 37 é o conjunto de piscinas liminais: azulejos claros, água azul rasa, ecos suaves e corredores aquáticos vazios. A beleza aparente esconde zonas profundas, câmaras sem retorno e alterações sutis de geometria.", ["Entidades aquáticas raras", "Reflexos autônomos"], "Classe 1"),
    94: ("Motion", "suburb", "Level 94 alterna paisagens suburbanas e colinas artificiais sob uma atmosfera infantil e onírica. O nível é conhecido por movimentação anômala, ciclos visuais e sensação de cenário habitado por regras próprias.", ["Animated King", "Figuras cartunescas"], "Classe 4"),
    100: ("Silent Houses", "home", "Level 100 é tratado aqui como margem residencial silenciosa: casas, salas e corredores domésticos que parecem quase normais, exceto pela ausência de moradores e por portas que retornam a lembranças erradas.", ["Facelings domésticos", "Eco-moradores"], "Classe 2"),
}

LEVEL_NAMES = {
    12: "The Matrix", 13: "Infinite Apartments", 14: "Military Hospital", 15: "Futuristic Halls", 16: "Altered Topography", 17: "Carrier", 19: "The Attic", 20: "Warehouse Overgrowth", 21: "Numbered Doors", 22: "The Warning Floor", 23: "Concrete Garden", 24: "Moonlit Atrium", 25: "Arcade Corridors", 26: "Otherworldly Mall", 27: "Wooden Rooms", 28: "Stormy Office", 29: "Red Apartment", 30: "Shifted Metro", 31: "Roller Rink", 32: "Forest of Doors", 33: "Dead Mall", 34: "Sewer System", 35: "Electrical Subfloor", 36: "Airport Terminal", 38: "Industrial Parking", 39: "Enchanted Forest", 40: "Old Station", 41: "Drowned Pipes", 42: "Mirror Halls", 43: "Storage Complex", 44: "Arcade Storage", 45: "The Mountain Village", 46: "Deserted School", 47: "The Living Room", 48: "Sunset Beach", 49: "Roadside Motel", 50: "The Moribund Highway", 51: "Crimson Forest", 52: "The School Halls", 53: "Public Pool Annex", 54: "Electrical Desert", 55: "Hotel Basement", 56: "Concrete Rain", 57: "The Gallery", 58: "Neon Halls", 59: "Train Yard", 60: "Server Maze", 61: "Laundromat", 62: "Forgotten Library", 63: "Suburban Drainage", 64: "The Whiteout", 65: "Office Night", 66: "Infinite Road", 67: "The Bakery", 68: "Flooded Mall", 69: "The Road Trip", 70: "Hospital Ward", 71: "The Broadcast Floor", 72: "Basement Rows", 73: "Apartment Blocks", 74: "The Plastic Jungle", 75: "Garden Center", 76: "Observation Deck", 77: "The Canal", 78: "Empty Museum", 79: "Service Corridors", 80: "Cold Storage", 81: "Radio Tower", 82: "Cliffside Rooms", 83: "The Theater", 84: "Aquarium Wing", 85: "The Motel Loop", 86: "Factory Floor", 87: "The White Stairwell", 88: "Parking Expanse", 89: "Dormitory", 90: "The Office Storm", 91: "Archive Stacks", 92: "Mechanical Cathedral", 93: "Suburban Noon", 95: "The Crimson Field", 96: "Museum of Memory", 97: "The Diner", 98: "The Living City", 99: "The Dream Hospital"
}

ARCHETYPE_BY_LEVEL = {
    12: "office", 13: "home", 14: "office", 15: "lab", 16: "field", 17: "ocean", 19: "home", 20: "warehouse", 21: "office", 22: "pipes", 23: "field", 24: "city", 25: "party", 26: "city", 27: "home", 28: "office", 29: "hotel", 30: "city", 31: "party", 32: "field", 33: "city", 34: "pipes", 35: "pipes", 36: "city", 38: "warehouse", 39: "field", 40: "city", 41: "pipes", 42: "hotel", 43: "warehouse", 44: "party", 45: "field", 46: "school", 47: "home", 48: "ocean", 49: "hotel", 50: "suburb", 51: "field", 52: "school", 53: "pool", 54: "pipes", 55: "hotel", 56: "warehouse", 57: "office", 58: "lab", 59: "warehouse", 60: "lab", 61: "office", 62: "office", 63: "suburb", 64: "void", 65: "office", 66: "suburb", 67: "party", 68: "pool", 69: "suburb", 70: "office", 71: "lab", 72: "warehouse", 73: "home", 74: "field", 75: "field", 76: "city", 77: "ocean", 78: "office", 79: "pipes", 80: "warehouse", 81: "lab", 82: "cave", 83: "hotel", 84: "pool", 85: "hotel", 86: "warehouse", 87: "office", 88: "warehouse", 89: "home", 90: "office", 91: "office", 92: "pipes", 93: "suburb", 95: "field", 96: "home", 97: "hotel", 98: "city", 99: "office"
}

ARCHETYPE_LORE = {
    "yellow": "um labirinto monoamarelo de escritórios vazios, papel de parede envelhecido, carpete úmido e iluminação fluorescente incessante",
    "warehouse": "um complexo de carga, docas e concreto industrial onde suprimentos surgem de forma irregular e apagões transformam rotas simples em zonas de caça",
    "pipes": "um setor de manutenção quente, estreito e ruidoso, com tubulações ativas, vapor, ferrugem e passagens que dobram a distância real",
    "office": "um escritório liminal abandonado, com cubículos, corredores administrativos e salas de reunião onde a normalidade corporativa foi esvaziada",
    "hotel": "uma malha hoteleira envelhecida, elegante e hostil, composta por corredores acarpetados, portas numeradas e áreas sociais que parecem esperar hóspedes mortos",
    "pool": "uma zona aquática liminal com azulejos claros, ecos longos, água azul e transições suaves entre conforto visual e risco de afogamento",
    "suburb": "um bairro aparentemente comum, porém congelado em luz artificial, ruas vazias e casas que reagem à presença do wanderer",
    "city": "um recorte urbano vasto e repetitivo, com ruas, lojas e becos que sugerem população sem jamais provar segurança estável",
    "cave": "um sistema mineral úmido e pouco iluminado, no qual orientação, oxigênio e ruído de passos definem a sobrevivência",
    "ocean": "um domínio de água profunda, salas inundadas e horizontes marítimos que exploram medo de profundidade e distância",
    "field": "uma extensão rural aberta, com campos, cercas e estruturas isoladas que parecem seguras até a distância deixar de obedecer mapas",
    "home": "um interior doméstico ou residencial que manipula memória pessoal, conforto e falsa familiaridade para enfraquecer julgamento",
    "party": "uma arquitetura de lazer colorida e excessivamente alegre, quase sempre armadilha social ou sensorial para wanderers cansados",
    "void": "um espaço de ausência, sombra ou branco absoluto em que referência visual e escala deixam de ser confiáveis",
    "lab": "um setor tecnológico ou técnico cheio de ruído elétrico, monitores, cabos e máquinas que registram mais do que deveriam",
    "school": "um espaço escolar ou infantil que usa nostalgia, rotinas antigas e objetos pessoais como gatilho de desorientação",
}

ENTITIES_BY_ARCHETYPE = {
    "warehouse": ["Smilers", "Hounds", "Facelings logísticos"], "pipes": ["Smilers", "Hounds", "Skin-Stealers"], "office": ["Facelings", "Dullers", "Smilers em salas escuras"], "hotel": ["Deathmoths", "Skin-Stealers", "Facelings hóspedes"], "pool": ["Reflexos autônomos", "Silhuetas submersas"], "suburb": ["Neighborhood Watch", "Facelings domésticos", "Hounds"], "city": ["Facelings", "Smilers em becos", "Hounds urbanos"], "cave": ["Aranhas de caverna", "Clumps", "Hounds"], "ocean": ["Silhuetas submersas", "Entidades abissais"], "field": ["Facelings trabalhadores", "Entidades agrícolas raras"], "home": ["Facelings domésticos", "Eco-moradores"], "party": ["Partygoers", "Bone Thieves", "Smilers"], "void": ["Presenças auditivas", "Silhuetas sem corpo"], "lab": ["Entidades elétricas", "Facelings técnicos"], "school": ["Facelings infantis", "Memórias hostis"]
}

LOOT_BY_ARCHETYPE = {
    "warehouse": ["Água de amêndoas", "Lanternas", "Ferramentas", "Rações vencidas"], "pipes": ["Válvulas soltas", "Luvas térmicas", "Fita isolante", "Máscaras"], "office": ["Água de amêndoas", "Papéis de mapa", "Canetas", "Cabos"], "hotel": ["Chaves antigas", "Toalhas", "Comida enlatada", "Água de amêndoas"], "pool": ["Toalhas secas", "Garrafinhas", "Cloro anômalo", "Azulejos soltos"], "suburb": ["Baterias", "Mapas de bairro", "Chaves de casa", "Rádios"], "city": ["Moedas", "Cartões de acesso", "Rações de loja", "Mapas urbanos"], "cave": ["Pedras marcadas", "Corda", "Capacetes quebrados", "Fungos luminosos"], "ocean": ["Coletes", "Cordas molhadas", "Sinalizadores", "Garrafas"], "field": ["Ferramentas agrícolas", "Água de amêndoas", "Latas", "Tecidos"], "home": ["Fotos alteradas", "Pilhas", "Cobertores", "Água de amêndoas"], "party": ["Balões", "Convites", "Doces suspeitos", "Facas plásticas"], "void": ["Fragmentos de bússola", "Fitas corrompidas", "Pó escuro"], "lab": ["Cabos", "Fusíveis", "Terminais", "Baterias"], "school": ["Giz", "Brinquedos", "Lancheiras", "Desenhos"],
}

CLASS_DESCRIPTION = {
    "Classe 0": "Seguro e estável quando respeitados protocolos básicos.", "Classe 1": "Relativamente seguro, com baixo risco de entidades e perigos previsíveis.", "Classe 2": "Risco moderado, navegação instável e encontros hostis ocasionais.", "Classe 3": "Inseguro; entidades, geometrias hostis ou recursos escassos exigem preparo.", "Classe 4": "Muito perigoso, com ameaça constante e poucas rotas de fuga confiáveis.", "Classe 5": "Extremamente hostil, mortal ou psicologicamente destrutivo.", "Classe variável": "A ameaça muda conforme memória, rota, ciclo ou comportamento do wanderer."
}

def image_credit(archetype):
    source = "Unsplash / Pexels public visual references"
    if archetype in {"yellow", "warehouse", "pipes", "office", "hotel", "pool", "suburb", "city", "cave"}:
        source = "Unsplash/Pexels public images stored as GitHub Pages assets"
    return {"source": source, "title": f"Visual reference for {archetype} liminal environment", "page": "https://unsplash.com/ / https://www.pexels.com/", "license": "Public stock-photo reference URL or repository-hosted public asset", "artist": "Public contributor archive"}

def make_tapes(key, title):
    q = str(title).lower().replace(" ", "+").replace("—", "") + "+backrooms+found+footage"
    return [
        {"type": "youtube_search", "id": q, "label": "TAPE-AUTO-01", "title": f"{title} found footage search", "url": f"https://www.youtube.com/results?search_query={q}"},
        {"type": "youtube_search_embed", "id": q, "label": "TAPE-AUTO-02", "title": f"{title} recovered tape feed", "url": f"https://www.youtube.com/embed?listType=search&list={q}"},
    ]

def make_level(i):
    if i in SPECIAL_LEVELS:
        short_name, arch, overview, entities, cls = SPECIAL_LEVELS[i]
    else:
        short_name = LEVEL_NAMES.get(i, f"Unnamed Archive Sector {i}")
        arch = ARCHETYPE_BY_LEVEL.get(i, ["office", "warehouse", "pipes", "home", "city"][i % 5])
        overview = f"Level {i} é catalogado como {ARCHETYPE_LORE[arch]}. A continuidade do espaço é instável, mas o padrão de exploração segue a tradição das Backrooms: reconhecer repetição, preservar recursos e evitar respostas emocionais ao cenário."
        entities = ENTITIES_BY_ARCHETYPE[arch]
        cls = ["Classe 1", "Classe 2", "Classe 3", "Classe 4"][i % 4]
    safe_desc = CLASS_DESCRIPTION.get(cls, CLASS_DESCRIPTION["Classe variável"])
    assets = ASSETS[arch]
    accent_theme = "danger" if cls in ["Classe 4", "Classe 5"] else "industrial"
    if arch == "yellow": accent_theme = "yellow"
    if arch in ["pool", "ocean"]: accent_theme = "water"
    if arch == "city": accent_theme = "city"
    if arch == "void": accent_theme = "void"
    if arch == "party": accent_theme = "party"
    display_id = f"LEVEL {i:03d}"
    name = f"Level {i} — {short_name}"
    return {
        "id": i, "key": f"level-{i}", "displayId": display_id, "name": name, "theme": arch,
        "overview": overview, "imageUrls": assets, "imageUrl": assets[0], "imageCredit": image_credit(arch),
        "entities": entities,
        "entrances": f"Noclip a partir de níveis adjacentes, portas inconsistentes e corredores que combinam com o padrão visual de {short_name}.",
        "exits": "Saídas aparecem como portas anômalas, escadas de serviço, quedas por noclip ou transições ambientais quando o wanderer deixa de observar o caminho.",
        "size": "Extensão não euclidiana; medições variam conforme ciclo, observador e rota de entrada.",
        "survivalClass": {"level": cls, "description": safe_desc},
        "credits": "Registro reeditado para o Backrooms Database com foco em lore clássica, legibilidade e coerência visual dos ambientes.",
        "sanityDrain": f"{1.5 + (i % 7) * 0.7:.1f}% por hora; aumenta em isolamento, escuridão ou repetição arquitetônica.",
        "availableLoot": LOOT_BY_ARCHETYPE.get(arch, ["Água de amêndoas", "Lanterna", "Fita isolante", "Anotações recuperadas"]),
        "outposts": ["Postos M.E.G. temporários quando o nível permite", "Marcas de wanderers independentes", "Abrigos não garantidos"],
        "avgTemperature": ["12°C a 18°C", "18°C a 24°C", "24°C a 33°C", "Variável por corredor"][i % 4],
        "lightingLevel": "Instável; alterna entre zonas funcionais, sombras profundas e fontes sem alimentação aparente.",
        "geometry": f"Arquitetura principal: {ARCHETYPE_LORE[arch]}; corredores e portas rearranjam distâncias quando fora do campo visual.",
        "ambientSounds": ["Zumbido elétrico distante", "Passos sem origem confirmada", "Tubos ou paredes contraindo", "Eco do próprio equipamento"],
        "survivorLog": f"Registro recuperado: 'Entrei no {display_id} esperando uma repetição simples, mas {short_name} começou a responder aos meus hábitos. Marquei a saída três vezes; na quarta, a marca estava atrás de mim.'",
        "toxicity": "Baixa a moderada; o risco maior é psicológico, ambiental ou ligado a entidades.",
        "wifiSignal": f"Sinal fraco 'ARCHIVE_{i:03d}' com páginas quebradas, coordenadas contraditórias e mensagens datadas incorretamente.",
        "discoveryDate": f"{(i % 27) + 1:02d}/{((i * 3) % 12) + 1:02d}/{1989 + (i % 34)}",
        "casualtyCount": f"{(i * 37) % 900 + 12} presumidas; números oficiais variam entre grupos de exploração.",
        "timeDistortion": "Leve a severa; gravações podem retornar com lacunas, saltos ou trechos ainda não vividos pelo operador.",
        "physicalAnomalies": ["Portas que mudam de destino", "Escalas inconsistentes", "Objetos reaparecendo em posições antigas"],
        "floraFauna": "Mofo, poeira, fungos ou vida anômala compatível com o ambiente; fauna normal raramente sobrevive por muito tempo.",
        "levelCycles": "Ciclos irregulares de luz, ruído e rearranjo espacial sem relógio confiável.",
        "humidity": ["Baixa", "Moderada", "Alta", "Saturada em bolsões específicos"][i % 4],
        "materials": ["Concreto", "Gesso", "Carpete industrial", "Metal oxidado", "Plástico envelhecido"],
        "themeColors": THEMES[accent_theme], "easterEgg": i in [0, 6, 18, 37, 94], "videoTapes": make_tapes(f"level-{i}", name)
    }

def special_record(id_value, display, name, arch, overview, entities, cls, easter=False):
    assets = ASSETS[arch]
    theme_key = "party" if arch == "party" else "void" if arch == "void" else "water" if arch in ["pool", "ocean"] else "city" if arch == "city" else "danger" if cls in ["Classe 4", "Classe 5"] else "safe"
    return {
        "id": id_value, "key": f"special-{str(id_value).replace(' ', '-').replace('=', '').replace('!', 'bang')}", "displayId": display, "name": name, "theme": arch,
        "overview": overview, "imageUrls": assets, "imageUrl": assets[0], "imageCredit": image_credit(arch),
        "entities": entities, "entrances": "Acesso não cronológico por noclip raro, portas simbólicas, rotas impossíveis ou transições documentadas por wanderers avançados.",
        "exits": "Saídas dependem da regra interna do nível; muitas portas são armadilhas ou retornos para níveis centrais.", "size": "Não cronológico; escala variável e frequentemente impossível de medir.",
        "survivalClass": {"level": cls, "description": CLASS_DESCRIPTION.get(cls, CLASS_DESCRIPTION["Classe variável"])}, "credits": "Registro especial solicitado para o Backrooms Database, separado da ordem 000–100.",
        "sanityDrain": "Variável extrema; recomenda-se entrada apenas com propósito claro e rota de retirada.", "availableLoot": LOOT_BY_ARCHETYPE.get(arch, ["Itens cotidianos", "Telefones", "Chaves", "Documentos pessoais"]), "outposts": ["Sem outpost permanente confiável", "Marcações isoladas de wanderers"],
        "avgTemperature": "Instável", "lightingLevel": "Determinado pela anomalia central do nível.", "geometry": overview,
        "ambientSounds": ["Interferência", "Ecos de passos", "Sinais que parecem responder ao observador"], "survivorLog": f"Registro especial: '{display} não obedece à sequência normal. Quando tentei descrevê-lo, a própria fita substituiu minhas palavras por ruído.'",
        "toxicity": "Risco anômalo alto, mesmo quando o ambiente parece seguro.", "wifiSignal": f"Sinal fragmentado '{display.replace(' ', '_')}_SPECIAL'.", "discoveryDate": "Indeterminado", "casualtyCount": "Desconhecido", "timeDistortion": "Severa ou conceitual.",
        "physicalAnomalies": ["Causalidade instável", "Portas simbólicas", "Registros apagados ou reescritos"], "floraFauna": "Incompatível com biologia comum; manifestações variam.", "levelCycles": "Sem ciclo confiável.", "humidity": "Indeterminada", "materials": ["Material liminal", "Concreto", "Luz anômala", "Ruído visual"],
        "themeColors": THEMES[theme_key], "easterEgg": easter, "videoTapes": make_tapes(f"special-{id_value}", name)
    }

levels = []
levels.append(special_record("frontrooms", "FRONTROOMS", "Frontrooms — Realidade Normal", "frontrooms", "As Frontrooms são a realidade cotidiana, a Terra e o mundo físico de onde os wanderers vêm antes de fazer noclip para as Backrooms. O registro serve como ponto zero narrativo: normalidade, memória e vida comum antes da ruptura liminal.", ["Humanos", "Animais comuns", "Nenhuma entidade Backrooms confirmada"], "Classe 0"))
for i in range(101):
    levels.append(make_level(i))

levels.extend([
    special_record("fun", "LEVEL FUN =)", "Level Fun =) — Partygoers' Party", "party", "Level Fun =) parece uma festa de aniversário infinita, com mesas, balões, bolo e música alegre demais. É uma armadilha dos Partygoers: o tom infantil mascara assimilação, perseguição e risco extremo.", ["Partygoers", "Vítimas transformadas", "Smilers atraídos pela música"], "Classe 5", True),
    special_record("!", "LEVEL !", "Level ! — Run For Your Life", "hotel", "Level !, conhecido como Run For Your Life, manifesta um corredor vermelho-branco aparentemente infinito no qual o wanderer precisa correr sem parar enquanto entidades avançam atrás dele. Parar costuma significar morte.", ["Horda não catalogada", "Smilers", "Hounds"], "Classe 5", True),
    special_record(404, "LEVEL 404", "Level 404 — Should Not Exist", "lab", "Level 404 é um nível que não deveria existir: registros falham, portas retornam erro, imagens corrompem e a própria base de dados parece rejeitar sua presença. A ameaça principal é apagamento ou reescrita de identidade.", ["Erros conscientes", "Entidades corrompidas"], "Classe 5", True),
    special_record(-1, "LEVEL -1", "Level -1 — The Abyss", "void", "Level -1, The Abyss, é uma queda conceitual para escuridão e ausência de referência. O wanderer perde escala, direção e frequentemente a noção de corpo antes de encontrar qualquer saída.", ["Silhuetas abissais", "Vozes sem fonte"], "Classe 5", True),
    special_record(999, "LEVEL 999", "Level 999 — The Promised Land", "field", "Level 999 é conhecido como The Promised Land, uma região paradisíaca e serena que funciona como alívio, julgamento ou recompensa para poucos wanderers. A segurança aparente contrasta com sua raridade.", ["Guardiões benevolentes", "Nenhuma ameaça comum"], "Classe 0", False),
    special_record("9223372036854775807", "LEVEL 9223372036854775807", "Level 9223372036854775807 — The True Final Level", "void", "The True Final Level usa o maior inteiro assinado de 64 bits como símbolo de limite absoluto. É tratado como borda conceitual das Backrooms, onde contagem, progressão e saída perdem significado normal.", ["Observadores finais", "Ecos do próprio wanderer"], "Classe variável", True),
    special_record("the-end", "THE END", "The End — False Termination Archive", "office", "The End se apresenta como encerramento, biblioteca, sala de computadores ou terminal de saída. Na lore clássica é um falso final: a promessa de conclusão pode prender o wanderer em loops de informação.", ["Facelings silenciosos", "Terminais conscientes"], "Classe variável", True),
    special_record(-33, "LEVEL -33", "Level -33 — The Void", "void", "Level -33, The Void, é um espaço negativo de vazio, silêncio e distância impossível. Difere de uma simples sala escura porque a própria referência espacial parece removida.", ["Presenças sem forma", "Ecos predatórios"], "Classe 5", True),
    special_record(3999, "LEVEL 3999", "Level 3999 — The Backrooms' Core", "lab", "Level 3999 é tratado neste arquivo como The Backrooms' Core: uma região terminal, estrutural e meta-anômala onde regras, portas e registros parecem ser processados pela própria arquitetura.", ["Núcleo anômalo", "Avatares de sistema", "Facelings técnicos"], "Classe variável", True),
    special_record("hub", "THE HUB", "The Hub — Door Network", "warehouse", "The Hub é o ponto de conexão entre níveis: uma rede de portas, corredores e acessos relativamente estáveis que muitos wanderers usam para transitar entre setores. Segurança depende de reconhecer portas válidas.", ["Facelings neutros", "Guardas humanos", "Smilers distantes"], "Classe 1", False),
])

text = """/*
Backrooms Database — dados revisados.
Mantém o estilo CRT/arquivo militar, mas substitui placeholders por imagens públicas coerentes e descrições alinhadas à lore clássica das Backrooms.
*/

const levels = """ + json.dumps(levels, ensure_ascii=False, indent=2) + ";\n\nwindow.levels = levels;\n"
Path("client/public/data.js").write_text(text, encoding="utf-8")
print(f"data.js written with {len(levels)} records")
