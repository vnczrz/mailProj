import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Storage } from '@capacitor/storage';

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {

  constructor(private router: Router) { }

  //canLoad handler is checked at routing module and if returns true router canLoad
  //the idea is to use a guard that checks if we’ve already seen the landing and shows it if not. Otherwise, the guard will return true and the page the user wanted to access will be shown as usual.
  async canLoad(): Promise<boolean> {
    
    const hasSeenIntro = await Storage.get({key: INTRO_KEY})
    console.log(hasSeenIntro)     
    if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
      return true;
    
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl:true });
      return false;
    }
}


}

