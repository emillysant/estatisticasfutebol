import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { TokenService } from './core/token/token.service';
import { AuthGuard } from './core/guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptInterceptor } from './core/intercept/intercept.interceptor';
import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule
  ],
  providers: [
    TokenService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
