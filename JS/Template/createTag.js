const tagsContainer = document.getElementById("tags");

export default function createTag(text) {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = text;
    tagsContainer.appendChild(tag);
  }