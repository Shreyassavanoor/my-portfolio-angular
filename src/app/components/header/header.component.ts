import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    headersList = [
        {
            label: 'HOME',
            navigate: ''
        },
        {
            label: 'ABOUT',
            navigate: '/about'
        },
        {
            label: 'PROJECTS',
            navigate: '/projects'
        },
        {
            label: 'CONTACT',
            navigate: '/contact'
        }
    ]; 

    constructor() { }

    ngOnInit(): void {
    }
    
}
