const WASTES = [
  {
    id: "defeitos",
    code: "D",
    name: "Defeitos",
    signal: "Retrabalho, erro, perda de qualidade",
    color: "#bf4a3d",
    kaizen: "Use padrão visual, poka-yoke e checagem na origem."
  },
  {
    id: "producao",
    code: "O",
    name: "Excesso de produção",
    signal: "Produzir antes da demanda real",
    color: "#c77c1b",
    kaizen: "Puxe pelo pedido real com limite WIP e kanban."
  },
  {
    id: "espera",
    code: "W",
    name: "Espera",
    signal: "Fila, aprovação parada, máquina ociosa",
    color: "#355d9d",
    kaizen: "Equilibre capacidade, reduza fila e exponha bloqueios."
  },
  {
    id: "talento",
    code: "N",
    name: "Talento não utilizado",
    signal: "Ideias e habilidades ignoradas",
    color: "#7b4f9d",
    kaizen: "Crie rotina de sugestões, autonomia e treinamento cruzado."
  },
  {
    id: "transporte",
    code: "T",
    name: "Transporte",
    signal: "Deslocamento de materiais entre áreas",
    color: "#0c7282",
    kaizen: "Aproxime etapas, redesenhe layout e reduza transferências."
  },
  {
    id: "inventario",
    code: "I",
    name: "Inventário",
    signal: "Estoque acima do necessário",
    color: "#2f7d59",
    kaizen: "Defina reposição visual, lote menor e giro frequente."
  },
  {
    id: "movimento",
    code: "M",
    name: "Movimento",
    signal: "Pessoa procura, anda, se estica ou retorna",
    color: "#9a5d2f",
    kaizen: "Aplique 5S, ergonomia e ponto de uso."
  },
  {
    id: "processamento",
    code: "E",
    name: "Processamento excessivo",
    signal: "Etapa, relatório ou controle sem valor",
    color: "#4f615d",
    kaizen: "Elimine aprovações duplicadas e simplifique o padrão."
  }
];

