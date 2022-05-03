import { Injectable } from '@angular/core';
import { Ingredient } from './model/Ingredient';
import { Recipe } from './model/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Pizza 1',
      'Homemade Pizza Margherita ',
      'https://cdn.instructables.com/ORIG/FTZ/FYUI/GDLH4IM7/FTZFYUIGDLH4IM7.jpg?frame=1',
      [new Ingredient('dough', 3)]
    ),
    new Recipe(
      2,
      'Burger',
      'Comes with sauce and french fries',
      'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      [
        new Ingredient('bun', 3),
        new Ingredient('tomato', 2),
        new Ingredient('beef', 1),
      ]
    ),
  ];
  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe( id: number){
   return this.recipes[id];
  }
  addRecipe() {}
}
