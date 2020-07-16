import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user:User){
      if(user.userName==="engin" && user.password==="12345"){
        
        localStorage.setItem("token","gdfgsdfgsdfgsdfgfdg");
        return true;
      }
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
