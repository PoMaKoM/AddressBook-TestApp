import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../../shared/models/contact';
import { BehaviorSubject } from 'rxjs';
import { MathUtils } from '../../../../unit/math-utils';

@Injectable({
  providedIn: 'root'
})
export class ContactsService implements OnDestroy {
  /**
   * Contains an up-to-date array of contacts
   * @type {BehaviorSubject<Contact[]>}
   */
  contacts$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  /**
   * Service for interacting with contacts
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Updates contacts. Gets contacts from localStorage. If it is empty, requests the server
   */
  updateContacts(): void {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageContacts?.length) {
      this.contacts$.next(localStorageContacts);
    } else {
      this.http.get<Contact[]>('./assets/initialContacts.json').subscribe(
        response => {
          this.contacts$.next(response);
        }
      );
    }

    this.subscribeContactsChanges();
  }

  /**
   * Adds contactData
   * @param contactData
   */
  addContact(contactData: Contact): void {
    this.contacts$.next([...this.contacts$.getValue(), {...contactData, id: MathUtils.getRandomArbitrary().toString()}]);
  };

  /**
   * Sets the status for a contact
   * @param {string} id
   * @param {boolean} status
   */
  setFavoriteStatus(id: string, status: boolean): void {
    const newContacts = this.contacts$.getValue();
    newContacts.find((contact) => (contact.id === id)).isFavorite = status;
    this.contacts$.next(newContacts);
  }

  /**
   * Deletes a contact
   * @param {string} id
   */
  deleteContact(id: string): void {
    const newContacts = [...this.contacts$.value];
    const contactToDelete = newContacts.find((contact) => (contact.id === id));
    newContacts.splice(newContacts.indexOf(contactToDelete), 1);
    this.contacts$.next(newContacts);
  }

  /**
   * Subscription to update contacts in localStorage
   * @private
   */
  private subscribeContactsChanges(): void {
    this.contacts$.asObservable().subscribe((contacts) => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    });
  }

  /**
   * Unsubscribe on destroy
   */
  ngOnDestroy(): void {
    this.contacts$.next([]);
    this.contacts$.complete();
  };

}
