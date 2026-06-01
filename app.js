const people = [
  { name: "Luiz Phelipe Moura de Lima", email: "luiz@bhub.ai", role: "Business Architect I", leader: "Rodrigo Papa", costCenter: "PMI", admissionDate: "2022-02-01" },
  { name: "Gabriella Neves e Silva", email: "gabriella.neves@bhub.ai", role: "Analista Contábil I", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2022-12-12" },
  { name: "Isabela Nogueira Rosa", email: "isabela.rosa@bhub.ai", role: "Analista de Departamento Pessoal II", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2023-03-06" },
  { name: "Cleiton dos Santos Pinto", email: "cleiton.santos@bhub.ai", role: "Coordenador Contábil I", leader: "Luiz Phelipe Moura de Lima", costCenter: "Implantação", admissionDate: "2023-03-20" },
  { name: "Julianna Silva Martins", email: "julianna.martins@bhub.ai", role: "Coordenador de Departamento Pessoal II", leader: "Luiz Phelipe Moura de Lima", costCenter: "Integração de sistemas", admissionDate: "2023-09-18" },
  { name: "Barbara de Paiva Rodrigues", email: "barbara.rodrigues@bhub.ai", role: "Assistente Contábil", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2023-10-23" },
  { name: "Priscila Carolina Castilho Domingues", email: "priscila.castilho@bhub.ai", role: "Analista de CX I", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2023-11-21" },
  { name: "Guilherme Costa Nunes de Souza", email: "guilherme.souza@bhub.ai", role: "Assistente Contábil", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2024-01-08" },
  { name: "Camila da Silva Machado Rossetti", email: "camila.rosseti@bhub.ai", role: "Analista Fiscal II", leader: "Cleiton dos Santos Pinto", costCenter: "Implantação", admissionDate: "2024-03-11" },
  { name: "Ellen Moreira Trindade", email: "ellen.trindade@bhub.ai", role: "Assistente de Implantação", leader: "Cleiton dos Santos Pinto", costCenter: "Implantação", admissionDate: "2024-05-13" },
  { name: "Thayna Castro Franca", email: "thayna.franca@bhub.ai", role: "Assistente de Departamento Pessoal", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2024-08-19" },
  { name: "Carlos Henrique de Avila Santa Ana", email: "carlos.avila@bhub.ai", role: "Analista de Contas I", leader: "Luiz Phelipe Moura de Lima", costCenter: "Integração de sistemas", admissionDate: "2024-10-21" },
  { name: "Aira da Cruz Jacinto", email: "aira.jacinto@bhub.ai", role: "Assistente de Departamento Pessoal", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2024-11-04" },
  { name: "Daniela Aparecida Ferreira", email: "daniela.ferreira@bhub.ai", role: "Analista de Implantação I", leader: "Cleiton dos Santos Pinto", costCenter: "Implantação", admissionDate: "2025-01-06" },
  { name: "Henrique Fernandes Alves", email: "henrique.alves@bhub.ai", role: "Estagiário(a)", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2025-02-17" },
  { name: "Vinicius Rosario Cordeiro", email: "vinicius.cordeiro@bhub.ai", role: "Analista de Departamento Pessoal II", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2025-02-17" },
  { name: "Nicoly Rodrigues Reis", email: "nicoly.reis@bhub.ai", role: "Estagiário(a)", leader: "Cleiton dos Santos Pinto", costCenter: "Implantação", admissionDate: "2025-03-10" },
  { name: "Robert Kennedy Soares Fonseca", email: "robert.fonseca@bhub.ai", role: "Coordenador Contábil I", leader: "Luiz Phelipe Moura de Lima", costCenter: "Integração de sistemas", admissionDate: "2025-04-03" },
  { name: "Dayane Silva Morais", email: "dayane.morais@bhub.ai", role: "Especialista Fiscal I", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2025-05-19" },
  { name: "Tatiana Aparecida da Silva", email: "tatiana.silva@bhub.ai", role: "Assistente de Implantação", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2025-08-04" },
  { name: "Karina De Andrade Queiroz", email: "karina.queiroz@bhub.ai", role: "Analista Fiscal I", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2025-09-15" },
  { name: "Tuane Bertoncini dos Santos", email: "tuane.santos@bhub.ai", role: "Analista de Departamento Pessoal II", leader: "Cleiton dos Santos Pinto", costCenter: "Implantação", admissionDate: "2025-10-06" },
  { name: "Nathalia Vieira Araujo", email: "nathalia.araujo@bhub.ai", role: "Assistente Fiscal", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2025-10-13" },
  { name: "Keila Lima", email: "keila.lima@bhub.ai", role: "Analista Contábil II", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2025-12-01" },
  { name: "Henrique da Silva Grauso", email: "henrique.grauso@bhub.ai", role: "Analista Contábil III", leader: "Robert Kennedy Soares Fonseca", costCenter: "Integração de sistemas", admissionDate: "2025-12-08" },
  { name: "Ana Julia Beloni", email: "ana.beloni@bhub.ai", role: "Analista de Departamento Pessoal I", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2025-12-10" },
  { name: "Amanda Cavalcante", email: "amanda.cavalcante@bhub.ai", role: "Assistente de Departamento Pessoal", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2026-03-09" },
  { name: "Allan Milan", email: "allan.milan@bhub.ai", role: "Especialista de DP", leader: "Julianna Silva Martins", costCenter: "Integração de sistemas", admissionDate: "2026-05-04" },
  { name: "Vitória Machado", email: "vitoria.machado@bhub.ai", role: "Assistente Fiscal", leader: "Carlos Henrique de Avila Santa Ana", costCenter: "Integração de sistemas", admissionDate: "2023-08-08" }
].map((person) => ({ ...person, area: classifyArea(person) }));

const storageKey = "ferias-team-app:v2";
const legacyStorageKey = "ferias-team-app:v1";
const areaOverridesKey = "ferias-team-app:area-overrides:v1";
const sharedApiUrl = window.FERIAS_CONFIG?.apiUrl || "";
const areas = ["DP", "Fiscal", "Contábil", "Outros"];
const state = {
  vacations: loadVacations(),
  areaOverrides: loadAreaOverrides(),
  drafts: {},
  view: "calendar",
  month: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
};

const els = {
  peopleCount: document.querySelector("#peopleCount"),
  scheduledCount: document.querySelector("#scheduledCount"),
  monthCount: document.querySelector("#monthCount"),
  conflictCount: document.querySelector("#conflictCount"),
  leaderFilter: document.querySelector("#leaderFilter"),
  areaFilter: document.querySelector("#areaFilter"),
  monthTitle: document.querySelector("#monthTitle"),
  previousMonth: document.querySelector("#previousMonth"),
  nextMonth: document.querySelector("#nextMonth"),
  listTab: document.querySelector("#listTab"),
  calendarTab: document.querySelector("#calendarTab"),
  listView: document.querySelector("#listView"),
  calendarView: document.querySelector("#calendarView"),
  rosterView: document.querySelector("#rosterView"),
  clearDraftsButton: document.querySelector("#clearDraftsButton"),
  syncButton: document.querySelector("#syncButton"),
  exportJsonButton: document.querySelector("#exportJsonButton"),
  importJsonInput: document.querySelector("#importJsonInput"),
  emptyTemplate: document.querySelector("#emptyStateTemplate")
};

function classifyArea(person) {
  const text = `${person.role} ${person.leader}`.toLowerCase();
  if (text.includes("departamento pessoal") || text.includes("dp") || text.includes("julianna")) return "DP";
  if (text.includes("fiscal") || text.includes("carlos henrique")) return "Fiscal";
  if (text.includes("contáb") || text.includes("contab") || text.includes("contas") || text.includes("robert")) return "Contábil";
  return "Outros";
}

function loadAreaOverrides() {
  try {
    return JSON.parse(localStorage.getItem(areaOverridesKey)) || {};
  } catch {
    return {};
  }
}

function saveAreaOverrides() {
  localStorage.setItem(areaOverridesKey, JSON.stringify(state.areaOverrides));
}

function isSharedMode() {
  return sharedApiUrl.startsWith("https://script.google.com/");
}

async function apiRequest(payload) {
  const response = await fetch(sharedApiUrl, {
    method: "POST",
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error || "Falha ao sincronizar dados");
  return data;
}

function requireSharedMode() {
  if (isSharedMode()) return true;
  alert("Configure a URL do Apps Script no arquivo config.js antes de usar a versao compartilhada.");
  return false;
}

async function loadSharedData() {
  if (!isSharedMode()) return;
  try {
    const data = await apiRequest({ action: "list" });
    state.vacations = (data.vacations || []).map(normalizeVacation).filter(Boolean);
    state.areaOverrides = data.areaOverrides || {};
    saveVacations();
    saveAreaOverrides();
  } catch (error) {
    console.error(error);
    alert("Nao foi possivel carregar a base compartilhada. Verifique a URL do Apps Script.");
  }
}

async function syncSharedData() {
  if (!requireSharedMode()) return;
  await loadSharedData();
  renderView();
}

function getArea(person) {
  return state.areaOverrides[person.name] || person.area;
}

function normalizeVacation(item) {
  if (!item.person || !item.start) return null;
  const start = item.start;
  const days = Number(item.days) || inclusiveDays(item.start, item.end);
  const end = item.end || calculateEndDate(start, days);
  if (!days || !end) return null;
  return {
    id: item.id || makeId(),
    person: item.person,
    start,
    days,
    end,
    status: item.status || "Planejado",
    notes: item.notes || ""
  };
}

function loadVacations() {
  try {
    const current = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(current)) return current.map(normalizeVacation).filter(Boolean);
    const legacy = JSON.parse(localStorage.getItem(legacyStorageKey));
    if (Array.isArray(legacy)) return legacy.map(normalizeVacation).filter(Boolean);
  } catch {
    return [];
  }
  return [];
}

function saveVacations() {
  localStorage.setItem(storageKey, JSON.stringify(state.vacations));
}

function makeId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR").format(toDate(value));
}

function formatShortDate(value) {
  return value ? formatDate(value) : "-";
}

function inclusiveDays(start, end) {
  if (!start || !end) return 0;
  const diff = toDate(end) - toDate(start);
  return diff < 0 ? 0 : Math.round(diff / 86400000) + 1;
}

function calculateEndDate(start, days) {
  const parsedDays = Number(days);
  if (!start || !parsedDays || parsedDays < 1) return "";
  const end = toDate(start);
  end.setDate(end.getDate() + parsedDays - 1);
  return toInputDate(end);
}

function getPerson(name) {
  return people.find((person) => person.name === name);
}

function areaSlug(area) {
  return area.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function colorClassForPerson(name) {
  const person = getPerson(name);
  return areaSlug(person ? getArea(person) : "Outros");
}

function overlaps(a, b) {
  return toDate(a.start) <= toDate(b.end) && toDate(b.start) <= toDate(a.end);
}

function buildConflictMap(vacations = state.vacations) {
  const ids = new Set();
  vacations.forEach((item, index) => {
    vacations.slice(index + 1).forEach((other) => {
      if (item.person !== other.person && overlaps(item, other)) {
        ids.add(item.id);
        ids.add(other.id);
      }
    });
  });
  return ids;
}

function buildConflictDays(vacations = filteredVacations()) {
  const counts = new Map();
  vacations.forEach((item) => {
    const cursor = toDate(item.start);
    const end = toDate(item.end);
    while (cursor <= end) {
      const key = toInputDate(cursor);
      counts.set(key, (counts.get(key) || 0) + 1);
      cursor.setDate(cursor.getDate() + 1);
    }
  });
  return counts;
}

function filteredPeople() {
  const leader = els.leaderFilter.value;
  const area = els.areaFilter.value;
  return people.filter((person) => (!leader || person.leader === leader) && (!area || getArea(person) === area));
}

function filteredVacations() {
  const names = new Set(filteredPeople().map((person) => person.name));
  return state.vacations
    .filter((item) => names.has(item.person))
    .sort((a, b) => toDate(a.start) - toDate(b.start) || a.person.localeCompare(b.person));
}

function vacationsInMonth(vacations = filteredVacations()) {
  const start = new Date(state.month.getFullYear(), state.month.getMonth(), 1);
  const end = new Date(state.month.getFullYear(), state.month.getMonth() + 1, 0);
  return vacations.filter((item) => toDate(item.start) <= end && toDate(item.end) >= start);
}

function uniqueOptions(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  els.leaderFilter.innerHTML = `<option value="">Todos os lideres</option>${uniqueOptions(people.map((person) => person.leader))
    .map((leader) => `<option>${leader}</option>`)
    .join("")}`;
  els.areaFilter.innerHTML = `<option value="">Todas as areas</option>${uniqueOptions(areas)
    .map((area) => `<option>${area}</option>`)
    .join("")}`;
}

function renderSummary() {
  const conflicts = buildConflictMap(filteredVacations());
  els.peopleCount.textContent = filteredPeople().length;
  els.scheduledCount.textContent = filteredVacations().length;
  els.monthCount.textContent = vacationsInMonth().length;
  els.conflictCount.textContent = conflicts.size;
}

function renderRoster() {
  const rows = filteredPeople();
  els.rosterView.innerHTML = "";
  const table = document.createElement("div");
  table.className = "roster-table";
  table.innerHTML = `
    <div class="roster-head">
      <span>Funcionario</span>
      <span>Area</span>
      <span>Admissao</span>
      <span>Inicio</span>
      <span>Dias</span>
      <span>Fim calculado</span>
      <span></span>
    </div>
  `;

  rows.forEach((person) => {
    const draft = state.drafts[person.name] || {};
    const end = calculateEndDate(draft.start, draft.days);
    const selectedArea = getArea(person);
    const row = document.createElement("div");
    row.className = "roster-row";
    row.dataset.person = person.name;
    row.innerHTML = `
      <div class="employee-cell">
        <strong>${person.name}</strong>
        <span>${person.role}</span>
        <small>${person.leader} · ${person.costCenter || ""}</small>
      </div>
      <label class="compact-label">
        Area
        <select class="area-select ${areaSlug(selectedArea)}" data-field="area">
          ${areas.map((area) => `<option value="${area}" ${area === selectedArea ? "selected" : ""}>${area}</option>`).join("")}
        </select>
      </label>
      <div class="admission-cell">${formatShortDate(person.admissionDate)}</div>
      <label class="compact-label">Inicio<input type="date" data-field="start" value="${draft.start || ""}"></label>
      <label class="compact-label">Dias<input type="number" min="1" max="60" data-field="days" value="${draft.days || ""}" placeholder="0"></label>
      <output>${end ? formatDate(end) : "-"}</output>
      <button class="save-row" type="button" data-action="save" ${end ? "" : "disabled"}>Salvar</button>
    `;
    table.append(row);
  });

  els.rosterView.append(table);
}

function renderList() {
  const vacations = filteredVacations();
  const conflictIds = buildConflictMap(vacations);
  els.listView.innerHTML = "";
  if (!vacations.length) {
    els.listView.append(els.emptyTemplate.content.cloneNode(true));
    return;
  }

  vacations.forEach((item) => {
    const person = getPerson(item.person);
    const row = document.createElement("article");
    row.className = `vacation-row ${conflictIds.has(item.id) ? "conflict" : ""}`;
    row.innerHTML = `
      <div class="name-cell">
        <strong>${item.person}</strong>
        <span class="meta">${person?.role || ""}</span>
      </div>
      <div><span class="area-pill ${colorClassForPerson(item.person)}">${person ? getArea(person) : "Outros"}</span></div>
      <div class="meta">${person?.leader || ""}<br>Adm.: ${formatShortDate(person?.admissionDate)}</div>
      <div class="date-cell">
        <strong>${formatDate(item.start)} - ${formatDate(item.end)}</strong>
        <span>${item.days} dias corridos</span>
      </div>
      <div>
        ${conflictIds.has(item.id) ? `<span class="badge conflict-badge">Sobreposicao</span>` : ""}
      </div>
      <div class="row-actions">
        <button type="button" aria-label="Excluir ${item.person}" data-action="delete" data-id="${item.id}">×</button>
      </div>
    `;
    els.listView.append(row);
  });
}

function renderCalendar() {
  const monthStart = new Date(state.month.getFullYear(), state.month.getMonth(), 1);
  const gridStart = new Date(monthStart);
  gridStart.setDate(monthStart.getDate() - monthStart.getDay());
  const vacations = vacationsInMonth();
  const conflictIds = buildConflictMap(filteredVacations());
  const conflictDays = buildConflictDays(vacations);
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  els.calendarView.innerHTML = `<div class="calendar-grid"></div>`;
  const grid = els.calendarView.querySelector(".calendar-grid");
  weekdays.forEach((day) => {
    const cell = document.createElement("div");
    cell.className = "weekday";
    cell.textContent = day;
    grid.append(cell);
  });

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    const dateKey = toInputDate(date);
    const dayItems = vacations.filter((item) => item.start <= dateKey && item.end >= dateKey);
    const count = conflictDays.get(dateKey) || 0;
    const cell = document.createElement("div");
    cell.className = `day-cell ${date.getMonth() === state.month.getMonth() ? "" : "outside"} ${count > 1 ? "has-conflict" : ""}`;
    cell.innerHTML = `
      <div class="day-header">
        <span class="day-number">${date.getDate()}</span>
        ${count > 1 ? `<span class="day-warning">${count} pessoas</span>` : ""}
      </div>
    `;
    dayItems.forEach((item) => {
      const event = document.createElement("button");
      event.type = "button";
      event.className = `day-event ${colorClassForPerson(item.person)} ${conflictIds.has(item.id) ? "conflict" : ""}`;
      event.title = `${item.person} · ${item.days} dias`;
      event.textContent = item.person;
      event.addEventListener("click", () => deleteVacation(item.id));
      cell.append(event);
    });
    grid.append(cell);
  }
}

function renderMonthTitle() {
  els.monthTitle.textContent = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric"
  }).format(state.month);
}

function renderView() {
  els.listTab.classList.toggle("active", state.view === "list");
  els.calendarTab.classList.toggle("active", state.view === "calendar");
  els.listView.classList.toggle("hidden", state.view !== "list");
  els.calendarView.classList.toggle("hidden", state.view !== "calendar");
  renderMonthTitle();
  renderSummary();
  renderRoster();
  renderList();
  renderCalendar();
}

function updateDraft(row, field, value) {
  const person = row.dataset.person;
  state.drafts[person] = { ...(state.drafts[person] || {}), [field]: value };
  refreshRosterRow(row);
}

function refreshRosterRow(row) {
  const start = row.querySelector("input[data-field='start']").value;
  const days = row.querySelector("input[data-field='days']").value;
  const end = calculateEndDate(start, days);
  row.querySelector("output").textContent = end ? formatDate(end) : "-";
  row.querySelector("button[data-action='save']").disabled = !end;
}

async function saveRosterVacation(row) {
  if (!requireSharedMode()) return;
  const person = row.dataset.person;
  const draft = state.drafts[person] || {};
  const days = Number(draft.days);
  const end = calculateEndDate(draft.start, days);
  if (!draft.start || !days || !end) return;
  const vacation = {
    id: makeId(),
    person,
    start: draft.start,
    days,
    end,
    status: "Planejado",
    notes: ""
  };
  await apiRequest({ action: "saveVacation", vacation });
  state.vacations.push(vacation);
  delete state.drafts[person];
  saveVacations();
  renderView();
}

async function updateArea(row, area) {
  if (!requireSharedMode()) return;
  const person = row.dataset.person;
  await apiRequest({ action: "saveArea", person, area });
  state.areaOverrides[person] = area;
  saveAreaOverrides();
  populateFilters();
  els.areaFilter.value = "";
  renderView();
}

async function deleteVacation(id) {
  if (!requireSharedMode()) return;
  const item = state.vacations.find((vacation) => vacation.id === id);
  if (!item) return;
  const ok = confirm(`Excluir ferias de ${item.person}?`);
  if (!ok) return;
  await apiRequest({ action: "deleteVacation", id });
  state.vacations = state.vacations.filter((vacation) => vacation.id !== id);
  saveVacations();
  renderView();
}

function exportJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    vacations: state.vacations,
    areaOverrides: state.areaOverrides
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cronograma-ferias-${toInputDate(new Date())}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    const importedVacations = Array.isArray(imported) ? imported : imported.vacations;
    if (!Array.isArray(importedVacations)) throw new Error("Formato invalido");
    const byId = new Map(state.vacations.map((item) => [item.id, item]));
    importedVacations.map(normalizeVacation).filter(Boolean).forEach((item) => {
      byId.set(item.id, item);
    });
    state.vacations = [...byId.values()];
    state.areaOverrides = { ...state.areaOverrides, ...(imported.areaOverrides || {}) };
    if (isSharedMode()) {
      await apiRequest({
        action: "bulkUpsert",
        vacations: state.vacations,
        areaOverrides: state.areaOverrides
      });
    }
    saveVacations();
    saveAreaOverrides();
    renderView();
  } catch {
    alert("Nao foi possivel importar o arquivo.");
  } finally {
    event.target.value = "";
  }
}

function bindEvents() {
  els.leaderFilter.addEventListener("change", renderView);
  els.areaFilter.addEventListener("change", renderView);
  els.previousMonth.addEventListener("click", () => {
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() - 1, 1);
    renderView();
  });
  els.nextMonth.addEventListener("click", () => {
    state.month = new Date(state.month.getFullYear(), state.month.getMonth() + 1, 1);
    renderView();
  });
  els.listTab.addEventListener("click", () => {
    state.view = "list";
    renderView();
  });
  els.calendarTab.addEventListener("click", () => {
    state.view = "calendar";
    renderView();
  });
  els.rosterView.addEventListener("input", (event) => {
    const input = event.target.closest("input[data-field]");
    if (!input) return;
    updateDraft(input.closest(".roster-row"), input.dataset.field, input.value);
  });
  els.rosterView.addEventListener("change", (event) => {
    const select = event.target.closest("select[data-field='area']");
    if (!select) return;
    updateArea(select.closest(".roster-row"), select.value);
  });
  els.rosterView.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='save']");
    if (button) saveRosterVacation(button.closest(".roster-row"));
  });
  els.listView.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action='delete']");
    if (button) deleteVacation(button.dataset.id);
  });
  els.clearDraftsButton.addEventListener("click", () => {
    state.drafts = {};
    renderRoster();
  });
  els.syncButton.addEventListener("click", syncSharedData);
  els.exportJsonButton.addEventListener("click", exportJson);
  els.importJsonInput.addEventListener("change", importJson);
}

async function init() {
  populateFilters();
  bindEvents();
  await loadSharedData();
  renderView();
}

init();
