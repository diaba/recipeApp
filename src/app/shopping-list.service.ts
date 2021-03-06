import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './model/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();

private ingredients:Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Orange',10)
];

getIngredients(){
  return this.ingredients.slice();
}
addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){ 
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredient(id:number){
  this.ingredients.splice(id,1);
  this.ingredientsChanged.next(this.ingredients.slice());
}
updateIngredient(ingredient:Ingredient, id:number){
  this.ingredients[id] = ingredient;
  this.ingredientsChanged.next(this.ingredients.slice());
}
getIngredient(id:number){
  return this.ingredients[id];
}
  constructor() { }
}
