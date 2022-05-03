import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  // @Output() onSelectRecipe = new EventEmitter<Recipe>();
  // viewRecipe(item: Recipe): void {
  //   this.onSelectRecipe.emit(item);
  //   console.log('send recipe item' + item);
  // }
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipes(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
