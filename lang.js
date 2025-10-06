/* 
   DICIONÁRIO DE TRADUÇÕES
    */
const TRANSLATIONS = {
  "pt-br": {
    _title: "All Tech",
    idioma: "Idioma",

    // Navbar / seções
    inicio: "Início",
    sobre: "Sobre",
    servicos: "Serviços",
    portfolio: "Portfólio",
    precos: "Preços",
    contato: "Contato",

    // Loader
    slogan1: "Inovar",
    slogan2: "Integrar",
    slogan3: "Evoluir",

    // Home slider
    tituloHome1: "Ideia de Negócio Online",
    textoHome1:
      "Transforme sua visão em realidade: crie sua loja virtual, alcance clientes no mundo inteiro e expanda seu negócio sem limites",
    tituloHome2: "Automatização e Mais Agilidade",
    textoHome2:
      "Otimize processos, reduza erros e ganhe tempo com soluções automatizadas que aceleram o crescimento da sua empresa",
    tituloHome3: "Seu Negócio na Palma da Mão",
    textoHome3:
      "Conecte-se com seus clientes onde quer que estejam: aplicativos web responsivos e painéis que colocam seu negócio no bolso do cliente",

    // Sobre
    sobreTitulo: "DETALHES DA <span>ALL TECH</span>",
    sobreSubtitulo: "Automatize Seu Negócio Com <span>All Tech</span>",
    sobreTexto:
      "Na All Tech, criamos automações web personalizadas para acelerar seus processos, eliminar erros manuais e oferecer aos seus clientes uma experiência digital ágil e intuitiva.  Com integrações diretas a sistemas como CRM, ERP e plataformas de e-commerce, fornecemos painéis customizados e alertas automáticos que ampliam sua produtividade e garantem escalabilidade ao seu negócio.",
    automacao1: "Agendamento Automático",
    automacao2: "Fluxo de Venda",
    automacao3: "Gerenciamento",
    automacao4: "Automação de Frete",
    automacao5Titulo: "E muito mais",
    enviarIdeia: "Envie sua ideia!",

    // Serviços
    servicosTitulo: "Nossos <span>Serviços</span>",

    // Portfólio
    portfolioTitulo: "Nossos <span>Projetos</span>",
    portfolioPet: "Pet Shop",
    portfolioBarbearia: "Barbearia",
    portfolioSalao: "Salão",
    portfolioConcessionaria: "Concessionária",
    portfolioDentista: "Dentista",
    portfolioAgencia: "Agência de Viagem",
    verMais: "Ver mais",
    verMenos: "Ver menos",

    // --- dentro de TRANSLATIONS["pt-br"] ---
    servicesCards: [
      { title: "Desenvolvimento De Sites", text: "Criamos sites responsivos e otimizados, com design moderno e tecnologia atualizada para sua presença online." },
      { title: "Otimização De SEO", text: "Melhoramos seu ranqueamento nos mecanismos de busca, aumentando a visibilidade e atraindo mais tráfego qualificado." },
      { title: "Manutenção E Suporte", text: "Garantimos que seu site ou sistema esteja sempre atualizado, seguro e funcionando 24/7, com suporte dedicado." },
      { title: "Integração De APIs", text: "Conectamos seu site a serviços externos, automatizando processos e trocando dados em tempo real." },
      { title: "Sistemas Personalizados", text: "Desenvolvemos aplicações sob medida para suas necessidades, com funcionalidades exclusivas e escalabilidade garantida." },
      { title: "UX/UI Design", text: "Projetamos interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário e na conversão dos visitantes." }
    ],


    // Pricing (labels usados em botões)
    contratar: "Contratar",

    // FAQ
    faq: "Perguntas Frequentes",
    faqTitulo: "Perguntas <span>Mais Frequentes</span>",
    faq1Titulo: "Qual o prazo de entrega de um site completo?",
    faq1Texto:
      "Em média, um site institucional leva de 7 a 14 dias úteis, dependendo da complexidade; e-commerces ou sistemas personalizados costumam levar de 15 a 30 dias.",
    faq2Titulo: "Como funciona o suporte e manutenção?",
    faq2Texto:
      "Oferecemos pacotes de manutenção mensal com atualizações, correções de segurança e backups automáticos para manter seu site sempre estável.",
    faq3Titulo: "Meus dados estarão seguros?",
    faq3Texto:
      "Implementamos certificados SSL, políticas de backup e práticas de código seguro para proteger suas informações contra invasões.",
    faq4Titulo: "Quais tipos de automação vocês oferecem?",
    faq4Texto:
      "Trabalhamos com automação de agendamento, e-commerce, fluxos de venda, envio de e-mails, integrações de CRM/ERP, alertas automáticos e chatbots.",
    faq5Titulo: "Posso adicionar funcionalidades depois da entrega?",
    faq5Texto:
      "Claro: oferecemos serviços de evolução contínua para implementar novas features, integrar APIs ou expandir seu sistema sempre que precisar.",
    faq6Titulo: "Qual a agilidade da automação?",
    faq6Texto:
      "Após a configuração inicial (geralmente em até 7 dias úteis), a automação começa a operar imediatamente, trazendo ganhos de produtividade já a partir do primeiro ciclo.",
    faq7Titulo: "Vocês também hospedam e registram domínio?",
    faq7Texto:
      "Sim: prestamos serviço completo de registro de domínio, configuração de hospedagem em servidores rápidos e monitoramento 24/7.",
    chat: {
  title: "💬 Ajuda All Tech",
  intro: "Olá! Sou o assistente da All Tech.",
  ask: "Quer saber sobre <b>Site</b>, <b>E-commerce</b> ou <b>Automações</b>?<br><small>(responda clicando abaixo)</small>",
  lgpd: "Concordo em ser contatado(a) por e-mail/WhatsApp (LGPD).",
  send: "Enviar",
  inputPh: "Escreva aqui…",
  chips: {
    site: "Site",
    ecommerce: "E-commerce",
    automacao: "Automação",
    suporte: "Suporte",
    prazo: "Prazo",
    precos: "Valores"
  },
  // respostas em HTML (reaproveitando seu PHP)
  answers: {
    site: `<?= $FAQ['site'] ?>`,
    ecommerce: `<?= $FAQ['ecommerce'] ?>`,
    automacao: `<?= $FAQ['automacao'] ?>`,
    suporte: `<?= $FAQ['suporte'] ?>`,
    prazo: `<?= $FAQ['prazo'] ?>`,
    precos: `<?= $FAQ['precos'] ?>`,
    seguranca: `<?= $FAQ['seguranca'] ?>`,
    portfolio: `<?= $FAQ['portfolio'] ?>`,
    contato: `<?= $FAQ['contato'] ?>`
  },
  fallback: "Não entendi. Pode escolher um dos botões acima? 🙂"
},
    // Contato
    contatoTitulo: "Entre em <span>contato</span>",
    duvidasSuporte: "Para dúvidas e suporte",
    escrevaPara: "Escreva para nós em",
    liguePara: "Ligue para",
    enviarMensagem: "Enviar Mensagem",

    // Chatbot
    chatbotTitulo: "💬 Ajuda All Tech",
    chatbotIntro: "Olá! Como posso te ajudar?",
    chatbotBtn1: "📅 Qual o prazo de entrega?",
    chatbotBtn2: "🛠️ Como funciona o suporte?",
    chatbotBtn3: "🔒 Meus dados estão seguros?",
    chatbotBtn4: "⚙️ Quais automações vocês oferecem?",
    respostaPrazo:
      "Um site institucional leva entre 7 e 14 dias úteis. E-commerces ou sistemas maiores entre 15 e 30 dias.",
    respostaSuporte:
      "Nosso suporte inclui correções, atualizações e monitoramento, com pacotes mensais personalizados.",
    respostaSeguranca:
      "Sim! Utilizamos SSL, backups e boas práticas para manter seus dados sempre seguros.",
    respostaAutomacoes:
      "Oferecemos automação de agendamentos, vendas, e-mails, notificações, CRM/ERP e muito mais.",

    // Footer
    rodapeEnderecoTitulo: "Encontre-nos",
    rodapeEnderecoLocal: "Belo Horizonte - MG",
    rodapeTelefoneTitulo: "Telefone",
    rodapeEmailTitulo: "Email",
    rodapeDescricao:
      "A AllTech é a revolução digital que sua empresa precisa! Especialistas em desenvolvimento de sites e aplicações web, transformamos ideias em experiências digitais envolventes, escaláveis e de alto desempenho. Seja para fortalecer sua presença online, aumentar suas conversões ou oferecer uma experiência digital impecável, criamos soluções sob medida para o seu negócio.",
    rodapeServicosTitulo: "Serviços",
    rodapeServico1: "Desenvolvimento de Sites",
    rodapeServico2: "Aplicações Web",
    rodapeServico3: "E-commerce",
    rodapeServico4: "Otimização de SEO",
    rodapeServico5: "Manutenção e Suporte",
    rodapeServico6: "Integração de APIs",
    rodapeServico7: "Sistemas Personalizados",
    rodapeServico8: "UX/UI Design",
    rodapeContatoTitulo: "Fale Conosco",
    rodapeContatoTexto:
      "Precisa de um orçamento ou tem alguma dúvida? Fale conosco agora pelo WhatsApp!",
    rodapeCopy:
      "Copyright © 2025, Todos os direitos reservados, AllTech",
          contratar: "Contratar",


    // ---- Descrições dos projetos (para overlay) ----
    descPet:
      "Sistema de agendamento online desenvolvido para um pet shop, com interface intuitiva e responsiva. Permite que clientes escolham serviços (banho, tosa, etc.), horários e observações, com confirmação via modal. Os horários são bloqueados conforme a duração dos serviços para evitar conflitos. Integração com PIX e cartão de crédito, envio automático de e-mails com status, painel administrativo completo com controle de agendamentos, bloqueio de horários, recuperação de senha e integração com WhatsApp.",
    descBarbearia:
      "Sistema completo para barbearias, com agendamento online, atualização em tempo real de horários disponíveis e interface responsiva com dark mode. Painel administrativo seguro para gerenciar atendimentos, bloquear horários e exibir produtos à venda. Recuperação de senha por e-mail e experiência moderna para clientes e gestor.",
    descSalao:
      "Sistema para salão feminino, com agendamento por profissional, vitrine de produtos e galeria de antes e depois. Desenvolvido com HTML5, CSS3 (Bootstrap), JavaScript, PHP e MySQL. Painel administrativo com controle de horários, bloqueio de datas e recuperação de senha por e-mail. Interface responsiva e moderna.",
    descConcessionaria:
      "Sistema completo para concessionária, com site institucional e painel administrativo. Cadastro/edição/exclusão de veículos, upload de fotos e panoramas 360°, filtros e busca dinâmica no estoque. Gestão de propostas com atualizações por e-mail/WhatsApp via PHPMailer. Back-end em PHP/MySQL e front-end em HTML, CSS e JS puro.",
    descDentista:
      "Sistema de agendamento online para clínica odontológica, com login seguro, gerenciamento de horários e painel administrativo. Pacientes escolhem datas disponíveis; o administrador pode visualizar/excluir agendamentos e bloquear dias. Interface responsiva (HTML/CSS/JS) e back-end em PHP/MySQL.",
    descAgencia:
      "Sistema para agência de viagens inteligente, com recomendação personalizada de destinos baseada no perfil do usuário. Modelo de IA (TensorFlow) para classificar perfis e sugerir países. Integração front-end/IA via Flask e JSON. Interface com dark mode, tradução do site, feedback via API Node.js e resultados interativos.",
    descIcao:
      "Landing page interativa para curso preparatório ICAO, feita com HTML5, CSS3 e JavaScript puro. Navegação suave, carrossel, formulário com validação em tempo real e scroll animado. Design moderno, responsivo e acessível, focado em conversão e UX.",
    descQuadra:
      "Site para quadras esportivas com sistema de agendamento e pagamento via PIX (API Mercado Pago). Escolha de datas/horários disponíveis, confirmação imediata e bloqueio automático após pagamento. Painel para gerenciamento de reservas. Stack: HTML, CSS, JS e PHP.",
    descImobiliaria:
      "Sistema para imobiliária com painel administrativo completo: cadastro/edição/exclusão/listagem de imóveis, upload de imagens e organização por status. Comunicação automatizada por e-mail (PHPMailer). Front-end em HTML/CSS/JS puro; back-end em PHP/MySQL.",
    descCupido:
      "Sistema online de envio de cartas anônimas (cupido digital). Pagamento via PIX (API Mercado Pago) para liberar o envio da mensagem. Autenticação completa (login, cadastro e recuperação de senha) e controle de cartas enviadas/recebidas/pendentes. Stack: PHP, MySQL, JS, HTML e CSS.",
    descGestao:
      "Sistema de gestão de estoque e atendimento: cadastro e busca de clientes, produtos e usuários; controle de estoque em tempo real; notas de venda; exportação de relatórios em PDF/CSV; faturamento e emissão de notas no navegador. Funções automatizadas de lembretes e agendamentos. PHP, MySQL, JS e CSS.",

    // ==== OVERLAY PROJETOS ====
    overlayPainelTitulo: "Painel de Controle",
    overlayPaginaTitulo: "Página Principal",
    overlayDescricaoTitulo: "Descrição do Projeto",
    overlayBtnPainel: "Painel de Controle",
    overlayBtnPrincipal: "Página Principal",

    // ==== PREÇOS ====
    precoTitulo: "Planos de Preços",
    planoEcommerce: "E-Commerce",
    planoAgendamento: "Agendamento",
    planoLanding: "Landing Page",

    plano1item1: "Benefícios personalizados",
    plano1item2: "Painel de controle completo",
    plano1item3: "+2 profissionais inclusos",
    plano1item4: "Manutenção e suporte",
    plano1item5: "Integração com métodos de pagamento (Pix, boleto, cartão)",
    plano1item6: "Gerenciamento de estoque",
    plano1item7: "Carrinho com recuperação de abandono",
    plano1item8: "Relatórios de vendas mensais (PDF)",

    plano2item1: "Alta taxa de conversão",
    plano2item2: "Painel de controle intuitivo",
    plano2item3: "+2 profissionais inclusos",
    plano2item4: "Manutenção e suporte mensal",
    plano2item5: "Agendamento online com confirmação automática",
    plano2item6: "Notificações por WhatsApp ou e-mail",
    plano2item7: "Bloqueio de horários ocupados",
    plano2item8: "Relatórios mensais de agendamentos (PDF)",

    plano3item1: "Inclusão de chatbot",
    plano3item2: "Design interativo e responsivo",
    plano3item3: "Recursos de acessibilidade (dark mode, libras etc.)",
    plano3item4: "Entrega em até 7 dias",
    plano3item5: "Botões de redes sociais (Instagram, WhatsApp etc.)",
    plano3item6: "Formulário de contato funcional",
    plano3item7: "Hospedagem gratuita por 1 mês",
    plano3item8: "Segurança HTTPS (SSL incluso)",
    // Placeholders
    placeholders: {
      placeholderNome: "Seu Nome",
      placeholderEmail: "Seu Email",
      placeholderTelefone: "Seu Telefone",
      placeholderAssunto: "Assunto",
      placeholderMensagem: "Sua Mensagem"
    }
  },

  "en": {
    _title: "All Tech",
    idioma: "Language",

    inicio: "Home",
    sobre: "About",
    servicos: "Services",
    portfolio: "Portfolio",
    precos: "Pricing",
    contato: "Contact",

    slogan1: "Innovate",
    slogan2: "Integrate",
    slogan3: "Evolve",
    // ==== BOTÕES GERAIS ====
    contratar: "Hire",
    chat: {
  title: "💬 All Tech Help",
  intro: "Hi! I’m All Tech’s assistant.",
  ask: "Would you like to know about <b>Website</b>, <b>E-commerce</b> or <b>Automations</b>?<br><small>(click a button below)</small>",
  lgpd: "I agree to be contacted via email/WhatsApp (LGPD).",
  send: "Send",
  inputPh: "Type here…",
  chips: {
    site: "Website",
    ecommerce: "E-commerce",
    automacao: "Automation",
    suporte: "Support",
    prazo: "Timeline",
    precos: "Pricing"
  },
  answers: {
    site: `<h4>Institutional Websites</h4>
• Modern, responsive and fast layout<br>
• On-page SEO + integrations (Analytics, Meta, etc.)<br>
• Forms, chat and security (HTTPS/SSL)<br>
<b>Next step:</b> we align scope in a quick chat and send a proposal.`,
    ecommerce: `<h4>E-commerce</h4>
• Catalog, cart and checkout (Pix/card)<br>
• Order and shipping management (Correios/Calculators)<br>
• Integrations (Mercado Pago, PagSeguro, etc.)<br>
<b>Next step:</b> we validate needs and define the best solution on WhatsApp.`,
    automacao: `<h4>Automations</h4>
• Bookings, sales funnels and automatic alerts<br>
• CRM/ERP/API integrations<br>
• Dashboards and reports<br>
<b>Benefit:</b> fewer manual tasks and more scale.`,
    suporte: `<h4>Support & Maintenance</h4>
• Updates, backups and monitoring<br>
• Security fixes and tweaks<br>
• Custom monthly packages`,
    prazo: `<h4>Timelines</h4>
• Landing: ~5–7 business days (avg.)<br>
• Institutional site: ~7–14 business days (avg.)<br>
• E-commerce / system: ~15–30 business days (avg.)<br>
<b>Note:</b> we confirm exact timelines after understanding the scope.`,
    precos: `<h4>Pricing & Proposal</h4>
Each project is unique. We define pricing after a quick conversation to understand:<br>
• Goal and audience<br>
• Pages/features and required integrations<br>
• Available content and deadlines<br>
Then we send a detailed proposal.`,
    seguranca: `<h4>Security & LGPD</h4>
• HTTPS/SSL, secure code practices and backups<br>
• Hosting with firewall and monitoring<br>
• We collect the minimum necessary; you control your data.`,
    portfolio: `<h4>Portfolio</h4>
See the <b>Portfolio</b> section. I can point projects similar to your case.`,
    contato: `<h4>Contact</h4>
• Email: <a href="mailto:techinnova01@gmail.com">techinnova01@gmail.com</a><br>
• WhatsApp: click the button below to talk now 👇`
  },
  fallback: "Sorry, I didn’t get that. Please choose one of the buttons above. 🙂"
},


    // ==== OVERLAY PROJETOS ====
    overlayPainelTitulo: "Admin Panel",
    overlayPaginaTitulo: "Main Page",
    overlayDescricaoTitulo: "Project Description",
    overlayBtnPainel: "Admin Panel",
    overlayBtnPrincipal: "Main Page",

    // ==== PREÇOS ====
    precoTitulo: "Pricing Plans",
    planoEcommerce: "E-Commerce",
    planoAgendamento: "Scheduling",
    planoLanding: "Landing Page",

    plano1item1: "Personalized benefits",
    plano1item2: "Complete admin panel",
    plano1item3: "+2 professionals included",
    plano1item4: "Maintenance and support",
    plano1item5: "Integration with payment methods (Pix, boleto, card)",
    plano1item6: "Stock management",
    plano1item7: "Abandoned cart recovery",
    plano1item8: "Monthly sales reports (PDF)",

    plano2item1: "High conversion rate",
    plano2item2: "Intuitive admin panel",
    plano2item3: "+2 professionals included",
    plano2item4: "Monthly maintenance and support",
    plano2item5: "Online scheduling with automatic confirmation",
    plano2item6: "Notifications via WhatsApp or email",
    plano2item7: "Blocking of occupied times",
    plano2item8: "Monthly scheduling reports (PDF)",

    plano3item1: "Chatbot included",
    plano3item2: "Interactive and responsive design",
    plano3item3: "Accessibility features (dark mode, sign language, etc.)",
    plano3item4: "Delivery in up to 7 days",
    plano3item5: "Social media buttons (Instagram, WhatsApp, etc.)",
    plano3item6: "Functional contact form",
    plano3item7: "1 month free hosting",
    plano3item8: "HTTPS security (SSL included)",

    tituloHome1: "Online Business Idea",
    textoHome1:
      "Turn your vision into reality: build your virtual store, reach clients worldwide and expand your business with no limits",
    tituloHome2: "Automation and More Agility",
    textoHome2:
      "Optimize processes, reduce errors and save time with automated solutions that accelerate your company's growth",
    tituloHome3: "Your Business in the Palm of Your Hand",
    textoHome3:
      "Connect with your clients wherever they are: responsive web apps and dashboards that put your business in their pocket",

    sobreTitulo: "DETAILS OF <span>ALL TECH</span>",
    sobreSubtitulo: "Automate Your Business With <span>All Tech</span>",
    sobreTexto:
      "At All Tech, we create custom web automations to accelerate your processes, eliminate manual errors, and offer your clients an agile and intuitive digital experience. With direct integrations with CRM, ERP and e-commerce platforms, we deliver custom dashboards and automated alerts that boost productivity and ensure scalability.",
    automacao1: "Automatic Scheduling",
    automacao2: "Sales Flow",
    automacao3: "Management",
    automacao4: "Shipping Automation",
    automacao5Titulo: "And much more",
    enviarIdeia: "Submit your idea!",

    servicosTitulo: "Our <span>Services</span>",

    portfolioTitulo: "Our <span>Projects</span>",
    portfolioPet: "Pet Shop",
    portfolioBarbearia: "Barbershop",
    portfolioSalao: "Beauty Salon",
    portfolioConcessionaria: "Dealership",
    portfolioDentista: "Dentist",
    portfolioAgencia: "Travel Agency",
    verMais: "See more",
    verMenos: "See less",

    contratar: "Hire",

    faq: "Frequently Asked Questions",
    faqTitulo: "Frequently <span>Asked Questions</span>",
    faq1Titulo: "What is the delivery time for a complete website?",
    faq1Texto:
      "On average, an institutional website takes 7 to 14 business days, depending on complexity; e-commerce or custom systems usually take 15 to 30 days.",
    faq2Titulo: "How do maintenance and support work?",
    faq2Texto:
      "We offer monthly maintenance plans with updates, security fixes and automatic backups to keep your site stable.",
    faq3Titulo: "Will my data be secure?",
    faq3Texto:
      "We implement SSL certificates, backup policies and secure coding practices to protect your information from breaches.",
    faq4Titulo: "What types of automation do you offer?",
    faq4Texto:
      "We work with booking automation, e-commerce, sales flows, email sending, CRM/ERP integrations, automatic alerts and chatbots.",
    faq5Titulo: "Can I add features after delivery?",
    faq5Texto:
      "Yes: we offer continuous evolution services to implement new features, integrate APIs or expand your system whenever needed.",
    faq6Titulo: "How fast is the automation?",
    faq6Texto:
      "After initial setup (usually within 7 business days), the automation starts immediately, bringing productivity gains from the first cycle.",
    faq7Titulo: "Do you also host and register domains?",
    faq7Texto:
      "Yes: we provide full domain registration, fast hosting setup and 24/7 monitoring.",

    // --- dentro de TRANSLATIONS["en"] ---
    servicesCards: [
      { title: "Website Development", text: "We build responsive, optimized websites with modern design and up-to-date technology for your online presence." },
      { title: "SEO Optimization", text: "We improve your search engine ranking, increasing visibility and attracting more qualified traffic." },
      { title: "Maintenance & Support", text: "We keep your site or system updated, secure, and running 24/7 with dedicated support." },
      { title: "API Integration", text: "We connect your site to external services, automating processes and exchanging data in real time." },
      { title: "Custom Systems", text: "We develop tailor-made applications with exclusive features and guaranteed scalability." },
      { title: "UX/UI Design", text: "We design intuitive, delightful interfaces focused on great UX and visitor conversion." }
    ],


    contatoTitulo: "Get in <span>touch</span>",
    duvidasSuporte: "For questions and support",
    escrevaPara: "Write to us at",
    liguePara: "Call us at",
    enviarMensagem: "Send Message",

    chatbotTitulo: "💬 All Tech Help",
    chatbotIntro: "Hi! How can I help you?",
    chatbotBtn1: "📅 What’s the delivery time?",
    chatbotBtn2: "🛠️ How does support work?",
    chatbotBtn3: "🔒 Is my data secure?",
    chatbotBtn4: "⚙️ What automations do you offer?",
    respostaPrazo:
      "An institutional website takes 7–14 business days. E-commerce or larger systems: 15–30 days.",
    respostaSuporte:
      "Our support includes fixes, updates and monitoring via monthly plans.",
    respostaSeguranca:
      "Yes! We use SSL, backups and secure coding best practices.",
    respostaAutomacoes:
      "We offer booking, sales, email, notifications, CRM/ERP automations and more.",

    rodapeEnderecoTitulo: "Find us",
    rodapeEnderecoLocal: "Belo Horizonte - MG",
    rodapeTelefoneTitulo: "Phone",
    rodapeEmailTitulo: "Email",
    rodapeDescricao:
      "AllTech is the digital revolution your company needs! Specialists in websites and web apps, we turn ideas into engaging, scalable, high-performance digital experiences.",
    rodapeServicosTitulo: "Services",
    rodapeServico1: "Website Development",
    rodapeServico2: "Web Applications",
    rodapeServico3: "E-commerce",
    rodapeServico4: "SEO Optimization",
    rodapeServico5: "Maintenance and Support",
    rodapeServico6: "API Integration",
    rodapeServico7: "Custom Systems",
    rodapeServico8: "UX/UI Design",
    rodapeContatoTitulo: "Contact Us",
    rodapeContatoTexto:
      "Need a quote or have any questions? Talk to us on WhatsApp!",
    rodapeCopy: "Copyright © 2025, All rights reserved, AllTech",

    descPet:
      "Online scheduling system for a pet shop with an intuitive, responsive interface. Customers pick services (bathing, grooming, etc.), time slots and notes, with modal confirmation. Time slots are blocked according to service duration to avoid conflicts. PIX and credit card integration, automatic status emails, and a full admin panel: scheduling control, slot blocking, password recovery and WhatsApp integration.",
    descBarbearia:
      "Complete system for barbershops with online booking, real-time availability updates, and a responsive interface with dark mode. Secure admin panel to manage appointments, block time slots and display products for sale. Email password recovery and a modern experience for clients and managers.",
    descSalao:
      "System for beauty salons with booking by professional, product showcase and before/after gallery. Built with HTML5, CSS3 (Bootstrap), JavaScript, PHP and MySQL. Admin panel with schedule control, date blocking and email password recovery. Responsive, modern interface.",
    descConcessionaria:
      "Complete system for car dealerships with institutional website and admin panel. Vehicle CRUD, photo and 360° panorama uploads, filtering and dynamic stock search. Sales proposals managed in-system with automatic updates via email/WhatsApp using PHPMailer. PHP/MySQL backend with HTML/CSS/JS frontend.",
    descDentista:
      "Online booking for dental clinics with secure login, schedule management and admin panel. Patients select available dates; admin can view/delete bookings and block days. Responsive interface (HTML/CSS/JS) and PHP/MySQL backend.",
    descAgencia:
      "Smart travel agency system with personalized destination recommendations based on user profiles. AI model (TensorFlow) classifies profiles and suggests countries. Frontend-AI integration via Flask and JSON. Interface includes dark mode, site translation, feedback via Node.js API and interactive results.",
    descIcao:
      "Interactive landing page for ICAO prep course built with HTML5, CSS3 and vanilla JavaScript. Smooth scrolling, carousel, real-time form validation and header-compensated scroll. Modern, responsive, accessible and conversion-focused.",
    descQuadra:
      "Sports court website with booking and PIX payment (Mercado Pago API). Users choose available dates/times, pay and get immediate confirmation; slots are auto-blocked after payment. Admin panel to view/manage bookings. Stack: HTML, CSS, JS and PHP.",
    descImobiliaria:
      "Real estate system with a full admin panel: create/edit/delete/list properties, image uploads and status organization. Automated customer emails via PHPMailer. Frontend in HTML/CSS/JS; backend in PHP/MySQL.",
    descCupido:
      "Anonymous letter sending system (digital cupid). Payment via PIX (Mercado Pago API) unlocks message sending. Full auth (login, signup, password recovery) and management of sent/received/pending letters. Stack: PHP, MySQL, JS, HTML and CSS.",
    descGestao:
      "Stock and service management system: customers/products/users CRUD and search; real-time stock control; sales notes; PDF/CSV reports; billing and browser-based note issuing. Automated reminders and scheduling. PHP, MySQL, JS and CSS.",

    placeholders: {
      placeholderNome: "Your Name",
      placeholderEmail: "Your Email",
      placeholderTelefone: "Your Phone",
      placeholderAssunto: "Subject",
      placeholderMensagem: "Your Message"
    }
  },

  "es": {
    _title: "All Tech",
    idioma: "Idioma",

    inicio: "Inicio",
    sobre: "Acerca de",
    servicos: "Servicios",
    portfolio: "Portafolio",
    precos: "Precios",
    contato: "Contacto",

    slogan1: "Innovar",
    slogan2: "Integrar",
    slogan3: "Evolucionar",

    tituloHome1: "Idea de Negocio en Línea",
    textoHome1:
      "Convierte tu visión en realidad: crea tu tienda virtual, llega a clientes en todo el mundo y expande tu negocio sin límites",
    tituloHome2: "Automatización y Más Agilidad",
    textoHome2:
      "Optimiza procesos, reduce errores y ahorra tiempo con soluciones automatizadas que aceleran el crecimiento de tu empresa",
    tituloHome3: "Tu Negocio en la Palma de la Mano",
    textoHome3:
      "Conéctate con tus clientes donde estén: apps web responsivas y paneles que ponen tu negocio en su bolsillo",

    sobreTitulo: "DETALLES DE <span>ALL TECH</span>",
    sobreSubtitulo: "Automatiza Tu Negocio Con <span>All Tech</span>",
    sobreTexto:
      "En All Tech, creamos automatizaciones web personalizadas para acelerar tus procesos, eliminar errores manuales y ofrecer una experiencia digital ágil e intuitiva. Con integraciones directas con CRM, ERP y e-commerce, entregamos paneles personalizados y alertas automáticas que impulsan la productividad y garantizan la escalabilidad.",
    automacao1: "Agendamiento Automático",
    automacao2: "Flujo de Ventas",
    automacao3: "Gestión",
    automacao4: "Automatización de Envíos",
    automacao5Titulo: "Y mucho más",
    enviarIdeia: "¡Envía tu idea!",

    // ==== BOTÕES GERAIS ====
    contratar: "Contratar",
    chat: {
  title: "💬 Ayuda All Tech",
  intro: "¡Hola! Soy el asistente de All Tech.",
  ask: "¿Quieres saber sobre <b>Sitio</b>, <b>E-commerce</b> o <b>Automatizaciones</b>?<br><small>(haz clic abajo)</small>",
  lgpd: "Acepto ser contactado(a) por e-mail/WhatsApp (LGPD).",
  send: "Enviar",
  inputPh: "Escribe aquí…",
  chips: {
    site: "Sitio",
    ecommerce: "E-commerce",
    automacao: "Automatización",
    suporte: "Soporte",
    prazo: "Plazo",
    precos: "Valores"
  },
  answers: {
    site: `<h4>Sitios institucionales</h4>
• Diseño moderno, responsivo y rápido<br>
• SEO on-page + integraciones (Analytics, Meta, etc.)<br>
• Formularios, chat y seguridad (HTTPS/SSL)<br>
<b>Siguiente paso:</b> alineamos alcance en una breve charla y envío propuesta.`,
    ecommerce: `<h4>E-commerce</h4>
• Catálogo, carrito y checkout (Pix/tarjeta)<br>
• Gestión de pedidos y envíos (Correios/Calculadoras)<br>
• Integraciones (Mercado Pago, PagSeguro, etc.)<br>
<b>Siguiente paso:</b> validamos necesidades y definimos la mejor solución por WhatsApp.`,
    automacao: `<h4>Automatizaciones</h4>
• Reservas, embudos de venta y alertas automáticas<br>
• Integraciones con CRM/ERP/API<br>
• Paneles e informes<br>
<b>Beneficio:</b> menos tareas manuales y más escala.`,
    suporte: `<h4>Soporte & Mantenimiento</h4>
• Actualizaciones, respaldos y monitoreo<br>
• Correcciones de seguridad y ajustes<br>
• Paquetes mensuales a medida`,
    prazo: `<h4>Plazos</h4>
• Landing: ~5–7 días hábiles (prom.)<br>
• Sitio institucional: ~7–14 días hábiles (prom.)<br>
• E-commerce / sistema: ~15–30 días hábiles (prom.)<br>
<b>Nota:</b> confirmamos plazos exactos tras entender el alcance.`,
    precos: `<h4>Valores & Propuesta</h4>
Cada proyecto es único. Cerramos valores tras una charla rápida para entender:<br>
• Objetivo y público objetivo<br>
• Páginas/funcionalidades e integraciones<br>
• Contenido disponible y plazos<br>
Luego enviamos la propuesta detallada.`,
    seguranca: `<h4>Seguridad & LGPD</h4>
• HTTPS/SSL, buenas prácticas y respaldos<br>
• Hosting con firewall y monitoreo<br>
• Recogemos lo mínimo necesario; tú controlas tus datos.`,
    portfolio: `<h4>Portafolio</h4>
Mira la sección <b>Portafolio</b>. Puedo señalar casos similares al tuyo.`,
    contato: `<h4>Contacto</h4>
• Correo: <a href="mailto:techinnova01@gmail.com">techinnova01@gmail.com</a><br>
• WhatsApp: haz clic abajo para hablar ahora 👇`
  },
  fallback: "No entendí. ¿Puedes elegir uno de los botones de arriba? 🙂"
},

    // ==== OVERLAY PROJETOS ====
    overlayPainelTitulo: "Panel de Control",
    overlayPaginaTitulo: "Página Principal",
    overlayDescricaoTitulo: "Descripción del Proyecto",
    overlayBtnPainel: "Panel de Control",
    overlayBtnPrincipal: "Página Principal",

    // ==== PREÇOS ====
    precoTitulo: "Planes de Precios",
    planoEcommerce: "E-Commerce",
    planoAgendamento: "Agendamiento",
    planoLanding: "Página de Aterrizaje",

    plano1item1: "Beneficios personalizados",
    plano1item2: "Panel de control completo",
    plano1item3: "+2 profesionales incluidos",
    plano1item4: "Mantenimiento y soporte",
    plano1item5: "Integración con métodos de pago (Pix, boleto, tarjeta)",
    plano1item6: "Gestión de inventario",
    plano1item7: "Recuperación de carrito abandonado",
    plano1item8: "Informes mensuales de ventas (PDF)",

    plano2item1: "Alta tasa de conversión",
    plano2item2: "Panel de control intuitivo",
    plano2item3: "+2 profesionales incluidos",
    plano2item4: "Mantenimiento y soporte mensual",
    plano2item5: "Agendamiento online con confirmación automática",
    plano2item6: "Notificaciones por WhatsApp o correo electrónico",
    plano2item7: "Bloqueo de horarios ocupados",
    plano2item8: "Informes mensuales de agendamientos (PDF)",

    plano3item1: "Inclusión de chatbot",
    plano3item2: "Diseño interactivo y responsivo",
    plano3item3: "Funciones de accesibilidad (modo oscuro, lengua de señas, etc.)",
    plano3item4: "Entrega en hasta 7 días",
    plano3item5: "Botones de redes sociales (Instagram, WhatsApp, etc.)",
    plano3item6: "Formulario de contacto funcional",
    plano3item7: "Alojamiento gratuito por 1 mes",
    plano3item8: "Seguridad HTTPS (SSL incluido)",

    servicosTitulo: "Nuestros <span>Servicios</span>",

    // --- dentro de TRANSLATIONS["es"] ---
    servicesCards: [
      { title: "Desarrollo De Sitios Web", text: "Creamos sitios responsivos y optimizados, con diseño moderno y tecnología actualizada para tu presencia en línea." },
      { title: "Optimización SEO", text: "Mejoramos tu posicionamiento en buscadores, aumentando la visibilidad y atrayendo más tráfico calificado." },
      { title: "Mantenimiento Y Soporte", text: "Mantenemos tu sitio o sistema actualizado, seguro y funcionando 24/7 con soporte dedicado." },
      { title: "Integración De APIs", text: "Conectamos tu sitio con servicios externos, automatizando procesos e intercambiando datos en tiempo real." },
      { title: "Sistemas Personalizados", text: "Desarrollamos aplicaciones a medida, con funciones exclusivas y escalabilidad garantizada." },
      { title: "Diseño UX/UI", text: "Diseñamos interfaces intuitivas y agradables, enfocadas en la mejor experiencia de usuario y la conversión." }
    ],

    portfolioTitulo: "Nuestros <span>Proyectos</span>",
    portfolioPet: "Pet Shop",
    portfolioBarbearia: "Barbería",
    portfolioSalao: "Salón",
    portfolioConcessionaria: "Concesionaria",
    portfolioDentista: "Dentista",
    portfolioAgencia: "Agencia de Viajes",
    verMais: "Ver más",
    verMenos: "Ver menos",

    contratar: "Contratar",

    faq: "Preguntas Frecuentes",
    faqTitulo: "Preguntas <span>Frecuentes</span>",
    faq1Titulo: "¿Cuál es el plazo de entrega de un sitio completo?",
    faq1Texto:
      "En promedio, un sitio institucional tarda de 7 a 14 días hábiles; e-commerce o sistemas a medida suelen tardar de 15 a 30 días.",
    faq2Titulo: "¿Cómo funcionan el soporte y el mantenimiento?",
    faq2Texto:
      "Ofrecemos planes mensuales con actualizaciones, seguridad y copias de respaldo automáticas para mantener tu sitio estable.",
    faq3Titulo: "¿Mis datos estarán seguros?",
    faq3Texto:
      "Implementamos certificados SSL, políticas de respaldo y prácticas de código seguro para proteger tu información.",
    faq4Titulo: "¿Qué tipos de automatización ofrecen?",
    faq4Texto:
      "Automatización de reservas, e-commerce, flujos de ventas, correo, integraciones CRM/ERP, alertas y chatbots.",
    faq5Titulo: "¿Puedo añadir funciones después de la entrega?",
    faq5Texto:
      "Claro: ofrecemos evolución continua para nuevas features, integración de APIs o expansión del sistema.",
    faq6Titulo: "¿Qué tan rápida es la automatización?",
    faq6Texto:
      "Tras la configuración inicial (normalmente en 7 días hábiles), la automatización empieza a operar de inmediato.",
    faq7Titulo: "¿También alojan y registran dominios?",
    faq7Texto:
      "Sí: registro de dominio, hosting en servidores rápidos y monitoreo 24/7.",

    contatoTitulo: "Ponte en <span>contacto</span>",
    duvidasSuporte: "Para dudas y soporte",
    escrevaPara: "Escríbenos a",
    liguePara: "Llámanos al",
    enviarMensagem: "Enviar Mensaje",

    chatbotTitulo: "💬 Ayuda All Tech",
    chatbotIntro: "¡Hola! ¿Cómo puedo ayudarte?",
    chatbotBtn1: "📅 ¿Cuál es el plazo de entrega?",
    chatbotBtn2: "🛠️ ¿Cómo funciona el soporte?",
    chatbotBtn3: "🔒 ¿Mis datos están seguros?",
    chatbotBtn4: "⚙️ ¿Qué automatizaciones ofrecen?",
    respostaPrazo:
      "Un sitio institucional tarda 7–14 días hábiles. E-commerce o sistemas mayores: 15–30 días.",
    respostaSuporte:
      "Nuestro soporte incluye correcciones, actualizaciones y monitoreo en planes mensuales.",
    respostaSeguranca:
      "¡Sí! Usamos SSL, copias de seguridad y buenas prácticas de seguridad.",
    respostaAutomacoes:
      "Reservas, ventas, correo, notificaciones, CRM/ERP y más.",

    rodapeEnderecoTitulo: "Encuéntranos",
    rodapeEnderecoLocal: "Belo Horizonte - MG",
    rodapeTelefoneTitulo: "Teléfono",
    rodapeEmailTitulo: "Correo",
    rodapeDescricao:
      "¡AllTech es la revolución digital que tu empresa necesita! Expertos en sitios y apps web, transformamos ideas en experiencias digitales escalables y de alto rendimiento.",
    rodapeServicosTitulo: "Servicios",
    rodapeServico1: "Desarrollo de Sitios",
    rodapeServico2: "Aplicaciones Web",
    rodapeServico3: "E-commerce",
    rodapeServico4: "Optimización SEO",
    rodapeServico5: "Mantenimiento y Soporte",
    rodapeServico6: "Integración de APIs",
    rodapeServico7: "Sistemas Personalizados",
    rodapeServico8: "Diseño UX/UI",
    rodapeContatoTitulo: "Contáctanos",
    rodapeContatoTexto:
      "¿Necesitas una cotización o tienes dudas? ¡Escríbenos por WhatsApp!",
    rodapeCopy:
      "Copyright © 2025, Todos los derechos reservados, AllTech",
      
      descPet:
      "Sistema de reservas en línea para una tienda de mascotas con interfaz intuitiva y responsiva. Los clientes eligen servicios (baño, peluquería, etc.), horarios y observaciones, con confirmación en modal. Bloqueo de horarios según la duración del servicio. Integración con PIX y tarjeta, correos automáticos y panel completo: control de reservas, bloqueo de horarios, recuperación de contraseña e integración con WhatsApp.",
    descBarbearia:
      "Sistema completo para barberías con reservas en línea, actualización en tiempo real de horarios disponibles e interfaz responsiva con modo oscuro. Panel seguro para gestionar atenciones, bloquear horarios y exhibir productos. Recuperación de contraseña por correo y experiencia moderna.",
    descSalao:
      "Sistema para salón femenino con reserva por profesional, vitrina de productos y galería del antes y después. Hecho con HTML5, CSS3 (Bootstrap), JavaScript, PHP y MySQL. Panel con control de horarios, bloqueo de fechas y recuperación de contraseña por correo. Interfaz moderna y responsiva.",
    descConcessionaria:
      "Sistema completo para concesionarias con sitio institucional y panel. CRUD de vehículos, fotos y panoramas 360°, filtros y búsqueda dinámica. Gestión de propuestas con actualizaciones por correo/WhatsApp (PHPMailer). Backend PHP/MySQL y frontend HTML/CSS/JS.",
    descDentista:
      "Reservas en línea para clínica odontológica con login seguro, gestión de horarios y panel. Los pacientes eligen fechas disponibles; el administrador puede ver/eliminar reservas y bloquear días. Interfaz responsiva (HTML/CSS/JS) y backend PHP/MySQL.",
    descAgencia:
      "Sistema para agencia de viajes inteligente con recomendación de destinos personalizada según el perfil del usuario. IA (TensorFlow) para clasificar perfiles y sugerir países. Integración frontend-IA con Flask y JSON. Interfaz con modo oscuro, traducción, feedback vía API Node.js y resultados interactivos.",
    descIcao:
      "Landing page interactiva para curso ICAO hecha con HTML5, CSS3 y JavaScript puro. Desplazamiento suave, carrusel, validación de formularios en tiempo real y scroll compensado. Diseño moderno, responsivo y accesible, centrado en la conversión.",
    descQuadra:
      "Sitio para canchas deportivas con reservas y pago PIX (API Mercado Pago). Elección de fechas/horarios, confirmación inmediata y bloqueo automático. Panel para gestionar reservas. Stack: HTML, CSS, JS y PHP.",
    descImobiliaria:
      "Sistema para inmobiliarias con panel completo: alta/edición/baja/listado de inmuebles, subida de imágenes y organización por estado. Correos automáticos (PHPMailer). Frontend HTML/CSS/JS; backend PHP/MySQL.",
    descCupido:
      "Sistema de envío de cartas anónimas (cupido digital). Pago PIX (API Mercado Pago) para habilitar el envío. Autenticación completa (login, registro, recuperación) y control de cartas enviadas/recibidas/pendientes. Stack: PHP, MySQL, JS, HTML y CSS.",
    descGestao:
      "Sistema de gestión de stock y atención: CRUD y búsqueda de clientes/productos/usuarios; stock en tiempo real; notas de venta; informes PDF/CSV; facturación y emisión desde el navegador. Recordatorios y agendas automáticas. PHP, MySQL, JS y CSS.",

    placeholders: {
      placeholderNome: "Tu Nombre",
      placeholderEmail: "Tu Correo",
      placeholderTelefone: "Tu Teléfono",
      placeholderAssunto: "Asunto",
      placeholderMensagem: "Tu Mensaje"
    }
  }
};

