import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TimetableComponent } from './app/components/timetable/timetable.component';
import { SessionListComponent } from './app/components/session-list/session-list.component';
import { ManagementComponent } from './app/components/management/management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimetableComponent, SessionListComponent, ManagementComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>TimeTable Management System</h1>
      </header>
      <main>
        <app-management></app-management>
        <app-timetable></app-timetable>
        <app-session-list></app-session-list>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f5f5f5;
    }
    .app-header {
      background: #2196f3;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class App {
  name = 'TimeTable App';
}

bootstrapApplication(App);