const SCENARIOS = [
  {
    title: "Retrabalho no balcão",
    text: "A entrega volta porque o formulário foi preenchido com campo obrigatório trocado.",
    waste: "defeitos",
    risk: "Risco alto",
    hint: "Qualidade"
  },
  {
    title: "Etiqueta repetida",
    text: "Duas pessoas imprimem a mesma etiqueta e uma delas precisa descartar o lote inteiro.",
    waste: "defeitos",
    risk: "Risco alto",
    hint: "Origem"
  },
  {
    title: "Cadastro com erro",
    text: "O aluno recebe cobrança incorreta porque o curso foi lançado no semestre errado.",
    waste: "defeitos",
    risk: "Risco médio",
    hint: "Retrabalho"
  },
  {
    title: "Checklist esquecido",
    text: "A equipe refaz uma inspeção porque a primeira não registrou evidência suficiente.",
    waste: "defeitos",
    risk: "Risco médio",
    hint: "Padrão"
  },
  {
    title: "Relatórios antes do pedido",
    text: "O time imprime cem relatórios semanais antes de saber quais turmas realmente vão usar.",
    waste: "producao",
    risk: "Risco médio",
    hint: "Demanda"
  },
  {
    title: "Kits sobrando",
    text: "Foram montados kits de laboratório para todos os alunos, mas só metade confirmou presença.",
    waste: "producao",
    risk: "Risco alto",
    hint: "Empurrado"
  },
  {
    title: "Slides duplicados",
    text: "A coordenação prepara três versões completas de uma apresentação sem definição final.",
    waste: "producao",
    risk: "Risco médio",
    hint: "Antes da hora"
  },
  {
    title: "Cópias em excesso",
    text: "O setor copia todos os documentos do processo mesmo quando a análise é digital.",
    waste: "producao",
    risk: "Risco baixo",
    hint: "Lote"
  },
  {
    title: "Fila da assinatura",
    text: "O processo fica parado dois dias aguardando uma assinatura que só uma pessoa pode liberar.",
    waste: "espera",
    risk: "Risco alto",
    hint: "Bloqueio"
  },
  {
    title: "Máquina ociosa",
    text: "A impressora 3D fica pronta, mas ninguém carregou o arquivo aprovado para iniciar.",
    waste: "espera",
    risk: "Risco médio",
    hint: "Fila"
  },
  {
    title: "Aluno aguardando",
    text: "A turma fica dez minutos parada porque o material ficou preso na autorização.",
    waste: "espera",
    risk: "Risco médio",
    hint: "Tempo"
  },
  {
    title: "Reunião travada",
    text: "Todos esperam a planilha abrir porque ela só existe no computador de uma pessoa.",
    waste: "espera",
    risk: "Risco baixo",
    hint: "Acesso"
  },
  {
    title: "Ideia ignorada",
    text: "Uma estagiária sabe automatizar a conferência, mas continua apenas copiando dados manualmente.",
    waste: "talento",
    risk: "Risco alto",
    hint: "Pessoas"
  },
  {
    title: "Professor fora do fluxo",
    text: "Quem conhece o problema dos laboratórios não participa da melhoria do processo.",
    waste: "talento",
    risk: "Risco médio",
    hint: "Conhecimento"
  },
  {
    title: "Sugestões sem dono",
    text: "O quadro de melhorias está cheio, mas nenhuma proposta recebe retorno ou teste.",
    waste: "talento",
    risk: "Risco médio",
    hint: "Autonomia"
  },
  {
    title: "Habilidade escondida",
    text: "Um aluno domina análise de dados, mas fica só organizando pastas por falta de abertura.",
    waste: "talento",
    risk: "Risco baixo",
    hint: "Potencial"
  },
  {
    title: "Material cruzando o prédio",
    text: "Os documentos saem do laboratório, vão para o térreo e voltam para a sala ao lado.",
    waste: "transporte",
    risk: "Risco médio",
    hint: "Layout"
  },
  {
    title: "Peças no elevador",
    text: "Todo protótipo precisa atravessar três andares para receber uma etiqueta simples.",
    waste: "transporte",
    risk: "Risco alto",
    hint: "Transferência"
  },
  {
    title: "Caixas entre setores",
    text: "Caixas de materiais circulam por quatro salas antes de chegar ao ponto de uso.",
    waste: "transporte",
    risk: "Risco médio",
    hint: "Distância"
  },
  {
    title: "Entrega fragmentada",
    text: "Cada assinatura exige levar a mesma pasta para um setor diferente.",
    waste: "transporte",
    risk: "Risco baixo",
    hint: "Rota"
  },
  {
    title: "Armário lotado",
    text: "O laboratório guarda reagentes para seis meses, mas muitos vencem antes do uso.",
    waste: "inventario",
    risk: "Risco alto",
    hint: "Estoque"
  },
  {
    title: "Fila invisível",
    text: "Vinte solicitações ficam paradas em uma caixa de entrada sem limite de trabalho em andamento.",
    waste: "inventario",
    risk: "Risco médio",
    hint: "WIP"
  },
  {
    title: "Materiais duplicados",
    text: "Cada sala mantém seu próprio estoque de itens raramente usados.",
    waste: "inventario",
    risk: "Risco médio",
    hint: "Reposição"
  },
  {
    title: "Planilhas acumuladas",
    text: "Há dezenas de registros antigos guardados para consulta que nunca acontece.",
    waste: "inventario",
    risk: "Risco baixo",
    hint: "Acúmulo"
  },
  {
    title: "Busca por ferramenta",
    text: "A equipe perde tempo andando pela sala para encontrar cabos e adaptadores.",
    waste: "movimento",
    risk: "Risco médio",
    hint: "5S"
  },
  {
    title: "Clique demais",
    text: "Para finalizar um agendamento, a pessoa alterna entre cinco telas e volta ao início.",
    waste: "movimento",
    risk: "Risco alto",
    hint: "Pessoa"
  },
  {
    title: "Mesa mal posicionada",
    text: "O operador se levanta a cada atendimento para pegar formulários do outro lado da sala.",
    waste: "movimento",
    risk: "Risco médio",
    hint: "Ergonomia"
  },
  {
    title: "Arquivo escondido",
    text: "A equipe procura sempre a mesma pasta porque não existe padrão de nome e local.",
    waste: "movimento",
    risk: "Risco baixo",
    hint: "Procura"
  },
  {
    title: "Aprovação dupla",
    text: "O mesmo pedido passa por duas validações iguais, feitas por áreas diferentes.",
    waste: "processamento",
    risk: "Risco alto",
    hint: "Etapa extra"
  },
  {
    title: "Relatório bonito demais",
    text: "A equipe formata gráficos por horas, mas a decisão precisa só de três números.",
    waste: "processamento",
    risk: "Risco médio",
    hint: "Valor"
  },
  {
    title: "Sistema redundante",
    text: "Os dados são digitados no portal e depois repetidos em uma planilha de controle.",
    waste: "processamento",
    risk: "Risco alto",
    hint: "Duplicidade"
  },
  {
    title: "Carimbo sem uso",
    text: "Todo documento recebe um carimbo que ninguém consulta em nenhuma etapa posterior.",
    waste: "processamento",
    risk: "Risco baixo",
    hint: "Necessidade"
  }
];

