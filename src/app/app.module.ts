import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { MonsterComponent } from './components/monstercalc.component';
import { AboutComponent } from './components/about.component';
import { TreasureComponent } from './components/treasure.component';
import { MapBuilderComponent } from './components/mapbuilder.component';
import { NavBarComponent } from './components/navbar.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    AboutComponent,
    HomeComponent,
    TreasureComponent,
    MapBuilderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
