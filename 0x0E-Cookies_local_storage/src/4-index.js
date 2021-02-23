document.addEventListener("DOMContentLoaded", () => {
  let welcomeMessage = document.querySelector("h1");
  let formDiv = document.querySelector("div");

  function setCookies() {
    let firstNameInput = document.getElementById("firstname").value;
    let emailInput = document.getElementById("email").value;
    if (firstNameInput.length > 0)
      Cookies.set("firstname", firstNameInput, { expires: 10 });
    if (emailInput.length > 0)
      Cookies.set("email", emailInput, { expires: 10 });
  }

  function showCookies() {
    let newP = document.createElement("p");
    let emailCookie = Cookies.get("email");
    let firstnameCookie = Cookies.get("firstname");
    newP.innerHTML = `Email: ${emailCookie} - Firstname: ${firstnameCookie}`;
    document.body.append(newP);
  }

  function showForm() {
    if (welcomeMessage) welcomeMessage.remove();
    formDiv.style.display = "block";
  }

  function hideForm() {
    formDiv.style.display = "none";
  }

  function deleteCookiesAndShowForm() {
    Cookies.remove("email");
    Cookies.remove("firstname");
    showForm();
  }

  function showWelcomeMessageOrForm() {
    let emailCookie = Cookies.get("email");
    let firstnameCookie = Cookies.get("firstname");
    if (emailCookie === undefined || firstnameCookie === undefined) showForm();
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

  function setCookiesAndShowWelcomeMessage() {
    setCookies();
    showWelcomeMessageOrForm();
  }

  document.getElementById("login").addEventListener("click", setCookies);
  document.getElementById("show").addEventListener("click", showCookies);
  setCookiesAndShowWelcomeMessage();
});
