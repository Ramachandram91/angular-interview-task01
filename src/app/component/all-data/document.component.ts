import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/shared/model/all-data';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  searchText: any;
  data_ = DATA;

  constructor() { }
  
  ngOnInit(): void {
  }

}