const TOTAL_ROUNDS = 16;
const MAX_TIME = 120;
const SESSION_KEY = "lean8.session.id";
const PLAYER_KEY = "lean8.player.name";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  player: "",
  sessionId: "",
  deck: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: MAX_TIME,
  timer: null,
  locked: false,
  answers: [],
  powers: { andon: 1, fiveS: 1, poka: 1 },
  hiddenChoices: [],
  shield: false,
  startedAt: 0,
  finishedAt: 0,
  lastResult: null
};

const wasteById = Object.fromEntries(WASTES.map((waste) => [waste.id, waste]));

function ensureSession() {
  let session = localStorage.getItem(SESSION_KEY);
  if (!session) {
    const random = crypto.getRandomValues(new Uint32Array(1))[0].toString(36).slice(0, 5).toUpperCase();
    session = `L8-${Date.now().toString(36).slice(-4).toUpperCase()}-${random}`;
    localStorage.setItem(SESSION_KEY, session);
  }
  state.sessionId = session;
  $("#sessionPill").textContent = session;
}

function showScreen(name) {
  $$(".screen").forEach((screen) => screen.classList.remove("is-active"));
  $(`#${name}Screen`).classList.add("is-active");
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck() {
  const mandatory = WASTES.map((waste) => {
    const options = SCENARIOS.filter((scenario) => scenario.waste === waste.id);
    return shuffle(options)[0];
  });
  const usedTitles = new Set(mandatory.map((scenario) => scenario.title));
  const remaining = SCENARIOS.filter((scenario) => !usedTitles.has(scenario.title));
  return shuffle([...mandatory, ...shuffle(remaining).slice(0, TOTAL_ROUNDS - mandatory.length)]);
}

function buildWasteButtons() {
  const grid = $("#wasteGrid");
  grid.innerHTML = "";
  WASTES.forEach((waste) => {
    const button = document.createElement("button");
    button.className = "waste-button";
    button.type = "button";
    button.dataset.waste = waste.id;
    button.style.setProperty("--waste-color", waste.color);
    button.innerHTML = `
      <span class="waste-code" style="background:${waste.color}">${waste.code}</span>
      <strong>${waste.name}</strong>
      <small>${waste.signal}</small>
    `;
    button.addEventListener("click", () => chooseWaste(waste.id));
    grid.append(button);
  });
}

function buildProcessStrip() {
  const strip = $("#processStrip");
  strip.innerHTML = "";
  WASTES.forEach((waste, index) => {
    const step = document.createElement("div");
    step.className = "process-step";
    step.style.setProperty("--tone", waste.color);
    step.style.setProperty("--level", `${34 + ((index * 13) % 48)}%`);
    step.innerHTML = `<span>${waste.code} · ${waste.name.split(" ")[0]}</span>`;
    strip.append(step);
  });
}

function startGame(playerName) {
  state.player = playerName.trim() || "Jogador Lean";
  localStorage.setItem(PLAYER_KEY, state.player);
  state.deck = buildDeck();
  state.currentIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.timeLeft = MAX_TIME;
  state.locked = false;
  state.answers = [];
  state.powers = { andon: 1, fiveS: 1, poka: 1 };
  state.hiddenChoices = [];
  state.shield = false;
  state.startedAt = Date.now();
  state.finishedAt = 0;
  updatePowerButtons();
  showScreen("game");
  renderCurrentScenario();
  updateHud();
  startTimer();
}

function startTimer() {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.timeLeft = Math.max(0, state.timeLeft - 0.25);
    updateHud();
    if (state.timeLeft <= 0) {
      finishGame("Tempo encerrado.");
    }
  }, 250);
}

