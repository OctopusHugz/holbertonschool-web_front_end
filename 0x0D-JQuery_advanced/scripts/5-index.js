$(document).ready(function () {
  let numRows = 0;
  function createFamilyTree() {
    $("body").append(
      "<table><thead><tr><th>Firstname</th><th>Lastname</th></tr></thead></table>"
    );
    $("table").append("<tbody></tbody>");
  }

  function addNewMember(firstName, lastName) {
    let newRow = $("<tr></tr>");
    let fnCell = $("<td></td>").html(firstName);
    let lnCell = $("<td></td>").html(lastName);
    let xCell = $("<td></td>")
      .html("(x)")
      .css("background", "orange")
      .click(function () {
        $(this).parent().remove();
      });
    $(newRow).append(fnCell, lnCell, xCell);
    $("tbody").append(newRow);
  }

  createFamilyTree();
  addNewMember("Guillaume", "Salva");
  addNewMember("Arielle", "Snizt");
  addNewMember("Fanette", "Snizt");
  addNewMember("Gerard", "Snizt");
  addNewMember("Victor", "Salva");
});
