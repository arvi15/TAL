import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateServerComponent } from './calculate-server.component';

describe('CalculateServerComponent', () => {
  let component: CalculateServerComponent;
  let fixture: ComponentFixture<CalculateServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
