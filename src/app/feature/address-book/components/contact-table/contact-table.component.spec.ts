import { ContactTableComponent } from './contact-table.component';
import { MockContactsService } from '../../../../../unit/mock-contacts-service';

describe('ContactTableComponent', () => {
  let component: ContactTableComponent;
  const contactsService = new MockContactsService();

  beforeEach(() => {
    component = new ContactTableComponent(contactsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete contact', () => {
    const spy = spyOn(contactsService, 'deleteContact');
    component.deleteContact('1');
    expect(spy).toHaveBeenCalled();
  });

  it('should set favorite status', () => {
    const spy = spyOn(contactsService, 'setFavoriteStatus');
    component.setFavoriteStatus('1', true);
    expect(spy).toHaveBeenCalled();
  });
});
