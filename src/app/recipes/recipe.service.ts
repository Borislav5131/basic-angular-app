import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
     recipeSelected = new Subject<Recipe>();
     
     private recipes: Recipe[] = [
          new Recipe(
               'Pizza 1',
               'Tasty',
               [
                    new Ingredient('Bread',1)
               ],
               'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'
               ),
          new Recipe(
               'Pizza 2',
               'Tasty',
               [
                    new Ingredient('Sausage',2)
               ],
               'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'
               ),
          new Recipe(
               'Pizza 3',
               'Tasty',
               [
                    new Ingredient('Cheese',3)
               ],
               'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'
               )
          ];

     constructor(private shoppingListService: ShoppingListService){

     }

     getRecipes(){
          return this.recipes.slice();
     }

     getRecipe(index: number){
          return this.recipes[index];
     }

     addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.shoppingListService.addIngredients(ingredients);
     }
}