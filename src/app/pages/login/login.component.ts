import { Component, signal } from '@angular/core';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingFormComponent } from "../../components/spinner-loading-form/spinner-loading-form.component";
import { AuthServiceService } from '../../services/auth-service.service';
import { IResponseError, TypeError } from '../../interfaces/api/IResponseError';
import { ShowErrorsComponent } from "../../components/show-errors/show-errors.component";




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputEmailComponent, InputPasswordComponent, RouterLink, MatButtonModule, SpinnerLoadingFormComponent, ShowErrorsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal<string | undefined>(undefined);
  password = signal<string | undefined>(undefined);
  isLoading = signal(false);
  err = signal<TypeError | undefined>(undefined);


  constructor(
    private authService: AuthServiceService,
  ){}

  updateEmail(value: string | undefined){
    this.email.set(value);
  }

  updatePassword( value: string | undefined ){
    this.password.set(value);
  }

  isValidForm(){
    return this.email() !== undefined && this.password() !== undefined;
  }

  onSubmit(){
    if( !this.isValidForm() ) return;
    this.isLoading.set(true);

    this.authService.loginUser({email: this.email()!, password: this.password()!})
    .subscribe({
      next: (res) => {
        this.isLoading.set(false);
        this.err.set(undefined);
      },
      error: ({error}) => {
        this.isLoading.set(false);
        if( error.err ){
          this.err.set(error.err);
        } else {
          this.err.set('Internal server error, please try again later or contact support.');
        };
      },
      })
  }

}
