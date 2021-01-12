import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideOptionsAdminComponent } from './side-options-admin/side-options-admin.component';
import { SideOptionsClientComponent } from './side-options-client/side-options-client.component';





@NgModule({
  declarations: [
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent,
    SidebarComponent,
    SideOptionsAdminComponent,
    SideOptionsClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent,
    SidebarComponent,
    SideOptionsAdminComponent,
    SideOptionsClientComponent
    
  ]
})
export class SharedModule { }
