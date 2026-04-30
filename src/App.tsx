import React, { useRef } from 'react';
import {
  Check,
  X,
  ShieldCheck,
  Zap,
  Download,
  ChevronDown,
  FileText,
  Monitor,
} from 'lucide-react';

/* ── Design system ── */
const styles = `
  .lt-page {
    --bg: #f5f5f0;
    --fg: #1a1a2e;
    --primary: #e63946;
    --accent: #f4a261;
    --muted: #6b7280;
    --success: #16a34a;
    --border: rgba(26,26,46,0.08);

    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg);
    color: var(--fg);
    -webkit-font-smoothing: antialiased;
  }

  .lt-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    opacity: 0.5;
  }

  @keyframes lt-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .lt-float { animation: lt-float 2s ease-in-out infinite; }

  @keyframes lt-pulse-ring {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(1.15); opacity: 0; }
  }

  .lt-gradient-bar {
    height: 5px;
    background: linear-gradient(90deg, var(--accent), var(--primary), var(--fg));
  }

  .lt-section {
    position: relative;
    padding: 2.5rem 0;
    overflow: hidden;
  }
  @media (min-width: 768px) { .lt-section { padding: 4rem 0; } }

  .lt-section-arrow {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    color: rgba(26,26,46,0.25);
  }

  .lt-card {
    border-radius: 1.5rem;
    background: white;
    box-shadow: 0 10px 40px rgba(26,26,46,0.06);
    transition: all 0.3s ease;
  }
  .lt-card:hover {
    box-shadow: 0 20px 50px rgba(26,26,46,0.12);
    transform: translateY(-4px);
  }

  .lt-btn-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 9999px;
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #fff;
    background: var(--success);
    box-shadow: 0 12px 35px rgba(22,163,74,0.3);
    transition: all 0.2s ease;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  .lt-btn-cta:hover {
    transform: scale(1.04);
    box-shadow: 0 16px 45px rgba(22,163,74,0.4);
  }

  @media (min-width: 768px) {
    .lt-deliv-inner { flex-direction: row !important; align-items: stretch; }
    .lt-deliv-inner.lt-rev { flex-direction: row-reverse !important; }
    .lt-deliv-inner > .lt-deliv-img { width: 28%; flex-shrink: 0; display: flex; }
    .lt-deliv-inner > .lt-deliv-body { flex: 1; }
    .lt-deliv-inner > .lt-deliv-img img { width: 100% !important; height: auto !important; object-fit: contain; display: block; }
  }

  .lt-pricing-total { display: flex; flex-direction: column; gap: 0.25rem; }
  @media (min-width: 768px) { .lt-pricing-total { flex-direction: row; align-items: center; justify-content: space-between; } }

  @media (min-width: 768px) { .lt-social-grid { columns: 4 !important; max-width: 72rem; margin: 2rem auto 0; } }

  .lt-quote {
    border-left: 3px solid var(--primary);
    padding: 1rem 1.25rem;
    background: white;
    border-radius: 0 1rem 1rem 0;
    box-shadow: 0 2px 12px rgba(26,26,46,0.04);
  }
`;

