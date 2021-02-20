let searchQuery;
let searchResults;
let pageOffset = 0;
$(document).ready(function () {
  function createSearchForm() {
    $("body").append("<input type='text'>");
    $("body").append("<input type='submit'>");
    $("body").append("<ul></ul><ul id='pagination'></ul>");
    $("input[type='submit']").click(() => {
      searchQuery = $("input[type='text']").val();
      queryWikipedia(searchQuery, pageOffset);
    });
  }

  function addNewArticle(id, title, snippet) {
    let newLI = $("<li></li>");
    let p1 = $("<p></p>");
    let p2 = $("<p></p>");
    let newSpan = $("<span></span>");
    let newB = $("<b></b>").html(title);
    let spanText = `${id} - ` + $(newB).html();
    $(newSpan).html(spanText);
    $(p1).append(newSpan);
    $(p2).html(snippet);
    $(newLI).append(p1, p2);
    $("ul:first-of-type").append(newLI);
  }

  function queryWikipedia(search, offset) {
    let url = "https://en.wikipedia.org/w/api.php";

    let params = {
      action: "query",
      list: "search",
      srsearch: search,
      format: "json",
      sroffset: offset,
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        searchResults = response.query.search;
        let totalHits = response.query.searchinfo.totalhits;
        console.log(`${totalHits}`);
        for (let index = 0; index < 10; index++) {
          addNewArticle(
            searchResults[index].pageid,
            searchResults[index].title,
            searchResults[index].snippet
          );
        }
        // searchResults.forEach((result) => {
        //   addNewArticle(result.pageid, result.title, result.snippet);
        // });
        buildPagination(totalHits, 10, offset);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
    let pageNumber = 1;
    $("ul#pagination").empty();
    console.log(`${pageOffset}`);
    while (pageOffset < numberOfItems) {
      let newListItem = $("<li><li>").html(pageNumber);
      $(newListItem).css("cursor", "pointer");
      $(newListItem).css("margin-left", "10px");
      $("ul#pagination").css("display", "flex");
      $("ul#pagination").css("list-style", "none");

      // Only bold when this is the current page!
      // $(newListItem).css("font-weight", "bold");

      // When clicking on a page number,
      // it should call the function queryWikipedia with the right offset
      $(newListItem).click(() => {
        queryWikipedia(searchQuery, pageOffset);
      });
      $("ul#pagination").append(newListItem);

      pageOffset += itemsPerPage;
      pageNumber++;
    }
  }

  createSearchForm();
});
