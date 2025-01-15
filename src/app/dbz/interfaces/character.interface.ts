

export interface Character {
  id?:   string;
  name:  string;
  power: number;
  habilidades?: Habilidad[];
}

export interface Habilidad {
  name?: string;
  damage?: number;
  type?: string;
}
