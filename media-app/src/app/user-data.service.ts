import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  array = [{
    "userId": 'aman@media.com',
    "username": 'aman',
    "password": 'aman123'
  },
  {
    "userId": 'rahul@media.com',
    "username": 'rahul',
    "password": 'rahul123'
  }
  ]
  constructor() { }
  setLocalStorage(item): boolean {
    if (this.testIfLocalStorage) {
      localStorage.setItem('username', item.username);
      localStorage.setItem('password', item.password);
      return true;
    }
    return false;

  }

  checkIfExists(form?): Object {
    if (form !== undefined)
      return this.array.find((item) => item.username === form.username && item.password === form.password);

    else {
      return this.array.find((obj) => localStorage.getItem('username') === obj.username);
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  testIfLocalStorage(): boolean {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('key', '123');
        localStorage.removeItem('key');
        return true;
      } catch (e) {
        return false;
      }
    }
    else {
      return false;
    }
  }


}
