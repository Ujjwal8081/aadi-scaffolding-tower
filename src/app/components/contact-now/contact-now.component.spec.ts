import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNowComponent } from './contact-now.component';

describe('ContactNowComponent', () => {
  let component: ContactNowComponent;
  let fixture: ComponentFixture<ContactNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactNowComponent]
    });
    fixture = TestBed.createComponent(ContactNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
