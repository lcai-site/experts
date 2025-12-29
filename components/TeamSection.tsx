
import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <div className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Os Especialistas por trás da Escala</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Unimos a precisão da engenharia de dados com o poder da persuasão estratégica para construir operações inabaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Card Luís Ricardo Camacho */}
          <div className="group relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
            <div className="relative glass p-4 md:p-6 rounded-[40px] border-white/5 overflow-hidden transition-all hover:scale-[1.01]">
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-8 relative">
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
              <div className="px-4 pb-4 text-center md:text-left">
                <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase mb-2 block">Data & Business Strategy</span>
                <h3 className="text-4xl font-black text-white mb-1">Luís Ricardo Camacho</h3>
                <h4 className="text-xl font-bold text-blue-100/80 mb-4">Especialista em Dados e Estrategista Digital</h4>
                <p className="text-slate-400 leading-relaxed text-sm italic">
                  "Minha missão é garantir que cada centavo investido seja rastreado e que a infraestrutura suporte milhões em vendas com o menor custo operacional possível."
                </p>
              </div>
            </div>
          </div>

          {/* Card Camila Nogueira Bezerra */}
          <div className="group relative">
            <div className="absolute inset-0 bg-purple-600/10 blur-[60px] rounded-full group-hover:bg-purple-600/20 transition-all"></div>
            <div className="relative glass p-4 md:p-6 rounded-[40px] border-white/5 overflow-hidden transition-all hover:scale-[1.01]">
              <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-8 relative">
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
              <div className="px-4 pb-4 text-center md:text-left">
                <span className="text-[10px] font-black tracking-[0.3em] text-purple-400 uppercase mb-2 block">Strategy & Copywriting</span>
                <h3 className="text-4xl font-black text-white mb-1">Camila Nogueira Bezerra</h3>
                <h4 className="text-xl font-bold text-purple-100/80 mb-4">Copywriter e Estrategista Digital</h4>
                <p className="text-slate-400 leading-relaxed text-sm italic">
                  "Transformo a expertise do autor em uma mensagem magnética. Criamos narrativas que não apenas vendem, mas constroem legados e autoridade no mercado."
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
