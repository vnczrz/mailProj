import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from 'src/app/shared/mail.model';
import { User } from 'src/app/shared/user.model';

import { Observable } from  'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  user1 = new User(1, 'testrec1@gmail.com', 'password1') 
  user2 = new User(2, 'testsend1@gmail.com', 'password2') 

  ///temporary mail array...no backend connected yet
  private mail: Email[] = [
      new Email(
        this.user1,
        this.user2,
        [
          this.user1
        ], 
        'TestSubject',
        'This is a test email',
        '12:15:00PM August 10, 2021',
        false,
        false,
      ),
  ]
  
  // baseUrl: string = "INSERT URL";

  constructor(private httpClient: HttpClient) { }

  getMail(){
    return this.mail.slice();
  }

//   //GET  emails/<str:mailbox> request to /emails/<mailbox> where <mailbox> is either inbox, sent, or archive will return  back to you (in JSON form) a list of all emails in that mailbox
//   public getMailbox (string: mailbox)): Observable<Mail[]>{
//     return this.httpClient.get($`${this.baseUrl}/emails/${mailbox}`)

//     .map



//   }

//   //GET /emails/<int:email_id> request to /emails/email_id where email_id is an integer id for an email will return a JSON representation of the email
//   public getEmail (): Observable<Mail>{

//   }

//   //POST /emails in order to send an email send a POST request to the backend with the required pieces of data.... follow model
//   public sendEmail(): Observable<Mail>{

//   }

//   //PUT /emails/<int:email_id>  ability to mark an email as read/unread or as archived/unarchived. To do so, send a PUT request (instead of a GET) request to /emails/<email_id> where email_id is the id of the email you’re trying to modify
//   public updateEmail(): Observable<Mail>{

//   }

  
}
