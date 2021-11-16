import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    
    if( this.credentials.username == "email" && this.credentials.password == "pass" ){
      sessionStorage.setItem( "connectedUser", this.credentials.username );
      alert('vous êtes connecté');
    }
    else{
      alert( 'invalid credentials' );
      this.credentials.username = '';
      this.credentials.password = '';
    }


  }

}
