/* ── TRADUÇÕES ── */
const i18n = {
  pt: {
    nav_login:'Login',
    back:'Voltar',
    monthly:'Mensal', annual:'Anual',
    per_month:'/mês',
    economy_personal:'Economize R$60 por ano',
    resumo_nome:'Plano Pessoal', resumo_desc:'Acesso individual completo',
    pf1:'Perfil individual de tarefas', pf2:'Agenda completa', pf3:'Controle financeiro',
    pf4:'Previsão do tempo', pf5:'Armazenamento de arquivos',
    total_label:'Total hoje',
    garantia:'Pagamento 100% seguro · Cancele quando quiser',
    step_dados:'Seus dados', step_pagamento:'Pagamento', step_confirmacao:'Confirmação',
    sec_dados:'Confirme seus dados', sec_pagamento:'Forma de pagamento',
    label_name:'Nome completo', label_email:'E-mail',
    label_cpf:'CPF', label_tel:'Telefone',
    ph_name:'Seu nome completo', ph_email:'seu@email.com',
    btn_next_payment:'Ir para pagamento',
    tab_card:'Cartão',
    card_number:'Número do cartão', card_holder:'Nome no cartão',
    card_exp:'Validade', card_cvv:'CVV',
    card_name:'Nome', card_name_ph:'SEU NOME',
    ph_card_name:'Como está no cartão',
    label_parcelas:'Parcelas',
    pix_inst:'Abra o app do seu banco, escaneie o QR Code e confirme o pagamento.',
    pix_copy:'Copiar', pix_copied:'Copiado!',
    pix_exp:'Este código expira em <strong>30 minutos</strong>.',
    boleto_inst:'O boleto será gerado após a confirmação. O prazo de vencimento é de <strong>3 dias úteis</strong>.',
    boleto_obs:'Seu acesso será liberado assim que o pagamento for compensado.',
    btn_confirm:'Confirmar pagamento',
    confirm_title:'Pagamento confirmado!',
    confirm_sub:'Sua conta foi ativada. Bem-vindo à daily!',
    receipt_plan:'Plano', receipt_period:'Período',
    btn_access:'Acessar minha conta',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    err_nome:'Preencha seu nome completo.',
    err_email:'Insira um e-mail válido.',
    err_cpf:'CPF inválido.',
    err_tel:'Telefone inválido.',
    err_card_number:'Número de cartão inválido.',
    err_card_name:'Informe o nome como está no cartão.',
    err_card_exp:'Validade inválida (MM/AA).',
    err_card_cvv:'CVV inválido.',
    period_mensal:'Mensal', period_anual:'Anual',
  },
  es: {
    nav_login:'Iniciar sesión',
    back:'Volver',
    monthly:'Mensual', annual:'Anual',
    per_month:'/mes',
    economy_personal:'Ahorra R$60 al año',
    resumo_nome:'Plan Personal', resumo_desc:'Acceso individual completo',
    pf1:'Perfil individual de tareas', pf2:'Agenda completa', pf3:'Control financiero',
    pf4:'Pronóstico del tiempo', pf5:'Almacenamiento de archivos',
    total_label:'Total hoy',
    garantia:'Pago 100% seguro · Cancela cuando quieras',
    step_dados:'Tus datos', step_pagamento:'Pago', step_confirmacao:'Confirmación',
    sec_dados:'Confirma tus datos', sec_pagamento:'Forma de pago',
    label_name:'Nombre completo', label_email:'Correo electrónico',
    label_cpf:'CPF / Documento', label_tel:'Teléfono',
    ph_name:'Tu nombre completo', ph_email:'tu@correo.com',
    btn_next_payment:'Ir al pago',
    tab_card:'Tarjeta',
    card_number:'Número de tarjeta', card_holder:'Nombre en la tarjeta',
    card_exp:'Vencimiento', card_cvv:'CVV',
    card_name:'Nombre', card_name_ph:'TU NOMBRE',
    ph_card_name:'Como aparece en la tarjeta',
    label_parcelas:'Cuotas',
    pix_inst:'Abre la app de tu banco, escanea el código QR y confirma el pago.',
    pix_copy:'Copiar', pix_copied:'¡Copiado!',
    pix_exp:'Este código vence en <strong>30 minutos</strong>.',
    boleto_inst:'El boleto se generará después de la confirmación. Vence en <strong>3 días hábiles</strong>.',
    boleto_obs:'Tu acceso se habilitará cuando el pago sea procesado.',
    btn_confirm:'Confirmar pago',
    confirm_title:'¡Pago confirmado!',
    confirm_sub:'Tu cuenta fue activada. ¡Bienvenido a daily!',
    receipt_plan:'Plan', receipt_period:'Período',
    btn_access:'Acceder a mi cuenta',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    err_nome:'Completa tu nombre completo.',
    err_email:'Ingresa un correo válido.',
    err_cpf:'Documento inválido.',
    err_tel:'Teléfono inválido.',
    err_card_number:'Número de tarjeta inválido.',
    err_card_name:'Ingresa el nombre como aparece en la tarjeta.',
    err_card_exp:'Vencimiento inválido (MM/AA).',
    err_card_cvv:'CVV inválido.',
    period_mensal:'Mensual', period_anual:'Anual',
  },
  en: {
    nav_login:'Login',
    back:'Back',
    monthly:'Monthly', annual:'Annual',
    per_month:'/mo',
    economy_personal:'Save R$60 per year',
    resumo_nome:'Personal Plan', resumo_desc:'Full individual access',
    pf1:'Individual task profile', pf2:'Full calendar', pf3:'Financial control',
    pf4:'Weather forecast', pf5:'File storage',
    total_label:'Total today',
    garantia:'100% secure payment · Cancel anytime',
    step_dados:'Your details', step_pagamento:'Payment', step_confirmacao:'Confirmation',
    sec_dados:'Confirm your details', sec_pagamento:'Payment method',
    label_name:'Full name', label_email:'E-mail',
    label_cpf:'Tax ID', label_tel:'Phone',
    ph_name:'Your full name', ph_email:'you@email.com',
    btn_next_payment:'Go to payment',
    tab_card:'Card',
    card_number:'Card number', card_holder:'Name on card',
    card_exp:'Expiry', card_cvv:'CVV',
    card_name:'Name', card_name_ph:'YOUR NAME',
    ph_card_name:'As it appears on the card',
    label_parcelas:'Installments',
    pix_inst:'Open your bank app, scan the QR Code and confirm the payment.',
    pix_copy:'Copy', pix_copied:'Copied!',
    pix_exp:'This code expires in <strong>30 minutes</strong>.',
    boleto_inst:'The boleto will be generated after confirmation. It expires in <strong>3 business days</strong>.',
    boleto_obs:'Your access will be released once payment is processed.',
    btn_confirm:'Confirm payment',
    confirm_title:'Payment confirmed!',
    confirm_sub:'Your account is now active. Welcome to daily!',
    receipt_plan:'Plan', receipt_period:'Period',
    btn_access:'Access my account',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
    copyright:'© 2026 Daily. All rights reserved.',
    err_nome:'Please enter your full name.',
    err_email:'Please enter a valid email.',
    err_cpf:'Invalid ID.',
    err_tel:'Invalid phone number.',
    err_card_number:'Invalid card number.',
    err_card_name:'Enter the name as it appears on your card.',
    err_card_exp:'Invalid expiry (MM/YY).',
    err_card_cvv:'Invalid CVV.',
    period_mensal:'Monthly', period_anual:'Annual',
  }
};

