import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indice } from './indice';

describe('Indice', () => {
  let component: Indice;
  let fixture: ComponentFixture<Indice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
