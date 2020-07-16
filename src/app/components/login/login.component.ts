import { TokenModel } from './../../models/token-model';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 tokenModel :TokenModel;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let user = new User();
    user.email ="engin2@mail.com";
    user.password="12345";
    this.authService.login(user).subscribe(data=>{
          this.tokenModel = data;
          localStorage.setItem("token",this.tokenModel.token);
    });
  }

}
