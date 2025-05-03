import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './path/app-routing.module';
import { AppComponent } from './app.component';

// Import FormsModule to enable template-driven forms (place in imports)
import { FormsModule } from '@angular/forms';

// Import HttpClientModule to enable HTTP requests(place in imports)
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './pages/todo/todo.component';
import { LoginComponent } from './pages/login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }