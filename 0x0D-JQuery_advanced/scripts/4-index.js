$(document).ready(function () {
  function createFamilyTree() {
    let table = $("<table></table>");
    let tableHead = $("<thead></thead>");
    let tableHeadRow1 = $("<tr></tr>");
    let tableHeadRow1TH1 = $("<th></th>");
    let tableHeadRow1TH2 = $("<th></th>");

    let tableBody = $("<tbody></tbody>");
    let tableRow1 = $("<tr></tr>");
    let tableRow1TD1 = $("<td></td>");
    let tableRow1TD2 = $("<td></td>");

    let tableRow2 = $("<tr></tr>");
    let tableRow2TD1 = $("<td></td>");
    let tableRow2TD2 = $("<td></td>");

    let tableRow3 = $("<tr></tr>");
    let tableRow3TD1 = $("<td></td>");
    let tableRow3TD2 = $("<td></td>");

    $(tableHeadRow1TH1).text("Firstname");
    $(tableHeadRow1TH2).text("Lastname");
    $(tableHead).append(tableHeadRow1);
    $(tableHeadRow1).append(tableHeadRow1TH1, tableHeadRow1TH2);

    $(tableRow1TD1).text("Guillaume");
    $(tableRow1TD2).text("Salva");
    $(tableRow1).append(tableRow1TD1, tableRow1TD2);

    $(tableRow2TD1).text("Paulette");
    $(tableRow2TD2).text("Salva");
    $(tableRow2).append(tableRow2TD1, tableRow2TD2);

    $(tableRow3TD1).text("Antoine");
    $(tableRow3TD2).text("Salva");
    $(tableRow3).append(tableRow3TD1, tableRow3TD2);

    $(table).append(tableHead, tableBody);
    $(tableBody).append(tableRow1, tableRow2, tableRow3);

    $("body").append(table);
  }

  function replaceFamilyTree() {
    $("tbody").children().replaceWith("<tr><td></td><td></td></tr>");
    $("tbody tr td:first-child").html("Gerard");
    $("tbody tr td:last-child").html("Bonissa");
  }

  createFamilyTree();
  replaceFamilyTree();
});
