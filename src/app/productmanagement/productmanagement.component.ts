import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
