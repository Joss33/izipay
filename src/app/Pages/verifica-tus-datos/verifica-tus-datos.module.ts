import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificaTusDatosRoutingModule } from './verifica-tus-datos-routing.module';
import { VerificaTusDatosComponent } from './verifica-tus-datos.component';

import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faFingerprint as fasFingerprint, faUser as fasUser  } from '@fortawesome/pro-solid-svg-icons';

import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    VerificaTusDatosComponent
  ],
  imports: [
    CommonModule,
    VerificaTusDatosRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class VerificaTusDatosModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasFingerprint, fasUser);
  }
}
