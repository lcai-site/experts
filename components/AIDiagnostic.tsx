
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
      source: 'LCAI Form Site - Expert Audit'
    };

    try {
      const response = await fetch('https://n8n.lcai.com.br/webhook/formsite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) setSubmitted(true);
      else throw new Error('Erro no servidor');
    } catch (err) {
      console.error('Submission error:', err);
      alert('Erro ao enviar. Tente novamente ou use o WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[50px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative glass p-8 md:p-20 rounded-[48px] border-white/10 shadow-3xl overflow-hidden">
        {!submitted ? (
          <>
            <div className="mb-14">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Business Audit 1.0</span>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight italic uppercase">Análise de <br />Escalabilidade</h2>
              <p className="text-slate-400 text-base md:text-lg max-w-xl">Descubra onde sua operação está vazando lucro e como instalar sua máquina de perpétuo em tempo recorde.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome completo"
                    className="w-full bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">WhatsApp com DDD</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Conte um pouco sobre você e seu nicho de atuação</label>
                <textarea 
                  rows={4}
                  placeholder="Fale brevemente sobre sua expertise e o mercado que você domina..."
                  className="w-full bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all placeholder:text-slate-700"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  required
                />
              </div>

              <button 
                disabled={loading}
                className={`w-full py-8 rounded-[24px] font-black text-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-4 ${loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-white text-slate-950 hover:bg-blue-600 hover:text-white shadow-2xl shadow-blue-500/10'}`}
              >
                {loading ? 'PROCESSANDO AUDITORIA...' : 'SOLICITAR ANÁLISE ESTRATÉGICA'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-20 animate-fadeIn">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-blue-500/50">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter italic">Auditoria Recebida</h2>
            <p className="text-slate-400 text-base md:text-xl mb-14 max-w-lg mx-auto">
              Seus dados estão sendo analisados por nosso time de engenharia operacional. Entraremos em contato via WhatsApp em breve.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-14 py-5 glass border border-white/10 rounded-2xl text-[10px] font-black text-white hover:bg-white/10 transition-all uppercase tracking-[0.3em]"
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
