import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function RevealCard({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

const moments = [
  { year: 'Époque fondatrice', text: 'Installation des premières familles agricoles et fondation du village.' },
  { year: 'Développement', text: 'Création de quartiers comme Amboniandrefana, Andafiavaratra, Tanambe.' },
  { year: 'Projets communautaires', text: 'Développement de projets pour l\'école et l\'approvisionnement en eau.' },
];

export default function Historique() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{
        padding: '5rem 1.5rem 3rem',
        background: 'linear-gradient(180deg, rgba(4,8,26,0.9),rgba(4,8,26,1)), url(https://picsum.photos/1200/500?random=50) center/cover no-repeat',
        textAlign: 'center',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>Passé & traditions</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#fff', margin: '0.5rem 0 1rem' }}>
            Histoire du village
          </h1>
          <p style={{ color: '#9aa3c4', maxWidth: 640, margin: '0 auto', lineHeight: 1.75 }}>
            Un aperçu de l'origine et des traditions d'Ambohipisaka, raconté ici de manière simple et claire.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        {[
          { title: 'Origines', content: 'Ambohipisaka est né de l\'entraide entre familles et voisins. Le village accueille des royaumes : Betsileo, Merina, Bara. Au fil du temps, il s\'est développé autour de la culture du riz et de l\'élevage, avec aussi un peu de commerce.' },
          { title: 'Traditions', content: 'Les fêtes du village, les cérémonies familiales et les marchés locaux rythment la vie des habitants. Ces traditions transmettent le respect pour la terre et la communauté.' },
        ].map((s, i) => (
          <RevealCard key={s.title} delay={i * 0.1} style={{ ...cardStyle, marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>{s.title}</h2>
            <p style={{ color: '#9aa3c4', lineHeight: 1.8 }}>{s.content}</p>
          </RevealCard>
        ))}

        {/* Timeline */}
        <RevealCard delay={0.3} style={cardStyle}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>Moments forts</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {moments.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
                style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#d2691e', marginTop: 5, flexShrink: 0, boxShadow: '0 0 0 4px rgba(210,105,30,0.2)' }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#d2691e', fontSize: '0.85rem', marginBottom: 2 }}>{m.year}</div>
                  <p style={{ color: '#9aa3c4', lineHeight: 1.7, margin: 0 }}>{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealCard>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24, padding: '2rem',
};
