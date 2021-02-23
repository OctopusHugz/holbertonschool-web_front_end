document.addEventListener("DOMContentLoaded", () => {
  let welcomeMessage = document.querySelector("h1");
  let formDiv = document.querySelector("div");

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

  function showForm() {
    // It should remove the Welcome message if it exists
    if (welcomeMessage) welcomeMessage.remove();
    // It should show the form
    formDiv.style.display = "block";
  }

  function hideForm() {
    // It should hide the form
    formDiv.style.display = "none";
  }

  function deleteCookiesAndShowForm() {
    // It should remove the two cookies
    let firstNameInput = document.getElementById("firstname").value;
    let emailInput = document.getElementById("email").value;
    document.cookie = `firstname=${firstNameInput};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = `email=${emailInput};expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    // it should show the form by calling the showForm function
    showForm();
  }

  function showWelcomeMessageOrForm() {
    let emailCookie = getCookie("email");
    let firstnameCookie = getCookie("firstname");
    // if user is not logged in, the function showForm is called
    if (emailCookie === "" || firstnameCookie === "") showForm();
    // If the user is logged in, replace the body of the page with a h1
    else {
      hideForm();
      let newH1 = document.createElement("h1");
      let logoutLink = document.createElement("a");
      logoutLink.innerHTML = "(logout)";
      logoutLink.style.fontWeight = "normal";
      logoutLink.style.fontStyle = "italic";
      logoutLink.style.marginLeft = "10px";
      logoutLink.addEventListener("click", deleteCookiesAndShowForm);
      newH1.innerHTML = `Welcome: ${firstnameCookie} `;
      newH1.append(logoutLink);
      document.body.append(newH1);
    }
  }

  document.getElementById("login").addEventListener("click", setCookies);
  document.getElementById("show").addEventListener("click", showCookies);
  showWelcomeMessageOrForm();
});
