/*
Design aplicado neste arquivo: Brutalismo cibernético de arquivo militar analógico.
Os dados tratam cada nível como registro de dossiê confidencial recuperado, com campos completos e anomalias catalogadas.
Pergunta de controle: esta escolha reforça ou dilui a filosofia de arquivo militar corrompido?
*/

const GENERATED_ASSETS = {
  level0: "https://d2xsxph8kpxj0f.cloudfront.net/310519663609394345/EpuPt7SKxmfdVEA58xUry7/backrooms_level0_fluorescent_archive-bcXvaXVWC9YxR75CRgRMDW.webp",
  level1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663609394345/EpuPt7SKxmfdVEA58xUry7/backrooms_level1_concrete_maintenance-jLvL84H8hqVptriCkPnwqk.webp",
  level2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663609394345/EpuPt7SKxmfdVEA58xUry7/backrooms_level2_pipe_tunnel_heat-aAceP6CvPthqQ3WcGbHkW8.webp",
  corrupt: "https://d2xsxph8kpxj0f.cloudfront.net/310519663609394345/EpuPt7SKxmfdVEA58xUry7/backrooms_signal_corruption_404-cHoJaXPPAfViZb3ENYxzPS.webp"
};

const levels = [];

levels.push({
  id: 0,
  name: "Level 0 — The Lobby",
  imageUrl: GENERATED_ASSETS.level0,
  entities: ["Nenhuma entidade confirmada", "Sussurros miméticos sem corpo", "Sombras periféricas não catalogadas"],
  entrances: "Noclip acidental por paredes úmidas, corredores de escritórios vazios ou portas de manutenção que não constavam na planta original.",
  exits: "Noclip raro através de paredes mais escuras; corredores que mergulham para o concreto de Level 1; escadas que surgem apenas depois de longos ciclos de caminhada.",
  size: "Aproximadamente 600 milhões de milhas quadradas de salas amarelas não lineares; medições retornam valores contraditórios.",
  survivalClass: { level: "Classe 1", description: "Seguro em termos físicos imediatos, instável em orientação, com drenagem mental progressiva e isolamento extremo." },
  credits: "Compilado por M.E.G. Archivist Node BR-07; referências cruzadas com relatos sobreviventes e folclore clássico das Backrooms.",
  sanityDrain: "3.8% por hora em silêncio; até 9% quando o zumbido fluorescente sincroniza com batimentos cardíacos.",
  availableLoot: ["Água de amêndoas em garrafas sem rótulo", "Fita isolante ressecada", "Clipes enferrujados", "Pedaços de carpete com cheiro de ozônio"],
  outposts: ["Posto Limiar-00, temporário e raramente reencontrado", "Marcações de giz do Grupo dos Perdidos, validade desconhecida"],
  avgTemperature: "21°C, apesar de sensação térmica úmida e febril.",
  lightingLevel: "Fluorescente constante, amarelado, sem fonte elétrica acessível; piscadas isoladas indicam mudança geométrica.",
  geometry: "Salas monoamarelas com ângulos quase retos; corredores reconfiguram relações espaciais quando não observados diretamente.",
  ambientSounds: ["Zumbido de lâmpadas em 60 Hz", "Carpete rangendo quando ninguém se move", "Gotejamento dentro das paredes sem tubulação"],
  survivorLog: "Dia 2, talvez. Desenhei setas na parede, mas elas apontam para mim quando volto. A luz nunca apaga; ela apenas espera eu piscar. Encontrei meu próprio nome escrito no carpete, com a grafia que minha mãe usava em bilhetes antigos.",
  toxicity: "Baixa toxicidade química; alta contaminação psicológica por monotonia visual e privação social.",
  wifiSignal: "Sinal intermitente chamado 'MISSING_PERSONNEL_GUEST'; conexão abre páginas que listam pessoas ainda vivas como desaparecidas.",
  discoveryDate: "12/05/1989",
  casualtyCount: "2.413 presumidos, 117 confirmados por gravações recuperadas.",
  timeDistortion: "Relógios digitais atrasam 11 minutos por hora subjetiva; gravações retornam com trechos que o operador ainda não viveu.",
  physicalAnomalies: ["Carpete úmido sem fonte de água", "Paredes que abafam gritos", "Portas desenhadas que se tornam reais durante apagões"],
  floraFauna: "Mofo amarelo pálido em cantos fechados; nenhum animal confirmado, embora pegadas pequenas apareçam ao redor de pessoas dormindo.",
  levelCycles: "Sem dia ou noite; ciclos de reorganização ocorrem após períodos de silêncio absoluto.",
  humidity: "73% média, com picos localizados que encharcam equipamentos em minutos.",
  materials: ["Papel de parede envelhecido", "Carpete industrial úmido", "Gesso oco", "Luminárias fluorescentes seladas"],
  themeColors: { bg: "#090B04", text: "#D7F6B0", accent: "#D4B43D" },
  easterEgg: true
});

levels.push({
  id: 1,
  name: "Level 1 — Habitable Zone",
  imageUrl: GENERATED_ASSETS.level1,
  entities: ["Hounds distantes", "Facelings passivos em corredores de carga", "Agentes humanos sem identificação"],
  entrances: "Noclip a partir de paredes escuras do Level 0, poços de elevador impossíveis e portas de serviço com cheiro de concreto molhado.",
  exits: "Escadas metálicas para níveis industriais; portas numeradas para hubs; áreas inundadas que descarregam em subníveis não autorizados.",
  size: "Complexo de manutenção potencialmente infinito, organizado em blocos de estacionamento, docas e salas técnicas.",
  survivalClass: { level: "Classe 1", description: "Habitável por curtos períodos, com recursos recuperáveis, zonas de abrigo e risco moderado de entidades." },
  credits: "Registro consolidado por células M.E.G., B.N.T.G. e testemunhos anônimos de comboios perdidos.",
  sanityDrain: "2.1% por hora em grupo; 6.4% por hora quando as luzes entram em modo de emergência.",
  availableLoot: ["Caixas de suprimentos reaparecendo", "Lanternas semi-carregadas", "Rações militares vencidas", "Ferramentas de manutenção", "Água de amêndoas"],
  outposts: ["Base Alpha, acesso controlado", "Mercado Cinza da doca leste", "Abrigo das Colunas 14-18"],
  avgTemperature: "16°C, com corredores frios próximos a portas pretas.",
  lightingLevel: "Baixo a moderado; falhas de energia produzem janelas de atividade hostil.",
  geometry: "Garagens e corredores de concreto em malha semi-estável; pilares repetem números que não batem com mapas.",
  ambientSounds: ["Gotejamento em poças", "Vibração de transformadores", "Rodas de carrinhos de carga em corredores vazios", "Rugidos distantes"],
  survivorLog: "A caixa de suprimentos apareceu de novo, no mesmo lugar, mas desta vez continha uma foto minha dormindo. O concreto atrás da Base Alpha começou a respirar às 03:17. Ninguém quis anotar no quadro. Eles dizem que mapas assustam os novatos.",
  toxicity: "Baixa; bolsões de mofo e vapores de combustível exigem máscara em docas específicas.",
  wifiSignal: "Rede 'ALPHA_INTERNAL' instável; mensagens chegam com remetente do próprio usuário, datadas do dia seguinte.",
  discoveryDate: "03/09/1990",
  casualtyCount: "891 confirmados, maioria durante apagões e deslocamentos solitários.",
  timeDistortion: "Relativamente estável; apagões podem avançar relógios em múltiplos de 17 minutos.",
  physicalAnomalies: ["Caixas que reaparecem após inventário", "Pilares que trocam de posição", "Sombras que permanecem depois da saída do corpo"],
  floraFauna: "Mofo cinza e liquens translúcidos em paredes úmidas; insetos sem olhos próximos a luminárias quebradas.",
  levelCycles: "Ciclo de energia de 9 a 27 horas; cada queda altera rotas secundárias.",
  humidity: "64% média; 91% nas áreas de drenagem.",
  materials: ["Concreto armado", "Aço oxidado", "Tinta industrial descascada", "Tubulação exposta", "Plástico de caixas logísticas"],
  themeColors: { bg: "#070908", text: "#DDE6C9", accent: "#A58B45" },
  easterEgg: false
});

