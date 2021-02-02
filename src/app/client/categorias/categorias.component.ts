import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  categorias:Categoria[]=[]

  constructor(private _productosService:ProductosService , private router:Router) {

  }

  ngOnInit(): void {
    this.categorias = this._productosService.getCategorias();
    //console.log(this.categorias);

  }

  verCategoria(index:number){
    this.router.navigate(['/home/productos-categoria',index]);
  }

}
