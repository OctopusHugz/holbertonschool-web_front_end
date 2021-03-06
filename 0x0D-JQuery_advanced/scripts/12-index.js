let url = "http://localhost:3000/posts";
$(() => {
  function addPostRow(data) {
    let pString = `<p id="row-${data.id}"></p>`;
    let newP = $(pString);
    let newFirstSpan = $("<span>(delete)</span>");
    let newSpan = $("<span></span>");
    $(newFirstSpan).click(() => {
      deletePost(data.id);
    });
    $(newSpan).html(
      `Post created with id ${data.id}, title: ${data.title}, author: ${data.author}`
    );
    $(newP).append(newFirstSpan, newSpan);
    $("body").append(newP);
  }

  function listPosts() {
    $.get(url, function (response) {
      response.forEach((post) => {
        addPostRow(post);
      });
    }).fail(() => {
      alert("Server Error");
    });
  }

  function buildForm() {
    let newForm = $("<form></form>");
    let newDiv1 = $(
      "<div><label for='author'>Author</label><input type='text' id='author'></div>"
    );
    let newDiv2 = $(
      "<div><label for='title'>Title</label><textarea id='title'></textarea></div>"
    );
    let newSubmit = $("<input type='submit'>");
    $("body").append($(newForm).append(newDiv1, newDiv2, newSubmit));
    let textArea = $("textarea[id='title']");
    $("form").submit((e) => {
      e.preventDefault();
      sendForm();
    });
    $(textArea).keypress((e) => {
      if (e.which === 13) {
        e.preventDefault();
        sendForm();
      }
    });
  }

  function sendForm() {
    let authorInput = $("input[id='author']").val();
    let titleInput = $("textarea[id='title']").val();
    let data = { author: authorInput, title: titleInput };
    $("form").after("About to send the query to the API");
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: (response) => {
        addPostRow(response);
      },
      error: () => {
        alert("Error sending the POST query");
      },
    });
  }

  function deletePost(id) {
    let removeString = `#row-${id}`;
    $.ajax({
      type: "DELETE",
      url: url + `/${id}`,
      success: () => {
        $("p").remove(removeString);
      },
      error: () => {
        alert("Post was not deleted");
      },
    });
  }

  listPosts();
  buildForm();
});
