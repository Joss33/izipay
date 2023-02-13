import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmaTusDatosDeContactoRoutingModule } from './confirma-tus-datos-de-contacto-routing.module';
import { ConfirmaTusDatosDeContactoComponent } from './confirma-tus-datos-de-contacto.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { NgxMaskModule, IConfig } from 'ngx-mask';  


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    ConfirmaTusDatosDeContactoComponent,
  ],
  imports: [
    CommonModule,
    ConfirmaTusDatosDeContactoRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ConfirmaTusDatosDeContactoModule { }
