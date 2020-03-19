import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    //Hi, I am Shreyas Savanoor Ravindra. Welcome to my world!!I am currently working as Frontend Engineer in Recruiterflow.I have 33 months of industry experience working as Software Development Engineer. In my tenure of 33 months, I have worked in both MNC and an early stage start-up.I have 33 months of industry experience working as Software Development Engineer. In my tenure of 33 months, I have worked in both MNC and an early stage start-up.I am interested to work in areas like Data Science, Machine Learning, Computer Vision, Image Processing and Python Developer. I love to build solutions for challenging problems.My goal is to become jack of all and master of everything. My ultimate ambition in life is to become a very powerful person in tech industry.

    // myBioLists = [
    //     {
    //         text: "Hi, I am Shreyas Savanoor Ravindra. Welcome to my world!!"
    //     },
    //     {
    //         text: "I am currently working as Frontend Engineer in Recruiterflow."
    //     },
    //     {
    //         text: "I have 33 months of industry experience working as Software Development Engineer. In my tenure of 33 months, I have worked in both MNC and an early stage start-up."
    //     },
    //     {
    //         text: "I am interested to work in area's like Data Science, Machine Learning, Computer Vision, Image Processing and Python Developer. I love to build solutions for challenging problem's."
    //     },
    //     {
    //         text: "My goal is to become jack of all and master of everything. My ultimate ambition in life is to become a very powerful person in tech industry."
    //     }
    // ];

    bio: any = '';
    
    mySkills: any = [];
    mobileView = false;
    constructor(private commonService: CommonServiceService) { }

    ngOnInit(): void {
        this.resize();
        this.fetchAboutData();
        this.fetchSkills();
    }

    resize() {
        if(window.innerWidth < 768) {
            this.mobileView = true;
        } else {
            this.mobileView = false;
        }
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
