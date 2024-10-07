import { Component, Input } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AvatarIconComponent } from "../avatar-icon/avatar-icon.component";
import { MatIconModule } from '@angular/material/icon';
import { IServerDto } from '../../interfaces/api/dtos/IServerDto';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatIconModule, AvatarIconComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  @Input({required: true})
  server!: IServerDto;

}
