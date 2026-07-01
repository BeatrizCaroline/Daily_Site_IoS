/* ══════════════════════════════════════
   FIREBASE IMPORTS
══════════════════════════════════════ */
import { initializeApp }          from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAnalytics }           from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

/* ── CONFIG ── */
const firebaseConfig = {
  apiKey:            'AIzaSyDdtBpgM3Ri_l27Vp2yg7h6qKEjb4pnhq0',
  authDomain:        'daily-4131c.firebaseapp.com',
  projectId:         'daily-4131c',
  storageBucket:     'daily-4131c.firebasestorage.app',
  messagingSenderId: '596319308806',
  appId:             '1:596319308806:web:a75704e5cd87570ff40787',
  measurementId:     'G-5LHV57CVF4'
};

const app       = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth      = getAuth(app);
const db        = getFirestore(app);
const storage   = getStorage(app);

/* ══════════════════════════════════════
   TRADUÇÕES
══════════════════════════════════════ */
const i18n = {
  pt: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Acadêmico', menu_trabalho:'Trabalho', menu_conta:'Minha Conta',
    dd_profile:'Meu perfil', dd_settings:'Configurações', dd_logout:'Sair',
    breadcrumb_home:'Início', breadcrumb_conta:'Minha Conta',
    loading:'Carregando perfil…',
    tab_perfil:'Perfil', tab_seguranca:'Segurança', tab_plano:'Plano', tab_preferencias:'Preferências',
    perfil_title:'Informações pessoais', perfil_sub:'Atualize seu nome e dados de contato',
    label_name:'Nome completo', label_email:'E-mail', label_phone:'Telefone', label_birth:'Data de nascimento', label_bio:'Bio',
    ph_bio:'Conte um pouco sobre você…', email_hint:'O e-mail não pode ser alterado por aqui',
    btn_save_profile:'Salvar alterações',
    stats_title:'Resumo de uso', stat_tasks:'Tarefas criadas', stat_items:'Itens na lista', stat_days:'Dias usando', stat_lang:'Idioma',
    sec_title:'Alterar senha', sec_sub:'Use uma senha forte com no mínimo 8 caracteres',
    label_current_pass:'Senha atual', label_new_pass:'Nova senha', label_confirm_pass:'Confirmar nova senha',
    btn_change_pass:'Alterar senha',
    session_title:'Sessão atual', session_email:'E-mail verificado', session_last:'Último acesso', session_provider:'Método de login',
    btn_logout:'Sair da conta',
    plan_features_title:'O que está incluído', plan_billing_title:'Faturamento', plan_billing_empty:'Nenhuma cobrança registrada ainda.',
    plan_renewal_prefix:'Próxima renovação:',
    pref_appearance:'Aparência', pref_theme:'Tema', pref_theme_sub:'Escolha entre claro ou escuro',
    pref_font:'Tamanho da fonte', pref_font_sub:'Ajuste o tamanho do texto na interface',
    pref_contrast:'Alto contraste', pref_contrast_sub:'Melhora a visibilidade para usuários com baixa visão',
    pref_lang:'Idioma', pref_lang_sub:'Idioma da interface',
    pref_notifications:'Notificações',
    notif_email:'Notificações por e-mail', notif_email_sub:'Receba atualizações e lembretes por e-mail',
    notif_push:'Notificações push', notif_push_sub:'Alertas do navegador sobre suas tarefas',
    btn_save_prefs:'Salvar preferências',
    danger_title:'Zona de perigo', danger_sub:'Ações irreversíveis para sua conta',
    danger_delete_title:'Excluir conta', danger_delete_desc:'Remove permanentemente sua conta e todos os dados. Esta ação não pode ser desfeita.',
    btn_delete_account:'Excluir minha conta',
    modal_delete_title:'Excluir conta', modal_delete_warn:'Esta ação é permanente e não pode ser desfeita. Todos os seus dados serão apagados.',
    modal_delete_label:'Digite EXCLUIR para confirmar',
    btn_cancel:'Cancelar', btn_delete_confirm:'Excluir conta',
    theme_light:'Claro', theme_dark:'Escuro',
    toast_saved:'✅ Alterações salvas!', toast_pass_changed:'✅ Senha alterada com sucesso!',
    toast_error:'❌ Ocorreu um erro. Tente novamente.',
    toast_pass_mismatch:'❌ As senhas não coincidem.',
    toast_pass_weak:'❌ Senha muito curta. Mínimo 8 caracteres.',
    toast_pass_reauth:'❌ Senha atual incorreta.',
    toast_prefs_saved:'✅ Preferências salvas!',
    toast_photo_saved:'✅ Foto atualizada!',
    strength_weak:'Fraca', strength_fair:'Razoável', strength_good:'Boa', strength_strong:'Forte',
    plan_personal:'Plano Pessoal', plan_trial:'Teste Grátis', plan_corp:'Plano Corporativo',
    badge_since:'Membro desde',
    verified_yes:'Sim ✓', verified_no:'Não ✗',
    provider_email:'E-mail e senha', provider_google:'Google',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Académico', menu_trabalho:'Trabajo', menu_conta:'Mi Cuenta',
    dd_profile:'Mi perfil', dd_settings:'Configuración', dd_logout:'Salir',
    breadcrumb_home:'Inicio', breadcrumb_conta:'Mi Cuenta',
    loading:'Cargando perfil…',
    tab_perfil:'Perfil', tab_seguranca:'Seguridad', tab_plano:'Plan', tab_preferencias:'Preferencias',
    perfil_title:'Información personal', perfil_sub:'Actualiza tu nombre y datos de contacto',
    label_name:'Nombre completo', label_email:'Correo electrónico', label_phone:'Teléfono', label_birth:'Fecha de nacimiento', label_bio:'Bio',
    ph_bio:'Cuéntanos un poco sobre ti…', email_hint:'El correo no puede cambiarse aquí',
    btn_save_profile:'Guardar cambios',
    stats_title:'Resumen de uso', stat_tasks:'Tareas creadas', stat_items:'Artículos en lista', stat_days:'Días usando', stat_lang:'Idioma',
    sec_title:'Cambiar contraseña', sec_sub:'Usa una contraseña fuerte de al menos 8 caracteres',
    label_current_pass:'Contraseña actual', label_new_pass:'Nueva contraseña', label_confirm_pass:'Confirmar nueva contraseña',
    btn_change_pass:'Cambiar contraseña',
    session_title:'Sesión actual', session_email:'Correo verificado', session_last:'Último acceso', session_provider:'Método de inicio',
    btn_logout:'Cerrar sesión',
    plan_features_title:'Qué está incluido', plan_billing_title:'Facturación', plan_billing_empty:'Aún no hay cobros registrados.',
    plan_renewal_prefix:'Próxima renovación:',
    pref_appearance:'Apariencia', pref_theme:'Tema', pref_theme_sub:'Elige entre claro u oscuro',
    pref_font:'Tamaño de fuente', pref_font_sub:'Ajusta el tamaño del texto',
    pref_contrast:'Alto contraste', pref_contrast_sub:'Mejora la visibilidad para usuarios con baja visión',
    pref_lang:'Idioma', pref_lang_sub:'Idioma de la interfaz',
    pref_notifications:'Notificaciones',
    notif_email:'Notificaciones por correo', notif_email_sub:'Recibe actualizaciones y recordatorios',
    notif_push:'Notificaciones push', notif_push_sub:'Alertas del navegador sobre tus tareas',
    btn_save_prefs:'Guardar preferencias',
    danger_title:'Zona de peligro', danger_sub:'Acciones irreversibles para tu cuenta',
    danger_delete_title:'Eliminar cuenta', danger_delete_desc:'Elimina permanentemente tu cuenta y todos los datos.',
    btn_delete_account:'Eliminar mi cuenta',
    modal_delete_title:'Eliminar cuenta', modal_delete_warn:'Esta acción es permanente y no se puede deshacer.',
    modal_delete_label:'Escribe ELIMINAR para confirmar',
    btn_cancel:'Cancelar', btn_delete_confirm:'Eliminar cuenta',
    theme_light:'Claro', theme_dark:'Oscuro',
    toast_saved:'✅ ¡Cambios guardados!', toast_pass_changed:'✅ ¡Contraseña cambiada!',
    toast_error:'❌ Ocurrió un error. Intenta de nuevo.',
    toast_pass_mismatch:'❌ Las contraseñas no coinciden.',
    toast_pass_weak:'❌ Contraseña muy corta. Mínimo 8 caracteres.',
    toast_pass_reauth:'❌ Contraseña actual incorrecta.',
    toast_prefs_saved:'✅ ¡Preferencias guardadas!',
    toast_photo_saved:'✅ ¡Foto actualizada!',
    strength_weak:'Débil', strength_fair:'Regular', strength_good:'Buena', strength_strong:'Fuerte',
    plan_personal:'Plan Personal', plan_trial:'Prueba Gratis', plan_corp:'Plan Corporativo',
    badge_since:'Miembro desde',
    verified_yes:'Sí ✓', verified_no:'No ✗',
    provider_email:'Correo y contraseña', provider_google:'Google',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
  },
  en: {
    menu_clima:'Weather', menu_domestico:'Home', menu_academico:'Academic', menu_trabalho:'Work', menu_conta:'My Account',
    dd_profile:'My profile', dd_settings:'Settings', dd_logout:'Sign out',
    breadcrumb_home:'Home', breadcrumb_conta:'My Account',
    loading:'Loading profile…',
    tab_perfil:'Profile', tab_seguranca:'Security', tab_plano:'Plan', tab_preferencias:'Preferences',
    perfil_title:'Personal information', perfil_sub:'Update your name and contact details',
    label_name:'Full name', label_email:'E-mail', label_phone:'Phone', label_birth:'Date of birth', label_bio:'Bio',
    ph_bio:'Tell us a bit about yourself…', email_hint:'E-mail cannot be changed here',
    btn_save_profile:'Save changes',
    stats_title:'Usage summary', stat_tasks:'Tasks created', stat_items:'List items', stat_days:'Days using', stat_lang:'Language',
    sec_title:'Change password', sec_sub:'Use a strong password with at least 8 characters',
    label_current_pass:'Current password', label_new_pass:'New password', label_confirm_pass:'Confirm new password',
    btn_change_pass:'Change password',
    session_title:'Current session', session_email:'Email verified', session_last:'Last sign-in', session_provider:'Login method',
    btn_logout:'Sign out',
    plan_features_title:'What is included', plan_billing_title:'Billing', plan_billing_empty:'No charges recorded yet.',
    plan_renewal_prefix:'Next renewal:',
    pref_appearance:'Appearance', pref_theme:'Theme', pref_theme_sub:'Choose between light or dark',
    pref_font:'Font size', pref_font_sub:'Adjust the text size in the interface',
    pref_contrast:'High contrast', pref_contrast_sub:'Improves visibility for low-vision users',
    pref_lang:'Language', pref_lang_sub:'Interface language',
    pref_notifications:'Notifications',
    notif_email:'Email notifications', notif_email_sub:'Receive updates and reminders by email',
    notif_push:'Push notifications', notif_push_sub:'Browser alerts about your tasks',
    btn_save_prefs:'Save preferences',
    danger_title:'Danger zone', danger_sub:'Irreversible actions for your account',
    danger_delete_title:'Delete account', danger_delete_desc:'Permanently removes your account and all data. This cannot be undone.',
    btn_delete_account:'Delete my account',
    modal_delete_title:'Delete account', modal_delete_warn:'This action is permanent and cannot be undone. All your data will be deleted.',
    modal_delete_label:'Type DELETE to confirm',
    btn_cancel:'Cancel', btn_delete_confirm:'Delete account',
    theme_light:'Light', theme_dark:'Dark',
    toast_saved:'✅ Changes saved!', toast_pass_changed:'✅ Password changed!',
    toast_error:'❌ An error occurred. Please try again.',
    toast_pass_mismatch:'❌ Passwords do not match.',
    toast_pass_weak:'❌ Password too short. Minimum 8 characters.',
    toast_pass_reauth:'❌ Current password is incorrect.',
    toast_prefs_saved:'✅ Preferences saved!',
    toast_photo_saved:'✅ Photo updated!',
    strength_weak:'Weak', strength_fair:'Fair', strength_good:'Good', strength_strong:'Strong',
    plan_personal:'Personal Plan', plan_trial:'Free Trial', plan_corp:'Corporate Plan',
    badge_since:'Member since',
    verified_yes:'Yes ✓', verified_no:'No ✗',
    provider_email:'Email & password', provider_google:'Google',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = localStorage.getItem('daily-lang') || 'pt';
function tr(k) { return (i18n[currentLang] || {})[k] || k; }

/* ══════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════ */
let currentUser    = null;
let userProfile    = {};
let currentTabId   = 'perfil';

/* ══════════════════════════════════════
   UTILITÁRIOS
══════════════════════════════════════ */
function getInitials(name) {
  if (!name) return '?';
  return name.trim().split(/\s+/).slice(0,2).map(w => w[0].toUpperCase()).join('');
}

function formatDate(dateStr, lang) {
  if (!dateStr) return '--';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString({ pt:'pt-BR', es:'es-ES', en:'en-US' }[lang] || 'pt-BR', { day:'2-digit', month:'long', year:'numeric' });
  } catch { return dateStr; }
}

