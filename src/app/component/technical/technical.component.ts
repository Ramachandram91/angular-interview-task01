import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/shared/model/all-data';
interface Data {
  id: number;
  name: string;
  label: string;
}

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  tec: any[] = [];
  data_: Data[] = DATA;


  constructor() { }

  ngOnInit(): void {
    var duplicateObj = this.data_;

    Object.values(duplicateObj).forEach((el1: any) => {
      if (el1.name == "Technical") {
        this.tec.push(el1.name)
      }
    })
  }


}
