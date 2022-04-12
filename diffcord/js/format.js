function linkify(str) {
    var newStr = str.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi, function () {

        return '<a href="' + arguments[2] + '" target="_blank">' + (arguments[7] || arguments[2]) + '</a>'
    })
    $('#aboutme p').html(newStr)
}

linkify($('#aboutme p').html())

function parseMD(markdownText) {
	var htmlText = markdownText
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.split('\n').join('<br>')

    if (htmlText.substring(0, 4) == '<br>') {
        htmlText = htmlText.substring(4)
    }

	return htmlText.trim()
}

$('#aboutme p').html(parseMD($('#aboutme p').text()))

twemoji.parse(document.body)