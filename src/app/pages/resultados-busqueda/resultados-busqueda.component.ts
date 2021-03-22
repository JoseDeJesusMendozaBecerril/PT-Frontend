import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { AuthService } from '../../services/auth.service';
import { Usuario2Model } from '../../models/usuario2.model';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {

  termino:string;

  productos:any[] = [];

  usuarioActivo:Usuario2Model;


  constructor(private activatedRoute:ActivatedRoute, private _productosService:ProductosService , private router:Router , private _authService:AuthService) {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      console.log("Busqueda" , this.termino);
      this.buscarProductos();
    });
  }

  ngOnInit(): void {
    
    
  }

  buscarProductos(){
    //recupero id
    let activo = this._authService.getIdUsuarioActivo();
    console.log("Id usuario activo" , activo);

    //realizo peticion busqueda
    this._productosService.buscarProductos(this.termino , activo).subscribe( response =>{
      this.productos = response;

    });
    console.log(this.productos);

  }

}
