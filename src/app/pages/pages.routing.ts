import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from '../client/pedidos/pedidos.component';
import { FormasPagoComponent } from '../client/formas-pago/formas-pago.component';
import { InformacionContactoComponent } from '../client/informacion-contacto/informacion-contacto.component';
import { HistorialComponent } from '../client/historial/historial.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { CategoriasComponent } from '../client/categorias/categorias.component';
import { ProductosCategoriaComponent } from '../client/productos-categoria/productos-categoria.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';



const routes:Routes = [
    {
        path:'home' , component:PagesComponent,
        children:[
            {path:'',component:HomeComponent,data:{titulo:'Home'}},
            {path:'detalles-producto/:id',component:DetallesProductoComponent,data:{titulo:'Detalles-producto'}},
            {path:'favoritos',component:FavoritosComponent,data:{titulo:'Favoritos'}},
            {path:'car',component:CarComponent,data:{titulo:'Carrito'}},
            {path:'busquedas',component:BusquedasComponent,data:{titulo:'Busqueda'}},
            {path:'historial-compras',component:HistorialComprasComponent,data:{titulo:'Historial-compras'}},
            {path:'categorias', component: CategoriasComponent ,data:{titulo:'Categorias'} },
            {path:'productos-categoria/:id', component: ProductosCategoriaComponent ,data:{titulo:'Productos-Categorias'} },
            {path:'busquedas/:termino', component: ResultadosBusquedaComponent ,data:{titulo:'Resultados-Busqueda'} }
        ]
    },
    {
        path:'dashboard',component:DashboardComponent,
        children:[
            {path:'', component:DashboardComponent,data:{titulo:'Dashboard'}},
            {path:'cliente-pedidos', component: PedidosComponent ,data:{titulo:'Cliente-pedidos'} },
            {path:'cliente-formas-pago', component: FormasPagoComponent ,data:{titulo:'Cliente-formas-pago'} },
            {path:'cliente-informacion', component: InformacionContactoComponent ,data:{titulo:'Cliente-informacion'} },
            {path:'cliente-favoritos', component: FavoritosComponent ,data:{titulo:'Cliente-favoritos'} },
            

        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
}) 
export class PagesRoutingModule{}