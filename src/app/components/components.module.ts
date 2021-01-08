import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';
import { InformacionProductoComponent } from './informacion-producto/informacion-producto.component';
import { MiniaturasComponent } from './miniaturas/miniaturas.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';



@NgModule({
  declarations: [CarouselComponent, TarjetaProductoComponent, CarouselItemsComponent, InformacionProductoComponent, MiniaturasComponent, VistaProductoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CarouselComponent,
    TarjetaProductoComponent,
    CarouselItemsComponent,
    InformacionProductoComponent,
    MiniaturasComponent,
    VistaProductoComponent
  ]
})
export class ComponentsModule { }
