import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';
import { Usuario2Model } from '../../models/usuario2.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  @Input() producto:Producto;

  number:any;
  usuarioActivo:Usuario2Model;

  constructor(public _productosService: ProductosService, private _carritoService:CarritoService , private _authService:AuthService) { 
    this.usuarioActivo = this._authService.gettUsuarioActivo();
  }

  ngOnInit(): void {
    console.log("Recibe" , this.producto);
    this.number = Array(this.producto.calificacion).fill(1);
  }

  addCar(producto:Producto , usuario:Usuario2Model){
    this._carritoService.addCar(producto,usuario).subscribe(resp => {
      let result = resp;
      console.log(result);
    })
  }
  
}
