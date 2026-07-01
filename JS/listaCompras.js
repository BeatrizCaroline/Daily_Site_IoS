/* ══════════════════════════════════════
   TRADUÇÕES
══════════════════════════════════════ */
const i18n = {
  pt: {
    lc_title: 'Lista de Compras',
    lc_sub: 'Adicione itens, reordene arrastando e compare preços nos mercados',
    lc_add_ph: 'Adicionar item... ex: leite, arroz 5kg',
    lc_items: 'itens',
    lc_clear_checked: 'Limpar marcados',
    lc_clear_all: 'Limpar tudo',
    lc_empty: 'Sua lista está vazia. Adicione itens acima!',
    lc_cat_all: 'Todos',
    lc_cat_frutas: '🍎 Frutas',
    lc_cat_verduras: '🥦 Verduras',
    lc_cat_laticinios: '🥛 Laticínios',
    lc_cat_carnes: '🥩 Carnes',
    lc_cat_graos: '🌾 Grãos',
    lc_cat_bebidas: '🥤 Bebidas',
    lc_cat_limpeza: '🧴 Limpeza',
    lc_cat_higiene: '🪥 Higiene',
    lc_cat_outros: '📦 Outros',
    price_modal_sub: 'Melhores preços encontrados nos maiores mercados do Brasil',
    price_loading: 'Buscando preços com IA…',
    price_disclaimer: '⚠️ Preços estimados por IA com base em dados de mercado. Confirme no site oficial antes de comprar.',
    price_error: 'Não foi possível buscar os preços. Tente novamente.',
    edit_title: 'Editar item',
    edit_name_label: 'Nome do item',
    edit_qty_label: 'Quantidade',
    edit_cat_label: 'Categoria',
    btn_cancel: 'Cancelar',
    btn_save: 'Salvar',
    qty_label: 'un.',
    copyright: '© 2026 Daily. Todos os direitos reservados.',
    privacy: 'Privacidade', terms: 'Termos', contact: 'Contato',
    lc_summary_title: 'Progresso',
    lc_actions_title: 'Ações',
    lc_tip_bold: 'Dica:',
    lc_tip_text: ' arraste para reordenar. Clique em 💰 para comparar preços.',
  },
  es: {
    lc_title: 'Lista de Compras',
    lc_sub: 'Agrega artículos, reordénalos arrastrando y compara precios en supermercados',
    lc_add_ph: 'Agregar artículo... ej: leche, arroz 5kg',
    lc_items: 'artículos',
    lc_clear_checked: 'Eliminar marcados',
    lc_clear_all: 'Limpiar todo',
    lc_empty: 'Tu lista está vacía. ¡Agrega artículos arriba!',
    lc_cat_all: 'Todos',
    lc_cat_frutas: '🍎 Frutas',
    lc_cat_verduras: '🥦 Verduras',
    lc_cat_laticinios: '🥛 Lácteos',
    lc_cat_carnes: '🥩 Carnes',
    lc_cat_graos: '🌾 Granos',
    lc_cat_bebidas: '🥤 Bebidas',
    lc_cat_limpeza: '🧴 Limpieza',
    lc_cat_higiene: '🪥 Higiene',
    lc_cat_outros: '📦 Otros',
    price_modal_sub: 'Mejores precios encontrados en los principales supermercados de Brasil',
    price_loading: 'Buscando precios con IA…',
    price_disclaimer: '⚠️ Precios estimados por IA. Confirma en el sitio oficial antes de comprar.',
    price_error: 'No se pudieron obtener los precios. Inténtalo de nuevo.',
    edit_title: 'Editar artículo',
    edit_name_label: 'Nombre del artículo',
    edit_qty_label: 'Cantidad',
    edit_cat_label: 'Categoría',
    btn_cancel: 'Cancelar',
    btn_save: 'Guardar',
    qty_label: 'un.',
    copyright: '© 2026 Daily. Todos los derechos reservados.',
    privacy: 'Privacidad', terms: 'Términos', contact: 'Contacto',
    lc_summary_title: 'Progreso',
    lc_actions_title: 'Acciones',
    lc_tip_bold: 'Consejo:',
    lc_tip_text: ' arrastra para reordenar. Haz clic en 💰 para comparar precios.',
  },
  en: {
    lc_title: 'Shopping List',
    lc_sub: 'Add items, reorder by dragging and compare prices at supermarkets',
    lc_add_ph: 'Add item... e.g. milk, 5kg rice',
    lc_items: 'items',
    lc_clear_checked: 'Remove checked',
    lc_clear_all: 'Clear all',
    lc_empty: 'Your list is empty. Add items above!',
    lc_cat_all: 'All',
    lc_cat_frutas: '🍎 Fruits',
    lc_cat_verduras: '🥦 Vegetables',
    lc_cat_laticinios: '🥛 Dairy',
    lc_cat_carnes: '🥩 Meats',
    lc_cat_graos: '🌾 Grains',
    lc_cat_bebidas: '🥤 Drinks',
    lc_cat_limpeza: '🧴 Cleaning',
    lc_cat_higiene: '🪥 Hygiene',
    lc_cat_outros: '📦 Others',
    price_modal_sub: "Best prices found at Brazil's top supermarkets",
    price_loading: 'Searching prices with AI…',
    price_disclaimer: '⚠️ Prices estimated by AI based on market data. Check the official site before buying.',
    price_error: 'Could not fetch prices. Please try again.',
    edit_title: 'Edit item',
    edit_name_label: 'Item name',
    edit_qty_label: 'Quantity',
    edit_cat_label: 'Category',
    btn_cancel: 'Cancel',
    btn_save: 'Save',
    qty_label: 'un.',
    copyright: '© 2026 Daily. All rights reserved.',
    privacy: 'Privacy', terms: 'Terms', contact: 'Contact',
    lc_summary_title: 'Progress',
    lc_actions_title: 'Actions',
    lc_tip_bold: 'Tip:',
    lc_tip_text: ' drag to reorder. Click 💰 to compare prices at supermarkets.',
  }
};

