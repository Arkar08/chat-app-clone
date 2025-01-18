import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCardsComponent } from './message-cards.component';

describe('MessageCardsComponent', () => {
  let component: MessageCardsComponent;
  let fixture: ComponentFixture<MessageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
