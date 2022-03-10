const one = document.getElementById('inc1')
const five = document.getElementById('inc5')
const ten = document.getElementById('inc10')
const mone = document.getElementById('minc1')
const mfive = document.getElementById('minc5')
const mten = document.getElementById('minc10')

const integer = document.getElementById('int')

let num = 0

integer.innerHTML = num

function btnHandle(a, b) {
  a.addEventListener("click", function() {
    num = num + b

    if (num > 9999) { integer.innerHTML = 'big' }
    else if (num < -999) { integer.innerHTML = 'small' }
    else { integer.innerHTML = num }
  })
}

btnHandle(one, 1)
btnHandle(five, 5)
btnHandle(ten, 10)

btnHandle(mone, -1)
btnHandle(mfive, -5)
btnHandle(mten, -10)