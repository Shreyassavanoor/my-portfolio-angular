import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    bio: any = '';
    mySkills: any = [];
    constructor(private commonService: CommonServiceService) { }

    ngOnInit(): void {
        this.fetchAboutData();
        this.fetchSkills();
    }

    fetchAboutData() {
        this.commonService.getData('about').subscribe( response => {
            this.bio = response;
        });
    }

    fetchSkills(){
        this.commonService.getData('skills').subscribe( response => {
            this.mySkills = response;
        });
    }

}
