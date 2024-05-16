import { Component, Input, type WritableSignal } from '@angular/core';

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
  @Input() handleDeleteStudent!:(studentId: string) => void;
}
