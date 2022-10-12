import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './pages/photos/photo-details/photo-details.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSidebarComponent } from './pages/users/user-sidebar/user-sidebar.component';
import { PhotosSidebarComponent } from './pages/photos/photos-sidebar/photos-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailsComponent,
    UserDetailsComponent,
    UserSidebarComponent,
    PhotosSidebarComponent
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
