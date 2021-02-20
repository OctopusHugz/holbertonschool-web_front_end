$(() => {
  function addPostRow(data) {
    let newP = $("<p></p>");
    let newSpan = $("<span></span>");
    $(newSpan).html(
      `Post created with id ${data.id}, title: ${data.title}, author: ${data.author}`
    );
    $(newP).append(newSpan);
    $("body").append(newP);
  }

  function listPosts() {
    $.get("http://localhost:3000/posts", function (response) {
      response.forEach((post) => {
        addPostRow(post);
      });
    }).fail(() => {
      alert("Server Error");
    });
  }

  listPosts();
});
