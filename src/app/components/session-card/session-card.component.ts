import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../models/session.model';

@Component({
  selector: 'app-session-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="session-card">
      <div class="session-time">
        {{ session.start_time }} - {{ session.end_time }}
      </div>
      <div class="session-info">
        <div class="session-title">{{ session.session_id }}</div>
        <div class="session-location">Room: {{ session.room_id }}</div>
      </div>
    </div>
  `,
  styles: [`
    .session-card {
      background: #e3f2fd;
      border-radius: 4px;
      padding: 8px;
      margin: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .session-time {
      font-size: 0.8em;
      color: #666;
      margin-bottom: 4px;
    }

    .session-info {
      font-size: 0.9em;
    }

    .session-title {
      font-weight: 500;
      margin-bottom: 2px;
    }

    .session-location {
      font-size: 0.8em;
      color: #666;
    }
  `]
})
export class SessionCardComponent {
  @Input() session!: Session;
}