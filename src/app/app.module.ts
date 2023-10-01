import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/pages/home/home.component';
import { RecordsComponent } from './public/pages/records/records.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { MarathonWinnerComponent } from './marathon/pages/marathon-winner/marathon-winner.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordsComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    MarathonWinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
