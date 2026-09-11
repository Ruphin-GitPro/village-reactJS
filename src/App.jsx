import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historique from './pages/Historique';
import Photos from './pages/Photos';
import Paysage from './pages/Paysage';
import VoirPlus from './pages/VoirPlus';
import './index.css';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default function App() {
  const [page, setPage] = useState('/');
  const [language, setLanguage] = useState('fr');

  const handleSetPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case '/': return <PageWrapper key="home"><Home setPage={handleSetPage} language={language} /></PageWrapper>;
      case '/historique': return <PageWrapper key="hist"><Historique /></PageWrapper>;
      case '/photos': return <PageWrapper key="photos"><Photos /></PageWrapper>;
      case '/paysage': return <PageWrapper key="paysage"><Paysage /></PageWrapper>;
      case '/voirplus': return <PageWrapper key="voirplus"><VoirPlus /></PageWrapper>;
      default: return <PageWrapper key="home2"><Home setPage={handleSetPage} language={language} /></PageWrapper>;
    }
  };

  return (
    <>
      <Navbar active={page} setPage={handleSetPage} language={language} setLanguage={setLanguage} />
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      <Footer setPage={handleSetPage} language={language} setLanguage={setLanguage} />
    </>
  );
}