let currentLang = localStorage.getItem('daily-lang') || 'pt';
function tr(k) { return (i18n[currentLang] || {})[k] || k; }

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('daily-lang', lang);
  document.documentElement.lang = { pt: 'pt-BR', es: 'es', en: 'en' }[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[lang][k] !== undefined) el.textContent = i18n[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (i18n[lang][k] !== undefined) el.placeholder = i18n[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  renderList();
}
document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang))
);

/* ── DARK MODE ── */
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
function setTheme(t) { html.dataset.theme = t; localStorage.setItem('daily-theme', t); themeBtn.classList.toggle('is-on', t === 'dark'); }
themeBtn.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(localStorage.getItem('daily-theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

/* ── FONTE ── */
const fontLevels = ['sm', 'md', 'lg', 'xl']; let fontIdx = 1;
function applyFont(i) { fontIdx = Math.max(0, Math.min(3, i)); html.dataset.font = fontLevels[fontIdx]; localStorage.setItem('daily-font', fontIdx); }
document.getElementById('btnFontDecrease').addEventListener('click', () => applyFont(fontIdx - 1));
document.getElementById('btnFontNormal').addEventListener('click', () => applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click', () => applyFont(fontIdx + 1));
const sf = localStorage.getItem('daily-font'); if (sf !== null) applyFont(Number(sf));

/* ── CONTRASTE ── */
const btnContrast = document.getElementById('btnContrast');
let hc = localStorage.getItem('daily-hc') === '1';
function applyContrast(on) { hc = on; document.body.classList.toggle('hc', on); btnContrast.classList.toggle('is-on', on); localStorage.setItem('daily-hc', on ? '1' : ''); }
btnContrast.addEventListener('click', () => applyContrast(!hc));
applyContrast(hc);

/* ── SAUDAÇÃO ── */
function updateGreeting() {
  const now = new Date(); const h = now.getHours();
  const g = { pt: h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite', es: h < 12 ? 'Buenos días' : h < 18 ? 'Buenas tardes' : 'Buenas noches', en: h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening' };
  document.getElementById('greetingText').textContent = `${g[currentLang]}, Gustavo 👋`;
  const loc = { pt: 'pt-BR', es: 'es-ES', en: 'en-US' };
  const ds = now.toLocaleDateString(loc[currentLang], { weekday: 'long', day: 'numeric', month: 'long' });
  document.getElementById('greetingDate').textContent = ds.charAt(0).toUpperCase() + ds.slice(1);
}

/* ── AVATAR ── */
const avatarBtn = document.getElementById('avatarBtn');
const avatarDropdown = document.getElementById('avatarDropdown');
avatarBtn.addEventListener('click', e => { e.stopPropagation(); avatarDropdown.classList.toggle('is-open'); });
document.addEventListener('click', () => avatarDropdown.classList.remove('is-open'));

/* ── SIDEBAR ── */
const sidebar = document.getElementById('sidebar');
const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
sidebarCollapseBtn.addEventListener('click', () => { sidebar.classList.toggle('is-collapsed'); localStorage.setItem('daily-sidebar-collapsed', sidebar.classList.contains('is-collapsed') ? '1' : ''); });
if (localStorage.getItem('daily-sidebar-collapsed') === '1') sidebar.classList.add('is-collapsed');

/* ══════════════════════════════════════
   SUGESTÕES DE PRODUTOS
══════════════════════════════════════ */
const SUGGESTIONS_DB = [
  { name: 'Leite integral', cat: 'laticinios', emoji: '🥛' },
  { name: 'Leite desnatado', cat: 'laticinios', emoji: '🥛' },
  { name: 'Iogurte natural', cat: 'laticinios', emoji: '🥛' },
  { name: 'Queijo mussarela', cat: 'laticinios', emoji: '🧀' },
  { name: 'Manteiga', cat: 'laticinios', emoji: '🧈' },
  { name: 'Requeijão', cat: 'laticinios', emoji: '🧀' },
  { name: 'Arroz branco 5kg', cat: 'graos', emoji: '🌾' },
  { name: 'Arroz integral', cat: 'graos', emoji: '🌾' },
  { name: 'Feijão carioca', cat: 'graos', emoji: '🫘' },
  { name: 'Feijão preto', cat: 'graos', emoji: '🫘' },
  { name: 'Macarrão espaguete', cat: 'graos', emoji: '🍝' },
  { name: 'Farinha de trigo', cat: 'graos', emoji: '🌾' },
  { name: 'Açúcar refinado', cat: 'graos', emoji: '🍬' },
  { name: 'Sal', cat: 'graos', emoji: '🧂' },
  { name: 'Óleo de soja', cat: 'graos', emoji: '🫙' },
  { name: 'Azeite de oliva', cat: 'graos', emoji: '🫙' },
  { name: 'Banana', cat: 'frutas', emoji: '🍌' },
  { name: 'Maçã', cat: 'frutas', emoji: '🍎' },
  { name: 'Laranja', cat: 'frutas', emoji: '🍊' },
  { name: 'Abacate', cat: 'frutas', emoji: '🥑' },
  { name: 'Uva', cat: 'frutas', emoji: '🍇' },
  { name: 'Manga', cat: 'frutas', emoji: '🥭' },
  { name: 'Morango', cat: 'frutas', emoji: '🍓' },
  { name: 'Melancia', cat: 'frutas', emoji: '🍉' },
  { name: 'Alface', cat: 'verduras', emoji: '🥬' },
  { name: 'Tomate', cat: 'verduras', emoji: '🍅' },
  { name: 'Cebola', cat: 'verduras', emoji: '🧅' },
  { name: 'Batata', cat: 'verduras', emoji: '🥔' },
  { name: 'Cenoura', cat: 'verduras', emoji: '🥕' },
  { name: 'Brócolis', cat: 'verduras', emoji: '🥦' },
  { name: 'Pepino', cat: 'verduras', emoji: '🥒' },
  { name: 'Alho', cat: 'verduras', emoji: '🧄' },
  { name: 'Pimentão vermelho', cat: 'verduras', emoji: '🫑' },
  { name: 'Frango inteiro', cat: 'carnes', emoji: '🍗' },
  { name: 'Peito de frango', cat: 'carnes', emoji: '🍗' },
  { name: 'Carne moída', cat: 'carnes', emoji: '🥩' },
  { name: 'Contrafilé', cat: 'carnes', emoji: '🥩' },
  { name: 'Linguiça', cat: 'carnes', emoji: '🌭' },
  { name: 'Bacon', cat: 'carnes', emoji: '🥓' },
  { name: 'Ovo', cat: 'laticinios', emoji: '🥚' },
  { name: 'Água mineral 500ml', cat: 'bebidas', emoji: '💧' },
  { name: 'Refrigerante 2L', cat: 'bebidas', emoji: '🥤' },
  { name: 'Suco de laranja', cat: 'bebidas', emoji: '🍊' },
  { name: 'Cerveja', cat: 'bebidas', emoji: '🍺' },
  { name: 'Café em pó', cat: 'bebidas', emoji: '☕' },
  { name: 'Chá', cat: 'bebidas', emoji: '🍵' },
  { name: 'Detergente', cat: 'limpeza', emoji: '🧴' },
  { name: 'Sabão em pó', cat: 'limpeza', emoji: '🧺' },
  { name: 'Amaciante', cat: 'limpeza', emoji: '🧺' },
  { name: 'Desinfetante', cat: 'limpeza', emoji: '🧴' },
  { name: 'Papel higiênico', cat: 'higiene', emoji: '🧻' },
  { name: 'Shampoo', cat: 'higiene', emoji: '🧴' },
  { name: 'Condicionador', cat: 'higiene', emoji: '🧴' },
  { name: 'Sabonete', cat: 'higiene', emoji: '🧼' },
  { name: 'Pasta de dente', cat: 'higiene', emoji: '🪥' },
  { name: 'Escova de dente', cat: 'higiene', emoji: '🪥' },
  { name: 'Desodorante', cat: 'higiene', emoji: '🧴' },
  { name: 'Absorvente', cat: 'higiene', emoji: '📦' },
  { name: 'Fralda', cat: 'higiene', emoji: '👶' },
  { name: 'Biscoito cream cracker', cat: 'outros', emoji: '🍪' },
  { name: 'Pão de forma', cat: 'outros', emoji: '🍞' },
  { name: 'Margarina', cat: 'laticinios', emoji: '🧈' },
  { name: 'Maionese', cat: 'outros', emoji: '🫙' },
  { name: 'Ketchup', cat: 'outros', emoji: '🫙' },
  { name: 'Mostarda', cat: 'outros', emoji: '🫙' },
  { name: 'Chocolate em pó', cat: 'outros', emoji: '🍫' },
  { name: 'Granola', cat: 'graos', emoji: '🌾' },
  { name: 'Aveia', cat: 'graos', emoji: '🌾' },
];

/* Mapeia categoria → emoji de display */
const CAT_EMOJI = {
  frutas: '🍎', verduras: '🥦', laticinios: '🥛', carnes: '🥩',
  graos: '🌾', bebidas: '🥤', limpeza: '🧴', higiene: '🪥', outros: '📦'
};

function getCatEmoji(cat) { return CAT_EMOJI[cat] || '📦'; }

/* ══════════════════════════════════════
   DADOS DA LISTA
══════════════════════════════════════ */
let items = [];
let filterCat = 'all';
let editingId = null;
let dragSrcIdx = null;

function loadItems() {
  try { items = JSON.parse(localStorage.getItem('daily-shopping-list') || '[]'); } catch { items = []; }
}
function saveItems() {
  localStorage.setItem('daily-shopping-list', JSON.stringify(items));
}
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

/* Tenta inferir categoria pelo nome */
function inferCat(name) {
  const n = name.toLowerCase();
  const rules = [
    { cat: 'laticinios', words: ['leite', 'queijo', 'iogurte', 'manteiga', 'requeijão', 'nata', 'cream', 'creme de leite', 'ovo', 'ovos', 'margarina'] },
    { cat: 'frutas', words: ['banana', 'maçã', 'laranja', 'uva', 'abacate', 'manga', 'morango', 'melancia', 'mamão', 'abacaxi', 'kiwi', 'pera', 'pêssego', 'limão'] },
    { cat: 'verduras', words: ['alface', 'tomate', 'cebola', 'batata', 'cenoura', 'brócolis', 'pepino', 'alho', 'pimentão', 'abobrinha', 'berinjela', 'couve', 'espinafre', 'rúcula', 'acelga'] },
    { cat: 'carnes', words: ['frango', 'carne', 'bife', 'contrafilé', 'picanha', 'costela', 'porco', 'peixe', 'atum', 'sardinha', 'linguiça', 'bacon', 'presunto', 'salsicha'] },
    { cat: 'graos', words: ['arroz', 'feijão', 'lentilha', 'ervilha', 'macarrão', 'massa', 'farinha', 'açúcar', 'sal', 'óleo', 'azeite', 'aveia', 'granola', 'milho', 'trigo'] },
    { cat: 'bebidas', words: ['água', 'refrigerante', 'suco', 'cerveja', 'vinho', 'leite', 'café', 'chá', 'energético', 'isotônico', 'cachaça', 'whisky'] },
    { cat: 'limpeza', words: ['detergente', 'sabão', 'amaciante', 'desinfetante', 'alvejante', 'esponja', 'vassoura', 'rodo', 'pano', 'limpador'] },
    { cat: 'higiene', words: ['shampoo', 'condicionador', 'sabonete', 'pasta', 'escova', 'desodorante', 'absorvente', 'fralda', 'papel higiênico', 'lenço', 'algodão', 'creme', 'perfume'] },
  ];
  for (const rule of rules) {
    if (rule.words.some(w => n.includes(w))) return rule.cat;
  }
  return 'outros';
}

/* ══════════════════════════════════════
   RENDERIZAÇÃO
══════════════════════════════════════ */
function renderList() {
  const list = document.getElementById('lcList');
  const empty = document.getElementById('lcEmpty');
  const visible = filterCat === 'all'
    ? items
    : items.filter(i => i.cat === filterCat);

  document.getElementById('lcTotalCount').textContent = items.length;
  document.getElementById('lcCheckedCount').textContent = items.filter(i => i.checked).length;

  list.innerHTML = '';

  if (visible.length === 0) {
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  visible.forEach(item => {
    const realIdx = items.indexOf(item);
    const li = document.createElement('li');
    li.className = 'lc-item' + (item.checked ? ' is-checked' : '');
    li.dataset.id = item.id;
    li.dataset.idx = realIdx;
    li.draggable = true;

    li.innerHTML = `
      <!-- DRAG HANDLE -->
      <span class="lc-item__drag" title="Arrastar para reordenar" aria-label="Arrastar">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
        </svg>
      </span>

      <!-- CHECKBOX -->
      <span class="lc-item__check ${item.checked ? 'is-checked' : ''}" role="checkbox" aria-checked="${item.checked}" tabindex="0" title="Marcar como comprado"></span>

      <!-- CATEGORIA EMOJI -->
      <span class="lc-item__cat-emoji" title="${item.cat}">${getCatEmoji(item.cat)}</span>

      <!-- TEXTO -->
      <span class="lc-item__text">
        <span class="lc-item__name">${escHtml(item.name)}</span>
        <span class="lc-item__qty">${item.qty} ${tr('qty_label')}</span>
      </span>

      <!-- AÇÕES -->
      <span class="lc-item__actions">
        <!-- Preço -->
        <button class="lc-item__action-btn lc-item__action-btn--price" data-id="${item.id}" title="Comparar preços" aria-label="Comparar preços">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
        <!-- Editar -->
        <button class="lc-item__action-btn lc-item__action-btn--edit" data-id="${item.id}" title="Editar item" aria-label="Editar">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
        </button>
        <!-- Deletar -->
        <button class="lc-item__action-btn lc-item__action-btn--del" data-id="${item.id}" title="Remover item" aria-label="Remover">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </span>
    `;

    // Checkbox click / keyboard
    const chk = li.querySelector('.lc-item__check');
    chk.addEventListener('click', () => toggleCheck(item.id));
    chk.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') toggleCheck(item.id); });

    // Botão preço
    li.querySelector('.lc-item__action-btn--price').addEventListener('click', () => openPriceModal(item));

    // Botão editar
    li.querySelector('.lc-item__action-btn--edit').addEventListener('click', () => openEditModal(item));

    // Botão deletar
    li.querySelector('.lc-item__action-btn--del').addEventListener('click', () => deleteItem(item.id));

    // Drag & Drop
    li.addEventListener('dragstart', onDragStart);
    li.addEventListener('dragover', onDragOver);
    li.addEventListener('dragleave', onDragLeave);
    li.addEventListener('drop', onDrop);
    li.addEventListener('dragend', onDragEnd);

    list.appendChild(li);
  });
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════
   OPERAÇÕES DE LISTA
══════════════════════════════════════ */
function addItem(name, qty, cat) {
  if (!name.trim()) return;
  items.push({ id: genId(), name: name.trim(), qty: qty || 1, cat: cat || inferCat(name), checked: false });
  saveItems();
  renderList();
}

function toggleCheck(id) {
  const item = items.find(i => i.id === id);
  if (item) { item.checked = !item.checked; saveItems(); renderList(); }
}

function deleteItem(id) {
  items = items.filter(i => i.id !== id);
  saveItems();
  renderList();
}

document.getElementById('btnClearChecked').addEventListener('click', () => {
  if (items.filter(i => i.checked).length === 0) return;
  items = items.filter(i => !i.checked);
  saveItems();
  renderList();
});

document.getElementById('btnClearAll').addEventListener('click', () => {
  if (items.length === 0) return;
  if (confirm('Limpar toda a lista?')) { items = []; saveItems(); renderList(); }
});

/* Filtros */
document.querySelectorAll('.lc-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lc-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterCat = btn.dataset.cat;
    renderList();
  });
});

/* ══════════════════════════════════════
   CAMPO DE ADIÇÃO + SUGESTÕES
══════════════════════════════════════ */
const lcAddInput = document.getElementById('lcAddInput');
const lcAddBtn = document.getElementById('lcAddBtn');
const lcQtySelect = document.getElementById('lcQtySelect');
const lcSuggestions = document.getElementById('lcSuggestions');

let sugHighlight = -1;

function showSuggestions(query) {
  const q = query.toLowerCase().trim();
  if (q.length < 1) { closeSuggestions(); return; }

  const matches = SUGGESTIONS_DB
    .filter(s => s.name.toLowerCase().includes(q))
    .slice(0, 8);

  lcSuggestions.innerHTML = '';
  if (matches.length === 0) { closeSuggestions(); return; }

  matches.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'lc-sug-item';
    li.innerHTML = `
      <span class="lc-sug-item__emoji">${s.emoji}</span>
      <span>${escHtml(s.name)}</span>
      <span class="lc-sug-item__cat">${getCatEmoji(s.cat)}</span>
    `;
    li.addEventListener('mousedown', e => {
      e.preventDefault();
      lcAddInput.value = s.name;
      closeSuggestions();
      doAdd();
    });
    lcSuggestions.appendChild(li);
  });

  lcSuggestions.classList.add('is-open');
  sugHighlight = -1;
}