// === CHAT I18N ===
function applyChatTranslations(lang) {
  const dictAll = window.TRANSLATIONS || {};
  const d = dictAll[(normalizeLang(lang))] || dictAll["pt-br"] || {};
  const at = d.at || {};

  // Título do painel
  const title = document.getElementById("at-title");
  if (title && at.title) title.textContent = at.title;

  // LGPD
  const lgpd = document.querySelector('.at-consent [data-i18n="lgpd"]');
  if (lgpd && at.lgpd) lgpd.textContent = at.lgpd;

  // Botão "Enviar"
  const send = document.querySelector("#at-send span");
  if (send && at.send) send.textContent = at.send;

  // Placeholder do input
  const input = document.getElementById("at-input");
  if (input && at.inputPlaceholder) input.setAttribute("placeholder", at.inputPlaceholder);

  // Expõe o dicionário do chat para o script do chat
  window.AT_CHAT_I18N = at;
}

/* ==
   Helpers / idioma atual
   == */
function normalizeLang(code) {
  if (!code) return "pt-br";
  const c = code.toLowerCase();
  if (c.startsWith("pt")) return "pt-br";
  if (c.startsWith("en")) return "en";
  if (c.startsWith("es")) return "es";
  return "pt-br";
}

function getLang() {
  const stored = localStorage.getItem("lang");
  return normalizeLang(stored || navigator.language || "pt-BR");
}

