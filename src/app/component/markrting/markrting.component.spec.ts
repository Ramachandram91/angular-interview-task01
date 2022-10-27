import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkrtingComponent } from './markrting.component';

describe('MarkrtingComponent', () => {
  let component: MarkrtingComponent;
  let fixture: ComponentFixture<MarkrtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkrtingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkrtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
