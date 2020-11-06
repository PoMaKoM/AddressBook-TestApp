import { ContactsService } from '../app/feature/address-book/services/contacts.service';
import { BehaviorSubject, of } from 'rxjs';
import { mockContact } from './mock-contact';
import { Contact } from '../app/shared/models/contact';

export class MockContactsService extends ContactsService {
  constructor() {super(null);}

  contacts$ = {
    asObservable: () => of([mockContact])
  } as BehaviorSubject<Contact[]>;

  addContact(contactData) { }

  updateContacts() { }

  deleteContact(id: string) { }

  setFavoriteStatus(id: string, status: boolean) { }

}
