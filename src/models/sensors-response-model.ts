import {SensorModel} from './sensor.model';

export class SensorsResponseModel {
  level: number;
  sensors: Array<SensorModel>;
  pumps: Array<SensorModel>;
}
