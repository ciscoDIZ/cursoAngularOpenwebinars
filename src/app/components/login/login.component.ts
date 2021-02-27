import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }
  singIn(): void{
    this.login.signIn();
  }
  singOut(): void{
    this.login.signOut();
  }
}
