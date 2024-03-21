import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrl: './notes-card.component.css'
})
export class NotesCardComponent {
  textarea1Content: string = '';
  textarea2Content: string = '';

  adjustTextareaHeight(textareaId: string, event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
