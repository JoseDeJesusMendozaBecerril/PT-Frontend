import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { UsuarioModel } from 'src/app/models/usuario.model';
import {AuthService} from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Usuario2Model } from '../../models/usuario2.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usuario:UsuarioModel;
  usuario2:Usuario2Model;
  recordarme=false;
  response;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    //this.usuario = new UsuarioModel();
    this.usuario2 = new Usuario2Model();
  }

  onSubmit(form:NgForm){

    if(form.invalid){
      console.log("Entra error",form.invalid);
      return;
    }
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere porfavor...'
    });
    Swal.showLoading();
    
     console.log("Formulario enviado");
     console.log(this.usuario2);
     console.log(form);
     
      this.auth.nuevoUsuario2(this.usuario2).subscribe(resp => {
        Swal.close()
        this.response = resp;
        this.router.navigateByUrl('/home')
        console.log("Esta es la resp" , this.response);
      }, (err) => {
        console.log("Encontro un error");
        Swal.fire({
          icon: 'error',
          title:'Error al Autenticar',
          text: "Usuario existente"
        });
      }
      
      );
  }
    
}
