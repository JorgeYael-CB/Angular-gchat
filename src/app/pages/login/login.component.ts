import { Component, signal } from '@angular/core';
import { InputEmailComponent } from "../../components/input-email/input-email.component";




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputEmailComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal<string | undefined>(undefined);

  updateEmail(value: string | undefined){
    this.email.set(value);
  }

}
