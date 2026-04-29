/*
Design aplicado neste arquivo: Brutalismo cibernético de arquivo militar analógico.
A arquitetura JS mantém o terminal vivo: estado rastreável, renderização controlada, validação rígida, eventos únicos e tema anômalo por nível.
Pergunta de controle: esta escolha reforça ou dilui a filosofia de arquivo militar corrompido?
*/

(function bootBackroomsDatabase() {
  "use strict";

  // ============================================================
  // State Manager
  // ============================================================
  const state = {
    currentLevel: "frontrooms",
    isLoading: false,
    history: [],
    glitchIntensity: 0,
    tapeIndexes: {},
    imageIndexes: {}
  };

  const runtime = {
    renderedLevel: null,
    validated: false,
    audioEnabled: false,
    audioContext: null,
    searchTerm: "",
    language: localStorage.getItem("backrooms_lang") || "pt-BR"
  };

  const translations = {
    "pt-BR": {
      searchPlaceholder: "ex.: 0, pipes, motel",
      prev: "Anterior",
      next: "Próximo",
      random: "Aleatório",
      audioOn: "Áudio ON",
      audioOff: "Áudio OFF",
      status: "STATUS: unstable but readable",
      searchLabel: "Pesquisar nível",
      survivalClass: "Classificação de Sobrevivência",
      levelDescription: "Descrição do Nível",
      entrances: "Entradas",
      exits: "Saídas",
      entities: "Entidades",
      loot: "Loot disponível",
      telemetry: "Telemetria Anômala",
      ambientSounds: "Sons Ambientais",
      physicalAnomalies: "Anomalias Físicas",
      outposts: "Outposts",
      floraFauna: "Flora / Fauna",
      survivorLog: "REGISTRO DE SOBREVIVENTE // transcrição de áudio recuperada",
      credits: "Créditos do Registro",
      fields: {
        "Sanidade": "Sanidade",
        "Temperatura": "Temperatura",
        "Luz": "Luz",
        "Geometria": "Geometria",
        "Toxicidade": "Toxicidade",
        "Wi-Fi": "Wi-Fi",
        "Distorção temporal": "Distorção temporal",
        "Ciclos": "Ciclos",
        "Umidade": "Umidade",
        "Materiais": "Materiais",
        "Classe": "Classe",
        "Tamanho": "Tamanho",
        "Descoberto": "Descoberto",
        "Baixas": "Baixas"
      }
    },
    "en-US": {
      searchPlaceholder: "e.g.: 0, pipes, motel",
      prev: "Previous",
      next: "Next",
      random: "Random",
      audioOn: "Audio ON",
      audioOff: "Audio OFF",
      status: "STATUS: unstable but readable",
      searchLabel: "Search level",
      survivalClass: "Survival Classification",
      levelDescription: "Level Description",
      entrances: "Entrances",
      exits: "Exits",
      entities: "Entities",
      loot: "Available Loot",
      telemetry: "Anomalous Telemetry",
      ambientSounds: "Ambient Sounds",
      physicalAnomalies: "Physical Anomalies",
      outposts: "Outposts",
      floraFauna: "Flora / Fauna",
      survivorLog: "SURVIVOR LOG // recovered audio transcription",
      credits: "Record Credits",
      fields: {
        "Sanidade": "Sanity",
        "Temperatura": "Temperature",
        "Luz": "Light",
        "Geometria": "Geometry",
        "Toxicidade": "Toxicity",
        "Wi-Fi": "Wi-Fi",
        "Distorção temporal": "Time Distortion",
        "Ciclos": "Cycles",
        "Umidade": "Humidity",
        "Materiais": "Materials",
        "Classe": "Class",
        "Tamanho": "Size",
        "Descoberto": "Discovered",
        "Baixas": "Casualties"
      }
    },
    "es-ES": {
      searchPlaceholder: "ej.: 0, pipes, motel",
      prev: "Anterior",
      next: "Siguiente",
      random: "Aleatorio",
      audioOn: "Audio ON",
      audioOff: "Audio OFF",
      status: "ESTADO: inestable pero legible",
      searchLabel: "Buscar nivel",
      survivalClass: "Clasificación de Supervivencia",
      levelDescription: "Descripción del Nivel",
      entrances: "Entradas",
      exits: "Salidas",
      entities: "Entidades",
      loot: "Botín disponible",
      telemetry: "Telemetría Anómala",
      ambientSounds: "Sonidos Ambientales",
      physicalAnomalies: "Anomalías Físicas",
      outposts: "Puestos de avanzada",
      floraFauna: "Flora / Fauna",
      survivorLog: "REGISTRO DE SOBREVIVIENTE // transcripción de audio recuperada",
      credits: "Créditos del Registro",
      fields: {
        "Sanidade": "Sanidad",
        "Temperatura": "Temperatura",
        "Luz": "Luz",
        "Geometria": "Geometría",
        "Toxicidade": "Toxicidad",
        "Wi-Fi": "Wi-Fi",
        "Distorção temporal": "Distorsión temporal",
        "Ciclos": "Ciclos",
        "Umidade": "Humedad",
        "Materiais": "Materiales",
        "Classe": "Clase",
        "Tamanho": "Tamaño",
        "Descoberto": "Descubierto",
        "Baixas": "Bajas"
      }
    },
    "ja-JP": {
      searchPlaceholder: "例: 0, パイプ, モーテル",
      prev: "前へ",
      next: "次へ",
      random: "ランダム",
      audioOn: "オーディオ ON",
      audioOff: "オーディオ OFF",
      status: "ステータス: 不安定だが読み取り可能",
      searchLabel: "レベル検索",
      survivalClass: "生存難易度クラス",
      levelDescription: "レベルの説明",
      entrances: "入口",
      exits: "出口",
      entities: "エンティティ",
      loot: "入手可能な物資",
      telemetry: "異常テレメトリ",
      ambientSounds: "環境音",
      physicalAnomalies: "物理的異常",
      outposts: "前哨基地",
      floraFauna: "動植物",
      survivorLog: "生存者の記録 // 回収された音声の書き起こし",
      credits: "記録クレジット",
      fields: {
        "Sanidade": "正気度",
        "Temperatura": "温度",
        "Luz": "光",
        "Geometria": "幾何学",
        "Toxicidade": "毒性",
        "Wi-Fi": "Wi-Fi",
        "Distorção temporal": "時間歪曲",
        "Ciclos": "サイクル",
        "Umidade": "湿度",
        "Materiais": "材料",
        "Classe": "クラス",
        "Tamanho": "サイズ",
        "Descoberto": "発見日",
        "Baixas": "犠牲者数"
      }
    },
    "de-DE": {
      searchPlaceholder: "z.B.: 0, Rohre, Motel",
      prev: "Zurück",
      next: "Weiter",
      random: "Zufällig",
      audioOn: "Audio AN",
      audioOff: "Audio AUS",
      status: "STATUS: instabil, aber lesbar",
      searchLabel: "Ebene suchen",
      survivalClass: "Überlebensklassifizierung",
      levelDescription: "Ebenenbeschreibung",
      entrances: "Eingänge",
      exits: "Ausgänge",
      entities: "Entitäten",
      loot: "Verfügbare Beute",
      telemetry: "Anomale Telemetrie",
      ambientSounds: "Umgebungsgeräusche",
      physicalAnomalies: "Physische Anomalien",
      outposts: "Außenposten",
      floraFauna: "Flora / Fauna",
      survivorLog: "ÜBERLEBENDEN-LOG // wiederhergestellte Audiotranskription",
      credits: "Eintrags-Credits",
      fields: {
        "Sanidade": "Sanität",
        "Temperatura": "Temperatur",
        "Luz": "Licht",
        "Geometria": "Geometrie",
        "Toxicidade": "Toxizität",
        "Wi-Fi": "WLAN",
        "Distorção temporal": "Zeitverzerrung",
        "Ciclos": "Zyklen",
        "Umidade": "Feuchtigkeit",
        "Materiais": "Materialien",
        "Classe": "Klasse",
        "Tamanho": "Größe",
        "Descoberto": "Entdeckt",
        "Baixas": "Opfer"
      }
    }
  };

  function t(key) {
    const lang = runtime.language;
    return translations[lang]?.[key] || translations["pt-BR"][key] || key;
  }

  function tf(field) {
    const lang = runtime.language;
    return translations[lang]?.fields?.[field] || translations["pt-BR"].fields?.[field] || field;
  }

  const dom = {};

  // ============================================================
  // Utility Functions
  // ============================================================
  const REQUIRED_BASIC_FIELDS = [
    "id", "displayId", "name", "overview", "imageUrl", "imageUrls", "entities", "entrances", "exits", "size", "survivalClass", "credits"
  ];

  const REQUIRED_ADVANCED_FIELDS = [
    "sanityDrain", "availableLoot", "outposts", "avgTemperature", "lightingLevel", "geometry", "ambientSounds", "survivorLog", "toxicity", "wifiSignal", "discoveryDate", "casualtyCount", "timeDistortion", "physicalAnomalies", "floraFauna", "levelCycles", "humidity", "materials", "themeColors", "easterEgg"
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createNode(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof text === "string") node.textContent = text;
    return node;
  }

  function appendChildren(parent, children) {
    children.filter(Boolean).forEach((child) => parent.appendChild(child));
    return parent;
  }

  function normalizeList(value) {
    return Array.isArray(value) ? value : [String(value)];
  }

  function idKey(value) {
    return String(value);
  }

  function sameId(a, b) {
    return idKey(a) === idKey(b);
  }

  function getLevelById(levelId) {
    return window.levels.find((level) => sameId(level.id, levelId));
  }

  function getLevelIndex(levelId) {
    return window.levels.findIndex((level) => sameId(level.id, levelId));
  }

  function formatLevelId(idOrLevel) {
    const level = typeof idOrLevel === "object" && idOrLevel ? idOrLevel : getLevelById(idOrLevel);
    if (level && level.displayId) return level.displayId;
    const numeric = Number(idOrLevel);
    if (Number.isInteger(numeric) && numeric >= 0 && numeric <= 100) return `LEVEL ${String(numeric).padStart(3, "0")}`;
    return String(idOrLevel).toUpperCase();
  }

  function hexToRgb(hex) {
    const clean = String(hex || "").replace("#", "").trim();
    if (!/^[0-9A-Fa-f]{6}$/.test(clean)) return null;
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  }

  function luminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const srgb = [rgb.r, rgb.g, rgb.b].map((channel) => {
      const c = channel / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  function contrastRatio(hexA, hexB) {
    const a = luminance(hexA);
    const b = luminance(hexB);
    const bright = Math.max(a, b);
    const dark = Math.min(a, b);
    return (bright + 0.05) / (dark + 0.05);
  }

  function isHex(value) {
    return /^#[0-9A-Fa-f]{6}$/.test(String(value || ""));
  }

  function setGlitchIntensity(value) {
    state.glitchIntensity = clamp(value, 0, 10);
    document.documentElement.style.setProperty("--glitch-intensity", String(state.glitchIntensity));
    document.documentElement.style.setProperty("--noise-opacity", String(0.12 + state.glitchIntensity * 0.022));
  }

  function summarizeLevel(level) {
    return `${level.overview || level.survivalClass.description} Registro de risco: ${level.toxicity}`;
  }

  function makeList(items) {
    const ul = createNode("ul");
    normalizeList(items).forEach((item) => ul.appendChild(createNode("li", "", item)));
    return ul;
  }

  function makeField(label, value) {
    const wrapper = createNode("div", "field");
    const dt = createNode("dt", "", label);
    const dd = createNode("dd");
    if (Array.isArray(value)) {
      dd.appendChild(makeList(value));
    } else {
      dd.textContent = String(value);
    }
    wrapper.appendChild(dt);
    wrapper.appendChild(dd);
    return wrapper;
  }

  function playClickTone(type) {
    if (!runtime.audioEnabled) return;
    try {
      if (!runtime.audioContext) {
        runtime.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = runtime.audioContext;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = type === "error" ? "sawtooth" : "square";
      oscillator.frequency.value = type === "error" ? 74 : type === "teleport" ? 144 : 96;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(type === "teleport" ? 0.06 : 0.025, ctx.currentTime + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (type === "teleport" ? 0.22 : 0.07));
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + (type === "teleport" ? 0.24 : 0.08));
    } catch (error) {
      runtime.audioEnabled = false;
      if (dom.audioToggle) dom.audioToggle.textContent = "Áudio indisponível";
    }
  }

  // ============================================================
  // Data Validation System
  // ============================================================
  function validateLevelsData(levels) {
    const errors = [];
    if (!Array.isArray(levels)) return ["Variável global levels não é um array."];
    if (levels.length !== 112) errors.push(`Esperados 112 registros, encontrados ${levels.length}.`);

    const seen = new Set();
    levels.forEach((level, index) => {
      REQUIRED_BASIC_FIELDS.concat(REQUIRED_ADVANCED_FIELDS).forEach((field) => {
        if (!(field in level)) errors.push(`Level índice ${index}: campo obrigatório ausente: ${field}.`);
      });

      if (!["number", "string"].includes(typeof level.id) || String(level.id).trim() === "") errors.push(`Level índice ${index}: id inválido.`);
      const key = idKey(level.id);
      if (seen.has(key)) errors.push(`Level ${level.id}: id duplicado.`);
      seen.add(key);
      if (typeof level.name !== "string" || !level.name.trim()) errors.push(`Level ${level.id}: name inválido.`);
      if (typeof level.imageUrl !== "string" || !level.imageUrl.trim()) errors.push(`Level ${level.id}: imageUrl inválido.`);
      if (!Array.isArray(level.imageUrls) || level.imageUrls.length === 0) errors.push(`Level ${level.id}: imageUrls precisa ser array não vazio.`);
      if (typeof level.overview !== "string" || !level.overview.trim()) errors.push(`Level ${level.id}: overview inválido.`);
      if (typeof level.displayId !== "string" || !level.displayId.trim()) errors.push(`Level ${level.id}: displayId inválido.`);
      if (!Array.isArray(level.entities)) errors.push(`Level ${level.id}: entities precisa ser array.`);
      if (!Array.isArray(level.availableLoot)) errors.push(`Level ${level.id}: availableLoot precisa ser array.`);
      if (!Array.isArray(level.outposts)) errors.push(`Level ${level.id}: outposts precisa ser array.`);
      if (!Array.isArray(level.ambientSounds)) errors.push(`Level ${level.id}: ambientSounds precisa ser array.`);
      if (!Array.isArray(level.physicalAnomalies)) errors.push(`Level ${level.id}: physicalAnomalies precisa ser array.`);
      if (!Array.isArray(level.materials)) errors.push(`Level ${level.id}: materials precisa ser array.`);
      if (!level.survivalClass || typeof level.survivalClass !== "object" || !level.survivalClass.level || !level.survivalClass.description) {
        errors.push(`Level ${level.id}: survivalClass deve conter level e description.`);
      }
      if (!level.themeColors || typeof level.themeColors !== "object") {
        errors.push(`Level ${level.id}: themeColors ausente ou inválido.`);
      } else {
        ["bg", "text", "accent"].forEach((key) => {
          if (!isHex(level.themeColors[key])) errors.push(`Level ${level.id}: themeColors.${key} deve ser HEX #RRGGBB.`);
        });
      }
      if (typeof level.easterEgg !== "boolean") errors.push(`Level ${level.id}: easterEgg precisa ser boolean.`);
    });

    for (let id = 0; id <= 100; id += 1) {
      if (!seen.has(String(id))) errors.push(`Level ${id}: registro ausente.`);
    }
    ["frontrooms", "fun", "!", "404", "-1", "999", "9223372036854775807", "the-end", "-33", "3999", "hub"].forEach((id) => {
      if (!seen.has(id)) errors.push(`Registro especial ausente: ${id}.`);
    });
    return errors;
  }

  // ============================================================
  // Theme Engine
  // ============================================================
  function applyTheme(level, abrupt) {
    const colors = level.themeColors;
    const safeText = contrastRatio(colors.bg, colors.text) >= 4.5
      ? colors.text
      : luminance(colors.bg) > 0.35 ? "#071008" : "#F2FFE8";

    const root = document.documentElement;
    root.style.setProperty("--bg-color", colors.bg);
    root.style.setProperty("--text-color", safeText);
    root.style.setProperty("--accent-color", colors.accent);
    root.style.setProperty("--font-family", "Courier New, Courier, monospace");
    const levelIndex = Math.max(0, getLevelIndex(level.id));
    setGlitchIntensity(abrupt ? 8 : (level.easterEgg ? 2.2 : 1 + (levelIndex % 4) * 0.45));

    if (abrupt) {
      document.body.classList.add("violent-glitch");
      window.setTimeout(() => document.body.classList.remove("violent-glitch"), 700);
    }
  }

  // ============================================================
  // Renderer (DOM)
  // ============================================================
  function renderSidebar() {
    // Atualizar labels estáticos da sidebar conforme idioma
    if (dom.levelSearch) dom.levelSearch.placeholder = t("searchPlaceholder");
    if (dom.prevLevel) dom.prevLevel.textContent = t("prev");
    if (dom.nextLevel) dom.nextLevel.textContent = t("next");
    if (dom.randomLevel) dom.randomLevel.textContent = t("random");
    if (dom.audioToggle) dom.audioToggle.textContent = runtime.audioEnabled ? t("audioOn") : t("audioOff");
    const statusEl = document.querySelector(".system-status");
    if (statusEl) {
      const statusSpan = statusEl.querySelector("span");
      statusEl.firstChild.textContent = t("status").split(":")[0] + ": ";
      if (statusSpan) statusSpan.textContent = t("status").split(": ")[1];
    }
    const searchLabel = document.querySelector('label[for="levelSearch"]');
    if (searchLabel) searchLabel.textContent = t("searchLabel");

    const filtered = window.levels.filter((level) => {
      const term = runtime.searchTerm.trim().toLowerCase();
      if (!term) return true;
      return String(level.id).includes(term) || formatLevelId(level).toLowerCase().includes(term) || level.name.toLowerCase().includes(term) || level.geometry.toLowerCase().includes(term);
    });

    const fragment = document.createDocumentFragment();
    filtered.forEach((level) => {
      const button = createNode("button", "level-button");
      button.type = "button";
      button.dataset.levelId = String(level.id);
      button.setAttribute("aria-current", sameId(level.id, state.currentLevel) ? "page" : "false");
      if (sameId(level.id, state.currentLevel)) button.classList.add("active");
      button.appendChild(createNode("span", "", formatLevelId(level)));
      button.appendChild(createNode("span", "", level.name.replace(/^Level \d+ — /, "")));
      fragment.appendChild(button);
    });

    dom.levelList.replaceChildren(fragment);
  }

  function getLevelImages(level) {
    const images = Array.isArray(level.imageUrls) ? level.imageUrls.filter(Boolean) : [];
    if (images.length > 0) return images;
    return level.imageUrl ? [level.imageUrl] : [];
  }

  function getImageIndex(level) {
    const images = getLevelImages(level);
    if (images.length === 0) return 0;
    const stored = Number(state.imageIndexes[idKey(level.id)] || 0);
    return ((stored % images.length) + images.length) % images.length;
  }

  function createImagePanel(level) {
    const images = getLevelImages(level);
    const index = getImageIndex(level);
    const wrap = createNode("figure", "hero-image-wrap");
    wrap.dataset.levelId = String(level.id);
    const img = document.createElement("img");
    img.alt = `${level.name}: registro visual recuperado ${index + 1}`;
    img.decoding = "async";
    img.loading = sameId(level.id, state.currentLevel) ? "eager" : "lazy";

    img.addEventListener("error", () => {
      const fallback = createNode("div", "fallback-image");
      const message = createNode("div", "fallback-message");
      message.appendChild(createNode("strong", "", "ERROR 404"));
      message.appendChild(createNode("span", "", "Without any trace"));
      fallback.appendChild(message);
      wrap.replaceChildren(fallback);
    }, { once: true });

    img.src = images[index] || level.imageUrl;
    wrap.appendChild(img);

    if (level.imageCredit) {
      const credit = createNode("figcaption", "hero-image-credit");
      const source = level.imageCredit.source || "public image archive";
      const title = level.imageCredit.title || "Recovered real-world visual reference";
      credit.textContent = `REAL IMAGE // ${title} // ${source} // ${String(index + 1).padStart(2, "0")}/${String(images.length || 1).padStart(2, "0")}`;
      wrap.appendChild(credit);
    }

    if (images.length > 1) {
      const controls = createNode("div", "tape-controls image-scan-controls");
      const scanButton = createNode("button", "tape-button", "SCAN NEXT IMAGE // ESCANEAR PRÓXIMA IMAGEM");
      scanButton.type = "button";
      scanButton.dataset.action = "scan-next-image";
      scanButton.dataset.levelId = String(level.id);
      scanButton.setAttribute("aria-label", `Escanear próxima imagem pública para ${level.name}`);
      const status = createNode("p", "tape-status", `VISUAL SOURCE: ${String(index + 1).padStart(2, "0")}/${String(images.length).padStart(2, "0")}. Use quando a fita visual parecer corrompida.`);
      appendChildren(controls, [scanButton, status]);
      wrap.appendChild(controls);
    }

    return wrap;
  }

  function cycleImage(levelId) {
    const level = getLevelById(levelId);
    if (!level) return;
    const images = getLevelImages(level);
    if (images.length < 2) return;
    const nextIndex = (getImageIndex(level) + 1) % images.length;
    state.imageIndexes[idKey(level.id)] = nextIndex;
    playClickTone("click");
    setGlitchIntensity(4.8);
    const currentPanel = document.querySelector(`.hero-image-wrap[data-level-id="${CSS.escape(String(level.id))}"]`);
    const nextPanel = createImagePanel(level);
    if (currentPanel && nextPanel) currentPanel.replaceWith(nextPanel);
    window.setTimeout(() => setGlitchIntensity(level.easterEgg ? 2.2 : 1.1), 220);
  }

  function createMetaStrip(level) {
    const strip = createNode("section", "meta-strip");
    const data = [
      [tf("Classe"), level.survivalClass.level],
      [tf("Tamanho"), level.size],
      [tf("Descoberto"), level.discoveryDate],
      [tf("Baixas"), level.casualtyCount]
    ];
    const fragment = document.createDocumentFragment();
    data.forEach(([label, value]) => {
      const box = createNode("article", "meta-box");
      box.appendChild(createNode("p", "meta-label", label));
      box.appendChild(createNode("div", "meta-value", value));
      fragment.appendChild(box);
    });
    strip.appendChild(fragment);
    return strip;
  }

  function createCard(title, body, list) {
    const card = createNode("article", "data-card");
    card.appendChild(createNode("h3", "", title));
    if (body) card.appendChild(createNode("p", "", body));
    if (list) card.appendChild(makeList(list));
    return card;
  }

  function createTechnicalGrid(level) {
    const dl = createNode("dl", "field-grid");
    const fields = [
      [tf("Sanidade"), level.sanityDrain],
      [tf("Temperatura"), level.avgTemperature],
      [tf("Luz"), level.lightingLevel],
      [tf("Geometria"), level.geometry],
      [tf("Toxicidade"), level.toxicity],
      [tf("Wi-Fi"), level.wifiSignal],
      [tf("Distorção temporal"), level.timeDistortion],
      [tf("Ciclos"), level.levelCycles],
      [tf("Umidade"), level.humidity],
      [tf("Materiais"), level.materials]
    ];
    const fragment = document.createDocumentFragment();
    fields.forEach(([label, value]) => fragment.appendChild(makeField(label, value)));
    dl.appendChild(fragment);
    return dl;
  }

  function createEasterEggButton(level) {
    if (!level.easterEgg) return null;
    const button = createNode("button", "easter-egg", "UNSTABLE EXIT FOUND");
    button.type = "button";
    button.dataset.action = "easter-teleport";
    button.setAttribute("aria-label", "Acionar saída instável oculta");
    return button;
  }


  function getLevelTapes(level) {
    return Array.isArray(level.videoTapes) ? level.videoTapes.filter(Boolean) : [];
  }

  function getTapeIndex(level) {
    const tapes = getLevelTapes(level);
    if (tapes.length === 0) return 0;
    const stored = Number(state.tapeIndexes[level.id] || 0);
    return ((stored % tapes.length) + tapes.length) % tapes.length;
  }

  function getTapeEmbedUrl(tape) {
    if (!tape || !tape.type) return "";
    if (tape.type === "youtube" && tape.id) {
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(tape.id)}?rel=0&modestbranding=1`;
    }
    if (tape.type === "youtube_search_embed" && tape.id) {
      return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(tape.id).replace(/%2B/g, "+")}`;
    }
    return "";
  }

  function createTapePanel(level) {
    const tapes = getLevelTapes(level);
    if (tapes.length === 0) return null;

    const index = getTapeIndex(level);
    const tape = tapes[index];
    const panel = createNode("article", "data-card tape-card");
    panel.id = "tapePanel";
    panel.dataset.levelId = String(level.id);

    const header = createNode("div", "tape-header");
    const titleGroup = createNode("div");
    titleGroup.appendChild(createNode("p", "card-label", "RECOVERED FOUND-FOOTAGE FEED"));
    titleGroup.appendChild(createNode("h3", "", tape.title || `Level ${level.id} recovered tape`));
    const counter = createNode("span", "tape-counter", `${String(index + 1).padStart(2, "0")}/${String(tapes.length).padStart(2, "0")}`);
    appendChildren(header, [titleGroup, counter]);
    panel.appendChild(header);

    const embedUrl = getTapeEmbedUrl(tape);
    if (embedUrl) {
      const frameWrap = createNode("div", "tape-player-wrap");
      const frame = document.createElement("iframe");
      frame.className = "tape-player";
      frame.title = `${level.name} — ${tape.label || "found footage tape"}`;
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.src = embedUrl;
      frameWrap.appendChild(frame);
      panel.appendChild(frameWrap);
    } else {
      const fallback = createNode("div", "tape-search-terminal");
      const line = createNode("p", "", "> DIRECT EMBED FAILED_OR_UNAVAILABLE");
      const link = document.createElement("a");
      link.href = tape.url || `https://www.youtube.com/results?search_query=backrooms+level+${level.id}+found+footage`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "OPEN YOUTUBE SEARCH FEED";
      appendChildren(fallback, [line, link]);
      panel.appendChild(fallback);
    }

    const controls = createNode("div", "tape-controls");
    const newTape = createNode("button", "tape-button", "SEARCH NEW TAPE // PROCURAR NOVA FITA");
    newTape.type = "button";
    newTape.dataset.action = "search-new-tape";
    newTape.dataset.levelId = String(level.id);
    newTape.setAttribute("aria-label", `Procurar nova fita found footage para ${level.name}`);

    const status = createNode("p", "tape-status", `CURRENT SOURCE: ${tape.label || "AUTO_SEARCH"}. If playback is blocked, corrupted or not convincing, request another tape.`);
    appendChildren(controls, [newTape, status]);
    panel.appendChild(controls);
    return panel;
  }

  function cycleTape(levelId) {
    const level = getLevelById(levelId);
    if (!level) return;
    const tapes = getLevelTapes(level);
    if (tapes.length === 0) return;
    const nextIndex = (getTapeIndex(level) + 1) % tapes.length;
    state.tapeIndexes[level.id] = nextIndex;
    playClickTone("teleport");
    setGlitchIntensity(6.2);
    const nextPanel = createTapePanel(level);
    const currentPanel = $("tapePanel");
    if (currentPanel && nextPanel) currentPanel.replaceWith(nextPanel);
    window.setTimeout(() => setGlitchIntensity(level.easterEgg ? 2.2 : 1.1), 260);
  }

  function renderLevel(levelId) {
    const level = getLevelById(levelId);
    if (!level) {
      showFatalError(new Error(`Nível ${levelId} não localizado no índice validado.`));
      return;
    }

    state.currentLevel = level.id;
    runtime.renderedLevel = level.id;
    applyTheme(level, false);
    document.title = `${formatLevelId(level)} // The Backrooms Database`;

    const fragment = document.createDocumentFragment();
    const dossier = createNode("article", "dossier");
    const hero = createNode("section", "hero");
    const copy = createNode("div", "hero-copy");
    const headerGroup = createNode("div");

    headerGroup.appendChild(createNode("span", "level-id", formatLevelId(level)));
    headerGroup.appendChild(createNode("h2", "", level.name));
    headerGroup.appendChild(createNode("p", "hero-summary", summarizeLevel(level)));

    const lower = createNode("div");
    lower.appendChild(createNode("p", "card-label", t("survivalClass")));
    lower.appendChild(createNode("p", "hero-summary", `${level.survivalClass.level}: ${level.survivalClass.description}`));
    copy.appendChild(headerGroup);
    copy.appendChild(lower);

    hero.appendChild(copy);
    hero.appendChild(createImagePanel(level));
    dossier.appendChild(hero);
    dossier.appendChild(createMetaStrip(level));
    dossier.appendChild(createCard(t("levelDescription"), level.overview));
    const tapePanel = createTapePanel(level);
    if (tapePanel) dossier.appendChild(tapePanel);

    const gridA = createNode("section", "grid-section");
    gridA.appendChild(createCard(t("entrances"), level.entrances));
    gridA.appendChild(createCard(t("exits"), level.exits));
    dossier.appendChild(gridA);

    const gridB = createNode("section", "grid-section");
    gridB.appendChild(createCard(t("entities"), null, level.entities));
    gridB.appendChild(createCard(t("loot"), null, level.availableLoot));
    dossier.appendChild(gridB);

    const techCard = createCard(t("telemetry"));
    techCard.appendChild(createTechnicalGrid(level));
    dossier.appendChild(techCard);

    const gridC = createNode("section", "grid-section");
    gridC.appendChild(createCard(t("ambientSounds"), null, level.ambientSounds));
    gridC.appendChild(createCard(t("physicalAnomalies"), null, level.physicalAnomalies));
    dossier.appendChild(gridC);

    const gridD = createNode("section", "grid-section");
    gridD.appendChild(createCard(t("outposts"), null, level.outposts));
    gridD.appendChild(createCard(t("floraFauna"), level.floraFauna));
    dossier.appendChild(gridD);

    const log = createNode("article", "data-card log-card");
    log.appendChild(createNode("p", "card-label", t("survivorLog")));
    log.appendChild(createNode("p", "", level.survivorLog));
    dossier.appendChild(log);

    dossier.appendChild(createCard(t("credits"), level.credits));
    const egg = createEasterEggButton(level);
    if (egg) dossier.appendChild(egg);

    fragment.appendChild(dossier);
    dom.content.replaceChildren(fragment);
    renderSidebar();
    dom.contentFrame.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showFatalError(error, validationErrors) {
    playClickTone("error");
    const section = createNode("section", "error-screen");
    const article = createNode("article");
    article.appendChild(createNode("p", "classified", "TERMINAL FAILURE // VISUAL ERROR MODE"));
    article.appendChild(createNode("h2", "", "ACCESS BROKEN"));
    article.appendChild(createNode("p", "", "O sistema impediu tela branca e isolou a falha em um painel de contenção."));
    const pre = createNode("pre", "", validationErrors ? validationErrors.join("\n") : String(error && error.stack ? error.stack : error));
    appendChildren(article, [pre]);
    section.appendChild(article);
    if (dom.content) dom.content.replaceChildren(section);
  }

  function setLoading(active) {
    state.isLoading = active;
    dom.loadingOverlay.classList.toggle("active", active);
    dom.loadingOverlay.setAttribute("aria-hidden", active ? "false" : "true");
  }

  async function runLoadingSequence(levelId) {
    const lines = [
      `> Accessing ${formatLevelId(levelId).replace(/\s+/g, "_")}_DOSSIER...`,
      "> Decrypting sealed incident packets...",
      "> Rendering anomalies...",
      "> Checking survivor contradiction index..."
    ];
    dom.loadingText.textContent = "";
    setLoading(true);
    setGlitchIntensity(5.5);
    const total = randomInt(300, 1200);
    const step = Math.max(90, Math.floor(total / lines.length));
    for (const line of lines) {
      dom.loadingText.textContent += `${line}\n`;
      playClickTone("click");
      await wait(step);
    }
  }

  // ============================================================
  // Navigation Controller
  // ============================================================
  async function navigateToLevel(levelId, options = {}) {
    const level = getLevelById(levelId);
    if (state.isLoading || !level) return;
    const target = level.id;
    if (sameId(runtime.renderedLevel, target) && !options.force) return;

    try {
      await runLoadingSequence(target);
      if (!sameId(state.currentLevel, target) || options.force) {
        state.history.push({ from: state.currentLevel, to: target, at: new Date().toISOString() });
      }
      renderLevel(target);
    } catch (error) {
      showFatalError(error);
    } finally {
      setLoading(false);
      setGlitchIntensity(getLevelById(target)?.easterEgg ? 2.2 : 1.1);
    }
  }

  function teleportRandom(aggressive) {
    const currentIndex = Math.max(0, getLevelIndex(state.currentLevel));
    let targetIndex = randomInt(0, window.levels.length - 1);
    if (targetIndex === currentIndex) targetIndex = (targetIndex + randomInt(7, 31)) % window.levels.length;
    const target = window.levels[targetIndex]?.id;
    if (aggressive) {
      playClickTone("teleport");
      applyTheme(getLevelById(target) || getLevelById(state.currentLevel), true);
    }
    navigateToLevel(target, { force: true });
  }

  // ============================================================
  // Event System
  // ============================================================
  function bindEvents() {
    dom.levelList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-level-id]");
      if (!button) return;
      playClickTone("click");
      navigateToLevel(button.dataset.levelId);
    });

    dom.content.addEventListener("click", (event) => {
      const actionTarget = event.target.closest("[data-action]");
      const action = actionTarget?.dataset.action;
      if (action === "easter-teleport") teleportRandom(true);
      if (action === "search-new-tape") cycleTape(actionTarget.dataset.levelId);
      if (action === "scan-next-image") cycleImage(actionTarget.dataset.levelId);
    });

    dom.prevLevel.addEventListener("click", () => {
      playClickTone("click");
      const currentIndex = Math.max(0, getLevelIndex(state.currentLevel));
      const target = window.levels[(currentIndex + window.levels.length - 1) % window.levels.length];
      navigateToLevel(target.id);
    });

    dom.nextLevel.addEventListener("click", () => {
      playClickTone("click");
      const currentIndex = Math.max(0, getLevelIndex(state.currentLevel));
      const target = window.levels[(currentIndex + 1) % window.levels.length];
      navigateToLevel(target.id);
    });

    dom.randomLevel.addEventListener("click", () => teleportRandom(false));

    dom.audioToggle.addEventListener("click", async () => {
      runtime.audioEnabled = !runtime.audioEnabled;
      dom.audioToggle.textContent = runtime.audioEnabled ? "Áudio ON" : "Áudio OFF";
      dom.audioToggle.setAttribute("aria-pressed", String(runtime.audioEnabled));
      if (runtime.audioEnabled) {
        playClickTone("click");
      }
    });

    dom.levelSearch.addEventListener("input", (event) => {
      runtime.searchTerm = event.target.value;
      renderSidebar();
    });

    dom.langSelect.addEventListener("change", (event) => {
      runtime.language = event.target.value;
      localStorage.setItem("backrooms_lang", runtime.language);
      playClickTone("click");
      renderSidebar();
      renderLevel(state.currentLevel);
    });

    window.addEventListener("error", (event) => showFatalError(event.error || new Error(event.message)));
    window.addEventListener("unhandledrejection", (event) => showFatalError(event.reason));
  }

  // ============================================================
  // Application Bootstrap
  // ============================================================
  function cacheDom() {
    dom.content = $("content");
    dom.contentFrame = document.querySelector(".content-frame");
    dom.levelList = $("levelList");
    dom.levelSearch = $("levelSearch");
    dom.prevLevel = $("prevLevel");
    dom.nextLevel = $("nextLevel");
    dom.randomLevel = $("randomLevel");
    dom.audioToggle = $("audioToggle");
    dom.langSelect = $("langSelect");
    dom.loadingOverlay = $("loadingOverlay");
    dom.loadingText = $("loadingText");
  }

  function init() {
    cacheDom();
    if (dom.langSelect) dom.langSelect.value = runtime.language;
    const validationErrors = validateLevelsData(window.levels);
    if (validationErrors.length > 0) {
      showFatalError(new Error("Validação interna falhou."), validationErrors);
      return;
    }
    runtime.validated = true;
    bindEvents();
    renderSidebar();
    renderLevel(state.currentLevel);
  }

  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
