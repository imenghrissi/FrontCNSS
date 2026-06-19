import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sidebar">
      <ul class="menu">
        @for (item of items; track item.path) {
          <li>
            <a
              [routerLink]="item.path"
              routerLinkActive="active"
              class="menu__link"
            >
              <span class="menu__icon">{{ item.icon }}</span>
              <span class="menu__label">{{ item.label }}</span>
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: [
    `
      .sidebar {
        width: 240px;
        flex-shrink: 0;
        background: #fff;
        border-right: 1px solid var(--cnss-border);
        padding: 1rem 0;
      }
      .menu {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .menu__link {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        padding: 0.85rem 1.4rem;
        color: var(--cnss-text);
        font-weight: 600;
        border-left: 4px solid transparent;
        transition: all 0.15s;
      }
      .menu__link:hover {
        background: var(--cnss-row-alt);
        color: var(--cnss-bordeaux);
      }
      .menu__link.active {
        background: var(--cnss-row-alt);
        color: var(--cnss-bordeaux);
        border-left-color: var(--cnss-bordeaux);
      }
      .menu__icon {
        font-size: 1.1rem;
        width: 20px;
        text-align: center;
      }
      @media (max-width: 768px) {
        .sidebar {
          width: 100%;
          border-right: none;
          border-bottom: 1px solid var(--cnss-border);
          padding: 0.4rem 0;
        }
        .menu {
          display: flex;
          flex-wrap: wrap;
        }
        .menu__link {
          padding: 0.6rem 1rem;
          border-left: none;
          border-bottom: 3px solid transparent;
        }
        .menu__link.active {
          border-left: none;
          border-bottom-color: var(--cnss-bordeaux);
        }
      }
    `,
  ],
})
export class Sidebar {
  readonly items: MenuItem[] = [
    { label: 'Profil', path: '/profil', icon: '👤' },
    { label: 'Déclaration', path: '/declaration', icon: '📄' },
    { label: 'Attestation du solde', path: '/attestation', icon: '🧾' },
    { label: 'Comptes bancaires', path: '/comptes-bancaires', icon: '🏦' },
    { label: 'test', path: '/test', icon: '🏦' },

  ];
}
