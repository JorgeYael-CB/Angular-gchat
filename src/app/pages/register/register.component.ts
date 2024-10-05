import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { InputUsernameComponent } from "../../components/input-username/input-username.component";
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingFormComponent } from "../../components/spinner-loading-form/spinner-loading-form.component";



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, InputEmailComponent, InputPasswordComponent, InputUsernameComponent, MatButtonModule, SpinnerLoadingFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = signal<string | undefined>(undefined);
  password = signal<string | undefined>(undefined);
  name = signal<string | undefined>(undefined);
  isLoading = signal(false);


  updateEmail( value: string | undefined ){
    this.email.set(value);
  }

  updatePassword( value: string | undefined ){
    this.password.set(value);
  }

  updateName( value: string | undefined ){
    this.name.set(value);
  }

  isValidForm(){
    return (this.email() !== undefined && this.password() !== undefined && this.name() !== undefined);
  }

  onSubmit(){
    if( !this.isValidForm() ) return;
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }

}
