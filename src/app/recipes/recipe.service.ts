import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [new Ingredient('Meat',1),new Ingredient('French Fries',20)]),
    new Recipe('test 2', 'another test',
    'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg',
    [new Ingredient('stuff',3),new Ingredient('more stuff',5)]),
    new Recipe('test 3', 'last one',
    'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg',
    [new Ingredient('moose',1),new Ingredient('rabbit',5)]),
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
