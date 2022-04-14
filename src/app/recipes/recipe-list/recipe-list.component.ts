import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass'],
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectRecipe = new EventEmitter<Recipe>();
  viewRecipe(item: Recipe): void {
    this.onSelectRecipe.emit(item);
    console.log('send recipe item' + item);
  }
  recipes: Recipe[] = [
    new Recipe(
      'Pizza 1',
      'Homemade Pizza Margherita ',
      'https://cdn.instructables.com/ORIG/FTZ/FYUI/GDLH4IM7/FTZFYUIGDLH4IM7.jpg?frame=1'
    ),
    new Recipe(
      'Pizza 2',
      'Homemade Pizza Margherita ',
      'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
