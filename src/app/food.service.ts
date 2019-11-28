import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Food } from './food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  // private url:string = "http://localhost:8080";

getFood(): Observable<Food[]> {
  return this.http.get<Food[]>('/inventory/food');
}

addFood(food:Food):Observable<Food>{
  return this.http.post<Food>(
    '/inventory/food',
    food,{
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
  });
}


updateFood(food:Food, id:string):Observable<Food>{
  return this.http.put<Food>(
    '/inventory/food/' + id,
    food,{
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
  });
}

deleteFood(id:string){
  return this.http.delete(
    '/inventory/food/' + id);
}

}
