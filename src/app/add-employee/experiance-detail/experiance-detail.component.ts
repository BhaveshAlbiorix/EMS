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
    return this.experienceDetailFormGroup.controls.experienceDetail.controls;
  }

  addFormGroup() {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      totalYear: ['', Validators.required],
      lastCTC: ['', Validators.required],
      isEdit: [false]
    })
  }

  addExperiance() {
    this.experienceDetailFormGroup.get('experienceDetail').push(this.addFormGroup());
  }

  removeExperiance(index: any) {
    this.experienceDetailFormGroup.get('experienceDetail').removeAt(index);
  }

  toggle(index: number) {
    this.experienceDetailFormGroup.get('experienceDetail').controls[index].get('isEdit').setValue(!this.experienceDetailFormGroup.get('experienceDetail').controls[index].get('isEdit').value)
  }

}

