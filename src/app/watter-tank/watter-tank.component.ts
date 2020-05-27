import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-watter-tank',
  templateUrl: './watter-tank.component.html',
  styleUrls: ['./watter-tank.component.css']
})
export class WatterTankComponent {

  @Input()
  public watterLevel: number;

}
