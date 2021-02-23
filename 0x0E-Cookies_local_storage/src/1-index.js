document.addEventListener("DOMContentLoaded", () => {
  function setCookies() {
    let firstNameInput = document.getElementById("firstname").value;
    let emailInput = document.getElementById("email").value;
    document.cookie = `firstname=${firstNameInput};max-age=864000`;
    document.cookie = `email=${emailInput};max-age=864000`;
  }

  function showCookies() {
    let newP = document.createElement("p");
    let allCookies = document.cookie;
    newP.innerHTML = `Cookies: ${allCookies}`;
    document.body.append(newP);
  }
  document.getElementById("login").addEventListener("click", setCookies);
  document.getElementById("show").addEventListener("click", showCookies);
});
