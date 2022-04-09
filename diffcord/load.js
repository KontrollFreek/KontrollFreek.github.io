$(window).on('load', function() {
    $('#loadscreen').fadeOut(500)
    // $('#loadprog').attr('value', $('#loadprog').attr('max') )
    // console.log(loaded + ' loaded elements counted')
})

$('#img').on('load', function() {
    $(this).css('background-color', '#00000000')
})

// var loaded = 0

// $('*').on('load', function() {
//     loaded++
//     $('#loadprog').attr('value', loaded)
// })