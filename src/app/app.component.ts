import { Component } from '@angular/core';
import {SensorModel} from '../models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sensor: SensorModel = {
    name: 'Test sensor',
    status: true
  };
}
