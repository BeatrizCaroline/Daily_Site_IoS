const mainForm      = document.getElementById('mainForm');
const formTitle     = document.getElementById('formTitle');
const formSubtitle  = document.getElementById('formSubtitle');
const formFields    = document.getElementById('formFields');
const forgotLink    = document.getElementById('forgotLink');
const submitBtn     = document.getElementById('submitBtn');
const toggleBtn     = document.getElementById('toggleBtn');
const toggleText    = document.getElementById('toggleText');
const togglePass    = document.getElementById('togglePass');
const passwordInput = document.getElementById('password');

let isLogin = true;
let isMobile = window.matchMedia('(max-width: 768px)').matches;

function setFormMode(login, animate = true) {
  isLogin = login;

  formTitle.style.opacity = 0;
  formSubtitle.style.opacity = 0;

  setTimeout(() => {
    if (isLogin) {
      formTitle.textContent    = 'Bem-vindo de volta';
      formSubtitle.textContent = 'Acesse sua conta para continuar';
      submitBtn.textContent    = 'Entrar';
      toggleText.textContent   = 'Não tem conta?';
      toggleBtn.textContent    = 'Criar conta gratuita';
      formFields.classList.remove('is-signup');
      forgotLink.classList.remove('is-hidden');
    } else {
      formTitle.textContent    = 'Criar conta';
      formSubtitle.textContent = 'Preencha seus dados para começar';
      submitBtn.textContent    = 'Criar conta';
      toggleText.textContent   = 'Já tem conta?';
      toggleBtn.textContent    = 'Fazer login';
      formFields.classList.add('is-signup');
      forgotLink.classList.add('is-hidden');
    }

    formTitle.style.opacity = 1;
    formSubtitle.style.opacity = 1;
  }, animate ? 160 : 0);
}

formTitle.style.transition = 'opacity .16s ease';
formSubtitle.style.transition = 'opacity .16s ease';

toggleBtn.addEventListener('click', () => setFormMode(!isLogin));

togglePass.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePass.setAttribute('aria-label', isHidden ? 'Ocultar senha' : 'Mostrar senha');
});

mainForm.addEventListener('submit', e => e.preventDefault());

/* ── CARROSSEL ── */
const track      = document.getElementById('carouselTrack');
const dots       = document.querySelectorAll('.carousel-dot');
const navLinks   = document.querySelectorAll('.nav-link');
const headerNav  = document.getElementById('headerNav');
const panelLeft  = document.getElementById('panelLeft');
const panelRight = document.getElementById('panelRight');
let current = 0;

function goToSlide(index) {
  current = index;
  track.style.transform = `translateX(-${index * 50}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  updateNavActiveState();
}

function updateNavActiveState() {
  navLinks.forEach(l => {
    const panel = l.dataset.panel;
    if (panel === 'login') return;
    l.classList.toggle('active', (current === 0 && panel === 'sobre') || (current === 1 && panel === 'planos'));
  });
}

document.getElementById('arrowLeft').addEventListener('click', () => {
  goToSlide(current === 0 ? 1 : 0);
});
document.getElementById('arrowRight').addEventListener('click', () => {
  goToSlide(current === 1 ? 0 : 1);
});
dots.forEach(dot => dot.addEventListener('click', () => goToSlide(+dot.dataset.dot)));

/* ── MOBILE: alterna entre login e carrossel ── */
function showCarouselMobile(slideIndex) {
  panelLeft.classList.add('is-hidden');
  panelRight.classList.add('is-active');
  headerNav.classList.add('is-carousel-mode');
  goToSlide(slideIndex);
}

function showLoginMobile() {
  panelLeft.classList.remove('is-hidden');
  panelRight.classList.remove('is-active');
  headerNav.classList.remove('is-carousel-mode');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const panel = link.dataset.panel;

    if (!isMobile) {
      if (panel !== 'login') goToSlide(panel === 'planos' ? 1 : 0);
      return;
    }

    if (panel === 'login') {
      showLoginMobile();
    } else {
      showCarouselMobile(panel === 'planos' ? 1 : 0);
    }
  });
});

function handleViewportChange() {
  const nowMobile = window.matchMedia('(max-width: 768px)').matches;
  if (nowMobile !== isMobile) {
    isMobile = nowMobile;
    if (isMobile) {
      showLoginMobile();
    } else {
      panelLeft.classList.remove('is-hidden');
      panelRight.classList.remove('is-active');
      headerNav.classList.remove('is-carousel-mode');
      goToSlide(0);
    }
  }
}

window.addEventListener('resize', handleViewportChange);

/* ── PLANOS: toggle mensal/anual ── */
const planData = {
  pessoal: { mensal: { valor: 35, periodo: '/mês', economy: '' },
              anual:  { valor: 30, periodo: '/mês', economy: 'Economize R$60 por ano' } },
  corp:    { mensal: { valor: 20, periodo: '/pessoa/mês', economy: '' },
              anual:  { valor: 15, periodo: '/pessoa/mês', economy: 'Economize R$60 por pessoa/ano' } }
};

document.querySelectorAll('.plano-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan   = btn.dataset.plan;
    const period = btn.dataset.period;
    const group  = btn.closest('.plano-toggle-group');

    group.querySelectorAll('.plano-toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const data    = planData[plan][period];
    const priceEl = document.getElementById(plan === 'pessoal' ? 'pricePessoal' : 'priceCorp');
    const econEl  = document.getElementById(plan === 'pessoal' ? 'economyPessoal' : 'economyCorp');

    priceEl.querySelector('.plano-price__value').textContent  = data.valor;
    priceEl.querySelector('.plano-price__period').textContent = data.periodo;

    if (data.economy) {
      econEl.textContent = data.economy;
      econEl.style.visibility = 'visible';
    } else {
      econEl.style.visibility = 'hidden';
    }
  });
});