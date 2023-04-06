export default function suggestionsGenerate(query, data) {
	const suggestions = new Set();                                        // Création de l'objet Set pour stocker mes suggestions uniques
	
	data.forEach((recipe) => {                                            // Je parcours tout le tableau (contenant des recettes) avec un forEach
		const propertiesToSearch = ["name", "description", "appliance"];  // Je liste les propriétés [name, secription ... ] que je recherche  dans chaque recette
		propertiesToSearch.forEach((property) => {
			                                                              // Je reparcours en fonction des propriétées  voir ci dessus
			const words = recipe[property].toLowerCase().split(/\s+/);    // Je recupere tout, => miniscule => creation d'un tableau de mots
			words.forEach((word) => {
				
				if (word.includes(query.toLowerCase())) {                 // Je parcours chaque mot (words)
					suggestions.add(word);                                // Si je le trouve alors je le propose
				}
			});
		});

		recipe.ingredients.forEach((ingredient) => {                      // Je parcours les ingrédients de la recette avec forEach ...
			const words = ingredient.ingredient.toLowerCase().split(/\s+/);
			words.forEach((word) => {
				if (word.includes(query.toLowerCase())) {
					suggestions.add(word);
				}
			});
		});

		recipe.ustensils.forEach((utensil) => {
			const words = utensil.toLowerCase().split(/\s+/);
			words.forEach((word) => {
				if (word.includes(query.toLowerCase())) {
					suggestions.add(word);
				}
			});
		});
	});
	return Array.from(suggestions);                                       // tranforme mes suggestions uniques en un tableau que je recupere ...
}
