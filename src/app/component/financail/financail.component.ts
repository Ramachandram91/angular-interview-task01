import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/shared/model/all-data';
interface Data {
  id: number;
  name: string;
  label: string;
}
@Component({
  selector: 'app-financail',
  templateUrl: './financail.component.html',
  styleUrls: ['./financail.component.css']
})
export class FinancailComponent implements OnInit {
  fin: any[] = [];
  data_: Data[] = DATA;
  
  constructor() { }

  ngOnInit(): void {
    var duplicateObj = this.data_;

    Object.values(duplicateObj).forEach((el1: any) => {
      if (el1.name == "Financial") {
        this.fin.push(el1.name)
      }
    })
  }

}
