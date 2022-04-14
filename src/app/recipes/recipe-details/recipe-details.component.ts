import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  constructor() {}

  ngOnInit(): void {
    
  }

}
