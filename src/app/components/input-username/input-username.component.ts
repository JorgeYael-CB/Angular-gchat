import { Component, EventEmitter, Output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';


@Component({
  selector: 'app-input-username',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input-username.component.html',
  styleUrl: './input-username.component.css'
})
export class InputUsernameComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]);
  nameError = signal('');


  constructor(){
    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe( () => this.updateErrorMessage() );
  }


  @Output()
  succesNameEvent = new EventEmitter<string | undefined>();


  updateErrorMessage(){
    if( this.name.errors ){
      this.succesNameEvent.emit(undefined);
    }

    if( this.name.hasError('required') ) return this.nameError.set('Name is required');
    if( this.name.hasError('minlength') ) return this.nameError.set('Name is too short');
    if( this.name.hasError('maxlength') ) return this.nameError.set('Name is too long');

    this.succesNameEvent.emit(this.name.value!);
    this.nameError.set('');
  }
}
