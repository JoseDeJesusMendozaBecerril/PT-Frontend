import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';



@NgModule({
  declarations: [CarouselComponent, TarjetaProductoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CarouselComponent,
    TarjetaProductoComponent
  ]
})
export class ComponentsModule { }
