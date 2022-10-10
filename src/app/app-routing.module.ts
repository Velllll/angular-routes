import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from './guards/form.guard';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent, canDeactivate: [FormGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
