import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancailComponent } from './financail.component';

describe('FinancailComponent', () => {
  let component: FinancailComponent;
  let fixture: ComponentFixture<FinancailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