function maskPhone(v) {
  let d = v.replace(/\D/g,'').slice(0,11);
  if (d.length > 10) d = d.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
  else if (d.length > 6) d = d.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
  else if (d.length > 2) d = d.replace(/(\d{2})(\d{0,5})/,'($1) $2');
  return d;
}

/* ── TOAST ── */
let toastTimer = null;
function showToast(msg, type = '') {
  const el = document.getElementById('mcToast');
  el.textContent = msg;
  el.className = 'mc-toast is-visible' + (type ? ` is-${type}` : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3200);
}

/* ── TRADUÇÕES APLICADAS ── */
function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('daily-lang', lang);
  document.documentElement.lang = { pt:'pt-BR', es:'es', en:'en' }[lang] || 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[lang][k] !== undefined) el.innerHTML = i18n[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (i18n[lang][k] !== undefined) el.placeholder = i18n[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  // Idioma no select de preferências
  const sel = document.getElementById('prefLangSelect');
  if (sel) sel.value = lang;

  // Stat de idioma
  const statLang = document.getElementById('statLang');
  if (statLang) statLang.textContent = lang.toUpperCase();
}

/* ══════════════════════════════════════
   DARK MODE / FONTE / CONTRASTE
   (mantém compatibilidade com home.css)
══════════════════════════════════════ */
const html = document.documentElement;

/* Theme */
const themeBtn = document.getElementById('themeBtn');
function setTheme(t) {
  html.dataset.theme = t;
  localStorage.setItem('daily-theme', t);
  themeBtn.classList.toggle('is-on', t === 'dark');
  document.querySelectorAll('.mc-theme-opt').forEach(b => b.classList.toggle('active', b.dataset.theme === t));
  const contrastToggle = document.getElementById('contrastToggle');
  if (contrastToggle) syncContrastToggle();
}
themeBtn.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(localStorage.getItem('daily-theme') || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

/* Fonte */
const fontLevels = ['sm','md','lg','xl']; let fontIdx = 1;
function applyFont(i) {
  fontIdx = Math.max(0, Math.min(3, i));
  html.dataset.font = fontLevels[fontIdx];
  localStorage.setItem('daily-font', fontIdx);
  document.querySelectorAll('.mc-font-opt').forEach(b => b.classList.toggle('active', b.dataset.font === fontLevels[fontIdx]));
}
document.getElementById('btnFontDecrease').addEventListener('click', () => applyFont(fontIdx - 1));
document.getElementById('btnFontNormal').addEventListener('click',   () => applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click', () => applyFont(fontIdx + 1));
const sf = localStorage.getItem('daily-font'); if (sf !== null) applyFont(Number(sf));

/* Contraste */
const btnContrast = document.getElementById('btnContrast');
let hc = localStorage.getItem('daily-hc') === '1';
function applyContrast(on) {
  hc = on;
  document.body.classList.toggle('hc', on);
  btnContrast.classList.toggle('is-on', on);
  localStorage.setItem('daily-hc', on ? '1' : '');
  syncContrastToggle();
}
function syncContrastToggle() {
  const t = document.getElementById('contrastToggle');
  if (t) { t.setAttribute('aria-checked', hc ? 'true' : 'false'); }
}
btnContrast.addEventListener('click', () => applyContrast(!hc));
applyContrast(hc);

/* ── SAUDAÇÃO ── */
function updateGreeting(name) {
  const now = new Date(); const h = now.getHours();
  const g = { pt: h<12?'Bom dia':h<18?'Boa tarde':'Boa noite', es: h<12?'Buenos días':h<18?'Buenas tardes':'Buenas noches', en: h<12?'Good morning':h<18?'Good afternoon':'Good evening' };
  const firstName = (name || 'Usuário').split(' ')[0];
  const greetEl = document.getElementById('greetingText');
  if (greetEl) greetEl.textContent = `${g[currentLang]}, ${firstName} 👋`;
  const loc = { pt:'pt-BR', es:'es-ES', en:'en-US' };
  const ds = now.toLocaleDateString(loc[currentLang], { weekday:'long', day:'numeric', month:'long' });
  const dateEl = document.getElementById('greetingDate');
  if (dateEl) dateEl.textContent = ds.charAt(0).toUpperCase() + ds.slice(1);
}

/* ── AVATAR DROPDOWN ── */
const avatarBtn = document.getElementById('avatarBtn');
const avatarDropdown = document.getElementById('avatarDropdown');
if (avatarBtn) {
  avatarBtn.addEventListener('click', e => { e.stopPropagation(); avatarDropdown.classList.toggle('is-open'); });
}
document.addEventListener('click', () => avatarDropdown?.classList.remove('is-open'));

/* ── SIDEBAR ── */
const sidebar = document.getElementById('sidebar');
const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
if (sidebarCollapseBtn) {
  sidebarCollapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('is-collapsed');
    localStorage.setItem('daily-sidebar-collapsed', sidebar.classList.contains('is-collapsed') ? '1' : '');
  });
}
if (localStorage.getItem('daily-sidebar-collapsed') === '1') sidebar?.classList.add('is-collapsed');

/* ══════════════════════════════════════
   FIREBASE AUTH — CARREGAR USUÁRIO
══════════════════════════════════════ */
onAuthStateChanged(auth, async user => {
  if (!user) {
    // Não logado → redireciona para login
    window.location.href = 'index.html';
    return;
  }
  currentUser = user;
  await loadUserProfile(user);
  populateUI();
  applyTranslations(currentLang);
  hideLoading();
});

/* ── Carrega ou cria perfil no Firestore ── */
async function loadUserProfile(user) {
  try {
    const docRef = doc(db, 'users', user.uid);
    const snap   = await getDoc(docRef);

    if (snap.exists()) {
      userProfile = snap.data();
    } else {
      // Primeiro acesso: cria documento
      userProfile = {
        uid:         user.uid,
        name:        user.displayName || '',
        email:       user.email || '',
        phone:       '',
        birthDate:   '',
        bio:         '',
        photoURL:    user.photoURL || '',
        plan:        'trial',
        planPeriod:  'mensal',
        createdAt:   serverTimestamp(),
        preferences: {
          theme:       localStorage.getItem('daily-theme') || 'light',
          font:        localStorage.getItem('daily-font')  || '1',
          contrast:    localStorage.getItem('daily-hc')    || '',
          lang:        currentLang,
          notifEmail:  true,
          notifPush:   false,
        }
      };
      await setDoc(docRef, userProfile);
    }

    // Aplica preferências salvas do Firestore
    if (userProfile.preferences) {
      const p = userProfile.preferences;
      if (p.theme) setTheme(p.theme);
      if (p.font !== undefined) applyFont(Number(p.font));
      if (p.contrast === '1') applyContrast(true);
      if (p.lang) { currentLang = p.lang; }
    }

  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
    userProfile = {
      name: currentUser.displayName || '',
      email: currentUser.email || '',
      plan: 'trial',
      createdAt: null
    };
  }
}

/* ── Preenche toda a UI com os dados do perfil ── */
function populateUI() {
  const name     = userProfile.name  || currentUser.displayName || '';
  const email    = userProfile.email || currentUser.email || '';
  const initials = getInitials(name || email);

  // Header
  updateGreeting(name);
  setEl('headerAvatarInitials',  initials);
  setEl('dropdownAvatarInitials',initials);
  setEl('dropdownName',  name || email);
  setEl('dropdownEmail', email);

  // Hero
  setEl('mcAvatarInitials', initials);
  setEl('mcHeroName',  name || email);
  setEl('mcHeroEmail', email);

  // Foto de perfil
  const photoURL = userProfile.photoURL || currentUser.photoURL;
  if (photoURL) {
    const imgEl = document.getElementById('mcAvatarImg');
    const initEl = document.getElementById('mcAvatarInitials');
    imgEl.src = photoURL;
    imgEl.style.display = 'block';
    initEl.style.display = 'none';
  }

  // Badges
  const planKey = userProfile.plan || 'trial';
  const planLabels = { trial:'plan_trial', pessoal:'plan_personal', corp:'plan_corp' };
  setEl('mcPlanBadge', `👤 ${tr(planLabels[planKey] || 'plan_personal')}`);

  const createdAt = userProfile.createdAt?.toDate?.() || null;
  const sinceStr  = createdAt
    ? `${tr('badge_since')} ${createdAt.toLocaleDateString({ pt:'pt-BR', es:'es-ES', en:'en-US' }[currentLang], { month:'short', year:'numeric' })}`
    : `${tr('badge_since')} 2026`;
  setEl('mcSinceBadge', `📅 ${sinceStr}`);

  // Tab Perfil — campos do form
  setVal('fieldName',  name);
  setVal('fieldEmail', email);
  setVal('fieldPhone', userProfile.phone    || '');
  setVal('fieldBirth', userProfile.birthDate|| '');
  setVal('fieldBio',   userProfile.bio      || '');
  updateBioCount();

  // Stats
  const shoppingItems = JSON.parse(localStorage.getItem('daily-shopping-list') || '[]').length;
  setEl('statTasks', '0');
  setEl('statItems', String(shoppingItems));
  const days = createdAt ? Math.floor((Date.now() - createdAt.getTime()) / 86400000) : 0;
  setEl('statDays', String(days));
  setEl('statLang', currentLang.toUpperCase());

  // Tab Segurança — sessão
  setEl('sessionEmailVerified', currentUser.emailVerified ? tr('verified_yes') : tr('verified_no'));
  const lastLogin = currentUser.metadata?.lastSignInTime
    ? new Date(currentUser.metadata.lastSignInTime).toLocaleString({ pt:'pt-BR', es:'es-ES', en:'en-US' }[currentLang])
    : '--';
  setEl('sessionLastLogin', lastLogin);
  const providerMap = { 'password': tr('provider_email'), 'google.com': tr('provider_google') };
  const provider = currentUser.providerData?.[0]?.providerId || 'password';
  setEl('sessionProvider', providerMap[provider] || provider);

  // Tab Plano
  populatePlanTab(planKey);

  // Tab Preferências — toggles
  const prefs = userProfile.preferences || {};
  setToggle('notifEmailToggle', prefs.notifEmail !== false);
  setToggle('notifPushToggle',  prefs.notifPush  === true);
  syncContrastToggle();

  // Idioma no select
  const langSel = document.getElementById('prefLangSelect');
  if (langSel) langSel.value = currentLang;

  // Tema buttons
  document.querySelectorAll('.mc-theme-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.theme === html.dataset.theme)
  );
  // Fonte buttons
  document.querySelectorAll('.mc-font-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.font === fontLevels[fontIdx])
  );
}

function populatePlanTab(planKey) {
  const plans = {
    trial:   { icon:'🎁', name:'plan_trial',    price:'Grátis', desc:'7 dias de acesso completo', features:['Acesso completo por 7 dias','Sem cartão de crédito','Todas as funcionalidades','Cancele a qualquer momento'] },
    pessoal: { icon:'👤', name:'plan_personal',  price:'R$ 35/mês', desc:'Acesso individual completo', features:['Perfil individual de tarefas','Agenda completa','Controle financeiro','Previsão do tempo','Armazenamento de arquivos'] },
    corp:    { icon:'🏢', name:'plan_corp',      price:'R$ 20/pessoa/mês', desc:'Acesso para toda a equipe', features:['Tudo do plano Pessoal','Preço reduzido por pessoa','Faturamento unificado'] },
  };
  const plan = plans[planKey] || plans.trial;
  setEl('mcPlanIcon',  plan.icon);
  setEl('mcPlanName',  tr(plan.name));
  setEl('mcPlanDesc',  plan.desc);
  setEl('mcPlanPrice', plan.price);
  setEl('mcPlanRenewal', planKey === 'trial' ? '' : `${tr('plan_renewal_prefix')} —`);

  const list = document.getElementById('mcFeatureList');
  if (list) {
    list.innerHTML = plan.features.map(f => `<li>${f}</li>`).join('');
  }
}

/* ── Helpers ── */
function setEl(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function setVal(id, val){ const el = document.getElementById(id); if (el) el.value = val; }
function setToggle(id, on) {
  const el = document.getElementById(id);
  if (el) el.setAttribute('aria-checked', on ? 'true' : 'false');
}

function hideLoading() {
  document.getElementById('mcLoadingWrap').style.display = 'none';
  document.getElementById('mcContent').style.display     = 'block';
}

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */
document.querySelectorAll('.mc-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.mc-tab').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.mc-tab-panel').forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(`tab-${tab}`);
    if (panel) { panel.classList.add('active'); panel.hidden = false; }
    currentTabId = tab;
  });
});

