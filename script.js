// logo no topo do script (ou antes de usar owl)
const hasOwl = typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel === 'function';


// usa o mesmo dicionário carregado pelo lang.js
const translations = window.TRANSLATIONS || {};

(function () {
  const toggle = document.getElementById('switch-theme');

  // 1ª carga: saved  system light
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initial);
  if (toggle) toggle.checked = (initial === 'dark');

  // Troca manual
  if (toggle) {
    toggle.addEventListener('change', function () {
      const theme = this.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  // Reagir à mudança do SO quando o usuário não “fixou” um tema
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener?.('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const theme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      if (toggle) toggle.checked = (theme === 'dark');
    }
  });
})();

  $(window).on('scroll', function(){
    if($(this).scrollTop()>90) $('.navbar').addClass('navbar-shrink');
    else $('.navbar').removeClass('navbar-shrink');
  });

  if($('#parallax').length) new Parallax(document.getElementById('parallax'));

  let $btns = $('.img-gallery .sortBtn .filter-btn');
  $btns.click(function(e){
    $btns.removeClass('active');
    e.target.classList.add('active');
    let selector = $(e.target).attr('data-filter');
    $('.img-gallery .grid').isotope({ filter: selector });
    return false;
  });

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  // testimonial slider
  $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: { 0:{items:1},600:{items:2},1000:{items:3} }
  });

// automation carousel — transição suave + sem corte no último card
(function () {
  var $car = $('.automation-carousel');
  if (!$car.length) return;

  $car.owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    autoplay: false,
    autoWidth: true,
    slideBy: 1,
    margin: 16,

    // animação suave
    smartSpeed: 800,
    navSpeed: 800,
    dotsSpeed: 800,
    dragEndSpeed: 800,
    responsiveRefreshRate: 100,

    responsive: {
      0:   { center: true,  stagePadding: 24 },
      576: { center: true,  stagePadding: 64 },
      768: { center: false, stagePadding: 16 },
      992: { center: false, stagePadding: 0  } 
    }
  });

  $car.on('resized.owl.carousel changed.owl.carousel', function () {
    var owl = $(this).data('owl.carousel');
    if (!owl) return;
    var idx = owl.relative(owl.current());
    owl.to(idx, 0, true);
  });
})();

  $('.header-area .home-slider').owlCarousel({
    items:1, loop:true, nav:true, dots:true,
    autoplay:true, autoplayTimeout:5000, autoplayHoverPause:true,
    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });

  $('.info-icon').on('click', function(){
    alert($(this).data('message'));
  });

  $("a[href^='#']").on("click", function(e){
    var target = this.hash;
    if(target && $(target).length){
      e.preventDefault();
      $('html, body').stop(true,false).animate({
        scrollTop: $(target).offset().top - 50
      },800,'swing');
      $(".navbar-collapse").collapse("hide");
    }
  });
  $(".nav-link:not(.dropdown-toggle)").on("click", function(){
    $(".navbar-collapse").collapse("hide");
  });

(function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },{ root:null, rootMargin:'0px 0px -10% 0px', threshold:0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el=>observer.observe(el));
})();


window.addEventListener('load', ()=>{
  const tl = gsap.timeline({
    onComplete: ()=>{
      setTimeout(()=>{
        const l = document.querySelector('.loader');
        if (!l) return;
        l.classList.add('fade-out');
        setTimeout(()=>l.remove(),600);
      },1000);
    }
  });
  tl.to(".loader__logo", { clipPath: "inset(0 0% 0 0)", duration:1, ease:"power2.inOut" });
  tl.from(".loader__title",{opacity:0,y:20,duration:0.8},"-=0.6");
  const slogans = document.querySelectorAll(".loader-slogan li");
  slogans.forEach((item,i)=>{
    tl.to(item,{ opacity:1, y:0, duration:0.6, ease:"power2.out" }, i===0? "-=0.3":"-=0.5");
  });
});


function applyLanguage(lang){
  const dict = translations && translations[lang];
  if(!dict) return;
  for(const id in dict){
    const el = document.getElementById(id);
    if(el) el.innerHTML = dict[id];
  }
}
document.querySelectorAll('.dropdown-item[data-lang]').forEach(item=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    const selected = this.getAttribute('data-lang');
    applyLanguage(selected);
  });
});


