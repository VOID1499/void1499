import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificaciones } from './certificaciones';

describe('Certificaciones', () => {
  let component: Certificaciones;
  let fixture: ComponentFixture<Certificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
