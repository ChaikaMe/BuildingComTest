import anime from "animejs";

const imageList = [
  {
    url: "./src/img/Background.jpg",
    type: "Villa",
    name: "Lorem Ipsum",
  },
  {
    url: "./src/img/Background-1.jpg",
    type: "Villa",
    name: "Lorem Ipsum",
  },
  {
    url: "./src/img/Background-2.jpg",
    type: "Apartments",
    name: "Lorem Ipsum",
  },
];

function render(images) {
  const markup = images
    .map(
      (image) => `            
      <li class="our-projects-item" style="background-image: url(${image.url});">
              <div class="projects-item-content" >
                <div class="item-content-text">
                  <p class="content-text">${image.type}</p>
                  <h3 class="content-text-title">${image.name}</h3>
                </div>
                <button class="item-content-button">
                  <svg class="content-button-icon">
                    <use
                      href="./src/img/sprite.svg#icon-arrow-right"
                    />
                  </svg>
                </button>
              </div>
            </li>`
    )
    .join("");
  return markup;
}

const projectList = document.querySelector(".our-projects-list");

projectList.insertAdjacentHTML("beforeend", render(imageList));

anime({
  targets: ".logo, .lang-button",
  opacity: [0, 1],
  translateY: [100, 0],
  duration: 600,
  easing: "easeOutExpo",
  delay: 200,
});

anime({
  targets: ".nav-list",
  opacity: [0, 1],
  translateY: [100, 0],
  duration: 600,
  easing: "easeOutExpo",
  delay: 600,
});

anime({
  targets: ".hero-title-wrapper",
  opacity: [0, 1],
  translateY: [100, 0],
  duration: 600,
  easing: "easeOutExpo",
  delay: 1000,
});

anime({
  targets: ".hero-select-wrapper",
  opacity: [0, 1],
  translateY: [100, 0],
  duration: 600,
  easing: "easeOutExpo",
  delay: 1400,
});
