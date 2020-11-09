import { ContactsService } from './contacts.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockContact } from '../../../../unit/mock-contact';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpClient = {
    get: url => of('[]')
  } as HttpClient;


  beforeEach(() => {
    service = new ContactsService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update contacts when localStorage is set', () => {
    const spy = spyOn(service.contacts$, 'next');
    localStorage.setItem('contacts', '[{}]');
    service.updateContacts();
    expect(spy).toHaveBeenCalled();
  });

  it('should update contacts when localStorage is empty', () => {
    const spy = spyOn(service.contacts$, 'next');
    localStorage.clear();
    service.updateContacts();
    expect(spy).toHaveBeenCalled();
  });

  it('should add contact', () => {
    const spy = spyOn(service.contacts$, 'next');
    service.addContact(mockContact);
    expect(spy).toHaveBeenCalled();
  });

  it('should set favorite status', () => {
    service.contacts$.next([mockContact]);
    const spy = spyOn(service.contacts$, 'next');
    service.setFavoriteStatus('1', true);
    expect(spy).toHaveBeenCalled();
  });

  it('should unset favorite status', () => {
    service.contacts$.next([mockContact]);
    const spy = spyOn(service.contacts$, 'next');
    service.setFavoriteStatus('1', false);
    expect(spy).toHaveBeenCalled();
  });

  it('should unset favorite status', () => {
    service.contacts$.next([mockContact]);
    const spy = spyOn(service.contacts$, 'next');
    service.deleteContact('1');
    expect(spy).toHaveBeenCalled();
  });

  it('should destroy', () => {
    const spy = spyOn(service.contacts$, 'complete');
    service.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
