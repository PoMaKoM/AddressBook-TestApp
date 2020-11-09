import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';
import { ContactTableModule } from './components/contact-table/contact-table.module';
import { FormInputModule } from './components/form-input/form-input.module';

@NgModule({
  declarations: [AddressBookComponent],
  imports: [CommonModule, ContactTableModule, FormInputModule],
  exports: [AddressBookComponent]
})
export class AddressBookModule {}
