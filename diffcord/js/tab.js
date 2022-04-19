$('#sidebar>div').hide()
$('#sidebar #0').show()
$('#navbar button').click(function() {
    $('#sidebar>div').hide()
    $('#navbar>*').removeClass('hover')
    $('#sidebar>#' + $(this).attr('id')).show()
    $('#navbar>#' + $(this).attr('id')).addClass('hover')
    $('#navbar>#' + $(this).attr('id') + ' #svg').addClass('hover')
})