import { recipes } from "../Data/recipes.js";
import createCard from "../Template/createCard.js";

export function getIngredientsFromRecipes(recipesList) {
    const ingredientsSet = new Set();
    recipesList.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            ingredientsSet.add(ingredient.ingredient.toLowerCase());
        });
    });
    return Array.from(ingredientsSet);
}

export function displayRecipes(recipesList) {
    const recipeContainer = document.getElementById("card-container");
    recipeContainer.innerHTML = "";

    recipesList.forEach((recipe) => {
        const card = createCard(recipe);
        card.dataset.recipe = JSON.stringify(recipe);
        recipeContainer.appendChild(card);
    });
}

export default function searchAndFilter(recipes) {
    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm.length >= 3) {
            const filteredRecipes = recipes.filter((recipe) => {
                const recipeValues = [recipe.name, ...recipe.ingredients.map((ingredient) => ingredient.ingredient), recipe.description].join(" ").toLowerCase();

                return recipeValues.includes(searchTerm);
            });

            displayRecipes(filteredRecipes);
        } else {
            displayRecipes(recipes);
        }
    });
}
