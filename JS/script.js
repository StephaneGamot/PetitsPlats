import { recipes } from "./Data/recipes.js";
import { buttons } from "./Data/allConstantes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/searchAndFilter.js";
import displayRecipes from "./Components/displayRecipes.js";
import { getAllIngredients, displayIngredients } from "./Components/ingredients.js";
import createTag from "./Template/createTag.js";


/*
const label = document.getElementById("allIngredients");
const span = document.getElementById("ingredientsLabel");
const input = document.getElementById("ingredient");
*/
const ingredientsLabel = document.getElementById("ingredientsLabel");
const ingredientsSpan = document.getElementById("ingredientsSpan");
const ingredientInput = document.getElementById("ingredientInput");
const listItems = document.querySelectorAll("#xxx li");


document.addEventListener("DOMContentLoaded", function () {
	searchAndFilter(recipes);
	displayRecipes(recipes, createCard);

	const labels = document.querySelectorAll(".search-group > label");
	labels.forEach((label) => {
		label.addEventListener("click", () => {
			const span = label.querySelector("span");
			const input = label.querySelector("input");
			const iconChevronDown = label.querySelector(".fa-chevron-down");
			const iconChevronUp = label.querySelector(".fa-chevron-up");
      const ingredients = getAllIngredients();
      displayIngredients(ingredients);
			span.style.display = "none";
			input.style.display = "flex";
			span.classList.toggle("hidden");
			input.classList.toggle("hidden");

      ingredientsLabel.style.display = "block";


	  iconChevronDown.style.display = "none";
	  iconChevronUp.style.display = "block";

	  input.focus();
		});
	});


    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
			event.stopPropagation();
            var selectedIngredient = this.textContent;
            createTag(selectedIngredient);
        });
    });
});
