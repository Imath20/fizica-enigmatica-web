
export interface Subpunct {
  id: string;
  cerinta: string;
  punctaj: number;
}

export interface Problema {
  id: string;
  index: number;
  titlu: string;
  descriere: string;
  categorie: 'unde' | 'pendule' | 'seisme' | 'difractie';
  dificultate: 'usoare' | 'medii' | 'grele' | 'dificile';
  cerinte: string[];
  subpuncte: Subpunct[];
  punctajTotal: number;
  continut: string;
  formule?: string[];
  date?: {
    [key: string]: string | number;
  };
}
