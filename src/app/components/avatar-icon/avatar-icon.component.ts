import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-icon',
  standalone: true,
  imports: [],
  templateUrl: './avatar-icon.component.html',
  styleUrl: './avatar-icon.component.css'
})
export class AvatarIconComponent {

  @Input()
  url?: string;

  @Output()
  onClick = new EventEmitter<void>();

  click(){
    this.onClick.emit();
  }
}
