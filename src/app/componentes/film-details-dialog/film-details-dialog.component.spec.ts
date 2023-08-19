import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsDialogComponent } from './film-details-dialog.component';

describe('FilmDetailsDialogComponent', () => {
  let component: FilmDetailsDialogComponent;
  let fixture: ComponentFixture<FilmDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
