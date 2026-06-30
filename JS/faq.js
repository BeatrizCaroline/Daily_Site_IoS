/* ── TRADUÇÕES ── */
const i18n = {
  pt: {
    backLink:'← Voltar', pageTitle:'FAQ',
    hero_tag:'Perguntas Frequentes',
    hero_title:'Como podemos te ajudar?',
    hero_sub:'Encontre respostas rápidas sobre a daily. Não achou o que procura? Fale com a gente.',
    search_ph:'Buscar pergunta...',
    search_empty:'Nenhuma pergunta encontrada para sua busca.',
    tab_all:'Todas', tab_geral:'Geral', tab_planos:'Planos',
    tab_seguranca:'Segurança', tab_func:'Funcionalidades', tab_suporte:'Suporte',
    sec_geral:'Geral', sec_planos:'Planos e Pagamento',
    sec_seguranca:'Segurança e Privacidade',
    sec_func:'Funcionalidades', sec_suporte:'Suporte',
    q1:'Preciso saber usar tecnologia para usar a daily?',
    a1:'Não! A daily foi desenvolvida para ser simples e intuitiva. Se você consegue usar um aplicativo de mensagens, consegue usar a daily.',
    q2:'Posso usar no celular?',
    a2:'Sim! A daily funciona em celular, tablet e computador. Tudo é sincronizado automaticamente entre seus dispositivos.',
    q3:'A daily funciona sem internet?',
    a3:'Algumas funcionalidades básicas funcionam offline, como visualizar tarefas já criadas. Para sincronizar dados e usar recursos como busca de preços e previsão do tempo, é necessária conexão com a internet.',
    q4:'Existe um aplicativo para baixar?',
    a4:'A daily pode ser acessada diretamente pelo navegador do celular ou computador, sem necessidade de download. Também é possível adicioná-la à tela inicial do seu celular para uma experiência parecida com a de um aplicativo nativo.',
    q5:'Posso usar a daily em vários dispositivos ao mesmo tempo?',
    a5:'Sim! Seu acesso é vinculado à sua conta. Você pode estar logado em quantos dispositivos quiser e tudo ficará sincronizado em tempo real.',
    q6:'O teste grátis salva meus dados?',
    a6:'Durante os 7 dias de teste gratuito, os dados não são armazenados permanentemente. Ao assinar qualquer plano pago, seus dados passam a ser salvos com segurança em nossos servidores criptografados.',
    q7:'Preciso de cartão de crédito para o teste grátis?',
    a7:'Não! O teste grátis de 7 dias não exige nenhum dado de pagamento. Você experimenta sem compromisso e decide depois se quer continuar.',
    q8:'Posso mudar de plano depois?',
    a8:'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Em caso de upgrade, você passa a ter acesso imediato aos novos recursos. Em caso de downgrade, a mudança ocorre ao final do ciclo de cobrança atual.',
    q9:'Quais formas de pagamento são aceitas?',
    a9:'Aceitamos cartão de crédito, débito, Pix e boleto bancário. Pagamentos por cartão e Pix são processados instantaneamente. Boletos podem levar até 3 dias úteis para compensar.',
    q10:'Posso cancelar meu plano a qualquer momento?',
    a10:'Sim, sem multa e sem burocracia. Após o cancelamento, você mantém o acesso até o fim do período já pago. Não fazemos cobranças automáticas inesperadas.',
    q11:'O plano anual é mais barato?',
    a11:'Sim! Ao escolher o plano anual, você economiza equivalente a dois meses grátis em relação ao plano mensal. O valor é cobrado uma única vez por ano.',
    q12:'Minha empresa pode contratar a daily?',
    a12:'Sim! Temos o plano Corporativo especialmente para equipes e empresas. O valor é por pessoa por mês e inclui todos os recursos do plano Pessoal, com gerenciamento centralizado da equipe. Entre em contato com nosso time comercial para um atendimento personalizado.',
    q13:'Meus dados estão seguros na daily?',
    a13:'Sim. Utilizamos criptografia TLS em todas as comunicações e bcrypt para armazenar senhas. Nossa infraestrutura está em nuvem com certificações de segurança reconhecidas internacionalmente. Nenhum dado sensível é compartilhado com terceiros.',
    q14:'A daily vende meus dados para anunciantes?',
    a14:'Nunca. A daily não vende e não compartilha seus dados com anunciantes ou qualquer outra empresa para fins comerciais. Nosso modelo de negócio é baseado em assinaturas, não em publicidade.',
    q15:'Como funciona a política de privacidade?',
    a15:'Nossa política de privacidade está disponível na íntegra em nossa página de Privacidade. Seguimos a LGPD (Lei Geral de Proteção de Dados) e as melhores práticas internacionais de privacidade. Você tem direito de acessar, corrigir ou excluir seus dados a qualquer momento.',
    q16:'Posso excluir minha conta e meus dados?',
    a16:'Sim. Você pode solicitar a exclusão completa da sua conta e todos os seus dados a qualquer momento pelo e-mail privacidade@daily.app. Respondemos em até 15 dias úteis conforme previsto na LGPD.',
    q17:'Como funciona a busca de promoções no módulo Casa?',
    a17:'Ao adicionar itens à sua lista de compras, a plataforma busca automaticamente os preços nos principais supermercados do Brasil e mostra a comparação para você. Assim, você sabe exatamente onde vai economizar mais antes de sair de casa.',
    q18:'Posso compartilhar tarefas com outras pessoas?',
    a18:'Sim! Você pode compartilhar listas, tarefas e eventos com outras pessoas, seja dentro do mesmo plano Corporativo ou convidando alguém pelo e-mail. A pessoa receberá um link para colaborar.',
    q19:'A previsão do tempo é atualizada automaticamente?',
    a19:'Sim! A previsão do tempo é atualizada em tempo real com base na sua localização ou em qualquer cidade que você configurar. Você recebe alertas antes de sair de casa se houver chuva ou condições adversas previstas.',
    q20:'Consigo controlar meus gastos detalhadamente?',
    a20:'Sim! O módulo financeiro permite categorizar despesas, definir limites de gastos por categoria, visualizar gráficos mensais e receber alertas quando você estiver próximo do limite. Tudo pensado para facilitar o controle do seu orçamento.',
    q21:'Quantos arquivos posso armazenar?',
    a21:'No plano Pessoal e Corporativo, você tem armazenamento generoso para guardar documentos, imagens e arquivos importantes. O limite exato por plano está disponível na página de Planos. Todos os arquivos são criptografados e acessíveis apenas por você.',
    q22:'A daily se integra com outros aplicativos?',
    a22:'O plano Corporativo inclui integrações com ferramentas populares de produtividade e comunicação. Estamos sempre expandindo as opções de integração com base no feedback dos nossos usuários.',
    q23:'Como falo com o suporte?',
    a23:'Você pode entrar em contato pelo e-mail suporte@daily.app ou pelo chat dentro da própria plataforma. Usuários do plano Corporativo têm suporte prioritário com tempo de resposta reduzido.',
    q24:'Qual é o horário de atendimento?',
    a24:'Nosso suporte por e-mail funciona de segunda a sexta, das 8h às 18h (horário de Brasília). O chat na plataforma pode ter disponibilidade estendida para usuários do plano Corporativo.',
    q25:'Como reporto um problema ou bug?',
    a25:'Você pode reportar pelo e-mail suporte@daily.app ou diretamente pelo menu de ajuda dentro da plataforma. Descreva o problema com o máximo de detalhes possível para agilizarmos a solução.',
    q26:'Tenho uma sugestão de melhoria. Como envio?',
    a26:'Adoramos sugestões! Envie pelo e-mail feedback@daily.app ou use o formulário de feedback disponível dentro da plataforma. Todas as sugestões são lidas e avaliadas pelo nosso time de produto.',
    cta_title:'Ainda tem dúvidas?',
    cta_text:'Nossa equipe está pronta para te ajudar. Fale com a gente pelo e-mail ou acesse a plataforma para usar o chat.',
    cta_btn1:'Falar com suporte', cta_btn2:'Acessar a daily',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    backLink:'← Volver', pageTitle:'FAQ',
    hero_tag:'Preguntas Frecuentes',
    hero_title:'¿Cómo podemos ayudarte?',
    hero_sub:'Encuentra respuestas rápidas sobre daily. ¿No encontraste lo que buscas? Habla con nosotros.',
    search_ph:'Buscar pregunta...',
    search_empty:'No se encontraron preguntas para tu búsqueda.',
    tab_all:'Todas', tab_geral:'General', tab_planos:'Planes',
    tab_seguranca:'Seguridad', tab_func:'Funcionalidades', tab_suporte:'Soporte',
    sec_geral:'General', sec_planos:'Planes y Pagos',
    sec_seguranca:'Seguridad y Privacidad',
    sec_func:'Funcionalidades', sec_suporte:'Soporte',
    q1:'¿Necesito saber usar tecnología para usar daily?',
    a1:'¡No! daily fue desarrollada para ser simple e intuitiva. Si puedes usar una aplicación de mensajes, puedes usar daily.',
    q2:'¿Puedo usarla en el celular?',
    a2:'¡Sí! daily funciona en celular, tablet y computadora. Todo se sincroniza automáticamente entre tus dispositivos.',
    q3:'¿daily funciona sin internet?',
    a3:'Algunas funcionalidades básicas funcionan offline, como ver tareas ya creadas. Para sincronizar datos y usar recursos como búsqueda de precios y pronóstico del tiempo, se necesita conexión a internet.',
    q4:'¿Hay una aplicación para descargar?',
    a4:'daily puede accederse directamente desde el navegador del celular o computadora, sin necesidad de descarga. También puedes agregarla a la pantalla de inicio de tu celular para una experiencia similar a una app nativa.',
    q5:'¿Puedo usar daily en varios dispositivos al mismo tiempo?',
    a5:'¡Sí! Tu acceso está vinculado a tu cuenta. Puedes estar conectado en tantos dispositivos como quieras y todo quedará sincronizado en tiempo real.',
    q6:'¿La prueba gratis guarda mis datos?',
    a6:'Durante los 7 días de prueba gratuita, los datos no se almacenan permanentemente. Al suscribirte a cualquier plan de pago, tus datos pasan a guardarse de forma segura en nuestros servidores cifrados.',
    q7:'¿Necesito tarjeta de crédito para la prueba gratis?',
    a7:'¡No! La prueba gratis de 7 días no requiere ningún dato de pago. Pruebas sin compromiso y decides después si quieres continuar.',
    q8:'¿Puedo cambiar de plan después?',
    a8:'¡Sí! Puedes hacer upgrade o downgrade de tu plan en cualquier momento. En caso de upgrade, tendrás acceso inmediato a los nuevos recursos. En caso de downgrade, el cambio ocurre al final del ciclo de facturación actual.',
    q9:'¿Qué formas de pago se aceptan?',
    a9:'Aceptamos tarjeta de crédito, débito, Pix y boleto bancario. Los pagos por tarjeta y Pix se procesan instantáneamente. Los boletos pueden tardar hasta 3 días hábiles en compensar.',
    q10:'¿Puedo cancelar mi plan en cualquier momento?',
    a10:'Sí, sin multa y sin burocracia. Tras la cancelación, mantienes el acceso hasta el final del período ya pagado. No realizamos cobros automáticos inesperados.',
    q11:'¿El plan anual es más económico?',
    a11:'¡Sí! Al elegir el plan anual, ahorras el equivalente a dos meses gratis respecto al plan mensual. El valor se cobra una sola vez al año.',
    q12:'¿Mi empresa puede contratar daily?',
    a12:'¡Sí! Tenemos el plan Corporativo especialmente para equipos y empresas. El valor es por persona por mes e incluye todos los recursos del plan Personal, con gestión centralizada del equipo.',
    q13:'¿Mis datos están seguros en daily?',
    a13:'Sí. Utilizamos cifrado TLS en todas las comunicaciones y bcrypt para almacenar contraseñas. Nuestra infraestructura está en la nube con certificaciones de seguridad reconocidas internacionalmente.',
    q14:'¿daily vende mis datos a anunciantes?',
    a14:'Nunca. daily no vende ni comparte tus datos con anunciantes o cualquier otra empresa con fines comerciales. Nuestro modelo de negocio se basa en suscripciones, no en publicidad.',
    q15:'¿Cómo funciona la política de privacidad?',
    a15:'Nuestra política de privacidad está disponible en nuestra página de Privacidad. Seguimos la LGPD y las mejores prácticas internacionales de privacidad. Tienes derecho a acceder, corregir o eliminar tus datos en cualquier momento.',
    q16:'¿Puedo eliminar mi cuenta y mis datos?',
    a16:'Sí. Puedes solicitar la eliminación completa de tu cuenta y todos tus datos en cualquier momento enviando un correo a privacidade@daily.app. Respondemos en hasta 15 días hábiles.',
    q17:'¿Cómo funciona la búsqueda de promociones en el módulo Casa?',
    a17:'Al agregar elementos a tu lista de compras, la plataforma busca automáticamente los precios en los principales supermercados y muestra la comparación. Así sabes exactamente dónde ahorrar más antes de salir.',
    q18:'¿Puedo compartir tareas con otras personas?',
    a18:'¡Sí! Puedes compartir listas, tareas y eventos con otras personas, ya sea dentro del mismo plan Corporativo o invitando a alguien por correo electrónico.',
    q19:'¿El pronóstico del tiempo se actualiza automáticamente?',
    a19:'¡Sí! El pronóstico del tiempo se actualiza en tiempo real según tu ubicación o cualquier ciudad que configures. Recibes alertas antes de salir si hay lluvia o condiciones adversas previstas.',
    q20:'¿Puedo controlar mis gastos detalladamente?',
    a20:'¡Sí! El módulo financiero permite categorizar gastos, definir límites por categoría, visualizar gráficos mensuales y recibir alertas cuando estés cerca del límite.',
    q21:'¿Cuántos archivos puedo almacenar?',
    a21:'En los planes Personal y Corporativo, tienes almacenamiento generoso para guardar documentos, imágenes y archivos importantes. Todos los archivos están cifrados y accesibles solo por ti.',
    q22:'¿daily se integra con otras aplicaciones?',
    a22:'El plan Corporativo incluye integraciones con herramientas populares de productividad y comunicación. Siempre estamos ampliando las opciones de integración según el feedback de nuestros usuarios.',
    q23:'¿Cómo hablo con el soporte?',
    a23:'Puedes contactarnos por el correo soporte@daily.app o por el chat dentro de la plataforma. Los usuarios del plan Corporativo tienen soporte prioritario con tiempo de respuesta reducido.',
    q24:'¿Cuál es el horario de atención?',
    a24:'Nuestro soporte por correo funciona de lunes a viernes, de 8h a 18h (horario de Brasilia). El chat en la plataforma puede tener disponibilidad extendida para usuarios del plan Corporativo.',
    q25:'¿Cómo reporto un problema o bug?',
    a25:'Puedes reportarlo por el correo soporte@daily.app o directamente desde el menú de ayuda dentro de la plataforma. Describe el problema con el máximo de detalles posible.',
    q26:'Tengo una sugerencia de mejora. ¿Cómo la envío?',
    a26:'¡Nos encantan las sugerencias! Envíala por el correo feedback@daily.app o usa el formulario de feedback disponible dentro de la plataforma.',
    cta_title:'¿Aún tienes dudas?',
    cta_text:'Nuestro equipo está listo para ayudarte. Habla con nosotros por correo o accede a la plataforma para usar el chat.',
    cta_btn1:'Hablar con soporte', cta_btn2:'Acceder a daily',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
  },
  en: {
    backLink:'← Back', pageTitle:'FAQ',
    hero_tag:'Frequently Asked Questions',
    hero_title:'How can we help you?',
    hero_sub:'Find quick answers about daily. Did not find what you were looking for? Talk to us.',
    search_ph:'Search question...',
    search_empty:'No questions found for your search.',
    tab_all:'All', tab_geral:'General', tab_planos:'Plans',
    tab_seguranca:'Security', tab_func:'Features', tab_suporte:'Support',
    sec_geral:'General', sec_planos:'Plans and Payment',
    sec_seguranca:'Security and Privacy',
    sec_func:'Features', sec_suporte:'Support',
    q1:'Do I need to be tech-savvy to use daily?',
    a1:'No! daily was designed to be simple and intuitive. If you can use a messaging app, you can use daily.',
    q2:'Can I use it on my phone?',
    a2:'Yes! daily works on mobile, tablet and computer. Everything syncs automatically across your devices.',
    q3:'Does daily work without internet?',
    a3:'Some basic features work offline, like viewing already created tasks. To sync data and use features like price search and weather forecast, an internet connection is required.',
    q4:'Is there an app to download?',
    a4:'daily can be accessed directly from your phone or computer browser without any download. You can also add it to your phone home screen for an experience similar to a native app.',
    q5:'Can I use daily on multiple devices at the same time?',
    a5:'Yes! Your access is linked to your account. You can be logged in on as many devices as you want and everything will sync in real time.',
    q6:'Does the free trial save my data?',
    a6:'During the 7-day free trial, data is not permanently stored. When you subscribe to any paid plan, your data is securely saved on our encrypted servers.',
    q7:'Do I need a credit card for the free trial?',
    a7:'No! The 7-day free trial does not require any payment information. You try it with no commitment and decide afterwards if you want to continue.',
    q8:'Can I change my plan later?',
    a8:'Yes! You can upgrade or downgrade your plan at any time. For upgrades, you get immediate access to new features. For downgrades, the change happens at the end of the current billing cycle.',
    q9:'What payment methods are accepted?',
    a9:'We accept credit card, debit card, Pix and bank slip. Card and Pix payments are processed instantly. Bank slips may take up to 3 business days to clear.',
    q10:'Can I cancel my plan at any time?',
    a10:'Yes, with no penalty and no hassle. After cancellation, you keep access until the end of the already-paid period. We do not make unexpected automatic charges.',
    q11:'Is the annual plan cheaper?',
    a11:'Yes! By choosing the annual plan, you save the equivalent of two free months compared to the monthly plan. The amount is charged once per year.',
    q12:'Can my company hire daily?',
    a12:'Yes! We have the Corporate plan especially for teams and companies. The price is per person per month and includes all Personal plan features, with centralized team management.',
    q13:'Is my data safe on daily?',
    a13:'Yes. We use TLS encryption on all communications and bcrypt to store passwords. Our infrastructure is cloud-based with internationally recognized security certifications. No sensitive data is shared with third parties.',
    q14:'Does daily sell my data to advertisers?',
    a14:'Never. daily does not sell or share your data with advertisers or any other company for commercial purposes. Our business model is subscription-based, not advertising-based.',
    q15:'How does the privacy policy work?',
    a15:'Our privacy policy is available in full on our Privacy page. We follow the LGPD and international best practices for privacy. You have the right to access, correct or delete your data at any time.',
    q16:'Can I delete my account and my data?',
    a16:'Yes. You can request the complete deletion of your account and all your data at any time by emailing privacidade@daily.app. We respond within 15 business days as required by the LGPD.',
    q17:'How does the deal search work in the Home module?',
    a17:'When you add items to your shopping list, the platform automatically searches prices at major supermarkets and shows you the comparison. That way you know exactly where you will save the most before leaving home.',
    q18:'Can I share tasks with other people?',
    a18:'Yes! You can share lists, tasks and events with other people, either within the same Corporate plan or by inviting someone via email. They will receive a link to collaborate.',
    q19:'Is the weather forecast updated automatically?',
    a19:'Yes! The weather forecast is updated in real time based on your location or any city you configure. You receive alerts before leaving home if rain or adverse conditions are expected.',
    q20:'Can I track my expenses in detail?',
    a20:'Yes! The financial module lets you categorize expenses, set spending limits by category, view monthly charts and receive alerts when you are close to your limit.',
    q21:'How many files can I store?',
    a21:'On the Personal and Corporate plans, you have generous storage to keep documents, images and important files. All files are encrypted and accessible only by you.',
    q22:'Does daily integrate with other apps?',
    a22:'The Corporate plan includes integrations with popular productivity and communication tools. We are always expanding integration options based on user feedback.',
    q23:'How do I contact support?',
    a23:'You can reach us at suporte@daily.app or through the chat inside the platform. Corporate plan users have priority support with faster response times.',
    q24:'What are the support hours?',
    a24:'Our email support runs Monday to Friday, from 8am to 6pm (Brasilia time). Chat on the platform may have extended availability for Corporate plan users.',
    q25:'How do I report a problem or bug?',
    a25:'You can report it via suporte@daily.app or directly from the help menu inside the platform. Describe the problem with as much detail as possible to help us resolve it faster.',
    q26:'I have a suggestion. How do I send it?',
    a26:'We love suggestions! Send it to feedback@daily.app or use the feedback form available inside the platform. All suggestions are read and evaluated by our product team.',
    cta_title:'Still have questions?',
    cta_text:'Our team is ready to help you. Talk to us by email or access the platform to use the chat.',
    cta_btn1:'Talk to support', cta_btn2:'Access daily',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = 'pt';

function applyTranslations(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.documentElement.lang = { pt:'pt-BR', es:'es', en:'en' }[lang];

  ['backLink','pageTitle'].forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.textContent = t[id];
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  // Atualiza perguntas e respostas
  document.querySelectorAll('.faq-q').forEach(el => {
    const k = el.dataset.i18n;
    if (k && t[k] !== undefined) el.firstChild.textContent = t[k];
  });
  document.querySelectorAll('.faq-a').forEach(el => {
    const k = el.dataset.i18n;
    if (k && t[k] !== undefined) el.textContent = t[k];
  });

  // Re-aplica busca se houver termo ativo
  const val = document.getElementById('searchInput')?.value.trim();
  if (val) runSearch(val);
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

/* ── ABAS DE SEÇÃO ── */
const tabs     = document.querySelectorAll('.faq-tab');
const sections = document.querySelectorAll('.faq-section');
let activeSection = 'all';

function setTab(section) {
  activeSection = section;
  tabs.forEach(t => t.classList.toggle('active', t.dataset.section === section));

  sections.forEach(sec => {
    if (section === 'all') {
      sec.style.display = '';
    } else {
      sec.style.display = sec.dataset.section === section ? '' : 'none';
    }
  });

  // Re-aplica busca
  const val = document.getElementById('searchInput').value.trim();
  if (val) runSearch(val);
  else showAllInSection();
}

function showAllInSection() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const sec = item.closest('.faq-section');
    const inActiveSection = activeSection === 'all' || sec.dataset.section === activeSection;
    item.classList.toggle('hidden', !inActiveSection);
  });
  checkEmpty();
}

