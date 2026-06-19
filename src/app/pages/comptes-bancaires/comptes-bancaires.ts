import { Component } from '@angular/core';

@Component({
  selector: 'app-comptes-bancaires',
  standalone: true,
  template: `
    <h2 class="page-title">Comptes bancaires</h2>
    <section class="cnss-panel">
      <div class="cnss-panel__title">Comptes bancaires</div>
      <div class="placeholder">
      </div>
    </section>
  `,
  styles: [
    `
      .placeholder {
        padding: 2rem 1.2rem;
        color: var(--cnss-muted);
      }
    `,
  ],
})
export class ComptesBancaires {}
