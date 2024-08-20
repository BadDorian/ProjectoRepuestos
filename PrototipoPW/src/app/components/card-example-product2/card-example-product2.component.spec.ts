import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExampleProduct2Component } from './card-example-product2.component';

describe('CardExampleProduct2Component', () => {
  let component: CardExampleProduct2Component;
  let fixture: ComponentFixture<CardExampleProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExampleProduct2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardExampleProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
