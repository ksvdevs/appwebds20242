import { Component } from '@angular/core';
import { CategoryService } from '../../../api/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-get-all',
  standalone: true,
  imports: [
	CommonModule
  ],
  templateUrl: './category-get-all.component.html',
  styleUrl: './category-get-all.component.css'
})
export class CategoryGetAllComponent {
	listCategory: any[] = [];

	constructor(
		private categoryService: CategoryService
	) {}

	ngOnInit() {
		this.categoryService.getAll().subscribe({
			next: (response: any) => {
				this.listCategory = response.dto.listCategory;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	delete(idcategory: string): void {
		this.categoryService.delete(idcategory).subscribe({
			next: (response: any) => {
				this.listCategory = this.listCategory.filter(x => x.idcategory != idcategory);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}