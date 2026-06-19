# Télédéclaration des salariés — CNSS Tunisie (Angular 21)

Application Angular 21 (composants **standalone**, **signals**, nouveau control-flow `@if`/`@for`/`@switch`).

## Fonctionnalités

- **Header** : logo CNSS Tunisie + titre « Télédéclaration des salariés ».
- **Menu vertical** : Profil · Déclaration · Attestation du solde · Comptes bancaires.
- **Profil** : résultat des 3 appels d'API (identité employeur, codes d'exploitation, taux ATMP).
- **Déclaration** : sous-menus (Déclarer DS, Liste DS en cours, État récap, Historique) — le tableau « Liste DS en cours » reproduit l'image fournie.

## Installation & lancement

```bash
npm install
npm start
```

Ouvrir http://localhost:4200

## Brancher de vraies APIs

Les données sont actuellement simulées dans
`src/app/core/services/cnss.service.ts`. Pour utiliser de vraies APIs,
injectez `HttpClient` (déjà fourni dans `app.config.ts`) et remplacez les
`of(...)` par des `this.http.get<...>('https://.../api/...')`.
