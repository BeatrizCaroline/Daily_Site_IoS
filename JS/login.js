// 1. Importar as funções necessárias dos SDKs do Firebase (Links oficiais via CDN para uso no navegador)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. Configuração do seu projeto Firebase (Atualizado com as suas chaves reais!)
const firebaseConfig = {
  apiKey: "AIzaSyDdtBpgM3Ri_l27Vp2yg7h6qKEjb4pnhq0",
  authDomain: "daily-4131c.firebaseapp.com",
  projectId: "daily-4131c",
  storageBucket: "daily-4131c.firebasestorage.app",
  messagingSenderId: "596319308806",
  appId: "1:596319308806:web:a75704e5cd87570ff40787",
  measurementId: "G-5LHV57CVF4"
};

// 3. Inicializar o Firebase e os seus Serviços
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("🔥 Daily: Firebase conectado com sucesso!", app);

/* ── DICIONÁRIO I18N (INTERNACIONALIZAÇÃO) ── */
const i18n = {
  pt: {
    nav_sobre:'Sobre Nós', nav_planos:'Planos', nav_login:'Login',
    form_title_login:'Bem-vindo de volta', form_title_signup:'Criar conta',
    form_sub_login:'Acesse sua conta para continuar', form_sub_signup:'Preencha seus dados para começar',
    label_name:'Nome completo', label_email:'E-mail', label_pass:'Senha',
    ph_name:'Seu nome', ph_email:'seu@email.com',
    forgot:'Esqueci minha senha',
    btn_enter:'Entrar', or:'ou',
    no_account:'Não tem conta?',
    has_account:'Já tem conta?',
    hint_choose_plan:'Escolha um plano ao lado para começar',
    back:'Voltar',
    chip_label_personal:'Cadastro — Plano Pessoal',
    chip_label_corp:'Cadastro — Plano Corporativo',
    chip_label_trial:'Cadastro — Teste Grátis',
    btn_go_payment:'Ir para pagamento',
    btn_talk_sales:'Falar com atendente',
    btn_activate_trial:'Ativar conta grátis',
    tag_sobre:'Quem somos', sobre_title:'Oi, somos a daily',
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
    trial_badge:'Grátis 7 dias', trial_name:'Teste Grátis',
    trial_desc:'Experimente sem compromisso e sem cartão de crédito.',
    trial_free:'Grátis', trial_economy:'7 dias, depois R$35/mês',
    trial_f1:'Acesso completo por 7 dias', trial_f2:'Sem cartão de crédito',
    trial_f3:'Todas as funcionalidades', trial_f4:'Cancele a qualquer momento',
    trial_cta:'Ativar teste grátis',
    plan_personal:'Pessoal',
    plan_personal_desc:'Cada usuário tem seu próprio perfil e organização individual dentro da plataforma.',
    monthly:'Mensal', annual:'Anual',
    per_month:'/mês', economy_personal:'Economize R$60 por ano',
    per_person_month:'/pessoa/mês', economy_corp:'Economize R$60 por pessoa/ano',
    pf1:'Perfil individual de tarefas', pf2:'Agenda completa', pf3:'Controle financeiro',
    pf4:'Previsão do tempo', pf5:'Armazenamento de arquivos',
    plan_cta_personal:'Assinar plano Pessoal',
    most_popular:'Mais popular',
    plan_corp:'Corporativo',
    plan_corp_desc:'O mesmo acesso do plano Pessoal para cada membro da equipe, com preço reduzido por pessoa.',
    cf1:'Tudo do plano Pessoal, por usuário', cf2:'Perfil individual de tarefas',
    cf3:'Agenda completa', cf4:'Controle financeiro', cf5:'Preço reduzido por pessoa',
    plan_cta_corp:'Solicitar plano Corporativo',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    nav_sobre:'Quiénes somos', nav_planos:'Planes', nav_login:'Iniciar sesión',
    form_title_login:'Bienvenido de nuevo', form_title_signup:'Crear cuenta',
    form_sub_login:'Accede a tu cuenta para continuar', form_sub_signup:'Completa tus datos para empezar',
    label_name:'Nombre completo', label_email:'Correo electrónico', label_pass:'Contraseña',
    ph_name:'Tu nombre', ph_email:'tu@correo.com',
    forgot:'Olvidé mi contraseña',
    btn_enter:'Entrar', or:'o',
    no_account:'¿No tienes cuenta?',
    has_account:'¿Ya tienes cuenta?',
    hint_choose_plan:'Elige un plan al lado para comenzar',
    back:'Volver',
    chip_label_personal:'Registro — Plan Personal',
    chip_label_corp:'Registro — Plan Corporativo',
    chip_label_trial:'Registro — Prueba Gratis',
    btn_go_payment:'Ir al pago',
    btn_talk_sales:'Hablar con un asesor',
    btn_activate_trial:'Activar cuenta gratis',
    tag_sobre:'Quiénes somos', sobre_title:'Hola, somos daily',
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
    trial_badge:'Gratis 7 dias', trial_name:'Prueba Gratis',
    trial_desc:'Prueba sin compromiso y sin tarjeta de crédito.',
    trial_free:'Gratis', trial_economy:'7 días, luego R$35/mes',
    trial_f1:'Acceso completo por 7 días', trial_f2:'Sin tarjeta de crédito',
    trial_f3:'Todas las funcionalidades', trial_f4:'Cancela cuando quieras',
    trial_cta:'Activar prueba gratis',
    plan_personal:'Personal',
    plan_personal_desc:'Cada usuario tiene su propio perfil y organización individual dentro de la plataforma.',
    monthly:'Mensual', annual:'Anual',
    per_month:'/mes', economy_personal:'Ahorra R$60 al año',
    per_person_month:'/persona/mes', economy_corp:'Ahorra R$60 por persona/año',
    pf1:'Perfil individual de tareas', pf2:'Agenda completa', pf3:'Control financiero',
    pf4:'Pronóstico del tiempo', pf5:'Almacenamiento de archivos',
    plan_cta_personal:'Suscribirme al plan Personal',
    most_popular:'Más popular',
    plan_corp:'Corporativo',
    plan_corp_desc:'El mismo acceso del plan Personal para cada miembro del equipo, con precio reducido por persona.',
    cf1:'Todo del plan Personal, por usuario', cf2:'Perfil individual de tareas',
    cf3:'Agenda completa', cf4:'Control financiero', cf5:'Precio reducido por persona',
    plan_cta_corp:'Solicitar plan Corporativo',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidade', terms:'Términos', contact:'Contacto',
  },
  en: {
    nav_sobre:'About Us', nav_planos:'Plans', nav_login:'Login',
    form_title_login:'Welcome back', form_title_signup:'Create account',
    form_sub_login:'Sign in to your account to continue', form_sub_signup:'Fill in your details to get started',
    label_name:'Full name', label_email:'E-mail', label_pass:'Password',
    ph_name:'Your name', ph_email:'you@email.com',
    forgot:'Forgot my password',
    btn_enter:'Sign in', or:'or',
    no_account:"Don't have an account?",
    has_account:'Already have an account?',
    hint_choose_plan:'Choose a plan on the right to get started',
    back:'Back',
    chip_label_personal:'Signup — Personal Plan',
    chip_label_corp:'Signup — Corporate Plan',
    chip_label_trial:'Signup — Free Trial',
    btn_go_payment:'Go to payment',
    btn_talk_sales:'Talk to a sales rep',
    btn_activate_trial:'Activate free account',
    tag_sobre:'Who we are', sobre_title:'Hey, we are daily',
    sobre_p1:'We started like this: a group of people tired of scattered lists, lost reminders, and the feeling that the day never delivers what it should.',
    sobre_p2:'That is why we created <strong>daily</strong>: one place, simple and direct, to organize studies, work and home life without needing ten different apps open at the same time.',
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
    trial_badge:'Free 7 days', trial_name:'Free Trial',
    trial_desc:'Try it with no commitment and no credit card required.',
    trial_free:'Free', trial_economy:'7 days, then R$35/mo',
    trial_f1:'Full access for 7 days', trial_f2:'No credit card required',
    trial_f3:'All features included', trial_f4:'Cancel at any time',
    trial_cta:'Activate free trial',
    plan_personal:'Personal',
    plan_personal_desc:'Each user has their own profile and individual organization within the platform.',
    monthly:'Monthly', annual:'Annual',
    per_month:'/mo', economy_personal:'Save R$60 per year',
    per_person_month:'/person/mo', economy_corp:'Save R$60 per person/year',
    pf1:'Individual task profile', pf2:'Full calendar', pf3:'Financial control',
    pf4:'Weather forecast', pf5:'File storage',
    plan_cta_personal:'Subscribe to Personal',
    most_popular:'Most popular',
    plan_corp:'Corporate',
    plan_corp_desc:'The same Personal plan access for each team member, at a lower price per person.',
    cf1:'Everything in Personal, per user', cf2:'Individual task profile',
    cf3:'Full calendar', cf4:'Financial control', cf5:'Lower price per person',
    plan_cta_corp:'Request Corporate plan',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = 'pt';
let currentPlanType = null;

function applyTranslations(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.documentElement.lang = { pt:'pt-BR', es:'es', en:'en' }[lang];

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
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  updateSignupChip();
  updateSignupFinalBtn();
  updatePlanPeriodTexts();
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang))
);

