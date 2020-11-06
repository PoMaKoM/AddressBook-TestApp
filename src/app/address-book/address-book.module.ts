import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';

@NgModule({
  declarations: [AddressBookComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [AddressBookComponent]
})
export class AddressBookModule { }
