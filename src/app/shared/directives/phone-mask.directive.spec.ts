import { PhoneMaskDirective } from './phone-mask.directive';
import { NgControl } from '@angular/forms';

describe('PhoneMaskDirective', () => {
  let directive: PhoneMaskDirective;
  const ngControl = {
    valueAccessor: {
      writeValue(obj: any) {}
    },
    value: ''
  } as NgControl;

  beforeEach(() => {
    directive = new PhoneMaskDirective(ngControl);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should mask number', () => {
    const spy = spyOn(ngControl.valueAccessor, 'writeValue');
    directive.phoneMask = '+7 (___) ___ - __ - __';
    directive.onInputChange('+7 (');
    expect(spy).toHaveBeenCalledWith('+7 (');
    directive.onInputChange('+7 (000) ');
    directive.onInputChange('+7 (000) 000 - ');
    directive.onInputChange('+7 (000) 000 - 00 - 00');
    directive.onInputChange('+7 (000) 000 - 00 - 001');
    expect(spy).toHaveBeenCalledWith('+7 (000) 000 - 00 - 00');
  });

  it('should clear mask', () => {
    directive.phoneMask = '+7 (___) ___ - __ - __';
    directive.clearMask();
    expect(directive).toBeTruthy();
  });

  it('should not mask number if input value is empty', () => {
    expect(directive.onInputChange('')).toBeUndefined();
  });
});
