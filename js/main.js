var blue_bg = "#669999";
var red_bg = "#D46A6A";
var green_bg = "#A5C663";


$(document).ready(function() {
  var title = $(document).find("title").text().toLowerCase();
  var url = document.URL.split('/');

  var title = "";
  for (var i = 0; i < url.length; i++) {
    if (url[i] === "about" || url[i] === "interests" || url[i] === "projects") {
      title = url[i];
      break;
    }
  }
  set_tab_color(title);
  set_content_color(title);
});

function set_tab_color(title) {
  if(title === "about") {
    $("#about-link-box").css("background-color", blue_bg);
  } else if (title === "interests") {
    $("#interests-link-box").css("background-color", red_bg);
  } else if (title === "projects") {
    $("#projects-link-box").css("background-color", green_bg);
  }
}

function set_content_color(title) {
  if(title === "about") {
    $("body").css("background-color", blue_bg);
  } else if (title === "interests") {
    $("body").css("background-color", red_bg);
  } else if (title === "projects") {
    $("body").css("background-color", green_bg);
  }  
}