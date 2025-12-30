
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import OperationScales from './components/OperationScales.tsx';
import OperationalCore from './components/OperationalCore.tsx';
import ExpertSection from './components/ExpertSection.tsx';
import TeamSection from './components/TeamSection.tsx';
import AIDiagnostic from './components/AIDiagnostic.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="stats" className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Stats />
          </div>
        </section>

        <section id="diferenciais" className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
          <div className="max-w-7xl mx-auto">
            <OperationalCore />
          </div>
        </section>

        <section id="lideranca" className="bg-slate-900/10">
          <TeamSection />
        </section>

        <section id="operacao" className="py-16 md:py-24 px-4 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Estrutura de Escala</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                Do Low ao High Ticket: operamos com a infraestrutura mais eficiente do mercado para garantir a sua margem de lucro.
              </p>
            </div>
            <OperationScales />
          </div>
        </section>

        <section id="experts" className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <ExpertSection />
          </div>
        </section>

        <section id="ai-diagnostic" className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
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
