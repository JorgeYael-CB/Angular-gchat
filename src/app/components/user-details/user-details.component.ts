import { Component, Input } from '@angular/core';
import { AvatarIconComponent } from "../avatar-icon/avatar-icon.component";
import { IUserDto } from '../../interfaces/api/dtos/IUserDto';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AvatarIconComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  @Input({required: true})
  user!: IUserDto;

}