function updateHud() {
  const attempts = state.correct + state.wrong;
  const accuracy = attempts ? Math.round((state.correct / attempts) * 100) : 0;
  $("#scoreMetric").textContent = state.score;
  $("#accuracyMetric").textContent = `${accuracy}%`;
  $("#streakMetric").textContent = state.streak;
  $("#roundMetric").textContent = `${Math.min(state.currentIndex + 1, TOTAL_ROUNDS)}/${TOTAL_ROUNDS}`;
  $("#timeMetric").textContent = `${Math.ceil(state.timeLeft)}s`;
  $("#timerFill").style.transform = `scaleX(${state.timeLeft / MAX_TIME})`;
}

function renderCurrentScenario() {
  if (state.currentIndex >= state.deck.length) {
    finishGame("Turno concluído.");
    return;
  }

  state.locked = false;
  state.hiddenChoices = [];
  const scenario = state.deck[state.currentIndex];
  $("#incidentTitle").textContent = scenario.title;
  $("#incidentText").textContent = scenario.text;
  $("#difficultyBadge").textContent = scenario.risk;
  $("#hintBadge").textContent = scenario.hint;
  $("#feedbackPanel").className = "feedback-panel";
  $("#feedbackPanel").innerHTML = "<strong>Fluxo pronto.</strong><span>Classifique a situação no desperdício correto.</span>";
  resetWasteButtons();
}

function resetWasteButtons() {
  $$(".waste-button").forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-selected", "is-correct", "is-wrong", "is-hidden");
  });
}

function chooseWaste(wasteId) {
  if (state.locked) return;
  state.locked = true;

  const scenario = state.deck[state.currentIndex];
  const correct = scenario.waste === wasteId;
  const selectedWaste = wasteById[wasteId];
  const correctWaste = wasteById[scenario.waste];
  const protectedMiss = !correct && state.shield;

  if (correct) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.correct += 1;
    state.score += 110 + state.streak * 18 + Math.ceil(state.timeLeft / 10);
  } else {
    state.wrong += 1;
    state.streak = 0;
    if (protectedMiss) {
      state.shield = false;
    } else {
      state.score = Math.max(0, state.score - 35);
      state.timeLeft = Math.max(0, state.timeLeft - 3);
    }
  }

  state.answers.push({
    round: state.currentIndex + 1,
    title: scenario.title,
    selected: selectedWaste.name,
    correct: correctWaste.name,
    ok: correct,
    protected: protectedMiss
  });

  $$(".waste-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.waste === wasteId) button.classList.add("is-selected");
    if (button.dataset.waste === scenario.waste) button.classList.add("is-correct");
    if (!correct && button.dataset.waste === wasteId) button.classList.add("is-wrong");
  });

  const panel = $("#feedbackPanel");
  panel.className = `feedback-panel ${correct || protectedMiss ? "is-good" : "is-bad"}`;
  if (correct) {
    panel.innerHTML = `<strong>Correto: ${correctWaste.name}.</strong><span>${correctWaste.kaizen}</span>`;
  } else if (protectedMiss) {
    panel.innerHTML = `<strong>Poka-yoke segurou a perda.</strong><span>Era ${correctWaste.name}. ${correctWaste.kaizen}</span>`;
  } else {
    panel.innerHTML = `<strong>Era ${correctWaste.name}.</strong><span>${correctWaste.kaizen}</span>`;
  }

  updateHud();
  updatePowerButtons();
  setTimeout(() => {
    state.currentIndex += 1;
    renderCurrentScenario();
    updateHud();
  }, 1300);
}