function toggleChatbot(){
  const el = document.getElementById('chatbot');
  if (!el) return;
  el.classList.toggle('active');
}
function responderChat(pergunta){
  const dict = TRANSLATIONS[getLang()];
  const respostaEl = document.getElementById('chatbot-resposta');
  let resp = '';
  switch (pergunta){
    case 'prazo':      resp = dict.chatbot.respostaPrazo; break;
    case 'suporte':    resp = dict.chatbot.respostaSuporte; break;
    case 'seguranca':  resp = dict.chatbot.respostaSeguranca; break;
    case 'automacoes': resp = dict.chatbot.respostaAutomacoes; break;
  }
  if (respostaEl) respostaEl.innerText = resp || '';
}

window.addEventListener("DOMContentLoaded", ()=>{
  const params = new URLSearchParams(window.location.search);
  if(params.get("email")==="sucesso") exibirAviso("Mensagem enviada com sucesso!","sucesso");
  else if(params.get("email")==="erro") exibirAviso("Erro ao enviar mensagem.","erro");
  function exibirAviso(msg,tipo){
    const aviso = document.createElement("div");
    aviso.className = `alerta-email ${tipo}`;
    aviso.textContent = msg;
    document.body.appendChild(aviso);
    setTimeout(()=>aviso.remove(),4000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const messages = {
    ecommerce: {
      "pt-br": "Olá! Tenho interesse no plano E-commerce de R$300/mês.",
      en: "Hi! I'm interested in the E-commerce plan for R$300/month.",
      es: "¡Hola! Estoy interesado en el plan E-commerce de R$300/mes."
    },
    agendamento: {
      "pt-br": "Olá! Tenho interesse no plano de Agendamento de R$100/mês.",
      en: "Hi! I'm interested in the Scheduling plan for R$100/month.",
      es: "¡Hola! Estoy interesado en el plan de Agendamiento de R$100/mes."
    },
    landing: {
      "pt-br": "Olá! Tenho interesse no plano Landing Page de R$30/mês.",
      en: "Hi! I'm interested in the Landing Page plan for R$30/month.",
      es: "¡Hola! Estoy interesado en el plan de Landing Page de R$30/mes."
    }
  };
  document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const plan = btn.getAttribute('data-plan');
      const lang = getLang();
      const msg  = (messages[plan] && (messages[plan][lang] || messages[plan]["pt-br"])) || "";
      const text = encodeURIComponent(msg);
      window.open(`https://wa.me/5531997941735?text=${text}`,'_blank');
    });
  });
});

