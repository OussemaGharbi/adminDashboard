import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { GestionCategoryComponent } from './gestion-category/gestion-category.component';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';
import { GestionComponent } from './gestion/gestion.component';
import { HomeComponent } from './home/home.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path : '' , redirectTo: 'login'  ,pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'navbar' , component: NavbarComponent},
  {path:'gestion' , component: GestionComponent},
  {path:'login' , component: LoginComponent},
  {path:'plat' , component: AddPlatComponent},
  {path:'platlist',component:ListPlatComponent},
  {path:'gestionPlat',component:GestionPlatComponent},
  {path:'gestionCat',component:GestionCategoryComponent},
  {path:'commande',component:ListCommandeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
