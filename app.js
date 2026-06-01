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
  const button = row.querySelector("button[data-action='save']");
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
  try {
    button.disabled = true;
    button.textContent = "Salvando";
    await apiRequest({ action: "saveVacation", vacation });
    state.vacations.push(vacation);
    delete state.drafts[person];
    saveVacations();
    renderView();
  } catch (error) {
    console.error(error);
    alert("Nao foi possivel salvar. Verifique se o Apps Script foi atualizado e publicado como nova versao.");
    refreshRosterRow(row);
    button.textContent = "Salvar";
  }
}

async function updateArea(row, area) {
  if (!requireSharedMode()) return;
  const person = row.dataset.person;
  try {
    await apiRequest({ action: "saveArea", person, area });
    state.areaOverrides[person] = area;
    saveAreaOverrides();
    populateFilters();
    els.areaFilter.value = "";
    renderView();
  } catch (error) {
    console.error(error);
    alert("Nao foi possivel salvar a area. Verifique o Apps Script.");
    renderView();
  }
}

async function deleteVacation(id) {
  if (!requireSharedMode()) return;
  const item = state.vacations.find((vacation) => vacation.id === id);
  if (!item) return;
  const ok = confirm(`Excluir ferias de ${item.person}?`);
  if (!ok) return;
  try {
    await apiRequest({ action: "deleteVacation", id });
    state.vacations = state.vacations.filter((vacation) => vacation.id !== id);
    saveVacations();
    renderView();
  } catch (error) {
    console.error(error);
    alert("Nao foi possivel excluir. Verifique o Apps Script.");
  }
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
