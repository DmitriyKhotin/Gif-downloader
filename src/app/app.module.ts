import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';
import { GroupedCardsComponent } from './grouped-cards/grouped-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GroupedCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
