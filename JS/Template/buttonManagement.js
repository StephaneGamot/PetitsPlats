/**
 * Il crée un élément bouton, définit ses attributs de classe, de texte et de données, et on lui rajoute un event listener
 * @param label - Le texte qui sera affiché sur le bouton.
 * @param placeholder - Le texte qui sera inséré dans la zone de texte lorsque le bouton est cliqué.
 * @returns Un élément bouton avec son label, placeholder, et event listener.
 */
export function createButton(label, placeholder) {
	const newButton = document.createElement("button");
	newButton.className = "btn";
	newButton.innerHTML = `${label} <span class="chevron">▼</span>`;
	newButton.setAttribute("data-label", label);
	newButton.setAttribute("data-placeholder", placeholder);
	newButton.addEventListener("click", handleButton);
	return newButton;
}

/**
 * Lorsque le bouton est cliqué, il est remplacé par un élément de saisie, et lorsque l'élément de saisie perd son statut de
 * focus, alors il est remplacé par le bouton initial
 */
export function handleButton() {
	const label = this.getAttribute("data-label");
	const placeholder = this.getAttribute("data-placeholder");
	const input = document.createElement("input");
	input.type = "search";
	input.placeholder = placeholder;
	input.classList.add("btn");

	this.replaceWith(input);
	input.focus();

	input.addEventListener("focusout", () => {
		const newButton = createButton(label, placeholder);
		input.replaceWith(newButton);
	});
}