/* ── DARK MODE ── */
const html     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function setTheme(t) {
  html.dataset.theme = t;
  localStorage.setItem('daily-theme', t);
  themeBtn.classList.toggle('is-on', t === 'dark');
}
themeBtn.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));
const savedTheme = localStorage.getItem('daily-theme');
setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));

/* ── FONTE ── */
const fontLevels = ['sm','md','lg','xl'];
let fontIdx = 1;
function applyFont(i) {
  fontIdx = Math.max(0, Math.min(3, i));
  html.dataset.font = fontLevels[fontIdx];
  localStorage.setItem('daily-font', fontIdx);
}
document.getElementById('btnFontDecrease').addEventListener('click', () => applyFont(fontIdx - 1));
document.getElementById('btnFontNormal').addEventListener('click',   () => applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click', () => applyFont(fontIdx + 1));
const sf = localStorage.getItem('daily-font');
if (sf !== null) applyFont(Number(sf));

/* ── CONTRASTE ── */
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

/* ── LOGIN / CADASTRO (MUDANÇA DE TELAS) ── */
const loginView      = document.getElementById('loginView');
const signupView     = document.getElementById('signupView');
const planChipIcon   = document.getElementById('planChipIcon');
const planChipLabel  = document.getElementById('planChipLabel');
const signupFinalBtn = document.getElementById('signupFinalBtn');
const socialLinks    = document.getElementById('socialLinks');

document.getElementById('togglePass').addEventListener('click', () => {
  const inp = document.getElementById('loginPassword');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});
document.getElementById('togglePassSignup').addEventListener('click', () => {
  const inp = document.getElementById('signupPassword');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', e => e.preventDefault());
document.getElementById('signupForm').addEventListener('submit', e => e.preventDefault());

function showLoginView() {
  signupView.style.display = 'none';
  loginView.style.display = 'flex';
  socialLinks.classList.remove('is-hidden');
  currentPlanType = null;
}

function showSignupView(planType) {
  currentPlanType = planType;
  loginView.style.display = 'none';
  signupView.style.display = 'flex';
  socialLinks.classList.add('is-hidden');
  updateSignupChip();
  updateSignupFinalBtn();
}

function updateSignupChip() {
  if (!currentPlanType) return;
  const t = i18n[currentLang];
  const icons  = { pessoal:'👤', corp:'🏢', trial:'🎁' };
  const labels = { pessoal: t.chip_label_personal, corp: t.chip_label_corp, trial: t.chip_label_trial };
  planChipIcon.textContent = icons[currentPlanType];
  planChipLabel.textContent = labels[currentPlanType];
}

function updateSignupFinalBtn() {
  if (!currentPlanType) return;
  const t = i18n[currentLang];
  if (currentPlanType === 'corp')       signupFinalBtn.textContent = t.btn_talk_sales;
  else if (currentPlanType === 'trial') signupFinalBtn.textContent = t.btn_activate_trial;
  else                                  signupFinalBtn.textContent = t.btn_go_payment;
}

document.getElementById('backToLogin').addEventListener('click', showLoginView);

/* ── BOTÕES DOS PLANOS ── */
document.querySelectorAll('.plano-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    const planType = btn.dataset.planType;

    if (planType === 'corp') {
      window.location.href = 'contato.html';
      return;
    }

    showSignupView(planType);

    if (isMobile) {
      panelRight.classList.remove('is-active');
      panelLeft.classList.remove('is-hidden');
      headerNav.classList.remove('is-carousel-mode');
      navLinks.forEach(l => l.classList.remove('active'));
    }
  });
});

