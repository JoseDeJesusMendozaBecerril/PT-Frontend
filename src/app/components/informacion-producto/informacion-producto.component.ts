import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  @Input() producto:Producto;

  number:any;

  constructor(public _productosService: ProductosService) { 
    
  }

  ngOnInit(): void {
    console.log("Recibe" , this.producto);
    this.number = Array(this.producto.calificacion).fill(1);
  }

  
}
