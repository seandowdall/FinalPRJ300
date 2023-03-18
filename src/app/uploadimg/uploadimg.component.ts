import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {

  showAddForm: boolean = false;
  private selectedFile: File | undefined;
  private fullName: string | undefined;
  private studentNo: string | undefined;
  isLoggedIn = false;
  private subscription!: Subscription;

  constructor(private s3Service: S3Service, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    
    this.subscription = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;



    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  onUpload() {
    if (this.selectedFile) {
      this.s3Service.uploadFile(this.selectedFile)
        .then(() => alert('Successfully Uploaded!'))
        .catch(() => alert('Error Uploading File!'));
    }
  }

  
  showForm() {
    this.showAddForm = !this.showAddForm;
  }


}
