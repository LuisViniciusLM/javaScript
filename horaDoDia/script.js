alert('Olá!')
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/fotomanha.png'
        document.body.style.background = 'rgba(252, 252, 104, 0.788)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/fototarde.png'
        document.body.style.background = 'rgb(252, 101, 46)'
    } else {
        // BOA NOITE
        img.src = 'img/fotonoite.png'
        document.body.style.background = 'rgb(36, 36, 119)'
    }
}