import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Session, Teacher, Room, Subject } from '../../models/types';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="session-list">
      <h2>Sessions</h2>
      <div class="sessions">
        <div *ngFor="let session of sessions" class="session-card">
          <div class="session-header">
            <h3>{{getSubjectName(session.subject_id)}}</h3>
            <span class="time">{{session.start_time}} - {{session.end_time}}</span>
          </div>
          <div class="session-details">
            <p><strong>Teacher:</strong> {{getTeacherName(session.teacher_id)}}</p>
            <p><strong>Room:</strong> {{getRoomName(session.room_id)}}</p>
            <p><strong>Date:</strong> {{session.session_date}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .session-list {
      padding: 20px;
    }
    .sessions {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .session-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 15px;
    }
    .session-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .session-header h3 {
      margin: 0;
      color: #2196f3;
    }
    .time {
      color: #666;
    }
    .session-details p {
      margin: 5px 0;
    }
  `]
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];
  teachers: Teacher[] = [];
  rooms: Room[] = [];
  subjects: Subject[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSessions().subscribe(sessions => this.sessions = sessions);
    this.dataService.getTeachers().subscribe(teachers => this.teachers = teachers);
    this.dataService.getRooms().subscribe(rooms => this.rooms = rooms);
    this.dataService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  getTeacherName(teacherId: string): string {
    const teacher = this.teachers.find(t => t.teacher_id === teacherId);
    return teacher ? `${teacher.first_name} ${teacher.last_name}` : 'Unknown';
  }

  getRoomName(roomId: string): string {
    const room = this.rooms.find(r => r.room_id === roomId);
    return room ? room.room_name : 'Unknown';
  }

  getSubjectName(subjectId: string): string {
    const subject = this.subjects.find(s => s.subject_id === subjectId);
    return subject ? subject.subject_name : 'Unknown';
  }
}