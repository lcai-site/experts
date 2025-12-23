
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import OperationScales from './components/OperationScales.tsx';
import ExpertSection from './components/ExpertSection.tsx';
import AIDiagnostic from './components/AIDiagnostic.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="stats" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Stats />
          </div>
        </section>

        <section id="operacao" className="py-24 px-4 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Operações Full-Service</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Da concepção do produto à escala global. A LCAI gerencia a complexidade para que você foque na sua genialidade.
              </p>
            </div>
            <OperationScales />
          </div>
        </section>

        <section id="experts" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <ExpertSection />
          </div>
        </section>

        <section id="ai-diagnostic" className="py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <AIDiagnostic />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
