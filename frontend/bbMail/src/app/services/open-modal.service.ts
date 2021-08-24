import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComposePage } from '../modals/compose/compose.page';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  dataReturned : any;

  //To open the Modal, we need to import the ModalController class from @ionic/angular module
  constructor(
    private modalCtrl: ModalController
  ) { }
  
  //call the create() method available in the ModalController to open a modal by passing component name in the option object
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ComposePage,
      cssClass: "modal-fullscreen",
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title",
      }
      
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();

}

}
