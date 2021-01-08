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





@NgModule({
  declarations: [HomeComponent, PagesComponent, DetallesProductoComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    PagesComponent,
    DetallesProductoComponent
  ]
})
export class PagesModule { }
