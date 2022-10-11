import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './pages/photo-details/photo-details.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'photos', component: PhotosComponent,
    children: [
      {path: ':id', component: PhotoDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
