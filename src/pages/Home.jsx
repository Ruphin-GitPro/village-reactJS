import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' } }),
};

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

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

const homeTexts = {
  fr: {
    heroTag: 'Village d\'Ambohipisaka',
    heroTitle1: 'Bienvenue dans',
    heroTitle2: 'notre village',
    heroText: 'Découvrez l\'histoire, les paysages, les quartiers et la culture d\'Ambohipisaka, au cœur de la région Bongolava.',
    btnMore: 'Voir plus',
    btnHistory: 'Notre histoire',
    aboutLabel: 'À propos',
    aboutTitle: 'Présentation du village',
    introPresentation: {
      title: 'Présentation',
      text: 'Ambohipisaka est un village situé à l\'Est d\'Ampihoarana, il est ensemblé par de Fokontany Fihaonana avec Ankazotsifantatra. Autrefois, ce village est situé dans un lieu appelé Tanàna Haolo, et dans cette lieu, à ce moment-là, il y avait une maladie grave appelée peste et presque plus de personnes étaient mortes, donc il a été déplacé vers l\'Est. C\'est ainsi qu\'a été donné le nom de ce village appelé Ambohipisaka.',
    },
    introQuartiers: {
      title: 'Quartiers',
      text: 'Les quartiers principaux sont Amboniandrefana et Andafiavaratra, Tanambe, Patrage Ouest, Patrage Est, Patrage Sud. Chaque quartier a sa propre histoire, ses coutumes et ses habitants chaleureux.',
    },
    explorerLabel: 'Explorer',
    exploreTitle: 'Découvrez Ambohipisaka',
    featureHistoire: 'Histoire',
    featurePaysage: 'Paysage',
    featureCulture: 'Culture',
    featureTextHistoire: 'Le village s\'est développé autour de l\'agriculture et du partage. Les ancêtres ont construit le village en respectant la nature et les traditions locales.',
    featureTextPaysage: 'Les rizières, les sentiers et les maisons traditionnelles créent un paysage vivant et paisible que l\'on découvre à chaque visite.',
    featureTextCulture: 'La culture du village est faite de fêtes de quartier, de cuisine locale et de savoir-faire artisanal transmis de génération en génération.',
    featureMore: 'Lire la suite →',
    galleryLabel: 'Galerie',
    galleryTitle: 'Images du village',
    galleryButton: 'Voir la galerie complète',
    contactLabel: 'Contact',
    contactTitle: 'Nous écrire',
    contactText: 'Pour toute information sur le village, utilisez le formulaire ci-dessous.',
    formName: 'Nom',
    formNamePlaceholder: 'Votre nom',
    formEmail: 'Email',
    formEmailPlaceholder: 'Votre email',
    formSubject: 'Sujet',
    formSubjectPlaceholder: 'Pourquoi nous contacter ?',
    formMessage: 'Message',
    formMessagePlaceholder: 'Votre message',
    formSubmit: 'Envoyer le message',
  },
  mg: {
    heroTag: 'Vohitra Ambohipisaka',
    heroTitle1: 'Tongasoa eto',
    heroTitle2: 'ny vohitray',
    heroText: 'Hita eto amin\'ny tantara, ny tontolo iainana, ny faritra ary ny kolontsain\'ny Ambohipisaka, any afovoany amin\'ny faritra Bongolava.',
    btnMore: 'Hijery bebe kokoa',
    btnHistory: 'Tantara',
    aboutLabel: 'Momba',
    aboutTitle: 'Fampahafantarana ny vohitra',
    introPresentation: {
      title: 'Fampahafantarana',
      text: 'Ambohipisaka dia vohitra iray mipetraka atsinanan\'i Ampihoarana, ary voaforon-kilasy ny Fokontany Fihaonana miaraka amin\'i Ankazotsifantatra. Talohan\'io, io vohitra io dia nipetraka tao amin\'ny toerana iray antsoina hoe Tanàna Haolo, ary tamin\'io toerana io no nisy aretina grave iray antsoina hoe peste, ary saika ny olona rehetra no maty. Noho izany, nifindra niakatra atsinanana izy io, ary izany no namorona ny anaran\'io vohitra io hoe Ambohipisaka.',
    },
    introQuartiers: {
      title: 'Faritra',
      text: 'Ny faritra lehibe dia Amboniandrefana sy Andafiavaratra, Tanambe, Faritra Andrefana, Faritra Atsinanana, Faritra Atsimo. Ny faritra tsirairay manana tantara, fomban-drazana, ary mponina mafana fo.',
    },
    explorerLabel: 'Hikaroka',
    exploreTitle: 'Hita eto Ambohipisaka',
    featureHistoire: 'Tantara',
    featurePaysage: 'Tendrombohitra',
    featureCulture: 'Kolontsaina',
    featureTextHistoire: 'Ny vohitra dia nivoatra tamin\'ny fambolena sy ny fifampizarana. Ny razana no nanorina ny vohitra tamin\'ny fanajana ny natiora sy ny fomban-drazana.',
    featureTextPaysage: 'Ny tanim-bary, ny lalana ary ny trano nentim-paharazana dia mamorona tontolo iainana milamina sy mangina izay hitanao isaky ny fitsidihana.',
    featureTextCulture: 'Ny kolontsain\'ny vohitra dia manisy fety, sakafo eo an-toerana ary fahaizana manokana nolovaina hatramin\'ny taranaka.',
    featureMore: 'Hamaky bebe kokoa →',
    galleryLabel: 'Sary',
    galleryTitle: 'Sary ny vohitra',
    galleryButton: 'Jereo ny sarin\'ny vohitra',
    contactLabel: 'Fifandraisana',
    contactTitle: 'Soraty anay',
    contactText: 'Raha mila fampahalalana momba ny vohitra, ampiasao ny taratasy etsy ambany.',
    formName: 'Anarana',
    formNamePlaceholder: 'Anaran\'ny olona',
    formEmail: 'Mailaka',
    formEmailPlaceholder: 'Mailakao',
    formSubject: 'Lohahevitra',
    formSubjectPlaceholder: 'Inona no antony hifandraisana?',
    formMessage: 'Hafatra',
    formMessagePlaceholder: 'Ny hafatrao',
    formSubmit: 'Alefaso',
  },
};

