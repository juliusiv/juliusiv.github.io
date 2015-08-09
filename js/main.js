var blue_bg = "#669999";
var red_bg = "#D46A6A";
var green_bg = "#A5C663";
var yellow_bg = "#F3C859";
var colors = [blue_bg, red_bg, green_bg, yellow_bg];

$(document).ready(function() {
  $("#hire").hover(function() {
    var color = colors[Math.floor(Math.random()*colors.length)];
    $("#hire").css("background-color", color);
    $("#hire").css("border-color", "#FFFFFF");
  }, function() {
    $("#hire").css("background-color", "#FFFFFF");
    $("#hire").css("border-color", "#bbb");
  });
});