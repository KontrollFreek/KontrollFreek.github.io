const ids = [...Array(list.length).keys()].sort((a, b) => 0.5 - Math.random())
const levels = []

function listvideo(a) {
    if (a.verificationVid.startsWith('https://youtu') || a.verificationVid.startsWith('https://www.youtu')) {
        return `<a class="ytimg vidprev vidratio" style="background-image: url(https://i.ytimg.com/vi/${a.verificationVid.replace(/www\.youtube\.com\/watch\?v=/gi, '').replace(/\/youtu\.be/gi, '').replace(/&t=(.*)s/gi, '').replace(/https:\/\//gi, '')}/mqdefault.jpg);" href="https://www.youtube.com/watch?v=${a.verificationVid.replace(/www\.youtube\.com\/watch\?v=/gi, '').replace(/\/youtu\.be/gi, '').replace(/&t=d+s/gi, '').replace(/https:\/\//gi, '')}" target="_blank"><img src="../src/youtube.png"></a>`
    }
    else if (a.verificationVid.startsWith('https://streamable.com')) {
        return `<a class="streamimg vidprev vidratio" style="background-image: url('http://cdn-cf-east.streamable.com/image/${a.verificationVid.replace(/streamable\.com\//gi, '').replace(/https:\/\//gi, '')}.jpg');" href="${a.verificationVid}" target="_blank"><div></div></a>`
    }
    else {
        return `<a class="disimg vidprev vidratio" href="${a.verificationVid.replace(/cdn\.(.*)\.com/gi, 'media.$1.net')}" target="_blank"><video src="${a.verificationVid.replace(/cdn\.(.*)\.com/gi, 'media.$1.net')}"></video></a>`
    }
}

for (let i = 0; i < ids.length; i++) {
    levels.push({ name: list[ids[i]].name, author: list[ids[i]].author, more: list[ids[i]].more, id: list[ids[i]].id, pass: list[ids[i]].pass, percentToQualify: list[ids[i]].percentToQualify, verificationVid: list[ids[i]].verificationVid })
}

for (let i = 0; i < ids.length; i++) {
    $('.roulette').append(`<div id="${i}" class="animate__animated animate__fadeInUp animate__faster"><h1>#${ids[i] + 1}</h1>${listvideo(levels[i])}<a class="text" href="../level/?${ids[i] + 1}"><h2>${levels[i].name}</h2><h3>${levels[i].author}</h3></a><div class="percent"><input type="number" max="100"><span><button class="done">Done</button><button class="giveup">Give Up</button></span></div></div>`)
}

$('.roulette').children().hide()
var a = 0
function onward() {
    a > 0 ? $(`#${a - 1} .percent`).html(`${a}%`) : ''
    $(`#${a} .percent input`).attr('placeholder', `At Least ${a + 1}%`)
    $(`#${a} .percent input`).attr('min', a + 1)
    $(`#${a}`).show()
    windowcheck()
    a++
}
$(window).on('load', function () {
    onward()
})
windowcheck()