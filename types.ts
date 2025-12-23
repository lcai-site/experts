
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface OperationalScale {
  type: 'Low Ticket' | 'High Ticket' | 'Continuity';
  title: string;
  description: string;
  focus: string[];
  metrics: string;
}

export interface DiagnosticResult {
  strategy: string;
  suggestedFunnel: string;
  operationalComplexity: string;
  potentialROI: string;
  productStaircase: string; // Nova propriedade para o diagnóstico
}
