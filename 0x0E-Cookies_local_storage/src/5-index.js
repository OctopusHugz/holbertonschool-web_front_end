document.addEventListener("DOMContentLoaded", () => {
  let availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
  if (typeof Storage !== "undefined") {
    createStore();
    displayCart();
  } else {
    alert(
      "Sorry, your browser does not support Web storage. Try again with a better one"
    );
  }

  function addItemToCart(item) {
    localStorage.setItem(item, "true");
  }

  function createStore() {
    let newUL = document.createElement("ul");
    availableItems.forEach((item) => {
      let newLI = document.createElement("li");
      newLI.innerHTML = item;
      newLI.addEventListener("click", () => {
        addItemToCart(item);
      });
      newUL.append(newLI);
    });
    document.body.append(newUL);
  }

  function displayCart() {
    // If the local storage contains any item, it should display the message
    // in a p element that you can append to the body
    if (localStorage.length > 2) {
      let newP = document.createElement("p");
      newP.innerHTML = `You previously had ${
        localStorage.length - 2
      } items in your cart`;
      document.body.append(newP);
    }
  }
});
