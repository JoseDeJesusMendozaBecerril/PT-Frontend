import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { UsuarioModel } from 'src/app/models/usuario.model';
import {AuthService} from '../../services/auth.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel;
  recordarme=false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme=true;
    }
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
   
  
    this.auth.login(this.usuario).subscribe(resp =>{
      console.log(resp);
      Swal.close();

      if(this.recordarme){
        localStorage.setItem('email',this.usuario.email);
      }

      this.router.navigateByUrl('/home');
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