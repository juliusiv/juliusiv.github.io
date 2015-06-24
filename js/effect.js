var content;
var red = "#D46A6A";
var blue = "#669999";
var green = "#A5C663";
var colors = [red, blue, green];
var run = true;

$(document).ready(function() {
  var element = $(".page-content .wrapper p");
  content = element.html();

  animation();
  element.click(function() {
    if (run) {
      run = false;
    } else {
      run = true;
      animation();
    }
  });
});

function animation() {
  console.log("There's a storm a-brewin'!")
  var max = 1000;
  var min = 500;

  (function loop() {
    var wait = Math.floor(Math.random()*(max-min)) + min;
    setTimeout(function() {
      setupRaindrop();
      if (!run) {
        console.log("The rain has subsided...\n");
        return;
      }
      (wait > 750) ? console.log("Drip.") : console.log("Drop.");
      loop();
    }, wait);
  }());
}

function setupRaindrop() {
  var index;
  do {
    index = Math.floor(Math.random()*content.length);
  } while (content[index] === "." || content[index] === ",")

  var color = colors[Math.floor(Math.random()*colors.length)];

  var new_stuff = content.slice(0, index) +
    "<span id='new-block'>" + content[index] + "</span>" + content.slice(index+1);
  $(".page-content .wrapper p").html(new_stuff);

  var left = $("#new-block").offset().left;
  var top = ($("#new-block").offset().top)+17;
  raindrop(color, left, top);
}

function raindrop(color, left, top) {
  var droplet = $("<div class='droplet'></div>");
  $("body").append(droplet);
  droplet.css("background-color", color);
  droplet.css("left", left);
  droplet.css("top", top);

  droplet.animate({
    top: "+=500",
    opacity: 0
  }, 1000, function() {
    droplet.remove();
  });
}