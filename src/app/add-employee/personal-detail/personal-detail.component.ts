import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  @Input('pdForm') personalDetailFormGroup!: any;
  public imagePath: any;
  imgURL: any;
  file: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.personalDetailFormGroup.controls;
  }

  preview(files: any) {
    if (files.length === 0) {
      this.imgURL = "";
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


}
