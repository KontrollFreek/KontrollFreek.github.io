function home() {
  document.getElementById("box").innerHTML =
    '<div>Hey! I\'m <span class="mention">@KontrollFreek<span><b>KontrollFreek</b><tag>#0643</tag></span></span></div>\
    I like to do digital and traditional art and code in my spare time\
    <div>If you want to see some of my coding projects, check out my <a href="https://github.com/KontrollFreek" target="_blank">Github</a>, or the links below.</div>\
    (see more about me in the <span class="txtbtn" onclick="about()"><i class="fas fa-user"></i> About Me</span> tab)';
  document.getElementById("box").style.display = "block";
}

// These advertisements are how I make money for all these websites. Please consider turning off your adblock.
// ^ Ad Message ^

function about() {
  document.getElementById("box").innerHTML =
    'Hey! I\'m <span class="mention">@KontrollFreek<span><b>KontrollFreek</b><tag>#0643</tag></span></span> <br>\
    like to do digital and traditional art and code in my spare time <br>\
    If you want to see some of my coding projects, check out my <a href="https://github.com/KontrollFreek" target="_blank">Github</a>, or the links below. <br>\
    <br>\
    In case you don\'t know, I\'m an amateur coder, so none of my projects are very good, but I am in fact very good at art (at least by my standards). <br>\
    If you want to see some of my art, check out my <a href="https://twitter.com/KontrollF" target="_blank">Twitter</a>.';
  document.getElementById("box").style.display = "block";
}
