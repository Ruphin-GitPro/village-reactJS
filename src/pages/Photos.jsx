import { motion } from 'framer-motion';
import { useState } from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';

const photoLabels = {
  fr: {
    gallery: 'Galerie',
    title: 'Photos du village',
    intro: 'Images de la vie quotidienne, des bâtiments et des paysages d\'Ambohipisaka.',
    captions: {
      201: 'Maison traditionnelle d\'Ambohipisaka',
      202: 'Paysage naturel et végétation du village',
      203: 'Vallée et rizières autour du village',
      204: 'Vue du village et de ses habitations',
      205: 'Champs de riz de la communauté',
      206: 'Forêt et espace vert du village',
      207: 'Cours d\'eau et source de vie locale',
      208: 'Échanges et marché du village',
      209: 'Fêtes et moments de célébration',
      210: 'Vie quotidienne à Ambohipisaka',
    },
  },
  mg: {
    gallery: 'Sary',
    title: 'Sary ny vohitra',
    intro: 'Sary momba ny fiainana andavanandro, ny trano, ary ny tany manodidina an\'i Ambohipisaka.',
    captions: {
      201: 'Trano nentim-paharazana any Ambohipisaka',
      202: 'Tendrombohitra sy ahitra manodidina ny vohitra',
      203: 'Valley sy tanimboly manodidina ny vohitra',
      204: 'Fisehoan-javatra amin\'ny vohitra sy ny trano',
      205: 'Tanimboly vary manome sakafo ny vondrom-piarahamonina',
      206: 'Alan-kely sy faritra maitso manodidina ny vohitra',
      207: 'Rano mikoriana manome aina eny amin\'ny vohitra',
      208: 'Tetezamita sy tsena eo an-toerana',
      209: 'Fetin-kizitry sy lanonana fifaliana',
      210: 'Fiainana andavanandro any Ambohipisaka',
    },
  },
};

const photos = [
  { id: 201, captionFr: 'Maison traditionnelle d\'Ambohipisaka', captionMg: 'Trano nentim-paharazana any Ambohipisaka', image: image1 },
  { id: 202, captionFr: 'Paysage naturel et végétation du village', captionMg: 'Tendrombohitra sy ahitra manodidina ny vohitra', image: image2 },
  { id: 203, captionFr: 'Vallée et rizières autour du village', captionMg: 'Valley sy tanimboly manodidina ny vohitra', image: image3 },
  { id: 204, captionFr: 'Vue du village et de ses habitations', captionMg: 'Fisehoan-javatra amin\'ny vohitra sy ny trano', image: image4 },
  { id: 205, captionFr: 'Champs de riz de la communauté', captionMg: 'Tanimboly vary manome sakafo ny vondrom-piarahamonina', image: image5 },
  { id: 206, captionFr: 'Forêt et espace vert du village', captionMg: 'Alan-kely sy faritra maitso manodidina ny vohitra', image: image6 },
  { id: 207, captionFr: 'Cours d\'eau et source de vie locale', captionMg: 'Rano mikoriana manome aina eny amin\'ny vohitra' },
  { id: 208, captionFr: 'Échanges et marché du village', captionMg: 'Tetezamita sy tsena eo an-toerana' },
  { id: 209, captionFr: 'Fêtes et moments de célébration', captionMg: 'Fetin-kizitry sy lanonana fifaliana' },
  { id: 210, captionFr: 'Vie quotidienne à Ambohipisaka', captionMg: 'Fiainana andavanandro any Ambohipisaka' },
];

export default function Photos({ language = 'fr' }) {
  const [selected, setSelected] = useState(null);
  const labels = photoLabels[language] || photoLabels.fr;

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', background: 'linear-gradient(180deg,#090b1a,#06081c)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{labels.gallery}</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#fff', margin: '0.5rem 0 1rem' }}>
            {labels.title}
          </h1>
          <p style={{ color: '#9aa3c4', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            {labels.intro}
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '1.2rem' }}>
          {photos.map((p, i) => {
            const caption = language === 'mg' ? p.captionMg : p.captionFr;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
                onClick={() => setSelected({ ...p, caption })}
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
                    src={p.image || `https://picsum.photos/400/300?random=${p.id}`}
                    alt={caption}
                    style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '0.9rem 1rem' }}>
                  <p style={{ color: '#9aa3c4', fontSize: '0.88rem', margin: 0 }}>{caption}</p>
                </div>
              </motion.div>
            );
          })}
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
            <img src={selected.image || `https://picsum.photos/800/500?random=${selected.id}`} alt={selected.caption} style={{ width: '100%', display: 'block' }} />
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
