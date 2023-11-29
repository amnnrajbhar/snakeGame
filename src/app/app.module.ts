import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GameFieldComponent, SnakeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
