import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { SortAndFilterComponent } from './sort-and-filter/sort-and-filter.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService] },
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService] },
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService] },
  {path:'sortandfilter',component:SortAndFilterComponent,canActivate:[RouteGuardService] },
  {path:'todos/:id',component:TodoComponent,canActivate:[RouteGuardService] },
  {path:'about',component:AboutComponent },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
