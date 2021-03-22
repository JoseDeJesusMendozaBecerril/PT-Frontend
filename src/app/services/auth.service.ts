import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import  {catchError, map} from 'rxjs/operators';
import { Usuario2Model } from '../models/usuario2.model';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'https://identitytoolkit.googleapis.com/v1/';
  private apikey= 'AIzaSyA_cNYN1sMbt050C7Wrk2qH74mK7moeNRw';
  private userToken:string;


  private url2 = '';
  private userToken2:string;

  private usuarioActivo:Usuario2Model;
  private idUsuarioActivo:string;

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  //Crear nuevo users
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  constructor(private http:HttpClient) {
    this.leerToken();
    this.leerToken2();
   }

  logout(){
    localStorage.removeItem('token');
  }

  login(usuario:UsuarioModel){
    console.log("Entra funcion login"); 
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken:true
    };

    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map(resp =>{
        console.log("Entro en el mapa del rxjs");
          this.guardarToken(resp['idToken']);
          return resp;
      })
    );
  }

  nuevoUsuario(usuario:UsuarioModel){
       
      const authData = {
          email: usuario.email,
          password: usuario.password,
          returnSecureToken:true
        };

        //DEBE https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //priva url='https://identitytoolkit.googleapis.com/v1/';
        return this.http.post(
          `${this.url}accounts:signUp?key=${this.apikey}`,
          authData
        ).pipe(
          map(resp =>{
            console.log("Entro en el mapa del rxjs");
              this.guardarToken(resp['idToken']);
              return resp;
          })
        );
  }

  




  private guardarToken(idToken:string){
    this.userToken=idToken;
    localStorage.setItem('token',idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira',hoy.getTime().toString());

  }
  
  
  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }
    else{
      this.userToken='';
    }
    return this.userToken;
  }

  estaAutenticado():boolean{

    if(this.userToken.length < 2 ){
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
    return this.userToken.length > 2;
  }


  //Auth Personal

  leerToken2(){
    if(localStorage.getItem('token2')){
      this.userToken2 = localStorage.getItem('token2');
    }
    else{
      this.userToken2='';
    }
    return this.userToken2;
  }


  logout2(){
    localStorage.removeItem('token2');
  }

  
  nuevoUsuario2(usuario2:Usuario2Model):Observable<Usuario2Model>{
    console.log("Entra servicio");
    const url = "http://localhost:8080/clientes/api/add"; 

    console.log("Este es el usuario en el servicio",usuario2);
    this.usuarioActivo = usuario2;
    //console.log(this.usuarioActivo);
    return this.http.post<Usuario2Model>(url,this.usuarioActivo,httpOptions);
  }

  buscarCliente(id:String):Observable<any>{
    const url = `http://localhost:8080/clientes/api/buscarCliente/${id}`;
    return this.http.get(url,httpOptions);

  }


  login2(usuario2:Usuario2Model){
    //console.log("Entra servicio login2");
    const url = "http://localhost:8080/clientes/api/login";
    //console.log("Este es el usuario en el servicio login",usuario2);
    
    
    return this.http.post<Usuario2Model>(url,usuario2,httpOptions);
  }





  

  setIdUsuarioActivo(id:string){
    this.idUsuarioActivo = id;
  }

  getIdUsuarioActivo(){
    return this.idUsuarioActivo;
  }

  setUsuarioActivo(usuario:Usuario2Model){
    this.usuarioActivo = usuario;
    console.log(this.usuarioActivo);
  }

  gettUsuarioActivo(){
    return this.usuarioActivo;
  }



}
