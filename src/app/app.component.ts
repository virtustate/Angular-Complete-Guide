import { Component } from '@angular/core';
import {Recipe} from './recipes/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-complete-guide';
  page: string = 'recipes';
  recipe: Recipe
  onPageChange(pageData: {page: string}){
    this.page = pageData.page;
  }
  onRecipeChanged(recipeData: {recipe: Recipe}) {
    console.log(recipeData.recipe)
  }
}
