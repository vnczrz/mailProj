import { Component, OnInit } from '@angular/core';
import { OpenModalService } from 'src/app/services/open-modal.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {

  
  constructor( private modalService: OpenModalService) {}

  ngOnInit() {
  }


  async openModal() {
    this.modalService.openModal();
  }


}
