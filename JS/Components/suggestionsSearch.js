import  suggestionsGenerate from "./suggestionsGenerate.js"
import displaySuggestions from "./suggestionDisplay.js";


export default function suggestionsSearch() {
    const searchGroups = document.querySelectorAll(".search-group");
  
    searchGroups.forEach((searchGroup) => {
      const button = searchGroup.querySelector("button");
      const searchContainer = searchGroup.querySelector(".search-container");
      const searchInput = searchGroup.querySelector('input[type="search"]');
      const suggestionsContainer = searchGroup.querySelector(".suggestions-container");
  
      button.addEventListener("click", () => {
        searchContainer.classList.toggle("hidden");
        searchInput.focus();
      });
  
      searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm.length < 3) {
          suggestionsContainer.innerHTML = "";
          return;
        }
        const suggestions = suggestionsGenerate(searchTerm, button.dataset.label);
        displaySuggestions(suggestions, suggestionsContainer);
      });
    });
  }
  