import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmaTusDatosDeContactoComponent } from './confirma-tus-datos-de-contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmaTusDatosDeContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmaTusDatosDeContactoRoutingModule { }
