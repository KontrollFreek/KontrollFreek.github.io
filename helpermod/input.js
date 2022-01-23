document.getElementById('warning').style.display = 'none'
document.getElementById('stuff').style.display = 'none'

function showType(fileInput) {
    var files = fileInput.files;

    for (var i = 0; i < files.length; i++) {
        var name = files[i].name;
        var type = files[i].type;
        console.log(`${name} ${type}`)
        if (name === 'Rate.json') {
            document.getElementById('warning').style.display = 'none'
            document.getElementById('stuff').style.display = 'block'
        } else if (name === 'Rate_Demon.json') {
            document.getElementById('warning').style.display = 'none'
            document.getElementById('stuff').style.display = 'block'
        } else {
            document.getElementById('warning').style.display = 'block'
            document.getElementById('stuff').style.display = 'none'
        }
    }
}
