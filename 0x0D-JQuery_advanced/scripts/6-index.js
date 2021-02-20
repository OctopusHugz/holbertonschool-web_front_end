$(document).ready(function () {
  let numRows = 0;
  function createFamilyTree() {
    $("body").append(
      "<table><thead><tr><th>Firstname</th><th>Lastname</th></tr></thead></table>"
    );
    $("table").append("<tbody></tbody>");
  }

  function addNewMember(firstName, lastName, position) {
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
    if (position === "before") {
      $("tbody").first().prepend(newRow);
    } else {
      $("tbody").append(newRow);
    }
  }

  function createForm() {
    $("table").before(
      "<input type='text' name='first-name' id='#firstNameInput'><input type='text' name='last-name' id='#lastNameInput'>"
    );
    $("table").before(
      "<select name='select-option' id='#select'><option value='before'>Before</option><option value='after'>After</option></select>"
    );
    $("table").before("<input type='submit' id='#submitbutton'>");
    $("input[type='submit']").click(function () {
      let firstNameInput = $("input[id='#firstNameInput']").val();
      let lastNameInput = $("input[id='#lastNameInput']").val();
      let selectValue = $("select[id='#select']").val();
      addNewMember(firstNameInput, lastNameInput, selectValue);
    });
  }

  createFamilyTree();
  createForm();
});