document.addEventListener('DOMContentLoaded', ()=>{
  const allCards  = Array.from(document.querySelectorAll('.glassmorphic-card')),
        tiltCards = allCards.filter(card=>!card.closest('#portfolio'));
  const mq = window.matchMedia('(min-width: 576px)');
  function updateTilt(e){
    if(e.matches){
      if(!tiltCards[0] || !tiltCards[0].vanillaTilt){
        VanillaTilt.init(tiltCards, { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
      }
    } else {
      tiltCards.forEach(card => { if(card.vanillaTilt){ card.vanillaTilt.destroy(); } });
    }
  }
  updateTilt(mq);
  mq.addListener(updateTilt);
});


(function(){
  var $pricingRow = $('#pricing .row').filter(function(){
    return $(this).find('.pricing-plan').length > 0;
  }).first();

  if(!$pricingRow.length) return;

  function enableCarousel(){
    if($pricingRow.hasClass('owl-loaded')) return;
    $pricingRow.addClass('owl-carousel pricing-carousel').owlCarousel({
      items: 1,
      margin: 16,
      loop: false,
      autoHeight: true,
      nav: true,
      dots: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>'
      ]
    });
  }

  function disableCarousel(){
    if(!$pricingRow.hasClass('owl-loaded')) return;
    $pricingRow.trigger('destroy.owl.carousel');
    $pricingRow.removeClass('owl-carousel pricing-carousel owl-loaded');
    $pricingRow.find('.owl-stage-outer').children().unwrap();
    $pricingRow.find('.owl-stage').children().unwrap();
    $pricingRow.find('.owl-item').children().unwrap();
  }

  function togglePricingCarousel(){
    if (window.innerWidth < 768) enableCarousel();
    else                         disableCarousel();
  }

  var resizeTO;
  $(window).on('resize', function(){
    clearTimeout(resizeTO);
    resizeTO = setTimeout(togglePricingCarousel, 150);
  });

  togglePricingCarousel();
})();

(function(){
  // Só ativa abaixo de 768px
  const isMobile = () => window.matchMedia('(max-width: 767.98px)').matches;

  // toca/pausa a animação do card (integra com seu _pfAnim do script de preview)
  function playCard(card){
    if(!card || card.hasAttribute('data-nopan') || card.classList.contains('is-dev')) return;
    const anim = card._pfAnim;
    if(anim){ anim.playbackRate = 1; anim.play(); }
  }
  function rewindPauseCard(card){
    if(!card || card.hasAttribute('data-nopan') || card.classList.contains('is-dev')) return;
    const anim = card._pfAnim;
    if(anim){ anim.playbackRate = -1; anim.play(); anim.onfinish = () => anim.pause(); }
  }
  function pauseCard(card){
    const anim = card && card._pfAnim;
    if(anim){ anim.pause(); }
  }

  // marca o slide ativo e controla a animação da imagem
  function wireCarousel($grid){
    // já inicializado?
    if($grid.hasClass('owl-loaded')) return;

    $grid.addClass('pf-carousel owl-carousel').owlCarousel({
      items: 1,
      margin: 14,
      loop: false,
      dots: true,
      nav: true,
      autoHeight: true,
      smartSpeed: 500,
      stagePadding: 20
    });

    // helper: atualiza animações quando muda o slide
    function updateAnims(event){
      const $elem = $(event.target);
      const owl = $elem.data('owl.carousel');
      if(!owl) return;

      // índice do item ativo
      const current = owl.relative(owl.current());
      // todos os cards
      const $cards = $elem.find('.owl-item .pf-card');

      // pausa todos
      $cards.each(function(){ pauseCard(this); });

      // toca só o ativo
      const $activeItem = $elem.find('.owl-item').eq(current);
      const activeCard = $activeItem.find('.pf-card').get(0);
      // se for "em dev" (tem loader), não anima a imagem
      if(activeCard && !activeCard.classList.contains('is-dev')){
        playCard(activeCard);
      }
    }

    $grid.on('initialized.owl.carousel changed.owl.carousel translated.owl.carousel', updateAnims);

    // start anim do primeiro visível
    $grid.trigger('initialized.owl.carousel');
  }

  function initOrDestroy(){
    $('.pf-section .pf-grid').each(function(){
      const $grid = $(this);

      if(isMobile()){
        // vira carrossel
        wireCarousel($grid);
      }else{
        // volta ao grid normal, se já era owl
        if($grid.hasClass('owl-loaded')){
          // pausa quaisquer animações “presas”
          $grid.find('.pf-card').each(function(){ pauseCard(this); });
          $grid.trigger('destroy.owl.carousel')
               .removeClass('owl-carousel pf-carousel')
               .find('.owl-stage-outer').children().unwrap(); // remove wrappers do Owl
        }
      }
    });
  }

  // init
  $(document).ready(initOrDestroy);
  // reavalia ao redimensionar
  window.addEventListener('resize', function(){
    // debounce simples
    clearTimeout(window.__pfCarResize);
    window.__pfCarResize = setTimeout(initOrDestroy, 200);
  });
})();


(() => {
  const i18n = {
    pt: {
      title: '💬 Ajuda All Tech',
      hello: 'Olá! Sou o assistente da All Tech. Quer saber sobre <b>Site</b>, <b>E-commerce</b> ou <b>Automação</b>?<br><span class="at-small">(responda clicando abaixo)</span>',
      chips_main: ['Site','E-commerce','Automação','Suporte','Prazo','Valores'],
      lgpd: 'Concordo em ser contatado(a) por e-mail/WhatsApp (LGPD).',
      enviar: 'Enviar',
      typing: 'Digitando…',
      fallback: 'Ops! Tive um problema ao falar com o servidor. Você pode tentar novamente ou falar no WhatsApp 😉'
    },
    en: {
      title: '💬 All Tech Assistant',
      hello: 'Hi! I can help with <b>Website</b>, <b>E-commerce</b> or <b>Automation</b>.<br><span class="at-small">(tap a button below)</span>',
      chips_main: ['Website','E-commerce','Automation','Support','Timeline','Pricing'],
      lgpd: 'I agree to be contacted by email/WhatsApp (LGPD).',
      enviar: 'Send',
      typing: 'Typing…',
      fallback: 'Oops! I had an issue contacting the server. Try again or ping us on WhatsApp 😉'
    },
    es: {
      title: '💬 Asistente All Tech',
      hello: '¡Hola! Puedo ayudar con <b>Sitio</b>, <b>E-commerce</b> o <b>Automatización</b>.<br><span class="at-small">(toca un botón)</span>',
      chips_main: ['Sitio','E-commerce','Automatización','Soporte','Plazos','Valores'],
      lgpd: 'Acepto ser contactado por email/WhatsApp (LGPD).',
      enviar: 'Enviar',
      typing: 'Escribiendo…',
      fallback: 'Ups, hubo un problema con el servidor. Vuelve a intentar o escríbenos al WhatsApp 😉'
    }
  };
  const currentLang = (localStorage.getItem('lang') || (navigator.language||'pt').slice(0,2)).replace(/[^a-z]/g,'');
  const L = i18n[currentLang] ? currentLang : 'pt';
  const t = (k) => (i18n[L] && i18n[L][k]) || i18n['pt'][k] || k;

  const $ = s => document.querySelector(s);

  // Label i18n estático
  $('#at-title') && ($('#at-title').innerHTML = t('title'));
  $('[data-i18n="lgpd"]') && ($('[data-i18n="lgpd"]').textContent = t('lgpd'));
  $('[data-i18n="enviar"]') && ($('[data-i18n="enviar"]').textContent = t('enviar'));

  // UTM
  const params = new URLSearchParams(location.search);
  $('#at-utm-source')   && ($('#at-utm-source').value   = params.get('utm_source')   || 'direct');
  $('#at-utm-campaign') && ($('#at-utm-campaign').value = params.get('utm_campaign') || '');

  // Analytics básico
  const track = (event, data={}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
  };

  // helpers (rebuscam o DOM sempre)
  function add(who, html){
    const log = document.getElementById('at-log'); if(!log) return;
    const row = document.createElement('div');
    row.className = `at-msg ${who}`;
    const b = document.createElement('div');
    b.className='at-bubble';
    b.innerHTML = html;
    row.appendChild(b);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
  }
  function chips(arr){
    const log = document.getElementById('at-log'); if(!log) return;
    const wrap = document.createElement('div');
    wrap.className = 'at-chips';
    wrap.innerHTML = arr.map(t => `<span class="at-chip" data-v="${t}">${t}</span>`).join('');
    const row = document.createElement('div'); row.className='at-msg bot';
    const bub = document.createElement('div'); bub.className='at-bubble'; bub.appendChild(wrap);
    row.appendChild(bub); log.appendChild(row); log.scrollTop = log.scrollHeight;
  }
  function typing(on=true){
    const log = document.getElementById('at-log'); if(!log) return;
    const id='at-typing';
    if(on){
      if (document.getElementById(id)) return;
      const row = document.createElement('div');
      row.id = id; row.className='at-msg bot';
      row.innerHTML = `<div class="at-bubble"><span class="at-small">${t('typing')}</span> <span class="at-typing-dot"></span><span class="at-typing-dot"></span><span class="at-typing-dot"></span></div>`;
      log.appendChild(row); log.scrollTop = log.scrollHeight;
    }else{
      document.getElementById(id)?.remove();
    }
  }

(function(){
  const panel  = document.getElementById('at-panel');
  const fab    = document.getElementById('at-fab');
  const closeB = document.getElementById('at-close');
  const expand = document.getElementById('at-expand');

  function openPanel(){ panel.classList.add('is-open'); panel.style.removeProperty('display'); }
  function closePanel(){ panel.classList.remove('is-open'); panel.style.display='none'; fab?.focus?.(); }
  function toggleExpand(){ panel.classList.toggle('is-expanded'); }

  fab?.addEventListener('click', openPanel, { once:false });
  closeB?.addEventListener('click', (e)=>{ e.preventDefault(); closePanel(); }, { once:false });
  expand?.addEventListener('click', (e)=>{ e.preventDefault(); toggleExpand(); }, { once:false });
})();


  // Abrir/fechar/expandir
  function openPanel(){
    const panelEl = document.getElementById('at-panel');
    if (!panelEl) return;
    panelEl.classList.add('is-open');
    panelEl.style.removeProperty('display');
    if (!panelEl.dataset.boot){ boot(); panelEl.dataset.boot='1'; }
    track('chat_open', { page: location.pathname + location.hash, lang: L });
  }
  function closePanel(){
    const panelEl = document.getElementById('at-panel');
    if (!panelEl) return;
    panelEl.classList.remove('is-open');
    panelEl.style.display = 'none';
    document.getElementById('at-fab')?.focus?.();
    track('chat_close', { page: location.pathname + location.hash });
  }
  function toggleExpand(){
    const panelEl = document.getElementById('at-panel');
    if (!panelEl) return;
    panelEl.classList.toggle('is-expanded');
    track('chat_toggle_expand', { expanded: panelEl.classList.contains('is-expanded') });
  }

  // binds
  document.getElementById('at-fab')?.addEventListener('click', openPanel);
  document.getElementById('at-close')?.addEventListener('click', closePanel);
  document.getElementById('at-expand')?.addEventListener('click', toggleExpand);

  // clique em chips (delegação)
  document.addEventListener('click', (e) => {
    const c = e.target.closest('.at-chip'); if(!c) return;
    const input = document.getElementById('at-input'); if (input) input.value = c.dataset.v;
    send();
    track('chat_chip_click', { label: c.dataset.v });
  });

  function waUrl(text){
    const page = location.pathname + location.hash;
    const src  = document.getElementById('at-utm-source')?.value || 'direct';
    const cmp  = document.getElementById('at-utm-campaign')?.value || '';
    const base = `${text} [page:${page} utm:${src}${cmp?('|'+cmp):''}]`;
    return 'https://wa.me/5531997941735?text=' + encodeURIComponent(base);
  }

  function boot(){
    add('bot', t('hello'));
    chips(i18n[L].chips_main || i18n['pt'].chips_main);
  }

  async function send(){
    const input   = document.getElementById('at-input');
    const consent = document.getElementById('at-lgpd');
    const sendBtn = document.getElementById('at-send');
    if (!input || !consent || !sendBtn) return;

    const text = (input.value || '').trim(); if (!text) return;
    if (!consent.checked){ add('bot','Para continuar, marque o consentimento LGPD.'); return; }

    add('user', input.value); input.value = ''; sendBtn.disabled = true;
    track('chat_send', { text });

    typing(true);
    try{
      const res = await fetch('bot.php', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          message: text,
          utm_source: document.getElementById('at-utm-source')?.value || 'direct',
          utm_campaign: document.getElementById('at-utm-campaign')?.value || ''
        })
      });
      const raw = await res.text();
      let data;
      try{ data = JSON.parse(raw); }catch(e){
        add('bot', t('fallback') + ' <a class="at-chip" target="_blank" rel="noopener" href="'+waUrl('Quero falar no WhatsApp')+'">WhatsApp</a>');
        return;
      } finally { typing(false); }
      add('bot', data.html || data.reply || '(sem resposta)');
      if (data.quick_replies?.length) chips(data.quick_replies);
    }catch(err){
      typing(false);
      add('bot', t('fallback') + ' <a class="at-chip" target="_blank" rel="noopener" href="'+waUrl('Quero falar no WhatsApp')+'">WhatsApp</a>');
    }finally{
      sendBtn.disabled = false;
    }
  }
  document.getElementById('at-send')?.addEventListener('click', send);
  document.getElementById('at-input')?.addEventListener('keydown', e => e.key === 'Enter' && send());
  document.addEventListener('keydown', e => { 
    const isOpen = document.getElementById('at-panel')?.style.display !== 'none';
    if (e.key === 'Escape' && isOpen) closePanel(); 
  });

  // Auto-open educado (uma vez)
  let openedByTrigger = false;
  function softOpen(reason){
    const panelEl = document.getElementById('at-panel');
    if (!panelEl || openedByTrigger || panelEl.dataset.boot) return;
    openedByTrigger = true; openPanel();
    add('bot','Posso tirar suas dúvidas? Sem compromisso 😊');
    track('chat_soft_open', { reason });
  }
  setTimeout(() => softOpen('timeout_20s'), 20000);
  const pricing = document.querySelector('#pricing');
  if ('IntersectionObserver' in window && pricing){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) softOpen('pricing_visible'); });
    }, {threshold:.2});
    io.observe(pricing);
  }
  document.addEventListener('mouseout', e=>{
    if (e.clientY <= 0) softOpen('exit_intent');
  });
})(); // fim Chat AT

