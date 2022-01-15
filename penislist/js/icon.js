var icons = [
    '<i class="far fa-lemon"> </i>',
    '<i class="far fa-angry"> </i>',
    '<i class="fas fa-wheelchair"> </i>',
    '<i class="fas fa-hands-wash"> </i>',
    '<i class="far fa-sad-tear"> </i>',
    '<i class="far fa-trash-alt"> </i>',
    '<i class="fas fa-dumpster-fire"> </i>',
    '<i class="fas fa-bacon"> </i>',
    '<i class="fas fa-hand-middle-finger"> </i>',
    '<i class="far fa-smile"> </i>',
    '<i class="fas fa-wifi"></i>',
    '<i class="fab fa-angellist"></i>',
    '<i class="fas fa-asterisk"></i>',
    '<i class="far fa-compass"></i>',
    '<i class="fas fa-head-side-mask"></i>',
];
window.onpageshow = function getIcon() {
    var rndIcon = Math.floor(Math.random() * (icons.length))
    document.getElementById('helo').innerHTML = icons[rndIcon]
};