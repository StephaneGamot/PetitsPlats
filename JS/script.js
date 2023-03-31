
import { recipes } from "./DATA/recipes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter from "./Components/search.js";

document.addEventListener("DOMContentLoaded", function () {
  searchAndFilter(recipes);
  displayInitialRecipes();
});

function displayInitialRecipes() {
  const recipeContainer = document.getElementById("card-container");

  recipes.forEach((recipe) => {
    if (recipeContainer.childElementCount < 50) {
      const card = createCard(recipe);
      recipeContainer.appendChild(card);
    }
  });
}