tabs.forEach(tab => tab.addEventListener('click', () => setTab(tab.dataset.section)));

/* ── BUSCA ── */
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchEmpty = document.getElementById('searchEmpty');

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, term) {
  if (!term) return text;
  const re = new RegExp(`(${escapeRegex(term)})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function runSearch(term) {
  const lower = term.toLowerCase();
  const t = i18n[currentLang];

  document.querySelectorAll('.faq-item').forEach(item => {
    const sec = item.closest('.faq-section');
    const inActiveSection = activeSection === 'all' || sec.dataset.section === activeSection;

    const qEl = item.querySelector('.faq-q');
    const aEl = item.querySelector('.faq-a');

    // Texto original (via data-i18n)
    const qKey = qEl.dataset.i18n;
    const aKey = aEl.dataset.i18n;
    const qText = (qKey && t[qKey]) ? t[qKey] : qEl.textContent;
    const aText = (aKey && t[aKey]) ? t[aKey] : aEl.textContent;

    const matches = inActiveSection && (
      qText.toLowerCase().includes(lower) ||
      aText.toLowerCase().includes(lower)
    );

    item.classList.toggle('hidden', !matches);

    if (matches) {
      // Restaura e destaca
      qEl.innerHTML = highlight(qText, term);
      aEl.innerHTML = highlight(aText, term);
      item.open = true;
    } else {
      // Restaura texto original
      if (qKey && t[qKey]) qEl.innerHTML = t[qKey];
      if (aKey && t[aKey]) aEl.innerHTML = t[aKey];
    }
  });

  checkEmpty();
}

function checkEmpty() {
  const visible = document.querySelectorAll('.faq-item:not(.hidden)').length;
  searchEmpty.style.display = visible === 0 ? 'block' : 'none';
  document.getElementById('faqCta').style.display = visible === 0 ? 'none' : '';
}

function clearSearch() {
  searchInput.value = '';
  searchClear.style.display = 'none';
  showAllInSection();
  searchEmpty.style.display = 'none';
  document.getElementById('faqCta').style.display = '';
  // Restaura textos
  const t = i18n[currentLang];
  document.querySelectorAll('.faq-item').forEach(item => {
    const qEl = item.querySelector('.faq-q');
    const aEl = item.querySelector('.faq-a');
    const qKey = qEl.dataset.i18n;
    const aKey = aEl.dataset.i18n;
    if (qKey && t[qKey]) qEl.innerHTML = t[qKey];
    if (aKey && t[aKey]) aEl.innerHTML = t[aKey];
    item.open = false;
  });
}

searchInput.addEventListener('input', () => {
  const val = searchInput.value.trim();
  searchClear.style.display = val ? 'flex' : 'none';
  if (val) runSearch(val);
  else clearSearch();
});

searchClear.addEventListener('click', () => {
  clearSearch();
  searchInput.focus();
});

/* ── INIT ── */
applyTranslations('pt');
showAllInSection();