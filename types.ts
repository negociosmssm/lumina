// Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Values {
  title: string;
  description: string;
}