import { Component, OnInit } from '@angular/core';


import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public date = new Date();

  private foods:Food[];

  constructor(private foodService:FoodService) { }

  ngOnInit() {
    this.getFood();
  }


  getFood(){
    this.foodService.getFood().subscribe((data)=>{
        this.foods = data;
      }
    );
  }
}
