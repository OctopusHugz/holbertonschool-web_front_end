document.addEventListener("DOMContentLoaded", () => {
  function setCookies() {
    let firstNameInput = document.getElementById("firstname").value;
    let emailInput = document.getElementById("email").value;
    document.cookie = `firstname=${firstNameInput};max-age=864000`;
    document.cookie = `email=${emailInput};max-age=864000`;
  }

  function showCookies() {
    let newP = document.createElement("p");
    let emailCookie = getCookie("email");
    let firstnameCookie = getCookie("firstname");
    newP.innerHTML = `Email: ${emailCookie} - Firstname: ${firstnameCookie}`;
    document.body.append(newP);
  }

  function getCookie(name) {
    try {
      let cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + "="))
        .split("=")[1];
      return cookieValue;
    } catch (error) {
      return "";
    }
  }

  document.getElementById("login").addEventListener("click", setCookies);
  document.getElementById("show").addEventListener("click", showCookies);
});
