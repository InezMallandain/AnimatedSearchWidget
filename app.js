const button = document.querySelector(".button");
const input = document.querySelector(".input");
const search = document.querySelector(".search");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.addEventListener("keyup", function (event) {
  document.body.style.backgroundImage = `url('https://source.unsplash.com/featured/?${event.target.value}')`;
});
