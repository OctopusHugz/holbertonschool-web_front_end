function changeMode(size, weight, transform, background, color) {
  // Using closure, it changes the style of the entire page and set the font-size,
  // font - weight, text - transform, background - color, and color
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  let newParagraph = document.createElement("p");
  let spookyModeButton = document.createElement("button");
  let darkModeButton = document.createElement("button");
  let screamModeButton = document.createElement("button");
  newParagraph.innerHTML = "Welcome Holberton!";
  spookyModeButton.innerHTML = "Spooky";
  darkModeButton.innerHTML = "Dark mode";
  screamModeButton.innerHTML = "Scream mode";
  document.body.append(newParagraph);
  document.body.append(spookyModeButton);
  document.body.append(darkModeButton);
  document.body.append(screamModeButton);
  spookyModeButton.addEventListener("click", spooky);
  darkModeButton.addEventListener("click", darkMode);
  screamModeButton.addEventListener("click", screamMode);
}

main();
