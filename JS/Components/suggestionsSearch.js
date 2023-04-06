import suggestionsGenerate from "./suggestionsGenerate.js";
import displaySuggestions from "./suggestionDisplay.js";

// La fonction qui me permet de gérer la recherche de suggestions en fonction des lettres données
export default function suggestionsSearch() {
	const searchGroups = document.querySelectorAll(".search-group"); // Je sélectionne les groupes de recherche qui sont présents dans le DOM

	// je parcours chaque groupe de recherche mais avec la methode ForEach
	searchGroups.forEach((searchGroup) => {
		// Je sélectionne les éléments importants que l'on retrouve dans chaque groupe de recherche
		const button = searchGroup.querySelector("button");
		const searchContainer = searchGroup.querySelector(".search-container");
		const searchInput = searchGroup.querySelector('input[type="search"]');
		const suggestionsContainer = searchGroup.querySelector(".suggestions-container");

		// J'ajoute un event listener au bouton pour afficher / masquer mon conteneur de recherche
		button.addEventListener("click", () => {
			searchContainer.classList.toggle("hidden");
			searchInput.focus();
		});

		// J'ajoute un event listener 'input' à l'élément input[type="search"] pour gérer ma recherche
		searchInput.addEventListener("input", (event) => {
			const searchTerm = event.target.value.toLowerCase(); 	// je recupere la saisie de l'input => minuscule et je le stocke dans la const

			// Si j'ai - de 3 lettres alors il vide l'input et il stop la fonction
			if (searchTerm.length < 3) {
				suggestionsContainer.innerHTML = "";
				return;
			}

			// Me permet de créer des suggestions en rapport à la valeur de recherche et du type de données dataset.label
			const suggestions = suggestionsGenerate(searchTerm, button.dataset.label);
			displaySuggestions(suggestions, suggestionsContainer);
		});
	});
}
