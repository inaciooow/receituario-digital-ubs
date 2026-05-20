/**
 * Receituário Digital — UBS Família da Placa
 * Autor: Jorge Inácio
 *
 * Responsabilidades:
 *  - Gerenciar blocos de medicamentos (adicionar, remover, renumerar)
 *  - Atualizar a pré-visualização em tempo real
 *  - Formatar e exibir a data da prescrição
 *  - Contagem de caracteres com feedback visual
 */

'use strict';

/* ============================================================
   CONSTANTES
   ============================================================ */
const CHAR_LIMIT = 220;

const MONTHS_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

/* ============================================================
   ESTADO
   ============================================================ */
let medCount = 0;
let medIds   = [];   // IDs ativos, na ordem de exibição

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setTodayDate();
  addMedBlock();
  updatePreview();

  // Atualiza a pré-visualização a cada mudança nos inputs
  document.addEventListener('input', updatePreview);
});

/** Preenche o campo de data com a data de hoje */
function setTodayDate() {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  document.getElementById('date-input').value = `${yyyy}-${mm}-${dd}`;
}

/* ============================================================
   BLOCOS DE MEDICAMENTO
   ============================================================ */

/** Adiciona um novo bloco de medicamento ao formulário */
function addMedBlock() {
  medCount++;
  const id = medCount;
  medIds.push(id);

  const list  = document.getElementById('med-list');
  const block = document.createElement('div');
  block.className  = 'med-block';
  block.id         = `med-block-${id}`;
  block.dataset.id = id;

  block.innerHTML = `
    <div class="med-block__header">
      <span class="med-block__label" id="med-label-${id}">
        Medicamento ${medIds.length}
      </span>
      <button
        type="button"
        class="btn btn--remove"
        onclick="removeMedBlock(${id})"
        aria-label="Remover medicamento ${medIds.length}"
      >
        ✕ remover
      </button>
    </div>
    <textarea
      id="med-text-${id}"
      class="field-input"
      rows="3"
      maxlength="${CHAR_LIMIT}"
      oninput="handleMedInput(${id})"
    ></textarea>
    <div class="med-block__counter" id="med-counter-${id}" aria-live="polite">
      0 / ${CHAR_LIMIT}
    </div>
  `;

  list.appendChild(block);
  updatePreview();
}

/**
 * Remove um bloco de medicamento e renumera os restantes
 * @param {number} id - ID do bloco a remover
 */
function removeMedBlock(id) {
  const index = medIds.indexOf(id);
  if (index > -1) medIds.splice(index, 1);

  document.getElementById(`med-block-${id}`)?.remove();
  renumberMedBlocks();
  updatePreview();
}

/** Renumera os rótulos dos blocos após uma remoção */
function renumberMedBlocks() {
  medIds.forEach((id, index) => {
    const label = document.getElementById(`med-label-${id}`);
    if (label) label.textContent = `Medicamento ${index + 1}`;
  });
}

/**
 * Atualiza o contador de caracteres de um bloco
 * @param {number} id - ID do bloco
 */
function handleMedInput(id) {
  const textarea = document.getElementById(`med-text-${id}`);
  const counter  = document.getElementById(`med-counter-${id}`);
  if (!textarea || !counter) return;

  const len = textarea.value.length;
  counter.textContent = `${len} / ${CHAR_LIMIT}`;
  counter.classList.remove('med-block__counter--warn', 'med-block__counter--over');

  if (len >= CHAR_LIMIT) {
    counter.classList.add('med-block__counter--over');
  } else if (len >= CHAR_LIMIT * 0.8) {
    counter.classList.add('med-block__counter--warn');
  }

  updatePreview();
}

/* ============================================================
   PRÉ-VISUALIZAÇÃO
   ============================================================ */

/** Atualiza ambas as vias do receituário com os dados do formulário */
function updatePreview() {
  const patientName = getInputValue('patient-name');
  const dateValue   = document.getElementById('date-input')?.value ?? '';
  const dateLabel   = formatDatePT(dateValue);
  const medications = collectMedications();

  // Aplica nas duas vias
  ['copy-1', 'copy-2'].forEach(copyId => {
    setTextContent(`${copyId}-patient`, patientName || '—');
    setTextContent(`${copyId}-date`,    dateLabel);
    renderMedBoxes(`${copyId}-meds`,    medications);
  });
}

/**
 * Coleta o conteúdo de todos os blocos de medicamento ativos
 * @returns {string[]}
 */
function collectMedications() {
  return medIds.map(id => {
    const textarea = document.getElementById(`med-text-${id}`);
    return textarea ? textarea.value.trim() : '';
  });
}

/**
 * Renderiza os balões de medicamento no receituário
 * @param {string} containerId
 * @param {string[]} medications
 */
function renderMedBoxes(containerId, medications) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (medications.length === 0) {
    container.innerHTML = '<div class="receipt-med-box receipt-med-box--empty"></div>';
    return;
  }

  medications.forEach(text => {
    const box = document.createElement('div');
    box.className = `receipt-med-box${text ? '' : ' receipt-med-box--empty'}`;
    box.style.flex = '1';
    box.textContent = text;
    container.appendChild(box);
  });
}

/* ============================================================
   FORMATAÇÃO DE DATA
   ============================================================ */

/**
 * Converte uma string de data ISO (YYYY-MM-DD) para o formato
 * "Rio do Pires, D de mês de YYYY"
 * @param {string} isoDate
 * @returns {string}
 */
function formatDatePT(isoDate) {
  if (!isoDate) return '';

  const [year, month, day] = isoDate.split('-').map(Number);
  const monthName = MONTHS_PT[month - 1];

  return `Rio do Pires, ${day} de ${monthName} de ${year}`;
}

/* ============================================================
   AÇÕES
   ============================================================ */

/** Limpa o formulário e restaura o estado inicial */
function clearForm() {
  const confirmed = confirm('Limpar dados do paciente e medicamentos?');
  if (!confirmed) return;

  const patientInput = document.getElementById('patient-name');
  if (patientInput) patientInput.value = '';

  document.getElementById('med-list').innerHTML = '';
  medCount = 0;
  medIds   = [];

  addMedBlock();
  updatePreview();
}

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

/**
 * Retorna o valor de um input, sem espaços extras
 * @param {string} id
 * @returns {string}
 */
function getInputValue(id) {
  return document.getElementById(id)?.value.trim() ?? '';
}

/**
 * Define o textContent de um elemento pelo ID
 * @param {string} id
 * @param {string} text
 */
function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
