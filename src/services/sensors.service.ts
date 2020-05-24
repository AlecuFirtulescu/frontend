import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {SensorsResponseModel} from '../models/sensors-response-model';

@Injectable()
export class SensorsService {
  constructor(private httpClient: HttpClient) {
  }

  public getSensors(): Observable<any> {
    const mockedResponse: SensorsResponseModel = {
      sensors: [
        {
          name: 'Test sensor 1',
          active: true
        },
        {
          name: 'Test sensor 1',
          active: true
        },        {
          name: 'Test sensor 1',
          active: true
        },        {
          name: 'Test sensor 1',
          active: true
        },        {
          name: 'Test sensor 1',
          active: true
        },
        {
          name: 'Test sensor 2',
          active: false
        },
        {
          name: 'Test sensor 3',
          active: true
        },
        {
          name: 'Test sensor 4',
          active: false
        }
      ]
    };
    return of(mockedResponse);
  }
}
