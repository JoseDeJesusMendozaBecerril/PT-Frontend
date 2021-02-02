import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter } from '@angular/core'; //input mandar comp papa a hijo
import{ Router } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria:any={}; //alguna de las propiedades puede venir de afuera recibir heroe de afuera
  @Input() index:number; //propiedad recibo de componente ṕapa

  @Output() categoriaSeleccionado:EventEmitter<number>; // emite id nombre del evento que yo quiero que el padre este escuchando 
   
  constructor(private router:Router) { 
      this.categoriaSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verCategoria(){
    this.router.navigate(['/home/productos-categoria',this.index]);
  }

}
