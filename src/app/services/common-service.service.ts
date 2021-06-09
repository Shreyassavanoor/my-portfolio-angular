import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import * as firebase from "firebase/app";
import 'firebase/storage';
import { FIREBASECONFIG } from '../services/firebase/api-key';

@Injectable({
    providedIn: 'root'
})
export class CommonServiceService {
    api: any = 'https://shreyassavanoor-portfolio.firebaseio.com/';
    fileApi: any = 'https://shreyassavanoor-portfolio.appspot.com';
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

    getFile() {
        // Initialize Firebase if it not initalized
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASECONFIG.firebaseConfig);
        }
        
        // Get a reference to the storage service, which is used to create references in your storage bucket
        var storage = firebase.storage();

        // Create a storage reference from our storage service
        var storageRef = storage.ref();

        // Create a child reference
        var resume = storageRef.child('Shreyas_Savanoor_Ravindra_Resume.pdf');

        return resume.getDownloadURL();
    }
}
