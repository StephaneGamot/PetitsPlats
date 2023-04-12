import { recipes } from "./Data/recipes.js";
import { buttons } from "./Data/allConstantes.js";
import createCard from "./Template/createCard.js";
import searchAndFilter, { getIngredientsFromRecipes, displayRecipes } from "./Components/searchAndFilter.js";
import { getAllIngredients, displayIngredients } from "./Components/ingredients.js";
import createTag from "./Template/createTag.js";


const ingredientsLabel = document.getElementById("ingredientsLabel");
const ingredientsSpan = document.getElementById("ingredientsSpan");
const ingredientInput = document.getElementById("ingredientInput");
const ingredientsList = document.getElementById("xxx");

document.addEventListener("DOMContentLoaded", function () {
    searchAndFilter(recipes);
    displayRecipes(recipes);

    const labels = document.querySelectorAll(".search-group > label");
    labels.forEach((label) => {
        label.addEventListener("click", () => {
            const span = label.querySelector("span");
            const input = label.querySelector("input");
            const iconChevronDown = label.querySelector(".fa-chevron-down");
            const iconChevronUp = label.querySelector(".fa-chevron-up");

            // Mettre à jour la liste des ingrédients en fonction des recettes filtrées
            const recipeContainer = document.getElementById("card-container");
            const filteredRecipes = Array.from(recipeContainer.children).map((card) => {
                return JSON.parse(card.dataset.recipe);
            });
            const filteredIngredients = getIngredientsFromRecipes(filteredRecipes);
            displayIngredients(filteredIngredients);

            span.style.display = "none";
            input.style.display = "flex";
            span.classList.toggle("hidden");
            input.classList.toggle("hidden");

            ingredientsLabel.style.display = "block";

            iconChevronDown.style.display = "none";
            iconChevronUp.style.display = "block";

            // Masquez la liste des ingrédients au début
            ingredientsList.style.display = "none";

            // Affichez la liste des ingrédients lorsque l'utilisateur clique sur l'entrée d'ingrédient
            ingredientInput.addEventListener("focus", () => {
                ingredientsList.style.display = "grid";
            });

            input.focus();
        });
    });

    // Mettre à jour la liste des éléments de la liste lorsqu'ils sont cliqués
    const listItems = document.querySelectorAll("#xxx li");
    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.stopPropagation();
            var selectedIngredient = this.textContent;
            createTag(selectedIngredient);
        });
    });
});


