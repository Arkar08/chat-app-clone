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



@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageComponent,
    CardComponent,
    SingleLayoutComponent,
    AddingUserComponent,
    MessageCardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
