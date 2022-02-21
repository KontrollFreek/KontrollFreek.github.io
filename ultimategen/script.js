$(document).ready(function() {

    $("input").click(function() {
        var img = $("input[name=dif]:checked").attr('id')

        if (img == 'demon') {
            $("input[name=ddif]").attr('style', 'display: inline-block')
            $("label[id=demontype]").attr('style', 'display: inline-block')
            var img = $("input[name=ddif]:checked").attr('id')
        } else {
            $("input[name=ddif]").attr('style', 'display: none')
            $("label[id=demontype]").attr('style', 'display: none')
            var img = $("input[name=dif]:checked").attr('id')
        }
        $('#img').attr('src', `https://gdbrowser.com/assets/difficulties/${img}.png`)
        console.log(img)
    })
  });