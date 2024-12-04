import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../models/session.model';
import { SessionCardComponent } from '../session-card/session-card.component';

@Component({
  selector: 'app-day-column',
  standalone: true,
  imports: [CommonModule, SessionCardComponent],
  template: `
    <div class="day-column">
      <div class="day-header">{{ day }}</div>
      <div class="sessions-container">
        <app-session-card 
          *ngFor="let session of sessions" 
          [session]="session">
        </app-session-card>
      </div>
    </div>
  `,
  styles: [`
    .day-column {
      background: white;
      min-height: 100%;
    }

    .day-header {
      padding: 8px;
      background: #f0f0f0;
      font-weight: bold;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    .sessions-container {
      padding: 4px;
    }
  `]
})
export class DayColumnComponent {
  @Input() day!: string;
  @Input() sessions: Session[] = [];
}