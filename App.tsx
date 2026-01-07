
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import OperationScales from './components/OperationScales.tsx';
import OperationalCore from './components/OperationalCore.tsx';
import SalesFunnels from './components/SalesFunnels.tsx';
import ExpertSection from './components/ExpertSection.tsx';
import TeamSection from './components/TeamSection.tsx';
import AIDiagnostic from './components/AIDiagnostic.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <section id="stats" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Stats />
          </div>
        </section>

        <section id="diferenciais" className="py-24 px-6 relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto">
            <OperationalCore />
          </div>
        </section>

        <section id="lideranca" className="py-24 px-6 bg-slate-900/10">
          <TeamSection />
        </section>

        <section id="funis">
          <SalesFunnels />
        </section>

        <section id="operacao" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Operation Mapping</span>
              <h2 className="text-3xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase leading-none">Estrutura de Escala</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-medium">
                Do Low ao High Ticket: operamos com a infraestrutura mais eficiente do mercado para garantir a sua margem de lucro.
              </p>
            </div>
            <OperationScales />
          </div>
        </section>

        <section id="experts" className="py-24 px-6 bg-slate-900/5">
          <div className="max-w-7xl mx-auto">
            <ExpertSection />
          </div>
        </section>

        <section id="ai-diagnostic" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <AIDiagnostic />
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default App;
