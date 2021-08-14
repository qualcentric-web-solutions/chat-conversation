import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConversationData {
    conversationsData: any[]=[
        {
          image: ['assets/img/user.png'], 
          title:'Chad Cunningham', 
          description:'Lorem ipsum dolor', 
          time:'5m', 
          chat_status: 0
        },
        {
          image: ['assets/img/user.png', 'assets/img/user.png'],
          title:'Tyler, Doris', 
          description:'Lorem ipsum dolor sit amet, co', 
          time:'10m', 
          chat_status: 0
        },
        {
          image: ['assets/img/user.png'], 
          title:'Anthony Cunningham', 
          description:'Lorem ipsum dolor sit amet, con…', 
          time:'2h', 
          chat_status: 1
        },
        {
          image: ['assets/img/user.png'], 
          title:'Alan Nelson', 
          description:'Lorem ipsum dolor sit amet, con', 
          time:'5h', 
          chat_status: 0},
        {
          image: ['assets/img/user.png', 'assets/img/user.png', 'assets/img/user.png'],
          title:'Sara, Bruce, Martha', 
          description:'Lorem ipsum dolor ', 
          time:'1d', 
          chat_status: 1
        },
        {
          image: ['assets/img/user.png'], 
          title:'Benjamin Pearson', 
          description:'Lorem ipsum dolor sit amet, co', 
          time:'1d', 
          chat_status: 1
        },
        {
          image: ['assets/img/user.png', 'assets/img/user.png', 'assets/img/user.png', 'assets/img/user.png'], 
          title:'Janice, Daniell and 6 more', 
          description:'Lorem ipsum dolor sit amet, co', 
          time:'2d', 
          chat_status: 1
        },
        {
          image: ['assets/img/user.png'], 
          title:'Alice Woodkin', 
          description:'Lorem ipsum dolor sit amet, co', 
          time:'1w', 
          chat_status: 1
        },
      ]; 
}