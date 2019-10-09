import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://placekitten.com/300/300'),
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://placekitten.com/g/300/300')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