function usePower(power) {
  if (state.locked || !state.powers[power]) return;
  const scenario = state.deck[state.currentIndex];
  state.powers[power] = 0;

  if (power === "andon") {
    state.timeLeft = Math.min(MAX_TIME, state.timeLeft + 12);
    setFeedback("Andon acionado.", "O turno ganhou 12 segundos.", true);
  }

  if (power === "fiveS") {
    const wrongOptions = WASTES.filter((waste) => waste.id !== scenario.waste).map((waste) => waste.id);
    state.hiddenChoices = shuffle(wrongOptions).slice(0, 3);
    state.hiddenChoices.forEach((id) => {
      const button = $(`.waste-button[data-waste="${id}"]`);
      button.disabled = true;
      button.classList.add("is-hidden");
    });
    setFeedback("5S aplicado.", "Três opções fora do fluxo saíram da bancada.", true);
  }

  if (power === "poka") {
    state.shield = true;
    setFeedback("Poka-yoke armado.", "A próxima resposta errada não perde pontos nem tempo.", true);
  }

  updatePowerButtons();
  updateHud();
}

function setFeedback(title, text, good) {
  const panel = $("#feedbackPanel");
  panel.className = `feedback-panel ${good ? "is-good" : "is-bad"}`;
  panel.innerHTML = `<strong>${title}</strong><span>${text}</span>`;
}

function updatePowerButtons() {
  $$(".power-card").forEach((button) => {
    const power = button.dataset.power;
    const used = !state.powers[power];
    button.disabled = used;
    button.classList.toggle("is-used", used);
  });
}

function finishGame(reason) {
  if (state.finishedAt) return;
  clearInterval(state.timer);
  state.finishedAt = Date.now();

  const attempts = state.correct + state.wrong;
  const accuracy = attempts ? Math.round((state.correct / attempts) * 100) : 0;
  const elapsed = Math.max(1, Math.round((state.finishedAt - state.startedAt) / 1000));
  const result = {
    player: state.player,
    session: state.sessionId,
    reason,
    score: state.score,
    correct: state.correct,
    wrong: state.wrong,
    accuracy,
    bestStreak: state.bestStreak,
    elapsed,
    answers: state.answers
  };
  state.lastResult = result;
  renderResult(result);
  showScreen("result");
}

function renderResult(result) {
  const rank = getRank(result);
  $("#rankTitle").textContent = rank.title;
  $("#rankText").textContent = `${result.player}, ${rank.text} ${result.reason}`;
  $("#finalScore").textContent = result.score;
  $("#finalAccuracy").textContent = `${result.accuracy}%`;
  $("#finalCombo").textContent = result.bestStreak;
  $("#finalTime").textContent = `${result.elapsed}s`;
  renderWasteBars(result);
  renderKaizenPlan(result);
}

function getRank(result) {
  if (result.accuracy >= 88 && result.score >= 1750) {
    return {
      title: "Faixa Sensei",
      text: "você enxergou desperdício antes dele virar fila."
    };
  }
  if (result.accuracy >= 75 && result.score >= 1300) {
    return {
      title: "Faixa Kaizen",
      text: "seu fluxo ficou forte e com boas decisões."
    };
  }
  if (result.accuracy >= 55) {
    return {
      title: "Faixa Gemba",
      text: "você encontrou valor, mas ainda há perdas escondidas."
    };
  }
  return {
    title: "Faixa Aprendiz",
    text: "o turno mostrou onde observar melhor o processo."
  };
}

