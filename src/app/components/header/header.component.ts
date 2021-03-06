import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    headersList = [
        {
            label: 'HOME',
            scroll: 'home',
            navigate: '',
            icon: 'fa fa-home'
        },
        {
            label: 'ABOUT',
            scroll: 'about',
            navigate: '/about',
            icon: 'fa fa-info-circle'
        },
        {
            label: 'PROJECTS',
            scroll: 'projects',
            navigate: '/projects',
            icon: 'fa fa-tasks'
        },
        {
            label: 'CONTACT',
            scroll: 'contact',
            navigate: '/contact',
            icon: 'fa fa-address-card'
        }
    ];

    socialProfiles = [
        {
            label: 'Email',
            link: 'mailto:shreyas.savanoor2612@gmail.com',
            icon: 'fa fa-envelope'
        },
        {
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/shreyas-savanoor-ravindra/',
            icon: 'fa fa-linkedin'
        },
        {
            label: 'Instagram',
            link: 'https://www.instagram.com/shreyas_savanoor/',
            icon: 'fa fa-instagram'
        },
        {
            label: 'Facebook',
            link: 'https://www.facebook.com/shreyas.savanoor',
            icon: 'fa fa-facebook'
        }
    ];

    constructor(private commonService: CommonServiceService) { }

    ngOnInit(): void {
    }

    scroll(target) {
        this.commonService.scroll(target);
    }

}
