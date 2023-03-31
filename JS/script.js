import { recipes } from "./DATA/recipes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/search.js";
import displayRecipes from "./Components/displayRecipes.js";

document.addEventListener("DOMContentLoaded", function () {
	searchAndFilter(recipes);
	displayRecipes(recipes, createCard);
});

