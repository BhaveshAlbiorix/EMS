import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.scss']
})
export class BankDetailComponent implements OnInit {

  @Input("bdForm") bankDetailFormGroup!: any;

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.bankDetailFormGroup.controls;
  }
}
