import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  @Input() id : number = 1;

  constructor() {}

  ngOnInit(): void {}

}
