import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isAuthenticated$ = this.auth.isAuthenticated$

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}


  ngOnInit(): void {
  }

}
