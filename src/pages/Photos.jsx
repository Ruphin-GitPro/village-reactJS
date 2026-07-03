import { motion } from 'framer-motion';
import { useState } from 'react';

const photos = [
  { id: 201, caption: 'Maison locale d\'Ambohipisaka' },
  { id: 202, caption: 'Paysage naturel et végétation' },
  { id: 203, caption: 'La belle vallée qui entoure le village' },
  { id: 204, caption: 'Vue d\'ensemble du village et ses bâtiments' },
  { id: 205, caption: 'Les champs de riz qui nourrissent la communauté' },
  { id: 206, caption: 'La forêt qui borde le village et ses ressources' },
  { id: 207, caption: 'La rivière qui traverse et apporte la vie' },
  { id: 208, caption: 'Le marché où les habitants se retrouvent' },
  { id: 209, caption: 'Célébrations et moments de joie communautaire' },
  { id: 210, caption: 'La vie quotidienne au village' },
];

export default function Photos() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', background: 'linear-gradient(180deg,#090b1a,#06081c)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>Galerie</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#fff', margin: '0.5rem 0 1rem' }}>
            Photos du village
          </h1>
          <p style={{ color: '#9aa3c4', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Images de la vie quotidienne, des bâtiments et des paysages d'Ambohipisaka.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.2rem' }}>
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
              onClick={() => setSelected(p)}
              style={{
                borderRadius: 18, overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
            >
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={`https://picsum.photos/400/300?random=${p.id}`}
                  alt={p.caption}
                  style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '0.9rem 1rem' }}>
                <p style={{ color: '#9aa3c4', fontSize: '0.88rem', margin: 0 }}>{p.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
            zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <motion.div
            initial={{ scale: 0.85 }} animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 800, width: '100%', borderRadius: 20, overflow: 'hidden', background: '#0a0c1e' }}
          >
            <img src={`https://picsum.photos/800/500?random=${selected.id}`} alt={selected.caption} style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: '#c5cce8', margin: 0 }}>{selected.caption}</p>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#d2691e', cursor: 'pointer', fontSize: '1.3rem', fontWeight: 700 }}>✕</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
