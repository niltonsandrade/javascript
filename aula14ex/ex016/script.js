function contar(){
    let in1 = document.getElementById('ini')
    let fi2 = document.getElementById('fim')
    let pa3 = document.getElementById('pas')
    let res = document.getElementById('res')

    if (in1.value.length == 0 || fi2.value.length == 0 || pa3.value.length == 0) {
        res.innerHTML = 'Impossível Contar!!!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let n1 = Number(in1.value)
        let n2 = Number(fi2.value)
        let n3 = Number(pa3.value) 
        if (n3 <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            n3 = 1
        }
        if (n1 < n2) {
            // Contagem Crescente...
            for (let n4 = n1; n4 <= n2; n4 += n3){
                res.innerHTML += ` ${n4} \u{1F449}`
            }
        } else {
            // Contagem Regressiva...
            for (let n4 = n1; n4 >= n2; n4 -= n3){
                res.innerHTML += ` ${n4} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    } 
}
