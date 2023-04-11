import { recipes } from "../Data/recipes.js";
import createTag from "../Template/createTag.js";

function isPlural(ingredient) {
  return ingredient.endsWith('s') && recipes.some(recipe => {
    return recipe.ingredients.some(({ ingredient: ing }) => ing.toLowerCase() === ingredient.slice(0, -1).toLowerCase());
  });
}

export function getAllIngredients() {
  const allIngredients = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const lowerCaseIngredient = ingredient.ingredient.toLowerCase();
      if (!isPlural(lowerCaseIngredient)) {
        allIngredients.add(lowerCaseIngredient);
      }
    });
  });
  return Array.from(allIngredients);
}

function sortIngredientsAlphabetically(ingredientsList) {
  return ingredientsList.sort((a, b) => a.localeCompare(b));
}

function formatIngredient(ingredient) {
  return ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase();
}

  
export function displayIngredients(ingredients) {
	const ulElement = document.getElementById("xxx");
  
	const sortedIngredients = sortIngredientsAlphabetically(ingredients);
  
	sortedIngredients.forEach((ingredient) => {
	  const liElement = document.createElement("li");
	  liElement.textContent = formatIngredient(ingredient);
  
	  liElement.addEventListener("click", () => {
		createTag(formatIngredient(ingredient));
	  });
  
	  ulElement.appendChild(liElement);
	});
  }
