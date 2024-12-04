import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from '../../models/types';

@Component({
  selector: 'app-subject-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="subject-form">
      <div class="form-group">
        <label for="subjectName">Subject Name</label>
        <input type="text" id="subjectName" [(ngModel)]="subject.subject_name" name="subjectName" required>
      </div>
      <div class="form-group">
        <label for="subjectCode">Subject Code</label>
        <input type="text" id="subjectCode" [(ngModel)]="subject.subject_code" name="subjectCode" required>
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <input type="text" id="department" [(ngModel)]="subject.department" name="department" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" [(ngModel)]="subject.description" name="description" required></textarea>
      </div>
      <button type="submit">{{ subject.id ? 'Update' : 'Add' }} Subject</button>
    </form>
  `,
  styles: [`
    .subject-form {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    textarea {
      height: 100px;
      resize: vertical;
    }
    button {
      background: #2196f3;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #1976d2;
    }
  `]
})
export class SubjectFormComponent {
  @Input() subject: Subject = {
    subject_id: '',
    subject_name: '',
    subject_code: '',
    department: '',
    description: '',
    id: ''
  };
  @Output() save = new EventEmitter<Subject>();

  onSubmit() {
    this.save.emit(this.subject);
  }
}