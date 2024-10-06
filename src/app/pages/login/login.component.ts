import { Component, signal } from '@angular/core';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingFormComponent } from "../../components/spinner-loading-form/spinner-loading-form.component";
import { AuthService } from '../../services/auth.service';
import { TypeError } from '../../interfaces/api/IResponseError';
import { ShowErrorsComponent } from "../../components/show-errors/show-errors.component";
import { Store } from '@ngrx/store';
import { loginAction } from '../../store/AuthStore.actions';
import { IAuthState } from '../../interfaces/store/Auth.state';




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
    private authService: AuthService,
    private authStore: Store<{ auth: IAuthState }>,
    private router: Router,
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
        this.authStore.dispatch(loginAction({token: res.token!, user: res.data!}));
        this.router.navigate(['/']);
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
