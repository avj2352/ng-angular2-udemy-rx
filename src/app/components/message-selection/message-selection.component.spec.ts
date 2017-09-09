import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSelectionComponent } from './message-selection.component';

describe('MessageSelectionComponent', () => {
  let component: MessageSelectionComponent;
  let fixture: ComponentFixture<MessageSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
