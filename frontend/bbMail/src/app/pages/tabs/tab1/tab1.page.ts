import { Component } from '@angular/core';
import { Email } from 'src/app/shared/mail.model';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { MailService } from 'src/app/services/api/mail.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mail: Email[];

  constructor( private modalService: OpenModalService, private mailService: MailService) {}

  ngOnInit(){
    this.mail = this.mailService.getMail();
  }

  async openModal() {
    this.modalService.openModal();
  }

}
