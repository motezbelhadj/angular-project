import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Room, Teacher, Subject, Student, Session, Class } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = {
    rooms: [] as Room[],
    teachers: [] as Teacher[],
    subjects: [] as Subject[],
    students: [] as Student[],
    sessions: [] as Session[],
    classes: [] as Class[]
  };

  private teachersSubject = new BehaviorSubject<Teacher[]>([]);
  private subjectsSubject = new BehaviorSubject<Subject[]>([]);

  constructor() {
    fetch('/assets/data.json')
      .then(response => response.json())
      .then(json => {
        this.data = json;
        this.teachersSubject.next(this.data.teachers);
        this.subjectsSubject.next(this.data.subjects);
      });
  }

  // Teacher methods
  getTeachers(): Observable<Teacher[]> {
    return this.teachersSubject.asObservable();
  }

  addTeacher(teacher: Teacher): void {
    this.data.teachers.push(teacher);
    this.teachersSubject.next(this.data.teachers);
  }

  updateTeacher(teacher: Teacher): void {
    const index = this.data.teachers.findIndex(t => t.id === teacher.id);
    if (index !== -1) {
      this.data.teachers[index] = teacher;
      this.teachersSubject.next(this.data.teachers);
    }
  }

  deleteTeacher(id: string): void {
    this.data.teachers = this.data.teachers.filter(t => t.id !== id);
    this.teachersSubject.next(this.data.teachers);
  }

  // Subject methods
  getSubjects(): Observable<Subject[]> {
    return this.subjectsSubject.asObservable();
  }

  addSubject(subject: Subject): void {
    this.data.subjects.push(subject);
    this.subjectsSubject.next(this.data.subjects);
  }

  updateSubject(subject: Subject): void {
    const index = this.data.subjects.findIndex(s => s.id === subject.id);
    if (index !== -1) {
      this.data.subjects[index] = subject;
      this.subjectsSubject.next(this.data.subjects);
    }
  }

  deleteSubject(id: string): void {
    this.data.subjects = this.data.subjects.filter(s => s.id !== id);
    this.subjectsSubject.next(this.data.subjects);
  }

  // Other existing methods
  getRooms(): Observable<Room[]> {
    return of(this.data.rooms);
  }

  getStudents(): Observable<Student[]> {
    return of(this.data.students);
  }

  getSessions(): Observable<Session[]> {
    return of(this.data.sessions);
  }

  getClasses(): Observable<Class[]> {
    return of(this.data.classes);
  }
}