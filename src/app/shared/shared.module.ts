import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/alert/alert.component';
import { CardIdComponent } from './components/card-id/card-id.component';

const COMPONENTS = [
  AlertComponent,
  CardIdComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