/* ── INTEGRACAO FIREBASE: FINALIZAR CADASTRO (SIGNUP) ── */
signupFinalBtn.addEventListener('click', async () => {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (!name || !email || !password) {
    alert(currentLang === 'en' ? "Please fill in all fields." : "Por favor, preencha todos os campos.");
    return;
  }

  try {
    // 1. Cria a conta no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Identifica se escolheu o período Mensal ou Anual
    const activeToggle = document.querySelector(`[data-plan="pessoal"].active`);
    const period = activeToggle ? activeToggle.dataset.period : 'mensal';

    // 3. Salva os metadados do perfil do usuário criado no Firestore Database
    await setDoc(doc(db, "usuarios", user.uid), {
      nome: name,
      email: email,
      planoEscolhido: currentPlanType, // 'pessoal' ou 'trial'
      periodoPlano: currentPlanType === 'pessoal' ? period : '7_dias',
      criadoEm: new Date().toISOString()
    });

    alert(currentLang === 'en' ? "Account created successfully!" : "Conta criada com sucesso!");

    // 4. Redirecionamentos de acordo com o plano selecionado
    if (currentPlanType === 'trial') {
      window.location.href = 'home.html';
    } else {
      window.location.href = 'pagarPessoal.html';
    }

  } catch (error) {
    console.error("Erro ao registrar no Firebase:", error);
    alert(error.message);
  }
});