/* ══════════════════════════════════════
   SALVAR PERFIL
══════════════════════════════════════ */
document.getElementById('btnSavePerfil').addEventListener('click', async () => {
  if (!currentUser) return;
  const btn = document.getElementById('btnSavePerfil');
  btn.disabled = true;

  const name  = document.getElementById('fieldName').value.trim();
  const phone = document.getElementById('fieldPhone').value.trim();
  const birth = document.getElementById('fieldBirth').value;
  const bio   = document.getElementById('fieldBio').value.trim();

  try {
    const docRef = doc(db, 'users', currentUser.uid);
    await updateDoc(docRef, { name, phone, birthDate: birth, bio, updatedAt: serverTimestamp() });

    userProfile = { ...userProfile, name, phone, birthDate: birth, bio };

    // Atualiza hero
    setEl('mcHeroName', name || currentUser.email);
    setEl('headerAvatarInitials',   getInitials(name || currentUser.email));
    setEl('dropdownAvatarInitials', getInitials(name || currentUser.email));
    setEl('mcAvatarInitials',       getInitials(name || currentUser.email));
    setEl('dropdownName', name || currentUser.email);
    updateGreeting(name);

    showToast(tr('toast_saved'), 'success');
  } catch (err) {
    console.error(err);
    showToast(tr('toast_error'), 'error');
  } finally {
    btn.disabled = false;
  }
});

