import { Component } from '@angular/core';
import { TimetableComponent } from './components/timetable/timetable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimetableComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>Timetable Management System</h1>
      </header>
      <main>
        <app-timetable></app-timetable>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .app-header {
      background-color: #1976d2;
      color: white;
      padding: 1rem;
      margin-bottom: 2rem;
    }

    .app-header h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `]
})
export class AppComponent {}