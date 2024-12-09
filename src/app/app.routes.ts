import { Routes } from '@angular/router';
import { CategoryInsertComponent } from './page/category/insert/category-insert.component';
import { CategoryGetAllComponent } from './page/category/getall/category-get-all.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'category/insert', component: CategoryInsertComponent },
	{ path: 'category/getall', component: CategoryGetAllComponent }
];