function renderWasteBars(result) {
  const container = $("#wasteBars");
  container.innerHTML = "";
  WASTES.forEach((waste) => {
    const relevant = result.answers.filter((answer) => answer.correct === waste.name);
    const correct = relevant.filter((answer) => answer.ok).length;
    const total = relevant.length || 1;
    const pct = Math.round((correct / total) * 100);
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span>${waste.name}</span>
      <div class="bar-track"><b style="width:${pct}%; background:${waste.color}"></b></div>
      <span>${pct}%</span>
    `;
    container.append(row);
  });
}

function renderKaizenPlan(result) {
  const container = $("#kaizenPlan");
  const misses = WASTES.map((waste) => {
    const missed = result.answers.filter((answer) => answer.correct === waste.name && !answer.ok).length;
    return { waste, missed };
  }).sort((a, b) => b.missed - a.missed);

  const focus = misses.filter((item) => item.missed > 0).slice(0, 3);
  const plan = focus.length ? focus : misses.slice(0, 3);
  container.innerHTML = "";
  plan.forEach(({ waste, missed }) => {
    const item = document.createElement("div");
    item.className = "plan-item";
    item.style.borderColor = waste.color;
    item.innerHTML = `
      <strong>${waste.name}${missed ? ` · ${missed} alerta(s)` : ""}</strong>
      <span>${waste.kaizen}</span>
    `;
    container.append(item);
  });
}

function exportResult() {
  if (!state.lastResult) return;
  const headers = ["sessao", "jogador", "rodada", "situacao", "resposta", "correto", "acertou"];
  const rows = state.lastResult.answers.map((answer) => [
    state.lastResult.session,
    state.lastResult.player,
    answer.round,
    answer.title,
    answer.selected,
    answer.correct,
    answer.ok ? "sim" : "nao"
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `resultado-${state.lastResult.session}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function setupShareDialog() {
  const dialog = $("#shareDialog");
  const input = $("#shareUrl");
  $("#openShare").addEventListener("click", () => {
    dialog.showModal();
    renderQr();
  });
  $("#makeQr").addEventListener("click", renderQr);
  input.addEventListener("input", () => $("#qrStatus").textContent = "Link alterado. Gere novamente.");
  hydrateShareUrl();
}

async function hydrateShareUrl() {
  const input = $("#shareUrl");
  let url = defaultShareUrl();
  if (location.protocol.startsWith("http")) {
    try {
      const response = await fetch("/access-url", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        if (data.primary && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
          url = data.primary;
        }
      }
    } catch {
      url = defaultShareUrl();
    }
  }
  input.value = url;
  renderQr();
}

function defaultShareUrl() {
  if (location.protocol.startsWith("http")) {
    const url = new URL(location.href);
    url.search = "";
    url.hash = "";
    return url.href.replace(/index\.html$/, "");
  }
  return "http://SEU-IP:8080/";
}

function renderQr() {
  const canvas = $("#qrCanvas");
  const status = $("#qrStatus");
  const text = $("#shareUrl").value.trim();
  try {
    drawQr(canvas, text);
    status.textContent = `QR gerado para ${text.length} caracteres.`;
  } catch (error) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#16211f";
    context.font = "15px sans-serif";
    context.textAlign = "center";
    context.fillText("Link muito longo", canvas.width / 2, canvas.height / 2);
    status.textContent = error.message;
  }
}

function drawQr(canvas, text) {
  const modules = QrCodeV5L.encode(text);
  const size = modules.length;
  const quiet = 4;
  const cells = size + quiet * 2;
  const scale = Math.floor(canvas.width / cells);
  const offset = Math.floor((canvas.width - cells * scale) / 2);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#16211f";
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (modules[y][x]) {
        ctx.fillRect(offset + (x + quiet) * scale, offset + (y + quiet) * scale, scale, scale);
      }
    }
  }
}

