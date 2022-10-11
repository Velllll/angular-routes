import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';
import { UserResolver } from './resolver/user.resolver';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'user/:id', component: UsersComponent, resolve: {
    user: UserResolver
  }},
  {path: '', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
