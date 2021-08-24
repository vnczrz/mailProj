import { Component } from '@angular/core';
import { OpenModalService } from 'src/app/services/open-modal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private modalService: OpenModalService) {}

  async openModal() {
    this.modalService.openModal();
  }

}
