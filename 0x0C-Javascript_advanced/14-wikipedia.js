function createElement(data) {
  let newP = document.createElement("p");
  newP.innerHTML = data;
  document.body.append(newP);
}

function queryWikipedia(callback) {
  let newReq = new XMLHttpRequest();
  newReq.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  newReq.send();
  newReq.onload = () =>
    callback(JSON.parse(newReq.response).query.pages["21721040"].extract);
}

queryWikipedia(createElement);
