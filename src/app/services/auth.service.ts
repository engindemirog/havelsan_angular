import { TokenModel } from './../models/token-model';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  path = "https://localhost:44335/api/auth/login";
  login(user:User){
      
      return this.httpClient.post<TokenModel>(this.path,user);
        
      
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
