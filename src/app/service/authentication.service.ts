import { Injectable } from '@angular/core';

import { User } from '../shared/user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const USERS: User[] = [
  new User('Harshal', 'Agrawal'),
  new User('Srishti', 'Sinha'),
  new User('Mallika', 'Verma'),
  new User('Devishi', 'Vyas'),
  new User('Rahul','Singhal')
];
let usersObservable = of(USERS);


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers()
    .pipe(map(users => {
      let user = users.find(user => (user.username === username) && (user.password === password))
      if(user) {
        
        sessionStorage.setItem('authenticatedUser', username);
        return true;
      } 
      else {
        return false;
      }
      })
    );
  }

  /*
  authenticate(username, password) {
    if(username==='srishti' && password==='sinha') {
      sessionStorage.setItem('authenticatedUser',username);
      return true
    }
    return false
  }
*/
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
