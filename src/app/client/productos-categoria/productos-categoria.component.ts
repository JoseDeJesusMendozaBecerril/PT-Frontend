import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {

  productos:any={};

  constructor(private activatedRoute: ActivatedRoute , private _productosService: ProductosService) { 
    this.activatedRoute.params.subscribe(params =>{
      let id_busqueda = params['id']; 
      console.log(id_busqueda) //aqui tengo el id que viene en la url que recibo

      this.productos = this._productosService.getProductosCategoria(id_busqueda); //uso funcion del servicio recuperar heroe y ya que lo tengo se puede renderizar en la pagina html mediante sus atributos
      console.log(this.productos);
    })
  }

  ngOnInit(): void {
  }

}
