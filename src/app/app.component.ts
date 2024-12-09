import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from './api/category.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	providers: [
		BsModalService
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	category: any = {};
	constructor(
		private categoryService: CategoryService,
		private modalService: BsModalService
	) { }
	ngOnInit() {
		this.categoryService.getData().subscribe({
			next: (response: any) => {
				this.category = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
	showModal(myModal: TemplateRef<any>): void {
		this.modalService.show(myModal);
	}
	closeModal(): void {
		this.modalService.hide();
	}
}
