import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { EventsComponent } from './events/events.component';
import { PicturesComponent } from './pictures/pictures.component';
import { CleanComponent } from './clean/clean.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventsComponent,
    PicturesComponent,
    CleanComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
