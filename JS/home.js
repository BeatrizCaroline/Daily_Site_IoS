/* ══════════════════════════════════════
   TRADUÇÕES
══════════════════════════════════════ */
const i18n = {
  pt: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Acadêmico', menu_trabalho:'Trabalho',
    clima_title:'Clima', clima_sub:'Previsão para hoje e próximos dias',
    weather_search_ph:'Buscar cidade…',
    weather_loading:'Buscando dados do clima…',
    weather_error:'Não foi possível carregar o clima. Tente outra cidade.',
    weather_no_results:'Nenhuma cidade encontrada.',
    ws_humidity:'Umidade', ws_wind:'Vento', ws_visibility:'Visibilidade',
    ws_pressure:'Pressão', ws_uv:'Índice UV', ws_cloud:'Nuvens',
    ws_sunrise:'Nascer Sol', ws_sunset:'Pôr do Sol',
    w_hourly_title:'Próximas horas', w_week_title:'Próximos 7 dias',
    day_names:['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'], day_today:'Hoje',
    feels_like:'Sensação',
    // Dicas por temperatura
    tip_freeze:'Temperatura abaixo de zero! Use roupas bem quentes em camadas.',
    tip_very_cold:'Muito frio. Agasalhe-se bem e evite exposição prolongada ao frio.',
    tip_cold:'Faz frio. Leve um casaco.',
    tip_cool:'Clima ameno. Um casaco leve pode ser útil.',
    tip_pleasant:'Temperatura agradável. Ótimo para atividades ao ar livre.',
    tip_warm:'Calor moderado. Vista-se com leveza e mantenha-se hidratado.',
    tip_hot:'Dia quente! Evite sol no período mais intenso e beba bastante água.',
    tip_very_hot:'Calor extremo! Evite sair entre 10h e 16h. Use protetor solar e hidrate-se sempre.',
    tip_rain:' Leve um guarda-chuva — há chuva prevista.',
    tip_storm:' Tempestade! Evite sair se possível e fique longe de áreas alagadas.',
    tip_uv:' Índice UV alto — use protetor solar ao sair.',
    tip_fog:' Visibilidade reduzida. Dirija com cuidado.',
    tip_snow:' Neve ou geada. Cuidado ao se deslocar.',
    // Outros
    now_label:'Agora',
    domestico_title:'Doméstico', domestico_sub:'Gerencie sua casa em um só lugar',
    sub_compras:'Lista de Compras', sub_compras_desc:'Itens do mercado e feiras',
    sub_tarefas_casa:'Tarefas & Compromissos', sub_tarefas_casa_desc:'Limpeza, manutenção e agenda doméstica',
    sub_contas:'Contas a Pagar', sub_contas_desc:'Boletos, vencimentos e lembretes',
    sub_financas:'Finanças Pessoais', sub_financas_desc:'Gastos, ganhos e saldo mensal',
    academico_title:'Acadêmico', academico_sub:'Organize seus estudos e evolua mais rápido',
    sub_notas:'Calculadora de Notas', sub_notas_desc:'Simule médias e metas por disciplina',
    sub_estudos:'Plano de Estudos', sub_estudos_desc:'Lista de estudo, cursos e progresso',
    sub_material:'Organização Escolar', sub_material_desc:'Materiais, cadernos e recursos por matéria',
    sub_agenda_escola:'Agenda & Compromissos', sub_agenda_escola_desc:'Provas, apresentações e datas importantes',
    sub_tarefas_escola:'Tarefas Escolares', sub_tarefas_escola_desc:'Lições, trabalhos e prazos de entrega',
    trabalho_title:'Trabalho', trabalho_sub:'Foque no que importa e entregue mais',
    sub_agenda_trabalho:'Agenda Profissional', sub_agenda_trabalho_desc:'Reuniões, compromissos e eventos',
    sub_tarefas_trabalho:'Tarefas & Entregas', sub_tarefas_trabalho_desc:'To-dos, prazos e prioridades',
    sub_projetos:'Projetos & Ideias', sub_projetos_desc:'Kanban, brainstorm e acompanhamento',
    dd_profile:'Meu perfil', dd_settings:'Configurações', dd_logout:'Sair',
    copyright:'© 2026 Daily. Todos os direitos reservados.',
    privacy:'Privacidade', terms:'Termos', contact:'Contato',
  },
  es: {
    menu_clima:'Clima', menu_domestico:'Doméstico', menu_academico:'Académico', menu_trabalho:'Trabajo',
    clima_title:'Clima', clima_sub:'Pronóstico para hoy y los próximos días',
    weather_search_ph:'Buscar ciudad…',
    weather_loading:'Buscando datos del clima…',
    weather_error:'No se pudo cargar el clima. Intenta otra ciudad.',
    weather_no_results:'No se encontró ninguna ciudad.',
    ws_humidity:'Humedad', ws_wind:'Viento', ws_visibility:'Visibilidad',
    ws_pressure:'Presión', ws_uv:'Índice UV', ws_cloud:'Nubes',
    ws_sunrise:'Amanecer', ws_sunset:'Atardecer',
    w_hourly_title:'Próximas horas', w_week_title:'Próximos 7 días',
    day_names:['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'], day_today:'Hoy',
    feels_like:'Sensación',
    tip_freeze:'¡Temperatura bajo cero! Usa ropa muy abrigada en capas.',
    tip_very_cold:'Mucho frío. Abrígate bien y evita la exposición prolongada.',
    tip_cold:'Hace frío. Lleva un abrigo.',
    tip_cool:'Clima templado. Un abrigo ligero puede ser útil.',
    tip_pleasant:'Temperatura agradable. Perfecto para actividades al aire libre.',
    tip_warm:'Calor moderado. Vístete con ropa ligera y mantente hidratado.',
    tip_hot:'¡Día caluroso! Evita el sol en el horario más intenso y bebe bastante agua.',
    tip_very_hot:'¡Calor extremo! Evita salir entre las 10h y las 16h. Usa protector solar.',
    tip_rain:' Lleva un paraguas — hay lluvia prevista.',
    tip_storm:' ¡Tormenta! Evita salir si es posible.',
    tip_uv:' Índice UV alto — usa protector solar al salir.',
    tip_fog:' Visibilidad reducida. Conduce con cuidado.',
    tip_snow:' Nieve o helada. Ten cuidado al desplazarte.',
    now_label:'Ahora',
    domestico_title:'Doméstico', domestico_sub:'Gestiona tu hogar en un solo lugar',
    sub_compras:'Lista de Compras', sub_compras_desc:'Artículos del supermercado y ferias',
    sub_tarefas_casa:'Tareas & Compromisos', sub_tarefas_casa_desc:'Limpieza, mantenimiento y agenda doméstica',
    sub_contas:'Cuentas por Pagar', sub_contas_desc:'Facturas, vencimientos y recordatorios',
    sub_financas:'Finanzas Personales', sub_financas_desc:'Gastos, ingresos y saldo mensual',
    academico_title:'Académico', academico_sub:'Organiza tus estudios y avanza más rápido',
    sub_notas:'Calculadora de Notas', sub_notas_desc:'Simula promedios y metas por materia',
    sub_estudos:'Plan de Estudio', sub_estudos_desc:'Lista de estudio, cursos y progreso',
    sub_material:'Organización Escolar', sub_material_desc:'Materiales, cuadernos y recursos por materia',
    sub_agenda_escola:'Agenda & Compromisos', sub_agenda_escola_desc:'Exámenes, presentaciones y fechas importantes',
    sub_tarefas_escola:'Tareas Escolares', sub_tarefas_escola_desc:'Lecciones, trabajos y plazos de entrega',
    trabalho_title:'Trabajo', trabalho_sub:'Enfócate en lo que importa y entrega más',
    sub_agenda_trabalho:'Agenda Profesional', sub_agenda_trabalho_desc:'Reuniones, compromisos y eventos',
    sub_tarefas_trabalho:'Tareas & Entregas', sub_tarefas_trabalho_desc:'To-dos, plazos y prioridades',
    sub_projetos:'Proyectos & Ideas', sub_projetos_desc:'Kanban, brainstorm y seguimiento',
    dd_profile:'Mi perfil', dd_settings:'Configuración', dd_logout:'Salir',
    copyright:'© 2026 Daily. Todos los derechos reservados.',
    privacy:'Privacidad', terms:'Términos', contact:'Contacto',
  },
  en: {
    menu_clima:'Weather', menu_domestico:'Home', menu_academico:'Academic', menu_trabalho:'Work',
    clima_title:'Weather', clima_sub:'Forecast for today and the coming days',
    weather_search_ph:'Search city…',
    weather_loading:'Loading weather data…',
    weather_error:'Could not load weather. Try another city.',
    weather_no_results:'No city found.',
    ws_humidity:'Humidity', ws_wind:'Wind', ws_visibility:'Visibility',
    ws_pressure:'Pressure', ws_uv:'UV Index', ws_cloud:'Clouds',
    ws_sunrise:'Sunrise', ws_sunset:'Sunset',
    w_hourly_title:'Next hours', w_week_title:'Next 7 days',
    day_names:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], day_today:'Today',
    feels_like:'Feels like',
    tip_freeze:'Below zero! Wear very warm, layered clothing.',
    tip_very_cold:'Very cold. Bundle up and avoid prolonged exposure.',
    tip_cold:'Cold day. Bring a coat.',
    tip_cool:'Mild weather. A light jacket might come in handy.',
    tip_pleasant:'Comfortable temperature. Great for outdoor activities.',
    tip_warm:'Moderately warm. Dress lightly and stay hydrated.',
    tip_hot:'Hot day! Avoid peak sun hours and drink plenty of water.',
    tip_very_hot:'Extreme heat! Avoid going out between 10am–4pm. Wear sunscreen.',
    tip_rain:' Bring an umbrella — rain is expected.',
    tip_storm:' Storm warning! Avoid going out if possible.',
    tip_uv:' High UV index — wear sunscreen before going out.',
    tip_fog:' Reduced visibility. Drive carefully.',
    tip_snow:' Snow or frost. Take care when travelling.',
    now_label:'Now',
    domestico_title:'Home', domestico_sub:'Manage your household in one place',
    sub_compras:'Shopping List', sub_compras_desc:'Supermarket and market items',
    sub_tarefas_casa:'Tasks & Appointments', sub_tarefas_casa_desc:'Cleaning, maintenance and home schedule',
    sub_contas:'Bills to Pay', sub_contas_desc:'Invoices, due dates and reminders',
    sub_financas:'Personal Finances', sub_financas_desc:'Expenses, income and monthly balance',
    academico_title:'Academic', academico_sub:'Organize your studies and progress faster',
    sub_notas:'Grade Calculator', sub_notas_desc:'Simulate averages and targets by subject',
    sub_estudos:'Study Plan', sub_estudos_desc:'Study list, courses and progress',
    sub_material:'School Organization', sub_material_desc:'Materials, notebooks and resources by subject',
    sub_agenda_escola:'Schedule & Appointments', sub_agenda_escola_desc:'Tests, presentations and important dates',
    sub_tarefas_escola:'School Tasks', sub_tarefas_escola_desc:'Assignments, projects and deadlines',
    trabalho_title:'Work', trabalho_sub:'Focus on what matters and deliver more',
    sub_agenda_trabalho:'Professional Schedule', sub_agenda_trabalho_desc:'Meetings, appointments and events',
    sub_tarefas_trabalho:'Tasks & Deliveries', sub_tarefas_trabalho_desc:'To-dos, deadlines and priorities',
    sub_projetos:'Projects & Ideas', sub_projetos_desc:'Kanban, brainstorm and tracking',
    dd_profile:'My profile', dd_settings:'Settings', dd_logout:'Sign out',
    copyright:'© 2026 Daily. All rights reserved.',
    privacy:'Privacy', terms:'Terms', contact:'Contact',
  }
};

