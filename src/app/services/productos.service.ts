import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Categoria } from '../models/categoria.model';

import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario2Model } from '../models/usuario2.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private favoritos:Producto[]=[];
  
  private data:any; 

  private productos:Producto[]; //jalar desde el back

  private usuarioActivo:Usuario2Model;

  private endpoint:any = "http://localhost:8080/producto/api/productos";

  
  private categorias:Categoria[]=[
    {
      id:1,
      nombre:"Electronica",
      desc:"Articulos electronicos, Tecnologia y Telefonica"
    },
    {
      id:2,
      nombre:"Muebles",
      desc:"Muebleria,Moviliario,Hogar"
    },
    {
      id:3,
      nombre:"Ropa",
      desc:"Arrticulos para vestimenta, hombres,mujeres, niños"
    },
    {
      id:4,
      nombre:"Deportes",
      desc:"Articulos deportivos"
    }
  ]



constructor(private http: HttpClient,private router:Router) { }

//metodo accesar ainfo ya que el atrib es private
getCategorias(){
    return this.categorias;
}
//devuelve un categoria especifico
getCategoria(idx:string){
  return this.categorias[idx];
}
//busca un categoria
buscarCategorias(termino:string):Categoria[]{
let categoriasArr:Categoria[] = [];

termino = termino.toLowerCase();

for (let i=0; i <this.categorias.length;i++ ){ //los q coincidan
    let categoria = this.categorias[i];

    let nombre = categoria.nombre.toLowerCase();
    if(nombre.indexOf(termino) >= 0){
      categoria.id =i;
      categoriasArr.push(categoria);
    }
}
return categoriasArr;
}



getProductos(){
    return this.http.get(this.endpoint,httpOptions);
    
}

getProductosCategoria(id_categoria:string):Observable<any>{
  let productosArr:Producto[] = [];
  let categoria_buscada="";
  if(id_categoria === "0"){ categoria_buscada = "Electronica" }
  if(id_categoria === "1"){ categoria_buscada = "Muebles" }
  if(id_categoria === "2"){ categoria_buscada = "Ropa" }
  if(id_categoria === "3"){ categoria_buscada = "Deportes" }

   //categoria_buscada = categoria_buscada.toLowerCase();

   let url = this.endpoint+`/productos-categoria/${categoria_buscada}`

   return this.http.get(url,httpOptions);
  

}



getProducto(id:string):Observable<any>{
  let url = this.endpoint +`/verDetallesProducto/${id}`;
  return this.http.get(url,httpOptions);

}


buscarProductos(termino:string,idUser:string):Observable<any>{
  console.log("Realizando busqueda");
  let url = this.endpoint+`/buscarProductos/${termino}&${idUser}`;

  return this.http.get(url,httpOptions);

}


verDetalles(index:number){
  this.router.navigate(['/home/detalles-producto',index]);
}


//Agregar producto a favoritos
producto:any;
addFavorito(producto:Producto){
    if(localStorage.getItem('favoritos') != null){
        this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
    
    }
    this.favoritos.push(producto);
    localStorage.setItem('favoritos',JSON.stringify(this.favoritos));
}


clearLocalStorage(){
    localStorage.removeItem('carrito');
    localStorage.removeItem('favoritos');
}












downloadFile(filename='data') {
    this.data = this.productos;

    let csvData = this.ConvertToCSV(this.data, ['id','nombre','desc', 'precio', 'tags', 'status' , 'img' , 'categoria' , 'calificacion']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
        row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
        let line = (i+1)+'';
        for (let index in headerList) {
           let head = headerList[index];

            line += ',' + array[i][head];
        }
        str += line + '\r\n';
    }
    return str;
}





}
