import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SensorStatusComponent } from './sensor-status/sensor-status.component';
import {SensorsService} from '../services/sensors.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SensorStatusComponent
  ],
  providers: [
    SensorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
