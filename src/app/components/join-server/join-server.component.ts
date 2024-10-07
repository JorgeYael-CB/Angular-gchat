import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-join-server',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './join-server.component.html',
  styleUrl: './join-server.component.css'
})
export class JoinServerComponent {
  error = signal<string>('Server id is required');
  form = new FormGroup({
    serverId: new FormControl('', [Validators.required]),
  });

  isLoading = false;
  joinServerError?:string;


  constructor(
    private serverService: ServerService,
    private authService: AuthService,
    private router: Router,
  ){}


  joinRandomServer(){
    this.isLoading = true;
    this.serverService.joinRandomServer()
      .pipe(
        finalize( () => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.joinServerError = undefined;
          if( data.token ) this.authService.renewToken(data.token);
          this.router.navigate([`/${data.data.id}`])
        },
        error: (err) => {
          this.joinServerError = 'Unexpected error, try again later';
          console.log(err);
        },
      })
  }

  protected updateErrors(){
    const field = this.form.controls.serverId;

    if( field.hasError('required') ){
      return this.error.set('Server id is required');
    }

    this.error.set('');
  }

  onSubmit(){
    if( this.error().trim().length > 0 || this.isLoading ) return;

    console.log('Uniendote...');
  }

}
