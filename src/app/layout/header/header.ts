import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="header__brand">
        <div class="logo" aria-label="Logo CNSS Tunisie">
          <svg viewBox="0 0 64 64" width="46" height="46" role="img">
            <circle cx="32" cy="32" r="30" fill="#fff" />
            <circle cx="32" cy="32" r="30" fill="none" stroke="#8a1538" stroke-width="3" />
            <text
              x="32"
              y="38"
              text-anchor="middle"
              font-size="18"
              font-weight="700"
              fill="#8a1538"
              font-family="Open Sans, sans-serif"
            >
              CNSS
            </text>
          </svg>
        </div>
        <div class="header__titles">
          <span class="header__org">CNSS Tunisie · Caisse Nationale de Sécurité Sociale</span>
          <h1 class="header__app">Télédéclaration des salariés</h1>
        </div>
      </div>
      <div class="header__user">
        <span class="header__user-name">EMPLOYEUR TEST CNSS</span>
        <button class="header__logout" type="button">Déconnexion</button>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.7rem 1.6rem;
        background: linear-gradient(90deg, #8a1538, #6e1029);
        color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }
      .header__brand {
        display: flex;
        align-items: center;
        gap: 0.9rem;
      }
      .logo {
        background: #fff;
        border-radius: 50%;
        padding: 2px;
        display: flex;
        line-height: 0;
      }
      .header__titles {
        display: flex;
        flex-direction: column;
      }
      .header__org {
        font-size: 0.72rem;
        opacity: 0.85;
        letter-spacing: 0.3px;
      }
      .header__app {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.3px;
      }
      .header__user {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.85rem;
      }
      .header__logout {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.4);
        color: #fff;
        padding: 0.35rem 0.8rem;
        border-radius: 5px;
        cursor: pointer;
      }
      .header__logout:hover {
        background: rgba(255, 255, 255, 0.28);
      }
      @media (max-width: 640px) {
        .header__app {
          font-size: 1rem;
        }
        .header__user-name {
          display: none;
        }
      }
    `,
  ],
})
export class Header {}
