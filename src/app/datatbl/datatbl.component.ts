import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-datatbl',
  templateUrl: './datatbl.component.html',
  styleUrls: ['./datatbl.component.css']
})
export class DatatblComponent implements OnInit {

  body!: any[];
  p: number = 1;

  isLoggedIn = false;
  private subscription!: Subscription;



  


  constructor(private http:HttpClient, private authService: AuthService){}

  ngOnInit(){
    this.getData();
    this.subscription = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
    
  });}

  getData() {
    this.http.get<any>('https://rt2clnblfa.execute-api.eu-west-1.amazonaws.com/FistStage')
      .subscribe(data => {
        this.body = data.body;
      });
  }
  
  
  
  
  
  

}