function setLang(lang) {
  const norm = normalizeLang(lang);
  localStorage.setItem("lang", norm);
  document.documentElement.setAttribute("lang", norm);
  translatePage(norm);
}

/* ==
   Aplicadores de Tradução
   == */
function translateDataAttributes(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];

  // data-translate -> innerHTML
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    const val = dict[key];
    if (typeof val === "string") el.innerHTML = val;
  });

  // data-placeholder -> placeholder
  const ph = dict.placeholders || {};
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-placeholder");
    const val = ph[key];
    if (typeof val === "string") el.setAttribute("placeholder", val);
  });

  // título da página / label do dropdown
  if (dict._title) document.title = dict._title;
  const langDrop = document.getElementById("langDropdown");
  if (langDrop && dict.idioma) langDrop.textContent = dict.idioma;
}

/* Atualiza o data-description dos cards de portfólio
   mapeando pelo data-translate do h3.tituloPortifolio */
function applyProjectDescriptions(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const map = {
    // mapeia data-translate do título -> chave da descrição
    portfolioPet: "descPet",
    portfolioBarbearia: "descBarbearia",
    portfolioSalao: "descSalao",
    portfolioConcessionaria: "descConcessionaria",
    portfolioDentista: "descDentista",
    portfolioAgencia: "descAgencia",
    // itens sem data-translate no h3 (Master ICAO, Quadra, Imobiliária, Cupido, Gestão)
    // vamos tentar inferir pelo texto do título se não houver data-translate
  };

  document.querySelectorAll(".project-card").forEach((card) => {
    let descKey = null;

    const titleEl = card.querySelector(".tituloPortifolio");
    if (titleEl) {
      const tKey = titleEl.getAttribute("data-translate");
      const tText = titleEl.textContent.trim().toLowerCase();

      if (tKey && map[tKey]) {
        descKey = map[tKey];
      } else {
        // fallback por texto:
        if (tText.includes("icao")) descKey = "descIcao";
        else if (tText.includes("quadra")) descKey = "descQuadra";
        else if (tText.includes("imobili")) descKey = "descImobiliaria";
        else if (tText.includes("cupido")) descKey = "descCupido";
        else if (tText.includes("gest") || tText.includes("gestão")) descKey = "descGestao";
      }
    }

    if (descKey && dict[descKey]) {
      card.dataset.description = dict[descKey];
    }
  });
}

