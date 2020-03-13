import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    mobileView = false;

    ngOnInit() {
        this.resize();
    }

    resize() {
        if (window.innerWidth < 768) {
            this.mobileView = true;
        } else {
            this.mobileView = false;
        }
    }

}
