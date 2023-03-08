import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteristicasPersonajeComponent } from './carteristicas-personaje.component';

describe('CarteristicasPersonajeComponent', () => {
  let component: CarteristicasPersonajeComponent;
  let fixture: ComponentFixture<CarteristicasPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteristicasPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteristicasPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
