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
    currentLevel: 0,
    isLoading: false,
    history: [],
    glitchIntensity: 0,
    tapeIndexes: {}
  };

  const runtime = {
    renderedLevel: null,
    validated: false,
    audioEnabled: false,
    audioContext: null,
    searchTerm: ""
  };

  const dom = {};

  // ============================================================
  // Utility Functions
  // ============================================================
  const REQUIRED_BASIC_FIELDS = [
    "id", "name", "imageUrl", "entities", "entrances", "exits", "size", "survivalClass", "credits"
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

  function formatLevelId(id) {
    return `LEVEL ${String(id).padStart(3, "0")}`;
  }

  function getLevelById(levelId) {
    return window.levels.find((level) => level.id === Number(levelId));
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
    return `${level.survivalClass.description} Entradas principais: ${level.entrances} Registro de risco: ${level.toxicity}`;
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
    if (levels.length !== 101) errors.push(`Esperados 101 níveis, encontrados ${levels.length}.`);

    const seen = new Set();
    levels.forEach((level, index) => {
      REQUIRED_BASIC_FIELDS.concat(REQUIRED_ADVANCED_FIELDS).forEach((field) => {
        if (!(field in level)) errors.push(`Level índice ${index}: campo obrigatório ausente: ${field}.`);
      });

      if (typeof level.id !== "number" || level.id < 0 || level.id > 100) errors.push(`Level índice ${index}: id fora de 0–100.`);
      if (seen.has(level.id)) errors.push(`Level ${level.id}: id duplicado.`);
      seen.add(level.id);
      if (typeof level.name !== "string" || !level.name.trim()) errors.push(`Level ${level.id}: name inválido.`);
      if (typeof level.imageUrl !== "string" || !level.imageUrl.trim()) errors.push(`Level ${level.id}: imageUrl inválido.`);
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
      if (!seen.has(id)) errors.push(`Level ${id}: registro ausente.`);
    }
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
    setGlitchIntensity(abrupt ? 8 : (level.easterEgg ? 2.2 : 1 + (level.id % 4) * 0.45));

    if (abrupt) {
      document.body.classList.add("violent-glitch");
      window.setTimeout(() => document.body.classList.remove("violent-glitch"), 700);
    }
  }

  // ============================================================
  // Renderer (DOM)
  // ============================================================
  function renderSidebar() {
    const filtered = window.levels.filter((level) => {
      const term = runtime.searchTerm.trim().toLowerCase();
      if (!term) return true;
      return String(level.id).includes(term) || level.name.toLowerCase().includes(term) || level.geometry.toLowerCase().includes(term);
    });

    const fragment = document.createDocumentFragment();
    filtered.forEach((level) => {
      const button = createNode("button", "level-button");
      button.type = "button";
      button.dataset.levelId = String(level.id);
      button.setAttribute("aria-current", level.id === state.currentLevel ? "page" : "false");
      if (level.id === state.currentLevel) button.classList.add("active");
      button.appendChild(createNode("span", "", formatLevelId(level.id)));
      button.appendChild(createNode("span", "", level.name.replace(/^Level \d+ — /, "")));
      fragment.appendChild(button);
    });

    dom.levelList.replaceChildren(fragment);
  }

  function createImagePanel(level) {
    const wrap = createNode("figure", "hero-image-wrap");
    const img = document.createElement("img");
    img.alt = `${level.name}: registro visual recuperado`;
    img.decoding = "async";
    img.loading = level.id === state.currentLevel ? "eager" : "lazy";

    img.addEventListener("error", () => {
      const fallback = createNode("div", "fallback-image");
      const message = createNode("div", "fallback-message");
      message.appendChild(createNode("strong", "", "ERROR 404"));
      message.appendChild(createNode("span", "", "Without any trace"));
      fallback.appendChild(message);
      wrap.replaceChildren(fallback);
    }, { once: true });

    img.src = level.imageUrl;
    wrap.appendChild(img);

    if (level.imageCredit) {
      const credit = createNode("figcaption", "hero-image-credit");
      const source = level.imageCredit.source || "public image archive";
      const title = level.imageCredit.title || "Recovered real-world visual reference";
      credit.textContent = `REAL IMAGE // ${title} // ${source}`;
      wrap.appendChild(credit);
    }

    return wrap;
  }

  function createMetaStrip(level) {
    const strip = createNode("section", "meta-strip");
    const data = [
      ["Classe", level.survivalClass.level],
      ["Tamanho", level.size],
      ["Descoberto", level.discoveryDate],
      ["Baixas", level.casualtyCount]
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
      ["Sanidade", level.sanityDrain],
      ["Temperatura", level.avgTemperature],
      ["Luz", level.lightingLevel],
      ["Geometria", level.geometry],
      ["Toxicidade", level.toxicity],
      ["Wi-Fi", level.wifiSignal],
      ["Distorção temporal", level.timeDistortion],
      ["Ciclos", level.levelCycles],
      ["Umidade", level.humidity],
      ["Materiais", level.materials]
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
    document.title = `${formatLevelId(level.id)} // The Backrooms Database`;

    const fragment = document.createDocumentFragment();
    const dossier = createNode("article", "dossier");
    const hero = createNode("section", "hero");
    const copy = createNode("div", "hero-copy");
    const headerGroup = createNode("div");

    headerGroup.appendChild(createNode("span", "level-id", formatLevelId(level.id)));
    headerGroup.appendChild(createNode("h2", "", level.name));
    headerGroup.appendChild(createNode("p", "hero-summary", summarizeLevel(level)));

    const lower = createNode("div");
    lower.appendChild(createNode("p", "card-label", "Survival Classification"));
    lower.appendChild(createNode("p", "hero-summary", `${level.survivalClass.level}: ${level.survivalClass.description}`));
    copy.appendChild(headerGroup);
    copy.appendChild(lower);

    hero.appendChild(copy);
    hero.appendChild(createImagePanel(level));
    dossier.appendChild(hero);
    dossier.appendChild(createMetaStrip(level));
    const tapePanel = createTapePanel(level);
    if (tapePanel) dossier.appendChild(tapePanel);

    const gridA = createNode("section", "grid-section");
    gridA.appendChild(createCard("Entradas", level.entrances));
    gridA.appendChild(createCard("Saídas", level.exits));
    dossier.appendChild(gridA);

    const gridB = createNode("section", "grid-section");
    gridB.appendChild(createCard("Entidades", null, level.entities));
    gridB.appendChild(createCard("Loot disponível", null, level.availableLoot));
    dossier.appendChild(gridB);

    const techCard = createCard("Telemetria Anômala");
    techCard.appendChild(createTechnicalGrid(level));
    dossier.appendChild(techCard);

    const gridC = createNode("section", "grid-section");
    gridC.appendChild(createCard("Sons Ambientais", null, level.ambientSounds));
    gridC.appendChild(createCard("Anomalias Físicas", null, level.physicalAnomalies));
    dossier.appendChild(gridC);

    const gridD = createNode("section", "grid-section");
    gridD.appendChild(createCard("Outposts", null, level.outposts));
    gridD.appendChild(createCard("Flora / Fauna", level.floraFauna));
    dossier.appendChild(gridD);

    const log = createNode("article", "data-card log-card");
    log.appendChild(createNode("p", "card-label", "SURVIVOR LOG // recovered audio transcription"));
    log.appendChild(createNode("p", "", level.survivorLog));
    dossier.appendChild(log);

    dossier.appendChild(createCard("Créditos do Registro", level.credits));
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
      `> Accessing LEVEL_${String(levelId).padStart(3, "0")}_DOSSIER...`,
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
    const target = Number(levelId);
    if (state.isLoading) return;
    if (!Number.isInteger(target) || target < 0 || target > 100) return;
    if (runtime.renderedLevel === target && !options.force) return;

    try {
      await runLoadingSequence(target);
      if (state.currentLevel !== target || options.force) {
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
    const current = state.currentLevel;
    let target = randomInt(0, 100);
    if (target === current) target = (target + randomInt(7, 31)) % 101;
    if (aggressive) {
      playClickTone("teleport");
      applyTheme(getLevelById(target) || getLevelById(current), true);
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
      navigateToLevel(Number(button.dataset.levelId));
    });

    dom.content.addEventListener("click", (event) => {
      const actionTarget = event.target.closest("[data-action]");
      const action = actionTarget?.dataset.action;
      if (action === "easter-teleport") teleportRandom(true);
      if (action === "search-new-tape") cycleTape(Number(actionTarget.dataset.levelId));
    });

    dom.prevLevel.addEventListener("click", () => {
      playClickTone("click");
      navigateToLevel((state.currentLevel + 100) % 101);
    });

    dom.nextLevel.addEventListener("click", () => {
      playClickTone("click");
      navigateToLevel((state.currentLevel + 1) % 101);
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
    dom.loadingOverlay = $("loadingOverlay");
    dom.loadingText = $("loadingText");
  }

  function init() {
    cacheDom();
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
