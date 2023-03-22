import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { I2, I3 } from './interceptors.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I3,
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
