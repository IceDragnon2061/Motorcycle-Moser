var divs = ["home", "new", "aktion", "sport", "cross", "chopper", "roller"];
var visibleId = 0;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

function start() {
  document.getElementById("Home").click(); // Simulates button click
}
