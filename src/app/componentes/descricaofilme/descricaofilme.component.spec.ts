import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaofilmeComponent } from './descricaofilme.component';

describe('DescricaofilmeComponent', () => {
  let component: DescricaofilmeComponent;
  let fixture: ComponentFixture<DescricaofilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaofilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaofilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
