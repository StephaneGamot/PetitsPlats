import { recipes } from "./Data/recipes.js";
import { buttons } from "./Data/allConstantes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/searchAndFilter.js";
import displayRecipes from "./Components/displayRecipes.js";
import { getAllIngredients, displayIngredients } from "./Components/ingredients.js";

document.addEventListener("DOMContentLoaded", function () {

	searchAndFilter(recipes);
	displayRecipes(recipes, createCard);
});

document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll(".search-group > label");

    labels.forEach(label => {
		label.addEventListener("click", () => {
			const span = label.querySelector("span");
      const input = label.querySelector("input");
      const icon = label.querySelector("i");
			span.style.display = "none";
			input.style.display = "block";
		
			span.classList.toggle("hidden");
      input.classList.toggle("hidden");

			icon.classList.add("rotate-chevron");
			
		});
    });
  });

  const label = document.getElementById("allIngredients");
  const span = document.getElementById("ingredientsLabel");
  const input = document.getElementById("ingredient");



  document.addEventListener("DOMContentLoaded", function() {
	const ingredients = getAllIngredients();
	displayIngredients(ingredients);
  });
  