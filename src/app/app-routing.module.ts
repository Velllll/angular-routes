import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutuGuard } from './guards/autu.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { AddProductComponent } from './home/admin/add-product/add-product.component';
import { AddUserComponent } from './home/admin/add-user/add-user.component';
import { AdminComponent } from './home/admin/admin.component';
import { HomeComponent } from './home/home/home.component';
import { ListComponent } from './home/admin/list/list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AutuGuard], 
      children: [
        {path: '', canActivateChild: [PermissionsGuard],  children: [
          {path: 'add-user', component: AddUserComponent},
          {path: 'add-product', component: AddProductComponent},
        ]},
        {path: 'list', component: ListComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
