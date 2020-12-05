function carregar() {
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'dia.png' //BOM DIA
    document.body.style.background = '#edcb94'
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png' //BOA TARDE
    document.body.style.background = '#7289a9'
} else {
    img.src = 'noite.png' //BOA NOITE
    document.body.style.background = '#746580'
}

}