function closeSuggestions() {
  lcSuggestions.classList.remove('is-open');
  lcSuggestions.innerHTML = '';
  sugHighlight = -1;
}

lcAddInput.addEventListener('input', () => showSuggestions(lcAddInput.value));
lcAddInput.addEventListener('blur', () => setTimeout(closeSuggestions, 150));

lcAddInput.addEventListener('keydown', e => {
  const items_sug = lcSuggestions.querySelectorAll('.lc-sug-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    sugHighlight = Math.min(sugHighlight + 1, items_sug.length - 1);
    updateSugHighlight(items_sug);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    sugHighlight = Math.max(sugHighlight - 1, -1);
    updateSugHighlight(items_sug);
  } else if (e.key === 'Enter') {
    if (sugHighlight >= 0 && items_sug[sugHighlight]) {
      lcAddInput.value = items_sug[sugHighlight].querySelector('span:nth-child(2)').textContent;
      closeSuggestions();
    }
    doAdd();
  } else if (e.key === 'Escape') {
    closeSuggestions();
  }
});

function updateSugHighlight(items_sug) {
  items_sug.forEach((li, i) => li.classList.toggle('active', i === sugHighlight));
}

function doAdd() {
  const name = lcAddInput.value.trim();
  if (!name) return;
  const qty = parseInt(lcQtySelect.value) || 1;
  addItem(name, qty, inferCat(name));
  lcAddInput.value = '';
  lcQtySelect.value = '1';
  closeSuggestions();
  lcAddInput.focus();
}

