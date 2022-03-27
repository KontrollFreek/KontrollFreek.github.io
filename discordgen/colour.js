const colorThief = new ColorThief();

    if (img.complete) {
        $("#pfp").css('background-color', colorThief.getColor(img))
    } else {
        $("#pfp").on("load", function () {
            $("#pfp").css('background-color', colorThief.getColor(img))
        })
    }