import React from 'react';
import {
  Check,
  X,
  ShieldCheck,
  Zap,
  ChevronDown,
  FileText,
  Monitor,
  Mail,
  PlayCircle,
  CheckCircle2,
  Smartphone,
  Sparkles,
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

  .lt-hero-headline { text-align: center; }
  @media (min-width: 768px) {
    .lt-hero-headline { text-align: left; }
  }

  /* Imagem ruminações: full-bleed no mobile */
  .lt-rumin-wrap { margin: 1.5rem -1.25rem 0; display: flex; justify-content: center; }
  .lt-rumin-img { width: 100%; height: auto; display: block; border-radius: 0; }
  @media (min-width: 768px) {
    .lt-rumin-wrap { margin: 1.5rem 0 0; }
    .lt-rumin-img { max-width: 640px; border-radius: 1rem; }
  }

  /* CTABlock desktop layout */
  .lt-cta-inner { display: flex; flex-direction: column; gap: 1.5rem; }
  @media (min-width: 768px) {
    .lt-cta-inner { flex-direction: row; align-items: center; gap: 3rem; }
    .lt-cta-mockup { width: 45%; flex-shrink: 0; }
    .lt-cta-info { flex: 1; }
  }

  /* Testimonials: side-by-side on desktop, stack on mobile */
  .responsive-grid { grid-template-columns: 1fr !important; }
  @media (min-width: 768px) { .responsive-grid { grid-template-columns: repeat(3, 1fr) !important; } }

  /* Next steps: stacked on mobile, side-by-side on desktop */
  .steps-grid { grid-template-columns: 1fr; }
  @media (min-width: 768px) { .steps-grid { grid-template-columns: repeat(3, 1fr); } }
`;

/* ─── App ─── */
export default function App() {
  const CHECKOUT_URL = '#checkout'; /* SUBSTITUIR pelo link do checkout Hotmart */

  return (
    <>
      <style>{styles}</style>
      <div className="lt-page min-h-screen overflow-x-hidden">

        {/* ── GRADIENT BAR ── */}
        <div className="lt-gradient-bar" />

        {/* ── LOGO / HEADER ── */}
        <header className="py-3 flex justify-center">
          <img
            src="/assets/logo.webp"
            alt="Protocolo Espelho 30D"
            style={{ height: '5rem', width: 'auto', display: 'block' }}
          />
        </header>

        {/* ════════════════ 1. HERO ════════════════ */}
        {/* ⚠️ Sem botão de compra neste bloco */}
        <section className="lt-section" style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}>
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(244,162,97,0.35)', top: -150, right: -150 }} />
          <div className="lt-orb" style={{ width: 400, height: 400, background: 'rgba(230,57,70,0.12)', bottom: -100, left: -100 }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '64rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">

              {/* Texto */}
              <div className="flex-1">
                <h1 className="lt-hero-headline" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
                  Recupere sua autoestima e a vontade de se olhar no espelho em 30 dias,{' '}
                  <span style={{ color: 'var(--primary)' }}>treinando apenas 30 minutos em casa.</span>
                </h1>
                <p style={{ marginTop: '1rem', fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Com o Protocolo Espelho 30D você vai treinar em casa sem equipamento, ver resultado no espelho em 30 dias e desta vez chegar até o fim, mesmo com filhos, trabalho e vida social no meio.
                </p>

                {/* Bullets */}
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Treinos de 30 min em casa, sem equipamento',
                    'Resultado visível no espelho em 30 dias',
                    'Funciona com filhos, trabalho e vida social',
                  ].map((label, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--fg)', lineHeight: 1.5 }}>
                      <Check style={{ height: 18, width: 18, color: 'var(--success)', flexShrink: 0, marginTop: 1 }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mockup */}
              <div style={{ width: '100%', maxWidth: '26rem', margin: '1.5rem auto 0', flexShrink: 0 }}>
                <div style={{ width: '100%', borderRadius: '1.5rem', overflow: 'hidden' }}>
                  <img
                    src="/assets/mockup-hero.png"
                    alt="Mockup do Protocolo Espelho 30D em celular, tablet e PDF"
                    style={{ width: '100%', aspectRatio: '4/3', borderRadius: '1.5rem', display: 'block', objectFit: 'cover', boxShadow: '0 18px 45px rgba(26,26,46,0.16)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 2. PROVA SOCIAL ════════════════ */}
        <section className="lt-section">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', maxWidth: '48rem', margin: '0 auto', textWrap: 'balance' } as React.CSSProperties}>
              Veja abaixo os resultados que mulheres reais estão tendo com o{' '}
              <span style={{ color: 'var(--primary)' }}>Protocolo Espelho 30D:</span>
            </h2>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }} className="responsive-grid">
              {/*
                depoimento_real1.webp — Bárbara Natali
                Print de conversa no WhatsApp. Mensagem: "Oi Thiago, tudo bem? Olha a diferença do meu corpo depois de começar uma jornada com você! Resultado inacreditável 😊 Obrigado." (14:11)
                Foto antes/depois: antes de blusa branca de renda e calça jeans; depois de top verde e shorts preto, corpo visivelmente mais definido.

                depoimento_real2.webp — Vanessa
                Print de conversa no WhatsApp. Mensagem: "Eu só tenho a agradecer ao Thiago pelo método incrível! Em apenas 60 dias consegui emagrecer 15 kg, algo que eu nunca imaginei ser possível em tão pouco tempo. Além da perda de peso, me sinto muito mais disposta, confiante e com a autoestima lá em cima. O método realmente funciona — só gratidão por essa transformação!" (14:16)
                Foto antes/depois (Fevereiro/2026): antes de vestido vermelho; depois participando de corrida de rua (Femme Run) com número 692, corpo notavelmente mais magro.

                depoimento_real3.webp — Adriana
                Print de conversa no WhatsApp. Mensagem: "Estou muito feliz com os resultados que venho tendo — minha saúde e qualidade de vida melhoraram muito. E essa mudança só foi possível pela competência, dedicação e atenção do Prof Thiago, que me ajudou nesse processo de evolução. Seguimos juntos por mais um mês de parceria, evoluindo cada vez mais!" (19:49)
                Foto antes/depois com legenda "ANTES / DEPOIS": antes de jaqueta preta em jardim; depois de blusa branca e saia estampada, sorrindo e com corpo transformado.
              */}
              {[
                { src: '/assets/depoimento_real1.webp', label: 'Bárbara Natali' },
                { src: '/assets/depoimento_real2.webp', label: 'Vanessa' },
                { src: '/assets/depoimento_real3.webp', label: 'Adriana' },
              ].map((d, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden' }}>
                  <img
                    src={d.src}
                    alt={`Depoimento: ${d.label}`}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 3. APERTAR NA PEDRA ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(230,57,70,0.08)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>

            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, lineHeight: 1.25, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance' } as React.CSSProperties}>
              Eu sei... você{' '}
              <span style={{ color: 'var(--primary)' }}>não gosta do que vê quando olha no espelho.</span>
            </p>

            <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--fg)', textAlign: 'center' }}>
              E toda vez que você se olha, vem isso na sua cabeça:
            </p>

            {/* Vozes da Cabeça */}
            <div className="lt-rumin-wrap">
              <img
                src="/assets/ruminações.webp"
                alt="Vozes na cabeça — ruminações da Camila"
                className="lt-rumin-img"
              />
            </div>
          </div>
        </section>

        {/* ════════════════ 4. PONTE (DOR → SOLUÇÃO) ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(244,162,97,0.15)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '44rem', margin: '0 auto', padding: '0 1.25rem' }}>

            {/* DIAGNÓSTICO */}
            <div style={{ position: 'relative', borderRadius: '1.25rem', background: 'white', padding: '1.75rem 1.75rem 1.75rem 2rem', boxShadow: '0 8px 30px rgba(26,26,46,0.06)', border: '1px solid var(--border)', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(230,57,70,0.08)', color: 'var(--primary)', padding: '0.375rem 0.875rem', borderRadius: 9999, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                <X size={14} strokeWidth={3} /> O diagnóstico
              </div>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>
                Isso não é fraqueza. E não é falta de disciplina. Os programas de emagrecimento foram feitos para condições ideais: sem filhos, sem trabalho, sem vida social. Quando a vida real aparece, o método não acompanha. Você falha, sente culpa e volta à estaca zero.{' '}
                <strong style={{ color: 'var(--fg)' }}>Não porque você é fraca. Porque o método errado não aguenta a sua vida.</strong>
              </p>
            </div>

            {/* CONECTOR VISUAL: linha em gradiente do vermelho ao verde + ícone */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0.5rem 0' }}>
              <div style={{ width: 2, height: 56, background: 'linear-gradient(to bottom, var(--primary), var(--accent), var(--success))' }} />
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: 'white', border: '2px solid var(--success)', boxShadow: '0 6px 20px rgba(22,163,74,0.25)' }}>
                <Zap size={22} strokeWidth={2.5} style={{ color: 'var(--success)' }} fill="currentColor" />
              </div>
              <div style={{ width: 2, height: 56, background: 'linear-gradient(to bottom, var(--success), rgba(22,163,74,0.2))' }} />
            </div>

            {/* PROMESSA */}
            <div style={{ position: 'relative', borderRadius: '1.25rem', background: 'linear-gradient(135deg, #fff8f5 0%, #fff5f0 50%, #f0fdf4 100%)', padding: '2rem 1.75rem', boxShadow: '0 12px 40px rgba(230,57,70,0.1)', border: '1.5px solid rgba(230,57,70,0.15)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,162,97,0.25), transparent 70%)' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(22,163,74,0.1)', color: 'var(--success)', padding: '0.375rem 0.875rem', borderRadius: 9999, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  <CheckCircle2 size={14} strokeWidth={3} /> E se desta vez fosse diferente?
                </div>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--fg)', margin: 0, fontWeight: 500 }}>
                  Se você pudesse seguir um protocolo de 30 dias, feito para a sua vida real, e desta vez{' '}
                  <span style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(244,162,97,0.45) 60%)', fontWeight: 700 }}>ver resultado no espelho</span>, isso resolveria o seu problema?
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '1rem 1.25rem', background: 'white', borderRadius: '0.875rem', border: '1px solid rgba(230,57,70,0.15)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: '50%', background: 'var(--primary)', color: 'white', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.05em', flexShrink: 0 }}>
                    SIM
                  </span>
                  <p style={{ fontSize: '1rem', lineHeight: 1.55, color: 'var(--fg)', margin: 0 }}>
                    Se a resposta for sim, o <strong>Protocolo Espelho 30D</strong> é pra você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="lt-section-arrow"><ChevronDown size={28} className="lt-float" /></div>

        {/* ════════════════ 5. MÉTODO / MODO DE PREPARO ════════════════ */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 400, height: 400, background: 'rgba(244,162,97,0.3)', top: -80, left: -80 }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', maxWidth: '48rem', margin: '0 auto', textWrap: 'balance' } as React.CSSProperties}>
              Esses são os 4 passos para você transformar o que vê no espelho em 30 dias:
            </h2>

            <div style={{ marginTop: '3.5rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {[
                {
                  num: '01',
                  title: 'Acesse os treinos em vídeo pelo celular',
                  desc: 'Abra pelo celular, tablet ou computador. Os treinos em vídeo ficam disponíveis para você assistir quando e onde quiser.',
                  bg: 'linear-gradient(135deg, #fef3ec 0%, #fde6d3 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 96, height: 96 }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Smartphone size={72} strokeWidth={1.5} style={{ color: 'var(--fg)' }} />
                      </div>
                      <div style={{ position: 'absolute', top: -6, right: -6, width: 32, height: 32, borderRadius: '50%', background: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(22,163,74,0.4)' }}>
                        <Check size={18} strokeWidth={3} style={{ color: 'white' }} />
                      </div>
                    </div>
                  ),
                },
                {
                  num: '02',
                  title: 'Siga os vídeos no seu ritmo, pelo celular',
                  desc: 'São 30 minutos por dia, com o professor te guiando em vídeo em cada movimento. É só dar play no celular, colocar no chão da sala e treinar. Sem equipamento, sem academia.',
                  bg: 'linear-gradient(135deg, #fef0ee 0%, #fcdcd8 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 120, height: 80, borderRadius: '0.625rem', background: 'var(--fg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(26,26,46,0.2)' }}>
                      <PlayCircle size={44} strokeWidth={1.75} style={{ color: 'white' }} fill="rgba(230,57,70,0.9)" />
                      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', overflow: 'hidden' }}>
                        <div style={{ width: '35%', height: '100%', background: 'var(--primary)' }} />
                      </div>
                      <div style={{ position: 'absolute', top: -10, right: -10, padding: '0.25rem 0.5rem', borderRadius: 6, background: 'white', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--fg)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>30 min</div>
                    </div>
                  ),
                },
                {
                  num: '03',
                  title: 'Reprograme sua mente',
                  desc: 'Siga o método para reprogramar sua autoimagem e criar hábitos que vão acelerar seus resultados para manter o que você conquistou.',
                  bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 96, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #1a1a2e 0%, #e63946 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(26,26,46,0.2)' }}>
                        <Sparkles size={36} strokeWidth={1.75} style={{ color: 'white' }} />
                      </div>
                    </div>
                  ),
                },
                {
                  num: '04',
                  title: 'Em 30 dias, olhe no espelho',
                  desc: 'Barriga mais firme, roupas fechando de novo, postura diferente. O resultado que você queria há tempos finalmente aparece.',
                  bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 72, height: 100 }}>
                      <div style={{ position: 'absolute', inset: 0, borderRadius: '36px 36px 32px 32px', background: 'linear-gradient(160deg, #cfeef0 0%, #e8f7f2 60%, #ffffff 100%)', border: '4px solid var(--fg)', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.6), 0 8px 24px rgba(26,26,46,0.15)' }} />
                      <div style={{ position: 'absolute', top: 14, left: 14, width: 18, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.6)', filter: 'blur(2px)' }} />
                      <Sparkles size={20} strokeWidth={2} style={{ position: 'absolute', top: -6, right: -10, color: 'var(--accent)' }} fill="var(--accent)" />
                      <Sparkles size={14} strokeWidth={2} style={{ position: 'absolute', bottom: 4, left: -10, color: 'var(--success)' }} fill="var(--success)" />
                    </div>
                  ),
                },
              ].map(step => (
                <div key={step.num} className="lt-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ height: 160, background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '1px solid var(--border)' }}>
                    {step.visual}
                  </div>
                  <div style={{ padding: '1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
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
              Veja o que você vai receber no Protocolo Espelho 30D:
            </h2>

            {/* Entregáveis principais */}
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  title: 'Plataforma de Treinos 30D',
                  desc: 'Acesso completo à plataforma com planejamento de treinos para todos os dias: 7 treinos diferentes, um para cada dia da semana, de 20 a 30 minutos. Cada exercício tem vídeo demonstrativo de como realizar. Sem equipamento, funciona em qualquer canto da casa.',
                  tipo: 'plataforma',
                  img: '/assets/entregavel-1.png',
                },
                {
                  title: 'Espelho Mental — Reprogramando Sua Autoimagem',
                  desc: 'Trabalhe a sua relação com o próprio corpo e com o espelho, e controle a voz que aparece toda vez que você se olha. Sem reprogramar essa imagem, a mudança física não sustenta. Aqui você quebra o ciclo de auto-sabotagem na raiz.',
                  tipo: 'pdf',
                  img: '/assets/espelho-mental.png',
                },
                {
                  title: '10 Hábitos Que Aceleram Seus Resultados em 7 Dias',
                  desc: 'Hábitos simples que aceleram o metabolismo e a queima de gordura. Você começa hoje e já sente diferença na barriga na primeira semana, sem dieta radical, sem sacrifício.',
                  tipo: 'pdf',
                  img: '/assets/entregavel-3.png',
                },
              ].map((item, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden' }}>
                  <div className={`lt-deliv-inner${i % 2 === 1 ? ' lt-rev' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="lt-deliv-img" style={{ overflow: 'hidden', background: '#f0f0eb', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={item.img}
                        alt={`Mockup do entregável ${item.title}`}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
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
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                {
                  img: '/assets/bonus-1.png',
                  alt: 'Mockup do bônus Planejamento Alimentar para Definição',
                  title: 'Planejamento Alimentar para Definição',
                  desc: 'Cardápio base com sugestões de refeições práticas para a mulher que quer resultado sem dieta radical e sem passar fome. Vai direto ao que funciona, sem complicação.',
                },
                {
                  img: '/assets/entregavel-2.png',
                  alt: 'Mockup do bônus Guia do Fim de Semana Sem Culpa',
                  title: 'Guia do Fim de Semana Sem Culpa',
                  desc: 'O material que resolve o maior sabotador da mulher brasileira. Estratégias práticas e prontas para aplicar em churrasco, pizza, aniversário, barzinho, e você curte tudo sem sentir culpa e sem destruir o resultado da semana.',
                },
              ].map((b, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden' }}>
                  <div className={`lt-deliv-inner${i % 2 === 0 ? ' lt-rev' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="lt-deliv-img" style={{ overflow: 'hidden', background: '#f0f0eb', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={b.img}
                        alt={b.alt}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                    <div className="lt-deliv-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999, background: 'rgba(244,162,97,0.15)', padding: '0.25rem 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start' }}>
                        🎁 BÔNUS EXCLUSIVO
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)' }}>{b.title}</h3>
                      <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ 7. PARA QUEM É ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
              O Protocolo Espelho 30D é pra você que…
            </h2>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Não gosta do que vê no espelho e quer mudar isso em 30 dias',
                'Está cansada de programas que quebram quando a vida real aparece',
                'Quer um treino em casa, de 20 a 30 minutos, sem precisar de nenhum equipamento',
                'Está com a barriga inchada e quer firmar o corpo de forma progressiva',
                'Quer poder curtir churrasco, pizza e aniversário sem destruir o resultado',
                'Já tentou de tudo, desistiu na primeira semana, e quer um método que finalmente encaixe na sua vida',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '1rem', background: 'white', padding: '1rem 1.5rem', textAlign: 'left', boxShadow: '0 4px 20px rgba(26,26,46,0.04)' }}>
                  <div style={{ display: 'flex', height: 32, width: 32, flexShrink: 0, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(22,163,74,0.1)' }}>
                    <Check style={{ height: 16, width: 16, color: 'var(--success)' }} />
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
                  <strong style={{ color: 'var(--primary)' }}>Isso NÃO é pra você</strong> se você quer emagrecer 15kg sem mudar absolutamente nada. Aqui você vai agir, mas com inteligência e sem sofrimento desnecessário.
                </span>
              </div>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '1.125rem', color: 'var(--muted)' }}>
              Se você se identificou com pelo menos 2 dessas situações,{' '}
              <strong style={{ color: 'var(--primary)', fontWeight: 700 }}>o Protocolo Espelho 30D</strong>{' '}
              é exatamente o que você estava esperando.
            </p>
          </div>
        </section>

        {/* ── Avatar transformado ── */}
        <section style={{ padding: '0 0 2.5rem' }}>
          <div style={{ maxWidth: '32rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <img
              src="/assets/avatar-transformado.png"
              alt="Mulher confiante se olhando no espelho após 30 dias de protocolo"
              style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 18px 45px rgba(26,26,46,0.12)', display: 'block' }}
            />
            <p style={{ marginTop: '1.25rem', fontSize: '1.0625rem', color: 'var(--muted)', fontStyle: 'italic' }}>
              É assim que você vai se sentir em 30 dias.
            </p>
          </div>
        </section>

        {/* ════════════════ 8. ANCORAGEM DE PREÇO ════════════════ */}
        {/* ⚠️ Sem botão de compra neste bloco */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance', marginBottom: '2rem' } as React.CSSProperties}>
              Recapitulando tudo que você vai receber no Protocolo Espelho 30D:
            </h2>

            <div style={{ borderRadius: '1.5rem', background: 'white', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', overflow: 'hidden' }}>
              {[
                { nome: 'Plataforma de Treinos 30D', valor: 'R$ 127,00' },
                { nome: 'Espelho Mental — Reprogramando Sua Autoimagem', valor: 'R$ 97,00' },
                { nome: '10 Hábitos Que Aceleram Seus Resultados em 7 Dias', valor: 'R$ 67,00' },
                { nome: 'BÔNUS: Planejamento Alimentar para Definição', valor: 'R$ 97,00' },
                { nome: 'BÔNUS: Guia do Fim de Semana Sem Culpa', valor: 'R$ 97,00' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(26,26,46,0.05)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--fg)' }}>
                    <Check style={{ height: 16, width: 16, flexShrink: 0, color: 'var(--success)' }} />
                    {item.nome}
                  </span>
                  <span style={{ flexShrink: 0, fontSize: '0.875rem', color: '#dc2626', textDecoration: 'line-through', marginLeft: '1rem' }}>{item.valor}</span>
                </div>
              ))}
              <div style={{ background: 'rgba(26,26,46,0.02)', padding: '1.25rem 1.5rem' }}>
                <div className="lt-pricing-total">
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>Tudo isso deveria custar:</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>R$ 485,00</span>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '1.75rem', textAlign: 'center', fontSize: '1.125rem', color: 'var(--fg)', lineHeight: 1.7 }}>
              Mas hoje você tem acesso ao{' '}
              <strong style={{ color: 'var(--primary)' }}>Protocolo Espelho 30D</strong>{' '}
              com todos os bônus por apenas:
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            9. OFERTA + CTA  ←  ÚNICO BLOCO COM BOTÃO DE COMPRA
            ═══════════════════════════════════════════════ */}
        <section id="oferta" className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(244,162,97,0.2)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <CTABlock checkoutUrl={CHECKOUT_URL} />
          </div>
        </section>

        {/* ════════════════ 10. PRÓXIMOS PASSOS / COMO RECEBER ════════════════ */}
        {/* Fundo branco, ícones em success, sem CTA */}
        <section className="lt-section" style={{ background: 'white' }}>
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
              Compre agora e receba seu acesso no e-mail imediatamente!
            </h2>

            <div style={{ marginTop: '3rem', display: 'grid', gap: '2rem', gridTemplateColumns: '1fr' }} className="steps-grid">
              {[
                {
                  icon: <Mail style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '1',
                  title: 'ACESSE SEU E-MAIL',
                  desc: 'Você receberá um e-mail com o acesso ao Protocolo Espelho 30D. Basta clicar no email e acessar na hora.',
                },
                {
                  icon: <PlayCircle style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '2',
                  title: 'ACESSE O PRODUTO',
                  desc: 'Você tem acesso a todos os materiais do Protocolo Espelho 30D imediatamente, para usar quando e onde quiser.',
                },
                {
                  icon: <CheckCircle2 style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '3',
                  title: 'TUDO PRONTO!',
                  desc: 'Agora é só aplicar e começar a ver resultado no espelho.',
                },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem 1.5rem', borderRadius: '1.25rem', background: 'var(--bg)' }}>
                  <div style={{ display: 'flex', height: 64, width: 64, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(22,163,74,0.1)' }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--success)' }}>
                    Passo {step.num}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--fg)' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════ 11. CONVERSA SÉRIA / CARTA ABERTA ════════════════ */}
        {/* ⚠️ Sem botão de compra neste bloco */}
        <section className="lt-section">
          <div className="lt-orb" style={{ width: 500, height: 500, background: 'rgba(230,57,70,0.06)', top: 0, right: 0 }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
              Você tem duas escolhas agora.
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              Eu sei o que é chegar até aqui, sentir que algo pode ser diferente desta vez, e ainda assim travar. Essa dúvida é real. Mas ela não vai sumir esperando. Ela some quando você toma uma decisão.
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.7 }}>
              Só existem dois caminhos daqui pra frente, e você já sabe qual é cada um deles.
            </p>

            <div style={{ marginTop: '2rem', display: 'inline-block', borderRadius: '1.5rem', background: 'white', padding: '1.75rem 2rem', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', textAlign: 'left', maxWidth: '36rem', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem 1.25rem', borderRadius: '1rem', background: 'rgba(230,57,70,0.03)', border: '1px solid rgba(230,57,70,0.1)' }}>
                  <X style={{ height: 20, width: 20, flexShrink: 0, marginTop: 2, color: 'var(--primary)' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.375rem' }}>Opção 1</p>
                    <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.6 }}>Fechar essa página, voltar para a rotina, e na próxima segunda se olhar no espelho mais uma vez sem gostar do que vê. Sem saber o que vai ser diferente desta vez.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem 1.25rem', borderRadius: '1rem', background: 'rgba(22,163,74,0.04)', border: '1px solid rgba(22,163,74,0.15)' }}>
                  <Check style={{ height: 20, width: 20, flexShrink: 0, marginTop: 2, color: '#16a34a' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#16a34a', marginBottom: '0.375rem' }}>Opção 2</p>
                    <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.6 }}>Por R$ 67, seguir um protocolo feito para a sua vida real e, em 30 dias, se olhar no espelho e gostar do que você vê. Pela primeira vez terminar algo que começou.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: 1, width: 96, margin: '2rem auto', background: 'linear-gradient(to right, transparent, rgba(26,26,46,0.15), transparent)' }} />

            <p style={{ fontSize: '1.125rem', color: 'var(--fg)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              Eu sei que você já tentou antes. Eu sei que é difícil acreditar que desta vez vai ser diferente. É por isso que existe a garantia de 7 dias: se não funcionar para você, devolvemos 100% sem perguntas. Mas eu preciso que você tome uma decisão <strong>hoje.</strong>
            </p>
          </div>
        </section>

        {/* ════════════════ 12. AUTORIDADE ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ height: 280, width: 280, flexShrink: 0, overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 40px rgba(26,26,46,0.08)', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/assets/foto_thiago.webp"
                alt="Foto de Thiago Benvenho"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--fg)' }}>
                O criador do Protocolo Espelho 30D é{' '}
                <span style={{ color: 'var(--primary)' }}>Thiago Benvenho.</span>
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Educador Físico e Coach com atuação desde <strong style={{ color: 'var(--fg)' }}>1997</strong>, Thiago viu de perto o que mais sabota quem quer resultado: não é falta de vontade. É falta de um método que aguenta a vida real.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Depois de desenvolver sua abordagem de <strong style={{ color: 'var(--fg)' }}>leitura de padrões comportamentais</strong>, os resultados vieram: <strong style={{ color: 'var(--fg)' }}>+30 avaliações 5 estrelas</strong>, <strong style={{ color: 'var(--fg)' }}>100% de sucesso</strong> nos clientes que seguiram o protocolo e um maior case de <strong style={{ color: 'var(--fg)' }}>60 kg eliminados</strong>.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Agora ele coloca esse mesmo sistema dentro do Protocolo Espelho 30D, para você aplicar em casa, no seu ritmo.
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>
                — Thiago Benvenho | Instagram: <span style={{ color: 'var(--primary)' }}>@thiagobenvenho</span>
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════ 14. FAQ ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '48rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--fg)', textAlign: 'center' }}>
              Ficou alguma dúvida?
            </h2>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <FAQItem
                q="Como recebo o material após a compra?"
                a="Imediatamente! Assim que o pagamento é confirmado, você recebe no e-mail cadastrado o link de acesso à área de membros. Em menos de 2 minutos você já está com tudo nas mãos."
              />
              <FAQItem
                q="Funciona no celular?"
                a="Sim. A plataforma de treinos e todos os materiais funcionam em qualquer dispositivo: celular, tablet ou computador. Basta abrir o navegador e acessar. Sem instalar nenhum aplicativo."
              />
              <FAQItem
                q="Preciso de algum equipamento para os treinos?"
                a="Não. A Plataforma de Treinos 30D usa apenas o peso do seu próprio corpo. Você precisa de um cantinho qualquer: sala, quarto, varanda, hotel, onde estiver. Isso é tudo."
              />
              <FAQItem
                q="Funciona para quem está começando do zero?"
                a="Sim. Os treinos foram desenhados para qualquer nível de condicionamento. Cada exercício tem vídeo demonstrativo e você respeita o seu próprio ritmo, sem se comparar com ninguém."
              />
              <FAQItem
                q="Qual a forma de pagamento?"
                a="Cartão de crédito, cartão de débito, Pix ou boleto bancário. Tudo em ambiente seguro e 100% criptografado."
              />
              <FAQItem
                q="Em quanto tempo vou receber o acesso?"
                a="O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com o link em menos de 2 minutos. No Pix e cartão, a confirmação é instantânea."
              />
              <FAQItem
                q="Por quanto tempo tenho acesso ao conteúdo?"
                a="Os materiais em PDF (Protocolo de Treinos, Espelho Mental e Guia de Fim de Semana) são seus para sempre — acesso vitalício, você baixa e guarda onde quiser. O acesso à plataforma de treinos com os vídeos é de 1 ano a partir da data de compra, tempo mais do que suficiente para completar vários ciclos do protocolo."
              />
              <FAQItem
                q="E se eu não gostar?"
                a="Você tem 7 dias de garantia total e incondicional. Se por qualquer motivo o Protocolo não for pra você, basta enviar um e-mail e devolvemos 100% do valor, sem burocracia, sem perguntas, sem enrolação."
              />
              <FAQItem
                q="Quanto tempo leva para ver resultado?"
                a="A maioria das mulheres relata sentir diferença na barriga ainda na primeira semana. Resultados visíveis no espelho aparecem entre 10 e 21 dias, dependendo da consistência. Em 30 dias completos, a diferença é inegável."
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            13. RECAPITULAÇÃO DA OFERTA — cópia exata do bloco 9
            ═══════════════════════════════════════════════ */}
        <section id="oferta-2" className="lt-section">
          <div className="lt-orb" style={{ width: 600, height: 600, background: 'rgba(244,162,97,0.2)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem' }}>
            <CTABlock checkoutUrl={CHECKOUT_URL} />
          </div>
        </section>

        {/* ════════════════ 15. RODAPÉ LEGAL ════════════════ */}
        <div className="lt-gradient-bar" />
        <footer style={{ background: 'var(--fg)', padding: '3rem 0', color: 'var(--bg)' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '0 1.25rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>Protocolo Espelho 30D</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              Thiago Benvenho — Personal Trainer | Florianópolis, SC<br />
              CNPJ: 61.654.585/0001-58
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', opacity: 0.6 }}>
              <a href="mailto:contato@thiagobenvenho.com.br" style={{ color: 'inherit', textDecoration: 'none' }}>contato@thiagobenvenho.com.br</a>
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

/* ─── CTABlock — APENAS nos blocos 9 e 13 ─── */
function CTABlock({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <div style={{ borderRadius: '1.5rem', background: 'white', padding: '2rem', boxShadow: '0 10px 50px rgba(26,26,46,0.08)', border: '2px solid rgba(22,163,74,0.2)' }}>
      <div className="lt-cta-inner">

        {/* Mockup — esquerda no desktop */}
        <div className="lt-cta-mockup">
          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(26,26,46,0.08)', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/mockup-produto.png"
              alt="Mockup completo dos entregáveis do Protocolo Espelho 30D"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Info — direita no desktop */}
        <div className="lt-cta-info" style={{ textAlign: 'center' }}>
          {/* Preço */}
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', textDecoration: 'line-through' }}>
            De R$ 485,00
          </p>
          <p style={{ marginTop: '0.375rem', fontSize: '0.875rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Por apenas
          </p>
          <p style={{ marginTop: '0.25rem', fontSize: 'clamp(2.25rem, 7vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--success)', whiteSpace: 'nowrap' }}>
            9x de R$ 8,00
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '1.125rem', color: 'var(--fg)' }}>
            ou <strong>R$ 67 à vista</strong>
          </p>
          {/* Botão com pulse ring */}
          <div style={{ position: 'relative', marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: 'rgba(22,163,74,0.2)', animation: 'lt-pulse-ring 2s ease-in-out infinite' }} />
            <a
              href={checkoutUrl}
              className="lt-btn-cta"
              style={{ position: 'relative' }}
            >
              Quero transformar meu corpo
            </a>
          </div>

          {/* Garantia */}
          <div style={{ marginTop: '1.25rem', borderRadius: '0.875rem', background: 'rgba(22,163,74,0.05)', border: '1px solid rgba(22,163,74,0.15)', padding: '0.875rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
            <ShieldCheck style={{ height: 20, width: 20, color: 'var(--success)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.9375rem', color: 'var(--fg)', fontWeight: 500 }}>
              <strong>Garantia de 7 dias incondicional.</strong> Se não gostar, devolvemos 100% sem perguntas.
            </span>
          </div>

          {/* Trust signal */}
          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
            <Zap style={{ height: 16, width: 16, color: '#16a34a' }} /> Acesso imediato
          </div>
        </div>

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
