
import { GoogleGenAI, Type } from "@google/genai";

// Initialize with the exact structure required by the guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDigitalDiagnostic = async (niche: string, audienceSize: string, currentStatus: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Com base nas seguintes informações de um Expert:
        Nicho: ${niche}
        Tamanho da Audiência: ${audienceSize}
        Status Atual: ${currentStatus}
        
        Atue como o time de operações da LCAI. Crie um diagnóstico operacional resumido em JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: { type: Type.STRING, description: "Estratégia sugerida (ex: Escala de Low Ticket ou Mentoria High Ticket)" },
            suggestedFunnel: { type: Type.STRING, description: "Tipo de funil recomendado" },
            operationalComplexity: { type: Type.STRING, description: "Nível de suporte operacional necessário" },
            potentialROI: { type: Type.STRING, description: "Estimativa de retorno sobre investimento operacional" }
          },
          required: ["strategy", "suggestedFunnel", "operationalComplexity", "potentialROI"]
        }
      }
    });

    // Access the .text property directly and handle potential undefined values
    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};