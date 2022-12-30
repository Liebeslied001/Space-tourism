import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewModule } from './crew/crew.module';
import { DestinationModule } from './destination/destination.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TechnologyModule } from "./technology/technology.module";
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologyModule,
    DestinationModule,
    CrewModule,
    HomeModule
  ]
})
export class AppModule { }
