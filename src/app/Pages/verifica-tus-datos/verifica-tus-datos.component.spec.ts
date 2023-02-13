import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaTusDatosComponent } from './verifica-tus-datos.component';

describe('VerificaTusDatosComponent', () => {
  let component: VerificaTusDatosComponent;
  let fixture: ComponentFixture<VerificaTusDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificaTusDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificaTusDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
