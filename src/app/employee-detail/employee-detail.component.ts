import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employeeList: any = [];
  public displayedColumns = ['Name', 'Department', 'Designation', 'Email', 'Mobile', 'Resume', 'Edit', 'Delete'];
  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public localService: LocalStorageService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.employeeList = this.localService.retriveValue();
    console.log("Employee List => ", this.employeeList);
    this.dataSource.data = this.employeeList;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editEmployee(index: number) {
    this.router.navigate([`add-employee/${index}`]);
  }

  removeEmployee(index: number) {
    this.localService.empList.removeAt(index);
    this.localService.saveEmployee(this.localService.empList);
  }

  downloadPdf(base64String: string, fileName: string) {
    const source = base64String;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }

  onClickDownloadPdf() {
    let base64String = "your-base64-string";
    this.downloadPdf(base64String, "sample");
  }
}
