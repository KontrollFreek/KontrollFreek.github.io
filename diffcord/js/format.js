function linkify(str) {
    var newStr = str.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi, function () {

        return '<a href="' + arguments[2] + '" target="_blank">' + (arguments[7] || arguments[2]) + '</a>'
    })
    $('#aboutme p').text(newStr)
}

function parseMD(markdownText) {
	var htmlText = markdownText
		.replace(/\`(.*)\`/gim, '<code>$1</code>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/\__(.*)\__/gim, '<u>$1</u>')
        .replace(/\~~(.*)\~~/gim, '<del>$1</del>')
		.split('\n').join('<br>')

    if (htmlText.substring(0, 4) == '<br>') {
        htmlText = htmlText.substring(4)
    }

	return htmlText.trim()
}

linkify($('#aboutme p').text())

$('#aboutme p').html(parseMD($('#aboutme p').text()))
$('#game #data #data').html(parseMD($('#game #data #data').text()))

twemoji.parse(document.body)