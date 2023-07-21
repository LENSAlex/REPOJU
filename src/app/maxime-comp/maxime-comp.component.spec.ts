import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximeCompComponent } from './maxime-comp.component';

describe('MaximeCompComponent', () => {
  let component: MaximeCompComponent;
  let fixture: ComponentFixture<MaximeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
