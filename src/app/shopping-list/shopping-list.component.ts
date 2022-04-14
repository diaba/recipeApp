import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/Ingredient';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[] = [
  new Ingredient('apple',5),
  new Ingredient('orange',10)
];
  constructor() { }

  ngOnInit(): void {
    
  }
  getIngredient(){
    return this.ingredients;
  }
  add(data: Ingredient): void {
    console.log("ingredient received ");
    
       this.ingredients.push(data);

       this.getIngredient();

  }

}
