function home() {
  document.getElementById("box").innerHTML =
    '<div>Hey! I\'m <span class="mention">@KontrollFreek<span><b>KontrollFreek</b><tag>#0643</tag></span></span></div>\
    I like to do digital and traditional art and code in my spare time \
    <div>If you want to see some of my coding projects, check out my <a href="https://github.com/KontrollFreek">Github</a></div>\
    (see more about me in the <span class="txtbtn" onclick="about()"><i class="fas fa-user"></i> About Me</span> tab)';
document.getElementById("box").style.display = "block";
}

function about() {
  document.getElementById("box").innerHTML = "<div>About Page</div>";
}
