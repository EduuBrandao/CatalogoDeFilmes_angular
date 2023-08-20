import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoComponent } from './elenco.component';

describe('ElencoComponent', () => {
  let component: ElencoComponent;
  let fixture: ComponentFixture<ElencoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencoComponent]
    });
    fixture = TestBed.createComponent(ElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
