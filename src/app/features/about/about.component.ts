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
    myResume: any = '';
    showScreenBlockerDownloadResume = false;
    constructor(private commonService: CommonServiceService) { }

    ngOnInit(): void {
        this.fetchAboutData();
        this.fetchSkills();
        this.fetchResume();
    }

    fetchAboutData() {
        this.commonService.getData('about').subscribe(response => {
            this.bio = response;
        });
    }

    fetchSkills() {
        this.commonService.getData('skills').subscribe(response => {
            this.mySkills = response;
        });
    }

    fetchResume() {
        this.commonService.getFile().then((response) => {
            this.myResume = response;
        });
    }

    downloadResume() {
        var self = this;
        this.showScreenBlockerDownloadResume = true;
        this.commonService.getFile().then((url) => {
            // `url` is the download URL

            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                var blob = xhr.response;
                const blobURL = window.URL.createObjectURL(blob);
                const tempLink = document.createElement('a');
                tempLink.style.display = 'none';
                tempLink.href = blobURL;
                tempLink.setAttribute('download', 'Shreyas_Resume');
                // Safari thinks _blank anchor are pop ups. We only want to set _blank
                // target if the browser does not support the HTML5 download attribute.
                // This allows you to download files in desktop safari if pop up blocking
                // is enabled.
                if (typeof tempLink.download === 'undefined') {
                    tempLink.setAttribute('target', '_blank');
                }
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
                setTimeout(() => {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(blobURL);
                }, 100);
                self.showScreenBlockerDownloadResume = false;
            };
            xhr.open('GET', url);
            xhr.send();
        }, (error) => {
            alert('Fetching my resume failed, please try again after some time...');
            self.showScreenBlockerDownloadResume = false;
            console.log(error);
        });
    }

}
