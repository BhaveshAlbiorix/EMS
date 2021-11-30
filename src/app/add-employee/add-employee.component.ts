import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  personalDetailFormGroup!: FormGroup;
  bankDetailFormGroup!: FormGroup;
  professionalDetailFormGroup!: FormGroup;
  currentOrgFormGroup!: FormGroup;
  educationDetailFormGroup!: FormGroup;
  experienceDetailFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personalDetailFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      alternateNumber: [''],
      image: [''],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required]
    });

    this.bankDetailFormGroup = this.formBuilder.group({
      bankName: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      aadharNo: ['', Validators.required],
      accountNo: ['', Validators.required],
      ifsc: ['', Validators.required],
      panCardNo: ['', Validators.required]
    });

    this.professionalDetailFormGroup = this.formBuilder.group({
      designation: ['', Validators.required],
      currentLocation: ['', Validators.required],
      department: ['', Validators.required],
      month: [''],
      year: [''],
      skillIds: [''],
      resume: ['']
    });

    this.experienceDetailFormGroup = this.formBuilder.group({
      experienceDetail: this.formBuilder.array([])
    });

    this.educationDetailFormGroup = this.formBuilder.group({
      educationDetail: this.formBuilder.array([
        this.eduNext()
      ])
    });

    this.currentOrgFormGroup = this.formBuilder.group({
      ctc: ['', Validators.required],
      joiningDate: ['', Validators.required],
      appraisalDate: ['', Validators.required]
    });
  }

  eduNext(): FormGroup {
    return this.formBuilder.group({
      educationName: ['', Validators.required],
      universityName: ['', Validators.required],
      result: ['', Validators.required],
      year: ['', Validators.required],
      isEdit: [true]
    })
  }

  ngOnInit() {
  }

}
