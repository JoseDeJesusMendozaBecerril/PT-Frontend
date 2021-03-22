import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  private carrito:any[]=[];  
  private endpoint:any = "http://localhost:8080/producto/api/productos";

  constructor(private http: HttpClient,private router:Router) { }

  //Agregar productos a Carrito
item:any;
addCar(producto:Producto){

    if(localStorage.getItem('carrito') != null){
        this.carrito = JSON.parse(localStorage.getItem('carrito'));
    
    }
    
    this.carrito.push(producto);
    console.log("Carrito");
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
    

}

getProducto(id:string):Observable<any>{
  let url = this.endpoint +`/verDetallesProducto/${id}`;
  return this.http.get(url,httpOptions);

}

}
