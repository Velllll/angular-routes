import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { AddProductComponent } from './home/admin/add-product/add-product.component';
import { AddUserComponent } from './home/admin/add-user/add-user.component';
import { ListComponent } from './home/admin/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AddProductComponent,
    AddUserComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
