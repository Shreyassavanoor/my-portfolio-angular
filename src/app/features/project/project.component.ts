import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  myProjects = [
      {
          title: 'Dog Breed Identitfication',
          description: 'Determining the breed of a dog in an image.',
          env: 'Google Colab, Tensorflow, Python.'
      },
      {
          title: 'Blue Book for Bulldozers',
          description: 'Predict the auction sale price for a piece of heavy equipment to create a "blue book" for bulldozers.',
          env: 'Jupyter Notebook, SciKit-Learn, Python.',
      },
      {
          title: 'Recruiterflow',
          description: 'Modern Applicant Tracking Software for recruiting and staffing agencies.',
          env: 'Angular, React, Python, Flask, MySql and AWS.'
      },
      {
          title: 'CEAT iTyres',
          description: 'IoT based project where real time data coming from tyres called as iTyres is being monitored , real time location of vehicle in which iTyres are fitted is being monitored and to predict of iTyres life.',
          env: 'Angular, Node.js, DynamoDB, MariaDB and AWS.'
      },
      {
          title: 'FUSO D2S',
          description: 'Project to handle change requests to the existing applications of FUSO portal and to enhance existing functionality of applications.',
          env: 'SAP UI5 , SAP On-Premise System.'
      }, 
      {
          title: 'Blockchain POC',
          description: 'Project to handle request and response of RFQ’s.Buyer can create the RFQ request and that request goes to all the sellers who belong to that channel, every seller sees the request and send different quotation for that RFQ, Buyer can select best seller and confirm it.',
          env: 'SAP UI5 , Node.js and SAP Cloud Platform.'
      }, 
      {
          title: 'Accessing G-mail using voice based commands',
          description: 'Python based application to access G-mail account corresponding to the username and password received as input from user. It will read and send mail using voice commands.',
          env: 'Python'
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
