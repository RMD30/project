import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';


import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public date = new Date();

  private foods:Food[];

  constructor(private foodService:FoodService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

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

}