export default function Home({ setPage, language = 'fr' }) {
  const t = homeTexts[language] || homeTexts.fr;
  return (
    <div style={{ paddingTop: 64 }}>
      {/* HERO */}
      <section style={{
        minHeight: '88vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `linear-gradient(180deg, rgba(4,8,26,0.65) 0%, rgba(4,8,26,0.88) 100%), url('https://picsum.photos/1400/900?random=1') center/cover no-repeat`,
        position: 'relative', overflow: 'hidden',
        textAlign: 'center', padding: '5rem 1.5rem',
      }}>
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i}
            initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
            style={{
              position: 'absolute',
              width: 4, height: 4, borderRadius: '50%',
              background: '#d2691e',
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block', marginBottom: '1.5rem',
              padding: '0.5rem 1.2rem', borderRadius: 999,
              background: 'rgba(210,105,30,0.18)', border: '1px solid rgba(210,105,30,0.35)',
              fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', color: '#ffb56b',
            }}
          >
            {t.heroTag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', fontWeight: 900, lineHeight: 1.1, color: '#fff', marginBottom: '1.5rem' }}
          >
            {t.heroTitle1}<br />
            <span style={{ background: 'linear-gradient(90deg, #d2691e, #ff8c42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t.heroTitle2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontSize: '1.1rem', color: '#d0d8f5', lineHeight: 1.85, maxWidth: 660, margin: '0 auto 2.5rem' }}
          >
            {t.heroText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button onClick={() => setPage('/voirplus')} style={btnStyle}>
              {t.btnMore}
            </button>
            <button onClick={() => setPage('/historique')} style={btnOutlineStyle}>
              {t.btnHistory}
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: 22 }}
        >↓</motion.div>
      </section>

      {/* INTRO CARDS */}
      <section style={{ maxWidth: 1100, margin: '4rem auto', padding: '0 1.5rem' }}>
        <RevealCard style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{t.aboutLabel}</span>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginTop: '0.5rem', color: '#fff' }}>{t.aboutTitle}</h2>
        </RevealCard>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
          {[
            { title: t.introPresentation.title, text: t.introPresentation.text, delay: 0 },
            { title: t.introQuartiers.title, text: t.introQuartiers.text, delay: 0.1 },
          ].map(card => (
            <RevealCard key={card.title} delay={card.delay} style={cardStyle}>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: '#fff', marginBottom: '0.75rem' }}>{card.title}</h3>
              <p style={{ color: '#9aa3c4', lineHeight: 1.75, fontSize: '0.95rem' }}>{card.text}</p>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* 3 FEATURE CARDS */}
      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealCard style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{t.explorerLabel}</span>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginTop: '0.5rem', color: '#fff' }}>{t.exploreTitle}</h2>
          </RevealCard>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
            {[
              { icon: HistoryIcon, title: t.featureHistoire, text: t.featureTextHistoire, page: '/historique', delay: 0 },
              { icon: LandscapeIcon, title: t.featurePaysage, text: t.featureTextPaysage, page: '/paysage', delay: 0.1 },
              { icon: CultureIcon, title: t.featureCulture, text: t.featureTextCulture, page: '/voirplus', delay: 0.2 },
            ].map(f => (
              <RevealCard key={f.title} delay={f.delay} style={{ ...cardStyle, cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                <div onClick={() => setPage(f.page)}>
                  <div style={{ fontSize: 40, marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><f.icon /></div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: '#fff', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: '#9aa3c4', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '1.25rem' }}>{f.text}</p>
                  <span style={{ color: '#d2691e', fontSize: '0.88rem', fontWeight: 600 }}>{t.featureMore}</span>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ maxWidth: 1100, margin: '4rem auto', padding: '0 1.5rem' }}>
        <RevealCard style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{t.galleryLabel}</span>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginTop: '0.5rem', color: '#fff' }}>{t.galleryTitle}</h2>
        </RevealCard>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {[101,102,103,104].map((n, i) => (
            <RevealCard key={n} delay={i * 0.08} style={{ borderRadius: 18, overflow: 'hidden' }}>
              <img
                src={`https://picsum.photos/400/300?random=${n}`}
                alt="Village d'Ambohipisaka"
                style={{ width: '100%', display: 'block', height: 220, objectFit: 'cover', transition: 'transform 0.4s ease, filter 0.3s' }}
                onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
              />
            </RevealCard>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setPage('/photos')} style={btnOutlineStyle}>
            {t.galleryButton}
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '4rem 1.5rem' }} id="contact">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <RevealCard style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{t.contactLabel}</span>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginTop: '0.5rem', color: '#fff' }}>{t.contactTitle}</h2>
            <p style={{ color: '#8a95b8', marginTop: '0.75rem' }}>{t.contactText}</p>
          </RevealCard>
          <RevealCard style={cardStyle} delay={0.1}>
            <ContactForm language={language} />
          </RevealCard>
        </div>
      </section>
    </div>
  );
}

function HistoryIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Histoire">
      <path d="M4 20h16" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 20V4l7-3 7 3v16" stroke="#f9b46c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h8M8 11h8M8 15h6" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LandscapeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Paysage">
      <path d="M3 18l5-7 4 4 4-6 5 9" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" stroke="#f9b46c" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 6c2 1 3 3 3 5" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 5c2 2 2 4 0 6" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CultureIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Culture">
      <path d="M12 3a8 8 0 1 0 8 8" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8a4 4 0 1 0 4 4" stroke="#f9b46c" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 16c2 2 4 2 5 0 1.2-2 3-2 4.5 0" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v6" stroke="#d2691e" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ContactForm({ language = 'fr' }) {
  const t = homeTexts[language] || homeTexts.fr;
  return (
    <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gap: '1.2rem' }}>
      {[
        { id: 'name', label: t.formName, type: 'text', placeholder: t.formNamePlaceholder },
        { id: 'email', label: t.formEmail, type: 'email', placeholder: t.formEmailPlaceholder },
        { id: 'subject', label: t.formSubject, type: 'text', placeholder: t.formSubjectPlaceholder },
      ].map(f => (
        <div key={f.id}>
          <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: '#c5cce8' }}>{f.label}</label>
          <input
            type={f.type} placeholder={f.placeholder}
            style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#d2691e'; e.target.style.boxShadow = '0 0 0 3px rgba(210,105,30,0.15)'; }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
          />
        </div>
      ))}
      <div>
        <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: '#c5cce8' }}>{t.formMessage}</label>
        <textarea
          rows={5} placeholder={t.formMessagePlaceholder}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => { e.target.style.borderColor = '#d2691e'; e.target.style.boxShadow = '0 0 0 3px rgba(210,105,30,0.15)'; }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
        />
      </div>
      <button type="submit" style={btnStyle}>{t.formSubmit}</button>
    </form>
  );
}

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24, padding: '1.8rem',
};

const btnStyle = {
  padding: '0.85rem 2rem', background: 'linear-gradient(135deg, #d2691e, #ff8c42)',
  color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer',
  fontWeight: 700, fontSize: '0.95rem', fontFamily: 'DM Sans',
  boxShadow: '0 8px 24px rgba(210,105,30,0.3)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const btnOutlineStyle = {
  padding: '0.85rem 2rem',
  background: 'rgba(255,255,255,0.06)',
  color: '#fff', border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 999, cursor: 'pointer',
  fontWeight: 600, fontSize: '0.95rem', fontFamily: 'DM Sans',
  transition: 'all 0.2s',
};

const inputStyle = {
  width: '100%', padding: '0.85rem 1rem',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
  background: 'rgba(255,255,255,0.04)', color: '#eef2ff',
  fontFamily: 'DM Sans', fontSize: '0.95rem',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
};
