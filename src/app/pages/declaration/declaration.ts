import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CnssService } from '../../core/services/cnss.service';

type SubMenu = 'declarer' | 'liste' | 'recap' | 'historique';

@Component({
  selector: 'app-declaration',
  standalone: true,
  template: `
    <h2 class="page-title">Déclaration</h2>

    <!-- Sous-menus -->
    <div class="tabs">
      @for (tab of tabs; track tab.key) {
        <button
          type="button"
          class="tab"
          [class.tab--active]="active() === tab.key"
          (click)="active.set(tab.key)"
        >
          {{ tab.label }}
        </button>
      }
    </div>

    <div class="tab-content">
      @switch (active()) {
        @case ('declarer') {
          <section class="cnss-panel">
            <div class="cnss-panel__title">Déclarer DS</div>
            <div class="placeholder">
              <p>Formulaire de saisie d'une nouvelle déclaration des salariés.</p>
            </div>
          </section>
        }

        @case ('liste') {
          <!-- Liste DS en cours (image jointe) -->
          <section class="cnss-panel">
            <div class="cnss-panel__title">Liste DS en cours</div>
            <table class="cnss-table center">
              <thead>
                <tr>
                  <th>code exp</th>
                  <th>Ordre</th>
                  <th>Nbre salariés</th>
                  <th>salaire total</th>
                  <th>Cotisation totale</th>
                  <th>Date modification de la DS</th>
                  <th>Mode</th>
                  <th>etat DS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (d of declarations(); track $index) {
                  <tr>
                    <td>{{ d.codeExp }}</td>
                    <td>{{ d.ordre }}</td>
                    <td>{{ d.nbreSalaries }}</td>
                    <td>{{ d.salaireTotal }}</td>
                    <td>{{ d.cotisationTotale }}</td>
                    <td>{{ d.dateModification }}</td>
                    <td>{{ d.mode }}</td>
                    <td><span class="badge badge--saisie">{{ d.etatDS }}</span></td>
                    <td class="actions">
                      <button class="action-btn" title="Modifier">✏️</button>
                      <button class="action-btn" title="Valider">🔒</button>
                      <button class="action-btn" title="Imprimer">🖨️</button>
                      <button class="action-btn" title="Détail">📄</button>
                      <button class="action-btn" title="Supprimer">🗑️</button>
                    </td>
                  </tr>
                } @empty {
                  <tr><td colspan="9" class="placeholder">Aucune déclaration en cours.</td></tr>
                }
              </tbody>
            </table>
          </section>
        }

        @case ('recap') {
          <section class="cnss-panel">
            <div class="cnss-panel__title">Etat récapitulatif</div>
            <div class="placeholder">
              <p>État récapitulatif des cotisations par période.</p>
            </div>
          </section>
        }

        @case ('historique') {
          <section class="cnss-panel">
            <div class="cnss-panel__title">Historique des déclarations</div>
            <div class="placeholder">
              <p>Historique des déclarations validées et transmises.</p>
            </div>
          </section>
        }
      }
    </div>
  `,
  styles: [
    `
      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 1.2rem;
        border-bottom: 2px solid var(--cnss-border);
      }
      .tab {
        background: #fff;
        border: 1px solid var(--cnss-border);
        border-bottom: none;
        padding: 0.65rem 1.1rem;
        font-weight: 600;
        color: var(--cnss-text);
        cursor: pointer;
        border-radius: 6px 6px 0 0;
        transition: all 0.15s;
      }
      .tab:hover {
        color: var(--cnss-bordeaux);
      }
      .tab--active {
        background: var(--cnss-bordeaux);
        color: #fff;
        border-color: var(--cnss-bordeaux);
      }
      .placeholder {
        padding: 2rem 1.2rem;
        color: var(--cnss-muted);
      }
      .actions {
        white-space: nowrap;
      }
    `,
  ],
})
export class Declaration {
  private readonly cnss = inject(CnssService);

  readonly active = signal<SubMenu>('liste');

  readonly tabs: { key: SubMenu; label: string }[] = [
    { key: 'declarer', label: 'Déclarer DS' },
    { key: 'liste', label: 'Liste DS en cours' },
    { key: 'recap', label: 'Etat récap' },
    { key: 'historique', label: 'Historique des déclarations' },
  ];

  readonly declarations = toSignal(this.cnss.getDeclarationsEnCours(), {
    initialValue: [],
  });
}
