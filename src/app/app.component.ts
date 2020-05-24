import { Component } from '@angular/core';
import { SensorsService } from '../services/sensors.service';
import {SensorsResponseModel} from '../models/sensors-response-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sensorsResponseModel: SensorsResponseModel;
  constructor(private sensorsService: SensorsService) {
    sensorsService.getSensors().subscribe((sensorsResponse: SensorsResponseModel) => {
      this.sensorsResponseModel = sensorsResponse;
    });
  }
}
