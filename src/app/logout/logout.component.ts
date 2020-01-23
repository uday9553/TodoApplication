import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../services/harcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardCodedAuth:HarcodedAuthenticationService) { }

  ngOnInit() {
    console.log('loggedout')
    this.hardCodedAuth.logout();
  }
  
}
