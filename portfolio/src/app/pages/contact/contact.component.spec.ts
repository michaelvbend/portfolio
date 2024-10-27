import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;

  beforeEach(() => {
    component = new ContactComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      company: 'Company Inc.',
      email: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should have an invalid form when a required field is missing', () => {
    component.contactForm.setValue({
      name: '',
      company: 'Company Inc.',
      email: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
    expect(component.contactForm.invalid).toBeTruthy();
  });

  it('should show alert and reset form on valid form submission', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      company: 'Company Inc.',
      email: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
    component.onSubmit();
    expect(component.showAlert).toBeTruthy();
    expect(component.contactForm.pristine).toBeTruthy();
    expect(component.contactForm.untouched).toBeTruthy();
  });

  it('should not show alert on invalid form submission', () => {
    component.contactForm.setValue({
      name: '',
      company: 'Company Inc.',
      email: 'john.doe@example.com',
      message: 'Hello, this is a test message.',
    });
    component.onSubmit();
    expect(component.showAlert).toBeFalsy();
  });
});
