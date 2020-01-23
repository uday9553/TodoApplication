import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HarcodedAuthenticationService } from '../services/harcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  inValidMessage = '';
   invalidLogin = false;
  constructor(private router:Router,private hardcodedAuth:HarcodedAuthenticationService) { }

  ngOnInit() {
  }
  loginButtonClicked() {

    //if (this.username === 'uday' && this.password === 'uday') {
    if(this.hardcodedAuth.autheticate(this.username,this.password)){  
    this.invalidLogin = false;
      this.router.navigate(['welcome',this.username]);
    }
    else {
    this.invalidLogin = true;
     this.inValidMessage = 'login failed';
      return false;
    }
  }
}
