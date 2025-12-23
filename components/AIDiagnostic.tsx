
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
    <div className="glass p-8 md:p-12 rounded-[40px] border-white/10 shadow-2xl relative overflow-hidden">
      {!submitted ? (
        <>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Análise de Viabilidade Operacional</h2>
            <p className="text-slate-400">Preencha os dados abaixo para que nosso time de estratégia analise sua operação.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Como gostaria de ser chamado?"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">E-mail Corporativo</label>
                <input 
                  type="email" 
                  placeholder="exemplo@suaempresa.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">WhatsApp (com DDD)</label>
              <input 
                type="tel" 
                placeholder="(00) 00000-0000"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Fale um pouco sobre sua operação atual</label>
              <textarea 
                rows={4}
                placeholder="Quais produtos vende? Qual seu faturamento atual? Quais seus maiores gargalos técnicos?"
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all"
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                required
              />
            </div>

            <button 
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3 ${loading ? 'bg-slate-800 cursor-not-allowed text-slate-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/20'}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando dados...
                </>
              ) : 'Solicitar Diagnóstico Estratégico'}
            </button>
            <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest">Seus dados estão protegidos pela nossa política de privacidade</p>
          </form>
        </>
      ) : (
        <div className="text-center py-10 animate-fadeIn">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Dados Recebidos com Sucesso!</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
            Nossa equipe de estratégia já foi notificada. Em breve um consultor da LCAI entrará em contato via WhatsApp para agendar sua análise técnica.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 glass rounded-xl text-sm font-bold text-white hover:bg-slate-800 transition-all"
          >
            Voltar ao Início
          </button>
        </div>
      )}
    </div>
  );
};

export default AIDiagnostic;
