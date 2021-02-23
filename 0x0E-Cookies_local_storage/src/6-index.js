document.addEventListener("DOMContentLoaded", () => {
  let availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
  if (window.sessionStorage) {
    createStore();
    displayCart();
  } else {
    alert(
      "Sorry, your browser does not support Web storage. Try again with a better one"
    );
  }

  function addItemToCart(item) {
    sessionStorage.setItem(item, "true");
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
    console.log(sessionStorage);
    if (sessionStorage.length > 1) {
      let newP = document.createElement("p");
      newP.innerHTML = `You previously had ${
        sessionStorage.length - 1
      } items in your cart`;
      document.body.append(newP);
    }
  }
});
