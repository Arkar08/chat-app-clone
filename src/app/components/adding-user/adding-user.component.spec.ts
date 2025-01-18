import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingUserComponent } from './adding-user.component';

describe('AddingUserComponent', () => {
  let component: AddingUserComponent;
  let fixture: ComponentFixture<AddingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
