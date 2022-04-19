const time = new Date().getTime()
const bruh = Math.round(Math.random() * 43200)

setInterval(function () {
    let current = new Date().getTime()
    const elapsed = Math.round((current - time) / 1000) + bruh
    const result = new Date(elapsed * 1000).toISOString().slice(11, 19)
    $('#timestamp').text(result + ' elapsed')
}, 1000)

$('#upfp').change(function () {
    const file = this.files[0]
    console.log(file)
    if (file) {
        let reader = new FileReader()
        reader.onload = function (event) {
            if (!file.type.startsWith('image/')) return;
            $('#imgprev').attr('src', event.target.result)
            $('#pfp').attr('src', event.target.result);
            $('#imgprev').on('load', function () {
                $('#col').css('background-color', `rgb(${colorThief.getColor($('#imgprev')[0]).toString()})`)
            })
        }
        reader.readAsDataURL(file)
    }
})

$('.hcenter[opt="pres"]').children().click(function () {
    $('.hcenter[opt="pres"]').children().attr('class', 'gray')
    $(this).attr('class', 'blurple')
    $('#status img').attr('src', $(this).children().attr('src'))
})