import { Component, EventEmitter, Input, Output, type WritableSignal } from '@angular/core';

import type { Student } from '../../../types';

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css'
})
export class StudentsTableComponent {
  @Input() students!: WritableSignal<Student[]>;
  @Output() deleteStudent = new EventEmitter();

  handleDeleteStudent(studentId: string) {
    this.deleteStudent.emit(studentId);
  }
}
