import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    myProjects = [];

    constructor(private commonservice: CommonServiceService) { }

    ngOnInit(): void {
        this.fetchProjects();
    }

    fetchProjects() {
        this.commonservice.getData('/projects').subscribe((response: any) => {
            let data = response;
            for (let d = 0; d < data.length; d++) {
                data[d].env = data[d].env.join(',');
            }
            this.myProjects = data;
        });
    }

}
