import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { SortContactsPipe } from './pipes/sort-favorites.pipe';

@NgModule({
  declarations: [PhoneMaskDirective, SortContactsPipe],
  imports: [CommonModule],
  exports: [PhoneMaskDirective, SortContactsPipe]
})
export class SharedModule {}
