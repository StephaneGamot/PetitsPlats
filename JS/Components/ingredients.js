import { recipes } from "../Data/recipes.js";

export function getAllIngredients() {
	const allIngredients = new Set();
	recipes.forEach((recipe) => {
		recipe.ingredients.forEach((ingredient) => {
			allIngredients.add(ingredient.ingredient);
		});
	});
	return Array.from(allIngredients);
}

export function displayIngredients(ingredients) {
	const ulElement = document.getElementById("xxx");

	ingredients.forEach((ingredient) => {
		const liElement = document.createElement("li");
		liElement.textContent = ingredient;
		ulElement.appendChild(liElement);
	});
}

/*
export function displayIngredients(ingredients) {
   // Sélectionnez l'élément <main> de la page
   const mainElement = document.querySelector("main");
	 const ulElement = document.createElement("ul");

	ingredients.forEach((ingredient) => {
		const liElement = document.createElement("li");
		liElement.textContent = ingredient;
		ulElement.appendChild(liElement);
	});
}
*/
