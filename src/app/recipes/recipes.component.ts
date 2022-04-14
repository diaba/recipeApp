import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit {
  constructor() {}
  recipeToView: Recipe | undefined;

  ngOnInit() {}
  // selectedRecipe(data: Recipe) {
  //   this.recipeToView = data;
  // }
}
