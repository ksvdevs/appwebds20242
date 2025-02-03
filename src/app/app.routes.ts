import { Routes } from '@angular/router';
import { CategoryInsertComponent } from './page/category/insert/category-insert.component';
import { CategoryGetAllComponent } from './page/category/getall/category-get-all.component';
import { ClientInsertComponent } from './page/client/insert/client-insert.component';
import { ClientGetAllComponent } from './page/client/getall/client-get-all.component';
import { UserLoginComponent } from './page/user/login/user-login.component';
import { UserInsertComponent } from './page/user/insert/user-insert.component';
import { UserGetAllComponent } from './page/user/getall/user-get-all.component';
import { authGuard } from './guard/auth.guard';


export const routes: Routes = [

	{ path: '', redirectTo: 'user/getall', pathMatch: 'full' },
	{ path: 'user/login', component: UserLoginComponent },
	{ path: 'user/insert', component: UserInsertComponent , canActivate: [authGuard]},
	{ path: 'user/getall', component: UserGetAllComponent , canActivate: [authGuard]},
	{ path: 'category/getall', component: CategoryGetAllComponent, canActivate: [authGuard] },
	{ path: 'category/insert', component: CategoryInsertComponent , canActivate: [authGuard] },
	{ path: 'client/insert', component: ClientInsertComponent, canActivate: [authGuard] },
	{ path: 'client/getall', component: ClientGetAllComponent, canActivate: [authGuard] },
];