import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TeacherFormComponent } from '../teacher/teacher-form.component';
import { SubjectFormComponent } from '../subject/subject-form.component';
import { Teacher, Subject } from '../../models/types';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule, TeacherFormComponent, SubjectFormComponent],
  template: `
    <div class="management-container">
      <div class="section">
        <h2>Teachers</h2>
        <app-teacher-form (save)="onSaveTeacher($event)"></app-teacher-form>
        <div class="list">
          <div *ngFor="let teacher of teachers" class="list-item">
            <div>
              <strong>{{teacher.first_name}} {{teacher.last_name}}</strong>
              <p>{{teacher.department}} - {{teacher.email}}</p>
            </div>
            <div class="actions">
              <button (click)="editTeacher(teacher)">Edit</button>
              <button (click)="deleteTeacher(teacher.id)" class="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Subjects</h2>
        <app-subject-form (save)="onSaveSubject($event)"></app-subject-form>
        <div class="list">
          <div *ngFor="let subject of subjects" class="list-item">
            <div>
              <strong>{{subject.subject_name}} ({{subject.subject_code}})</strong>
              <p>{{subject.department}}</p>
            </div>
            <div class="actions">
              <button (click)="editSubject(subject)">Edit</button>
              <button (click)="deleteSubject(subject.id)" class="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .management-container {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .section {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .list {
      margin-top: 20px;
    }
    .list-item {
      padding: 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .actions {
      display: flex;
      gap: 10px;
    }
    button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: #2196f3;
      color: white;
    }
    button.delete {
      background: #f44336;
    }
    h2 {
      margin-bottom: 20px;
      color: #333;
    }
  `]
})
export class ManagementComponent implements OnInit {
  teachers: Teacher[] = [];
  subjects: Subject[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTeachers().subscribe(teachers => this.teachers = teachers);
    this.dataService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  onSaveTeacher(teacher: Teacher) {
    if (teacher.id) {
      this.dataService.updateTeacher(teacher);
    } else {
      teacher.id = crypto.randomUUID();
      teacher.teacher_id = `T${this.teachers.length + 1}`.padStart(4, '0');
      this.dataService.addTeacher(teacher);
    }
  }

  onSaveSubject(subject: Subject) {
    if (subject.id) {
      this.dataService.updateSubject(subject);
    } else {
      subject.id = crypto.randomUUID();
      subject.subject_id = `S${this.subjects.length + 1}`.padStart(4, '0');
      this.dataService.addSubject(subject);
    }
  }

  editTeacher(teacher: Teacher) {
    // Implementation for editing teacher
  }

  deleteTeacher(id: string) {
    this.dataService.deleteTeacher(id);
  }

  editSubject(subject: Subject) {
    // Implementation for editing subject
  }

  deleteSubject(id: string) {
    this.dataService.deleteSubject(id);
  }
}