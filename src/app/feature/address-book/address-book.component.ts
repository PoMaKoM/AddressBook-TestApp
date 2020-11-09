import { Component, OnInit } from '@angular/core';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.updateContacts();
  }
}
