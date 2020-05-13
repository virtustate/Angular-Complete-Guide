import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeChanged = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is just a test',
    'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('test 2', 'another test',
    'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('test 3', 'last one',
    'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe)
  {
    this.recipeChanged.emit(recipe);
  }
}