const QrCodeV5L = (() => {
  const VERSION = 5;
  const SIZE = 17 + VERSION * 4;
  const DATA_CODEWORDS = 108;
  const ECC_CODEWORDS = 26;
  const FORMAT_ECL_LOW = 1;

  function encode(text) {
    if (!text) throw new Error("Informe um link para gerar o QR.");
    const bytes = new TextEncoder().encode(text);
    if (bytes.length > 106) {
      throw new Error("Este QR local aceita links de até 106 caracteres. Use um encurtador ou um domínio menor.");
    }

    const data = makeDataCodewords(bytes);
    const ecc = reedSolomonRemainder(data, reedSolomonDivisor(ECC_CODEWORDS));
    const codewords = [...data, ...ecc];
    const base = makeBaseMatrix();
    placeData(base.modules, base.isFunction, codewords);

    let best = null;
    for (let mask = 0; mask < 8; mask += 1) {
      const candidate = base.modules.map((row) => [...row]);
      applyMask(candidate, base.isFunction, mask);
      drawFormatBits(candidate, base.isFunction, mask);
      const penalty = getPenalty(candidate);
      if (!best || penalty < best.penalty) best = { modules: candidate, penalty };
    }
    return best.modules;
  }

  function makeDataCodewords(bytes) {
    const bits = [];
    appendBits(bits, 0x4, 4);
    appendBits(bits, bytes.length, 8);
    bytes.forEach((byte) => appendBits(bits, byte, 8));
    const capacity = DATA_CODEWORDS * 8;
    appendBits(bits, 0, Math.min(4, capacity - bits.length));
    while (bits.length % 8) bits.push(0);

    const result = [];
    for (let i = 0; i < bits.length; i += 8) {
      result.push(bits.slice(i, i + 8).reduce((value, bit) => (value << 1) | bit, 0));
    }
    for (let pad = 0; result.length < DATA_CODEWORDS; pad += 1) {
      result.push(pad % 2 === 0 ? 0xec : 0x11);
    }
    return result;
  }

  function appendBits(bits, value, length) {
    for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
  }

  function makeBaseMatrix() {
    const modules = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
    const isFunction = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
    drawFinder(modules, isFunction, 3, 3);
    drawFinder(modules, isFunction, SIZE - 4, 3);
    drawFinder(modules, isFunction, 3, SIZE - 4);
    drawAlignment(modules, isFunction, 30, 30);
    drawTiming(modules, isFunction);
    drawFormatBits(modules, isFunction, 0);
    setFunction(modules, isFunction, 8, SIZE - 8, true);
    return { modules, isFunction };
  }

  function setFunction(modules, isFunction, x, y, dark) {
    if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return;
    modules[y][x] = dark;
    isFunction[y][x] = true;
  }

  function drawFinder(modules, isFunction, cx, cy) {
    for (let dy = -4; dy <= 4; dy += 1) {
      for (let dx = -4; dx <= 4; dx += 1) {
        const x = cx + dx;
        const y = cy + dy;
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        const dark = dist !== 2 && dist !== 4;
        setFunction(modules, isFunction, x, y, dark);
      }
    }
  }

  function drawAlignment(modules, isFunction, cx, cy) {
    if (isFunction[cy][cx]) return;
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const dark = Math.max(Math.abs(dx), Math.abs(dy)) !== 1;
        setFunction(modules, isFunction, cx + dx, cy + dy, dark);
      }
    }
  }

  function drawTiming(modules, isFunction) {
    for (let i = 8; i < SIZE - 8; i += 1) {
      const dark = i % 2 === 0;
      setFunction(modules, isFunction, i, 6, dark);
      setFunction(modules, isFunction, 6, i, dark);
    }
  }

  function drawFormatBits(modules, isFunction, mask) {
    const data = (FORMAT_ECL_LOW << 3) | mask;
    let rem = data;
    for (let i = 0; i < 10; i += 1) {
      rem = (rem << 1) ^ (((rem >>> 9) & 1) ? 0x537 : 0);
    }
    const bits = ((data << 10) | (rem & 0x3ff)) ^ 0x5412;

    for (let i = 0; i <= 5; i += 1) setFunction(modules, isFunction, 8, i, getBit(bits, i));
    setFunction(modules, isFunction, 8, 7, getBit(bits, 6));
    setFunction(modules, isFunction, 8, 8, getBit(bits, 7));
    setFunction(modules, isFunction, 7, 8, getBit(bits, 8));
    for (let i = 9; i < 15; i += 1) setFunction(modules, isFunction, 14 - i, 8, getBit(bits, i));

    for (let i = 0; i < 8; i += 1) setFunction(modules, isFunction, SIZE - 1 - i, 8, getBit(bits, i));
    for (let i = 8; i < 15; i += 1) setFunction(modules, isFunction, 8, SIZE - 15 + i, getBit(bits, i));
  }

  function getBit(value, index) {
    return ((value >>> index) & 1) !== 0;
  }

  function placeData(modules, isFunction, codewords) {
    const bits = [];
    codewords.forEach((byte) => appendBits(bits, byte, 8));
    let bitIndex = 0;
    let upward = true;
    for (let right = SIZE - 1; right >= 1; right -= 2) {
      if (right === 6) right -= 1;
      for (let vert = 0; vert < SIZE; vert += 1) {
        const y = upward ? SIZE - 1 - vert : vert;
        for (let dx = 0; dx < 2; dx += 1) {
          const x = right - dx;
          if (!isFunction[y][x]) {
            modules[y][x] = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
            bitIndex += 1;
          }
        }
      }
      upward = !upward;
    }
  }

  function applyMask(modules, isFunction, mask) {
    for (let y = 0; y < SIZE; y += 1) {
      for (let x = 0; x < SIZE; x += 1) {
        if (!isFunction[y][x] && maskBit(mask, x, y)) modules[y][x] = !modules[y][x];
      }
    }
  }

  function maskBit(mask, x, y) {
    switch (mask) {
      case 0: return (x + y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x + y) % 3 === 0;
      case 4: return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
      case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
      case 6: return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
      case 7: return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
      default: return false;
    }
  }

  function getPenalty(modules) {
    let penalty = 0;
    for (let y = 0; y < SIZE; y += 1) {
      penalty += consecutivePenalty(modules[y]);
    }
    for (let x = 0; x < SIZE; x += 1) {
      penalty += consecutivePenalty(modules.map((row) => row[x]));
    }

    for (let y = 0; y < SIZE - 1; y += 1) {
      for (let x = 0; x < SIZE - 1; x += 1) {
        const color = modules[y][x];
        if (modules[y][x + 1] === color && modules[y + 1][x] === color && modules[y + 1][x + 1] === color) {
          penalty += 3;
        }
      }
    }

    for (let y = 0; y < SIZE; y += 1) penalty += finderPenalty(modules[y]);
    for (let x = 0; x < SIZE; x += 1) penalty += finderPenalty(modules.map((row) => row[x]));

    const dark = modules.flat().filter(Boolean).length;
    const total = SIZE * SIZE;
    penalty += Math.floor(Math.abs(dark * 20 - total * 10) / total) * 10;
    return penalty;
  }

  function consecutivePenalty(line) {
    let penalty = 0;
    let runColor = line[0];
    let runLength = 1;
    for (let i = 1; i < line.length; i += 1) {
      if (line[i] === runColor) {
        runLength += 1;
      } else {
        if (runLength >= 5) penalty += runLength - 2;
        runColor = line[i];
        runLength = 1;
      }
    }
    if (runLength >= 5) penalty += runLength - 2;
    return penalty;
  }

  function finderPenalty(line) {
    let penalty = 0;
    const pattern = [true, false, true, true, true, false, true];
    for (let i = 0; i <= line.length - 7; i += 1) {
      const match = pattern.every((value, offset) => line[i + offset] === value);
      if (!match) continue;
      const before = i >= 4 && line.slice(i - 4, i).every((value) => !value);
      const after = i + 11 <= line.length && line.slice(i + 7, i + 11).every((value) => !value);
      if (before || after) penalty += 40;
    }
    return penalty;
  }

  const EXP = Array(512).fill(0);
  const LOG = Array(256).fill(0);
  let x = 1;
  for (let i = 0; i < 255; i += 1) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < EXP.length; i += 1) EXP[i] = EXP[i - 255];

  function multiply(a, b) {
    return a && b ? EXP[LOG[a] + LOG[b]] : 0;
  }

  function reedSolomonDivisor(degree) {
    const result = Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i += 1) {
      for (let j = 0; j < degree; j += 1) {
        result[j] = multiply(result[j], root);
        if (j + 1 < degree) result[j] ^= result[j + 1];
      }
      root = multiply(root, 0x02);
    }
    return result;
  }

  function reedSolomonRemainder(data, divisor) {
    const result = Array(divisor.length).fill(0);
    data.forEach((byte) => {
      const factor = byte ^ result.shift();
      result.push(0);
      divisor.forEach((coefficient, index) => {
        result[index] ^= multiply(coefficient, factor);
      });
    });
    return result;
  }

  return { encode };
})();

function bindEvents() {
  $("#playerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    startGame($("#playerName").value);
  });
  $$(".power-card").forEach((button) => {
    button.addEventListener("click", () => usePower(button.dataset.power));
  });
  $("#playAgain").addEventListener("click", () => {
    showScreen("intro");
    $("#playerName").focus();
  });
  $("#exportResult").addEventListener("click", exportResult);
}

function init() {
  ensureSession();
  buildWasteButtons();
  buildProcessStrip();
  bindEvents();
  setupShareDialog();
  $("#playerName").value = localStorage.getItem(PLAYER_KEY) || "";
}

init();
