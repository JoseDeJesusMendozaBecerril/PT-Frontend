import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';



const routes:Routes = [
    {
        path:'home' , component:PagesComponent,
        children:[
            {path:'',component:HomeComponent,data:{titulo:'Home'}},
            {path:'detalles-producto',component:DetallesProductoComponent,data:{titulo:'Detalles-producto'}}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
}) 
export class PagesRoutingModule{}