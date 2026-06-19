import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  CodeExploitation,
  DeclarationEnCours,
  IdentiteEmployeur,
  TauxAtmp,
} from '../models/cnss.models';

/**
 * Service simulant les appels aux 3 APIs du profil employeur
 * ainsi que la liste des déclarations en cours.
 *
 * Pour brancher de vraies APIs, injectez HttpClient et remplacez
 * les `of(...)` par `this.http.get<...>('https://.../api/...')`.
 */
@Injectable({ providedIn: 'root' })
export class CnssService {
  private readonly latency = 400;

  /** API 1 : identité employeur */
  getIdentiteEmployeur(): Observable<IdentiteEmployeur> {
    return of({
      employeur: '00100070',
      raisonSociale: 'EMPLOYEUR TEST CNSS',
      adresse: 'AVENUE DE MADRID',
      bureau: '81-TUNIS CENTRE',
      dateAffiliation: '2021-06-11',
      regime: '100-REGIME GENERAL',
      exoneration: '0 / secteur normal',
    }).pipe(delay(this.latency));
  }

  /** API 2 : les codes d'exploitation */
  getCodesExploitation(): Observable<CodeExploitation[]> {
    return of([
      {
        code: '0',
        libelle: 'REGIME GENERAL',
        dateDebut: '2021-01-01',
        dateFin: 'Thu Dec 23 00:00:00 GMT+01:00 2021',
      },
    ]).pipe(delay(this.latency));
  }

  /** API 3 : Taux ATMP */
  getTauxAtmp(): Observable<TauxAtmp[]> {
    return of([
      {
        reference: '500',
        taux: 0.6,
        bonusMalus: 0,
        tauxApplique: 0.6,
        dateDebut: '',
        dateFin: '',
      },
    ]).pipe(delay(this.latency));
  }

  /** Sous-menu : Liste des DS en cours */
  getDeclarationsEnCours(): Observable<DeclarationEnCours[]> {
    return of([
      {
        codeExp: '0',
        ordre: '0',
        nbreSalaries: 1,
        salaireTotal: 3000,
        cotisationTotale: 790.5,
        dateModification: '2021/12/23',
        mode: 'Saisie',
        etatDS: 'Déclaration saisie',
      },
    ]).pipe(delay(this.latency));
  }
}
