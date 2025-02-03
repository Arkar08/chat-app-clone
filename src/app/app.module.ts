import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './pages/chat-list/chat-list.component';
import { MessageComponent } from './pages/message/message.component';
import { CardComponent } from './components/card/card.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddingUserComponent } from './components/adding-user/adding-user.component';
import { FormsModule } from '@angular/forms';
import { MessageCardsComponent } from './components/message-cards/message-cards.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { DatePipe } from '@angular/common';
import { SocketService } from './socket.service';



@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageComponent,
    CardComponent,
    SingleLayoutComponent,
    AddingUserComponent,
    MessageCardsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, multi: true}
    ,ApiService,DatePipe,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
