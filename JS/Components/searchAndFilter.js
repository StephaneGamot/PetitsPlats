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

		if (searchTerm.length >= 3) {
			const filteredRecipes = recipes.filter((recipe) => {     // je filtre les recettes en fonction des lettres données

				//Création d' une chaîne avec chaques valeurs des recettes (nom, ingrédients et description) en minuscules
				const recipeValues = [recipe.name, ...recipe.ingredients.map((ingredient) => ingredient.ingredient), recipe.description].join(" ").toLowerCase();

				return recipeValues.includes(searchTerm);
			});

			displayRecipes(filteredRecipes);
		} else {
			displayRecipes(recipes);
		}
	});

	/**
	 * La fonction prend en charge une liste de recettes, efface le conteneur de recettes,
	 * puis parcourt en boucle la liste des recettes et affiche une carte pour chaque recette
	 * @param recipesList - un tableau d'objets contenant les informations relatives aux recettes
	 */
	function displayRecipes(recipesList) {
		const recipeContainer = document.getElementById("card-container");
		recipeContainer.innerHTML = "";

		recipesList.forEach((recipe) => {
			const card = createCard(recipe);
			recipeContainer.appendChild(card);
		});
	}
}
