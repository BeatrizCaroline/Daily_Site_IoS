/* ══════════════════════════════════════════════
   TRADUÇÕES: PT | ES | EN
══════════════════════════════════════════════ */
const i18n = {
  pt: {
    nav_sobre:'Sobre Nós', nav_planos:'Planos', nav_login:'Login',
    access_label:'Acesso:',
    form_title_login:'Bem-vindo de volta', form_title_signup:'Criar conta',
    form_sub_login:'Acesse sua conta para continuar', form_sub_signup:'Preencha seus dados para começar',
    label_name:'Nome completo', label_email:'E-mail', label_pass:'Senha',
    ph_name:'Seu nome', ph_email:'seu@email.com',
    forgot:'Esqueci minha senha',
    btn_enter:'Entrar', btn_create:'Criar conta', or:'ou',
    no_account:'Não tem conta?', has_account:'Já tem conta?',
    btn_signup:'Criar conta gratuita', btn_login:'Fazer login',
    tag_sobre:'Quem somos', sobre_title:'Oi, somos a daily 👋',
    sobre_p1:'A gente começou assim: um grupo cansado de listas espalhadas, lembretes perdidos e a sensação de que o dia nunca rende o que devia.',
    sobre_p2:'Por isso criamos a <strong>daily</strong>: um lugar só, simples e direto, para organizar estudos, trabalho e casa sem precisar de dez aplicativos abertos ao mesmo tempo.',
    sobre_quote:'A gente quer que você abra a daily de manhã e já saiba exatamente como vai ser o seu dia, sem susto, sem esquecer nada importante.',
    sobre_what_title:'O que dá pra fazer na daily?',
    sobre_what_sub:'Pensa nela como uma agenda inteligente que conhece a sua rotina. Computador ou celular, tudo sincronizado, tudo no seu ritmo.',
    feat1:'Organizar tarefas de estudo, trabalho e casa em um só lugar',
    feat2:'Acompanhar compromissos e reuniões sem perder nada',
    feat3:'Controlar gastos e achar as melhores ofertas no mercado',
    feat4:'Checar a previsão do tempo antes de sair de casa',
    feat5:'Guardar arquivos importantes com segurança',
    sobre_signoff:'Feita por gente que vive a mesma correria que você, todos os dias.',
    tag_planos:'Escolha seu plano', planos_title:'Planos simples, sem pegadinha',
    planos_sub:'Comece a organizar sua vida hoje. Sem fidelidade, cancele quando quiser.',
    trial_badge:'Grátis 7 dias', trial_name:'Teste Grátis', trial_desc:'Experimente sem compromisso',
    trial_free:'Grátis', trial_economy:'7 dias, depois R$35/mês',
    trial_f1:'Acesso completo por 7 dias', trial_f2:'Sem cartão de crédito',
    trial_f3:'Todas as funcionalidades', trial_f4:'Cancele a qualquer momento',
    trial_cta:'Começar teste grátis',
    plan_personal:'Pessoal', plan_personal_desc:'Para o seu dia a dia',
    monthly:'Mensal', annual:'Anual',
    per_month:'/mês', economy_personal:'Economize R$60 por ano',
    per_person_month:'/pessoa/mês', economy_corp:'Economize R$60 por pessoa/ano',
    pf1:'Tarefas ilimitadas', pf2:'Agenda completa', pf3:'Controle financeiro',
    pf4:'Previsão do tempo', pf5:'Armazenamento de arquivos',
    plan_cta_start:'Começar agora', most_popular:'Mais popular',
    plan_corp:'Corporativo', plan_corp_desc:'Para equipes e empresas',
    cf1:'Tudo do plano Pessoal', cf2:'Gestão de equipes',
    cf3:'Relatórios e dashboards', cf4:'Suporte prioritário', cf5:'Integração com ferramentas',
    plan_cta_sales:'Falar com vendas',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    nav_sobre:'Quiénes somos', nav_planos:'Planes', nav_login:'Iniciar sesión',
    access_label:'Acceso:',
    form_title_login:'Bienvenido de nuevo', form_title_signup:'Crear cuenta',
    form_sub_login:'Accede a tu cuenta para continuar', form_sub_signup:'Completa tus datos para empezar',
    label_name:'Nombre completo', label_email:'Correo electrónico', label_pass:'Contraseña',
    ph_name:'Tu nombre', ph_email:'tu@correo.com',
    forgot:'Olvidé mi contraseña',
    btn_enter:'Entrar', btn_create:'Crear cuenta', or:'o',
    no_account:'¿No tienes cuenta?', has_account:'¿Ya tienes cuenta?',
    btn_signup:'Crear cuenta gratis', btn_login:'Iniciar sesión',
    tag_sobre:'Quiénes somos', sobre_title:'Hola, somos daily 👋',
    sobre_p1:'Empezamos así: un grupo cansado de listas dispersas, recordatorios perdidos y la sensación de que el día nunca rinde lo que debería.',
    sobre_p2:'Por eso creamos <strong>daily</strong>: un solo lugar, simple y directo, para organizar estudios, trabajo y hogar sin necesitar diez aplicaciones abiertas al mismo tiempo.',
    sobre_quote:'Queremos que abras daily por la mañana y ya sepas exactamente cómo será tu día, sin sustos, sin olvidar nada importante.',
    sobre_what_title:'¿Qué puedes hacer en daily?',
    sobre_what_sub:'Piénsala como una agenda inteligente que conoce tu rutina. Computadora o celular, todo sincronizado, todo a tu ritmo.',
    feat1:'Organizar tareas de estudio, trabajo y hogar en un solo lugar',
    feat2:'Seguir compromisos y reuniones sin perder nada',
    feat3:'Controlar gastos y encontrar las mejores ofertas',
    feat4:'Ver el pronóstico del tiempo antes de salir',
    feat5:'Guardar archivos importantes de forma segura',
    sobre_signoff:'Hecha por gente que vive el mismo ajetreo que tú, todos los días.',
    tag_planos:'Elige tu plan', planos_title:'Planes simples, sin letra chica',
    planos_sub:'Comienza a organizar tu vida hoy. Sin fidelidad, cancela cuando quieras.',
    trial_badge:'Gratis 7 días', trial_name:'Prueba Gratis', trial_desc:'Prueba sin compromiso',
    trial_free:'Gratis', trial_economy:'7 días, luego R$35/mes',
    trial_f1:'Acceso completo por 7 días', trial_f2:'Sin tarjeta de crédito',
    trial_f3:'Todas las funcionalidades', trial_f4:'Cancela cuando quieras',
    trial_cta:'Iniciar prueba gratis',
    plan_personal:'Personal', plan_personal_desc:'Para tu día a día',
    monthly:'Mensual', annual:'Anual',
    per_month:'/mes', economy_personal:'Ahorra R$60 al año',
    per_person_month:'/persona/mes', economy_corp:'Ahorra R$60 por persona/año',
    pf1:'Tareas ilimitadas', pf2:'Agenda completa', pf3:'Control financiero',
    pf4:'Pronóstico del tiempo', pf5:'Almacenamiento de archivos',
    plan_cta_start:'Comenzar ahora', most_popular:'Más popular',
    plan_corp:'Corporativo', plan_corp_desc:'Para equipos y empresas',
    cf1:'Todo del plan Personal', cf2:'Gestión de equipos',
    cf3:'Informes y dashboards', cf4:'Soporte prioritario', cf5:'Integración con herramientas',
    plan_cta_sales:'Hablar con ventas',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
  },
  en: {
    nav_sobre:'About Us', nav_planos:'Plans', nav_login:'Login',
    access_label:'Access:',
    form_title_login:'Welcome back', form_title_signup:'Create account',
    form_sub_login:'Sign in to your account to continue', form_sub_signup:'Fill in your details to get started',
    label_name:'Full name', label_email:'E-mail', label_pass:'Password',
    ph_name:'Your name', ph_email:'you@email.com',
    forgot:'Forgot my password',
    btn_enter:'Sign in', btn_create:'Create account', or:'or',
    no_account:"Don't have an account?", has_account:'Already have an account?',
    btn_signup:'Create free account', btn_login:'Sign in',
    tag_sobre:'Who we are', sobre_title:'Hey, we are daily 👋',
    sobre_p1:'We started like this: a group of people tired of scattered lists, lost reminders, and the feeling that the day never delivers what it should.',
    sobre_p2:'That is why we created <strong>daily</strong>: one place, simple and direct, to organize studies, work, and home life without needing ten different apps open at the same time.',
    sobre_quote:'We want you to open daily in the morning and already know exactly how your day will go, no surprises, nothing important forgotten.',
    sobre_what_title:'What can you do with daily?',
    sobre_what_sub:'Think of it as a smart planner that knows your routine. Computer or phone, everything synced, everything at your pace.',
    feat1:'Organize study, work and home tasks in one place',
    feat2:'Track appointments and meetings without missing anything',
    feat3:'Control spending and find the best deals',
    feat4:'Check the weather before leaving home',
    feat5:'Store important files safely',
    sobre_signoff:'Built by people who live the same rush as you, every single day.',
    tag_planos:'Choose your plan', planos_title:'Simple plans, no fine print',
    planos_sub:'Start organizing your life today. No commitment, cancel anytime.',
    trial_badge:'Free 7 days', trial_name:'Free Trial', trial_desc:'Try it with no strings attached',
    trial_free:'Free', trial_economy:'7 days, then R$35/mo',
    trial_f1:'Full access for 7 days', trial_f2:'No credit card required',
    trial_f3:'All features included', trial_f4:'Cancel at any time',
    trial_cta:'Start free trial',
    plan_personal:'Personal', plan_personal_desc:'For your everyday life',
    monthly:'Monthly', annual:'Annual',
    per_month:'/mo', economy_personal:'Save R$60 per year',
    per_person_month:'/person/mo', economy_corp:'Save R$60 per person/year',
    pf1:'Unlimited tasks', pf2:'Full calendar', pf3:'Financial control',
    pf4:'Weather forecast', pf5:'File storage',
    plan_cta_start:'Get started', most_popular:'Most popular',
    plan_corp:'Corporate', plan_corp_desc:'For teams and companies',
    cf1:'Everything in Personal', cf2:'Team management',
    cf3:'Reports and dashboards', cf4:'Priority support', cf5:'Tool integrations',
    plan_cta_sales:'Talk to sales',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = 'pt';

function applyTranslations(lang) {
  currentLang = lang;
  const t = i18n[lang];
  const langMap = { pt:'pt-BR', es:'es', en:'en' };
  document.documentElement.lang = langMap[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('[data-i18n-nav]').forEach(el => {
    const k = el.dataset.i18nNav;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  updateFormTexts();
  updatePlanPeriodTexts();
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang))
);

/* ══════════════════════════════════════════════
   DARK MODE
══════════════════════════════════════════════ */
const html     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function setTheme(t) {
  html.dataset.theme = t;
  localStorage.setItem('daily-theme', t);
  themeBtn.classList.toggle('is-on', t === 'dark');
}

themeBtn.addEventListener('click', () =>
  setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
);

const saved = localStorage.getItem('daily-theme');
setTheme(saved || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

/* ══════════════════════════════════════════════
   TAMANHO DE FONTE
══════════════════════════════════════════════ */
const fontLevels = ['sm','md','lg','xl'];
let fontIdx = 1;

function applyFont(i) {
  fontIdx = Math.max(0, Math.min(fontLevels.length - 1, i));
  html.dataset.font = fontLevels[fontIdx];
  localStorage.setItem('daily-font', fontIdx);
}

document.getElementById('btnFontDecrease').addEventListener('click', () => applyFont(fontIdx - 1));
document.getElementById('btnFontNormal').addEventListener('click',   () => applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click', () => applyFont(fontIdx + 1));

const sf = localStorage.getItem('daily-font');
if (sf !== null) applyFont(Number(sf));

/* ══════════════════════════════════════════════
   ALTO CONTRASTE
══════════════════════════════════════════════ */
const btnContrast = document.getElementById('btnContrast');
let hc = localStorage.getItem('daily-hc') === '1';

function applyContrast(on) {
  hc = on;
  document.body.classList.toggle('hc', on);
  btnContrast.classList.toggle('is-on', on);
  localStorage.setItem('daily-hc', on ? '1' : '');
}

btnContrast.addEventListener('click', () => applyContrast(!hc));
applyContrast(hc);

/* ══════════════════════════════════════════════
   FORM: LOGIN / CADASTRO
══════════════════════════════════════════════ */
const formTitle    = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const formFields   = document.getElementById('formFields');
const forgotLink   = document.getElementById('forgotLink');
const submitBtn    = document.getElementById('submitBtn');
const toggleBtn    = document.getElementById('toggleBtn');
const toggleText   = document.getElementById('toggleText');
const togglePass   = document.getElementById('togglePass');
const passwordInput= document.getElementById('password');
let isLogin = true;

function updateFormTexts() {
  const t = i18n[currentLang];
  formTitle.textContent    = isLogin ? t.form_title_login : t.form_title_signup;
  formSubtitle.textContent = isLogin ? t.form_sub_login   : t.form_sub_signup;
  submitBtn.textContent    = isLogin ? t.btn_enter        : t.btn_create;
  toggleText.textContent   = isLogin ? t.no_account       : t.has_account;
  toggleBtn.textContent    = isLogin ? t.btn_signup       : t.btn_login;
}

function setFormMode(login) {
  isLogin = login;
  formTitle.style.opacity = formSubtitle.style.opacity = '0';
  setTimeout(() => {
    formFields.classList.toggle('is-signup', !isLogin);
    forgotLink.classList.toggle('is-hidden', !isLogin);
    updateFormTexts();
    formTitle.style.opacity = formSubtitle.style.opacity = '1';
  }, 160);
}

formTitle.style.transition = formSubtitle.style.transition = 'opacity .16s ease';
toggleBtn.addEventListener('click', () => setFormMode(!isLogin));
document.getElementById('mainForm').addEventListener('submit', e => e.preventDefault());

togglePass.addEventListener('click', () => {
  const h = passwordInput.type === 'password';
  passwordInput.type = h ? 'text' : 'password';
  togglePass.setAttribute('aria-label', h ? 'Ocultar senha' : 'Mostrar senha');
});

/* ══════════════════════════════════════════════
   CARROSSEL
══════════════════════════════════════════════ */
const track      = document.getElementById('carouselTrack');
const dots       = document.querySelectorAll('.carousel-dot');
const navLinks   = document.querySelectorAll('.nav-link');
const headerNav  = document.getElementById('headerNav');
const panelLeft  = document.getElementById('panelLeft');
const panelRight = document.getElementById('panelRight');
let current  = 0;
let isMobile = window.matchMedia('(max-width:768px)').matches;

function goToSlide(i) {
  current = i;
  track.style.transform = `translateX(-${i * 50}%)`;
  dots.forEach((d, j) => d.classList.toggle('active', j === i));
  syncNav();
}

function syncNav() {
  navLinks.forEach(l => {
    const p = l.dataset.panel;
    if (p === 'login') { l.classList.remove('active'); return; }
    l.classList.toggle('active', (current === 0 && p === 'sobre') || (current === 1 && p === 'planos'));
  });
}

document.getElementById('arrowLeft').addEventListener('click',  () => goToSlide(current === 0 ? 1 : 0));
document.getElementById('arrowRight').addEventListener('click', () => goToSlide(current === 1 ? 0 : 1));
dots.forEach(d => d.addEventListener('click', () => goToSlide(+d.dataset.dot)));

function showCarousel(idx) {
  panelLeft.classList.add('is-hidden');
  panelRight.classList.add('is-active');
  headerNav.classList.add('is-carousel-mode');
  goToSlide(idx);
}

function showLogin() {
  panelLeft.classList.remove('is-hidden');
  panelRight.classList.remove('is-active');
  headerNav.classList.remove('is-carousel-mode');
  navLinks.forEach(l => l.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const p = link.dataset.panel;
    if (!isMobile) {
      if (p !== 'login') goToSlide(p === 'planos' ? 1 : 0);
      return;
    }
    if (p === 'login') showLogin();
    else showCarousel(p === 'planos' ? 1 : 0);
  });
});

window.addEventListener('resize', () => {
  const m = window.matchMedia('(max-width:768px)').matches;
  if (m !== isMobile) {
    isMobile = m;
    if (!isMobile) {
      panelLeft.classList.remove('is-hidden');
      panelRight.classList.remove('is-active');
      headerNav.classList.remove('is-carousel-mode');
      goToSlide(0);
    }
  }
});

/* ══════════════════════════════════════════════
   PLANOS: MENSAL / ANUAL
══════════════════════════════════════════════ */
const planData = {
  pessoal: { mensal:{valor:35, pk:'per_month', ek:''},
              anual: {valor:30, pk:'per_month', ek:'economy_personal'} },
  corp:    { mensal:{valor:20, pk:'per_person_month', ek:''},
              anual: {valor:15, pk:'per_person_month', ek:'economy_corp'} }
};

function updatePlanPeriodTexts() {
  ['pessoal','corp'].forEach(plan => {
    const group  = document.querySelector(`[data-plan="${plan}"].active`);
    if (!group) return;
    const period = group.dataset.period;
    const data   = planData[plan][period];
    const suffix = plan === 'pessoal' ? 'Pessoal' : 'Corp';
    const priceEl = document.getElementById(`price${suffix}`);
    const econEl  = document.getElementById(`economy${suffix}`);
    if (!priceEl) return;
    priceEl.querySelector('.plano-price__period').textContent = i18n[currentLang][data.pk];
    if (data.ek) {
      econEl.textContent       = i18n[currentLang][data.ek];
      econEl.style.visibility  = 'visible';
    } else {
      econEl.style.visibility  = 'hidden';
    }
  });
}

document.querySelectorAll('.plano-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan   = btn.dataset.plan;
    const period = btn.dataset.period;
    btn.closest('.plano-toggle-group').querySelectorAll('.plano-toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const data    = planData[plan][period];
    const suffix  = plan === 'pessoal' ? 'Pessoal' : 'Corp';
    const priceEl = document.getElementById(`price${suffix}`);
    const econEl  = document.getElementById(`economy${suffix}`);

    priceEl.querySelector('.plano-price__value').textContent  = data.valor;
    priceEl.querySelector('.plano-price__period').textContent = i18n[currentLang][data.pk];

    if (data.ek) {
      econEl.textContent      = i18n[currentLang][data.ek];
      econEl.style.visibility = 'visible';
    } else {
      econEl.style.visibility = 'hidden';
    }
  });
});

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
applyTranslations('pt');