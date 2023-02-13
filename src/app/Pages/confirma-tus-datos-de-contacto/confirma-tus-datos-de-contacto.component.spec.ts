import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaTusDatosDeContactoComponent } from './confirma-tus-datos-de-contacto.component';

describe('ConfirmaTusDatosDeContactoComponent', () => {
  let component: ConfirmaTusDatosDeContactoComponent;
  let fixture: ComponentFixture<ConfirmaTusDatosDeContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaTusDatosDeContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmaTusDatosDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
