import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormNotesComponent } from './components/form-notes/form-notes.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

import type { Student, UserInput } from '../types';

import { INITIAL_USER_INPUT_VALUES } from '../utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormNotesComponent, StudentsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userInput = signal<UserInput>(INITIAL_USER_INPUT_VALUES);
  students = signal<Student[]>([]);
  error = signal<boolean>(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.students = signal(JSON.parse(localStorage.getItem('students') || '[]'));
    }
  }

  handleChangeNotes(ev: Event) {
    const input = ev.target as HTMLInputElement;
    this.userInput.update((userInput) => ({
      ...userInput,
      [input.name]: input.value,
    }));
  }

  handleSubmit(ev: Event) {
    ev.preventDefault();

    if (!this.userInput().studentId || !this.userInput().studentName) {
      this.error.set(true);
      return;
    }

    this.error.set(false);

    const studentNotes =
      Number(this.userInput().partial_1) * 0.25 +
      Number(this.userInput().partial_2) * 0.25 +
      Number(this.userInput().tracing) * 0.5;

    const newStudent = {
      id: this.userInput().studentId,
      name: this.userInput().studentName,
      status: studentNotes >= 3 ? 'Aprobaste' : 'Reprobaste',
      finalNote: studentNotes,
    };

    this.students.update((students) => {
      const newStudents = [...students, newStudent];
      if (typeof window !== 'undefined') localStorage.setItem('students', JSON.stringify(newStudents));
      return newStudents;
    });

    this.userInput.set(INITIAL_USER_INPUT_VALUES);
  }

  handleDeleteStudent(studentId: string) {
    this.students.update((students) => {
      const newStudents = students.filter(student => student.id !== studentId);
      if (typeof window !== 'undefined') localStorage.setItem('students', JSON.stringify(newStudents));
      return newStudents;
    });
  }
}
