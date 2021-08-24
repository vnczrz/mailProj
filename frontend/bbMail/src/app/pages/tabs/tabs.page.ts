import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { ComposePage } from 'src/app/modals/compose/compose.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  

  

}


// dataReturned: any;

// constructor(
//   public modalCtrl: ModalController
// ) { }

// async openModal() {
//   const modal = await this.modalCtrl.create({
//     component: ComposePage,
//     componentProps: {
//       "paramID": 123,
//       "paramTitle": "Test Title"
//     }
//   });

//   modal.onDidDismiss().then((dataReturned) => {
//     if (dataReturned !== null) {
//       this.dataReturned = dataReturned.data;
//       //alert('Modal Sent Data :'+ dataReturned);
//     }
//   });

//   return await modal.present();