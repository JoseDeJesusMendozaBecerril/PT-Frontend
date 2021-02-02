import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';




const routes: Routes = [

  // Path: '/home' PagesRouting - Tienda publica
  // Path: '/auth' AuthRouting - Logueo
  // Path: '/dashboard' Aun no esta declarada - Parte Administrativa Empresa y Clientes 

  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'**' , component:NopagefoundComponent}




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
