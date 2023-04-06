import createCard from "../Template/createCard.js";

/**
 * Il prend une liste de recettes, ajoute un écouteur d'événements à l'entrée de la recherche et filtre les recettes.
 * sur la base de la valeur de l'entrée de recherche
 * @param recipes - un tableau d'objets, chaque objet représentant une recette
 */
export default function searchAndFilter(recipes) {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredRecipes = [];                            // J'initialise un tableau vide pour ensuite pouvoir stocker mes recettes 

    for (let i = 0; i < recipes.length; i++) {             // A l'aide de la boucle for je parcous toutes les recettes du tableau "recipes"
      const recipe = recipes[i];                           // Je récupere la recette courante [i]

      const ingredients = [];                              // J'initialise un tableau vide pour ensuite pouvoir stocker mes ingrédients

      // Je crée une boucle pour récuperer pour récuperer la propriété ingredient de chaque recette (recipe.ingrédient)
      for (let j = 0; j < recipe.ingredients.length; j++) {
        ingredients.push(recipe.ingredients[j].ingredient);
      }
      
      // Je crée un tableau qui récupère toutes les valeurs (nom description, ingredient ...) => miniscule ...
      const recipeValues = [
        recipe.name,
        ...ingredients,
        recipe.description,
      ].join(" ").toLowerCase();

      if (recipeValues.includes(searchTerm)) {
        filteredRecipes.push(recipe);
      }
    }

    if (searchTerm.length >= 3) {                          // Si et seulement si j'ai au minimum 3 lettres 
      displayRecipes(filteredRecipes);
    } else {
      displayRecipes(recipes);
    }
  });

 // J'affiche mes recettes et je prend en paramètre le tableau de recettes "recipesList"
 function displayRecipes(recipesList) {
    const recipeContainer = document.getElementById("card-container");
    recipeContainer.innerHTML = "";

    // J'utilise une boucle for pour parcourir le tableau de recettes "recipesList"
    for (let i = 0; i < recipesList.length; i++) {
      const recipe = recipesList[i];
      const card = createCard(recipe);
      recipeContainer.appendChild(card);
    }
  }
}