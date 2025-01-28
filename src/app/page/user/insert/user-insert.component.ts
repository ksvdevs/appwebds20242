import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../api/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from '../../../component/notify/notify.component';

@Component({
  selector: 'app-user-insert',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyComponent
  ],
  templateUrl: './user-insert.component.html',
  styleUrl: './user-insert.component.css'
})
export class UserInsertComponent {
  frmUserLogin: UntypedFormGroup;
  typeResponse: string = '';
  listMessageResponse: string[] = [];

  get nameUserFb() { return this.frmUserLogin.controls['nameUser']; }
  get emailFb() { return this.frmUserLogin.controls['email']; }
  get passwordFb() { return this.frmUserLogin.controls['password']; }
  get passwordRetypeFb() { return this.frmUserLogin.controls['passwordRetype']; }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.frmUserLogin = this.formBuilder.group({
      nameUser: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', []],
      passwordRetype: ['', []],
    });
  }

  public diffPassword(): boolean {
    if (this.passwordFb.value != this.passwordRetypeFb.value) {
      return true;
    }

    return false;
  }
  public save(): void {
    if (!this.frmUserLogin.valid || this.diffPassword()) {
      this.frmUserLogin.markAllAsTouched();
      this.frmUserLogin.markAsDirty();

      return;
    }

    let formData = new FormData();

    formData.append('nameUser', this.nameUserFb.value);
    formData.append('email', this.emailFb.value);
    formData.append('password', this.passwordFb.value);

    this.userService.insert(formData).subscribe({
      next: (response: any) => {
        this.typeResponse = response.mo.type;
        this.listMessageResponse = response.mo.listMessage;

        switch (response.mo.type) {
          case 'success':
            this.frmUserLogin.reset();

            break;
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}