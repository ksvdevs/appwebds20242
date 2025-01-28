import { Routes } from '@angular/router';
import { CategoryInsertComponent } from './page/category/insert/category-insert.component';
import { CategoryGetAllComponent } from './page/category/getall/category-get-all.component';
import { ClientInsertComponent } from './page/client/insert/client-insert.component';
import { ClientGetAllComponent } from './page/client/getall/client-get-all.component';
import { UserLoginComponent } from './page/user/login/user-login.component';
import { UserInsertComponent } from './page/user/insert/user-insert.component';
import { UserGetAllComponent } from './page/user/getall/user-get-all.component';


export const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'user/login', component: UserLoginComponent },
	{ path: 'user/insert', component: UserInsertComponent },
	{ path: 'user/getall', component: UserGetAllComponent },
	{ path: 'category/insert', component: CategoryInsertComponent },
	{ path: 'category/getall', component: CategoryGetAllComponent },
	{ path: 'client/insert', component: ClientInsertComponent },
	{ path: 'client/getall', component: ClientGetAllComponent },
];