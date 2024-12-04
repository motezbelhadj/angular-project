import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Session } from '../../models/types';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timetable">
      <h2>Weekly Timetable</h2>
      <div class="timetable-grid">
        <div class="time-slots">
          <div *ngFor="let hour of hours" class="time-slot">
            {{hour}}:00
          </div>
        </div>
        <div *ngFor="let day of days" class="day-column">
          <div class="day-header">{{day}}</div>
          <div *ngFor="let session of getSessionsForDay(day)" 
               class="session"
               [style.grid-row-start]="getSessionStartPosition(session)"
               [style.grid-row-end]="getSessionEndPosition(session)">
            {{session.session_id}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timetable {
      padding: 20px;
    }
    .timetable-grid {
      display: grid;
      grid-template-columns: 80px repeat(5, 1fr);
      gap: 1px;
      background: #eee;
      border: 1px solid #ddd;
    }
    .time-slots {
      background: #f5f5f5;
    }
    .time-slot {
      height: 60px;
      padding: 5px;
      border-bottom: 1px solid #ddd;
    }
    .day-column {
      position: relative;
      background: white;
    }
    .day-header {
      padding: 10px;
      text-align: center;
      font-weight: bold;
      background: #f5f5f5;
      border-bottom: 1px solid #ddd;
    }
    .session {
      position: absolute;
      width: 90%;
      margin: 0 5%;
      background: #e3f2fd;
      border: 1px solid #90caf9;
      border-radius: 4px;
      padding: 5px;
      font-size: 0.9em;
    }
  `]
})
export class TimetableComponent implements OnInit {
  sessions: Session[] = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  hours = Array.from({length: 12}, (_, i) => i + 8); // 8:00 to 19:00

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSessions().subscribe(sessions => {
      this.sessions = sessions;
    });
  }

  getSessionsForDay(day: string): Session[] {
    return this.sessions.filter(session => {
      const date = new Date(session.session_date);
      return this.days[date.getDay() - 1] === day;
    });
  }

  getSessionStartPosition(session: Session): number {
    const [hours] = session.start_time.split(':').map(Number);
    return (hours - 7) * 2;
  }

  getSessionEndPosition(session: Session): number {
    const [hours] = session.end_time.split(':').map(Number);
    return (hours - 7) * 2;
  }
}