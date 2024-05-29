import { Component, EventEmitter, Input, Output, type WritableSignal } from '@angular/core';

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

  @Output() changeNotes = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  handleChangeNotes(event: Event) {
    this.changeNotes.emit(event);
  }

  handleSubmit(event: Event) {
    this.submitForm.emit(event);
  }
}
