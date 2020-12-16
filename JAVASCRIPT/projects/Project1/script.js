function contar(){
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')

    // VÁLIDAÇÃO SI ESTIVER VAZIO
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
        //alert('[ERRO] Faltam dados!')
        
    } else {     
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
       
        // VÁLIDAÇÃO PASSO ZERO
        if (p <= 0) {
            alert('Passo Inválido! Considerando passo 1')
            p = 1
        }

         // CONTAGEM CRESCENTE
        if ( i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} ` // CONCATENANDO
            } 
        } else {
            // CONTAGEM REGRESSIVA
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} ` // CONCATENANDO
            }
        }

        res.innerHTML += ` \u{1F3C1}`
    }
}