lcAddBtn.addEventListener('click', doAdd);

/* ══════════════════════════════════════
   DRAG & DROP
══════════════════════════════════════ */
function getRealIdx(el) { return parseInt(el.dataset.idx); }

function onDragStart(e) {
  dragSrcIdx = getRealIdx(this);
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', dragSrcIdx);
}

function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('.lc-item').forEach(el => el.classList.remove('drag-over'));
  this.classList.add('drag-over');
}

function onDragLeave() {
  this.classList.remove('drag-over');
}

function onDrop(e) {
  e.preventDefault();
  const targetIdx = getRealIdx(this);
  if (dragSrcIdx === null || dragSrcIdx === targetIdx) return;

  // Reordena o array real
  const moving = items.splice(dragSrcIdx, 1)[0];
  items.splice(targetIdx, 0, moving);
  saveItems();
  renderList();
}

function onDragEnd() {
  document.querySelectorAll('.lc-item').forEach(el => el.classList.remove('dragging', 'drag-over'));
  dragSrcIdx = null;
}

/* ══════════════════════════════════════
   MODAL EDITAR
══════════════════════════════════════ */
const editModalOverlay = document.getElementById('editModalOverlay');
const editNameInput = document.getElementById('editNameInput');
const editQtyInput = document.getElementById('editQtyInput');
const editCatSelect = document.getElementById('editCatSelect');