/* ── STATE ── */
let currentLang   = 'pt';
let currentPeriod = 'mensal';
const planData = {
  mensal: { valor: 35, totalBRL: 'R$ 35,00' },
  anual:  { valor: 30, totalBRL: 'R$ 360,00' }
};

/* ── APPLY TRANSLATIONS ── */
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

  updatePeriodUI();
  updateCardPreviewPlaceholders();
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
themeBtn.addEventListener('click', () =>
  setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
);
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

/* ── TOGGLE MENSAL / ANUAL ── */
function updatePeriodUI() {
  const t    = i18n[currentLang];
  const data = planData[currentPeriod];

  document.getElementById('resumoValor').textContent  = data.valor;
  document.getElementById('resumoPeriod').textContent = t.per_month;
  document.getElementById('resumoTotal').textContent  = data.totalBRL;

  const econEl = document.getElementById('resumoEconomy');
  if (currentPeriod === 'anual') {
    econEl.textContent = t.economy_personal;
    econEl.classList.add('visible');
  } else {
    econEl.classList.remove('visible');
  }

  // Recibo
  const rp = document.getElementById('receiptPeriod');
  const rt = document.getElementById('receiptTotal');
  if (rp) rp.textContent = currentPeriod === 'mensal' ? t.period_mensal : t.period_anual;
  if (rt) rt.textContent  = data.totalBRL;

  // Parcelas
  const sel = document.getElementById('selectParcelas');
  if (sel) {
    if (currentPeriod === 'mensal') {
      sel.innerHTML = `
        <option value="1">1× de R$ 35,00 (sem juros)</option>
        <option value="2">2× de R$ 17,50 (sem juros)</option>
        <option value="3">3× de R$ 11,67 (sem juros)</option>
      `;
    } else {
      sel.innerHTML = `
        <option value="1">1× de R$ 360,00 (sem juros)</option>
        <option value="2">2× de R$ 180,00 (sem juros)</option>
        <option value="3">3× de R$ 120,00 (sem juros)</option>
        <option value="6">6× de R$ 60,00 (sem juros)</option>
        <option value="12">12× de R$ 30,00 (sem juros)</option>
      `;
    }
  }
}

