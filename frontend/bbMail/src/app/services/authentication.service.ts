import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';

import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { Storage } from '@capacitor/storage';

const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  async loadToken() {
    // // localStorage.setItem('TOKEN_KEY', 'my-token');
    // const token = localStorage.getItem('TOKEN_KEY')
    const token = await Storage.get({ key: TOKEN_KEY });

    if (token && token.value) {
      console.log(`set token to: ${token.value}`);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: {email, password}): Observable<any> {
    return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

}

// Our service will also hold a BehaviorSubject, which we init with null in the beginning for a reason: guard will later catch this very first value, which doesn’t indicate a lot about the authentication state of a user. Therefore, we can later easily filter out this value in the guard so users can directly access pages of our app if they were previously authenticated.