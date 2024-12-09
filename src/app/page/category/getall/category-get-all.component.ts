import { Component } from '@angular/core';
import { CategoryService } from '../../../api/category.service';

@Component({
  selector: 'app-category-get-all',
  standalone: true,
  imports: [],
  templateUrl: './category-get-all.component.html',
  styleUrl: './category-get-all.component.css'
})
export class CategoryGetAllComponent {
  category: any = {};
	constructor(
		private categoryService: CategoryService,
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