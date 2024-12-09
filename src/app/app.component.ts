import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from './api/category.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  category: any = {};

	constructor(
		private categoryService: CategoryService
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
}
