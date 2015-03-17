var blue_bg = "#669999";
var red_bg = "#D46A6A";
var green_bg = "#A5C663";


$(document).ready(function() {
  var title = $(document).find("title").text().toLowerCase();
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
    $(".page-content").css("background-color", blue_bg);
  } else if (title === "interests") {
    $(".page-content").css("background-color", red_bg);
  } else if (title === "projects") {
    $(".page-content").css("background-color", green_bg);
  }  
}