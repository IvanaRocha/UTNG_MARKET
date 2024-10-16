import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { PresentePantallaComponent } from './presente-pantalla/presente-pantalla.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },

  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'usuarios',
    component : UsuariosComponent
  },
  {
    path: 'pantalla-principal',
    component : PresentePantallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
