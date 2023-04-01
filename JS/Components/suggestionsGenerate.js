export default function suggestionsGenerate(query, data) {
	const suggestions = new Set();
	data.forEach((recipe) => {
		const propertiesToSearch = ["name", "description", "appliance"];
		propertiesToSearch.forEach((property) => {
			const words = recipe[property].toLowerCase().split(/\s+/);
			words.forEach((word) => {
				if (word.includes(query.toLowerCase())) {
					suggestions.add(word);
				}
			});
		});
		recipe.ingredients.forEach((ingredient) => {
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
	return Array.from(suggestions);
}