/* Reescreve a seção de preços (títulos e features)
   usando o data-plan do botão WhatsApp para identificar o plano */
function applyPricingTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const pricingDict = dict.pricing;
  if (!pricingDict) return;

  // Títulos da seção (se quiser, pode colocar data-translate no HTML, mas aqui já forçamos)
  const pricingSection = document.querySelector("#pricing .section-title");
  if (pricingSection) {
    const h4 = pricingSection.querySelector("h4");
    const h2 = pricingSection.querySelector("h2");
    if (h4) h4.textContent = dict.precos || "Preços";
    if (h2) h2.innerHTML = dict.precoTitulo || "Planos <span>de Preços</span>";
  }

  // Cada .pricing-plan
  document.querySelectorAll("#pricing .pricing-plan").forEach((planEl) => {
    // identificar qual plano é pelo botão WhatsApp
    const btn = planEl.querySelector(".whatsapp-btn");
    if (!btn) return;
    const planKey = btn.getAttribute("data-plan"); // 'ecommerce' | 'agendamento' | 'landing'
    if (!planKey || !pricingDict[planKey]) return;

    // título do plano
    const headerH3 = planEl.querySelector(".pricing-header h3");
    if (headerH3) headerH3.textContent = pricingDict[planKey].title;

    // lista de features
    const ul = planEl.querySelector(".pricing-body ul");
    if (!ul) return;

    const iconHTML = '<i class="fa-solid fa-check"></i> ';
    const features = pricingDict[planKey].features || [];
    const lis = ul.querySelectorAll("li");

    // se o número de <li> não bater, reconstroi a lista
    if (lis.length !== features.length) {
      ul.innerHTML = features.map((f) => `<li>${iconHTML}${f}</li>`).join("");
    } else {
      // substitui mantendo o ícone
      features.forEach((f, i) => {
        lis[i].innerHTML = iconHTML + f;
      });
    }

    // Botão "Contratar" se tiver (texto)
    const contratarBtn = planEl.querySelector(".whatsapp-btn");
    if (contratarBtn) {
      contratarBtn.textContent = dict.contratar || "Contratar";
      contratarBtn.classList.add("btn", "btn-2"); // garante classe caso mude algo
    }
  });
}

