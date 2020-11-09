import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]'
})
export class PhoneMaskDirective {

  @Input('phoneMask')
  phoneMask: string;

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onInputChange(inputValue: string): void {
    if (inputValue) {

      let newValue = this.phoneMask;
      inputValue = inputValue.replace(/\D/g, '');
      let delNumbers = this.phoneMask.replace(/\D/g, '');

      inputValue = inputValue.slice(delNumbers.length);

      for (let i = 0; i < inputValue.length; i++) {
        newValue = newValue.replace('_', inputValue.charAt(i));
      }

      if (newValue.indexOf('_') >= 0) {
        newValue = newValue.substring(0, newValue.indexOf('_'));

        if (newValue.slice(-3) === ' - ') {
          newValue = newValue.slice(0, -3);
        } else if (newValue.slice(-2) === ') ') {
          newValue = newValue.slice(0, -2);
        }
      }

      this.ngControl.valueAccessor.writeValue(newValue);
    }
  }

  @HostListener('focus', ['$event'])
  clearMask(): void {
    if (this.ngControl.value === this.phoneMask || !this.ngControl.value) {
      this.ngControl.valueAccessor.writeValue(this.phoneMask.slice(0, this.phoneMask.indexOf('_')));
    }
  }
}
