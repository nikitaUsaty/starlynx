import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsGroupComponent } from './cons-group.component';

describe('ConsGroupComponent', () => {
  let component: ConsGroupComponent;
  let fixture: ComponentFixture<ConsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
