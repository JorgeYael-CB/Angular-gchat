import { Component, Input } from '@angular/core';
import { AvatarIconComponent } from "../avatar-icon/avatar-icon.component";
import { IUserDto } from '../../interfaces/api/dtos/IUserDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AvatarIconComponent, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  currentImageIndex: number = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.user.images.length;
  }
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.user.images.length) % this.user.images.length;
  }

  @Input({required: true})
  user!: IUserDto;

  onClickImage(){
    console.log('Viendo el perfil del usuario: ' + this.user.name);
  }

  formatDate( value: any ): string{
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day:'numeric'});
    return formattedDate;
  }
}
