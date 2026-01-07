
import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white">Liderança Especializada</h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Engenharia de dados e persuasão estratégica para construir operações inabaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          {/* Card Luís Ricardo Camacho */}
          <div className="group relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[40px] md:blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
            <div className="relative glass p-3 md:p-6 rounded-[32px] md:rounded-[40px] border-white/5 overflow-hidden transition-all hover:scale-[1.01]">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] mb-6 md:mb-8 relative">
                <img 
                  src="https://midias.lcai.com.br/images/2025/12/29/Design-sem-nome-8.png" 
                  alt="Luís Ricardo Camacho" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="px-2 md:px-4 pb-4 text-center md:text-left">
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase mb-2 block">Data & Business Strategy</span>
                <h3 className="text-xl md:text-4xl font-black text-white mb-1">Luís Ricardo Camacho</h3>
                <h4 className="text-sm md:text-xl font-bold text-blue-100/80 mb-3 md:mb-4">Estrategista de Dados</h4>
                <p className="text-slate-400 leading-relaxed text-[10px] md:text-sm italic">
                  "Garantimos que cada centavo seja rastreado e que a infraestrutura suporte milhões com o menor custo."
                </p>
              </div>
            </div>
          </div>

          {/* Card Camila Nogueira Bezerra */}
          <div className="group relative">
            <div className="absolute inset-0 bg-purple-600/10 blur-[40px] md:blur-[60px] rounded-full group-hover:bg-purple-600/20 transition-all"></div>
            <div className="relative glass p-3 md:p-6 rounded-[32px] md:rounded-[40px] border-white/5 overflow-hidden transition-all hover:scale-[1.01]">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] mb-6 md:mb-8 relative">
                <img 
                  src="https://midias.lcai.com.br/images/2025/12/29/Design-sem-nome-7.png" 
                  alt="Camila Nogueira Bezerra" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="px-2 md:px-4 pb-4 text-center md:text-left">
                <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase mb-2 block">Strategy & Copywriting</span>
                <h3 className="text-xl md:text-4xl font-black text-white mb-1">Camila Nogueira Bezerra</h3>
                <h4 className="text-sm md:text-xl font-bold text-purple-100/80 mb-3 md:mb-4">Estrategista de Copy</h4>
                <p className="text-slate-400 leading-relaxed text-[10px] md:text-sm italic">
                  "Transformo expertise em mensagens magnéticas que constroem legados e vendem."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
