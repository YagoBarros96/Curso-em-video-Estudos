function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1920)  {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if ( idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 58) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if ( idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 58) {
                // Adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign ='center' // centralizar o texto
        res.innerHTML = `Detectamos que é um ${genero} com ${idade} anos de idade!`
        
        res.appendChild(img)
    
        }
} 