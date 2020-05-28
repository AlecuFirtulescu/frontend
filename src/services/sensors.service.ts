import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SensorsResponseModel} from '../models/sensors-response-model';

@Injectable()
export class SensorsService {
  constructor(private httpClient: HttpClient) {
  }

  public getSensors(): Observable<SensorsResponseModel> {
    const url: string = 'http://172.20.1.1:5000/getdata';
    return this.httpClient.get<SensorsResponseModel>(url);
  }
}
