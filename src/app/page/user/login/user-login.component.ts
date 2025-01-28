import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { NotifyComponent } from '../../../component/notify/notify.component';
import { Router } from '@angular/router';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NotifyComponent
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  frmUserLogin: UntypedFormGroup;
  typeResponse: string = '';
  listMessageResponse: string[] = [];

  get nameUserFb() { return this.frmUserLogin.controls['nameUser']; }
  get passwordFb() { return this.frmUserLogin.controls['password']; }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.frmUserLogin = this.formBuilder.group({
      nameUser: ['', []],
      password: ['', []]
    });
  }


  public login(): void {
    let formData = new FormData();

    formData.append('nameUser', this.nameUserFb.value);
    formData.append('password', this.passwordFb.value);

    this.userService.login(formData).subscribe({
      next: (response: any) => {
        this.typeResponse = response.mo.type;
        this.listMessageResponse = response.mo.listMessage;

        switch (response.mo.type) {
          case 'success':
            localStorage.setItem('sessionIdUser', response.dto.user.idUser);
            localStorage.setItem('sessionNameUser', response.dto.user.nameUser);

            this.router.navigate(['/user/getall']);

            break;
        }
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}