import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/Ingredient';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [ ];
  private subscription!: Subscription;
  constructor(private slService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients
      }
    )
  }
  getIngredient() {
    return this.ingredients.slice();
  }
  add(data: Ingredient): void {
    console.log('ingredient received ');

    this.ingredients.push(data);

    this.getIngredient();
  }
  onEditItem(data:number){
this.slService.startedEditing.next(data);
  }
}
