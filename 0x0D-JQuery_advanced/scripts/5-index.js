$(document).ready(function () {
  let numRows = 0;
  function createFamilyTree() {
    $("body").append(
      "<table><thead><tr><th>Firstname</th><th>Lastname</th></tr></thead></table>"
    );
    $("table").append("<tbody></tbody>");
  }

  function addNewMember(firstName, lastName) {
    numRows++;
    $("table tbody").append("<tr><td></td><td></td><td></td></tr>");
    $(`tbody tr:nth-child(${numRows}) td:nth-child(1)`).html(firstName);
    $(`tbody tr:nth-child(${numRows}) td:nth-child(2)`).html(lastName);
    $(`tbody tr:nth-child(${numRows}) td:nth-child(3)`)
      .html("(x)")
      .css("background", "orange")
      .click(function () {
        $(this).parent().remove();
      });
  }

  createFamilyTree();
  addNewMember("Guillaume", "Salva");
  addNewMember("Arielle", "Snizt");
  addNewMember("Fanette", "Snizt");
  addNewMember("Gerard", "Snizt");
  addNewMember("Victor", "Salva");
});
