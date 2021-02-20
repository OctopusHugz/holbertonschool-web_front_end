let searchQuery;

$(document).ready(() => {
  function createSearchForm() {
    $("body").append("<input type='text'>");
    $("body").append("<input type='submit'>");
    $("body").append("<ul></ul><ul id='pagination'></ul>");
    $("input[type='submit']").click(() => {
      searchQuery = $("input[type='text']").val();
      queryWikipedia(searchQuery, 0);
    });
  }

  function addNewArticle(id, title, snippet) {
    let newLI = $("<li></li>");
    let p1 = $("<p></p>");
    let p2 = $("<p></p>");
    let newSpan = $("<span></span>");
    let newB = $("<b></b>").html(title);
    let spanText = $(newB);
    $(newSpan).html(spanText);
    $(newSpan).prepend(`${id} - `);
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

    displayLoading(true);

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        displayLoading(false);
        let searchResults = response.query.search;
        let totalHits = response.query.searchinfo.totalhits;
        $("ul:first-of-type").empty();
        searchResults.forEach((result) => {
          addNewArticle(result.pageid, result.title, result.snippet);
        });
        buildPagination(totalHits, 10, offset);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function buildPagination(numberOfItems, itemsPerPage, currentOffset) {
    $("ul#pagination").empty();
    let pageNumber = currentOffset / 10;
    if (pageNumber === 0) pageNumber++;
    for (let index = 0; index < numberOfItems / itemsPerPage; index++) {
      let newListItem = $("<li></li>").html(index + 1);
      $(newListItem).css("cursor", "pointer");
      $(newListItem).css("margin-left", "10px");
      $("ul#pagination").css("display", "flex");
      $("ul#pagination").css("list-style", "none");
      if (pageNumber === 1) {
        if (pageNumber === index + 1) $(newListItem).css("font-weight", "bold");
      } else {
        if (pageNumber === index) $(newListItem).css("font-weight", "bold");
      }
      $(newListItem).click(() => {
        queryWikipedia(searchQuery, index * 10);
      });
      $("ul#pagination").append(newListItem);
    }
  }

  function displayLoading(loading) {
    if (loading) {
      $("ul:first-of-type").wrap("<div class='loading'></div>");
    } else {
      $("ul:first-of-type").unwrap();
    }
  }

  createSearchForm();
});
