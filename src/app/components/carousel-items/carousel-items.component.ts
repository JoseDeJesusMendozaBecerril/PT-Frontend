import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent implements OnInit {

  @Input() idCarousel: string;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.idCarousel);
  }

}
