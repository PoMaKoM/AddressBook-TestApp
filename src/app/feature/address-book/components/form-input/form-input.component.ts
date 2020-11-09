import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent implements OnInit {
  surnameLabel = 'Фамилия';
  nameLabel = 'Имя';
  patronymicLabel = 'Отчество';
  phoneLabel = 'Телефон';

  requiredField = 'Обязательное поле';
  incorrectField = 'Поле заполенно некорректно';

  /**
   * Form for adding a contact
   * @type {FormGroup}
   */
  contactAddForm: FormGroup;

  /**
   * Phone number mask
   */
  phoneMask: string = environment.phoneMask;

  /**
   * Component with input form
   * @param {ContactsService} contactsService
   */
  constructor(private contactsService: ContactsService) { }

  /**
   * Init form group
   */
  ngOnInit(): void {
    this.contactAddForm = new FormGroup(
      {
        surname: new FormControl(null, null),
        name: new FormControl(null, null),
        patronymic: new FormControl(null, null),
        phone: new FormControl(null, null),
      }
    );
  }

  /**
   * Form confirmation event
   */
  onSubmit(): void {
    if (this.isFormValid()) {
      this.contactsService.addContact(this.contactAddForm.getRawValue());
      this.contactAddForm.reset();
    }
  }

  /**
   * Checks if a form is valid
   * @returns {boolean}
   * @private
   */
  private isFormValid(): boolean {
    const surname: AbstractControl = this.contactAddForm.get('surname');
    const phone: AbstractControl = this.contactAddForm.get('phone');

    if (!surname.value?.length) {
      surname.setErrors({incorrect: true});
    }

    if (phone.value === this.phoneMask || phone.value?.length !== this.phoneMask.length) {
      phone?.setErrors({incorrect: true});
    }

    if (!phone.value || !phone.value?.length) {
      phone?.setErrors({empty: true});
    }

    return this.contactAddForm.valid;
  }
}
