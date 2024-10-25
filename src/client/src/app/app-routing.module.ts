import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { PresentePantallaComponent } from './presente-pantalla/presente-pantalla.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { AgreProductoComponent } from './component/agre-producto/agre-producto.component';

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
  },
  {
    path : 'carrito',
    component : CarritoComponent
  },
  {
    path : 'agre_producto',
    component : AgreProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
