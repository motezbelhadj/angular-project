import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../models/types';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="teacher-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" [(ngModel)]="teacher.first_name" name="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" [(ngModel)]="teacher.last_name" name="lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" [(ngModel)]="teacher.email" name="email" required>
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <input type="text" id="department" [(ngModel)]="teacher.department" name="department" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" [(ngModel)]="teacher.phone" name="phone" required>
      </div>
      <button type="submit">{{ teacher.id ? 'Update' : 'Add' }} Teacher</button>
    </form>
  `,
  styles: [`
    .teacher-form {
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
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
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
export class TeacherFormComponent {
  @Input() teacher: Teacher = {
    teacher_id: '',
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    phone: '',
    id: ''
  };
  @Output() save = new EventEmitter<Teacher>();

  onSubmit() {
    this.save.emit(this.teacher);
  }
}