import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';
import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent,
    SidebarComponent
    
  ]
})
export class SharedModule { }
