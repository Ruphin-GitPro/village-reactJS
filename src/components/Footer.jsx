import { motion } from 'framer-motion';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com', color: '#1877f2' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com', color: '#e1306c' },
  { icon: <TwitterIcon />, label: 'Twitter / X', href: 'https://twitter.com', color: '#1da1f2' },
];

const footerLinks = [
  { labelKey: 'accueil', page: '/' },
  { labelKey: 'historique', page: '/historique' },
  { labelKey: 'photos', page: '/photos' },
  { labelKey: 'paysage', page: '/paysage' },
  { labelKey: 'voirplus', page: '/voirplus' },
];

const footerLabels = {
  fr: {
    accueil: 'Accueil',
    historique: 'Historique',
    photos: 'Photos',
    paysage: 'Paysage',
    voirplus: 'Voir plus',
    navigation: 'Navigation',
    contact: 'Contact',
    reseaux: 'Réseaux sociaux',
    description: 'Village authentique de Bongolava, Madagascar. Nature, histoire et communauté.',
    region: 'Région Bongolava, Madagascar',
    bottom: 'Bongolava · Madagascar 🇲🇬',
    langage: 'Langue',
  },
  mg: {
    accueil: 'Fandraisana',
    historique: 'Tantara',
    photos: 'Sary',
    paysage: 'Tendrombohitra',
    voirplus: 'Hijery bebe kokoa',
    navigation: 'Lisitry ny tranonkala',
    contact: 'Fifandraisana',
    reseaux: 'Tambajotra sosialy',
    description: 'Tanàna tena marina any Bongolava, Madagasikara. Natiora, tantara ary fiaraha-monina.',
    region: 'Faritra Bongolava, Madagasikara',
    bottom: 'Bongolava · Madagasikara 🇲🇬',
    langage: 'Fiteny',
  },
};

export default function Footer({ setPage, language = 'fr', setLanguage }) {
  const labels = footerLabels[language];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #070920 0%, #03040d 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      marginTop: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 2,
        background: 'linear-gradient(90deg, transparent, #d2691e, transparent)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          
          {/* Brand block */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <span style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #d2691e, #ff8c42)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, fontWeight: 900, color: '#fff', flexShrink: 0,
              }}>A</span>
              <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.15rem', color: '#fff' }}>
                Ambohipisaka
              </span>
            </div>
            <p style={{ color: '#8a95b8', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 240 }}>
              {labels.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.7 }}>{labels.navigation}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {footerLinks.map(link => (
                <li key={link.page}>
                  <button
                    onClick={() => setPage(link.page)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#8a95b8', fontSize: '0.9rem', padding: 0,
                      transition: 'color 0.2s',
                      fontFamily: 'DM Sans',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d2691e'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8a95b8'}
                  >
                    → {labels[link.labelKey]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.7 }}>{labels.contact}</h4>
            <p style={{ color: '#8a95b8', fontSize: '0.88rem', lineHeight: 1.7 }}>
              contact@ambohipisaka.mg<br />
              {labels.region}
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontSize: '0.95rem', color: '#fff', marginBottom: '1rem', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.7 }}>{labels.reseaux}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    color: '#8a95b8', fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    padding: '6px 10px', borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.background = s.color + '10'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8a95b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', gap: 8,
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ color: '#545d7a', fontSize: '0.82rem' }}>
            © 2026 Village d'Ambohipisaka — Développé par <span style={{ color: '#d2691e' }}>RATAHINJANAHARY Ruphin Henri</span>
          </p>
          <p style={{ color: '#545d7a', fontSize: '0.82rem' }}>
            {labels.bottom}
          </p>
        </div>
      </div>
    </footer>
  );
}
