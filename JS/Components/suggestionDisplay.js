export default function suggestionsDisplay(suggestions, suggestionsContainer) {
	suggestionsContainer.innerHTML = "";

	// Je crée une boucle for pour parcourir le tableau de suggestions
	suggestions.forEach((suggestion) => {
		const listItem = document.createElement("div");
		listItem.textContent = suggestion;
		listItem.className = "suggestion-item";
		suggestionsContainer.appendChild(listItem);

		listItem.addEventListener("click", () => {
			suggestionsContainer.previousElementSibling.value = listItem.textContent;
			suggestionsContainer.innerHTML = "";
		});
	});
}
