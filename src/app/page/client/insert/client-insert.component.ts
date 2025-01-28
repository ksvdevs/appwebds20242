import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../api/client.service';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from '../../../component/notify/notify.component';

@Component({
  selector: 'app-client-insert',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyComponent
  ],
  templateUrl: './client-insert.component.html',
  styleUrl: './client-insert.component.css'
})
export class ClientInsertComponent {
  frmClientInsert: UntypedFormGroup;

  get firstNameFb() { return this.frmClientInsert.controls['firstName']; }
  get surnameFb() { return this.frmClientInsert.controls['surName']; }
  get dniFb() { return this.frmClientInsert.controls['dni']; }
  get genderFb() { return this.frmClientInsert.controls['gender']; }
  get phoneFb() { return this.frmClientInsert.controls['phone']; }
  get addressFb() { return this.frmClientInsert.controls['address']; }
  get birthDateFb() { return this.frmClientInsert.controls['birthDate']; }
  get emailFb() { return this.frmClientInsert.controls['email']; }



  typeResponse: string = '';
  listMessageResponse: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
  ) {
    this.frmClientInsert = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      surName: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  public save(): void {
    if (!this.frmClientInsert.valid) {
      this.frmClientInsert.markAllAsTouched();
      this.frmClientInsert.markAsDirty();

      return;
    }

    let formData = new FormData();

    formData.append('firstName', this.firstNameFb.value);
    formData.append('surName', this.surnameFb.value);
    formData.append('dni', this.dniFb.value);
    formData.append('gender', this.genderFb.value);
    formData.append('phone', this.phoneFb.value);
    formData.append('address', this.addressFb.value);
    formData.append('birthDate', this.birthDateFb.value);
    formData.append('email', this.emailFb.value);

    this.clientService.insert(formData).subscribe({
      next: (response: any) => {
        this.typeResponse = response.mo.type;
        this.listMessageResponse = response.mo.listMessage;
        switch (response.mo.type) {
          case 'success':
            this.frmClientInsert.reset();
            break;
          case 'error':
            if (response.mo.listMessage && Array.isArray(response.mo.listMessage)) {
              response.mo.listMessage.forEach((message: string) => {
                console.error(message);
                alert(message);
              });
            }
            break;
        }
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
