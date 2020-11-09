import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../../../shared/models/contact';
import { SortContactsPipe } from '../../../../shared/pipes/sort-favorites.pipe';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactTableComponent {
  tableHead: string[] = [
    '',
    'Фамилия',
    'Имя',
    'Отчество',
    'Телефон',
    '',
  ];

  /**
   * Local contacts
   * @type {Contact[]}
   */
  @Input()
  contacts: Contact[];

  sortContactsPipe = new SortContactsPipe();

  constructor(private contactsService: ContactsService) { }

  /**
   * Deletes a contact
   * @param {string} id
   */
  deleteContact(id: string): void {
    this.contactsService.deleteContact(id);
  }

  /**
   * Sets the status for a contact
   * @param {string} id
   * @param {boolean} status
   */
  setFavoriteStatus(id: string, status: boolean) {
    this.contactsService.setFavoriteStatus(id, status);
  }

}