/* ─── App ─── */
export default function App() {
  const CHECKOUT_URL = '#checkout'; /* SUBSTITUIR pelo link do checkout Hotmart */
  const ofertaRef = useRef<HTMLElement>(null);
  const scrollToOferta = () =>
    ofertaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <style>{styles}</style>
      <div className="lt-page min-h-screen overflow-x-hidden">

        {/* ── GRADIENT BAR ── */}
        <div className="lt-gradient-bar" />

        {/* ── LOGO / HEADER ── */}
        <header className="py-3 flex justify-center">
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.02em' }}>
            Thiago Benvenho
          </span>
        </header>

        {/* ════════════════ 1. HERO ════════════════ */}
        <section className="lt-section" style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}>
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(244,162,97,0.35)', top: -150, right: -150 }} />
          <div className="lt-orb" style={{ width: 400, height: 400, background: 'rgba(230,57,70,0.12)', bottom: -100, left: -100 }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '64rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">

              {/* Texto */}
              <div className="flex-1">
                <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
                  Siga este protocolo de 30 dias e seque a barriga treinando em casa — sem abrir mão do fim de semana
                </h1>
                <p style={{ marginTop: '1rem', fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Você não precisa cortar tudo que gosta, nem ir para a academia. Precisa de um método que funcione com a sua vida real — inclusive no churrasco do sábado.
                </p>

                {/* Badges */}
                <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    'Treinos de 20–30 min em casa',
                    'Sem nenhum equipamento',
                    'Resultado visível em 30 dias',
                  ].map((label, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', borderRadius: 9999, background: 'rgba(255,255,255,0.85)', border: '1.5px solid rgba(26,26,46,0.1)', padding: '0.375rem 0.875rem', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--muted)' }}>
                      <Check style={{ height: 13, width: 13, color: 'var(--success)', flexShrink: 0 }} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Scroll button desktop */}
                <button
                  onClick={scrollToOferta}
                  className="mt-8 hidden md:inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg"
                  style={{ background: 'var(--primary)', color: '#fff', boxShadow: '0 8px 25px rgba(230,57,70,0.3)', border: 'none', cursor: 'pointer' }}
                >
                  Quero começar agora
                </button>
              </div>

              {/* Mockup */}
              <div style={{ width: '100%', maxWidth: '26rem', margin: '1.5rem auto 0', flexShrink: 0 }}>
                {/* SUBSTITUIR pela imagem do mockup: /assets/mockup-hero.png */}
                <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1.5rem', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1rem', fontWeight: 600, textAlign: 'center', padding: '2rem' }}>
                  📱 Mockup do Produto<br /><span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.5rem', display: 'block' }}>/assets/mockup-hero.png</span>
                </div>
              </div>
            </div>

            {/* Scroll button mobile */}
            <button
              onClick={scrollToOferta}
              className="mt-6 flex md:hidden w-full items-center justify-center gap-2 py-4 rounded-full font-bold text-lg"
              style={{ background: 'var(--primary)', color: '#fff', boxShadow: '0 8px 25px rgba(230,57,70,0.3)', border: 'none', cursor: 'pointer' }}
            >
              Quero começar agora
            </button>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 2. PROVA SOCIAL ════════════════ */}
        <section className="lt-section">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', maxWidth: '48rem', margin: '0 auto', textWrap: 'balance' } as React.CSSProperties}>
              Mais de <span style={{ color: 'var(--primary)' }}>200 mulheres</span> já{' '}
              aplicaram o Protocolo Espelho 30D com Thiago Benvenho.
            </h2>

            {/* Legendas de depoimentos — substituir pelos prints reais */}
            <div className="lt-social-grid" style={{ marginTop: '2rem', columns: 2, gap: '1rem' }}>
              {[
                { label: 'Juliana, 34 anos', texto: 'Perdeu 4kg e firmou em 30 dias' },
                { label: 'Patrícia, 38 anos', texto: 'Primeira vez que passou um fim de semana sem estragar o resultado' },
                { label: 'Ana, 41 anos', texto: 'Voltou a usar a calça que estava guardada há 2 anos' },
                { label: 'Renata, 33 anos', texto: 'Treinou em casa com bebê no colo e teve resultado' },
                { label: 'Fernanda, 36 anos', texto: '"Finalmente um método que funciona com a minha vida"' },
                { label: 'Carla, 40 anos', texto: 'Perdeu 5cm de cintura no primeiro mês' },
              ].map((d, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden', breakInside: 'avoid', marginBottom: '1rem' }}>
                  {/* SUBSTITUIR por print real: /assets/depo-{i+1}.jpg */}
                  <div style={{ background: 'linear-gradient(135deg, #f5f5f0, #e8e8e0)', padding: '1.5rem', minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontStyle: 'italic' }}>📷 /assets/depo-{i + 1}.jpg</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--fg)' }}>{d.label}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{d.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 3. DOR / PEDRA NO SAPATO ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(230,57,70,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance', textAlign: 'center' } as React.CSSProperties}>
              Se você já se pegou pensando alguma dessas coisas…{' '}
              <span style={{ color: 'var(--primary)' }}>essa página é pra você.</span>
            </h2>

            {/* Vozes da Cabeça */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                '"Fico bem a semana toda e no fim de semana arruíno tudo. Toda segunda começo do zero."',
                '"Trabalho, filho, casa — não sobra tempo pra mim. Quando sobra, estou cansada demais."',
                '"Já tentei tanta dieta que nem me animo mais. Parece que meu corpo não responde."',
                '"Me olho no espelho e não me reconheço. A barriga aparece em tudo, até nas fotos."',
                '"Sei que preciso mudar, mas toda vez que começo, um aniversário ou churrasco me derruba."',
              ].map((voz, i) => (
                <div key={i} className="lt-quote">
                  <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--fg)', lineHeight: 1.6 }}>{voz}</p>
                </div>
              ))}
            </div>

            {/* Diagnóstico */}
            <div style={{ marginTop: '2rem', borderRadius: '1.25rem', background: 'white', padding: '1.75rem', boxShadow: '0 8px 30px rgba(26,26,46,0.05)' }}>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>
                Não é falta de força de vontade. O problema é que a maioria dos programas de treino e dieta foi criado para pessoas <strong style={{ color: 'var(--fg)' }}>sem vida social e sem agenda cheia</strong>. Eles ignoram que você tem um churrasco no sábado, que precisa de resultado rápido para se motivar a continuar, e que 1 hora de treino às 6h da manhã simplesmente não existe na sua rotina.
              </p>
            </div>

            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1rem', color: 'var(--muted)', fontStyle: 'italic' }}>
              Se você se identificou com pelo menos uma dessas frases, continue lendo. Isso foi feito para você.
            </p>
          </div>
        </section>

        {/* ════════════════ 4. PONTE (DOR → SOLUÇÃO) ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(244,162,97,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '40rem', margin: '0 auto', padding: '0 1.25rem' }}>

            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(26,26,46,0.15))' }} />
              <p style={{ flexShrink: 0, fontSize: '1.125rem', fontWeight: 700, color: 'var(--fg)', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
                A boa notícia é que…
              </p>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(26,26,46,0.15))' }} />
            </div>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              O problema não é você. É o método. A solução não é cortar tudo, nem treinar 2 horas por dia, nem abandonar a vida social. A mudança acontece quando você combina <strong style={{ color: 'var(--fg)' }}>três coisas ao mesmo tempo</strong>:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Um treino progressivo, feito em casa, que seu corpo não consegue ignorar',
                'Uma estratégia específica para o fim de semana que não te isola da vida real',
                'Hábitos simples de ancoragem que mantêm o metabolismo ativo mesmo quando você "escorregou"',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', borderRadius: '0.875rem', background: 'white', padding: '0.875rem 1.25rem', boxShadow: '0 2px 12px rgba(26,26,46,0.05)' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>✨</span>
                  <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', borderRadius: '1.25rem', background: 'linear-gradient(135deg, #fff8f5, #fff5f0)', padding: '1.75rem', boxShadow: '0 8px 30px rgba(230,57,70,0.08)', border: '1.5px solid rgba(230,57,70,0.12)' }}>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--fg)', margin: 0 }}>
                É isso que o <strong style={{ color: 'var(--primary)' }}>Protocolo Espelho 30D</strong> faz. É direto, funciona com a sua agenda, e os resultados aparecem no espelho — não só na balança.
              </p>
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 5. MÉTODO / 4 PASSOS ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 400, height: 400, background: 'rgba(244,162,97,0.3)', top: -80, left: -80 }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', maxWidth: '48rem', margin: '0 auto', textWrap: 'balance' } as React.CSSProperties}>
              Como o Protocolo Espelho 30D funciona
            </h2>

            <div style={{ marginTop: '3.5rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {[
                {
                  num: '01',
                  title: 'Acesse hoje mesmo',
                  desc: 'Após a compra, você tem acesso imediato à plataforma de treinos e a todos os materiais. Funciona direto no navegador — celular, tablet ou computador. Sem espera.',
                },
                {
                  num: '02',
                  title: 'Abra o treino do dia e siga o passo a passo',
                  desc: 'São 7 treinos diferentes — um para cada dia da semana. Cada exercício tem vídeo demonstrativo mostrando como fazer. Sem equipamento, em qualquer lugar.',
                },
                {
                  num: '03',
                  title: 'Aplique o guia no fim de semana',
                  desc: 'Antes do churrasco, do aniversário ou da pizza, você abre o guia e aplica a estratégia. Simples, rápido, funciona.',
                },
                {
                  num: '04',
                  title: 'Se olhe no espelho na segunda-feira',
                  desc: 'Em 30 dias, o espelho vai falar por si mesmo. Barriga mais firme, medidas menores, roupas fechando de novo.',
                },
              ].map(step => (
                <div key={step.num} className="lt-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '1.75rem 1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9999, background: 'var(--primary)', padding: '0.375rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: 'white', alignSelf: 'flex-start' }}>
                      {step.num}
                    </span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--fg)' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 6. ENTREGÁVEIS + BÔNUS ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(230,57,70,0.06)', bottom: -128, right: -128 }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', maxWidth: '48rem', margin: '0 auto', textWrap: 'balance' } as React.CSSProperties}>
              Tudo o que você leva no Protocolo Espelho 30D
            </h2>

            {/* Entregáveis principais */}
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  title: 'Plataforma de Treinos 30D',
                  desc: 'Acesso à plataforma com planejamento completo de treinos para todos os dias — 7 treinos diferentes, um para cada dia da semana. De 20 a 30 minutos por dia. Cada exercício com vídeo demonstrativo de como realizar. Sem equipamento, em qualquer lugar.',
                  tipo: 'plataforma',
                  img: '/assets/entregavel-1.png',
                },
                {
                  title: 'Guia do Fim de Semana Sem Culpa',
                  desc: 'O material que resolve o maior sabotador da mulher brasileira. Estratégias práticas e prontas para aplicar em churrasco, pizza, aniversário, barzinho — sem destruir o resultado da semana.',
                  tipo: 'pdf',
                  img: '/assets/entregavel-2.png',
                },
                {
                  title: '10 Hábitos Que Aceleram Seus Resultados em 7 Dias',
                  desc: 'Hábitos simples e científicos que aceleram o metabolismo e a queima de gordura — você pode começar hoje e já sentir diferença na primeira semana.',
                  tipo: 'pdf',
                  img: '/assets/entregavel-3.png',
                },
              ].map((item, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden' }}>
                  <div className={`lt-deliv-inner${i % 2 === 1 ? ' lt-rev' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="lt-deliv-img" style={{ overflow: 'hidden', background: '#f0f0eb', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* SUBSTITUIR pela imagem: {item.img} */}
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', padding: '1rem', textAlign: 'center' }}>📷 {item.img}</span>
                    </div>
                    <div className="lt-deliv-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {item.tipo === 'plataforma' ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999, background: 'rgba(26,26,46,0.05)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                            <Monitor style={{ height: 14, width: 14 }} /> Plataforma Online
                          </span>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999, background: 'rgba(26,26,46,0.05)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
                            <FileText style={{ height: 14, width: 14 }} /> PDF Digital
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)' }}>{item.title}</h3>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner bônus */}
            <div style={{ background: 'var(--fg)', marginTop: '2rem', borderRadius: '1rem', padding: '1.75rem 1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--primary), var(--fg))' }} />
              <span style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                Ainda não acabou! Você também vai receber:
              </span>
            </div>

            {/* Bônus */}
            <div style={{ marginTop: '2rem' }}>
              <div className="lt-card" style={{ overflow: 'hidden' }}>
                <div className="lt-deliv-inner lt-rev" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="lt-deliv-img" style={{ overflow: 'hidden', background: '#f0f0eb', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* SUBSTITUIR pela imagem: /assets/bonus-1.png */}
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', padding: '1rem', textAlign: 'center' }}>📷 /assets/bonus-1.png</span>
                  </div>
                  <div className="lt-deliv-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999, background: 'rgba(244,162,97,0.15)', padding: '0.25rem 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start' }}>
                      🎁 BÔNUS
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)' }}>Planejamento Alimentar para Definição</h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>Cardápio base com sugestões de refeições práticas para a mulher que quer resultado sem dieta radical e sem passar fome.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ 7. PARA QUEM É ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
              O Protocolo Espelho 30D é pra você se…
            </h2>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Você treina ou tenta treinar durante a semana, mas o fim de semana bota tudo a perder',
                'Você quer um treino em casa, de 20 a 30 minutos, sem precisar de equipamento',
                'Você está com a barriga inchada e quer firmar o corpo de forma progressiva',
                'Você quer parar de começar do zero toda segunda-feira',
                'Você quer curtir o fim de semana sem culpa E ainda assim ter resultado',
                'Você quer um método progressivo, não treino aleatório jogado na internet',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '1rem', background: 'white', padding: '1rem 1.5rem', textAlign: 'left', boxShadow: '0 4px 20px rgba(26,26,46,0.04)' }}>
                  <div style={{ display: 'flex', height: 32, width: 32, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(230,57,70,0.1)' }}>
                    <Check style={{ height: 16, width: 16, color: 'var(--primary)' }} />
                  </div>
                  <span style={{ fontSize: '1rem', color: 'var(--fg)' }}>{item}</span>
                </div>
              ))}

              {/* Para quem NÃO é */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', borderRadius: '1rem', background: 'rgba(230,57,70,0.04)', padding: '1rem 1.5rem', textAlign: 'left', border: '1px solid rgba(230,57,70,0.12)', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', height: 32, width: 32, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(230,57,70,0.1)' }}>
                  <X style={{ height: 16, width: 16, color: 'var(--primary)' }} />
                </div>
                <span style={{ fontSize: '1rem', color: 'var(--muted)' }}>
                  <strong style={{ color: 'var(--primary)' }}>Isso NÃO é pra você</strong> se você quer emagrecer 15kg sem mudar absolutamente nada — aqui você vai precisar agir, mas com inteligência e sem sofrimento.
                </span>
              </div>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '1.125rem', color: 'var(--muted)' }}>
              Se você se identificou com pelo menos 2 dessas situações,{' '}
              <strong style={{ color: 'var(--primary)', fontWeight: 700 }}>Protocolo Espelho 30D</strong>{' '}
              é exatamente o que você precisa.
            </p>
          </div>
        </section>

        {/* ════════════════ 8. ANCORAGEM DE PREÇO ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance', marginBottom: '2rem' } as React.CSSProperties}>
              Quanto valeria cada parte desse protocolo?
            </h2>

            <div style={{ borderRadius: '1.5rem', background: 'white', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', overflow: 'hidden' }}>
              {[
                { nome: '1 mês de academia (sem personal)', valor: 'R$ 80–120' },
                { nome: '1 sessão com personal trainer presencial', valor: 'R$ 80–150' },
                { nome: 'Consultoria nutricional online', valor: 'R$ 150–300' },
                { nome: 'Programa completo de transformação corporal', valor: 'R$ 297–997' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(26,26,46,0.05)' }}>
                  <span style={{ fontSize: '1rem', color: 'var(--fg)' }}>{item.nome}</span>
                  <span style={{ flexShrink: 0, fontSize: '0.875rem', fontWeight: 600, color: 'var(--muted)', marginLeft: '1rem' }}>{item.valor}</span>
                </div>
              ))}
              <div style={{ background: 'rgba(26,26,46,0.02)', padding: '1rem 1.5rem' }}>
                <div className="lt-pricing-total">
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>Total somado:</span>
                  <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#dc2626', whiteSpace: 'nowrap' }}>R$ 607–1.567</span>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1.0625rem', color: 'var(--fg)', lineHeight: 1.7 }}>
              Você leva <strong>TUDO</strong> do Protocolo Espelho 30D — 4 entregáveis completos — por menos do que uma única sessão de personal trainer.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            9. OFERTA + CTA  ←  ÚNICO BLOCO COM BOTÃO DE COMPRA
            ═══════════════════════════════════════════════ */}
        <section id="oferta" ref={ofertaRef} className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(244,162,97,0.2)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance' } as React.CSSProperties}>
              Protocolo Espelho 30D — Acesso Imediato
            </h2>

            {/* Line items com valores riscados */}
            <div style={{ marginTop: '2.5rem', borderRadius: '1.5rem', background: 'white', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { nome: 'Plataforma de Treinos 30D', valor: 'R$ 97,00' },
                  { nome: 'Guia do Fim de Semana Sem Culpa', valor: 'R$ 67,00' },
                  { nome: '10 Hábitos Que Aceleram em 7 Dias', valor: 'R$ 47,00' },
                  { nome: 'BÔNUS: Planejamento Alimentar para Definição', valor: 'R$ 86,00' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(26,26,46,0.05)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--fg)' }}>
                      <Check style={{ height: 16, width: 16, flexShrink: 0, color: 'var(--primary)' }} />
                      {item.nome}
                    </span>
                    <span style={{ flexShrink: 0, fontSize: '0.875rem', color: '#dc2626', textDecoration: 'line-through' }}>
                      {item.valor}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(26,26,46,0.05)', background: 'rgba(26,26,46,0.02)', padding: '1rem 1.5rem' }}>
                <div className="lt-pricing-total">
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>Tudo isso deveria custar:</span>
                  <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>R$ 297,00</span>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '2rem', marginBottom: '2.5rem', textAlign: 'center', fontSize: '1.125rem', color: 'var(--fg)' }}>
              Mas hoje você pode ter acesso ao{' '}
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Protocolo Espelho 30D</span>{' '}
              junto com todos os bônus por apenas:
            </p>

            {/* ← BOTÃO DE COMPRA */}
            <CTABlock checkoutUrl={CHECKOUT_URL} />
          </div>
        </section>

        {/* ════════════════ 10. CARTA ABERTA / DOIS CAMINHOS ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(230,57,70,0.06)', top: 0, right: 0 }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
              Você chegou até aqui.{' '}
              <span style={{ color: 'var(--primary)' }}>Agora é com você.</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              Só existem dois caminhos daqui pra frente.
            </p>

            <div style={{ marginTop: '2rem', display: 'inline-block', borderRadius: '1.5rem', background: 'white', padding: '1.75rem 2rem', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', textAlign: 'left', maxWidth: '32rem', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem 1.25rem', borderRadius: '1rem', background: 'rgba(230,57,70,0.03)', border: '1px solid rgba(230,57,70,0.1)' }}>
                  <X style={{ height: 20, width: 20, flexShrink: 0, marginTop: 2, color: 'var(--primary)' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.375rem' }}>Opção 1</p>
                    <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.6 }}>Fechar essa página, voltar para a rotina, e na próxima segunda começar de novo depois do fim de semana ter arruinado tudo.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem 1.25rem', borderRadius: '1rem', background: 'rgba(22,163,74,0.04)', border: '1px solid rgba(22,163,74,0.15)' }}>
                  <Check style={{ height: 20, width: 20, flexShrink: 0, marginTop: 2, color: '#16a34a' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#16a34a', marginBottom: '0.375rem' }}>Opção 2</p>
                    <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.6 }}>Por R$ 67, ter um protocolo testado, prático, feito para a vida real — e na próxima segunda acordar diferente, com o espelho te mostrando uma versão que você já não via há algum tempo.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: 1, width: 96, margin: '2rem auto', background: 'linear-gradient(to right, transparent, rgba(26,26,46,0.15), transparent)' }} />

            <p style={{ fontSize: '1.125rem', color: 'var(--fg)', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              Eu sei que você já tentou antes. Eu sei que é difícil acreditar. Por isso tem a garantia de 7 dias — sem nenhum risco para você. Mas eu preciso que você tome uma decisão hoje. Não amanhã. <strong>Hoje.</strong>
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--fg)' }}>— Thiago Benvenho</p>
          </div>
        </section>

        {/* ════════════════ 11. AUTORIDADE ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            {/* SUBSTITUIR pela foto real: /assets/thiago.jpg */}
            <div style={{ height: 280, width: 280, flexShrink: 0, overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 40px rgba(26,26,46,0.08)', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: '0.875rem', textAlign: 'center', padding: '1rem' }}>📷 /assets/thiago.jpg</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--fg)' }}>
                Quem é <span style={{ color: 'var(--primary)' }}>Thiago Benvenho</span>?
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Thiago Benvenho é personal trainer especializado em transformação corporal para mulheres com vida corrida. Com anos de experiência acompanhando clientes que não têm tempo para academia e que sempre "começavam na segunda", ele desenvolveu o método Espelho.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Um protocolo que respeita a realidade da mulher brasileira e gera resultado visível em 30 dias.{' '}
                <strong style={{ color: 'var(--fg)' }}>Instagram: @thiagobenvenho</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            12. RECAP / SEGUNDA CHANCE DE COMPRA
            ═══════════════════════════════════════════════ */}
        <section id="oferta-2" className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(244,162,97,0.2)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>

            {/* Recap bullets */}
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance', marginBottom: '1.5rem' } as React.CSSProperties}>
              Recapitulando o que você leva hoje:
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', maxWidth: '40rem', margin: '0 auto 2rem' }}>
              {[
                'Plataforma de Treinos 30D (7 treinos diários com vídeos, sem equipamento)',
                'Guia do Fim de Semana Sem Culpa (churrasco, aniversário, pizza — com estratégia)',
                '10 Hábitos Que Aceleram em 7 Dias',
                'BÔNUS: Planejamento Alimentar para Definição',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(26,26,46,0.04)' }}>
                  <Check style={{ height: 18, width: 18, flexShrink: 0, color: 'var(--success)', marginTop: 2 }} />
                  <span style={{ fontSize: '1rem', color: 'var(--fg)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* ← BOTÃO DE COMPRA (segunda chance) */}
            <CTABlock checkoutUrl={CHECKOUT_URL} />
          </div>
        </section>

        {/* ════════════════ 13. FAQ ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center' }}>
              Ficou alguma dúvida?
            </h2>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <FAQItem
                q="Como recebo o material após a compra?"
                a="Imediatamente! Assim que o pagamento é confirmado, você recebe no e-mail cadastrado o link de acesso à área de membros na Hotmart. Em menos de 2 minutos você já está com tudo nas mãos."
              />
              <FAQItem
                q="Funciona no celular?"
                a="Sim. A plataforma de treinos e todos os materiais funcionam em qualquer dispositivo — celular, tablet ou computador. Basta abrir o navegador e acessar."
              />
              <FAQItem
                q="Preciso de algum equipamento para os treinos?"
                a="Não. A Plataforma de Treinos 30D usa apenas o peso do seu próprio corpo. Você precisa de um cantinho qualquer — sala, quarto, varanda, hotel, onde estiver. Isso é tudo."
              />
              <FAQItem
                q="Funciona para quem está começando do zero?"
                a="Sim. Os treinos foram desenhados para qualquer nível. Cada exercício tem vídeo demonstrativo e você respeita o seu próprio ritmo."
              />
              <FAQItem
                q="Qual a forma de pagamento?"
                a="Cartão de crédito (1 a 3x sem juros), cartão de débito, Pix ou boleto bancário. Tudo pela plataforma Hotmart, segura e criptografada."
              />
              <FAQItem
                q="Em quanto tempo eu recebo o acesso?"
                a="O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link em menos de 2 minutos."
              />
              <FAQItem
                q="E se eu não gostar?"
                a="Você tem 7 dias de garantia total e incondicional. Se por qualquer motivo o Protocolo não for pra você, basta enviar um e-mail e devolvemos 100% do valor. Sem burocracia, sem perguntas."
              />
              <FAQItem
                q="Quanto tempo leva para ver resultado?"
                a="A maioria das mulheres relata sentir diferença na barriga ainda na primeira semana. Resultados visíveis no espelho aparecem entre 10 e 21 dias, dependendo da consistência."
              />
            </div>
          </div>
        </section>

        {/* ════════════════ 14. RODAPÉ LEGAL ════════════════ */}
        <div className="lt-gradient-bar" />
        <footer style={{ background: 'var(--fg)', padding: '3rem 0', color: 'var(--bg)' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '0 1.25rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>Protocolo Espelho 30D</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              Thiago Benvenho — Personal Trainer | Florianópolis, SC
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', opacity: 0.6 }}>
              <a href="mailto:contato@thiagobenvenho.com.br" style={{ color: 'inherit', textDecoration: 'none' }}>contato@thiagobenvenho.com.br</a>
              <span>·</span>
              <span>WhatsApp: (48) 9 8441-0109</span>
              <span>·</span>
              <a href="/politica" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</a>
              <span>·</span>
              <a href="/termos" style={{ color: 'inherit', textDecoration: 'none' }}>Termos de Uso</a>
            </div>
            <p style={{ maxWidth: '40rem', fontSize: '0.75rem', lineHeight: 1.7, opacity: 0.4 }}>
              Este produto não substitui acompanhamento médico ou nutricional individualizado. Os resultados podem variar de pessoa para pessoa. Antes de iniciar qualquer programa de exercícios, consulte um profissional de saúde.
            </p>
            <p style={{ fontSize: '0.75rem', opacity: 0.3 }}>
              Este site não é afiliado nem endossado pelo Facebook, Instagram ou Meta Platforms Inc. FACEBOOK é uma marca registrada de META PLATFORMS, INC.
            </p>
            <p style={{ fontSize: '0.75rem', opacity: 0.3 }}>
              © {new Date().getFullYear()} Protocolo Espelho 30D. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}

/* ─── CTABlock — APENAS nos blocos 9 e 12 ─── */
function CTABlock({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <div style={{ borderRadius: '1.5rem', background: 'white', padding: '2rem', textAlign: 'center', boxShadow: '0 10px 50px rgba(26,26,46,0.08)', border: '2px solid rgba(22,163,74,0.2)' }}>
      {/* Mockup produto */}
      <div style={{ maxWidth: '24rem', margin: '0 auto 2rem' }}>
        {/* SUBSTITUIR pela imagem: /assets/mockup-produto.png */}
        <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(26,26,46,0.08)', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: '0.875rem', textAlign: 'center', padding: '1rem' }}>📷 /assets/mockup-produto.png</span>
        </div>
      </div>

      {/* Preço */}
      <p style={{ fontSize: '1.125rem', color: 'var(--muted)', textDecoration: 'line-through' }}>
        De R$ 297,00
      </p>
      <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Por apenas
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--primary)', whiteSpace: 'nowrap' }}>
        R$ 67
      </p>
      <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'var(--fg)' }}>
        Ou <strong>3x de R$ 24,53 sem juros</strong>
      </p>
      <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--muted)' }}>Acesso vitalício · Plataforma Hotmart</p>

      {/* Botão com pulse ring */}
      <div style={{ position: 'relative', marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, maxWidth: '20rem', margin: '0 auto', borderRadius: 9999, background: 'rgba(22,163,74,0.2)', animation: 'lt-pulse-ring 2s ease-in-out infinite' }} />
        <a
          href={checkoutUrl}
          className="lt-btn-cta"
          style={{ position: 'relative', maxWidth: '20rem' }}
        >
          SIM, QUERO FIRMAR MEU CORPO AGORA — R$ 67
        </a>
      </div>

      {/* Trust signals */}
      <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap style={{ height: 16, width: 16, color: '#16a34a' }} /> Acesso imediato
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck style={{ height: 16, width: 16, color: '#16a34a' }} /> Garantia de 7 dias
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Download style={{ height: 16, width: 16, color: '#16a34a' }} /> Plataforma Hotmart · SSL
        </span>
      </div>
    </div>
  );
}

/* ─── FAQItem accordion ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderRadius: '1rem', background: 'white', boxShadow: '0 2px 12px rgba(26,26,46,0.04)', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)', lineHeight: 1.5 }}>{q}</span>
        <ChevronDown style={{ height: 18, width: 18, flexShrink: 0, color: 'var(--muted)', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {open && (
        <div style={{ padding: '0 1.5rem 1.25rem' }}>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  );
}
