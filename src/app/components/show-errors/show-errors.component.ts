import { Component, Input, Output } from '@angular/core';
import { TypeError } from '../../interfaces/api/IResponseError';

@Component({
  selector: 'app-show-errors',
  standalone: true,
  imports: [],
  templateUrl: './show-errors.component.html',
  styleUrl: './show-errors.component.css'
})
export class ShowErrorsComponent {

  @Input({required: true})
  err: TypeError | undefined;

  errToErrors(): string[] | undefined{
    if( !this.err ) return undefined;

    if( Array.isArray(this.err) ){
      return this.err.map( e => `${e.field} - ${e.message}`);
    } else if(this.err.trim().length > 0) {
      return [this.err];
    }

    return undefined;
  }

}