levels.push({
  id: 2,
  name: "Level 2 — Pipe Dreams",
  imageUrl: GENERATED_ASSETS.level2,
  entities: ["Smilers em trechos sem luz", "Wretches isolados", "Crawlers térmicos não confirmados", "Hounds atraídos por vapor"],
  entrances: "Corredores de manutenção do Level 1, portas com calor excessivo, dutos grandes demais para a arquitetura declarada.",
  exits: "Escotilhas enferrujadas para níveis industriais; dutos de ar que comprimem o viajante para subníveis; portas frias que retornam ao Level 1.",
  size: "Rede claustrofóbica de túneis aquecidos e salas de válvulas; largura média inferior a 2 metros.",
  survivalClass: { level: "Classe 2", description: "Perigoso por calor, confinamento, hostilidade auditiva e encontros em pontos cegos." },
  credits: "Arquivo montado a partir de gravadores queimados, mapas térmicos e depoimentos de operadores de manutenção desaparecidos.",
  sanityDrain: "7.2% por hora; 14% em túneis onde os canos sussurram nomes de familiares.",
  availableLoot: ["Chaves de válvula", "Máscaras térmicas rasgadas", "Cabos de cobre", "Água de amêndoas morna", "Baterias inchadas"],
  outposts: ["Ninho de Válvulas 2-B, ocupação intermitente", "Posto Termal do grupo Boilerwatch"],
  avgTemperature: "34°C, com bolsas acima de 51°C perto de tubos vermelhos.",
  lightingLevel: "Baixo; lâmpadas de gaiola e brilho laranja de calor. Áreas completamente escuras são evitadas.",
  geometry: "Túneis longos, repetitivos e estreitos; curvas de 90 graus levam a trechos que não caberiam no espaço anterior.",
  ambientSounds: ["Vapor sob pressão", "Batidas metálicas em sequência inteligente", "Respiração dentro dos canos", "Alarmes baixos demais para localizar"],
  survivorLog: "Não era vapor. O som vinha de dentro do cano e repetia meu pedido de socorro com a voz do Pedro, que morreu no Level 1. A válvula 9 girou sozinha quando escrevi isto. Se a parede suar sangue de novo, não sigam o rastro; ele termina em dentes.",
  toxicity: "Moderada a alta; vapores metálicos e ar quente causam náusea, confusão e queimaduras respiratórias.",
  wifiSignal: "Quase nulo; pacotes chegam como caracteres repetindo 'OPEN THE VALVE'.",
  discoveryDate: "21/01/1991",
  casualtyCount: "1.206 estimados; corpos raramente permanecem onde caem.",
  timeDistortion: "Relógios analógicos aceleram perto de válvulas vermelhas; o tempo subjetivo alonga em passagens estreitas.",
  physicalAnomalies: ["Tubos quentes sem fonte térmica", "Portas frias em paredes incandescentes", "Condensação com padrões de escrita", "Metais que sangram ferrugem fresca"],
  floraFauna: "Fungos alaranjados em juntas de tubos; larvas translúcidas que evaporam sob luz direta.",
  levelCycles: "Picos de pressão a cada 6 horas aproximadas; após cada pico, alguns corredores invertem direção.",
  humidity: "88% média, saturada por vapor oleoso.",
  materials: ["Ferro fundido", "Aço quente", "Concreto queimado", "Válvulas oxidadas", "Grades industriais"],
  themeColors: { bg: "#120604", text: "#FFE2B7", accent: "#D95B24" },
  easterEgg: true
});

(function createRecoveredLevelStubs() {
  const archetypes = [
    { title: "Maintenance Sprawl", entities: ["Hounds", "Facelings operários"], image: GENERATED_ASSETS.level1, bg: "#070A08", text: "#D8E7C6", accent: "#8EA15B", material: "concreto manchado" },
    { title: "Thermal Utility Corridor", entities: ["Smilers", "Wretches térmicos"], image: GENERATED_ASSETS.level2, bg: "#130704", text: "#FFE1C2", accent: "#C65125", material: "aço superaquecido" },
    { title: "Fluorescent Office Drift", entities: ["Sussurros miméticos", "Sombras periféricas"], image: GENERATED_ASSETS.level0, bg: "#0B0C05", text: "#E6F4B5", accent: "#BFA638", material: "papel de parede úmido" },
    { title: "Archive Atrium", entities: ["Facelings arquivistas", "Page Eaters"], image: "missing://classified/atrium", bg: "#080A0C", text: "#D5E8E8", accent: "#4DA6A6", material: "vidro fosco e aço" },
    { title: "Suburban Null Block", entities: ["Skin-Stealers", "Cães sem mandíbula"], image: "missing://classified/suburb", bg: "#0C090D", text: "#E8D6EF", accent: "#9C6AB5", material: "drywall oco" },
    { title: "Flooded Service Deck", entities: ["Drowned Facelings", "Hounds aquáticos"], image: "missing://classified/flood", bg: "#061014", text: "#CFEEF4", accent: "#2E94B8", material: "azulejo rachado" }
  ];

  const loot = ["água de amêndoas", "bateria industrial", "fita de marcação", "máscara de poeira", "lanterna de emergência", "mapa parcial", "rádio com chiado", "comprimidos sem bula"];
  const sounds = ["zumbido elétrico", "passos dois corredores atrás", "ventilação irregular", "gotejamento sincronizado", "batidas sob o piso", "rádio militar enterrado em estática"];
  const anomalies = ["portas que mudam de lado", "sombras com atraso", "paredes respirando", "bússolas girando", "sinais de saída apontando para becos", "temperatura invertida entre salas"];
  const flora = ["mofo pálido", "líquens translúcidos", "raízes sem origem", "poeira orgânica", "fungos de ferrugem", "nenhuma forma viva confirmada"];

  for (let id = 3; id <= 100; id += 1) {
    const a = archetypes[id % archetypes.length];
    const cycle = (id % 9) + 3;
    const hazard = id % 5;
    const casualtyBase = id * 17 + (hazard * 23);
    const img = id % 10 === 0 ? `missing://archive/level-${id}` : a.image;
    levels.push({
      id,
      name: `Level ${id} — ${a.title}`,
      imageUrl: img,
      entities: [a.entities[0], a.entities[1], id % 7 === 0 ? "Entidade não classificada vista apenas em reflexos" : "Ausência hostil de fauna confirmada"],
      entrances: `Acesso por noclip a partir de zonas com ${a.material}, principalmente quando o viajante repete a mesma rota por ${cycle} ciclos. Registros de entrada também citam portas marcadas com o número ${id} em níveis anteriores.`,
      exits: `Saídas instáveis para níveis adjacentes, escotilhas de manutenção e corredores que reduzem a pressão sonora. Equipes recomendam seguir cabos pretos por no máximo ${cycle + 2} minutos.`,
      size: `${(id * 13).toLocaleString('pt-BR')} km² mapeados, extensão real não confirmada; mapas dobram sobre si mesmos após revisão.`,
      survivalClass: {
        level: `Classe ${1 + (id % 5)}`,
        description: hazard < 2 ? "Sobrevivência possível com disciplina, luz e rota de retirada." : hazard < 4 ? "Risco elevado por geometrias hostis, recursos inconsistentes e encontros imprevisíveis." : "Altamente instável; entrada não autorizada tratada como perda operacional provável."
      },
      credits: `Registro recuperado pelo Arquivo M.E.G. BR-${String(id).padStart(3, '0')}; validação cruzada por três relatos incompletos e telemetria corrompida.`,
      sanityDrain: `${(2.4 + (id % 11) * 0.7).toFixed(1)}% por hora; dobra quando sinais auditivos usam nomes pessoais.`,
      availableLoot: [loot[id % loot.length], loot[(id + 2) % loot.length], loot[(id + 5) % loot.length]],
      outposts: [`Posto provisório ${id}-${String.fromCharCode(65 + (id % 26))}`, id % 4 === 0 ? "Sinal de abrigo abandonado, sem ocupantes" : "Nenhum outpost permanente confirmado"],
      avgTemperature: `${8 + (id % 38)}°C, com microclimas inconsistentes perto de transições geométricas.`,
      lightingLevel: id % 3 === 0 ? "Baixo e pulsante, dependente de painéis sem fiação visível." : id % 3 === 1 ? "Moderado, fluorescente e desconfortavelmente uniforme." : "Irregular; escuridão total em zonas de eco.",
      geometry: `Setores de ${a.material} organizados em sequência aparentemente lógica, quebrada por retornos impossíveis e corredores que removem portas já observadas.`,
      ambientSounds: [sounds[id % sounds.length], sounds[(id + 2) % sounds.length], sounds[(id + 4) % sounds.length]],
      survivorLog: `Registro ${id}.${cycle}: contei as passagens e perdi uma que estava atrás de mim. O rádio repetiu minha respiração com ${cycle} segundos de antecedência. Quando deixei uma marca no ${a.material}, ela reapareceu na minha pele com a tinta ainda fresca.`,
      toxicity: hazard === 0 ? "Baixa, mas partículas suspensas causam irritação ocular." : hazard === 1 ? "Moderada em bolsões fechados; máscara recomendada." : hazard === 2 ? "Alta em salas quentes e câmaras sem ventilação." : hazard === 3 ? "Variável, com surtos químicos sem aviso." : "Desconhecida; sintomas surgem antes da exposição mensurável.",
      wifiSignal: id % 6 === 0 ? "Sinal forte demais, sem internet, transmitindo nomes de desaparecidos." : id % 6 === 1 ? "Intermitente, SSID muda conforme o nível de medo do operador." : "Inexistente, exceto pacotes vazios recebidos às 03:17.",
      discoveryDate: `${String((id % 28) + 1).padStart(2, '0')}/${String((id % 12) + 1).padStart(2, '0')}/${1991 + (id % 30)}`,
      casualtyCount: `${casualtyBase} estimados; confirmação visual prejudicada por remoção anômala de corpos.`,
      timeDistortion: `Desvio médio de ${(id % 13) + 1} minutos por hora subjetiva; gravações podem anteceder eventos por um ciclo.`,
      physicalAnomalies: [anomalies[id % anomalies.length], anomalies[(id + 3) % anomalies.length], anomalies[(id + 5) % anomalies.length]],
      floraFauna: `${flora[id % flora.length]} detectado em zonas úmidas; fauna convencional ausente ou convertida em ruído de fundo.`,
      levelCycles: `Ciclo operacional de aproximadamente ${cycle} horas, marcado por mudança de luz, pressão e posição de saídas.`,
      humidity: `${35 + (id % 61)}% média, com leituras divergentes entre sensores a menos de um metro.`,
      materials: [a.material, id % 2 === 0 ? "metal oxidado" : "plástico institucional", id % 3 === 0 ? "vidro opaco" : "concreto poroso"],
      themeColors: { bg: a.bg, text: a.text, accent: a.accent },
      easterEgg: id % 17 === 0 || id === 66
    });
  }
})();

