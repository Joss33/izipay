
import {
  Component,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from '@core/services/global.service';

@Component({
  selector: 'app-confirma-tus-datos-de-contacto',
  templateUrl: './confirma-tus-datos-de-contacto.component.html',
})
export class ConfirmaTusDatosDeContactoComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    number: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    terminos: [null, Validators.required],
  });

  get number(): AbstractControl<any, any> | null {return this.form.get('number')}
  get email(): AbstractControl<any, any> | null {return this.form.get('email')}
  get terminos(): AbstractControl<any, any> | null {return this.form.get('terminos')}

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }
  
  next(){
    this.globalService.cleanForm(this.form);
    this.globalService.formTouched(this.form);
    let message = '';
    if(this.form.valid){
      this._snackBar.open('Hemos enviado tu solicitud', 'Cerrar');
    }else{
      message = 'Todos los campos son obligatorios, intente de nuevo';
      if(this.email?.invalid){
        message = 'El correo electrónico no cuenta con el formato correspondiente'
      }
      this._snackBar.open(message, 'Cerrar');
    }
  }

  resetField(field: string){
    this.form.get(field)?.reset();
  }

}

