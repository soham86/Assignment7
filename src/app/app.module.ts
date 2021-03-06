import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidRequestComponent } from './invalid-request/invalid-request.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    SubjectsComponent,
    InvalidRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
