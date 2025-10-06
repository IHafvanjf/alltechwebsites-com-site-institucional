<?php
// bot.php — Chat informacional + CTA para WhatsApp (JSON) — sem exibir preços

declare(strict_types=1);
ini_set('display_errors','0'); ini_set('log_errors','1'); error_reporting(E_ALL);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

require __DIR__ . '/config.php';

// ---------- helpers ----------
function respond(array $arr, int $code=200){ http_response_code($code); echo json_encode($arr, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES); exit; }
function e($s){ return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function normalize($s){
  $s = mb_strtolower($s,'UTF-8');
  $t = @iconv('UTF-8','ASCII//TRANSLIT',$s); if ($t !== false) $s = $t; // remove acentos se possível
  return preg_replace('/[^a-z0-9@ \-\._\+]/','',$s);
}
function wa_link(string $number, string $text): string {
  return 'https://wa.me/'.preg_replace('/\D+/','',$number).'?text='.rawurlencode($text);
}
function cta_whatsapp(string $url): string {
  return '<a class="at-chip" target="_blank" rel="noopener" href="'.e($url).'">Falar no WhatsApp</a>';
}
function chips(array $arr): array { return $arr; }

// ---------- entrada ----------
$in = json_decode(file_get_contents('php://input') ?: '{}', true);
$msg = trim((string)($in['message'] ?? ''));
$utm_source   = trim((string)($in['utm_source']   ?? ''));
$utm_campaign = trim((string)($in['utm_campaign'] ?? ''));

if ($msg === '') {
  respond([
    'html' => 'Oi! Diga por exemplo: <b>Site</b>, <b>E-commerce</b>, <b>Automação</b>, <b>Valores</b>, <b>Prazo</b> ou <b>Suporte</b>.',
    'quick_replies' => chips(['Site','E-commerce','Automação','Suporte','Prazo','Valores'])
  ]);
}

$plain = normalize($msg);

// ---------- roteamento por intenção ----------
$intent = 'menu';

// saudações / menu
if (preg_match('/\b(oi|ola|ol[áa]|bom dia|boa tarde|boa noite|menu|inicio|come[çc]ar)\b/',$plain)) {
  $intent = 'menu';
}

// serviços
if (preg_match('/\b(e-?commerce|loja|shopify|woocommerce)\b/',$plain)) $intent = 'ecommerce';
if (preg_match('/\b(site|landing|pagina)\b/',$plain))                 $intent = 'site';
if (preg_match('/\b(automacao|automation|api|crm|erp)\b/',$plain))    $intent = 'automacao';

// tópicos
if (preg_match('/\b(prazo|entrega|tempo)\b/',$plain))                     $intent = 'prazo';
if (preg_match('/\b(preco|pre[cç]o|valor|valores|orcamento|orçamento)\b/',$plain)) $intent = 'precos';
if (preg_match('/\b(seguranca|lgpd|dados|privacidade)\b/',$plain))        $intent = 'seguranca';
if (preg_match('/\b(portfolio|portifolio|projetos?)\b/',$plain))          $intent = 'portfolio';
if (preg_match('/\b(suporte|manutencao|manuten[cç]ao)\b/',$plain))        $intent = 'suporte';
if (preg_match('/\b(contato|email|telefone)\b/',$plain))                  $intent = 'contato';

// CTA direta
if (preg_match('/\b(whats|zap|wpp|whatsapp)\b/',$plain))     $intent = 'whatsapp';

// ---------- respostas ----------
$ctaTextBase = "Oi! Vim do site $BRAND_NAME.";
if ($utm_source || $utm_campaign) {
  $ctaTextBase .= " [utm: ".($utm_source ?: 'direct').($utm_campaign ? '|'.$utm_campaign : '')."]";
}

function answer_block(string $titleHtml, string $bodyHtml, string $ctaUrl, array $nextChips){
  return [
    'html' => "<div class='at-small'>{$titleHtml}</div><div style='margin:.4rem 0 0.6rem'>{$bodyHtml}</div>".cta_whatsapp($ctaUrl),
    'quick_replies' => $nextChips
  ];
}

switch ($intent) {
  case 'site':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero um orçamento para Site.');
    respond(answer_block('📄 Sobre <b>sites</b>', $GLOBALS['FAQ']['site'], $cta, chips(['Prazo','Valores','Portfólio','Falar no WhatsApp'])));
  case 'ecommerce':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Tenho interesse em um E-commerce.');
    respond(answer_block('🛒 Sobre <b>E-commerce</b>', $GLOBALS['FAQ']['ecommerce'], $cta, chips(['Prazo','Valores','Portfólio','Falar no WhatsApp'])));
  case 'automacao':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero automatizar um processo.');
    respond(answer_block('⚙️ Sobre <b>automações</b>', $GLOBALS['FAQ']['automacao'], $cta, chips(['Suporte','Valores','Falar no WhatsApp'])));
  case 'suporte':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Preciso de suporte/manutenção.');
    respond(answer_block('🛠️ <b>Suporte & manutenção</b>', $GLOBALS['FAQ']['suporte'], $cta, chips(['Valores','Falar no WhatsApp','Menu'])));
  case 'prazo':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero confirmar prazos para meu projeto.');
    respond(answer_block('⏱️ <b>Prazos</b>', $GLOBALS['FAQ']['prazo'], $cta, chips(['Site','E-commerce','Automação','Valores','Falar no WhatsApp'])));
  case 'precos': // tratamos como "Valores"
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero falar sobre valores agora.');
    respond(answer_block('💬 <b>Valores & Proposta</b>', $GLOBALS['FAQ']['precos'], $cta, chips(['Site','E-commerce','Automação','Falar no WhatsApp','Menu'])));
  case 'seguranca':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero saber mais sobre segurança/LGPD.');
    respond(answer_block('🔒 <b>Segurança & LGPD</b>', $GLOBALS['FAQ']['seguranca'], $cta, chips(['Suporte','Falar no WhatsApp','Menu'])));
  case 'portfolio':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Queria ver exemplos parecidos com meu caso.');
    respond(answer_block('🖼️ <b>Portfólio</b>', $GLOBALS['FAQ']['portfolio'], $cta, chips(['Site','E-commerce','Automação','Falar no WhatsApp'])));
  case 'contato':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero conversar com um especialista.');
    respond(answer_block('📞 <b>Contato</b>', $GLOBALS['FAQ']['contato'], $cta, chips(['Falar no WhatsApp','Menu'])));
  case 'whatsapp':
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero falar pelo WhatsApp.');
    respond([
      'html' => "Perfeito! Clique para falar agora: ".cta_whatsapp($cta),
      'quick_replies' => chips(['Site','E-commerce','Automação','Menu'])
    ]);
  case 'menu':
  default:
    $cta = wa_link($GLOBALS['WHATSAPP_NUMBER'], $ctaTextBase.' Quero começar um projeto.');
    respond([
      'html' => "Olá! Sou o assistente da <b>".e($GLOBALS['BRAND_NAME'])."</b>. Quer saber sobre <b>Site</b>, <b>E-commerce</b> ou <b>Automação</b>?<br><span class='at-small'>(responda clicando abaixo)</span><br><br>".cta_whatsapp($cta),
      'quick_replies' => chips(['Site','E-commerce','Automação','Suporte','Prazo','Valores'])
    ]);
}
