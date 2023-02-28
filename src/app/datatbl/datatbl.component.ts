import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatbl',
  templateUrl: './datatbl.component.html',
  styleUrls: ['./datatbl.component.css']
})
export class DatatblComponent implements OnInit {

  body!: any[];
  p: number = 1;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getData();
  }

  getData() {
    this.http.get<any>('https://rt2clnblfa.execute-api.eu-west-1.amazonaws.com/FistStage')
      .subscribe(data => {
        this.body = data.body;
      });
  }

}
