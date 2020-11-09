import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddressBookModule } from '../feature/address-book/address-book.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from '../feature/address-book/services/contacts.service';
import { AddressBookComponent } from '../feature/address-book/address-book.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AddressBookModule, HttpClientModule],
  providers: [ContactsService],
  bootstrap: [AddressBookComponent]
})
export class CoreModule {}
