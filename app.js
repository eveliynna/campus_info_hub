let allResources = [];

async function loadResources() {
  try {
    const response = await fetch("data/resources.json");

    if (!response.ok) {
      throw new Error("Fișierul JSON nu a putut fi încărcat.");
    }

    allResources = await response.json();
    displayResources(allResources);
    displayTags(allResources);
  } catch (error) {
    document.getElementById("resourceList").innerHTML =
      `<p>Eroare: ${error.message}</p>`;
  }
}

function displayResources(resources) {
  const resourceList = document.getElementById("resourceList");
  resourceList.innerHTML = "";

  if (resources.length === 0) {
    resourceList.innerHTML = "<p>Nu există resurse pentru acest filtru.</p>";
    return;
  }

  resources.forEach(resource => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${resource.name}</h3>
      <p><strong>Tip:</strong> ${resource.type}</p>
      <p><strong>Locație:</strong> ${resource.location}</p>
      <p><strong>Program:</strong> ${resource.program}</p>
      <p><strong>Tag-uri:</strong> ${resource.tags.join(", ")}</p>
    `;

    resourceList.appendChild(card);
  });
}

function displayTags(resources) {
  const tagList = document.getElementById("tagList");
  tagList.innerHTML = "";

  const allTags = resources.flatMap(resource => resource.tags);
  const uniqueTags = [...new Set(allTags)];

  uniqueTags.forEach(tag => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.textContent = tag;
    tagList.appendChild(span);
  });
}

function filterResources(type) {
  if (type === "all") {
    displayResources(allResources);
    return;
  }

  const filtered = allResources.filter(resource => resource.type === type);
  displayResources(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  loadResources();

  document.getElementById("showAllBtn").addEventListener("click", () => {
    filterResources("all");
  });

  document.getElementById("studyBtn").addEventListener("click", () => {
    filterResources("studiu");
  });

  document.getElementById("foodBtn").addEventListener("click", () => {
    filterResources("mancare");
  });

  document.getElementById("eventBtn").addEventListener("click", () => {
    filterResources("evenimente");
  });
});