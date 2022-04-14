import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef  ;
  @ViewChild('amountInput') amountInput!: ElementRef ;
  @Output() ingredientAdded =  new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInput?.nativeElement.value;
    const ingAmount = this.amountInput?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    console.log(newIngredient);
    
    this.ingredientAdded.emit(newIngredient);
  }
}
