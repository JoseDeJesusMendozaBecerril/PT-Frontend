import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {


  id:string;
  producto:Producto;

  relacionados:string = 'relacionados';

  constructor(private activatedRoute:ActivatedRoute, private _productosService:ProductosService , private router:RouterModule) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this._productosService.getProducto(this.id).subscribe(response =>{
        this.producto = response;
      });
      
    });
  }

}
