import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss']
})
export class ProfessionalDetailComponent implements OnInit {
  @Input('pdForm') professionalDetailFormGroup!: any;

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.professionalDetailFormGroup.controls;
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    this.professionalDetailFormGroup.patchValue({ resume: files[0] })
    reader.onload = (_event) => {
    }
  }
}
