import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras/compras.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { InformacionContactoComponent } from './informacion-contacto/informacion-contacto.component';
import { HistorialComponent } from './historial/historial.component';
import { FavoritosClienteComponent } from './favoritos-cliente/favoritos-cliente.component';

//Modulos
import { PagesModule } from "../pages/pages.module";
import { RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductosCategoriaComponent } from './productos-categoria/productos-categoria.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ComprasComponent, PedidosComponent, FormasPagoComponent, InformacionContactoComponent, HistorialComponent, FavoritosClienteComponent, CategoriasComponent, CategoriaComponent, ProductosCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesModule,
    ComponentsModule
  ],
  exports:[
    ComprasComponent,
    PedidosComponent,
    FormasPagoComponent,
    InformacionContactoComponent,
    HistorialComponent
  ]
})
export class ClientModule { }
