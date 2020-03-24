import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactList = [
        {
            text: 'EMAIL',
            value: 'shreyas.savanoor2612@gmail.com',
            link: 'mailto:shreyas.savanoor2612@gmail.com',
            icon: 'fa fa-envelope'
        },
        {
            text: 'LINKEDIN',
            value: 'shreyas-savanoor-b9911211a',
            link: 'https://www.linkedin.com/in/shreyas-savanoor-b9911211a/',
            icon: 'fa fa-linkedin'
        },
        {
            text: 'INSTAGRAM',
            value: 'shreyas_savanoor',
            link: 'https://www.instagram.com/shreyas_savanoor/',
            icon: 'fa fa-instagram'
        },
        {
            text: 'FACEBOOK',
            value: 'shreyas.savanoor',
            link: 'https://www.facebook.com/shreyas.savanoor',
            icon: 'fa fa-facebook'
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }
}
