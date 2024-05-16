import { Component, Input, type WritableSignal } from '@angular/core';

import type { Student, UserInput } from '../../../types';

@Component({
  selector: 'app-form-notes',
  standalone: true,
  imports: [],
  templateUrl: './form-notes.component.html',
  styleUrl: './form-notes.component.css',
})
export class FormNotesComponent {
  @Input() userInput!: WritableSignal<UserInput>;
  @Input() students!: WritableSignal<Student[]>;
  @Input() error!: WritableSignal<boolean>;
  @Input() handleChangeNotes!: (ev: Event) => void;
  @Input() handleSubmit!: (ev: Event) => void;
}
