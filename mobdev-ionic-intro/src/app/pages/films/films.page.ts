import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-films',
	templateUrl: './films.page.html',
	styleUrls: ['./films.page.scss'],
})

export class FilmsPage implements OnInit {
	films: Observable<any> | undefined;
	constructor(private router: Router, private http: HttpClient) { }
	
	ngOnInit() {
		this.films = this.http.get('https://swapi.dev/api/films');
	  }
	  
	  showFilm(film: { url: string; }){
		let split = film.url.split('/');
		let filmId = split[split.length-2];
		this.router.navigateByUrl(`/tabs/films/${filmId}`);
	  }
}