window.levels = levels;
window.GENERATED_ASSETS = GENERATED_ASSETS;

// ============================================================
// Enriquecimento de mídia real e fitas alternativas
// ============================================================
const BACKROOMS_MEDIA_ASSETS = [
  {
    "id": 0,
    "theme": "yellow office corridor with carpet",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-000/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 000",
      "page": "https://picsum.photos/seed/backrooms-level-000/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube",
        "id": "QggDxPyi5_g",
        "label": "TAPE 000-01",
        "title": "backrooms level 0 found footage — recovered tape 1",
        "url": "https://www.youtube.com/watch?v=QggDxPyi5_g"
      },
      {
        "type": "youtube",
        "id": "nfUYjAJu1Qc",
        "label": "TAPE 000-02",
        "title": "backrooms level 0 found footage — recovered tape 2",
        "url": "https://www.youtube.com/watch?v=nfUYjAJu1Qc"
      },
      {
        "type": "youtube",
        "id": "gEhRi8C-RgY",
        "label": "TAPE 000-03",
        "title": "backrooms level 0 found footage — recovered tape 3",
        "url": "https://www.youtube.com/watch?v=gEhRi8C-RgY"
      },
      {
        "type": "youtube",
        "id": "Wuh84ECs_xI",
        "label": "TAPE 000-04",
        "title": "backrooms level 0 found footage — recovered tape 4",
        "url": "https://www.youtube.com/watch?v=Wuh84ECs_xI"
      },
      {
        "type": "youtube_search",
        "id": "backrooms+level+0+found+footage",
        "label": "TAPE 000-05",
        "title": "backrooms level 0 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+0+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+0+found+footage",
        "label": "TAPE 000-06",
        "title": "backrooms level 0 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+0+found+footage"
      }
    ]
  },
  {
    "id": 1,
    "theme": "dark warehouse maintenance garage",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-001/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 001",
      "page": "https://picsum.photos/seed/backrooms-level-001/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube",
        "id": "0MW94fbEn9w",
        "label": "TAPE 001-01",
        "title": "backrooms level 1 found footage — recovered tape 1",
        "url": "https://www.youtube.com/watch?v=0MW94fbEn9w"
      },
      {
        "type": "youtube",
        "id": "NsjRfcqL-yw",
        "label": "TAPE 001-02",
        "title": "backrooms level 1 found footage — recovered tape 2",
        "url": "https://www.youtube.com/watch?v=NsjRfcqL-yw"
      },
      {
        "type": "youtube",
        "id": "Z74eGBdND4Q",
        "label": "TAPE 001-03",
        "title": "backrooms level 1 found footage — recovered tape 3",
        "url": "https://www.youtube.com/watch?v=Z74eGBdND4Q"
      },
      {
        "type": "youtube",
        "id": "BzSrhtpmbVM",
        "label": "TAPE 001-04",
        "title": "backrooms level 1 found footage — recovered tape 4",
        "url": "https://www.youtube.com/watch?v=BzSrhtpmbVM"
      },
      {
        "type": "youtube_search",
        "id": "backrooms+level+1+found+footage",
        "label": "TAPE 001-05",
        "title": "backrooms level 1 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+1+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+1+found+footage",
        "label": "TAPE 001-06",
        "title": "backrooms level 1 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+1+found+footage"
      }
    ]
  },
  {
    "id": 2,
    "theme": "industrial pipe tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-002/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 002",
      "page": "https://picsum.photos/seed/backrooms-level-002/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube",
        "id": "G_d8gNflqIM",
        "label": "TAPE 002-01",
        "title": "backrooms level 2 pipe dreams found footage — recovered tape 1",
        "url": "https://www.youtube.com/watch?v=G_d8gNflqIM"
      },
      {
        "type": "youtube",
        "id": "xzy8CSeruUU",
        "label": "TAPE 002-02",
        "title": "backrooms level 2 pipe dreams found footage — recovered tape 2",
        "url": "https://www.youtube.com/watch?v=xzy8CSeruUU"
      },
      {
        "type": "youtube",
        "id": "TVDgpip0YKk",
        "label": "TAPE 002-03",
        "title": "backrooms level 2 pipe dreams found footage — recovered tape 3",
        "url": "https://www.youtube.com/watch?v=TVDgpip0YKk"
      },
      {
        "type": "youtube",
        "id": "sA5PxGHqpTo",
        "label": "TAPE 002-04",
        "title": "backrooms level 2 pipe dreams found footage — recovered tape 4",
        "url": "https://www.youtube.com/watch?v=sA5PxGHqpTo"
      },
      {
        "type": "youtube_search",
        "id": "backrooms+level+2+pipe+dreams+found+footage",
        "label": "TAPE 002-05",
        "title": "backrooms level 2 pipe dreams found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+2+pipe+dreams+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+2+pipe+dreams+found+footage",
        "label": "TAPE 002-06",
        "title": "backrooms level 2 pipe dreams found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+2+pipe+dreams+found+footage"
      }
    ]
  },
  {
    "id": 3,
    "theme": "electrical station corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-003/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 003",
      "page": "https://picsum.photos/seed/backrooms-level-003/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+3+found+footage",
        "label": "TAPE 003-01",
        "title": "backrooms level 3 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+3+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+3+found+footage",
        "label": "TAPE 003-02",
        "title": "backrooms level 3 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+3+found+footage"
      }
    ]
  },
  {
    "id": 4,
    "theme": "empty office complex",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-004/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 004",
      "page": "https://picsum.photos/seed/backrooms-level-004/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+4+found+footage",
        "label": "TAPE 004-01",
        "title": "backrooms level 4 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+4+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+4+found+footage",
        "label": "TAPE 004-02",
        "title": "backrooms level 4 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+4+found+footage"
      }
    ]
  },
  {
    "id": 5,
    "theme": "abandoned hotel lobby",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-005/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 005",
      "page": "https://picsum.photos/seed/backrooms-level-005/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+5+found+footage",
        "label": "TAPE 005-01",
        "title": "backrooms level 5 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+5+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+5+found+footage",
        "label": "TAPE 005-02",
        "title": "backrooms level 5 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+5+found+footage"
      }
    ]
  },
  {
    "id": 6,
    "theme": "lights out basement",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-006/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 006",
      "page": "https://picsum.photos/seed/backrooms-level-006/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+6+found+footage",
        "label": "TAPE 006-01",
        "title": "backrooms level 6 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+6+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+6+found+footage",
        "label": "TAPE 006-02",
        "title": "backrooms level 6 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+6+found+footage"
      }
    ]
  },
  {
    "id": 7,
    "theme": "submerged industrial room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-007/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 007",
      "page": "https://picsum.photos/seed/backrooms-level-007/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+7+thalassophobia+found+footage",
        "label": "TAPE 007-01",
        "title": "backrooms level 7 thalassophobia found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+7+thalassophobia+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+7+thalassophobia+found+footage",
        "label": "TAPE 007-02",
        "title": "backrooms level 7 thalassophobia found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+7+thalassophobia+found+footage"
      }
    ]
  },
  {
    "id": 8,
    "theme": "cave passage",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-008/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 008",
      "page": "https://picsum.photos/seed/backrooms-level-008/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+8+cave+found+footage",
        "label": "TAPE 008-01",
        "title": "backrooms level 8 cave found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+8+cave+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+8+cave+found+footage",
        "label": "TAPE 008-02",
        "title": "backrooms level 8 cave found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+8+cave+found+footage"
      }
    ]
  },
  {
    "id": 9,
    "theme": "suburban street at night",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-009/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 009",
      "page": "https://picsum.photos/seed/backrooms-level-009/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+9+suburb+found+footage",
        "label": "TAPE 009-01",
        "title": "backrooms level 9 suburb found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+9+suburb+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+9+suburb+found+footage",
        "label": "TAPE 009-02",
        "title": "backrooms level 9 suburb found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+9+suburb+found+footage"
      }
    ]
  },
  {
    "id": 10,
    "theme": "endless wheat field",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-010/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 010",
      "page": "https://picsum.photos/seed/backrooms-level-010/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+10+found+footage",
        "label": "TAPE 010-01",
        "title": "backrooms level 10 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+10+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+10+found+footage",
        "label": "TAPE 010-02",
        "title": "backrooms level 10 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+10+found+footage"
      }
    ]
  },
  {
    "id": 11,
    "theme": "empty city street",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-011/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 011",
      "page": "https://picsum.photos/seed/backrooms-level-011/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+11+found+footage",
        "label": "TAPE 011-01",
        "title": "backrooms level 11 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+11+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+11+found+footage",
        "label": "TAPE 011-02",
        "title": "backrooms level 11 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+11+found+footage"
      }
    ]
  },
  {
    "id": 12,
    "theme": "white tiled corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-012/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 012",
      "page": "https://picsum.photos/seed/backrooms-level-012/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+12+found+footage",
        "label": "TAPE 012-01",
        "title": "backrooms level 12 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+12+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+12+found+footage",
        "label": "TAPE 012-02",
        "title": "backrooms level 12 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+12+found+footage"
      }
    ]
  },
  {
    "id": 13,
    "theme": "apartment hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-013/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 013",
      "page": "https://picsum.photos/seed/backrooms-level-013/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+13+found+footage",
        "label": "TAPE 013-01",
        "title": "backrooms level 13 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+13+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+13+found+footage",
        "label": "TAPE 013-02",
        "title": "backrooms level 13 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+13+found+footage"
      }
    ]
  },
  {
    "id": 14,
    "theme": "military hospital ward",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-014/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 014",
      "page": "https://picsum.photos/seed/backrooms-level-014/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+14+found+footage",
        "label": "TAPE 014-01",
        "title": "backrooms level 14 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+14+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+14+found+footage",
        "label": "TAPE 014-02",
        "title": "backrooms level 14 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+14+found+footage"
      }
    ]
  },
  {
    "id": 15,
    "theme": "futuristic halls",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-015/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 015",
      "page": "https://picsum.photos/seed/backrooms-level-015/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+15+futuristic+halls+found+footage",
        "label": "TAPE 015-01",
        "title": "backrooms level 15 futuristic halls found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+15+futuristic+halls+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+15+futuristic+halls+found+footage",
        "label": "TAPE 015-02",
        "title": "backrooms level 15 futuristic halls found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+15+futuristic+halls+found+footage"
      }
    ]
  },
  {
    "id": 16,
    "theme": "unlit railway tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-016/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 016",
      "page": "https://picsum.photos/seed/backrooms-level-016/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+16+found+footage",
        "label": "TAPE 016-01",
        "title": "backrooms level 16 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+16+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+16+found+footage",
        "label": "TAPE 016-02",
        "title": "backrooms level 16 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+16+found+footage"
      }
    ]
  },
  {
    "id": 17,
    "theme": "abandoned aircraft carrier",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-017/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 017",
      "page": "https://picsum.photos/seed/backrooms-level-017/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+17+found+footage",
        "label": "TAPE 017-01",
        "title": "backrooms level 17 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+17+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+17+found+footage",
        "label": "TAPE 017-02",
        "title": "backrooms level 17 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+17+found+footage"
      }
    ]
  },
  {
    "id": 18,
    "theme": "wooden attic maze",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-018/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 018",
      "page": "https://picsum.photos/seed/backrooms-level-018/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+18+found+footage",
        "label": "TAPE 018-01",
        "title": "backrooms level 18 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+18+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+18+found+footage",
        "label": "TAPE 018-02",
        "title": "backrooms level 18 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+18+found+footage"
      }
    ]
  },
  {
    "id": 19,
    "theme": "liminal shopping mall",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-019/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 019",
      "page": "https://picsum.photos/seed/backrooms-level-019/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+19+found+footage",
        "label": "TAPE 019-01",
        "title": "backrooms level 19 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+19+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+19+found+footage",
        "label": "TAPE 019-02",
        "title": "backrooms level 19 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+19+found+footage"
      }
    ]
  },
  {
    "id": 20,
    "theme": "warehouse racks",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-020/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 020",
      "page": "https://picsum.photos/seed/backrooms-level-020/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+20+warehouse+found+footage",
        "label": "TAPE 020-01",
        "title": "backrooms level 20 warehouse found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+20+warehouse+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+20+warehouse+found+footage",
        "label": "TAPE 020-02",
        "title": "backrooms level 20 warehouse found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+20+warehouse+found+footage"
      }
    ]
  },
  {
    "id": 21,
    "theme": "airport terminal at night",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-021/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 021",
      "page": "https://picsum.photos/seed/backrooms-level-021/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+21+found+footage",
        "label": "TAPE 021-01",
        "title": "backrooms level 21 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+21+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+21+found+footage",
        "label": "TAPE 021-02",
        "title": "backrooms level 21 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+21+found+footage"
      }
    ]
  },
  {
    "id": 22,
    "theme": "abandoned factory floor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-022/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 022",
      "page": "https://picsum.photos/seed/backrooms-level-022/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+22+found+footage",
        "label": "TAPE 022-01",
        "title": "backrooms level 22 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+22+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+22+found+footage",
        "label": "TAPE 022-02",
        "title": "backrooms level 22 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+22+found+footage"
      }
    ]
  },
  {
    "id": 23,
    "theme": "greenhouse corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-023/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 023",
      "page": "https://picsum.photos/seed/backrooms-level-023/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+23+found+footage",
        "label": "TAPE 023-01",
        "title": "backrooms level 23 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+23+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+23+found+footage",
        "label": "TAPE 023-02",
        "title": "backrooms level 23 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+23+found+footage"
      }
    ]
  },
  {
    "id": 24,
    "theme": "concrete parking deck",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-024/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 024",
      "page": "https://picsum.photos/seed/backrooms-level-024/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+24+found+footage",
        "label": "TAPE 024-01",
        "title": "backrooms level 24 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+24+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+24+found+footage",
        "label": "TAPE 024-02",
        "title": "backrooms level 24 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+24+found+footage"
      }
    ]
  },
  {
    "id": 25,
    "theme": "arcade room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-025/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 025",
      "page": "https://picsum.photos/seed/backrooms-level-025/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+25+found+footage",
        "label": "TAPE 025-01",
        "title": "backrooms level 25 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+25+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+25+found+footage",
        "label": "TAPE 025-02",
        "title": "backrooms level 25 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+25+found+footage"
      }
    ]
  },
  {
    "id": 26,
    "theme": "forest path fog",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-026/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 026",
      "page": "https://picsum.photos/seed/backrooms-level-026/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+26+found+footage",
        "label": "TAPE 026-01",
        "title": "backrooms level 26 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+26+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+26+found+footage",
        "label": "TAPE 026-02",
        "title": "backrooms level 26 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+26+found+footage"
      }
    ]
  },
  {
    "id": 27,
    "theme": "school hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-027/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 027",
      "page": "https://picsum.photos/seed/backrooms-level-027/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+27+found+footage",
        "label": "TAPE 027-01",
        "title": "backrooms level 27 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+27+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+27+found+footage",
        "label": "TAPE 027-02",
        "title": "backrooms level 27 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+27+found+footage"
      }
    ]
  },
  {
    "id": 28,
    "theme": "storm drain tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-028/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 028",
      "page": "https://picsum.photos/seed/backrooms-level-028/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+28+found+footage",
        "label": "TAPE 028-01",
        "title": "backrooms level 28 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+28+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+28+found+footage",
        "label": "TAPE 028-02",
        "title": "backrooms level 28 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+28+found+footage"
      }
    ]
  },
  {
    "id": 29,
    "theme": "abandoned church nave",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-029/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 029",
      "page": "https://picsum.photos/seed/backrooms-level-029/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+29+found+footage",
        "label": "TAPE 029-01",
        "title": "backrooms level 29 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+29+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+29+found+footage",
        "label": "TAPE 029-02",
        "title": "backrooms level 29 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+29+found+footage"
      }
    ]
  },
  {
    "id": 30,
    "theme": "hospital operating corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-030/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 030",
      "page": "https://picsum.photos/seed/backrooms-level-030/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+30+found+footage",
        "label": "TAPE 030-01",
        "title": "backrooms level 30 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+30+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+30+found+footage",
        "label": "TAPE 030-02",
        "title": "backrooms level 30 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+30+found+footage"
      }
    ]
  },
  {
    "id": 31,
    "theme": "indoor playground",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-031/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 031",
      "page": "https://picsum.photos/seed/backrooms-level-031/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+31+roller+rink+found+footage",
        "label": "TAPE 031-01",
        "title": "backrooms level 31 roller rink found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+31+roller+rink+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+31+roller+rink+found+footage",
        "label": "TAPE 031-02",
        "title": "backrooms level 31 roller rink found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+31+roller+rink+found+footage"
      }
    ]
  },
  {
    "id": 32,
    "theme": "industrial kitchen",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-032/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 032",
      "page": "https://picsum.photos/seed/backrooms-level-032/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+32+found+footage",
        "label": "TAPE 032-01",
        "title": "backrooms level 32 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+32+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+32+found+footage",
        "label": "TAPE 032-02",
        "title": "backrooms level 32 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+32+found+footage"
      }
    ]
  },
  {
    "id": 33,
    "theme": "laundromat",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-033/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 033",
      "page": "https://picsum.photos/seed/backrooms-level-033/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+33+found+footage",
        "label": "TAPE 033-01",
        "title": "backrooms level 33 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+33+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+33+found+footage",
        "label": "TAPE 033-02",
        "title": "backrooms level 33 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+33+found+footage"
      }
    ]
  },
  {
    "id": 34,
    "theme": "concrete sewer",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-034/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 034",
      "page": "https://picsum.photos/seed/backrooms-level-034/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+34+found+footage",
        "label": "TAPE 034-01",
        "title": "backrooms level 34 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+34+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+34+found+footage",
        "label": "TAPE 034-02",
        "title": "backrooms level 34 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+34+found+footage"
      }
    ]
  },
  {
    "id": 35,
    "theme": "abandoned metro station",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-035/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 035",
      "page": "https://picsum.photos/seed/backrooms-level-035/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+35+found+footage",
        "label": "TAPE 035-01",
        "title": "backrooms level 35 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+35+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+35+found+footage",
        "label": "TAPE 035-02",
        "title": "backrooms level 35 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+35+found+footage"
      }
    ]
  },
  {
    "id": 36,
    "theme": "server room corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-036/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 036",
      "page": "https://picsum.photos/seed/backrooms-level-036/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+36+found+footage",
        "label": "TAPE 036-01",
        "title": "backrooms level 36 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+36+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+36+found+footage",
        "label": "TAPE 036-02",
        "title": "backrooms level 36 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+36+found+footage"
      }
    ]
  },
  {
    "id": 37,
    "theme": "poolrooms",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-037/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 037",
      "page": "https://picsum.photos/seed/backrooms-level-037/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+37+poolrooms+found+footage",
        "label": "TAPE 037-01",
        "title": "backrooms level 37 poolrooms found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+37+poolrooms+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+37+poolrooms+found+footage",
        "label": "TAPE 037-02",
        "title": "backrooms level 37 poolrooms found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+37+poolrooms+found+footage"
      }
    ]
  },
  {
    "id": 38,
    "theme": "archive library stacks",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-038/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 038",
      "page": "https://picsum.photos/seed/backrooms-level-038/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+38+found+footage",
        "label": "TAPE 038-01",
        "title": "backrooms level 38 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+38+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+38+found+footage",
        "label": "TAPE 038-02",
        "title": "backrooms level 38 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+38+found+footage"
      }
    ]
  },
  {
    "id": 39,
    "theme": "desert road",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-039/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 039",
      "page": "https://picsum.photos/seed/backrooms-level-039/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+39+found+footage",
        "label": "TAPE 039-01",
        "title": "backrooms level 39 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+39+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+39+found+footage",
        "label": "TAPE 039-02",
        "title": "backrooms level 39 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+39+found+footage"
      }
    ]
  },
  {
    "id": 40,
    "theme": "motel corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-040/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 040",
      "page": "https://picsum.photos/seed/backrooms-level-040/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+40+found+footage",
        "label": "TAPE 040-01",
        "title": "backrooms level 40 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+40+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+40+found+footage",
        "label": "TAPE 040-02",
        "title": "backrooms level 40 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+40+found+footage"
      }
    ]
  },
  {
    "id": 41,
    "theme": "cold storage warehouse",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-041/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 041",
      "page": "https://picsum.photos/seed/backrooms-level-041/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+41+found+footage",
        "label": "TAPE 041-01",
        "title": "backrooms level 41 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+41+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+41+found+footage",
        "label": "TAPE 041-02",
        "title": "backrooms level 41 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+41+found+footage"
      }
    ]
  },
  {
    "id": 42,
    "theme": "highway tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-042/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 042",
      "page": "https://picsum.photos/seed/backrooms-level-042/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+42+found+footage",
        "label": "TAPE 042-01",
        "title": "backrooms level 42 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+42+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+42+found+footage",
        "label": "TAPE 042-02",
        "title": "backrooms level 42 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+42+found+footage"
      }
    ]
  },
  {
    "id": 43,
    "theme": "indoor waterpark",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-043/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 043",
      "page": "https://picsum.photos/seed/backrooms-level-043/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+43+found+footage",
        "label": "TAPE 043-01",
        "title": "backrooms level 43 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+43+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+43+found+footage",
        "label": "TAPE 043-02",
        "title": "backrooms level 43 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+43+found+footage"
      }
    ]
  },
  {
    "id": 44,
    "theme": "office stairwell",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-044/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 044",
      "page": "https://picsum.photos/seed/backrooms-level-044/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+44+found+footage",
        "label": "TAPE 044-01",
        "title": "backrooms level 44 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+44+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+44+found+footage",
        "label": "TAPE 044-02",
        "title": "backrooms level 44 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+44+found+footage"
      }
    ]
  },
  {
    "id": 45,
    "theme": "abandoned laboratory",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-045/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 045",
      "page": "https://picsum.photos/seed/backrooms-level-045/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+45+found+footage",
        "label": "TAPE 045-01",
        "title": "backrooms level 45 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+45+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+45+found+footage",
        "label": "TAPE 045-02",
        "title": "backrooms level 45 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+45+found+footage"
      }
    ]
  },
  {
    "id": 46,
    "theme": "hotel service hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-046/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 046",
      "page": "https://picsum.photos/seed/backrooms-level-046/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+46+found+footage",
        "label": "TAPE 046-01",
        "title": "backrooms level 46 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+46+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+46+found+footage",
        "label": "TAPE 046-02",
        "title": "backrooms level 46 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+46+found+footage"
      }
    ]
  },
  {
    "id": 47,
    "theme": "industrial boiler room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-047/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 047",
      "page": "https://picsum.photos/seed/backrooms-level-047/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+47+found+footage",
        "label": "TAPE 047-01",
        "title": "backrooms level 47 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+47+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+47+found+footage",
        "label": "TAPE 047-02",
        "title": "backrooms level 47 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+47+found+footage"
      }
    ]
  },
  {
    "id": 48,
    "theme": "grocery store aisle",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-048/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 048",
      "page": "https://picsum.photos/seed/backrooms-level-048/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+48+found+footage",
        "label": "TAPE 048-01",
        "title": "backrooms level 48 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+48+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+48+found+footage",
        "label": "TAPE 048-02",
        "title": "backrooms level 48 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+48+found+footage"
      }
    ]
  },
  {
    "id": 49,
    "theme": "bus depot",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-049/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 049",
      "page": "https://picsum.photos/seed/backrooms-level-049/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+49+found+footage",
        "label": "TAPE 049-01",
        "title": "backrooms level 49 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+49+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+49+found+footage",
        "label": "TAPE 049-02",
        "title": "backrooms level 49 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+49+found+footage"
      }
    ]
  },
  {
    "id": 50,
    "theme": "liminal train platform",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-050/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 050",
      "page": "https://picsum.photos/seed/backrooms-level-050/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+50+found+footage",
        "label": "TAPE 050-01",
        "title": "backrooms level 50 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+50+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+50+found+footage",
        "label": "TAPE 050-02",
        "title": "backrooms level 50 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+50+found+footage"
      }
    ]
  },
  {
    "id": 51,
    "theme": "underground bunker corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-051/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 051",
      "page": "https://picsum.photos/seed/backrooms-level-051/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+51+found+footage",
        "label": "TAPE 051-01",
        "title": "backrooms level 51 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+51+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+51+found+footage",
        "label": "TAPE 051-02",
        "title": "backrooms level 51 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+51+found+footage"
      }
    ]
  },
  {
    "id": 52,
    "theme": "hotel indoor pool",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-052/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 052",
      "page": "https://picsum.photos/seed/backrooms-level-052/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+52+found+footage",
        "label": "TAPE 052-01",
        "title": "backrooms level 52 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+52+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+52+found+footage",
        "label": "TAPE 052-02",
        "title": "backrooms level 52 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+52+found+footage"
      }
    ]
  },
  {
    "id": 53,
    "theme": "factory catwalk",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-053/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 053",
      "page": "https://picsum.photos/seed/backrooms-level-053/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+53+found+footage",
        "label": "TAPE 053-01",
        "title": "backrooms level 53 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+53+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+53+found+footage",
        "label": "TAPE 053-02",
        "title": "backrooms level 53 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+53+found+footage"
      }
    ]
  },
  {
    "id": 54,
    "theme": "old classroom",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-054/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 054",
      "page": "https://picsum.photos/seed/backrooms-level-054/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+54+found+footage",
        "label": "TAPE 054-01",
        "title": "backrooms level 54 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+54+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+54+found+footage",
        "label": "TAPE 054-02",
        "title": "backrooms level 54 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+54+found+footage"
      }
    ]
  },
  {
    "id": 55,
    "theme": "shopping center escalator",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-055/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 055",
      "page": "https://picsum.photos/seed/backrooms-level-055/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+55+found+footage",
        "label": "TAPE 055-01",
        "title": "backrooms level 55 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+55+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+55+found+footage",
        "label": "TAPE 055-02",
        "title": "backrooms level 55 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+55+found+footage"
      }
    ]
  },
  {
    "id": 56,
    "theme": "subway maintenance tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-056/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 056",
      "page": "https://picsum.photos/seed/backrooms-level-056/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+56+found+footage",
        "label": "TAPE 056-01",
        "title": "backrooms level 56 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+56+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+56+found+footage",
        "label": "TAPE 056-02",
        "title": "backrooms level 56 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+56+found+footage"
      }
    ]
  },
  {
    "id": 57,
    "theme": "misty lake dock",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-057/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 057",
      "page": "https://picsum.photos/seed/backrooms-level-057/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+57+found+footage",
        "label": "TAPE 057-01",
        "title": "backrooms level 57 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+57+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+57+found+footage",
        "label": "TAPE 057-02",
        "title": "backrooms level 57 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+57+found+footage"
      }
    ]
  },
  {
    "id": 58,
    "theme": "abandoned theater seats",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-058/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 058",
      "page": "https://picsum.photos/seed/backrooms-level-058/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+58+found+footage",
        "label": "TAPE 058-01",
        "title": "backrooms level 58 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+58+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+58+found+footage",
        "label": "TAPE 058-02",
        "title": "backrooms level 58 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+58+found+footage"
      }
    ]
  },
  {
    "id": 59,
    "theme": "warehouse loading dock",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-059/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 059",
      "page": "https://picsum.photos/seed/backrooms-level-059/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+59+found+footage",
        "label": "TAPE 059-01",
        "title": "backrooms level 59 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+59+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+59+found+footage",
        "label": "TAPE 059-02",
        "title": "backrooms level 59 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+59+found+footage"
      }
    ]
  },
  {
    "id": 60,
    "theme": "red lit corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-060/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 060",
      "page": "https://picsum.photos/seed/backrooms-level-060/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+60+found+footage",
        "label": "TAPE 060-01",
        "title": "backrooms level 60 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+60+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+60+found+footage",
        "label": "TAPE 060-02",
        "title": "backrooms level 60 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+60+found+footage"
      }
    ]
  },
  {
    "id": 61,
    "theme": "hospital basement",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-061/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 061",
      "page": "https://picsum.photos/seed/backrooms-level-061/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+61+found+footage",
        "label": "TAPE 061-01",
        "title": "backrooms level 61 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+61+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+61+found+footage",
        "label": "TAPE 061-02",
        "title": "backrooms level 61 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+61+found+footage"
      }
    ]
  },
  {
    "id": 62,
    "theme": "concrete underpass",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-062/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 062",
      "page": "https://picsum.photos/seed/backrooms-level-062/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+62+found+footage",
        "label": "TAPE 062-01",
        "title": "backrooms level 62 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+62+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+62+found+footage",
        "label": "TAPE 062-02",
        "title": "backrooms level 62 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+62+found+footage"
      }
    ]
  },
  {
    "id": 63,
    "theme": "office cubicle maze",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-063/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 063",
      "page": "https://picsum.photos/seed/backrooms-level-063/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+63+found+footage",
        "label": "TAPE 063-01",
        "title": "backrooms level 63 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+63+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+63+found+footage",
        "label": "TAPE 063-02",
        "title": "backrooms level 63 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+63+found+footage"
      }
    ]
  },
  {
    "id": 64,
    "theme": "abandoned greenhouse",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-064/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 064",
      "page": "https://picsum.photos/seed/backrooms-level-064/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+64+found+footage",
        "label": "TAPE 064-01",
        "title": "backrooms level 64 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+64+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+64+found+footage",
        "label": "TAPE 064-02",
        "title": "backrooms level 64 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+64+found+footage"
      }
    ]
  },
  {
    "id": 65,
    "theme": "industrial elevator hall",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-065/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 065",
      "page": "https://picsum.photos/seed/backrooms-level-065/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+65+found+footage",
        "label": "TAPE 065-01",
        "title": "backrooms level 65 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+65+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+65+found+footage",
        "label": "TAPE 065-02",
        "title": "backrooms level 65 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+65+found+footage"
      }
    ]
  },
  {
    "id": 66,
    "theme": "basement storage cages",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-066/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 066",
      "page": "https://picsum.photos/seed/backrooms-level-066/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+66+found+footage",
        "label": "TAPE 066-01",
        "title": "backrooms level 66 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+66+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+66+found+footage",
        "label": "TAPE 066-02",
        "title": "backrooms level 66 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+66+found+footage"
      }
    ]
  },
  {
    "id": 67,
    "theme": "abandoned casino",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-067/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 067",
      "page": "https://picsum.photos/seed/backrooms-level-067/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+67+found+footage",
        "label": "TAPE 067-01",
        "title": "backrooms level 67 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+67+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+67+found+footage",
        "label": "TAPE 067-02",
        "title": "backrooms level 67 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+67+found+footage"
      }
    ]
  },
  {
    "id": 68,
    "theme": "maintenance crawlspace",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-068/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 068",
      "page": "https://picsum.photos/seed/backrooms-level-068/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+68+found+footage",
        "label": "TAPE 068-01",
        "title": "backrooms level 68 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+68+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+68+found+footage",
        "label": "TAPE 068-02",
        "title": "backrooms level 68 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+68+found+footage"
      }
    ]
  },
  {
    "id": 69,
    "theme": "long hotel hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-069/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 069",
      "page": "https://picsum.photos/seed/backrooms-level-069/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+69+found+footage",
        "label": "TAPE 069-01",
        "title": "backrooms level 69 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+69+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+69+found+footage",
        "label": "TAPE 069-02",
        "title": "backrooms level 69 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+69+found+footage"
      }
    ]
  },
  {
    "id": 70,
    "theme": "snowy parking lot",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-070/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 070",
      "page": "https://picsum.photos/seed/backrooms-level-070/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+70+found+footage",
        "label": "TAPE 070-01",
        "title": "backrooms level 70 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+70+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+70+found+footage",
        "label": "TAPE 070-02",
        "title": "backrooms level 70 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+70+found+footage"
      }
    ]
  },
  {
    "id": 71,
    "theme": "industrial freezer corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-071/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 071",
      "page": "https://picsum.photos/seed/backrooms-level-071/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+71+found+footage",
        "label": "TAPE 071-01",
        "title": "backrooms level 71 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+71+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+71+found+footage",
        "label": "TAPE 071-02",
        "title": "backrooms level 71 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+71+found+footage"
      }
    ]
  },
  {
    "id": 72,
    "theme": "empty sports hall",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-072/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 072",
      "page": "https://picsum.photos/seed/backrooms-level-072/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+72+found+footage",
        "label": "TAPE 072-01",
        "title": "backrooms level 72 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+72+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+72+found+footage",
        "label": "TAPE 072-02",
        "title": "backrooms level 72 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+72+found+footage"
      }
    ]
  },
  {
    "id": 73,
    "theme": "public restroom tiles",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-073/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 073",
      "page": "https://picsum.photos/seed/backrooms-level-073/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+73+found+footage",
        "label": "TAPE 073-01",
        "title": "backrooms level 73 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+73+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+73+found+footage",
        "label": "TAPE 073-02",
        "title": "backrooms level 73 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+73+found+footage"
      }
    ]
  },
  {
    "id": 74,
    "theme": "green tinted corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-074/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 074",
      "page": "https://picsum.photos/seed/backrooms-level-074/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+74+found+footage",
        "label": "TAPE 074-01",
        "title": "backrooms level 74 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+74+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+74+found+footage",
        "label": "TAPE 074-02",
        "title": "backrooms level 74 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+74+found+footage"
      }
    ]
  },
  {
    "id": 75,
    "theme": "airport service tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-075/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 075",
      "page": "https://picsum.photos/seed/backrooms-level-075/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+75+found+footage",
        "label": "TAPE 075-01",
        "title": "backrooms level 75 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+75+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+75+found+footage",
        "label": "TAPE 075-02",
        "title": "backrooms level 75 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+75+found+footage"
      }
    ]
  },
  {
    "id": 76,
    "theme": "empty office lobby",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-076/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 076",
      "page": "https://picsum.photos/seed/backrooms-level-076/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+76+found+footage",
        "label": "TAPE 076-01",
        "title": "backrooms level 76 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+76+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+76+found+footage",
        "label": "TAPE 076-02",
        "title": "backrooms level 76 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+76+found+footage"
      }
    ]
  },
  {
    "id": 77,
    "theme": "abandoned amusement park",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-077/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 077",
      "page": "https://picsum.photos/seed/backrooms-level-077/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+77+found+footage",
        "label": "TAPE 077-01",
        "title": "backrooms level 77 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+77+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+77+found+footage",
        "label": "TAPE 077-02",
        "title": "backrooms level 77 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+77+found+footage"
      }
    ]
  },
  {
    "id": 78,
    "theme": "concrete water channel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-078/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 078",
      "page": "https://picsum.photos/seed/backrooms-level-078/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+78+found+footage",
        "label": "TAPE 078-01",
        "title": "backrooms level 78 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+78+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+78+found+footage",
        "label": "TAPE 078-02",
        "title": "backrooms level 78 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+78+found+footage"
      }
    ]
  },
  {
    "id": 79,
    "theme": "carpeted hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-079/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 079",
      "page": "https://picsum.photos/seed/backrooms-level-079/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+79+found+footage",
        "label": "TAPE 079-01",
        "title": "backrooms level 79 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+79+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+79+found+footage",
        "label": "TAPE 079-02",
        "title": "backrooms level 79 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+79+found+footage"
      }
    ]
  },
  {
    "id": 80,
    "theme": "hospital waiting room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-080/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 080",
      "page": "https://picsum.photos/seed/backrooms-level-080/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+80+found+footage",
        "label": "TAPE 080-01",
        "title": "backrooms level 80 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+80+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+80+found+footage",
        "label": "TAPE 080-02",
        "title": "backrooms level 80 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+80+found+footage"
      }
    ]
  },
  {
    "id": 81,
    "theme": "parking garage ramp",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-081/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 081",
      "page": "https://picsum.photos/seed/backrooms-level-081/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+81+found+footage",
        "label": "TAPE 081-01",
        "title": "backrooms level 81 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+81+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+81+found+footage",
        "label": "TAPE 081-02",
        "title": "backrooms level 81 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+81+found+footage"
      }
    ]
  },
  {
    "id": 82,
    "theme": "industrial control room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-082/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 082",
      "page": "https://picsum.photos/seed/backrooms-level-082/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+82+found+footage",
        "label": "TAPE 082-01",
        "title": "backrooms level 82 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+82+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+82+found+footage",
        "label": "TAPE 082-02",
        "title": "backrooms level 82 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+82+found+footage"
      }
    ]
  },
  {
    "id": 83,
    "theme": "foggy road",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-083/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 083",
      "page": "https://picsum.photos/seed/backrooms-level-083/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+83+found+footage",
        "label": "TAPE 083-01",
        "title": "backrooms level 83 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+83+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+83+found+footage",
        "label": "TAPE 083-02",
        "title": "backrooms level 83 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+83+found+footage"
      }
    ]
  },
  {
    "id": 84,
    "theme": "abandoned apartment interior",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-084/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 084",
      "page": "https://picsum.photos/seed/backrooms-level-084/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+84+found+footage",
        "label": "TAPE 084-01",
        "title": "backrooms level 84 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+84+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+84+found+footage",
        "label": "TAPE 084-02",
        "title": "backrooms level 84 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+84+found+footage"
      }
    ]
  },
  {
    "id": 85,
    "theme": "warehouse mezzanine",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-085/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 085",
      "page": "https://picsum.photos/seed/backrooms-level-085/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+85+found+footage",
        "label": "TAPE 085-01",
        "title": "backrooms level 85 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+85+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+85+found+footage",
        "label": "TAPE 085-02",
        "title": "backrooms level 85 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+85+found+footage"
      }
    ]
  },
  {
    "id": 86,
    "theme": "old swimming baths",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-086/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 086",
      "page": "https://picsum.photos/seed/backrooms-level-086/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+86+found+footage",
        "label": "TAPE 086-01",
        "title": "backrooms level 86 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+86+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+86+found+footage",
        "label": "TAPE 086-02",
        "title": "backrooms level 86 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+86+found+footage"
      }
    ]
  },
  {
    "id": 87,
    "theme": "library reading room",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-087/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 087",
      "page": "https://picsum.photos/seed/backrooms-level-087/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+87+found+footage",
        "label": "TAPE 087-01",
        "title": "backrooms level 87 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+87+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+87+found+footage",
        "label": "TAPE 087-02",
        "title": "backrooms level 87 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+87+found+footage"
      }
    ]
  },
  {
    "id": 88,
    "theme": "yellow lit tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-088/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 088",
      "page": "https://picsum.photos/seed/backrooms-level-088/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+88+found+footage",
        "label": "TAPE 088-01",
        "title": "backrooms level 88 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+88+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+88+found+footage",
        "label": "TAPE 088-02",
        "title": "backrooms level 88 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+88+found+footage"
      }
    ]
  },
  {
    "id": 89,
    "theme": "empty office cafeteria",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-089/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 089",
      "page": "https://picsum.photos/seed/backrooms-level-089/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+89+found+footage",
        "label": "TAPE 089-01",
        "title": "backrooms level 89 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+89+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+89+found+footage",
        "label": "TAPE 089-02",
        "title": "backrooms level 89 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+89+found+footage"
      }
    ]
  },
  {
    "id": 90,
    "theme": "industrial hallway blue",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-090/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 090",
      "page": "https://picsum.photos/seed/backrooms-level-090/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+90+found+footage",
        "label": "TAPE 090-01",
        "title": "backrooms level 90 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+90+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+90+found+footage",
        "label": "TAPE 090-02",
        "title": "backrooms level 90 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+90+found+footage"
      }
    ]
  },
  {
    "id": 91,
    "theme": "abandoned train carriage",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-091/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 091",
      "page": "https://picsum.photos/seed/backrooms-level-091/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+91+found+footage",
        "label": "TAPE 091-01",
        "title": "backrooms level 91 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+91+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+91+found+footage",
        "label": "TAPE 091-02",
        "title": "backrooms level 91 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+91+found+footage"
      }
    ]
  },
  {
    "id": 92,
    "theme": "underground parking columns",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-092/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 092",
      "page": "https://picsum.photos/seed/backrooms-level-092/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+92+found+footage",
        "label": "TAPE 092-01",
        "title": "backrooms level 92 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+92+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+92+found+footage",
        "label": "TAPE 092-02",
        "title": "backrooms level 92 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+92+found+footage"
      }
    ]
  },
  {
    "id": 93,
    "theme": "storage unit corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-093/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 093",
      "page": "https://picsum.photos/seed/backrooms-level-093/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+93+found+footage",
        "label": "TAPE 093-01",
        "title": "backrooms level 93 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+93+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+93+found+footage",
        "label": "TAPE 093-02",
        "title": "backrooms level 93 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+93+found+footage"
      }
    ]
  },
  {
    "id": 94,
    "theme": "rural road dusk",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-094/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 094",
      "page": "https://picsum.photos/seed/backrooms-level-094/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+94+found+footage",
        "label": "TAPE 094-01",
        "title": "backrooms level 94 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+94+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+94+found+footage",
        "label": "TAPE 094-02",
        "title": "backrooms level 94 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+94+found+footage"
      }
    ]
  },
  {
    "id": 95,
    "theme": "concrete service corridor",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-095/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 095",
      "page": "https://picsum.photos/seed/backrooms-level-095/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+95+found+footage",
        "label": "TAPE 095-01",
        "title": "backrooms level 95 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+95+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+95+found+footage",
        "label": "TAPE 095-02",
        "title": "backrooms level 95 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+95+found+footage"
      }
    ]
  },
  {
    "id": 96,
    "theme": "empty convention hall",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-096/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 096",
      "page": "https://picsum.photos/seed/backrooms-level-096/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+96+found+footage",
        "label": "TAPE 096-01",
        "title": "backrooms level 96 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+96+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+96+found+footage",
        "label": "TAPE 096-02",
        "title": "backrooms level 96 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+96+found+footage"
      }
    ]
  },
  {
    "id": 97,
    "theme": "steam tunnel",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-097/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 097",
      "page": "https://picsum.photos/seed/backrooms-level-097/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+97+found+footage",
        "label": "TAPE 097-01",
        "title": "backrooms level 97 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+97+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+97+found+footage",
        "label": "TAPE 097-02",
        "title": "backrooms level 97 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+97+found+footage"
      }
    ]
  },
  {
    "id": 98,
    "theme": "abandoned dorm hallway",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-098/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 098",
      "page": "https://picsum.photos/seed/backrooms-level-098/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+98+found+footage",
        "label": "TAPE 098-01",
        "title": "backrooms level 98 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+98+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+98+found+footage",
        "label": "TAPE 098-02",
        "title": "backrooms level 98 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+98+found+footage"
      }
    ]
  },
  {
    "id": 99,
    "theme": "industrial staircase",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-099/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 099",
      "page": "https://picsum.photos/seed/backrooms-level-099/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+99+found+footage",
        "label": "TAPE 099-01",
        "title": "backrooms level 99 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+99+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+99+found+footage",
        "label": "TAPE 099-02",
        "title": "backrooms level 99 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+99+found+footage"
      }
    ]
  },
  {
    "id": 100,
    "theme": "snow covered facility",
    "imageUrl": "https://picsum.photos/seed/backrooms-level-100/1600/900",
    "imageCredit": {
      "source": "Picsum Photos public placeholder image service",
      "title": "Unique public placeholder image for Level 100",
      "page": "https://picsum.photos/seed/backrooms-level-100/1600/900",
      "license": "Public placeholder URL; deterministic non-repeating seed per level",
      "artist": "Picsum Photos contributor pool"
    },
    "videoTapes": [
      {
        "type": "youtube_search",
        "id": "backrooms+level+100+found+footage",
        "label": "TAPE 100-01",
        "title": "backrooms level 100 found footage",
        "url": "https://www.youtube.com/results?search_query=backrooms+level+100+found+footage"
      },
      {
        "type": "youtube_search_embed",
        "id": "backrooms+level+100+found+footage",
        "label": "TAPE 100-02",
        "title": "backrooms level 100 found footage",
        "url": "https://www.youtube.com/embed?listType=search&list=backrooms+level+100+found+footage"
      }
    ]
  }
];

(function applyRecoveredMediaAssets() {
  const byId = new Map(BACKROOMS_MEDIA_ASSETS.map((asset) => [asset.id, asset]));
  levels.forEach((level) => {
    const asset = byId.get(level.id);
    if (!asset) return;
    level.imageUrl = asset.imageUrl;
    level.imageCredit = asset.imageCredit;
    level.videoTapes = Array.isArray(asset.videoTapes) ? asset.videoTapes : [];
  });
})();

window.BACKROOMS_MEDIA_ASSETS = BACKROOMS_MEDIA_ASSETS;

