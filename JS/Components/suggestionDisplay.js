export default function suggestionsDisplay (suggestions, suggestionsContainer) {
	suggestionsContainer.innerHTML = "";
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
