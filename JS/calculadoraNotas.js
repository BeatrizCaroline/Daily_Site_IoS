/* ══════════════════════════════════════
   TRADUÇÕES
══════════════════════════════════════ */
const i18n = {
  pt: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Acadêmico', menu_trabalho:'Trabalho',
    dd_profile:'Meu perfil', dd_settings:'Configurações', dd_logout:'Sair',
    cn_title:'Calculadora de Notas', cn_sub:'Simule médias, metas e veja quanto precisa tirar na próxima prova',
    btn_new_disciplina:'Nova disciplina', btn_clear_all:'Limpar tudo',
    info_title:'Como funciona?',
    info_p1:'Adicione disciplinas, insira suas notas e pesos. A calculadora mostrará automaticamente sua média e o quanto você precisa tirar na prova final.',
    info_l1:'📝 Cada nota pode ter um peso diferente (ex: prova vale 2×, trabalho vale 1×)',
    info_l2:'🎯 Defina uma meta de aprovação para ver o que precisa na próxima prova',
    info_l3:'📊 O resumo geral mostra sua situação em todas as disciplinas',
    cn_empty:'Nenhuma disciplina adicionada ainda.',
    btn_add_first:'Adicionar primeira disciplina',
    summary_title:'Resumo Geral',
    placar_ok:'Aprovado', placar_risco:'Em risco', placar_rep:'Reprovado',
    media_geral:'Média geral',
    tip_bold:'💡 Dica:', tip_text:' Adicione pesos diferentes às suas avaliações para uma média mais precisa.',
    modal_add_title:'Nova disciplina', modal_edit_title:'Editar disciplina',
    label_disciplina_name:'Nome da disciplina', ph_disciplina_name:'Ex: Matemática, Física…',
    label_media_min:'Média para aprovação', label_scale:'Escala de notas',
    scale_10:'0 – 10', scale_100:'0 – 100', label_color:'Cor',
    btn_cancel:'Cancelar', btn_save:'Salvar',
    modal_nota_title:'Adicionar avaliação',
    label_nota_name:'Nome da avaliação', ph_nota_name:'Ex: Prova 1, Trabalho…',
    label_nota_valor:'Nota', label_nota_peso:'Peso', label_nota_tipo:'Tipo',
    tipo_prova:'Prova', tipo_trabalho:'Trabalho', tipo_quiz:'Quiz', tipo_outro:'Outro',
    btn_save_nota:'Salvar nota',
    modal_sim_title:'Quanto preciso tirar?',
    sim_peso_label:'Peso da próxima avaliação', btn_calc:'Calcular',
    btn_add_nota:'+ Nota', btn_simulator:'🎯 Simular', btn_edit:'Editar', btn_delete:'Excluir',
    notas_empty:'Nenhuma nota cadastrada.',
    media_label:'Média:', meta_label:'Meta:', status_ok:'✓ Aprovado', status_risco:'⚠ Em risco', status_rep:'✗ Reprovado', status_nd:'Sem notas',
    sim_current_media:'Média atual:', sim_meta:'Meta de aprovação:', sim_need:'Para atingir a meta com peso',
    sim_impossible:'Impossível atingir a meta com as notas atuais.',
    sim_already:'Você já atingiu a meta! Continue assim.',
    tip_sim_ok:'Você está aprovado em todas as disciplinas. 🎉',
    tip_sim_risco:'Você tem disciplinas em risco. Foque nelas!',
    tip_sim_rep:'Atenção: você está reprovado em algumas disciplinas.',
    tip_sim_empty:'Adicione notas para ver sua situação.',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Académico', menu_trabalho:'Trabajo',
    dd_profile:'Mi perfil', dd_settings:'Configuración', dd_logout:'Salir',
    cn_title:'Calculadora de Notas', cn_sub:'Simula promedios, metas y ve cuánto necesitas en el próximo examen',
    btn_new_disciplina:'Nueva materia', btn_clear_all:'Limpiar todo',
    info_title:'¿Cómo funciona?',
    info_p1:'Agrega materias, ingresa tus notas y pesos. La calculadora mostrará automáticamente tu promedio.',
    info_l1:'📝 Cada nota puede tener un peso diferente',
    info_l2:'🎯 Define una meta de aprobación',
    info_l3:'📊 El resumen general muestra tu situación',
    cn_empty:'Ninguna materia agregada aún.',
    btn_add_first:'Agregar primera materia',
    summary_title:'Resumen General',
    placar_ok:'Aprobado', placar_risco:'En riesgo', placar_rep:'Reprobado',
    media_geral:'Promedio general',
    tip_bold:'💡 Consejo:', tip_text:' Agrega pesos diferentes para un promedio más preciso.',
    modal_add_title:'Nueva materia', modal_edit_title:'Editar materia',
    label_disciplina_name:'Nombre de la materia', ph_disciplina_name:'Ej: Matemáticas, Física…',
    label_media_min:'Promedio para aprobar', label_scale:'Escala de notas',
    scale_10:'0 – 10', scale_100:'0 – 100', label_color:'Color',
    btn_cancel:'Cancelar', btn_save:'Guardar',
    modal_nota_title:'Agregar evaluación',
    label_nota_name:'Nombre de la evaluación', ph_nota_name:'Ej: Examen 1, Trabajo…',
    label_nota_valor:'Nota', label_nota_peso:'Peso', label_nota_tipo:'Tipo',
    tipo_prova:'Examen', tipo_trabalho:'Trabajo', tipo_quiz:'Quiz', tipo_outro:'Otro',
    btn_save_nota:'Guardar nota',
    modal_sim_title:'¿Cuánto necesito sacar?',
    sim_peso_label:'Peso de la próxima evaluación', btn_calc:'Calcular',
    btn_add_nota:'+ Nota', btn_simulator:'🎯 Simular', btn_edit:'Editar', btn_delete:'Eliminar',
    notas_empty:'No hay notas registradas.',
    media_label:'Promedio:', meta_label:'Meta:', status_ok:'✓ Aprobado', status_risco:'⚠ En riesgo', status_rep:'✗ Reprobado', status_nd:'Sin notas',
    sim_current_media:'Promedio actual:', sim_meta:'Meta de aprobación:', sim_need:'Para alcanzar la meta con peso',
    sim_impossible:'Imposible alcanzar la meta con las notas actuales.',
    sim_already:'¡Ya alcanzaste la meta! Sigue así.',
    tip_sim_ok:'¡Estás aprobado en todas las materias! 🎉',
    tip_sim_risco:'Tienes materias en riesgo. ¡Enfócate en ellas!',
    tip_sim_rep:'Atención: estás reprobado en algunas materias.',
    tip_sim_empty:'Agrega notas para ver tu situación.',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
  },
  en: {
    menu_clima:'Weather', menu_domestico:'Home', menu_academico:'Academic', menu_trabalho:'Work',
    dd_profile:'My profile', dd_settings:'Settings', dd_logout:'Sign out',
    cn_title:'Grade Calculator', cn_sub:'Simulate averages, goals and see what you need on your next exam',
    btn_new_disciplina:'New subject', btn_clear_all:'Clear all',
    info_title:'How does it work?',
    info_p1:'Add subjects, enter your grades and weights. The calculator will automatically show your average.',
    info_l1:'📝 Each grade can have a different weight',
    info_l2:'🎯 Set a passing goal to see what you need next',
    info_l3:'📊 The summary shows your status across all subjects',
    cn_empty:'No subjects added yet.',
    btn_add_first:'Add first subject',
    summary_title:'Overall Summary',
    placar_ok:'Passing', placar_risco:'At risk', placar_rep:'Failing',
    media_geral:'Overall average',
    tip_bold:'💡 Tip:', tip_text:' Add different weights for a more accurate average.',
    modal_add_title:'New subject', modal_edit_title:'Edit subject',
    label_disciplina_name:'Subject name', ph_disciplina_name:'E.g. Math, Physics…',
    label_media_min:'Passing average', label_scale:'Grade scale',
    scale_10:'0 – 10', scale_100:'0 – 100', label_color:'Color',
    btn_cancel:'Cancel', btn_save:'Save',
    modal_nota_title:'Add assessment',
    label_nota_name:'Assessment name', ph_nota_name:'E.g. Test 1, Assignment…',
    label_nota_valor:'Grade', label_nota_peso:'Weight', label_nota_tipo:'Type',
    tipo_prova:'Test', tipo_trabalho:'Assignment', tipo_quiz:'Quiz', tipo_outro:'Other',
    btn_save_nota:'Save grade',
    modal_sim_title:'What do I need to score?',
    sim_peso_label:'Weight of next assessment', btn_calc:'Calculate',
    btn_add_nota:'+ Grade', btn_simulator:'🎯 Simulate', btn_edit:'Edit', btn_delete:'Delete',
    notas_empty:'No grades registered yet.',
    media_label:'Average:', meta_label:'Goal:', status_ok:'✓ Passing', status_risco:'⚠ At risk', status_rep:'✗ Failing', status_nd:'No grades',
    sim_current_media:'Current average:', sim_meta:'Passing goal:', sim_need:'To reach the goal with weight',
    sim_impossible:'Impossible to reach the goal with current grades.',
    sim_already:'You already reached the goal! Keep it up.',
    tip_sim_ok:'You are passing all subjects! 🎉',
    tip_sim_risco:'You have subjects at risk. Focus on them!',
    tip_sim_rep:'Warning: you are failing some subjects.',
    tip_sim_empty:'Add grades to see your situation.',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = localStorage.getItem('daily-lang') || 'pt';
function tr(k) { return (i18n[currentLang] || {})[k] || k; }

/* ══════════════════════════════════════
   DADOS
══════════════════════════════════════ */
let disciplinas = [];
let editingDiscId = null;
let notaTargetId  = null;
let simTargetId   = null;

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function load() {
  try { disciplinas = JSON.parse(localStorage.getItem('daily-notas') || '[]'); } catch { disciplinas = []; }
}
function save() { localStorage.setItem('daily-notas', JSON.stringify(disciplinas)); }

/* ── CÁLCULO DE MÉDIA PONDERADA ── */
function calcMedia(disc) {
  if (!disc.notas || disc.notas.length === 0) return null;
  let sumPP = 0, sumP = 0;
  disc.notas.forEach(n => { sumPP += n.valor * n.peso; sumP += n.peso; });
  return sumP === 0 ? null : sumPP / sumP;
}

function getStatus(media, meta, scale) {
  if (media === null) return 'nd';
  const metaAdj = meta; // ambos já na mesma escala
  const pct = media / scale;
  const metaPct = metaAdj / scale;
  if (pct >= metaPct) return 'ok';
  if (pct >= metaPct * 0.85) return 'risco';
  return 'rep';
}

/* ══════════════════════════════════════
   ACESSIBILIDADE / TEMA / FONTE
══════════════════════════════════════ */
const html = document.documentElement;

/* Dark mode */
const themeBtn = document.getElementById('themeBtn');
function setTheme(t) { html.dataset.theme=t; localStorage.setItem('daily-theme',t); themeBtn.classList.toggle('is-on',t==='dark'); }
themeBtn.addEventListener('click', ()=>setTheme(html.dataset.theme==='dark'?'light':'dark'));
setTheme(localStorage.getItem('daily-theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));

/* Fonte */
const fontLevels=['sm','md','lg','xl']; let fontIdx=1;
function applyFont(i){fontIdx=Math.max(0,Math.min(3,i));html.dataset.font=fontLevels[fontIdx];localStorage.setItem('daily-font',fontIdx);}
document.getElementById('btnFontDecrease').addEventListener('click',()=>applyFont(fontIdx-1));
document.getElementById('btnFontNormal').addEventListener('click',()=>applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click',()=>applyFont(fontIdx+1));
const sf=localStorage.getItem('daily-font'); if(sf!==null)applyFont(Number(sf));

/* Contraste */
const btnContrast=document.getElementById('btnContrast');
let hc=localStorage.getItem('daily-hc')==='1';
function applyContrast(on){hc=on;document.body.classList.toggle('hc',on);btnContrast.classList.toggle('is-on',on);localStorage.setItem('daily-hc',on?'1':'');}
btnContrast.addEventListener('click',()=>applyContrast(!hc));
applyContrast(hc);

/* Idioma */
document.querySelectorAll('.lang-btn').forEach(btn=>
  btn.addEventListener('click',()=>{
    currentLang=btn.dataset.lang;
    localStorage.setItem('daily-lang',currentLang);
    applyTranslations(currentLang);
  })
);

function applyTranslations(lang) {
  currentLang=lang;
  document.documentElement.lang={pt:'pt-BR',es:'es',en:'en'}[lang]||'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n; if(i18n[lang][k]!==undefined)el.innerHTML=i18n[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k=el.dataset.i18nPh; if(i18n[lang][k]!==undefined)el.placeholder=i18n[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  renderAll();
}

/* Saudação */
function updateGreeting() {
  const now=new Date(); const h=now.getHours();
  const g={pt:h<12?'Bom dia':h<18?'Boa tarde':'Boa noite',es:h<12?'Buenos días':h<18?'Buenas tardes':'Buenas noches',en:h<12?'Good morning':h<18?'Good afternoon':'Good evening'};
  const el=document.getElementById('greetingText');
  if(el) el.textContent=`${g[currentLang]} 👋`;
  const loc={pt:'pt-BR',es:'es-ES',en:'en-US'};
  const ds=now.toLocaleDateString(loc[currentLang],{weekday:'long',day:'numeric',month:'long'});
  const de=document.getElementById('greetingDate');
  if(de) de.textContent=ds.charAt(0).toUpperCase()+ds.slice(1);
}

/* Avatar dropdown */
const avatarBtn=document.getElementById('avatarBtn');
const avatarDropdown=document.getElementById('avatarDropdown');
avatarBtn?.addEventListener('click',e=>{
  e.stopPropagation();
  const open=avatarDropdown.classList.toggle('is-open');
  avatarBtn.setAttribute('aria-expanded',open?'true':'false');
});
document.addEventListener('click',()=>{avatarDropdown?.classList.remove('is-open');avatarBtn?.setAttribute('aria-expanded','false');});

/* Sidebar */
const sidebar=document.getElementById('sidebar');
document.getElementById('sidebarCollapseBtn')?.addEventListener('click',()=>{
  sidebar.classList.toggle('is-collapsed');
  localStorage.setItem('daily-sidebar-collapsed',sidebar.classList.contains('is-collapsed')?'1':'');
});
if(localStorage.getItem('daily-sidebar-collapsed')==='1')sidebar?.classList.add('is-collapsed');

/* ── TOAST ── */
let toastTimer=null;
function showToast(msg,type=''){
  const el=document.getElementById('cnToast');
  el.textContent=msg; el.className='cn-toast is-visible'+(type?` is-${type}`:'');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('is-visible'),2800);
}

/* ══════════════════════════════════════
   RENDERIZAÇÃO
══════════════════════════════════════ */
function renderAll() {
  renderDisciplinas();
  renderSumario();
}

function renderDisciplinas() {
  const list  = document.getElementById('disciplinasList');
  const empty = document.getElementById('cnEmpty');
  list.innerHTML = '';

  if (disciplinas.length === 0) {
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  disciplinas.forEach(disc => {
    const media    = calcMedia(disc);
    const status   = getStatus(media, disc.mediaMin, disc.scale);
    const mediaStr = media !== null ? (disc.scale === 100 ? media.toFixed(1) : media.toFixed(2)) : '--';
    const pct      = media !== null ? Math.min(100, (media / disc.scale) * 100) : 0;
    const barColor = status === 'ok' ? 'var(--green)' : status === 'risco' ? '#e07b2a' : status === 'rep' ? '#e03a3a' : 'var(--border)';
    const statusLabel = tr(`status_${status}`);

    const card = document.createElement('div');
    card.className = 'cn-disciplina-card' + (disc.isOpen ? ' is-open' : '');
    card.dataset.id = disc.id;

    card.innerHTML = `
      <div class="cn-disc-header" role="button" tabindex="0" aria-expanded="${disc.isOpen?'true':'false'}" aria-controls="body-${disc.id}" aria-label="${disc.name}">
        <span class="cn-disc-color-dot" style="background:${disc.color}" aria-hidden="true"></span>
        <div class="cn-disc-name-wrap">
          <div class="cn-disc-name">${escHtml(disc.name)}</div>
          <div class="cn-disc-scale" aria-label="Escala 0 a ${disc.scale}">${tr('meta_label')} ${disc.mediaMin} / Escala 0–${disc.scale}</div>
        </div>
        <span class="cn-disc-media-badge ${status}" aria-label="Média ${mediaStr}">${mediaStr}</span>
        <span class="cn-disc-status-pill ${status}" aria-label="${statusLabel}">${statusLabel}</span>
        <div class="cn-disc-actions" role="toolbar" aria-label="Ações da disciplina">
          <button class="cn-btn cn-btn--ghost cn-btn--icon btn-edit-disc" data-id="${disc.id}" aria-label="Editar disciplina ${escHtml(disc.name)}" title="${tr('btn_edit')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </button>
          <button class="cn-btn cn-btn--ghost cn-btn--icon btn-del-disc" data-id="${disc.id}" aria-label="Excluir disciplina ${escHtml(disc.name)}" title="${tr('btn_delete')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
        <span class="cn-disc-chevron" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </div>

      <div class="cn-disc-body" id="body-${disc.id}" aria-hidden="${disc.isOpen?'false':'true'}">

        <div class="cn-disc-progress-wrap" aria-label="Progresso em relação à meta">
          <div class="cn-disc-progress-label">
            <span>${tr('media_label')} ${mediaStr}</span>
            <span>${tr('meta_label')} ${disc.mediaMin}</span>
          </div>
          <div class="cn-disc-progress-bar" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso da média">
            <div class="cn-disc-progress-fill" style="width:${pct}%;background:${barColor}"></div>
          </div>
        </div>

        <div class="cn-notas-list" aria-label="Lista de notas">
          ${disc.notas && disc.notas.length > 0
            ? disc.notas.map(n => {
                const nStatus = n.valor >= disc.mediaMin ? 'ok' : n.valor >= disc.mediaMin * 0.85 ? 'mid' : 'rep';
                const tipoIcon = { prova:'📝', trabalho:'📋', quiz:'⚡', outro:'📌' }[n.tipo] || '📌';
                return `
                  <div class="cn-nota-row" role="listitem">
                    <span class="cn-nota-tipo-icon" aria-hidden="true">${tipoIcon}</span>
                    <span class="cn-nota-name">${escHtml(n.name)}</span>
                    <span class="cn-nota-valor ${nStatus}" aria-label="Nota ${n.valor}">${n.valor}</span>
                    <span class="cn-nota-peso" aria-label="Peso ${n.peso}">×${n.peso}</span>
                    <button class="cn-nota-del btn-del-nota" data-disc="${disc.id}" data-nota="${n.id}" aria-label="Remover nota ${escHtml(n.name)}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>`;
              }).join('')
            : `<div class="cn-notas-empty" role="status">${tr('notas_empty')}</div>`
          }
        </div>

        <div class="cn-disc-card-actions">
          <button class="cn-btn cn-btn--primary btn-add-nota" data-id="${disc.id}" aria-label="Adicionar nota em ${escHtml(disc.name)}">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            ${tr('btn_add_nota')}
          </button>
          <button class="cn-btn cn-btn--ghost btn-sim" data-id="${disc.id}" aria-label="Simular nota necessária em ${escHtml(disc.name)}">
            ${tr('btn_simulator')}
          </button>
        </div>
      </div>
    `;

    /* Eventos do card */
    const header = card.querySelector('.cn-disc-header');
    header.addEventListener('click', e => {
      if (e.target.closest('.cn-disc-actions')) return;
      toggleDisc(disc.id);
    });
    header.addEventListener('keydown', e => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.cn-disc-actions')) { e.preventDefault(); toggleDisc(disc.id); }
    });

    card.querySelector('.btn-edit-disc').addEventListener('click', e => { e.stopPropagation(); openEditDisc(disc.id); });
    card.querySelector('.btn-del-disc').addEventListener('click',  e => { e.stopPropagation(); deleteDisc(disc.id); });
    card.querySelector('.btn-add-nota').addEventListener('click',  e => { e.stopPropagation(); openNotaModal(disc.id); });
    card.querySelector('.btn-sim').addEventListener('click',       e => { e.stopPropagation(); openSimModal(disc.id); });
    card.querySelectorAll('.btn-del-nota').forEach(btn =>
      btn.addEventListener('click', e => { e.stopPropagation(); deleteNota(btn.dataset.disc, btn.dataset.nota); })
    );

    list.appendChild(card);
  });
}

function toggleDisc(id) {
  const disc = disciplinas.find(d => d.id === id);
  if (disc) { disc.isOpen = !disc.isOpen; save(); renderDisciplinas(); }
}

function renderSumario() {
  let ok=0, risco=0, rep=0, somaMedias=0, count=0;
  const bars = document.getElementById('cnBars');
  bars.innerHTML = '';

  disciplinas.forEach(disc => {
    const media  = calcMedia(disc);
    const status = getStatus(media, disc.mediaMin, disc.scale);
    if (status === 'ok')    ok++;
    else if (status === 'risco') risco++;
    else if (status === 'rep')   rep++;

    if (media !== null) { somaMedias += (media / disc.scale) * 10; count++; }

    // Barra por disciplina
    const pct   = media !== null ? Math.min(100, (media / disc.scale) * 100) : 0;
    const color = status === 'ok' ? 'var(--green)' : status === 'risco' ? '#e07b2a' : status === 'rep' ? '#e03a3a' : 'var(--border)';
    const mediaStr = media !== null ? (disc.scale===100?media.toFixed(1):media.toFixed(2)) : '--';
    const row = document.createElement('div');
    row.className = 'cn-bar-row';
    row.setAttribute('aria-label', `${disc.name}: média ${mediaStr}`);
    row.innerHTML = `
      <div class="cn-bar-label">
        <span style="color:${disc.color};font-weight:700">${escHtml(disc.name)}</span>
        <span style="color:${color}">${mediaStr}</span>
      </div>
      <div class="cn-bar-track" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100">
        <div class="cn-bar-fill" style="width:${pct}%;background:${color}"></div>
      </div>`;
    bars.appendChild(row);
  });

  document.getElementById('placarOk').textContent    = ok;
  document.getElementById('placarRisco').textContent = risco;
  document.getElementById('placarRep').textContent   = rep;

  const mgEl = document.getElementById('mediaGeral');
  mgEl.textContent = count > 0 ? (somaMedias / count).toFixed(2) : '--';

  // Dica situacional
  const tipEl  = document.getElementById('cnSummaryTip');
  const tipIcon = document.getElementById('cnTipIcon');
  const tipText = document.getElementById('cnTipText');
  if (disciplinas.length === 0) {
    tipEl.style.display = 'none';
  } else {
    tipEl.style.display = 'flex';
    if (rep > 0)       { tipIcon.textContent='⚠️'; tipText.textContent=tr('tip_sim_rep'); }
    else if (risco > 0){ tipIcon.textContent='📌'; tipText.textContent=tr('tip_sim_risco'); }
    else if (ok > 0)   { tipIcon.textContent='🎉'; tipText.textContent=tr('tip_sim_ok'); }
    else               { tipIcon.textContent='💡'; tipText.textContent=tr('tip_sim_empty'); }
  }
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════
   MODAL: DISCIPLINA (add / edit)
══════════════════════════════════════ */
let selectedColor = '#4150dd';

function openAddDisc() {
  editingDiscId = null;
  document.getElementById('disciplinaModalTitle').textContent = tr('modal_add_title');
  document.getElementById('modalDisciplinaName').value = '';
  document.getElementById('modalMediaMin').value = '6';
  document.getElementById('modalScale').value = '10';
  selectedColor = '#4150dd';
  document.querySelectorAll('.cn-color-opt').forEach(b => b.classList.toggle('active', b.dataset.color === selectedColor));
  openModal('disciplinaModalOverlay');
  setTimeout(() => document.getElementById('modalDisciplinaName').focus(), 80);
}

function openEditDisc(id) {
  const disc = disciplinas.find(d => d.id === id);
  if (!disc) return;
  editingDiscId = id;
  document.getElementById('disciplinaModalTitle').textContent = tr('modal_edit_title');
  document.getElementById('modalDisciplinaName').value = disc.name;
  document.getElementById('modalMediaMin').value = disc.mediaMin;
  document.getElementById('modalScale').value = String(disc.scale);
  selectedColor = disc.color;
  document.querySelectorAll('.cn-color-opt').forEach(b => b.classList.toggle('active', b.dataset.color === selectedColor));
  openModal('disciplinaModalOverlay');
  setTimeout(() => document.getElementById('modalDisciplinaName').focus(), 80);
}

document.querySelectorAll('.cn-color-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedColor = btn.dataset.color;
    document.querySelectorAll('.cn-color-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.getElementById('disciplinaModalSave').addEventListener('click', () => {
  const name     = document.getElementById('modalDisciplinaName').value.trim();
  const mediaMin = parseFloat(document.getElementById('modalMediaMin').value) || 6;
  const scale    = parseInt(document.getElementById('modalScale').value) || 10;

  if (!name) { document.getElementById('modalDisciplinaName').focus(); return; }

  if (editingDiscId) {
    const disc = disciplinas.find(d => d.id === editingDiscId);
    if (disc) { disc.name=name; disc.mediaMin=mediaMin; disc.scale=scale; disc.color=selectedColor; }
  } else {
    disciplinas.push({ id:genId(), name, mediaMin, scale, color:selectedColor, notas:[], isOpen:true });
  }
  save(); closeModal('disciplinaModalOverlay'); renderAll();
  showToast(tr('btn_save'), 'success');
});

document.getElementById('disciplinaModalCancel').addEventListener('click', ()=>closeModal('disciplinaModalOverlay'));
document.getElementById('disciplinaModalClose').addEventListener('click', ()=>closeModal('disciplinaModalOverlay'));
document.getElementById('disciplinaModalOverlay').addEventListener('click', e=>{ if(e.target===document.getElementById('disciplinaModalOverlay'))closeModal('disciplinaModalOverlay'); });

document.getElementById('modalDisciplinaName').addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('disciplinaModalSave').click(); });

/* ══════════════════════════════════════
   MODAL: NOTA
══════════════════════════════════════ */
function openNotaModal(discId) {
  notaTargetId = discId;
  const disc = disciplinas.find(d => d.id === discId);
  document.getElementById('notaModalTitle').textContent = `${tr('modal_nota_title')} — ${disc?.name || ''}`;
  document.getElementById('notaName').value  = '';
  document.getElementById('notaValor').value = '';
  document.getElementById('notaPeso').value  = '1';
  document.getElementById('notaTipo').value  = 'prova';
  openModal('notaModalOverlay');
  setTimeout(() => document.getElementById('notaName').focus(), 80);
}

document.getElementById('notaModalSave').addEventListener('click', () => {
  const disc  = disciplinas.find(d => d.id === notaTargetId);
  if (!disc) return;
  const name  = document.getElementById('notaName').value.trim();
  const valor = parseFloat(document.getElementById('notaValor').value);
  const peso  = parseFloat(document.getElementById('notaPeso').value) || 1;
  const tipo  = document.getElementById('notaTipo').value;

  if (!name) { document.getElementById('notaName').focus(); return; }
  if (isNaN(valor) || valor < 0 || valor > disc.scale) {
    document.getElementById('notaValor').focus(); return;
  }

  disc.notas.push({ id:genId(), name, valor, peso, tipo });
  save(); closeModal('notaModalOverlay'); renderAll();
  showToast(tr('btn_save_nota'), 'success');
});

document.getElementById('notaModalCancel').addEventListener('click', ()=>closeModal('notaModalOverlay'));
document.getElementById('notaModalClose').addEventListener('click',  ()=>closeModal('notaModalOverlay'));
document.getElementById('notaModalOverlay').addEventListener('click', e=>{ if(e.target===document.getElementById('notaModalOverlay'))closeModal('notaModalOverlay'); });
document.getElementById('notaValor').addEventListener('keydown', e=>{ if(e.key==='Enter')document.getElementById('notaModalSave').click(); });

/* ══════════════════════════════════════
   MODAL: SIMULADOR
══════════════════════════════════════ */
function openSimModal(discId) {
  simTargetId = discId;
  const disc  = disciplinas.find(d => d.id === discId);
  if (!disc) return;
  const media = calcMedia(disc);
  const mediaStr = media !== null ? (disc.scale===100?media.toFixed(1):media.toFixed(2)) : '--';

  document.getElementById('simInfo').innerHTML = `
    <strong>${tr('sim_current_media')}</strong> ${mediaStr}<br>
    <strong>${tr('sim_meta')}</strong> ${disc.mediaMin} (escala 0–${disc.scale})
  `;
  document.getElementById('simPeso').value = '1';
  document.getElementById('simResult').innerHTML = '';
  document.getElementById('simResult').className = 'cn-sim-result';
  openModal('simModalOverlay');
  setTimeout(() => document.getElementById('simPeso').focus(), 80);
}

document.getElementById('simCalcBtn').addEventListener('click', () => {
  const disc  = disciplinas.find(d => d.id === simTargetId);
  if (!disc) return;
  const peso  = parseFloat(document.getElementById('simPeso').value) || 1;
  const media = calcMedia(disc);
  const resEl = document.getElementById('simResult');

  // Fórmula: (mediaAtual * pesoAtual + notaNova * pesoNovo) / (pesoAtual + pesoNovo) >= meta
  const pesoAtual  = disc.notas.reduce((s,n)=>s+n.peso, 0);
  const somaAtual  = disc.notas.reduce((s,n)=>s+(n.valor*n.peso), 0);
  const metaVal    = disc.mediaMin;

  // notaNova >= (meta * (pesoAtual + peso) - somaAtual) / peso
  const notaNeeded = (metaVal * (pesoAtual + peso) - somaAtual) / peso;

  resEl.className = 'cn-sim-result';
  if (media !== null && media >= metaVal) {
    resEl.innerHTML = `<span class="cn-sim-result__num">✓</span><span class="cn-sim-result__label">${tr('sim_already')}</span>`;
    resEl.classList.add('ok');
  } else if (notaNeeded > disc.scale) {
    resEl.innerHTML = `<span class="cn-sim-result__num">✗</span><span class="cn-sim-result__label">${tr('sim_impossible')}</span>`;
    resEl.classList.add('rep');
  } else {
    const rounded = Math.max(0, notaNeeded).toFixed(2);
    const needPct = notaNeeded / disc.scale;
    const cls     = needPct <= 0.7 ? 'ok' : needPct <= 0.9 ? 'risco' : 'rep';
    resEl.innerHTML = `
      <span class="cn-sim-result__num">${rounded}</span>
      <span class="cn-sim-result__label">${tr('sim_need')} ×${peso}</span>
    `;
    resEl.classList.add(cls);
  }
});

document.getElementById('simModalClose').addEventListener('click', ()=>closeModal('simModalOverlay'));
document.getElementById('simModalOverlay').addEventListener('click', e=>{ if(e.target===document.getElementById('simModalOverlay'))closeModal('simModalOverlay'); });
document.getElementById('simPeso').addEventListener('keydown', e=>{ if(e.key==='Enter')document.getElementById('simCalcBtn').click(); });

/* ══════════════════════════════════════
   OPERAÇÕES
══════════════════════════════════════ */
function deleteDisc(id) {
  const disc = disciplinas.find(d=>d.id===id);
  if (!disc) return;
  if (!confirm(`Excluir "${disc.name}"?`)) return;
  disciplinas = disciplinas.filter(d=>d.id!==id);
  save(); renderAll();
  showToast(tr('btn_delete'), 'error');
}

function deleteNota(discId, notaId) {
  const disc = disciplinas.find(d=>d.id===discId);
  if (!disc) return;
  disc.notas = disc.notas.filter(n=>n.id!==notaId);
  save(); renderAll();
}

/* ══════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════ */
function openModal(id)  { document.getElementById(id).classList.add('is-open'); document.body.style.overflow='hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('is-open'); document.body.style.overflow=''; }

// Fechar com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['disciplinaModalOverlay','notaModalOverlay','simModalOverlay'].forEach(closeModal);
  }
});

/* ══════════════════════════════════════
   BOTÕES GLOBAIS
══════════════════════════════════════ */
document.getElementById('btnNewDisciplina').addEventListener('click', openAddDisc);
document.getElementById('btnEmptyAdd').addEventListener('click', openAddDisc);

document.getElementById('btnClearAll').addEventListener('click', () => {
  if (disciplinas.length === 0) return;
  if (confirm(tr('btn_clear_all') + '?')) {
    disciplinas = []; save(); renderAll();
  }
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
load();
applyTranslations(currentLang);
updateGreeting();