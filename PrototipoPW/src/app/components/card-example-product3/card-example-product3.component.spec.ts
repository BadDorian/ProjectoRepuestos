import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExampleProduct3Component } from './card-example-product3.component';

describe('CardExampleProduct3Component', () => {
  let component: CardExampleProduct3Component;
  let fixture: ComponentFixture<CardExampleProduct3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExampleProduct3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardExampleProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
