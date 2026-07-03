import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/historique', label: 'Historique' },
  { to: '/photos', label: 'Photos' },
  { to: '/paysage', label: 'Paysage' },
  { to: '/voirplus', label: 'Voir plus' },
];

export default function Navbar({ active, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(6,8,28,0.96)' : 'rgba(6,8,28,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'background 0.3s',
        padding: '0 1.5rem',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <button onClick={() => setPage('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #d2691e, #ff8c42)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 900, color: '#fff',
          }}>A</span>
          <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: 1 }}>
            Ambohipisaka
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '0.25rem' }} className="nav-desktop">
          {links.map(link => (
            <button
              key={link.to}
              onClick={() => setPage(link.to)}
              style={{
                background: active === link.to ? 'rgba(210,105,30,0.18)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '0.55rem 1.1rem',
                borderRadius: 999,
                color: active === link.to ? '#fff' : '#c5cce8',
                fontFamily: 'DM Sans',
                fontSize: '0.9rem',
                fontWeight: active === link.to ? 600 : 400,
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => { if (active !== link.to) e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { if (active !== link.to) e.currentTarget.style.color = '#c5cce8'; }}
            >
              {link.label}
              {active === link.to && (
                <motion.div layoutId="nav-underline" style={{
                  position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                  width: 20, height: 2, borderRadius: 99, background: '#d2691e'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '6px 8px', cursor: 'pointer', color: '#fff', display: 'none' }}
          className="nav-mobile-btn"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ padding: '0.75rem 1rem 1rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map(link => (
                <button
                  key={link.to}
                  onClick={() => { setPage(link.to); setOpen(false); }}
                  style={{
                    background: active === link.to ? 'rgba(210,105,30,0.18)' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    padding: '0.75rem 1rem', borderRadius: 12,
                    color: active === link.to ? '#fff' : '#c5cce8',
                    textAlign: 'left', fontFamily: 'DM Sans', fontSize: '0.95rem',
                    fontWeight: active === link.to ? 600 : 400,
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
