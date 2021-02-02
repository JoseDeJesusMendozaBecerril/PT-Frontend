import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { UsuarioModel } from 'src/app/models/usuario.model';
import {AuthService} from '../../services/auth.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usuario:UsuarioModel;
  recordarme=false;


  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form:NgForm){

    if(form.invalid){
      return;
    }
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere porfavor...'
    });
    Swal.showLoading();
    
     console.log("Formulario enviado");
     console.log(this.usuario);
     console.log(form);
     

    
    this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
        console.log(resp);
        Swal.close();

        if(this.recordarme){
          localStorage.setItem('email',this.usuario.email);
        }

        this.router.navigateByUrl('/home');
    } , (err) =>{
      console.log("Encontro error");
      Swal.fire({
        
        icon: 'error',
        title:'Error al Autenticar',
        text: err.error.error.message
      });
    });
    

   }

}
