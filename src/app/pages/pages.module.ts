import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import {RouterModule} from '@angular/router'; //router outlet
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


//Componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [HomeComponent, PagesComponent, DetallesProductoComponent, FavoritosComponent, CarComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    PagesComponent,
    DetallesProductoComponent,
    FavoritosComponent
  ]
})
export class PagesModule { }
