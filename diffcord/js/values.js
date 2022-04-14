const time = new Date().getTime()
const bruh = Math.round(Math.random() * 43200)

setInterval(function () {
    let current = new Date().getTime()
    const elapsed = Math.round((current - time) / 1000) + bruh
    const result = new Date(elapsed * 1000).toISOString().slice(11, 19)
    $('#timestamp').text(result + ' elapsed')
}, 1000)