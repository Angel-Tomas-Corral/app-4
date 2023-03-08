import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaduraComponetComponent } from './armadura-componet.component';

describe('ArmaduraComponetComponent', () => {
  let component: ArmaduraComponetComponent;
  let fixture: ComponentFixture<ArmaduraComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaduraComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmaduraComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