/* ── INTEGRACAO FIREBASE: FAZER LOGIN ── */
const loginBtn = document.querySelector('.form .btn-primary[data-i18n="btn_enter"]');

loginBtn.addEventListener('click', async (e) => {
  e.preventDefault(); // Evita a navegação imediata padrão da tag <a>

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    alert(currentLang === 'en' ? "Please enter your email and password." : "Por favor, preencha o e-mail e a senha.");
    return;
  }

  try {
    // Autentica o usuário com os dados informados no Firebase Authentication
    await signInWithEmailAndPassword(auth, email, password);
    
    // Sucesso absoluto -> Segue para a página logada
    window.location.href = 'home.html';
  } catch (error) {
    console.error("Erro ao autenticar login no Firebase:", error);
    alert(currentLang === 'en' ? "Login failed: Invalid email or password." : "Falha no login: Usuário ou senha incorretos.");
  }
});

/* ── ÍCONE INFO / TOOLTIP ── */
document.querySelectorAll('.info-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = btn.classList.contains('is-open');
    document.querySelectorAll('.info-btn.is-open').forEach(b => b.classList.remove('is-open'));
    if (!isOpen) btn.classList.add('is-open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.info-btn.is-open').forEach(b => b.classList.remove('is-open'));
});

/* ── CARROSSEL ── */
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

/* ── PLANOS: MENSAL / ANUAL ── */
const planData = {
  pessoal: { mensal:{valor:35, pk:'per_month', ek:''},
              anual: {valor:30, pk:'per_month', ek:'economy_personal'} },
  corp:    { mensal:{valor:20, pk:'per_person_month', ek:''},
              anual: {valor:15, pk:'per_person_month', ek:'economy_corp'} }
};

function updatePlanPeriodTexts() {
  ['pessoal','corp'].forEach(plan => {
    const group = document.querySelector(`[data-plan="${plan}"].active`);
    if (!group) return;
    const period = group.dataset.period;
    const data   = planData[plan][period];
    const suffix = plan === 'pessoal' ? 'Pessoal' : 'Corp';
    const priceEl = document.getElementById(`price${suffix}`);
    const econEl  = document.getElementById(`economy${suffix}`);
    if (!priceEl) return;
    priceEl.querySelector('.plano-price__period').textContent = i18n[currentLang][data.pk];
    if (data.ek) {
      econEl.textContent = i18n[currentLang][data.ek];
      econEl.style.visibility = 'visible';
    } else {
      econEl.style.visibility = 'hidden';
    }
  });
}

document.querySelectorAll('.plano-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
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
      econEl.textContent = i18n[currentLang][data.ek];
      econEl.style.visibility = 'visible';
    } else {
      econEl.style.visibility = 'hidden';
    }
  });
});

/* ── INIT ── */
applyTranslations('pt');