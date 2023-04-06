// Fonction pour afficher les cartes pour chacune des recettes
export default function displayRecipes(recipes, createCard) {
	const recipeContainer = document.getElementById("card-container");

	// Je parcours le tableau de recettes et pour chaque recette...
	recipes.forEach((recipe) => {
		const card = createCard(recipe);         // J'apelle la fonction CreateCard (recipe) qui me reviens avec une carte + la recette
		recipeContainer.appendChild(card);
	});
}