//  Chat AT: correções mobile 
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

(() => {
  const input = document.getElementById('at-input');
  const log   = document.getElementById('at-log');
  if (!input || !log) return;
  function keepVisible(){
    setTimeout(() => {
      input.scrollIntoView({ block: 'end', inline: 'nearest' });
      log.scrollTop = log.scrollHeight;
    }, 300);
  }
  if (isTouch){
    input.addEventListener('focus', keepVisible);
  }
})();

if (!isTouch){
  document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
  document.addEventListener('keydown', function(e){
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ){
      e.preventDefault();
    }
  });
}

//  Chat i18n helpers (opcional para mensagens prontas) 
function AT_chip(id, label) {
  const btn = document.createElement("button");
  btn.className = "at-chip";
  btn.dataset.id = id;
  btn.textContent = label;
  btn.addEventListener("click", () => AT_handleChip(id, label));
  return btn;
}

function AT_addBot(html) {
  const log = document.getElementById("at-log");
  const wrap = document.createElement("div");
  wrap.className = "at-msg bot";
  wrap.innerHTML = `<div class="at-bubble">${html}</div>`;
  log.appendChild(wrap);
  log.scrollTop = log.scrollHeight;
}

function AT_addChips(chips) {
  const log = document.getElementById("at-log");
  const row = document.createElement("div");
  row.className = "at-chips-row";
  chips.forEach(c => row.appendChild(AT_chip(c.id, c.label)));
  log.appendChild(row);
}