/* ── Bio counter ── */
function updateBioCount() {
  const bio = document.getElementById('fieldBio');
  const cnt = document.getElementById('bioCount');
  if (bio && cnt) cnt.textContent = bio.value.length;
}
document.getElementById('fieldBio')?.addEventListener('input', updateBioCount);

/* ── Phone mask ── */
document.getElementById('fieldPhone')?.addEventListener('input', function() {
  this.value = maskPhone(this.value);
});

/* ══════════════════════════════════════
   UPLOAD DE FOTO
══════════════════════════════════════ */
document.getElementById('avatarFileInput')?.addEventListener('change', async e => {
  const file = e.target.files?.[0];
  if (!file || !currentUser) return;

  const MAX_SIZE = 2 * 1024 * 1024; // 2MB
  if (file.size > MAX_SIZE) { showToast('❌ Imagem muito grande. Máximo 2MB.', 'error'); return; }

  try {
    const storageRef = ref(storage, `avatars/${currentUser.uid}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    await updateDoc(doc(db, 'users', currentUser.uid), { photoURL: url });
    userProfile.photoURL = url;

    const imgEl  = document.getElementById('mcAvatarImg');
    const initEl = document.getElementById('mcAvatarInitials');
    imgEl.src = url; imgEl.style.display = 'block'; initEl.style.display = 'none';

    showToast(tr('toast_photo_saved'), 'success');
  } catch (err) {
    console.error(err);
    showToast(tr('toast_error'), 'error');
  }
});

/* ══════════════════════════════════════
   ALTERAR SENHA
══════════════════════════════════════ */
// Força da senha
document.getElementById('fieldNewPass')?.addEventListener('input', function() {
  const wrap   = document.getElementById('passStrengthWrap');
  const fill   = document.getElementById('passStrengthFill');
  const label  = document.getElementById('passStrengthLabel');
  const v      = this.value;
  wrap.style.display = v.length > 0 ? 'flex' : 'none';

  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;

  const levels = [
    { w:'25%',  bg:'#e03a3a', lbl: tr('strength_weak')   },
    { w:'50%',  bg:'#e07b2a', lbl: tr('strength_fair')   },
    { w:'75%',  bg:'#f5c51a', lbl: tr('strength_good')   },
    { w:'100%', bg:'var(--green)', lbl: tr('strength_strong') },
  ];
  const l = levels[Math.max(0, score - 1)] || levels[0];
  fill.style.width      = l.w;
  fill.style.background = l.bg;
  label.textContent     = l.lbl;
  label.style.color     = l.bg;
});

// Toggle visibilidade de senha
document.querySelectorAll('.mc-pass-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const inp = document.getElementById(btn.dataset.target);
    if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
  });
});

document.getElementById('btnChangePass')?.addEventListener('click', async () => {
  if (!currentUser) return;
  const curr    = document.getElementById('fieldCurrentPass').value;
  const newPass = document.getElementById('fieldNewPass').value;
  const confirm = document.getElementById('fieldConfirmPass').value;
  const btn     = document.getElementById('btnChangePass');

  if (newPass !== confirm) { showToast(tr('toast_pass_mismatch'), 'error'); return; }
  if (newPass.length < 8)  { showToast(tr('toast_pass_weak'),    'error'); return; }

  btn.disabled = true;
  try {
    const cred = EmailAuthProvider.credential(currentUser.email, curr);
    await reauthenticateWithCredential(currentUser, cred);
    await updatePassword(currentUser, newPass);
    showToast(tr('toast_pass_changed'), 'success');
    ['fieldCurrentPass','fieldNewPass','fieldConfirmPass'].forEach(id => setVal(id, ''));
    document.getElementById('passStrengthWrap').style.display = 'none';
  } catch (err) {
    console.error(err);
    const msg = err.code === 'auth/wrong-password' ? tr('toast_pass_reauth') : tr('toast_error');
    showToast(msg, 'error');
  } finally { btn.disabled = false; }
});

/* ── LOGOUT ── */
async function doLogout() {
  await signOut(auth);
  localStorage.removeItem('daily-weather-city');
  window.location.href = 'index.html';
}
document.getElementById('btnLogout')?.addEventListener('click', e => { e.preventDefault(); doLogout(); });
document.getElementById('btnLogoutAll')?.addEventListener('click', doLogout);

/* ══════════════════════════════════════
   PREFERÊNCIAS — salvar no Firestore
══════════════════════════════════════ */
// Toggles de preferência
function bindToggle(id, callback) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => {
    const on = el.getAttribute('aria-checked') !== 'true';
    el.setAttribute('aria-checked', on ? 'true' : 'false');
    if (callback) callback(on);
  });
}

bindToggle('contrastToggle', on => applyContrast(on));
bindToggle('notifEmailToggle', () => {});
bindToggle('notifPushToggle',  () => {});

// Tema
document.querySelectorAll('.mc-theme-opt').forEach(btn => {
  btn.addEventListener('click', () => setTheme(btn.dataset.theme));
});

// Fonte
document.querySelectorAll('.mc-font-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = fontLevels.indexOf(btn.dataset.font);
    if (idx >= 0) applyFont(idx);
  });
});

// Idioma
document.getElementById('prefLangSelect')?.addEventListener('change', function() {
  applyTranslations(this.value);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === this.value));
});

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    applyTranslations(btn.dataset.lang);
    const sel = document.getElementById('prefLangSelect');
    if (sel) sel.value = btn.dataset.lang;
  })
);

// Salvar preferências
document.getElementById('btnSavePrefs')?.addEventListener('click', async () => {
  if (!currentUser) return;
  const btn = document.getElementById('btnSavePrefs');
  btn.disabled = true;

  const prefs = {
    theme:      html.dataset.theme || 'light',
    font:       String(fontIdx),
    contrast:   hc ? '1' : '',
    lang:       currentLang,
    notifEmail: document.getElementById('notifEmailToggle')?.getAttribute('aria-checked') === 'true',
    notifPush:  document.getElementById('notifPushToggle')?.getAttribute('aria-checked')  === 'true',
  };

  try {
    await updateDoc(doc(db, 'users', currentUser.uid), { preferences: prefs });
    userProfile.preferences = prefs;
    showToast(tr('toast_prefs_saved'), 'success');
  } catch (err) {
    console.error(err);
    showToast(tr('toast_error'), 'error');
  } finally { btn.disabled = false; }
});

/* ══════════════════════════════════════
   DELETAR CONTA
══════════════════════════════════════ */
const deleteOverlay   = document.getElementById('deleteModalOverlay');
const deleteInput     = document.getElementById('deleteConfirmInput');
const deleteConfirmBtn= document.getElementById('deleteConfirmBtn');

document.getElementById('btnDeleteAccount')?.addEventListener('click', () => {
  deleteOverlay.classList.add('is-open');
  deleteInput.value = '';
  deleteConfirmBtn.disabled = true;
});
document.getElementById('deleteModalClose')?.addEventListener('click', () => deleteOverlay.classList.remove('is-open'));
document.getElementById('deleteCancelBtn')?.addEventListener('click', () => deleteOverlay.classList.remove('is-open'));
deleteOverlay?.addEventListener('click', e => { if (e.target === deleteOverlay) deleteOverlay.classList.remove('is-open'); });

const CONFIRM_WORDS = { pt:'EXCLUIR', es:'ELIMINAR', en:'DELETE' };
deleteInput?.addEventListener('input', () => {
  const word = CONFIRM_WORDS[currentLang] || 'EXCLUIR';
  deleteConfirmBtn.disabled = deleteInput.value.trim().toUpperCase() !== word;
});

deleteConfirmBtn?.addEventListener('click', async () => {
  if (!currentUser) return;
  deleteConfirmBtn.disabled = true;
  try {
    // Remove documento do Firestore
    await setDoc(doc(db, 'users', currentUser.uid), { deleted: true, deletedAt: serverTimestamp() });
    // Deleta o usuário do Auth
    await deleteUser(currentUser);
    window.location.href = 'index.html';
  } catch (err) {
    console.error(err);
    showToast(tr('toast_error'), 'error');
    deleteConfirmBtn.disabled = false;
  }
});

/* ══════════════════════════════════════
   LOGIN.JS — INTEGRAÇÃO FIREBASE
   (adicionar ao JS/login.js existente)
══════════════════════════════════════ */
/*
  No arquivo JS/login.js, após o signupFinalBtn click handler,
  substitua o alert() pelo código abaixo:


*/

/* ── INIT ── */
applyTranslations(currentLang);