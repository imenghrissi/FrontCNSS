export interface IdentiteEmployeur {
  employeur: string;
  raisonSociale: string;
  adresse: string;
  bureau: string;
  dateAffiliation: string;
  regime: string;
  exoneration: string;
}

export interface CodeExploitation {
  code: string;
  libelle: string;
  dateDebut: string;
  dateFin: string;
}

export interface TauxAtmp {
  reference: string;
  taux: number;
  bonusMalus: number;
  tauxApplique: number;
  dateDebut: string;
  dateFin: string;
}

export interface DeclarationEnCours {
  codeExp: string;
  ordre: string;
  nbreSalaries: number;
  salaireTotal: number;
  cotisationTotale: number;
  dateModification: string;
  mode: string;
  etatDS: string;
}
