import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { StarRatingComponent } from 'ng-starrating/public-api';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food! : Food ; 
  constructor(private activatedRoute : ActivatedRoute , foodService : FoodService) {
    activatedRoute.params.subscribe(params => {
      if(params.id)
      this.food = foodService.getFoodById(params.id) ; 
    })
   }

  ngOnInit(): void {
  }

}
