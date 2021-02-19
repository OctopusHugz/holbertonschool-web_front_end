$(document).ready(function () {
  function createFamilyTree() {
    let newTable = $(
      "<table><thead><tr><th>Firstname</th><th>Lastname</th></tr></thead><tbody><tr><td>Guillaume</td><td>Salva</td></tr><tr><td>Paulette</td><td>Salva</td></tr><tr><td>Antoine</td><td>Salva</td></tr></tbody></table>"
    );
    $("body").append(newTable);
  }
  createFamilyTree();
});
