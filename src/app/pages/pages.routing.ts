import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes:Routes = [
    {
        path:'home' , component:PagesComponent,
        children:[
            {path:'',component:HomeComponent,data:{titulo:'Home'}},
            {path:'detalles-producto',component:DetallesProductoComponent,data:{titulo:'Detalles-producto'}},
            {path:'favoritos',component:FavoritosComponent,data:{titulo:'Favoritos'}},
            {path:'car',component:CarComponent,data:{titulo:'Carrito'}},
        ]
    },
    {
        path:'dashboard',component:PagesComponent,
        children:[
            {path:'', component:DashboardComponent,data:{titulo:'Dashboard'}}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
}) 
export class PagesRoutingModule{}