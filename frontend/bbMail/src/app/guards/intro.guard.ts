import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
// import {   Filesystem,
//   FilesystemDirectory,
//   FilesystemEncoding, } from '@capacitor/filesystem';
// // const { Storage } = Filesystem;


export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {

  constructor(private router: Router) { }

  //the idea is to use a guard that checks if we’ve already seen the tutorial and shows it if not. Otherwise, the guard will return true and the page the user wanted to access will be shown as usual.
  async canLoad(): Promise<boolean> {
    const hasSeenIntro = localStorage.getItem('INTRO_KEY');
    console.log(hasSeenIntro)     
    if (hasSeenIntro && (hasSeenIntro === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl:true });
      return false;
    }
}


}


// canLoad(
//   route: Route,
//   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }