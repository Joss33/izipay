import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmaTusDatosDeContactoRoutingModule } from './confirma-tus-datos-de-contacto-routing.module';
import { ConfirmaTusDatosDeContactoComponent } from './confirma-tus-datos-de-contacto.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class ConfirmaTusDatosDeContactoModule { }
