/* ── LOGIN / CADASTRO ── */
const mainForm     = document.getElementById('mainForm');
const formTitle    = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const fieldName    = document.getElementById('fieldName');
const forgotLink   = document.getElementById('forgotLink');
const submitBtn    = document.getElementById('submitBtn');
const toggleBtn    = document.getElementById('toggleBtn');
const toggleText   = document.getElementById('toggleText');
const togglePass   = document.getElementById('togglePass');
const passwordInput = document.getElementById('password');

let isLogin = true;

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent    = 'Bem-vindo de volta';
    formSubtitle.textContent = 'Acesse sua conta para continuar';
    fieldName.style.display  = 'none';
    forgotLink.style.display = 'block';
    submitBtn.textContent    = 'Entrar';
    toggleText.textContent   = 'Não tem conta?';
    toggleBtn.textContent    = 'Criar conta gratuita';
  } else {
    formTitle.textContent    = 'Criar conta';
    formSubtitle.textContent = 'Preencha seus dados para começar';
    fieldName.style.display  = 'block';
    forgotLink.style.display = 'none';
    submitBtn.textContent    = 'Criar conta';
    toggleText.textContent   = 'Já tem conta?';
    toggleBtn.textContent    = 'Fazer login';
  }
});

togglePass.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePass.setAttribute('aria-label', isHidden ? 'Ocultar senha' : 'Mostrar senha');
});

mainForm.addEventListener('submit', e => e.preventDefault());

/* ── CARROSSEL ── */
const track   = document.getElementById('carouselTrack');
const dots    = document.querySelectorAll('.carousel-dot');
const navLinks = document.querySelectorAll('.nav-link');
let current = 0;

function goToSlide(index) {
  current = index;
  track.style.transform = `translateX(-${index * 50}%)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  navLinks.forEach(l => {
    const panel = l.dataset.panel;
    l.classList.toggle('active',
      (index === 0 && panel === 'sobre') ||
      (index === 1 && panel === 'planos')
    );
  });
}

document.getElementById('arrowLeft').addEventListener('click', () => {
  goToSlide(current === 0 ? 1 : 0);
});

document.getElementById('arrowRight').addEventListener('click', () => {
  goToSlide(current === 1 ? 0 : 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => goToSlide(+dot.dataset.dot));
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    goToSlide(link.dataset.panel === 'planos' ? 1 : 0);
  });
});

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

    const data     = planData[plan][period];
    const priceEl  = document.getElementById(plan === 'pessoal' ? 'pricePessoal' : 'priceCorp');
    const econEl   = document.getElementById(plan === 'pessoal' ? 'economyPessoal' : 'economyCorp');

    priceEl.querySelector('.plano-price__value').textContent  = data.valor;
    priceEl.querySelector('.plano-price__period').textContent = data.periodo;

    if (data.economy) {
      econEl.textContent   = data.economy;
      econEl.style.visibility = 'visible';
    } else {
      econEl.style.visibility = 'hidden';
    }
  });
});