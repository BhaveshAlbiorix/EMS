import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiance-detail',
  templateUrl: './experiance-detail.component.html',
  styleUrls: ['./experiance-detail.component.scss']
})
export class ExperianceDetailComponent implements OnInit {
  @Input("expForm") experienceDetailFormGroup!: any;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get controls() {
    return this.experienceDetailFormGroup.controls;
  }

  addFormGroup() {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      totalYear: ['', Validators.required],
      lastCTC: ['', Validators.required],
      isEdit: [true]
    })
  }

  addFormArray() {
    this.experienceDetailFormGroup.get('educationDetail').push(this.addFormGroup());
  }

  removeEducationDetail(index: any) {
    let formGroup = this.experienceDetailFormGroup.get('educationDetail');
    formGroup.splice(index, 1);
    this.experienceDetailFormGroup.get('educationDetail').patchValue(formGroup);
  }

}

