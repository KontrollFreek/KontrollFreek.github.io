const type1 = [
    'auto',
    'demon',
    'easy',
    'hard',
    'harder',
    'insane',
    'normal',
    'unrated'
]

const type2 = [
    '',
    '-featured',
    '-epic'
]

const demonType = [
    '-easy',
    '-extreme',
    '-hard',
    '-insane',
    '-medium',
]

function rnd() {
    const rndImg = type1[Math.floor(Math.random() * type1.length)]
    var rndImgType = type2[Math.floor(Math.random() * type2.length)]
    if (rndImg == 'demon') {
        var rndImgType = demonType[Math.floor(Math.random() * demonType.length)] + type2[Math.floor(Math.random() * type2.length)]
    }

    document.getElementById('img').src=`https://github.com/GDColon/GDBrowser/blob/master/assets/difficulties/${rndImg}${rndImgType}.png?raw=true`
}