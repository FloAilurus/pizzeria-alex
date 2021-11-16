import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isConnected() {
    return sessionStorage.getItem('connectedUser') != undefined;
  }

  logout() {
    sessionStorage.removeItem('connectedUser');
    alert('vous êtes déconnecté')
  }

}
