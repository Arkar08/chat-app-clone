import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListComponent } from './pages/chat-list/chat-list.component';
import { MessageComponent } from './pages/message/message.component';
import { CardComponent } from './components/card/card.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageComponent,
    CardComponent,
    SingleLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