window.AT_renderWelcome = function () {
  const C = window.AT_I18N; if (!C) return;
  AT_addBot(`<p>${C.intro}</p><p>${C.ask}</p>`);
  AT_addChips([
    { id: "site",      label: C.chips.site },
    { id: "ecommerce", label: C.chips.ecommerce },
    { id: "automacao", label: C.chips.automacao },
    { id: "suporte",   label: C.chips.suporte },
    { id: "prazo",     label: C.chips.prazo },
    { id: "precos",    label: C.chips.precos }
  ]);
};

window.AT_handleChip = function (id) {
  const C = window.AT_I18N; if (!C) return;
  const html = C.answers[id];
  AT_addBot(html || C.fallback);
};

(function () {
  const DEFAULT_SPEED = 22;  // px/s (menor = mais suave)
  const MIN_DUR = 8;         // duração mínima em segundos
  const canHover = matchMedia('(hover:hover)').matches;

  // IO para mobile/touch: toca quando entra na viewport, volta quando sai
  const touchObserver = ('IntersectionObserver' in window) && !canHover
    ? new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const anim = target._pfAnim;
          if (!anim) return;
          anim.playbackRate = isIntersecting ? 1 : -1;
          anim.play();
        });
      }, { threshold: 0.5 })
    : null;

  function setupCard(card) {
    const wrap = card.querySelector('.pf-preview');
    const img  = card.querySelector('.pf-preview img');
    if (!wrap || !img) return;

  
    function buildAnimation() {
      // distância real disponível pra “deslizar”
      const dist = Math.max(0, img.clientHeight - wrap.clientHeight) || 80;
      // duração: usa data-speed se houver; senão DEFAULT_SPEED
      const speed = Number(card.dataset.speed) || DEFAULT_SPEED; // px/s
      const dur   = Math.max(MIN_DUR, dist / speed);            // s

      // guarda como CSS vars se quiser inspecionar
      card.style.setProperty('--pf-move', dist + 'px');
      card.style.setProperty('--pf-dur',  dur + 's');

      // (re)cria animação
      if (card._pfAnim) card._pfAnim.cancel();
      const anim = img.animate(
        [
          { transform: 'translateY(0)' },
          { transform: `translateY(${-dist}px)` }
        ],
        { duration: dur * 1000, easing: 'linear', fill: 'both' }
      );
      anim.pause();

      // ao terminar (ida ou volta), pausamos pra não “disparar” sozinho
      anim.onfinish = () => { anim.pause(); };

      card._pfAnim = anim;
    }

    if (card.classList.contains('is-dev') || card.hasAttribute('data-nopan')) {
      return; // não cria animação de slide para cards em dev
    }

    // cria a animação quando a imagem estiver pronta
    if (img.complete) buildAnimation();
    else img.addEventListener('load', buildAnimation, { once: true });

    // recalc ao redimensionar (recria animação)
    window.addEventListener('resize', () => {
      // guarda progresso antes de recriar
      const prev = card._pfAnim;
      const progress = prev && prev.effect && prev.effect.getComputedTiming
        ? prev.effect.getComputedTiming().progress
        : 0;
      buildAnimation();
      // tenta restaurar posição aproximada
      if (card._pfAnim && progress != null) {
        card._pfAnim.currentTime = progress * card._pfAnim.effect.getTiming().duration;
        card._pfAnim.pause();
      }
    });

    if (canHover) {
      // desktop: entra → vai pra frente; sai → volta ao contrário
      card.addEventListener('mouseenter', () => {
        if (!card._pfAnim) return;
        card._pfAnim.playbackRate = 1;
        card._pfAnim.play();
      });
      card.addEventListener('mouseleave', () => {
        if (!card._pfAnim) return;
        card._pfAnim.playbackRate = -1;
        card._pfAnim.play();
      });
    } else if (touchObserver) {
      // mobile/touch: observar visibilidade
      touchObserver.observe(card);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.pf-card').forEach(setupCard);
  });
})();

  // Atualiza link ativo no scroll
  const sections = [...document.querySelectorAll('[data-scroll-index]')]
  const setActive = () => {
    const y = window.scrollY
    const viewport = window.innerHeight
    // encontra a seção dominante no viewport
    const current = sections.findLast(sec => y + 0.35*viewport >= sec.offsetTop)
    if (!current) return
    const idx = current.getAttribute('data-scroll-index')
    document.querySelectorAll('[data-scroll-nav]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-scroll-nav') === idx)
    })
  }
  window.addEventListener('scroll', setActive, { passive:true })
  window.addEventListener('load', setActive)


  document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.pf-card:not(.is-locked) .pf-preview').forEach(preview => {
    const veil = document.createElement('div');
    veil.className = 'pf-veil';
    const span = document.createElement('span');
    span.className = 'pf-open';
    span.textContent = 'Abrir site';
    veil.appendChild(span);
    preview.appendChild(veil); // agora o véu cobre só a imagem
  });


  /* ===== 2.2 – Mobile: transforma as grades do portfólio em carrossel e
           marca o item central como “ativo” (mostra o véu automaticamente) ===== */
  // const isMobile = window.matchMedia('(max-width: 767.98px)').matches;

  // if (isMobile && typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel === 'function') {
  //   // cada .pf-grid dentro da seção de portfólio vira um carrossel independente
  //   jQuery('.pf-section .pf-grid').each(function () {
  //     const $grid = jQuery(this);
  //     // evita reinicializar se já tiver owl
  //     if ($grid.hasClass('owl-loaded')) return;

  //     $grid.addClass('pf-carousel').owlCarousel({
  //       items: 1,
  //       center: true,
  //       loop: true,
  //       margin: 10,
  //       stagePadding: 36,
  //       smartSpeed: 450,
  //       nav: true,
  //       dots: true
  //     });

  //     // função que aplica .is-active ao item central
  //     const setActive = (e) => {
  //       const idx = e.item && typeof e.item.index === 'number' ? e.item.index : $grid.find('.owl-item.center').index();
  //       $grid.find('.pf-card').removeClass('is-active');
  //       const $centerCard = $grid.find('.owl-item').eq(idx).find('.pf-card');
  //       $centerCard.addClass('is-active');
  //     };

  //     $grid.on('initialized.owl.carousel', setActive);
  //     $grid.on('changed.owl.carousel', setActive);

  //     // força marcar ativo já na carga
  //     setTimeout(() => $grid.trigger('refresh.owl.carousel'), 0);
  //   });
  // }
});