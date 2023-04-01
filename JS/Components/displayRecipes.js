export default function displayRecipes(recipes, createCard) {
	const recipeContainer = document.getElementById("card-container");

	recipes.forEach((recipe) => {
		const card = createCard(recipe);
		recipeContainer.appendChild(card);
	});
}
