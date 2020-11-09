import { FormInputComponent } from './form-input.component';
import { MockContactsService } from '../../../../../unit/mock-contacts-service';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let contactsService = new MockContactsService();

  beforeEach(() => {
    component = new FormInputComponent(contactsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form group', () => {
    component.ngOnInit();
    expect(component.contactAddForm.get('surname')).toBeTruthy();
    expect(component.contactAddForm.get('name')).toBeTruthy();
    expect(component.contactAddForm.get('patronymic')).toBeTruthy();
    expect(component.contactAddForm.get('phone')).toBeTruthy();
  });

  it('should not submit form if invalid', () => {
    const spy = spyOn(contactsService, 'addContact');
    component.ngOnInit();
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should submit form if valid', () => {
    const spy = spyOn(contactsService, 'addContact');
    component.ngOnInit();
    component.contactAddForm.controls.surname.setValue('mockSurname');
    component.contactAddForm.controls.phone.setValue('+7 (000) 000 - 00 - 00');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
