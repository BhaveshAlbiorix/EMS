import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

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
  employeeId: number;

  constructor(
    private formBuilder: FormBuilder,
    public localService: LocalStorageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.personalDetailFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      birthDate: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      email: ['', Validators.required],
      alternateNumber: ['', Validators.pattern('[0-9]{10}')],
      image: [''],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required]
    });

    this.bankDetailFormGroup = this.formBuilder.group({
      bankName: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      aadharNo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{12}')])],
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
      resume: ['', Validators.required]
    });

    this.educationDetailFormGroup = this.formBuilder.group({
      educationDetail: this.formBuilder.array([])
    });


    this.experienceDetailFormGroup = this.formBuilder.group({
      experienceDetail: this.formBuilder.array([])
    });


    this.currentOrgFormGroup = this.formBuilder.group({
      ctc: ['', Validators.required],
      joiningDate: ['', Validators.required],
      appraisalDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    const employeeID = this.activatedRoute.snapshot.paramMap.get('id');
    if (employeeID) {
      let emp = this.localService.empList[+employeeID];
      this.employeeId = +employeeID;
      let pd = emp.personalDetail,
        professional = emp.professionalDetail,
        bankDetail = emp.bankDetail,
        educationDetail = emp.educationDetail,
        experianceDetail = emp.experianceDetail,
        currentOrganizationDetail = emp.currentOrganizationDetail;
      this.personalDetailFormGroup.patchValue({
        ...pd,
      });
      this.professionalDetailFormGroup.patchValue({
        ...professional
      });
      this.bankDetailFormGroup.patchValue({
        ...bankDetail
      });

      this.currentOrgFormGroup.patchValue({
        ...currentOrganizationDetail
      });

      for (let i = 0; i < educationDetail.educationDetail.length; i++) {
        this.addEducationDetail(educationDetail.educationDetail[i], i);
      }

      for (let i = 0; i < experianceDetail.experienceDetail.length; i++) {
        this.addExperiance(experianceDetail.experienceDetail[i], i);
      }
    }
  }

  get experianceForm() {
    return this.experienceDetailFormGroup?.get('experienceDetail') as FormArray;
  }

  addExperianceFormGroup() {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      totalYear: ['', Validators.required],
      lastCTC: ['', Validators.required],
      isEdit: [false]
    })
  }

  addExperiance(val: any, index: number) {
    this.experianceForm.push(this.addExperianceFormGroup());
    this.experianceForm.at(index).patchValue({ ...val });
  }


  addFormGroup() {
    return this.formBuilder.group({
      educationName: ['', Validators.required],
      universityName: ['', Validators.required],
      result: ['', Validators.required],
      year: ['', Validators.required],
      isEdit: [false]
    })
  }

  get educationForm() {
    return this.educationDetailFormGroup?.get('educationDetail') as FormArray;
  }

  addEducationDetail(val: any, index: number) {
    this.educationForm.push(this.addFormGroup());
    this.educationForm.at(index).patchValue({ ...val });
  }

  save() {
    if (this.currentOrgFormGroup.invalid) {
      this.currentOrgFormGroup.markAllAsTouched();
      return;
    }

    let EMS = {
      personalDetail: this.personalDetailFormGroup.value,
      bankDetail: this.bankDetailFormGroup.value,
      professionalDetail: this.professionalDetailFormGroup.value,
      educationDetail: this.educationDetailFormGroup.value,
      experianceDetail: this.experienceDetailFormGroup.value,
      currentOrganizationDetail: this.currentOrgFormGroup.value
    }

    if (this.employeeId != null) {
      this.localService.empList[this.employeeId] = EMS;
      this.localService.saveEmployee(this.localService.empList);
    } else {
      this.localService.saveValue(EMS);
    }

    this.router.navigate(['/employee-detail']);
  }
}
