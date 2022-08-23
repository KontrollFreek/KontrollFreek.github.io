for (let i = 0; i < packs.texturepacks.length; i++) {
    const pack = packs.texturepacks[i]
    switch (pack.PC) {
        case true:
            message = 'This pack <b>ONLY</b> contains base game textures.<br><em><e class="b">(for unmodded Geometry Dash)</e></em>'
            break
        case false:
            message = 'This pack <b>ONLY</b> contains GDShare textures.<br><em><e class="b">(for <a href="https://iadyt.one" target="_blank">Geometry Dash Mod Menu</a>)</e></em>'
            break
    }
    $('.texture-packs').append(`<div><div class="pack"><span>${pack.name}<span class="device">${pack.PC ? 'PC' : 'Mobile'}</span></span>${pack.link ? `<span class="author">(${pack.ported ? 'ported ' : ''}by ${packs.users[pack.author] ? `<span>${pack.author}<font class="tag">#${packs.users[pack.author]}</font></span>` : `<span>${pack.author}</span>`})</span>` : ''}</div><div class="download"><span class="animate__animated animate__bounceIn">${pack.link ? message : 'This pack is currently unavailable.<br>It will be finished as soon as possible!'}</span>${pack.link ? `<a href="${pack.link}">` : ''}<button class="${!pack.link ? 'disabled' : ''}">Download</button>${pack.link ? '</a>' : ''}</div></div>`)
}

for (let i = 0; i < packs.betteredit.length; i++) {
    const pack = packs.betteredit[i]
    $('.betteredit').append(`<div><div class="pack"><span>${pack.name}<span class="version ${pack.version == packs.versions.betteredit ? '' : 'bad'}">${pack.version == packs.versions.betteredit ? '<i class="bi bi-check2"></i>' : '<i class="bi bi-x-lg"></i>'} v${pack.version}</span></span><span class="author">(by <span><b>${pack.author}</b><font class="tag">#${packs.users[pack.author]}</font></span>)</span></span></div><div class="download">${pack.link ? `<a href="${pack.link}">` : ''}<button class="${!pack.link ? 'disabled' : ''}">Download</button>${pack.link ? '</a>' : ''}</div></div>`)
}

for (let i = 0; i < packs.gdshare.length; i++) {
    const pack = packs.gdshare[i]
    $('.gdshare').append(`<div><div class="pack"><span>${pack.name}<span class="version ${pack.version == packs.versions.gdshare ? '' : 'bad'}">${pack.version == packs.versions.gdshare ? '<i class="bi bi-check2"></i>' : '<i class="bi bi-x-lg"></i>'} v${pack.version}</span></span><span class="author">(by <span><b>${pack.author}</b><font class="tag">#${packs.users[pack.author]}</font></span>)</span></span></div><div class="download">${pack.link ? `<a href="${pack.link}">` : ''}<button class="${!pack.link ? 'disabled' : ''}">Download</button>${pack.link ? '</a>' : ''}</div></div>`)
}

function windowcheck() {
    if ($(window).width() < 600) {
        $('.nav').css('font-size', '0.7rem')
        $('.pack').css('flex-direction', 'column')
        $('.author').css('font-size', '0.6em')
        $('.author').css('margin-top', '5px')
    } else {
        $('.nav').css('font-size', '.9rem')
        $('.pack').css('flex-direction', 'row')
        $('.author').css('font-size', '1em')
        $('.author').css('margin-top', '0')
    }

    if ($(window).width() < 406) {
        $('.screen').css('display', 'flex')
        $('body').css('overflow', 'hidden')
    } else {
        $('.screen').css('display', 'none')
        $('body').css('overflow', 'auto')
    }
}

windowcheck()

$(window).on('resize', function () {
    windowcheck()
}).trigger('resize')
