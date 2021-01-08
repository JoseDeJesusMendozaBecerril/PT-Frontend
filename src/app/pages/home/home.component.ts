import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  historial:string = 'historial';
  preferencias:string = 'preferencias';
  vistas:string = 'vistas';

  ngOnInit(): void {
  }

}
