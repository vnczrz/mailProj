import { User } from './user.model'

export class Email {
     public user: User; 
     public sender: User;     
     public recipients: User[];
     public subject: string;
     public body: string;
     public timestamp: string;    
     public read: boolean; 
     public archived: boolean;

    constructor (
        user: User, 
        sender: User,     
        recipients: User[],
        subject: string,
        body: string,
        timestamp: string,    
        read: boolean, 
        archived: boolean,
    ){
        this.user= user; 
        this.sender= sender;     
        this.recipients= recipients;
        this.subject= subject;
        this.body= body;
        this.timestamp= timestamp;    
        this.read= read; 
        this.archived= archived;
    }

}