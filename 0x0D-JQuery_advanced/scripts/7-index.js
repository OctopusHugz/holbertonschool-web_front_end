$(document).ready(function () {
  function createSearchForm() {
    $("body").append("<input type='text'>");
    $("body").append("<input type='submit'>");
    $("body").append("<ul></ul>");
    $("input[type='submit']").click(function () {
      let searchQuery = $("input[type='text']").val();
      queryWikipedia(searchQuery);
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
    $("ul").append(newLI);
  }

  function queryWikipedia(search) {
    let url = "https://en.wikipedia.org/w/api.php";

    let params = {
      action: "query",
      list: "search",
      srsearch: search,
      format: "json",
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
        let searchResults = response.query.search;
        searchResults.forEach((result) => {
          addNewArticle(result.pageid, result.title, result.snippet);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  createSearchForm();
});
