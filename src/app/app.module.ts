import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { SortAndFilterComponent } from './sort-and-filter/sort-and-filter.component';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { HttpInterceptorBasicAuthService } from './services/http/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,

    ListTodosComponent,
   
    MenuComponent,

    FooterComponent,

    LogoutComponent,

    AboutComponent,

    TodoComponent,

    SortAndFilterComponent,

    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
