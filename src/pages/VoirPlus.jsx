import { motion } from 'framer-motion';

const seeMoreText = {
  fr: {
    tag: 'En savoir plus',
    title: 'Mieux comprendre Ambohipisaka',
    intro: 'Toutes les informations pour mieux comprendre la vie à Ambohipisaka.',
    quarterTitle: 'Les quartiers',
    quarterText: 'Amboniandrefana et Andafiavaratra sont des quartiers dynamiques où les familles cultivent leurs champs et partagent des moments de solidarité.',
    dailyTitle: 'Vie quotidienne',
    dailyText: 'Le village vit au rythme des saisons : culture du riz, élevage, préparation des repas et fêtes de village.',
    imagesTitle: 'Images de la vie locale',
    imagesText: 'Découvrez quelques aspects de la vie quotidienne à Ambohipisaka.',
    mapTitle: 'Carte du village',
    mapText: 'Voici une carte pour localiser le village dans la région Bongolava.',
    mapLink: 'Voir en grand sur OpenStreetMap →',
  },
  mg: {
    tag: 'Hafatra fanampiny',
    title: 'Mahazo mafy ny Ambohipisaka',
    intro: 'Ny fampahalalana rehetra hahatakarana ny fiainana any Ambohipisaka.',
    quarterTitle: 'Faritra/zanatany',
    quarterText: 'Amboniandrefana sy Andafiavaratra no faritra mavitrika ahitana ny fianakaviana mandavaka ny tanimbary ary mizara ny fiaraha-miasa.',
    dailyTitle: 'Fiainana andavanandro',
    dailyText: 'Ny vohitra dia miaina amin\'ny vanim-potoana : fambolena vary, fiompiana, fanamboarana sakafo ary fetin\'ny vohitra.',
    imagesTitle: 'Sary momba ny fiainana eo an-toerana',
    imagesText: 'Jereo ny lafiny sasantsasany amin\'ny fiainana andavanandro any Ambohipisaka.',
    mapTitle: 'Sarintanin\'ny vohitra',
    mapText: 'Ity no sarintany ahafantarana ny toerana ao amin\'ny faritra Bongolava.',
    mapLink: 'Jereo lehibe amin\'ny OpenStreetMap →',
  },
};

export default function VoirPlus({ language = 'fr' }) {
  const text = seeMoreText[language] || seeMoreText.fr;

  return (
    <div style={{ paddingTop: 64 }}>
      <section style={{ padding: '5rem 1.5rem 3rem', textAlign: 'center', background: 'linear-gradient(180deg,#090b1a,#06081c)' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span style={{ color: '#d2691e', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>{text.tag}</span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: '#fff', margin: '0.5rem 0 1rem' }}>
            {text.title}
          </h1>
          <p style={{ color: '#9aa3c4', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            {text.intro}
          </p>
        </motion.div>
      </section>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        {[
          { title: text.quarterTitle, content: text.quarterText },
          { title: text.dailyTitle, content: text.dailyText },
          { title: text.imagesTitle, content: text.imagesText },
        ].map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{ ...cardStyle, marginBottom: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>{s.title}</h2>
            <p style={{ color: '#9aa3c4', lineHeight: 1.8 }}>{s.content}</p>
          </motion.div>
        ))}

        {/* Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[401,402,403,404].map((n, i) => (
            <motion.div key={n}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              style={{ borderRadius: 16, overflow: 'hidden' }}
            >
              <img src={`https://picsum.photos/400/300?random=${n}`} alt="Ambohipisaka"
                style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={cardStyle}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>{text.mapTitle}</h2>
          <p style={{ color: '#9aa3c4', marginBottom: '1.2rem', lineHeight: 1.7 }}>
            {text.mapText}
          </p>
          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=46.13%2C-18.85%2C46.25%2C-18.73&layer=mapnik"
              style={{ width: '100%', height: 360, border: 'none', display: 'block' }}
              loading="lazy"
              title="Carte d'Ambohipisaka"
            />
          </div>
          <p style={{ marginTop: '0.75rem', textAlign: 'right' }}>
            <a href="https://www.openstreetmap.org/#map=12/-18.79/46.19" target="_blank" rel="noreferrer"
              style={{ color: '#d2691e', fontSize: '0.88rem' }}>
              {text.mapLink}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24, padding: '2rem',
};
