var selectedModule = "All";
var filterMode = "Grid";
const menuOptions = ["All", "Branding", "Web", "Photography", "App"];
const imagesMenus = {
  All: [
    "ambitious-creative-co-rick-barrett-Hw7hK-kYA-Q-unsplash.jpg",
    "daniela-izotenko-hOhlYhAiizc-unsplash.jpg",
    "docusign-s5z5vEdbHmM-unsplash.jpg",
    "emilio-garcia-lb9hi0NDjT0-unsplash.jpg",
    "filippo-bortolotto-g8aGsBf7iu4-unsplash.jpg",
    "javier-esteban-zFT7i1-pKwY-unsplash.jpg",
    "lisha-riabinina-zS0P7o9bJm4-unsplash.jpg",
    "remi-thorel-DgUD5P1a2Hc-unsplash.jpg",
    "remi-thorel-UEoKkhdkp9I-unsplash.jpg",
    "surface-QZzA_JgREC4-unsplash.jpg",
  ],
  Branding: [
    "docusign-s5z5vEdbHmM-unsplash.jpg",
    "emilio-garcia-lb9hi0NDjT0-unsplash.jpg",
  ],
  Web: [
    "filippo-bortolotto-g8aGsBf7iu4-unsplash.jpg",
    "javier-esteban-zFT7i1-pKwY-unsplash.jpg",
  ],
  Photography: [
    "lisha-riabinina-zS0P7o9bJm4-unsplash.jpg",
    "remi-thorel-DgUD5P1a2Hc-unsplash.jpg",
  ],
  App: [
    "remi-thorel-UEoKkhdkp9I-unsplash.jpg",
    "surface-QZzA_JgREC4-unsplash.jpg",
  ],
};

function setSelectedModule(moduleName) {
  selectedModule = moduleName;
  paintMenuOptions();
}

function paintMenuOptions() {
  let buttonsContainer = document.getElementsByClassName("buttons-container");
  let menuOptionsHtml = "";
  menuOptions.forEach((option) => {
    menuOptionsHtml += `<div 
        class="menu-button ${
          option === selectedModule ? "menu-button-selected" : ""
        }" onclick="setSelectedModule('${option}')"><span>${option}</span></div>`;
  });
  for (const buttonContainer of buttonsContainer) {
    buttonContainer.innerHTML = menuOptionsHtml;
  }
  paintImages();
}

function paintImages() {
  let scrollImage = document.getElementById("scroll-images");
  let imagesHtml = "";
  imagesMenus[selectedModule].forEach((url, index) => {
    imagesHtml += `<li><img loading="lazy" alt="Image-${index}" src="./images/${url}"/></li>`;
  });
  scrollImage.innerHTML = imagesHtml;
}
