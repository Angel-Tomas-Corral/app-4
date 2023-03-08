import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonajesCComponent } from './list-personajes-c.component';

describe('ListPersonajesCComponent', () => {
  let component: ListPersonajesCComponent;
  let fixture: ComponentFixture<ListPersonajesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonajesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonajesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
