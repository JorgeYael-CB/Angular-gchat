import { Component, EventEmitter, Output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { ValidatePassword } from '../../shared/validators/ValidatePassword';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  protected readonly password = new FormControl('', [Validators.required, ValidatePassword()]);

  hide = signal(true);
  passwordError = signal('');

  @Output()
  succesPasswordEvent = new EventEmitter<string | undefined>();

  constructor(){
    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe( () => this.updateErrorMessage())
  }


  clickEvent(event: MouseEvent){
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  updateErrorMessage(){
    if( this.password.hasError('passwordError') ){
      this.succesPasswordEvent.emit(undefined);
      this.passwordError.set(this.password.getError('passwordError'));
      return;
    }

    this.succesPasswordEvent.emit(this.password.value!);
    return this.passwordError.set('');
  }

}
