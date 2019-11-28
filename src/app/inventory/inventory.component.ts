import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public date = new Date();

  private foods:Food[];
  private foodName:String;
  private foodPrice:Number;

  constructor(private foodService:FoodService, private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getFood();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/restaurant');
  }

  getFood(){
    this.foodService.getFood().subscribe((data)=>{
        this.foods = data;
      }
    );
  }

  addFood(){
    var food = new Food();
    food.name = this.foodName;
    food.price = this.foodPrice;
    this.foodService.addFood(food).subscribe((data)=>{
      console.log(data);
      this.getFood()
    });
  }

  updateFood(id:string){
    var food = new Food();
    food.name = this.foodName;
    food.price = this.foodPrice;
    this.foodService.updateFood(food,id).subscribe((data)=>{
      console.log(data);
      this.getFood()
    }) 
  }

  deleteFood(id:string){
    this.foodService.deleteFood(id).subscribe((data)=>{
      console.log(data);
      this.getFood()
    });
  }

}
