window.onload = function () {
  theme = getTheme();
  theme === undefined ? setTheme("default") : setTheme(theme);  
};

function getTheme() {
  var nameEQ = "theme=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


function setTheme(theme) {
  // Set the logo
  document.getElementById("logo").src = "/assets/logo_" + theme + ".png";
  // Set the CSS
  document.getElementById("theme-css").href = "/css/" + theme + ".css";
  document.cookie = "theme=" + theme + ";";
}