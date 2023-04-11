import { recipes } from "./Data/recipes.js";
import { buttons } from "./Data/allConstantes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/searchAndFilter.js";
import displayRecipes from "./Components/displayRecipes.js";
import { getAllIngredients, displayIngredients } from "./Components/ingredients.js";
/*
const label = document.getElementById("allIngredients");
const span = document.getElementById("ingredientsLabel");
const input = document.getElementById("ingredient");
*/
const ingredientsLabel = document.getElementById("ingredientsLabel");
const ingredientsSpan = document.getElementById("ingredientsSpan");
const ingredientInput = document.getElementById("ingredientInput");

document.addEventListener("DOMContentLoaded", function () {
	searchAndFilter(recipes);
	displayRecipes(recipes, createCard);

	const labels = document.querySelectorAll(".search-group > label");
	labels.forEach((label) => {
		label.addEventListener("click", () => {
			const span = label.querySelector("span");
			const input = label.querySelector("input");
			const icon = label.querySelector("i");
      const ingredients = getAllIngredients();
      displayIngredients(ingredients);
			span.style.display = "none";
			input.style.display = "flex";

			span.classList.toggle("hidden");
			input.classList.toggle("hidden");

      ingredientsLabel.style.display = "block";


			icon.classList.add("rotate-chevron");
		});
	});
});
