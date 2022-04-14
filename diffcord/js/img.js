//$('#pfp').attr('src', 'img/IMG_0297.jpg')
// $('#pfp').css('transform', 'translatex(16px) translatey(71px)')

// $('#col').css('background-image', 'url(banner/purobook.png)')
// $('#col').css('height', '120px')

const colorThief = new ColorThief();

var presence = [
    'dnd',
    'idle',
    'invisible',
    'online'
]

$('#status img').attr('src', 'img/' + presence[Math.floor(Math.random() * presence.length)] + '.png')

$(window).on('load', function() {
    $('#col').css('background-color', `rgb(${colorThief.getColor($('#pfp')[0]).toString()})`)
})
