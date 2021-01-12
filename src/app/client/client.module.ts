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

@NgModule({
  declarations: [ComprasComponent, PedidosComponent, FormasPagoComponent, InformacionContactoComponent, HistorialComponent, FavoritosClienteComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesModule
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
