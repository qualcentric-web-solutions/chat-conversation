import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversationsComponent } from './conversations/conversations.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationsComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
