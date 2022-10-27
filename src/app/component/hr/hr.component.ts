import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/shared/model/all-data';
interface Data {
  id: number;
  name: string;
  label: string;
}

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HRComponent implements OnInit {
  data_: Data[] = DATA;
  hr: any[] = [];

  constructor() { }

  ngOnInit(): void {
    var duplicateObj = this.data_;

    Object.values(duplicateObj).forEach((el1: any) => {
      if (el1.name == "Human Resources") {
        this.hr.push(el1.name)
      }
    })
  }


}
