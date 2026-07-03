import { motion } from 'framer-motion';

export default function Paysage() {
  return (
    <div style={{ paddingTop: 64 }}>
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', background: 'linear-gradient(180deg,#090b1a,#06081c)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>Nature & beauté</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#fff', margin: '0.5rem 0 1rem' }}>
            Paysages et nature
          </h1>
          <p style={{ color: '#9aa3c4', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            Le village d'Ambohipisaka se découvre à travers ses collines, ses rizières et ses chemins bordés de végétation.
          </p>
        </motion.div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        {[
          { title: 'La beauté du village', content: 'Ambohipisaka est entouré d\'une nature généreuse, avec des champs, des bosquets et des vallées qui offrent un cadre calme et reposant.' },
          { title: 'Éléments naturels', content: 'Les rizières, les plantes locales et les petites routes de terre donnent au village une atmosphère authentique et accueillante.' },
        ].map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{ ...cardStyle, marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>{s.title}</h2>
            <p style={{ color: '#9aa3c4', lineHeight: 1.8 }}>{s.content}</p>
          </motion.div>
        ))}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '1rem' }}>
          {[301,302,303,304,305,306].map((n, i) => (
            <motion.div key={n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              style={{ borderRadius: 16, overflow: 'hidden' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 30px rgba(0,0,0,0.4)' }}
            >
              <img src={`https://picsum.photos/400/300?random=${n}`} alt="Paysage d'Ambohipisaka"
                style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24, padding: '2rem',
};
