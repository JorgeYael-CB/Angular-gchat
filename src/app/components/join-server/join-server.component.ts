import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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


  joinRandomServer(){
    console.log('Uniendote a un servidor aleatorio...');
  }

  protected updateErrors(){
    const field = this.form.controls.serverId;

    if( field.hasError('required') ){
      return this.error.set('Server id is required');
    }

    this.error.set('');
  }

  onSubmit(){
    if( this.error().trim().length > 0 ) return;

    console.log('Uniendote...');
  }

}
