import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/alert/alert.component';

const COMPONENTS = [
  AlertComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
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
