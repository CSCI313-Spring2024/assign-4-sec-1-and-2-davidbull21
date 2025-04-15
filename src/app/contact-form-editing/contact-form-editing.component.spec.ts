import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormEditingComponent } from './contact-form-editing.component';

describe('ContactFormEditingComponent', () => {
  let component: ContactFormEditingComponent;
  let fixture: ComponentFixture<ContactFormEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormEditingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
