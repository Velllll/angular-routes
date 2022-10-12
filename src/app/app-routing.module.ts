import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './pages/photos/photo-details/photo-details.component';
import { PhotosSidebarComponent } from './pages/photos/photos-sidebar/photos-sidebar.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UserSidebarComponent } from './pages/users/user-sidebar/user-sidebar.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserSidebarComponent},
  {path: 'users/:id', component: UserDetailsComponent, outlet: 'details'},
  {path: 'photos', component: PhotosSidebarComponent},
  {path: 'photos/:id', component: PhotoDetailsComponent, outlet: 'details'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
