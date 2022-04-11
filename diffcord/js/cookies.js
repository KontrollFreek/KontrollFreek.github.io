$(window).on('load', function () {
    $('#modalcenter').hide()
    $('#modal').css('transform', 'scale(0)')
    setTimeout(function () {
        if ($.cookie('new-user') == undefined || $.cookie('new-user') == 'true') {
            $.cookie('new-user', 'true')
            $.cookie('use-cookies', 'true')
            for (let i = 0; i < document.cookie.split(";").length; i++) {
                $('#cookies').append('<p><strong>' + document.cookie.split(";")[i].replace('=', '</strong> = <strong>') + '</strong></p>')
            }
            $('#modalcenter').fadeIn('fast')
            $('#modal').css('transform', 'scale(1)')
        }
    }, 700)
})

$('#nocookies').click(function () {
    $('#modalcenter').fadeOut('fast')
    $('#modal').css('transform', 'scale(0)')

    $.cookie('new-user', 'false')
    $.cookie('use-cookies', 'false')
})

$('#yescookies').click(function () {
    $('#modalcenter').fadeOut('fast')
    $('#modal').css('transform', 'scale(0)')

    $.cookie('new-user', 'false')
})