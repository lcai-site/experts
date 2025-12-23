
import React, { useState } from 'react';
import { getDigitalDiagnostic } from '../services/gemini';
import { DiagnosticResult } from '../types';

const AIDiagnostic: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [audience, setAudience] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const diag = await getDigitalDiagnostic(niche, audience, status);
      setResult(diag);
    } catch (err) {
      alert('Erro ao gerar diagnóstico. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass p-8 md:p-12 rounded-[40px]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Simulação Operacional LCAI (IA)</h2>
        <p className="text-slate-400">Descubra em segundos qual a melhor estrutura operacional para o seu momento atual.</p>
      </div>

      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Seu Nicho</label>
              <input 
                type="text" 
                placeholder="Ex: Finanças, Marketing, Saúde..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Tamanho da Audiência</label>
              <input 
                type="text" 
                placeholder="Ex: 50k Instagram, 10k Email..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Qual o seu maior gargalo hoje?</label>
            <textarea 
              rows={3}
              placeholder="Ex: Não consigo dar suporte, tecnologia é confusa, checkout trava..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
          <button 
            disabled={loading}
            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${loading ? 'bg-slate-800 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02]'}`}
          >
            {loading ? 'LCAI Intelligence está processando...' : 'Gerar Meu Diagnóstico Grátis'}
          </button>
        </form>
      ) : (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <h4 className="text-blue-400 text-xs font-bold uppercase mb-2">Estratégia Recomendada</h4>
              <p className="text-xl font-bold">{result.strategy}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="text-slate-500 text-xs font-bold uppercase mb-2">Funil de Vendas</h4>
              <p className="text-xl font-bold">{result.suggestedFunnel}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="text-slate-500 text-xs font-bold uppercase mb-2">Complexidade de Gestão</h4>
              <p className="text-xl font-bold">{result.operationalComplexity}</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <h4 className="text-green-400 text-xs font-bold uppercase mb-2">ROI Potencial</h4>
              <p className="text-xl font-bold">{result.potentialROI}</p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm italic">
              Este é um diagnóstico preliminar gerado pela nossa IA. Para uma análise técnica completa de infraestrutura, agende uma reunião com nossos engenheiros de operação.
            </p>
          </div>

          <button 
            onClick={() => setResult(null)}
            className="w-full py-4 glass text-sm font-bold rounded-xl"
          >
            Novo Diagnóstico
          </button>
        </div>
      )}
    </div>
  );
};

export default AIDiagnostic;
