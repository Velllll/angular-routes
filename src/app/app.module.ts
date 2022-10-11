import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotoDetailsComponent } from './pages/photo-details/photo-details.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,
    PhotoDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
