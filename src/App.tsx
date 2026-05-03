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
  Calendar,
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

  /* Imagem ruminações: full-bleed no mobile */
  .lt-rumin-wrap { margin: 1.5rem -1.25rem 0; display: flex; justify-content: center; }
  .lt-rumin-img { width: 100%; height: auto; display: block; border-radius: 0; }
  @media (min-width: 768px) {
    .lt-rumin-wrap { margin: 1.5rem 0 0; }
    .lt-rumin-img { max-width: 480px; border-radius: 1rem; }
  }

  /* CTABlock desktop layout */
  .lt-cta-inner { display: flex; flex-direction: column; gap: 1.5rem; }
  @media (min-width: 768px) {
    .lt-cta-inner { flex-direction: row; align-items: center; gap: 3rem; }
    .lt-cta-mockup { width: 45%; flex-shrink: 0; }
    .lt-cta-info { flex: 1; }
  }
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
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.02em' }}>
            Thiago Benvenho
          </span>
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
                <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--fg)', textWrap: 'balance' } as React.CSSProperties}>
                  Pare de evitar o espelho:{' '}
                  <span style={{ color: 'var(--primary)' }}>seque a barriga em 30 dias treinando 20 minutos por dia em casa.</span>
                </h1>
                <p style={{ marginTop: '1rem', fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Com o Protocolo Espelho 30D você vai treinar em casa sem equipamento, ver resultado no espelho em 30 dias — e desta vez chegar até o fim, mesmo com filhos, trabalho e vida social no meio.
                </p>

                {/* Bullets */}
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Treinos de 20 min em casa, sem equipamento',
                    'Resultado visível no espelho em 30 dias — ou devolvemos 100%',
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

            <div className="lt-social-grid" style={{ marginTop: '2rem', columns: 1, gap: '1rem', maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto' }}>
              {[
                { src: '/assets/depoimento_real1.webp', label: 'Bárbara Natali' },
                { src: '/assets/depoimento_real2.webp', label: 'Vanessa' },
              ].map((d, i) => (
                <div key={i} className="lt-card" style={{ overflow: 'hidden', breakInside: 'avoid', marginBottom: '1rem' }}>
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

            <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, lineHeight: 1.3, color: 'var(--fg)', textAlign: 'center', textWrap: 'balance' } as React.CSSProperties}>
              Eu sei que você{' '}
              <span style={{ color: 'var(--primary)' }}>não gosta do que vê quando olha no espelho.</span>
            </p>

            <p style={{ marginTop: '1.25rem', fontSize: '1rem', fontWeight: 600, color: 'var(--fg)', textAlign: 'center' }}>
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
                Isso não é fraqueza. E não é falta de disciplina. Os programas foram feitos para condições ideais — sem filhos, sem trabalho, sem vida social. Quando a vida real aparece, o método não tem resposta. Você cai, sente culpa e volta à estaca zero.{' '}
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
                  <span style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(244,162,97,0.45) 60%)', fontWeight: 700 }}>ver resultado no espelho</span> — isso resolveria o seu problema?
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
              Como o Protocolo Espelho 30D funciona:
            </h2>

            <div style={{ marginTop: '3.5rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {[
                {
                  num: '01',
                  title: 'Acesse agora',
                  desc: 'Comprou? Em minutos você está dentro — celular, tablet ou computador. Sem espera.',
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
                  title: 'Abra o treino do dia',
                  desc: '20 minutos, qualquer cantinho da casa, sem equipamento. O vídeo mostra tudo passo a passo.',
                  bg: 'linear-gradient(135deg, #fef0ee 0%, #fcdcd8 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 120, height: 80, borderRadius: '0.625rem', background: 'var(--fg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(26,26,46,0.2)' }}>
                      <PlayCircle size={44} strokeWidth={1.75} style={{ color: 'white' }} fill="rgba(230,57,70,0.9)" />
                      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)', overflow: 'hidden' }}>
                        <div style={{ width: '35%', height: '100%', background: 'var(--primary)' }} />
                      </div>
                      <div style={{ position: 'absolute', top: -10, right: -10, padding: '0.25rem 0.5rem', borderRadius: 6, background: 'white', fontSize: '0.6875rem', fontWeight: 700, color: 'var(--fg)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>20 min</div>
                    </div>
                  ),
                },
                {
                  num: '03',
                  title: 'Use o guia no fim de semana',
                  desc: 'Antes do churrasco ou aniversário, abre o guia e aplica. Você curte sem culpa e sem destruir o resultado.',
                  bg: 'linear-gradient(135deg, #fff5e6 0%, #ffe7c2 100%)',
                  visual: (
                    <div style={{ position: 'relative', width: 92, height: 96, borderRadius: '0.625rem', background: 'white', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 6px 18px rgba(26,26,46,0.08)' }}>
                      <div style={{ height: 22, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Calendar size={12} strokeWidth={2.5} style={{ color: 'white' }} />
                      </div>
                      <div style={{ padding: '0.375rem', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
                        {Array.from({ length: 21 }).map((_, i) => {
                          const isWeekend = i % 7 === 5 || i % 7 === 6;
                          return (
                            <div key={i} style={{ aspectRatio: '1', borderRadius: 2, background: isWeekend ? 'var(--accent)' : 'rgba(26,26,46,0.06)' }} />
                          );
                        })}
                      </div>
                    </div>
                  ),
                },
                {
                  num: '04',
                  title: 'Olhe no espelho',
                  desc: 'Em 30 dias, o espelho te diz o que a balança não sabe contar. Barriga mais firme, roupas fechando de novo.',
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
                  desc: 'Acesso completo à plataforma com planejamento de treinos para todos os dias — 7 treinos diferentes, um para cada dia da semana, de 20 a 30 minutos. Cada exercício tem vídeo demonstrativo de como realizar. Sem equipamento, funciona em qualquer canto da casa.',
                  tipo: 'plataforma',
                  img: '/assets/entregavel-1.png',
                },
                {
                  title: 'Guia do Fim de Semana Sem Culpa',
                  desc: 'O material que resolve o maior sabotador da mulher brasileira. Estratégias práticas e prontas para aplicar em churrasco, pizza, aniversário, barzinho — você curte tudo sem sentir culpa e sem destruir o resultado da semana.',
                  tipo: 'pdf',
                  img: '/assets/entregavel-2.png',
                },
                {
                  title: '10 Hábitos Que Aceleram Seus Resultados em 7 Dias',
                  desc: 'Hábitos simples que aceleram o metabolismo e a queima de gordura. Você começa hoje e já sente diferença na barriga na primeira semana — sem dieta radical, sem sacrifício.',
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
            <div style={{ marginTop: '2rem' }}>
              <div className="lt-card" style={{ overflow: 'hidden' }}>
                <div className="lt-deliv-inner lt-rev" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="lt-deliv-img" style={{ overflow: 'hidden', background: '#f0f0eb', minHeight: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="/assets/bonus-1.png"
                      alt="Mockup do bônus Planejamento Alimentar para Definição"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div className="lt-deliv-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 9999, background: 'rgba(244,162,97,0.15)', padding: '0.25rem 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start' }}>
                      🎁 BÔNUS EXCLUSIVO
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)' }}>Planejamento Alimentar para Definição</h3>
                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>Cardápio base com sugestões de refeições práticas para a mulher que quer resultado sem dieta radical e sem passar fome. Vai direto ao que funciona — sem complicação.</p>
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
              O Protocolo Espelho 30D é pra você que…
            </h2>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Não gosta do que vê no espelho e quer mudar isso em 30 dias',
                'Está cansada de programas que quebram quando a vida real aparece',
                'Quer um treino em casa, de 20 a 30 minutos, sem precisar de nenhum equipamento',
                'Está com a barriga inchada e quer firmar o corpo de forma progressiva',
                'Quer poder curtir churrasco, pizza e aniversário sem destruir o resultado',
                'Já começou mais de uma vez — e desta vez quer chegar até o fim de verdade',
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
                  <strong style={{ color: 'var(--primary)' }}>Isso NÃO é pra você</strong> se você quer emagrecer 15kg sem mudar absolutamente nada — aqui você vai agir, mas com inteligência e sem sofrimento desnecessário.
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
                { nome: 'Guia do Fim de Semana Sem Culpa', valor: 'R$ 97,00' },
                { nome: '10 Hábitos Que Aceleram Seus Resultados em 7 Dias', valor: 'R$ 67,00' },
                { nome: 'BÔNUS: Planejamento Alimentar para Definição', valor: 'R$ 97,00' },
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
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>R$ 388,00</span>
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

            <div style={{ marginTop: '3rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {[
                {
                  icon: <Mail style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '1',
                  title: 'ACESSE SEU E-MAIL',
                  desc: 'Em poucos minutos você recebe seu acesso na caixa de entrada. Sem espera.',
                },
                {
                  icon: <PlayCircle style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '2',
                  title: 'ACESSE O PRODUTO',
                  desc: 'Você recebe todos os materiais do Protocolo Espelho 30D imediatamente, para usar quando e onde quiser.',
                },
                {
                  icon: <CheckCircle2 style={{ height: 32, width: 32, color: 'var(--success)' }} />,
                  num: '3',
                  title: 'TUDO PRONTO!',
                  desc: 'Abra o treino do Dia 1, leia o Guia do Fim de Semana e comece hoje mesmo — o espelho vai te agradecer em 30 dias.',
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
              Só existem dois caminhos daqui pra frente — e você já sabe qual é cada um deles.
            </p>

            <div style={{ marginTop: '2rem', display: 'inline-block', borderRadius: '1.5rem', background: 'white', padding: '1.75rem 2rem', boxShadow: '0 10px 40px rgba(26,26,46,0.06)', textAlign: 'left', maxWidth: '36rem', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', padding: '1rem 1.25rem', borderRadius: '1rem', background: 'rgba(230,57,70,0.03)', border: '1px solid rgba(230,57,70,0.1)' }}>
                  <X style={{ height: 20, width: 20, flexShrink: 0, marginTop: 2, color: 'var(--primary)' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.375rem' }}>Opção 1</p>
                    <span style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.6 }}>Fechar essa página, voltar para a rotina, e na próxima segunda se olhar no espelho — mais uma vez sem gostar do que vê. Sem saber o que vai ser diferente desta vez.</span>
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
              Eu sei que você já tentou antes. Eu sei que é difícil acreditar que desta vez vai ser diferente. É por isso que existe a garantia de 7 dias — se não funcionar para você, devolvemos 100% sem perguntas. Mas eu preciso que você tome uma decisão <strong>hoje.</strong>
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--fg)' }}>— Thiago Benvenho</p>
          </div>
        </section>

        {/* ════════════════ 12. AUTORIDADE ════════════════ */}
        <section className="lt-section">
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem', margin: '0 auto', padding: '0 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ height: 280, width: 280, flexShrink: 0, overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 40px rgba(26,26,46,0.08)', background: 'linear-gradient(135deg, #1a1a2e, #e63946)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/assets/thiago.png"
                alt="Foto de Thiago Benvenho"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--fg)' }}>
                Quem é <span style={{ color: 'var(--primary)' }}>Thiago Benvenho</span>?
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Thiago Benvenho é personal trainer especializado em transformação corporal para mulheres com vida corrida. Criou o método Espelho depois de acompanhar centenas de mulheres que sabiam exatamente o que precisavam fazer — mas paravam toda vez que a vida real aparecia: o fim de semana, a semana difícil, o mês corrido.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                Com mais de 200 alunas atendidas, desenvolveu um protocolo de 30 dias feito para a realidade da mulher brasileira — que tem filhos, trabalho, vida social e não pode abrir mão de nada disso para ter resultado. Resultado que aparece no espelho. Não só na balança.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                <em>"Minha missão é simples: mostrar para cada mulher que ela não precisa ser perfeita para ter um corpo de que se orgulha. Ela precisa do método certo."</em>
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>
                — Thiago Benvenho | Instagram: <span style={{ color: 'var(--primary)' }}>@thiagobenvenho</span>
              </p>
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
                a="Sim. A plataforma de treinos e todos os materiais funcionam em qualquer dispositivo — celular, tablet ou computador. Basta abrir o navegador e acessar. Sem instalar nenhum aplicativo."
              />
              <FAQItem
                q="Preciso de algum equipamento para os treinos?"
                a="Não. A Plataforma de Treinos 30D usa apenas o peso do seu próprio corpo. Você precisa de um cantinho qualquer — sala, quarto, varanda, hotel, onde estiver. Isso é tudo."
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
                q="E se eu não gostar?"
                a="Você tem 7 dias de garantia total e incondicional. Se por qualquer motivo o Protocolo não for pra você, basta enviar um e-mail e devolvemos 100% do valor — sem burocracia, sem perguntas, sem enrolação."
              />
              <FAQItem
                q="Quanto tempo leva para ver resultado?"
                a="A maioria das mulheres relata sentir diferença na barriga ainda na primeira semana. Resultados visíveis no espelho aparecem entre 10 e 21 dias, dependendo da consistência. Em 30 dias completos, a diferença é inegável."
              />
            </div>
          </div>
        </section>

        {/* ════════════════ 15. RODAPÉ LEGAL ════════════════ */}
        <div className="lt-gradient-bar" />
        <footer style={{ background: 'var(--fg)', padding: '3rem 0', color: 'var(--bg)' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '0 1.25rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>Protocolo Espelho 30D</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              Thiago Benvenho — Personal Trainer | Florianópolis, SC<br />
              CNPJ: [CNPJ DO PRODUTOR]
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
            De R$ 388,00
          </p>
          <p style={{ marginTop: '0.375rem', fontSize: '0.875rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Por apenas
          </p>
          <p style={{ marginTop: '0.25rem', fontSize: 'clamp(2.25rem, 7vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--success)', whiteSpace: 'nowrap' }}>
            3x de R$ 24,53
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '1.125rem', color: 'var(--fg)' }}>
            ou <strong>R$ 67 à vista</strong>
          </p>
          <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--muted)' }}>Acesso vitalício</p>

          {/* Botão com pulse ring */}
          <div style={{ position: 'relative', marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: 'rgba(22,163,74,0.2)', animation: 'lt-pulse-ring 2s ease-in-out infinite' }} />
            <a
              href={checkoutUrl}
              className="lt-btn-cta"
              style={{ position: 'relative' }}
            >
              SIM, QUERO MEU ACESSO AGORA — R$ 67
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
