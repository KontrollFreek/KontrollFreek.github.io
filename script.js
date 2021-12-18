function home() {
  document.getElementById("box").innerHTML =
    '<div>Hey! I\'m <span class="mention">@KontrollFreek<span><b>KontrollFreek</b><tag>#0643</tag></span></span></div>\
    I like to do digital and traditional art and code in my spare time\
    <div>If you want to see some of my coding projects, check out my <a href="https://github.com/KontrollFreek">Github</a></div>\
    (see more about me in the <span class="txtbtn" onclick="about()"><i class="fas fa-user"></i> About Me</span> tab)';
  document.getElementById("box").style.display = "block";
}

function about() {
  document.getElementById("box").innerHTML =
    '<div class="ad">These advertisements are how I make money for all these websites. Please consider turning off your adblock.<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9401494779141616"\
  crossorigin="anonymous"></script>\
<ins class="adsbygoogle"\
  style="display:block"\
  data-ad-format="fluid"\
  data-ad-layout-key="-gw-3+1f-3d+2z"\
  data-ad-client="ca-pub-9401494779141616"\
  data-ad-slot="4919894460"></ins>\
<script>\
  (adsbygoogle = window.adsbygoogle || []).push({});\
</script></div>';
  document.getElementById("box").style.display = "block";
}