/* Traduz os modais (Casamento e 15 anos) */
function applyModalTranslations(lang) {
  const d = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const m = d.modal || {};

  // Casamento
  const mc = document.getElementById("modal-casamento");
  if (mc && m.casamento && m.comum) {
    const title = mc.querySelector(".modal-title");
    if (title) title.textContent = m.casamento.titulo;

    const h6 = mc.querySelector(".overlay-card__desc h6");
    if (h6) h6.textContent = m.comum.inclui;

    // itens da lista
    const lis = mc.querySelectorAll(".overlay-card__desc ul li");
    if (lis[0]) {
      lis[0].childNodes[2].textContent = ` ${m.casamento.li1} `;
      const exp = mc.querySelector("#explain-qr-casamento .card-body");
      if (exp) exp.textContent = m.casamento.li1_exp;
    }
    if (lis[1]) {
      lis[1].childNodes[2].textContent = ` ${m.casamento.li2} `;
      const exp = mc.querySelector("#explain-couple-casamento .card-body");
      if (exp) exp.textContent = m.casamento.li2_exp;
    }
    if (lis[2]) {
      lis[2].childNodes[2].textContent = ` ${m.casamento.li3} `;
      const exp = mc.querySelector("#explain-photo-casamento .card-body");
      if (exp) exp.textContent = m.casamento.li3_exp;
    }

    const btn = mc.querySelector(".overlay-card__btn");
    if (btn) btn.textContent = m.casamento.btnPrincipal;
  }

  // 15 anos
  const m15 = document.getElementById("modal-15anos");
  if (m15 && m.quinze && m.comum) {
    const title = m15.querySelector(".modal-title");
    if (title) title.textContent = m.quinze.titulo;

    const h6 = m15.querySelector(".overlay-card__desc h6");
    if (h6) h6.textContent = m.comum.inclui;

    const lis = m15.querySelectorAll(".overlay-card__desc ul li");
    if (lis[0]) {
      lis[0].childNodes[2].textContent = ` ${m.quinze.li1} `;
      const exp = m15.querySelector("#explain-qr-15anos .card-body");
      if (exp) exp.textContent = m.quinze.li1_exp;
    }
    if (lis[1]) {
      lis[1].childNodes[2].textContent = ` ${m.quinze.li2} `;
      const exp = m15.querySelector("#explain-couple-15anos .card-body");
      if (exp) exp.textContent = m.quinze.li2_exp;
    }
    if (lis[2]) {
      lis[2].childNodes[2].textContent = ` ${m.quinze.li3} `;
      const exp = m15.querySelector("#explain-photo-15anos .card-body");
      if (exp) exp.textContent = m.quinze.li3_exp;
    }

    const btn = m15.querySelector(".overlay-card__btn");
    if (btn && !btn.querySelector("a")) {
      btn.textContent = m.quinze.btnPrincipal;
    } else if (btn && btn.querySelector("a")) {
      btn.querySelector("a").textContent = m.quinze.btnPrincipal;
    }
  }
}

/* Função principal */
function translatePage(langParam) {
  const lang = langParam || getLang();
  translateDataAttributes(lang);
  applyProjectDescriptions(lang);
  applyPricingTranslations(lang);
  applyModalTranslations(lang);
  applyServicesTranslations(lang);
  applyChatTranslations(lang);
}

/* Boot */
document.addEventListener("DOMContentLoaded", () => {
  // aplica idioma salvo ou do navegador
  setLang(getLang());

  // handler do seletor no menu
  document.querySelectorAll(".dropdown-item[data-lang]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const selected = a.getAttribute("data-lang");
      setLang(selected);
    });
  });
});

function applyServicesTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["pt-br"];
  const cards = dict.servicesCards || [];
  const nodes = document.querySelectorAll(".services-wrapper .glassmorphic-card");

  nodes.forEach((card, i) => {
    const data = cards[i];
    if (!data) return;
    const h3 = card.querySelector(".contentBox h3");
    const p = card.querySelector(".contentBox p");
    if (h3) h3.textContent = data.title;
    if (p) p.textContent = data.text;
  });
}
