import { RecipeService } from 'src/app/recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from 'src/app/model/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  id: number | undefined;
  constructor(private router: Router,private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    

    this.route.params.subscribe((x) => {
      this.id = +x['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList(){

  }
  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
