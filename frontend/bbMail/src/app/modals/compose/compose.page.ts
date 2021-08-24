import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.page.html',
  styleUrls: ['./compose.page.scss'],
})
export class ComposePage implements OnInit {

  modalTitle: string;
  modelId: number;

  //ModalController: This class provides the dismiss() method which can pass data to parent page from this modal is opened.
  
  //NavParams: This class helps in fetching the data passed in create() method from parent page from where this Modal is opened.
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    //const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss();
  }


}
