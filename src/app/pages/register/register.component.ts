import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { InputUsernameComponent } from "../../components/input-username/input-username.component";
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingFormComponent } from "../../components/spinner-loading-form/spinner-loading-form.component";
import { ShowErrorsComponent } from "../../components/show-errors/show-errors.component";
import { TypeError } from '../../interfaces/api/IResponseError';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, InputEmailComponent, InputPasswordComponent, InputUsernameComponent, MatButtonModule, SpinnerLoadingFormComponent, ShowErrorsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = signal<string | undefined>(undefined);
  password = signal<string | undefined>(undefined);
  name = signal<string | undefined>(undefined);
  isLoading = signal(false);
  err = signal<TypeError | undefined>(undefined);

  constructor(
    private authService: AuthService
  ){}


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

    this.authService.registerUser({name: this.name()!, email: this.email()!, password: this.password()!})
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.err.set(undefined);
          console.log(res);
        },
        error: (error) => {
          this.isLoading.set(false);
          if( error.error && error.error.err ){
            this.err.set(error.error.err);
          } else {
            this.err.set('Unexpected error, please try again later');
            console.log(error);
          }
        },
      })
  }

}
