import { Component } from '@angular/core';
import { UserService } from '../../../api/user.service';
import { NotifyComponent } from '../../../component/notify/notify.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-get-all',
  standalone: true,
  imports: [
    CommonModule,
		NotifyComponent
  ],
  templateUrl: './user-get-all.component.html',
  styleUrl: './user-get-all.component.css'
})
export class UserGetAllComponent {

  listUser: any[] = [];

	typeResponse: string = '';
	listMessageResponse: string[] = [];

	constructor(
		private userService: UserService
	) {}

  ngOnInit() {
		this.userService.getAll().subscribe({
			next: (response: any) => {
				this.listUser = response.dto.listUser;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
