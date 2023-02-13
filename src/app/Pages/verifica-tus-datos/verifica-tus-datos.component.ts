import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from '@core/services/global.service';

@Component({
  selector: 'app-verifica-tus-datos',
  templateUrl: './verifica-tus-datos.component.html',
  styleUrls: ['./verifica-tus-datos.component.scss'],
  animations: [
    trigger('rotate3D', [
      // Right Animation
      state('right', style({
        transform: 'rotate3d(0, 1, 0, 90deg);'
      })),
      state('right-closed', style({
        transform: 'rotate3d(0, 1, 0, 90deg);'
      })),
      transition('right => right-closed', [
        animate('0.5s')
      ]),
      transition('right-closed => right', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class VerificaTusDatosComponent implements OnInit, AfterViewInit {

  position: 'right' = 'right';

  visible: boolean = false;
  toggle: boolean = false;

  frontOrBack = false;
  
  form: FormGroup = this.formBuilder.group({
    front: this.formBuilder.group({
      documentNumber: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(15 )]],
      surname: [null, Validators.required]
    }),
    back: this.formBuilder.group({
      expeditionDate: [null, Validators.required],
    }),
  });

  get front() {return this.form.get('front') as FormGroup}
  
  get documentNumber() {return this.form.get('front')?.get('documentNumber')}
  get surname() {return this.form.get('front')?.get('surname')}
  
  get back() {return this.form.get('back') as FormGroup}
  get expeditionDate() {return this.form.get('back')?.get('expeditionDate')}

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 0);
  }

  next(){
    this.globalService.cleanForm(this.form);
    this.globalService.formTouched(this.form);
    if(this.front.valid){
      this.frontOrBack = true;
      if(this.back.valid){
        if(this.form.valid && this.frontOrBack){
          console.log('entro');
          
          this.router.navigate(['/confirma-tus-datos-de-contacto']);
        }else{
          this._snackBar.open('Todos los campos son obligatorios, intente de nuevo', 'Cerrar');
        }
      }
    }
  }
  
  

  get animation() {
    // Retornar valores para animacion para el Button-Right
    if (this.position === 'right' && this.visible) return 'right'
    if (this.position === 'right' && !this.visible) return 'right-closed'

    return 'right';
  } 

  resetField(field: string){
    this.form.get(field)?.reset();
  }

}
