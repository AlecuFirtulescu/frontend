import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatterTankComponent } from './watter-tank.component';

describe('WatterTankComponent', () => {
  let component: WatterTankComponent;
  let fixture: ComponentFixture<WatterTankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatterTankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatterTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
