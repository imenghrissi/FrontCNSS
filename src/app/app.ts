import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  template: `
    <div class="app-shell">
      <app-header />
      <div class="app-body">
        <app-sidebar />
        <main class="app-main">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      .app-shell {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .app-body {
        display: flex;
        flex: 1;
        align-items: stretch;
      }
      .app-main {
        flex: 1;
        padding: 1.6rem 2rem;
        overflow-x: auto;
      }
      @media (max-width: 768px) {
        .app-body {
          flex-direction: column;
        }
        .app-main {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class App {}
