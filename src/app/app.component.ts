import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		CommonModule
	],
	providers: [],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	user: any = {};
	public existsLogin() {
		return localStorage.getItem('sessionIdUser') != undefined
		&& localStorage.getItem('sessionIdUser') != null
		&& localStorage.getItem('sessionIdUser') != 'undefined';
	}
}
