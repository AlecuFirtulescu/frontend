import { Component } from '@angular/core';
import { SensorsService } from '../services/sensors.service';
import {SensorsResponseModel} from '../models/sensors-response-model';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sensorsResponseModel: SensorsResponseModel;
  constructor(private sensorsService: SensorsService) {
    interval(1000).subscribe(() => {
      this.sensorsService.getSensors().subscribe((sensorsResponse: SensorsResponseModel) => {
        this.sensorsResponseModel = sensorsResponse;
      });
    });
  }
}