document.querySelectorAll('.resumo-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.resumo-toggle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPeriod = btn.dataset.period;
    updatePeriodUI();
  });
});

/* ── STEPS ── */
let currentStep = 1;
const btnVoltar = document.getElementById('btnVoltar');

function goToStep(n) {
  currentStep = n;

  document.getElementById('stepDados').style.display       = n === 1 ? 'block' : 'none';
  document.getElementById('stepPagamento').style.display   = n === 2 ? 'block' : 'none';
  document.getElementById('stepConfirmacao').style.display = n === 3 ? 'block' : 'none';

  // Botão voltar: só aparece nos steps 2 e 3
  btnVoltar.style.display = n > 1 ? 'flex' : 'none';

  [1,2,3].forEach(i => {
    const ind = document.getElementById(`step${i}-indicator`);
    ind.classList.remove('active','done');
    const num = ind.querySelector('.step__num');

    if (i < n) {
      ind.classList.add('done');
      num.textContent = '✓';
    } else {
      if (!num.dataset.orig) num.dataset.orig = String(i);
      num.textContent = num.dataset.orig;
      if (i === n) ind.classList.add('active');
    }
  });

  document.querySelector('.pagar-scroll').scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── VOLTAR ── */
btnVoltar.addEventListener('click', () => {
  if (currentStep > 1) goToStep(currentStep - 1);
});

/* ── VALIDAÇÃO ── */
function setError(input, msg) {
  input.classList.add('error');
  let hint = input.parentElement.querySelector('.field-error');
  if (!hint) {
    hint = document.createElement('span');
    hint.className = 'field-error';
    hint.style.cssText = 'font-size:.73rem;color:#e55;margin-top:.2rem;display:block;';
    input.parentElement.appendChild(hint);
  }
  hint.textContent = msg;
}
function clearError(input) {
  input.classList.remove('error');
  const hint = input.parentElement.querySelector('.field-error');
  if (hint) hint.remove();
}

function validateStep1() {
  const t     = i18n[currentLang];
  const nome  = document.getElementById('pagNome');
  const email = document.getElementById('pagEmail');
  const cpf   = document.getElementById('pagCpf');
  const tel   = document.getElementById('pagTel');
  [nome,email,cpf,tel].forEach(clearError);
  let ok = true;
  if (nome.value.trim().length < 3)                             { setError(nome,  t.err_nome);  ok=false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))  { setError(email, t.err_email); ok=false; }
  if (cpf.value.replace(/\D/g,'').length < 11)                  { setError(cpf,   t.err_cpf);   ok=false; }
  if (tel.value.replace(/\D/g,'').length < 10)                  { setError(tel,   t.err_tel);   ok=false; }
  return ok;
}

