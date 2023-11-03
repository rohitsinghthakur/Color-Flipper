let btn = document.querySelector("#btn");
let main = document.querySelector(".main");
let span = document.querySelector("span");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 252);
  let green = Math.floor(Math.random() * 252);
  let blue = Math.floor(Math.random() * 252);
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  main.style.backgroundColor = color;
  span.textContent = color;
});
