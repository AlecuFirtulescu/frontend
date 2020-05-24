import {Component, Input } from '@angular/core';
import {SensorModel} from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-status',
  templateUrl: './sensor-status.component.html',
  styleUrls: ['./sensor-status.component.scss']
})
export class SensorStatusComponent {
  @Input() public sensor: SensorModel;
}