let currentLang = localStorage.getItem('daily-lang') || 'pt';
function tr(k) { return (i18n[currentLang]||{})[k] || k; }

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('daily-lang', lang);
  document.documentElement.lang = {pt:'pt-BR',es:'es',en:'en'}[lang];
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
  updateGreeting();
}
document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang))
);

/* ── SAUDAÇÃO ── */
function updateGreeting() {
  const now  = new Date();
  const hour = now.getHours();
  const g = {
    pt: hour<12?'Bom dia':hour<18?'Boa tarde':'Boa noite',
    es: hour<12?'Buenos días':hour<18?'Buenas tardes':'Buenas noches',
    en: hour<12?'Good morning':hour<18?'Good afternoon':'Good evening',
  };
  document.getElementById('greetingText').textContent = `${g[currentLang]}, Gustavo 👋`;
  const loc = {pt:'pt-BR',es:'es-ES',en:'en-US'};
  const ds  = now.toLocaleDateString(loc[currentLang],{weekday:'long',day:'numeric',month:'long'});
  document.getElementById('greetingDate').textContent = ds.charAt(0).toUpperCase()+ds.slice(1);
}

/* ── DARK MODE ── */
const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
function setTheme(t) { html.dataset.theme=t; localStorage.setItem('daily-theme',t); themeBtn.classList.toggle('is-on',t==='dark'); }
themeBtn.addEventListener('click', ()=>setTheme(html.dataset.theme==='dark'?'light':'dark'));
setTheme(localStorage.getItem('daily-theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));

/* ── FONTE ── */
const fontLevels=['sm','md','lg','xl']; let fontIdx=1;
function applyFont(i){fontIdx=Math.max(0,Math.min(3,i));html.dataset.font=fontLevels[fontIdx];localStorage.setItem('daily-font',fontIdx);}
document.getElementById('btnFontDecrease').addEventListener('click',()=>applyFont(fontIdx-1));
document.getElementById('btnFontNormal').addEventListener('click',()=>applyFont(1));
document.getElementById('btnFontIncrease').addEventListener('click',()=>applyFont(fontIdx+1));
const sf=localStorage.getItem('daily-font'); if(sf!==null)applyFont(Number(sf));

/* ── CONTRASTE ── */
const btnContrast=document.getElementById('btnContrast');
let hc=localStorage.getItem('daily-hc')==='1';
function applyContrast(on){hc=on;document.body.classList.toggle('hc',on);btnContrast.classList.toggle('is-on',on);localStorage.setItem('daily-hc',on?'1':'');}
btnContrast.addEventListener('click',()=>applyContrast(!hc));
applyContrast(hc);

/* ── AVATAR ── */
const avatarBtn=document.getElementById('avatarBtn');
const avatarDropdown=document.getElementById('avatarDropdown');
avatarBtn.addEventListener('click',e=>{e.stopPropagation();avatarDropdown.classList.toggle('is-open');});
document.addEventListener('click',()=>avatarDropdown.classList.remove('is-open'));

/* ── SIDEBAR ── */
const sidebar=document.getElementById('sidebar');
const sidebarCollapseBtn=document.getElementById('sidebarCollapseBtn');
sidebarCollapseBtn.addEventListener('click',()=>{sidebar.classList.toggle('is-collapsed');localStorage.setItem('daily-sidebar-collapsed',sidebar.classList.contains('is-collapsed')?'1':'');});
if(localStorage.getItem('daily-sidebar-collapsed')==='1')sidebar.classList.add('is-collapsed');

/* ── NAVEGAÇÃO ── */
const allPanels=document.querySelectorAll('.panel');
const sidebarItems=document.querySelectorAll('.sidebar__item');
const mobileItems=document.querySelectorAll('.mobile-nav__item');
function goToMenu(menu){
  allPanels.forEach(p=>p.classList.toggle('panel--hidden',p.dataset.panel!==menu));
  sidebarItems.forEach(i=>i.classList.toggle('active',i.dataset.menu===menu));
  mobileItems.forEach(i=>i.classList.toggle('active',i.dataset.menu===menu));
  document.getElementById('mainContent').scrollTop=0;
}
sidebarItems.forEach(item=>item.addEventListener('click',()=>goToMenu(item.dataset.menu)));
mobileItems.forEach(item=>item.addEventListener('click',()=>goToMenu(item.dataset.menu)));

/* ══════════════════════════════════════
   API CLIMA — WeatherAPI.com
══════════════════════════════════════ */
const API_KEY = '82ed26db0a82403e90d10708252211';

const elLoading  = document.getElementById('weatherLoading');
const elError    = document.getElementById('weatherError');
const elErrorMsg = document.getElementById('weatherErrorMsg');
const elData     = document.getElementById('weatherData');

const elIconBig  = document.getElementById('wIconBig');
const elTemp     = document.getElementById('wTemp');
const elFeels    = document.getElementById('wFeels');
const elDesc     = document.getElementById('wDesc');
const elCity     = document.getElementById('wCity');
const elLocalTime= document.getElementById('weatherLocalTime');
const elHumidity = document.getElementById('wHumidity');
const elWind     = document.getElementById('wWind');
const elVis      = document.getElementById('wVisibility');
const elPressure = document.getElementById('wPressure');
const elUV       = document.getElementById('wUV');
const elCloud    = document.getElementById('wCloud');
const elSunrise  = document.getElementById('wSunrise');
const elSunset   = document.getElementById('wSunset');
const elHourly   = document.getElementById('wHourly');
const elWeek     = document.getElementById('wWeek');
const elTip      = document.getElementById('wTip');
const elTipIcon  = document.getElementById('wTipIcon');
const elTipText  = document.getElementById('wTipText');

const searchInput     = document.getElementById('weatherSearchInput');
const searchClear     = document.getElementById('weatherSearchClear');
const suggestionsList = document.getElementById('weatherSuggestions');

/* ── EMOJI POR CÓDIGO ── */
function conditionEmoji(code, isDay) {
  const d = isDay !== false;
  if (code===1000) return d?'☀️':'🌙';
  if (code===1003) return d?'⛅':'🌤️';
  if ([1006,1009].includes(code)) return '☁️';
  if ([1030,1135,1147].includes(code)) return '🌫️';
  if ([1063,1072,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201].includes(code)) return '🌧️';
  if ([1240,1243,1246].includes(code)) return '🌦️';
  if ([1066,1069,1114,1117,1204,1207,1210,1213,1216,1219,1222,1225,1237,1249,1252,1255,1258,1261,1264].includes(code)) return '❄️';
  if ([1087,1273,1276,1279,1282].includes(code)) return '⛈️';
  return '🌡️';
}

/* ── DICA INTELIGENTE POR TEMPERATURA + CONDIÇÃO ── */
function buildTip(data) {
  const temp  = data.current.temp_c;
  const code  = data.current.condition.code;
  const uv    = data.current.uv;
  const vis   = data.current.vis_km;

  const isStorm = [1087,1273,1276,1279,1282].includes(code);
  const isRain  = [1063,1072,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246].includes(code);
  const isSnow  = [1066,1069,1114,1117,1204,1207,1210,1213,1216,1219,1222,1225,1237,1249,1252,1255,1258,1261,1264].includes(code);
  const isFog   = [1030,1135,1147].includes(code);

  // Base por temperatura
  let base, type;
  if      (temp < 0)  { base = tr('tip_freeze');   type='cold'; }
  else if (temp < 8)  { base = tr('tip_very_cold'); type='cold'; }
  else if (temp < 14) { base = tr('tip_cold');      type='cold'; }
  else if (temp < 18) { base = tr('tip_cool');      type='good'; }
  else if (temp < 25) { base = tr('tip_pleasant');  type='good'; }
  else if (temp < 30) { base = tr('tip_warm');      type='warm'; }
  else if (temp < 36) { base = tr('tip_hot');       type='hot';  }
  else                { base = tr('tip_very_hot');  type='hot';  }

  // Apêndice por condição especial
  let extra = '', extraType = '';
  if (isStorm)      { extra = tr('tip_storm'); extraType='storm'; }
  else if (isSnow)  { extra = tr('tip_snow');  extraType='cold';  }
  else if (isRain)  { extra = tr('tip_rain');  extraType='rain';  }
  else if (isFog)   { extra = tr('tip_fog');   extraType='fog';   }
  else if (uv >= 6) { extra = tr('tip_uv');    extraType='uv';    }

  // Ícone e classe
  const icons = { cold:'🧥', good:'😊', warm:'👕', hot:'🥵', storm:'⛈️', rain:'☂️', fog:'🌫️', uv:'🕶️' };
  const finalType = extraType || type;
  elTip.className = `w-tip w-tip--${finalType==='storm'?'storm':finalType==='cold'||finalType==='fog'?'cold':finalType==='rain'?'rain':finalType==='uv'||finalType==='hot'?finalType:'good'}`;
  elTipIcon.textContent = icons[finalType] || '💡';
  elTipText.textContent = base + extra;
}

/* ── UV COLOR ── */
function uvClass(uv) {
  if (uv<=2) return 'uv-low';
  if (uv<=5) return 'uv-mod';
  return 'uv-high';
}

/* ── RENDERIZAÇÃO COMPLETA ── */
function renderWeather(data) {
  const cur  = data.current;
  const loc  = data.location;
  const fore = data.forecast.forecastday;
  const astro= fore[0].astro;
  const isDay= cur.is_day===1;

  // Hero
  elIconBig.textContent = conditionEmoji(cur.condition.code, isDay);
  elTemp.textContent    = `${Math.round(cur.temp_c)}°C`;
  elFeels.textContent   = `${tr('feels_like')}: ${Math.round(cur.feelslike_c)}°C`;
  elDesc.textContent    = cur.condition.text;
  elCity.textContent    = `${loc.name}, ${loc.region ? loc.region+', ' : ''}${loc.country}`;

  // Hora local
  const localtime = new Date(loc.localtime.replace(' ','T'));
  elLocalTime.textContent = `${tr('clima_sub')} • ${localtime.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} local`;

  // Stats
  elHumidity.textContent = `${cur.humidity}%`;
  elWind.textContent     = `${Math.round(cur.wind_kph)} km/h ${cur.wind_dir}`;
  elVis.textContent      = `${cur.vis_km} km`;
  elPressure.textContent = `${cur.pressure_mb} hPa`;
  elUV.textContent       = cur.uv;
  elUV.className         = `w-stat__value ${uvClass(cur.uv)}`;
  elCloud.textContent    = `${cur.cloud}%`;
  elSunrise.textContent  = astro.sunrise;
  elSunset.textContent   = astro.sunset;

  // Dica inteligente
  buildTip(data);

  // Previsão horária (próximas 8h)
  elHourly.innerHTML = '';
  const allHours = fore.flatMap(d => d.hour);
  const nowEpoch = Math.floor(Date.now()/1000);
  const upcoming = allHours.filter(h => h.time_epoch >= nowEpoch - 1800).slice(0, 12);

  upcoming.forEach((h, idx) => {
    const t = new Date(h.time.replace(' ','T'));
    const isNow = idx===0;
    const div = document.createElement('div');
    div.className = 'w-hour' + (isNow?' w-hour--now':'');
    div.innerHTML = `
      <span class="w-hour__time">${isNow ? tr('now_label') : t.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span>
      <span class="w-hour__icon">${conditionEmoji(h.condition.code, h.is_day)}</span>
      <span class="w-hour__temp">${Math.round(h.temp_c)}°</span>
      ${h.chance_of_rain>10 ? `<span class="w-hour__rain">💧${h.chance_of_rain}%</span>` : '<span class="w-hour__rain" style="opacity:0">0%</span>'}
    `;
    elHourly.appendChild(div);
  });

  // Previsão 7 dias
  elWeek.innerHTML = '';
  const dayNames = i18n[currentLang].day_names;
  fore.forEach((day, idx) => {
    const date    = new Date(day.date+'T12:00:00');
    const isToday = idx===0;
    const emoji   = conditionEmoji(day.day.condition.code, true);
    const hi      = Math.round(day.day.maxtemp_c);
    const lo      = Math.round(day.day.mintemp_c);
    const rain    = day.day.daily_chance_of_rain;
    const div = document.createElement('div');
    div.className = 'w-day'+(isToday?' w-day--today':'');
    div.innerHTML = `
      <span class="w-day__name">${isToday ? tr('day_today') : dayNames[date.getDay()]}</span>
      <span class="w-day__icon">${emoji}</span>
      <span class="w-day__desc">${day.day.condition.text}</span>
      ${rain>10 ? `<span class="w-day__rain">💧${rain}%</span>` : '<span class="w-day__rain" style="opacity:0">-</span>'}
      <span class="w-day__temps">${hi}° <span>/ ${lo}°</span></span>
    `;
    elWeek.appendChild(div);
  });
}

/* ── ESTADOS UI ── */
function showLoading() { elLoading.style.display='flex'; elError.style.display='none'; elData.style.display='none'; }
function showError(msg){ elLoading.style.display='none'; elError.style.display='flex'; elErrorMsg.textContent=msg||tr('weather_error'); elData.style.display='none'; }
function showData()    { elLoading.style.display='none'; elError.style.display='none'; elData.style.display='block'; }

/* ── FETCH CLIMA ── */
async function fetchWeather(query) {
  showLoading();
  try {
    const langCode = currentLang==='pt'?'pt':currentLang==='es'?'es':'en';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(query)}&days=7&aqi=no&alerts=no&lang=${langCode}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('API '+res.status);
    const data = await res.json();
    renderWeather(data);
    showData();
    localStorage.setItem('daily-weather-city', query);
  } catch {
    showError(tr('weather_error'));
  }
}

/* ── SUGESTÕES ── */
let suggestTimeout=null;
async function fetchSuggestions(query) {
  if (query.length<2) { closeSuggestions(); return; }
  try {
    const res  = await fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`);
    if (!res.ok) return;
    const list = await res.json();
    renderSuggestions(list);
  } catch { closeSuggestions(); }
}
function renderSuggestions(list) {
  suggestionsList.innerHTML='';
  if (!list||list.length===0) {
    const li=document.createElement('li'); li.className='weather-suggestions__item weather-suggestions__item--empty'; li.textContent=tr('weather_no_results'); suggestionsList.appendChild(li);
  } else {
    list.forEach(city=>{
      const li=document.createElement('li'); li.className='weather-suggestions__item';
      li.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>${city.name}${city.region?', '+city.region:''}, ${city.country}`;
      li.addEventListener('click',()=>{searchInput.value=city.name;searchClear.style.display='inline-flex';closeSuggestions();fetchWeather(city.name);});
      suggestionsList.appendChild(li);
    });
  }
  suggestionsList.classList.add('is-open');
}
function closeSuggestions() { suggestionsList.classList.remove('is-open'); suggestionsList.innerHTML=''; }

searchInput.addEventListener('input',()=>{
  const v=searchInput.value.trim(); searchClear.style.display=v?'inline-flex':'none';
  clearTimeout(suggestTimeout); suggestTimeout=setTimeout(()=>fetchSuggestions(v),300);
});
searchInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'){const v=searchInput.value.trim();if(v){closeSuggestions();fetchWeather(v);}}
  if(e.key==='Escape')closeSuggestions();
});
searchClear.addEventListener('click',()=>{searchInput.value='';searchClear.style.display='none';searchInput.focus();closeSuggestions();});
document.addEventListener('click',e=>{if(!e.target.closest('#weatherSearch')&&!e.target.closest('#weatherSuggestions'))closeSuggestions();});

/* ── GEOLOCALIZAÇÃO ── */
function loadWeatherByLocation() {
  const saved=localStorage.getItem('daily-weather-city');
  if(saved){fetchWeather(saved);return;}
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      pos=>fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`),
      ()=>fetchWeather('São Paulo')
    );
  } else { fetchWeather('São Paulo'); }
}

/* ── INIT ── */
applyTranslations(currentLang);
loadWeatherByLocation();