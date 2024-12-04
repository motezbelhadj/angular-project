export interface Room {
  room_id: string;
  room_name: string;
  capacity: number;
  building: string;
  floor: number;
  id: string;
}

export interface Teacher {
  teacher_id: string;
  first_name: string;
  last_name: string;
  email: string;
  department: string;
  phone: string;
  id: string;
}

export interface Subject {
  subject_id: string;
  subject_name: string;
  subject_code: string;
  department: string;
  description: string;
  id: string;
}

export interface Student {
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  id: string;
}

export interface Session {
  session_id: string;
  subject_id: string;
  teacher_id: string;
  room_id: string;
  class_id: string;
  session_date: string;
  start_time: string;
  end_time: string;
  id: string;
}

export interface Class {
  class_id: string;
  subject_id: string;
  class_name: string;
  students: string[];
  id: string;
}