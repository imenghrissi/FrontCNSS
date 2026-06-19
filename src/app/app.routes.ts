import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'profil', pathMatch: 'full' },
  {
    path: 'profil',
    loadComponent: () =>
      import('./pages/profil/profil').then((m) => m.Profil),
    title: 'Profil employeur - CNSS',
  },
  {
    path: 'declaration',
    loadComponent: () =>
      import('./pages/declaration/declaration').then((m) => m.Declaration),
    title: 'Déclaration - CNSS',
  },
  {
    path: 'attestation',
    loadComponent: () =>
      import('./pages/attestation/attestation').then((m) => m.Attestation),
    title: 'Attestation du solde - CNSS',
  },
  {
    path: 'comptes-bancaires',
    loadComponent: () =>
      import('./pages/comptes-bancaires/comptes-bancaires').then(
        (m) => m.ComptesBancaires
      ),
    title: 'Comptes bancaires - CNSS',
  },
  { path: '**', redirectTo: 'profil' },
];
