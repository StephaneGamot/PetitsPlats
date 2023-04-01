import { recipes } from "./Data/recipes.js";
import { buttons } from "./Data/allConstantes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/searchAndFilter.js";
import displayRecipes from "./Components/displayRecipes.js";
import { createButton, handleButton } from "./Template/buttonManagement.js";
import suggestionsSearch from "./Components/suggestionsSearch.js";

document.addEventListener("DOMContentLoaded", function () {
	suggestionsSearch();
	searchAndFilter(recipes);
	displayRecipes(recipes, createCard);
});

buttons.forEach((button) => {
	button.addEventListener("click", handleButton);
});
