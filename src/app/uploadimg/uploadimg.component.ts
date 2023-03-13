import { Component, OnInit } from '@angular/core';
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


  constructor(private s3Service: S3Service) { }

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

  ngOnInit(): void {
  }
  showForm() {
    this.showAddForm = !this.showAddForm;
  }


}
