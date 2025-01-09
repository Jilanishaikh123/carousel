let image = document.querySelector(".image");
let index = 0;
let images = [
  "https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg",
  "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
  "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  "https://wallpapercave.com/wp/wp13194405.jpg",
  "https://cdn.wallpaper.tn/large/2K-Resolution-Wallpaper-87961.jpg",
];
let last = images.length - 1;
image.setAttribute("src", images[index]);

// let id = setInterval(() => {
//   next();
// }, 3000);

function previous() {
  if (index == 0) {
    index = last;
  } else {
    index -= 1;
  }
  image.setAttribute("src", images[index]);
}

function next() {
  if (index == last) {
    index = 0;
  } else {
    index += 1;
  }
  image.setAttribute("src", images[index]);
}

// setTimeout(() => {
//   clearInterval(id);
// }, 9000);

function random_image() {
  let randomnum = Math.floor((Math.random() * 10) % 5);
  image.setAttribute("src", images[randomnum]);
}
