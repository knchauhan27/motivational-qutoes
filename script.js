import { motivationalQuotes } from "./quotes.js";

//selection
let quote = document.querySelector(".quote");
let box = document.querySelector(".bigbox");
let author = document.querySelector(".author");
let btn = document.querySelector("button");

console.log(motivationalQuotes);

btn.addEventListener("click", () => {
  console.log("button was clicked");
  ranQuote();
  changeColor();
});

box.addEventListener("click", () => {
  ranQuote();
  changeColor();
});

function ranQuote() {
  let ranId = Math.floor(Math.random() * 50) + 1;
  let genQuote = motivationalQuotes[ranId];

  quote.innerHTML = genQuote.quote;
  author.innerHTML = genQuote.author;

  return quote;
}

function changeColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;

  let color = `rgb(${r}, ${g}, ${b})`;
  box.style.backgroundColor = color;
  box.style.transition = "background-color 0.5s ease";
}

// motivationalQuotes.forEach((quote) => {
//   console.log(`Quote is : ${quote.quote} - ${quote.author} `);
// });
