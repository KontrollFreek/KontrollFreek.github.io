$(window).on('load', function () {
    $('#loadscreen').fadeOut(500)
    $.cookie('new-user', 'false') // temporary while i fix stuff
    // $('#loadprog').attr('value', $('#loadprog').attr('max') )
    // console.log(loaded + ' loaded elements counted')
    $("#newusercenter").css("display", "none")
    $("#newuser").css("transform", "scale(0)")
    setTimeout(function () {
        if ($.cookie('new-user') == undefined) {
            $("#newusercenter").css("display", "flex")
            $("#newuser").css('animation', 'fade 300ms cubic-bezier(0.000, 1.650, 1.000, 1.000)')
            $("#newuser").css("transform", "scale(1)")
            $.cookie('new-user', 'false')
        }
    }, 500)
})

// var loaded = 0

// $('*').on('load', function() {
//     loaded++
//     $('#loadprog').attr('value', loaded)
// })