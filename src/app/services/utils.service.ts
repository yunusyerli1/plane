import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  userInfo:any;
  constructor() { }


  getUser(){
    this.userInfo = JSON.parse(localStorage.getItem('user'));   
  }
}
