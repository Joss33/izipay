import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificaTusDatosComponent } from './verifica-tus-datos.component';

const routes: Routes = [
  {
    path: '',
    component: VerificaTusDatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificaTusDatosRoutingModule { }
