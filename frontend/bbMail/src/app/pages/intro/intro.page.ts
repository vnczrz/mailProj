import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;
// import {   Filesystem,
//   FilesystemDirectory,
//   FilesystemEncoding, } from '@capacitor/filesystem';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  @ViewChild(IonSlides)slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  next() {
    this.slides.slideNext();
  }

  async start() {
    //Once the users finishes the landing, we will write the according key to our storage and move on to our login page. 

    localStorage.setItem('INTRO_KEY', 'true');
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }

}


    // await Storage.set({key: INTRO_KEY, value: 'true'});
    // await Filesystem.writeFile({

    // })