function openEditModal(item) {
  editingId = item.id;
  editNameInput.value = item.name;
  editQtyInput.value = item.qty;
  editCatSelect.value = item.cat;
  editModalOverlay.classList.add('is-open');
  editNameInput.focus();
}

function closeEditModal() {
  editModalOverlay.classList.remove('is-open');
  editingId = null;
}

document.getElementById('editModalClose').addEventListener('click', closeEditModal);
document.getElementById('editCancelBtn').addEventListener('click', closeEditModal);

document.getElementById('editSaveBtn').addEventListener('click', () => {
  const item = items.find(i => i.id === editingId);
  if (!item) return;
  const name = editNameInput.value.trim();
  if (!name) return;
  item.name = name;
  item.qty = parseInt(editQtyInput.value) || 1;
  item.cat = editCatSelect.value;
  saveItems();
  renderList();
  closeEditModal();
});

editModalOverlay.addEventListener('click', e => { if (e.target === editModalOverlay) closeEditModal(); });

editNameInput.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('editSaveBtn').click(); });

/* ══════════════════════════════════════
   MODAL PREÇOS — Claude AI
══════════════════════════════════════ */
const priceModalOverlay = document.getElementById('priceModalOverlay');
const priceModalItemName = document.getElementById('priceModalItemName');
const priceLoading = document.getElementById('priceLoading');
const priceResults = document.getElementById('priceResults');
const priceError = document.getElementById('priceError');
const priceErrorMsg = document.getElementById('priceErrorMsg');

