import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { ContactTableComponent } from './contact-table.component';


@NgModule({
  declarations: [ContactTableComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactTableComponent]
})
export class ContactTableModule {}
