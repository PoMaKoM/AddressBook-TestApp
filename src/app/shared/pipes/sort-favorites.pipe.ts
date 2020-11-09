import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
  name: 'sortContacts',
  pure: false
})
export class SortContactsPipe implements PipeTransform {
  transform(contacts: Contact[]): Contact[] {
    return contacts.sort((contactA, contactB) => {
      return contactA.isFavorite === contactB.isFavorite ? 0 : contactA.isFavorite && !contactB.isFavorite ? -1 : 1;
    });
  }
}