const MARKETS = [
  { id: 'carrefour', name: 'Carrefour', emoji: '🔵', color: '#004E9A' },
  { id: 'extra', name: 'Extra', emoji: '🔴', color: '#C00' },
  { id: 'atacadao', name: 'Atacadão', emoji: '🟠', color: '#E65800' },
];

function openPriceModal(item) {
  priceModalItemName.textContent = item.name;
  priceLoading.style.display = 'flex';
  priceResults.style.display = 'none';
  priceError.style.display = 'none';
  priceModalOverlay.classList.add('is-open');
  fetchPrices(item.name);
}

function closePriceModal() {
  priceModalOverlay.classList.remove('is-open');
}

document.getElementById('priceModalClose').addEventListener('click', closePriceModal);
priceModalOverlay.addEventListener('click', e => { if (e.target === priceModalOverlay) closePriceModal(); });

async function fetchPrices(productName) {
  try {
    const prompt = `Você é um assistente especialista em preços de supermercados do Brasil.
Para o produto "${productName}", forneça uma estimativa realista de preço atual (2025/2026) nos três maiores supermercados do Brasil: Carrefour, Extra e Atacadão.
Responda SOMENTE com um JSON válido, sem nenhum texto extra, sem markdown, sem backticks, no seguinte formato:
{"carrefour":{"price":"R$ X,XX","detail":"descrição curta do produto, tamanho/marca típica"},"extra":{"price":"R$ X,XX","detail":"descrição curta do produto, tamanho/marca típica"},"atacadao":{"price":"R$ X,XX","detail":"descrição curta do produto, tamanho/marca típica"}}
Use preços realistas baseados em mercado brasileiro atual. O Atacadão costuma ter preço mais baixo por ser atacadista.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) throw new Error('API ' + response.status);
    const data = await response.json();

    let text = data.content.map(c => c.text || '').join('');
    // Remove possíveis backticks/markdown
    text = text.replace(/```json|```/g, '').trim();
    const prices = JSON.parse(text);

    renderPrices(prices, productName);

  } catch (err) {
    priceLoading.style.display = 'none';
    priceError.style.display = 'flex';
    priceErrorMsg.textContent = tr('price_error');
  }
}

function renderPrices(prices, productName) {
  priceLoading.style.display = 'none';
  priceError.style.display = 'none';
  priceResults.style.display = 'block';

  // Descobre o menor preço
  const parsed = MARKETS.map(m => {
    const d = prices[m.id] || {};
    const raw = (d.price || 'R$ 0,00').replace('R$', '').replace(',', '.').trim();
    return { ...m, price: d.price || '—', detail: d.detail || '', numVal: parseFloat(raw) || 999 };
  });
  const minVal = Math.min(...parsed.map(p => p.numVal));

  const container = document.createElement('div');
  container.className = 'price-markets';

  parsed.forEach(m => {
    const isBest = m.numVal === minVal;
    const card = document.createElement('div');
    card.className = 'price-market-card' + (isBest ? ' best-price' : '');
    card.innerHTML = `
      <div class="price-market-logo" style="color:${m.color}">${m.emoji}</div>
      <div class="price-market-info">
        <div class="price-market-name">${m.name}</div>
        <div class="price-market-detail">${escHtml(m.detail)}</div>
      </div>
      <div class="price-market-value">${escHtml(m.price)}</div>
    `;
    container.appendChild(card);
  });

  priceResults.innerHTML = '';
  priceResults.appendChild(container);
}

// Botões do painel lateral (espelham os do header)
document.getElementById('btnQaClearChecked').addEventListener('click', () => {
  items = items.filter(i => !i.checked);
  saveItems(); renderList();
});
document.getElementById('btnQaClearAll').addEventListener('click', () => {
  if (items.length === 0) return;
  if (confirm('Limpar toda a lista?')) { items = []; saveItems(); renderList(); }
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
loadItems();
applyTranslations(currentLang);
updateGreeting();

function renderList() {
  const list    = document.getElementById('lcList');
  const empty   = document.getElementById('lcEmpty');
  const visible = filterCat === 'all'
    ? items
    : items.filter(i => i.cat === filterCat);

  list.innerHTML = '';

  if (visible.length === 0) {
    empty.classList.add('is-visible');
  } else {
    empty.classList.remove('is-visible');
  }

  visible.forEach(item => {
    const realIdx = items.indexOf(item);
    const li = document.createElement('li');
    li.className = 'lc-item' + (item.checked ? ' is-checked' : '');
    li.dataset.id  = item.id;
    li.dataset.idx = realIdx;
    li.draggable   = true;

    li.innerHTML = `
      <span class="lc-item__drag" title="Arrastar para reordenar" aria-label="Arrastar" role="button" tabindex="0">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/></svg>
      </span>
      <span class="lc-item__check ${item.checked ? 'is-checked' : ''}" role="checkbox" aria-checked="${item.checked}" tabindex="0" title="Marcar como comprado"></span>
      <span class="lc-item__cat-emoji" aria-hidden="true" title="${item.cat}">${getCatEmoji(item.cat)}</span>
      <span class="lc-item__text">
        <span class="lc-item__name">${escHtml(item.name)}</span>
        <span class="lc-item__qty">${item.qty} ${tr('qty_label')}</span>
      </span>
      <span class="lc-item__actions">
        <button class="lc-item__action-btn lc-item__action-btn--price" data-id="${item.id}" title="Comparar preços" aria-label="Comparar preços de ${escHtml(item.name)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <button class="lc-item__action-btn lc-item__action-btn--edit" data-id="${item.id}" title="Editar item" aria-label="Editar ${escHtml(item.name)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
        </button>
        <button class="lc-item__action-btn lc-item__action-btn--del" data-id="${item.id}" title="Remover item" aria-label="Remover ${escHtml(item.name)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </span>
    `;

    const chk = li.querySelector('.lc-item__check');
    chk.addEventListener('click', () => toggleCheck(item.id));
    chk.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleCheck(item.id); } });

    li.querySelector('.lc-item__action-btn--price').addEventListener('click', () => openPriceModal(item));
    li.querySelector('.lc-item__action-btn--edit').addEventListener('click',  () => openEditModal(item));
    li.querySelector('.lc-item__action-btn--del').addEventListener('click',   () => deleteItem(item.id));

    li.addEventListener('dragstart', onDragStart);
    li.addEventListener('dragover',  onDragOver);
    li.addEventListener('dragleave', onDragLeave);
    li.addEventListener('drop',      onDrop);
    li.addEventListener('dragend',   onDragEnd);

    list.appendChild(li);
  });

  updateSidePanel();
}

/* ── PAINEL LATERAL: progresso + categorias ── */
function updateSidePanel() {
  const total   = items.length;
  const checked = items.filter(i => i.checked).length;

  // Anel SVG (circunferência = 2π×36 ≈ 226)
  const CIRC = 226;
  const fg   = document.getElementById('lcRingFg');
  const pct  = total === 0 ? 0 : checked / total;
  if (fg) {
    fg.style.strokeDashoffset = CIRC - pct * CIRC;
    fg.style.stroke = pct === 1 ? 'var(--green)' : 'var(--primary)';
  }

  const elChecked = document.getElementById('lcRingChecked');
  const elTotal   = document.getElementById('lcRingTotal');
  const elLabel   = document.getElementById('lcRingLabel');
  if (elChecked) elChecked.textContent = checked;
  if (elTotal)   elTotal.textContent   = `/ ${total}`;
  if (elLabel)   elLabel.textContent   = `${checked} de ${total} ${tr('lc_items')} comprados`;

  // Por categoria
  const catStats = document.getElementById('lcCatStats');
  if (!catStats) return;
  catStats.innerHTML = '';

  const counts = {};
  items.forEach(i => { counts[i.cat] = (counts[i.cat] || 0) + 1; });

  const cats = Object.entries(counts).sort((a,b) => b[1]-a[1]);
  if (cats.length === 0) return;

  cats.forEach(([cat, count]) => {
    const row = document.createElement('div');
    row.className = 'lc-cat-stat-row';
    row.innerHTML = `
      <span class="lc-cat-stat-row__emoji" aria-hidden="true">${getCatEmoji(cat)}</span>
      <span class="lc-cat-stat-row__name">${cat.charAt(0).toUpperCase()+cat.slice(1)}</span>
      <span class="lc-cat-stat-row__count">${count}</span>
    `;
    catStats.appendChild(row);
  });
}