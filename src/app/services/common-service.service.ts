import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class CommonServiceService {
    api: any = 'https://shreyassavanoor-portfolio.firebaseio.com/';
    constructor(private http: HttpClient, private titleService: Title) { }

    scroll(title) {
        this.titleService.setTitle(title[0].toUpperCase() + title.slice(1) + " | Shreyas Portfolio");
        document.getElementById(title).scrollIntoView({ behavior: 'smooth' });
    }

    getData(name) {
        return this.http.get(this.api + name + '.json');
    }

    updateData(name, data) {
        return this.http.put(this.api + name + '.json', data);
    }
}
