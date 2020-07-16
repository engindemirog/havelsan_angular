import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let user = new User();
    user.userName ="engin";
    user.password="12345";
    this.authService.login(user);
  }

}
