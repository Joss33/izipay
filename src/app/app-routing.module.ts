import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'verifica-tus-datos',
    loadChildren: () => import('@Pages/verifica-tus-datos/verifica-tus-datos.module').then((m) => m.VerificaTusDatosModule),
  },
  {
    path: 'confirma-tus-datos-de-contacto',
    loadChildren: () => import('@Pages/confirma-tus-datos-de-contacto/confirma-tus-datos-de-contacto.module').then((m) => m.ConfirmaTusDatosDeContactoModule),
  },
  {
    path: '',
    redirectTo: '/verifica-tus-datos',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/verifica-tus-datos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
