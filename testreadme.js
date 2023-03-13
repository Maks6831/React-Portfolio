
fetch("https://raw.githubusercontent.com/maks6831/travel-infoguide/main/README.md")
.then((response) => response.text())
  .then((data) => console.log(data));



