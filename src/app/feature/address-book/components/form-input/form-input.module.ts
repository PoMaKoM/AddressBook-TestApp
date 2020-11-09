import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [FormInputComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FormInputComponent]
})
export class FormInputModule {}
