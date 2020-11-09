import { AddressBookComponent } from './address-book.component';
import { MockContactsService } from '../../../unit/mock-contacts-service';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  const contactsService = new MockContactsService();

  beforeEach(() => {
    component = new AddressBookComponent(contactsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    const spy = spyOn(contactsService, 'updateContacts');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
