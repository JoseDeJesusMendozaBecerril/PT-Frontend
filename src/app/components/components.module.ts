import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';



@NgModule({
  declarations: [CarouselComponent, TarjetaProductoComponent, CarouselItemsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CarouselComponent,
    TarjetaProductoComponent,
    CarouselItemsComponent
  ]
})
export class ComponentsModule { }
