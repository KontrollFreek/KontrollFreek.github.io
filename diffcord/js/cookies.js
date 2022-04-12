$(window).on('load', function () {
    $.cookie('last-visited', Date.now(), {path: "/; SameSite=Lax", secure: true})
    $('#modalcenter').hide()
    $('#modal').css('transform', 'scale(0)')
    setTimeout(function () {
        if ($.cookie('new-user') == undefined || $.cookie('new-user') == 'true') {
            $.cookie('new-user', 'true', {path: "/; SameSite=Lax", secure: true})
            $.cookie('use-cookies', 'true', {path: "/; SameSite=Lax", secure: true})
            $('#modalcenter').fadeIn('fast')
            $('#modal').css('transform', 'scale(1)')
        }
    }, 100)
    for (let i = 0; i < document.cookie.split(";").length; i++) {
        $('#cookies').append('<p><strong>' + document.cookie.split(";")[i].replace('=', '</strong> = <strong>') + '</strong></p>')
    }
})

$('#nocookies').click(function () {
    $('#modalcenter').fadeOut('fast')
    $('#modal').css('transform', 'scale(0)')
    $.cookie('use-cookies', 'false', {path: "/; SameSite=Lax", secure: true})

    for (let i = 0; i < document.cookie.split(";").length; i++) {
        if (document.cookie.split(";")[i] == 'use-cookies=false') return
        $.removeCookie(document.cookie.split(";")[i].split('=')[0])
    }
})

$('#yescookies').click(function () {
    $('#modalcenter').fadeOut('fast')
    $('#modal').css('transform', 'scale(0)')

    $.cookie('new-user', 'false')
})