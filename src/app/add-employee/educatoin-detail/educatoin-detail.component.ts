import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-educatoin-detail',
  templateUrl: './educatoin-detail.component.html',
  styleUrls: ['./educatoin-detail.component.scss']
})
export class EducatoinDetailComponent implements OnInit {
  @Input("edForm") educationDetailFormGroup!: any;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get controls() {
    return this.educationDetailFormGroup.controls.educationDetail.controls;
  }

  get educationDetail(): FormArray {
    return this.educationDetailFormGroup.get("educationDetail") as FormArray
  }

  addFormGroup() {
    return this.formBuilder.group({
      educationName: ['', Validators.required],
      universityName: ['', Validators.required],
      result: ['', Validators.required],
      year: ['', Validators.required],
      isEdit: [true]
    })
  }

  addEducationDetail() {
    this.educationDetailFormGroup.get('educationDetail').push(this.addFormGroup());
  }

  removeEducationDetail(index: any) {
    this.educationDetailFormGroup.get('educationDetail').removeAt(index);
  }

}
