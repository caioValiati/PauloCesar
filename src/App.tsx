import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1,
        delay: 0.5
      }}
      className="app">
      <Header />
      <div className="page-container lg:pl-28 md:pl-16 pl-5">
        <Home />
        <Services />
        <Contact />
      </div>

    </motion.div>
  );
}

export default App
