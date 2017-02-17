import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MathService } from './shared/math.service';
import { SettingsService } from './shared/settings.service';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { settingsReducer } from './store/settings.reducer';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent,
    GameComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.provideStore({ settings: settingsReducer })
  ],
  providers: [
    MathService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