function validateStep2() {
  const t      = i18n[currentLang];
  const method = document.querySelector('.pay-tab.active').dataset.method;
  if (method !== 'cartao') return true;
  const num  = document.getElementById('cardNumber');
  const name = document.getElementById('cardName');
  const exp  = document.getElementById('cardExp');
  const cvv  = document.getElementById('cardCvv');
  [num,name,exp,cvv].forEach(clearError);
  let ok = true;
  if (num.value.replace(/\D/g,'').length < 16)  { setError(num,  t.err_card_number); ok=false; }
  if (name.value.trim().length < 3)              { setError(name, t.err_card_name);   ok=false; }
  if (!/^\d{2}\/\d{2}$/.test(exp.value.trim())) { setError(exp,  t.err_card_exp);    ok=false; }
  if (cvv.value.replace(/\D/g,'').length < 3)   { setError(cvv,  t.err_card_cvv);    ok=false; }
  return ok;
}

document.getElementById('btnStep1').addEventListener('click', () => {
  if (validateStep1()) goToStep(2);
});

document.getElementById('btnStep2').addEventListener('click', () => {
  if (validateStep2()) {
    updatePeriodUI();
    goToStep(3);
  }
});

document.getElementById('btnAcessar').addEventListener('click', () => {
  window.location.href = 'index.html';
});

/* ── FORMATAÇÃO CPF ── */
document.getElementById('pagCpf').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').slice(0,11);
  if (v.length > 9)      v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/,'$1.$2.$3-$4');
  else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/,'$1.$2.$3');
  else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/,'$1.$2');
  this.value = v;
});

/* ── FORMATAÇÃO TELEFONE ── */
document.getElementById('pagTel').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').slice(0,11);
  if (v.length > 10)     v = v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
  else if (v.length > 6) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
  else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/,'($1) $2');
  this.value = v;
});

/* ── CARTÃO: NÚMERO ── */
document.getElementById('cardNumber').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').slice(0,16);
  v = v.replace(/(.{4})(?=.)/g,'$1 ');
  this.value = v;
  const digits = v.replace(/\s/g,'');
  let display = '';
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) display += ' ';
    display += (i < 12) ? (digits[i] ? '•' : '•') : (digits[i] || '•');
  }
  document.getElementById('prevNumber').textContent = display;
});

/* ── CARTÃO: NOME ── */
document.getElementById('cardName').addEventListener('input', function() {
  const v = this.value.toUpperCase().slice(0,26);
  this.value = v;
  const t = i18n[currentLang];
  document.getElementById('prevName').textContent = v || t.card_name_ph || 'SEU NOME';
});

/* ── CARTÃO: VALIDADE ── */
document.getElementById('cardExp').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').slice(0,4);
  if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
  this.value = v;
  document.getElementById('prevExp').textContent = v || 'MM/AA';
});

/* ── TOGGLE CVV ── */
document.getElementById('toggleCvv').addEventListener('click', () => {
  const inp = document.getElementById('cardCvv');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});

function updateCardPreviewPlaceholders() {
  const name = document.getElementById('cardName').value;
  const t    = i18n[currentLang];
  if (!name) document.getElementById('prevName').textContent = t.card_name_ph || 'SEU NOME';
}

/* ── PAY TABS ── */
document.querySelectorAll('.pay-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const method = tab.dataset.method;
    document.getElementById('panelCartao').style.display = method === 'cartao' ? 'block' : 'none';
    document.getElementById('panelPix').style.display    = method === 'pix'    ? 'block' : 'none';
    document.getElementById('panelBoleto').style.display = method === 'boleto' ? 'block' : 'none';
  });
});

/* ── PIX COPY ── */
document.getElementById('pixCopyBtn').addEventListener('click', function() {
  const t = i18n[currentLang];
  navigator.clipboard.writeText(document.getElementById('pixCode').value).catch(() => {});
  this.textContent = t.pix_copied;
  this.classList.add('copied');
  setTimeout(() => {
    this.textContent = t.pix_copy;
    this.classList.remove('copied');
  }, 2000);
});

/* ── INIT ── */
applyTranslations('pt');
updatePeriodUI();