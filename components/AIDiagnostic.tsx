
import React, { useState } from 'react';

const AIDiagnostic: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [operation, setOperation] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name,
      email,
      phone,
      operation,
      timestamp: new Date().toISOString(),
      source: 'LCAI Form Site'
    };

    try {
      const response = await fetch('https://n8n.lcai.com.br/webhook/formsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Erro no servidor');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[42px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative glass p-8 md:p-16 rounded-[40px] border-white/10 shadow-2xl overflow-hidden">
        {!submitted ? (
          <>
            <div className="mb-12">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Engine Analytics</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-none">Análise de Viabilidade</h2>
              <p className="text-slate-400 text-lg max-w-xl">Preencha os dados técnicos para que nosso time de engenharia estruture sua análise estratégica.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Nome do Expert</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-slate-900/80 border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">E-mail Operacional</label>
                  <input 
                    type="email" 
                    placeholder="contato@empresa.com"
                    className="w-full bg-slate-900/80 border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">WhatsApp de Contato</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-slate-900/80 border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Status da Operação Atual</label>
                <textarea 
                  rows={4}
                  placeholder="Gargalos, faturamento, equipe atual..."
                  className="w-full bg-slate-900/80 border border-white/5 rounded-2xl p-5 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all placeholder:text-slate-700"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  required
                />
              </div>

              <button 
                disabled={loading}
                className={`w-full py-6 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-4 ${loading ? 'bg-slate-800 cursor-not-allowed text-slate-500' : 'bg-white text-slate-950 hover:bg-blue-600 hover:text-white shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)]'}`}
              >
                {loading ? (
                  <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'SUBMETER DADOS PARA ANÁLISE'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-16 animate-fadeIn">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/50">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-black mb-6 text-white uppercase tracking-tighter">Sincronização Iniciada</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md mx-auto">
              Seus dados foram processados com sucesso. Nossa equipe estratégica entrará em contato via WhatsApp em breve.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-12 py-4 glass-bright border border-white/20 rounded-xl text-xs font-black text-white hover:bg-white/10 transition-all uppercase tracking-widest"
            >
              Voltar ao Início
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDiagnostic;
