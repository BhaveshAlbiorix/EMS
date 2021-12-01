import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  key: string = 'EMS';
  empList: any = [];

  constructor() { }

  saveValue(val: any) {
    this.empList.push(val);
    localStorage.setItem(this.key, JSON.stringify(this.empList));
  }

  retriveValue() {
    let val = JSON.parse(localStorage.getItem(this.key) ?? '');
    if (val)
      this.empList = val;
    return this.empList;
  }

  saveEmployee(val: any) {
    localStorage.setItem(this.key, JSON.stringify(val));
  }
}
