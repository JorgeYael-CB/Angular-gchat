import { Component, signal } from '@angular/core';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputEmailComponent, InputPasswordComponent, RouterLink, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal<string | undefined>(undefined);
  password = signal<string | undefined>(undefined);


  updateEmail(value: string | undefined){
    this.email.set(value);
  }

  updatePassword( value: string | undefined ){
    this.password.set(value);
  }

  isValidForm(){
    return this.email() !== undefined && this.password() !== undefined;
  }

}
