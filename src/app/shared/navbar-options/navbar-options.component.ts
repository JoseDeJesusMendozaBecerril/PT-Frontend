import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-navbar-options',
  templateUrl: './navbar-options.component.html',
  styleUrls: ['./navbar-options.component.css']
})
export class NavbarOptionsComponent implements OnInit {

  constructor(private _productosService:ProductosService) { }

  ngOnInit(): void {
  }

  download(){
    this._productosService.downloadFile('jsontocsv');
  }

}

