import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notas } from './notas';

describe('Notas', () => {
  let component: Notas;
  let fixture: ComponentFixture<Notas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
