import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/shared/model/all-data';
interface Data {
  id: number;
  name: string;
  label: string;
}

@Component({
  selector: 'app-markrting',
  templateUrl: './markrting.component.html',
  styleUrls: ['./markrting.component.css']
})
export class MarkrtingComponent implements OnInit {
  data_: Data[] = DATA;
  market: any[] = [];

  constructor() { }

  ngOnInit(): void {
    var duplicateObj = this.data_;

    Object.values(duplicateObj).forEach((el1: any) => {
      if (el1.name == "Marketing") {
        this.market.push(el1.name)
      }
    })
  }


}
