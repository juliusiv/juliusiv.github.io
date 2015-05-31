var content;
var red = "#D46A6A";
var blue = "#669999";
var green = "#A5C663";
var colors = [red, blue, green];

$(document).ready(function() {
  content = $(".page-content .wrapper p").html();
  animation();
});

function animation() {
  var index = Math.floor(Math.random()*content.length);
  var new_stuff = content.slice(0, index) +
    "<span id='color-block'>" + content[index] + "</span>" + content.slice(index+1);
  var color = colors[Math.floor(Math.random()*colors.length)];
  $(".page-content .wrapper p").innerHTML = new_stuff;

  $("#color-block").css("background-color", color);
  console.log("Color: ", color);
  console.log(index, content[index]);
  // console.log(new_stuff);
}