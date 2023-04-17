/* import { displayRecipes, getFilteredRecipes, setFilteredRecipes,  } from "../Components/searchAndFilter.js";
import createCard from "./createCard.js";

// Fonction pour créer une étiquette (tag) pour un ingrédient, un ustensile ou un appareil sélectionné
export function createTag(selectedIngredient, tagType) { // le <li> cliqué ( handleListClick())appelé et en fonction du CSS le type (couleur)
    const tagContainer = document.getElementById("tags");
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");

    tagElement.textContent = selectedIngredient;

    const closeButton = document.createElement("i");   // création de la croix qui permet de fermer le tag
    closeButton.className = "fa-regular fa-circle-xmark";
    closeButton.style.color = "#ffffff";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => {
        tagContainer.removeChild(tagElement);
        const updatedTags = Array.from(tagContainer.children).map((tagElement) => tagElement.textContent.trim());
         // une fois le tag créé et placé dans son container j'apelle  updateAndDisplayFilteredRecipes(updatedTags) donc mise à jour desla liste affiché
        updateAndDisplayFilteredRecipes(updatedTags);
    });

    tagElement.appendChild(closeButton);
    tagContainer.appendChild(tagElement);

    if (tagType === "ingredient") {
        tagElement.classList.add("allTags", "tag-ingredient");
    } else if (tagType === "ustensil") {
        tagElement.classList.add("allTags", "tag-ustensil");
    } else if (tagType === "appliance") {
        tagElement.classList.add("allTags", "tag-appliance");
    }

    const selectedTags = Array.from(tagContainer.children).map((tagElement) => tagElement.textContent.trim());
    updateAndDisplayFilteredRecipes(selectedTags);
}

/* filtre les recettes en fonction des étiquettes sélectionnées (basilic dans ce cas) 
 * et met à jour les recettes filtrées en utilisant setFilteredRecipes() 
 * et les affiche en utilisant displayRecipes().
function updateAndDisplayFilteredRecipes(selectedTags) {
    console.log("updateAndDisplayFilteredRecipes - selectedTags:", selectedTags);
    const allRecipes = getFilteredRecipes();

    if (selectedTags.length > 0) {
        const updatedFilteredRecipes = filterBySelectedTags(selectedTags, allRecipes);
        setFilteredRecipes(updatedFilteredRecipes);
        displayRecipes(updatedFilteredRecipes, createCard);
    } else {
        setFilteredRecipes(allRecipes);
        displayRecipes(allRecipes, createCard);
    }
}


//  filtre les recettes en fonction des étiquettes sélectionnées (ingrédients, ustensiles ou appareils)
// et retourne un nouveau tableau de recettes filtrées.
function filterBySelectedTags(selectedTags, filteredRecipes) {
    let updatedFilteredRecipes = filteredRecipes.slice();

    if (selectedTags.length > 0) {
        updatedFilteredRecipes = filteredRecipes.filter((recipe) => {
            return selectedTags.every((selectedTag) => {
                const isIngredient = recipe.ingredients.some((ingredient) => {
                    return ingredient.ingredient.toLowerCase() === selectedTag.toLowerCase();
                });

                const isUstensil = recipe.ustensils.some((ustensil) => {
                    return ustensil.toLowerCase() === selectedTag.toLowerCase();
                });

                const isAppliance = recipe.appliance.toLowerCase() === selectedTag.toLowerCase();

                return isIngredient || isUstensil || isAppliance;
            });
        });
    }
    return updatedFilteredRecipes;
}

// Fonction pour gérer les clics sur les listes d'ingrédients, d'appareils et d'ustensiles
function handleListClick(event) {
    if (event.target.tagName === "LI") {
        const tagType = event.currentTarget.getAttribute("data-filter");
        const selectedValue = event.target.textContent;
        createTag(selectedValue, tagType);
    }
}
document.getElementById("ingredientsList").addEventListener("click", handleListClick);
document.getElementById("applianceList").addEventListener("click", handleListClick);
document.getElementById("ustensilList").addEventListener("click", handleListClick);
*/