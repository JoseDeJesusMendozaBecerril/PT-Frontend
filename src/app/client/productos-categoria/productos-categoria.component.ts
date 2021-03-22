import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {

  productos:any=[];

  constructor(private activatedRoute: ActivatedRoute , private _productosService: ProductosService , private router:Router) { 
    this.activatedRoute.params.subscribe(params =>{
      let id_busqueda = params['id']; 
      console.log(id_busqueda) //aqui tengo el id que viene en la url que recibo

      this._productosService.getProductosCategoria(id_busqueda).subscribe(response =>{
        this.productos = response;
      })
    })
  }

  ngOnInit(): void {
  }

 

  

}
