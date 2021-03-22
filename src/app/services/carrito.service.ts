import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario2Model } from '../models/usuario2.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  private carrito:any[]=[];  
  private endpoint:any = "http://localhost:8080/carrito/api/";

  constructor(private http: HttpClient,private router:Router) { }

  //Agregar productos a Carrito
item:any;
addCar(producto:Producto, usuario:Usuario2Model){
  console.log("Entra add car");
  let endpoint_final = this.endpoint + `addItem/${usuario.idUsuario}&${producto.id}`;
  return this.http.post<Usuario2Model>(endpoint_final,producto,httpOptions);


}



}
