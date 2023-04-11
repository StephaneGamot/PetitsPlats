export default function createTag(ingredient) {
  const tagContainer = document.getElementById("tags");
  const tagElement = document.createElement("span");
  tagElement.classList.add("tag");
  tagElement.textContent = ingredient;

  const closeButton = document.createElement("i");
  closeButton.className = "fa-regular fa-circle-xmark";
  closeButton.style.color = "#ffffff";
  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", () => {
    tagContainer.removeChild(tagElement);
  });

  tagElement.appendChild(closeButton);
  tagContainer.appendChild(tagElement);
}


/*
export default function createTag(ingredient) {
  const tagContainer = document.getElementById("tags");
  const tagElement = document.createElement("span");
  tagElement.classList.add("tag");

  const ingredientText = document.createElement("span");
  ingredientText.textContent = ingredient;
  tagElement.appendChild(ingredientText);

  const closeButton = document.createElement("span");
  closeButton.innerHTML = " &times;";
  closeButton.style.color = "#ffffff";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", () => {
    tagContainer.removeChild(tagElement);
  });
  tagContainer.appendChild(tagElement);
  tagElement.appendChild(closeButton);

}
*/