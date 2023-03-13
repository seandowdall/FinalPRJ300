import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';




@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private bucketName = 'facrectestjack';
  private bucketRegion = 'eu-west-1';
  private identityPoolId = 'eu-west-1:1f6a4a9d-ba20-452e-8f6a-ea5ae022592d';

  private s3: any;

  constructor() {
    AWS.config.update({
      region: this.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: this.identityPoolId
      })
    });

    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: this.bucketName }
    });
  }

  uploadFile(file: File,  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const filePath = file.name;
      const fileUrl = `https://${this.bucketRegion}.amazonaws.com/${filePath}`;
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const body = event.target.result;
        this.s3.upload({
          Key: filePath,
          Body: body,
          
          
          
        }, (err: any, data: any) => {
          if (err) {
            reject('error');
          } else {
            resolve();
          }
        })
      };
      reader.readAsArrayBuffer(file);
    });
  }
}
