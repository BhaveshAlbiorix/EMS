import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-org-detail',
  templateUrl: './current-org-detail.component.html',
  styleUrls: ['./current-org-detail.component.scss']
})
export class CurrentOrgDetailComponent implements OnInit {

  @Input("currentOrgForm") currentOrgFormGroup!: any;

  constructor() { }

  ngOnInit(): void {
  }

  get controls() {
    return this.currentOrgFormGroup.controls;
  }
}
