import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UsuarioModel } from 'src/app/models/usuario.model';
import {AuthService} from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Usuario2Model } from '../../models/usuario2.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario2Model;
  recordarme=false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario2Model();
    
  }

  login(form:NgForm){

    if(form.invalid){
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere porfavor...'
    });
    Swal.showLoading();

    //console.log("Ingresando");
   
  
    this.auth.login2(this.usuario).subscribe(resp =>{
      //console.log("La resp del servicio es " ,resp);
      Swal.close();

      const result = Number(resp); //aqui tenemos el id del usuario
      this.auth.setIdUsuarioActivo(result.toString());



      if(result != 0){
        this.auth.buscarCliente(result.toString()).subscribe(resp => {
          this.auth.setUsuarioActivo(resp);
        });

        this.router.navigateByUrl('/home');
      }
      else {
        console.log("Encontro error");
      Swal.fire({
        
        icon: 'error',
        title:'Error al Autenticar',
        text: 'Credenciales invalidas'
      });
      }
    }, (err) =>{
      console.log("Encontro error");
      Swal.fire({
        
        icon: 'error',
        title:'Error al Autenticar',
        text: err.error.error.message
      });
      //console.log(err.error.error.message);
  });
}

}
