import { Component } from '@angular/core';
import { OpenModalService } from 'src/app/services/open-modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private modalService: OpenModalService) {}

  async openModal() {
    this.modalService.openModal();
  }

}
