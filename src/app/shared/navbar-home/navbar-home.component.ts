import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  
  termino:string;


  constructor(private activatedRoute:ActivatedRoute, private _productosService:ProductosService , private router:Router , private auth:AuthService) { 

  }

  ngOnInit(): void {
    
  }

  buscar(termino:string){
    console.log(termino);
    this.router.navigate(['/home/busquedas',termino]);
  }

  salir(){
    this.auth.logout();
    this._productosService.clearLocalStorage();
    this.router.navigateByUrl("/login");

}


}
