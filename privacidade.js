/* ── TRADUÇÕES ── */
const i18n = {
    pt: {
      backLink:'← Voltar', pageTitle:'Privacidade', sidebarLabel:'Nesta página',
      updatedLabel:'Atualizado em:', heroTag:'Política de Privacidade',
      heroTitle:'Seus dados, seu controle',
      heroSub:'A daily é transparente sobre como cuida das suas informações. Esta política explica tudo de forma clara e direta.',
      badge1:'LGPD', badge2:'GDPR Ready', badge3:'Dados Criptografados',
      s1_title:'Sobre nós', s2_title:'Dados coletados', s3_title:'Como usamos',
      s4_title:'Compartilhamento', s5_title:'Seus direitos', s6_title:'Cookies',
      s7_title:'Segurança', s8_title:'Menores', s9_title:'Alterações', s10_title:'Contato',
      s1_p1:'A <strong>Daily Tecnologia Ltda.</strong>, com sede em São Paulo, é responsável pelo tratamento dos seus dados pessoais na plataforma daily.',
      s1_p2:'Esta política se aplica ao site, ao aplicativo e a todos os serviços da daily.',
      s2_intro:'Coletamos apenas o necessário:',
      s2_li1:'Nome, e-mail e senha (com hash seguro)',
      s2_li2:'Tarefas, eventos e arquivos criados na plataforma',
      s2_li3:'Dados técnicos: IP, dispositivo e logs de acesso',
      s2_li4:'Dados de pagamento processados por gateway seguro (não armazenamos dados de cartão)',
      s3_li1:'Criar e manter sua conta',
      s3_li2:'Fornecer e melhorar os recursos da plataforma',
      s3_li3:'Enviar atualizações e comunicações essenciais',
      s3_li4:'Garantir a segurança da plataforma',
      s3_li5:'Cumprir obrigações legais',
      s3_notice:'Não usamos seus dados para publicidade de terceiros e não os vendemos para nenhuma empresa.',
      s4_p1:'Seus dados são compartilhados somente com:',
      s4_li1:'Parceiros técnicos contratualmente vinculados às mesmas obrigações de privacidade',
      s4_li2:'Autoridades, quando exigido por lei ou ordem judicial',
      s4_li3:'Terceiros, apenas com sua autorização explícita',
      s5_intro:'Pela LGPD (Lei 13.709/2018), você pode:',
      s5_li1:'Acessar, corrigir ou excluir seus dados',
      s5_li2:'Solicitar portabilidade das informações',
      s5_li3:'Revogar seu consentimento a qualquer momento',
      s5_li4:'Ser informado sobre como seus dados são usados',
      s5_contact:'Entre em contato pelo e-mail <a href="mailto:privacidade@daily.app" class="priv-link">privacidade@daily.app</a>. Respondemos em até 15 dias úteis.',
      s6_p1:'Usamos cookies para manter sua sessão, lembrar preferências e analisar o uso da plataforma de forma anonimizada. Você pode desativá-los nas configurações do navegador.',
      s7_li1:'Criptografia TLS em todas as comunicações',
      s7_li2:'Senhas armazenadas com bcrypt',
      s7_li3:'Acesso restrito a dados por equipe autorizada',
      s7_li4:'Backups criptografados com retenção de 90 dias',
      s7_p2:'Em caso de incidente, notificaremos os usuários afetados e a ANPD nos prazos da LGPD.',
      s8_p:'A plataforma é destinada a maiores de 13 anos. Caso identifiquemos dados de menores coletados sem consentimento parental, os excluiremos imediatamente.',
      s9_p:'Podemos atualizar esta política. Quando houver mudanças relevantes, você será avisado por e-mail ou na plataforma com pelo menos 15 dias de antecedência.',
      s10_p:'Dúvidas ou solicitações sobre privacidade:',
      ct1_l:'Privacidade', ct2_l:'DPO', ct3_l:'Endereço', ct3_v:'Av. Paulista, 1000 — São Paulo, SP',
      copyright:'© 2026 Daily. Todos os direitos reservados.',
      privacy:'Privacidade', terms:'Termos', contact:'Contato',
    },
    es: {
      backLink:'← Volver', pageTitle:'Privacidad', sidebarLabel:'En esta página',
      updatedLabel:'Actualizado el:', heroTag:'Política de Privacidad',
      heroTitle:'Tus datos, tu control',
      heroSub:'daily es transparente sobre cómo cuida tu información. Esta política explica todo de forma clara y directa.',
      badge1:'LGPD', badge2:'GDPR Ready', badge3:'Datos Cifrados',
      s1_title:'Quiénes somos', s2_title:'Datos recopilados', s3_title:'Cómo los usamos',
      s4_title:'Compartir', s5_title:'Tus derechos', s6_title:'Cookies',
      s7_title:'Seguridad', s8_title:'Menores', s9_title:'Cambios', s10_title:'Contacto',
      s1_p1:'La <strong>Daily Tecnología Ltda.</strong>, con sede en São Paulo, es responsable del tratamiento de tus datos en la plataforma daily.',
      s1_p2:'Esta política aplica al sitio web, la aplicación y todos los servicios de daily.',
      s2_intro:'Recopilamos solo lo necesario:',
      s2_li1:'Nombre, correo y contraseña (con hash seguro)',
      s2_li2:'Tareas, eventos y archivos creados en la plataforma',
      s2_li3:'Datos técnicos: IP, dispositivo y registros de acceso',
      s2_li4:'Datos de pago procesados por pasarela segura (no almacenamos datos de tarjeta)',
      s3_li1:'Crear y mantener tu cuenta',
      s3_li2:'Ofrecer y mejorar los recursos de la plataforma',
      s3_li3:'Enviar actualizaciones y comunicaciones esenciales',
      s3_li4:'Garantizar la seguridad de la plataforma',
      s3_li5:'Cumplir obligaciones legales',
      s3_notice:'No usamos tus datos para publicidad de terceros y no los vendemos a ninguna empresa.',
      s4_p1:'Tus datos se comparten solo con:',
      s4_li1:'Socios técnicos vinculados contractualmente a las mismas obligaciones de privacidad',
      s4_li2:'Autoridades, cuando lo exija la ley u orden judicial',
      s4_li3:'Terceros, solo con tu autorización explícita',
      s5_intro:'Por la LGPD (Ley 13.709/2018), puedes:',
      s5_li1:'Acceder, corregir o eliminar tus datos',
      s5_li2:'Solicitar portabilidad de la información',
      s5_li3:'Revocar tu consentimiento en cualquier momento',
      s5_li4:'Ser informado sobre cómo se usan tus datos',
      s5_contact:'Contáctanos en <a href="mailto:privacidade@daily.app" class="priv-link">privacidade@daily.app</a>. Respondemos en hasta 15 días hábiles.',
      s6_p1:'Usamos cookies para mantener tu sesión, recordar preferencias y analizar el uso de la plataforma de forma anonimizada. Puedes desactivarlas en la configuración del navegador.',
      s7_li1:'Cifrado TLS en todas las comunicaciones',
      s7_li2:'Contraseñas almacenadas con bcrypt',
      s7_li3:'Acceso restringido a datos por equipo autorizado',
      s7_li4:'Copias de seguridad cifradas con retención de 90 días',
      s7_p2:'En caso de incidente, notificaremos a los usuarios afectados y a la ANPD en los plazos de la LGPD.',
      s8_p:'La plataforma es para mayores de 13 años. Si identificamos datos de menores sin consentimiento parental, los eliminaremos de inmediato.',
      s9_p:'Podemos actualizar esta política. Cuando haya cambios relevantes, serás avisado por correo o en la plataforma con al menos 15 días de anticipación.',
      s10_p:'Dudas o solicitudes sobre privacidad:',
      ct1_l:'Privacidad', ct2_l:'DPO', ct3_l:'Dirección', ct3_v:'Av. Paulista, 1000 — São Paulo, SP',
      copyright:'© 2026 Daily. Todos los derechos reservados.',
      privacy:'Privacidad', terms:'Términos', contact:'Contacto',
    },
    en: {
      backLink:'← Back', pageTitle:'Privacy', sidebarLabel:'On this page',
      updatedLabel:'Updated on:', heroTag:'Privacy Policy',
      heroTitle:'Your data, your control',
      heroSub:'daily is transparent about how it takes care of your information. This policy explains everything clearly and directly.',
      badge1:'LGPD', badge2:'GDPR Ready', badge3:'Encrypted Data',
      s1_title:'About us', s2_title:'Data collected', s3_title:'How we use it',
      s4_title:'Sharing', s5_title:'Your rights', s6_title:'Cookies',
      s7_title:'Security', s8_title:'Minors', s9_title:'Changes', s10_title:'Contact',
      s1_p1:'<strong>Daily Tecnologia Ltda.</strong>, headquartered in São Paulo, is responsible for processing your personal data on the daily platform.',
      s1_p2:'This policy applies to the website, the app, and all daily services.',
      s2_intro:'We collect only what is necessary:',
      s2_li1:'Name, email and password (with secure hash)',
      s2_li2:'Tasks, events and files created on the platform',
      s2_li3:'Technical data: IP, device and access logs',
      s2_li4:'Payment data processed by a secure gateway (we do not store card details)',
      s3_li1:'Create and maintain your account',
      s3_li2:'Provide and improve platform features',
      s3_li3:'Send essential updates and communications',
      s3_li4:'Ensure platform security',
      s3_li5:'Comply with legal obligations',
      s3_notice:'We do not use your data for third-party advertising and do not sell it to any company.',
      s4_p1:'Your data is shared only with:',
      s4_li1:'Technical partners contractually bound by the same privacy obligations',
      s4_li2:'Authorities, when required by law or court order',
      s4_li3:'Third parties, only with your explicit consent',
      s5_intro:'Under LGPD (Law 13,709/2018), you can:',
      s5_li1:'Access, correct or delete your data',
      s5_li2:'Request data portability',
      s5_li3:'Revoke your consent at any time',
      s5_li4:'Be informed about how your data is used',
      s5_contact:'Contact us at <a href="mailto:privacidade@daily.app" class="priv-link">privacidade@daily.app</a>. We respond within 15 business days.',
      s6_p1:'We use cookies to maintain your session, remember preferences, and analyze platform usage anonymously. You can disable them in browser settings.',
      s7_li1:'TLS encryption on all communications',
      s7_li2:'Passwords stored with bcrypt',
      s7_li3:'Restricted data access by authorized team only',
      s7_li4:'Encrypted backups with 90-day retention',
      s7_p2:'In case of an incident, we will notify affected users and ANPD within LGPD deadlines.',
      s8_p:'The platform is for users aged 13 and over. If we identify data from minors collected without parental consent, we will delete it immediately.',
      s9_p:'We may update this policy. When there are relevant changes, you will be notified by email or on the platform with at least 15 days notice.',
      s10_p:'Questions or privacy requests:',
      ct1_l:'Privacy', ct2_l:'DPO', ct3_l:'Address', ct3_v:'Av. Paulista, 1000 — São Paulo, SP',
      copyright:'© 2026 Daily. All rights reserved.',
      privacy:'Privacy', terms:'Terms', contact:'Contact',
    }
  };
  
  let currentLang = 'pt';
  
  function applyTranslations(lang) {
    currentLang = lang;
    const t = i18n[lang];
    document.documentElement.lang = { pt:'pt-BR', es:'es', en:'en' }[lang];
  
    // IDs diretos
    ['backLink','pageTitle','sidebarLabel','updatedLabel',
     'heroTag','heroTitle','heroSub','badge1','badge2','badge3'].forEach(id => {
      const el = document.getElementById(id);
      if (el && t[id] !== undefined) el.innerHTML = t[id];
    });
  
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-h]').forEach(el => {
      const k = el.dataset.i18nH;
      if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-sn]').forEach(el => {
      const k = el.dataset.i18nSn;
      if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-p]').forEach(el => {
      const k = el.dataset.i18nP;
      if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-li]').forEach(el => {
      const k = el.dataset.i18nLi;
      if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-ct]').forEach(el => {
      const k = el.dataset.i18nCt;
      if (t[k] !== undefined) el.textContent = t[k];
    });
  
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang)
    );
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
  
  const saved = localStorage.getItem('daily-theme');
  setTheme(saved || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'));
  
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
  
  /* ── SCROLL SPY ── */
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections     = document.querySelectorAll('.priv-section');
  const bodyEl       = document.getElementById('privBody');
  
  function onScroll() {
    let active = '';
    sections.forEach(sec => {
      if (bodyEl.scrollTop >= sec.offsetTop - 60) active = sec.id;
    });
    sidebarLinks.forEach(l =>
      l.classList.toggle('active', l.getAttribute('href') === `#${active}`)
    );
  }
  
  if (bodyEl) bodyEl.addEventListener('scroll', onScroll);
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target && bodyEl) bodyEl.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
    });
  });
  
  /* ── INIT ── */
  applyTranslations('pt');