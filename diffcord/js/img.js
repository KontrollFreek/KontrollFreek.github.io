//$('#pfp').attr('src', 'img/IMG_0297.jpg')
// $('#pfp').css('transform', 'translatex(16px) translatey(71px)')

// $('#col').css('background-image', 'url(banner/purobook.png)')
// $('#col').css('height', '120px')

const colorThief = new ColorThief();

$(window).on('load', function() {
    $('#col').css('background-color', `rgb(${colorThief.getColor($('#pfp')[0]).toString()})`)
})
