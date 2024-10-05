import { Component, signal } from '@angular/core';
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingFormComponent } from "../../components/spinner-loading-form/spinner-loading-form.component";




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputEmailComponent, InputPasswordComponent, RouterLink, MatButtonModule, SpinnerLoadingFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal<string | undefined>(undefined);
  password = signal<string | undefined>(undefined);
  isLoading = false;


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
    console.log("dio click: " + this.isValidForm());
    if( !this.isValidForm() ) return;
    this.isLoading = true;

    //TODO: hacer peticion HTTP para el login
  }

}
