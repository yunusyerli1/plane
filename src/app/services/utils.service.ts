import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  userInfo:any;
  onlyNumberPattern = "^[0-9]*$";
  emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}";
  constructor() { }


  getUser(){
    this.userInfo = JSON.parse(localStorage.getItem('user'));   
  }
}
