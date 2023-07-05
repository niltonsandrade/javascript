function gerar(){
    let n1 = document.getElementById('txt1')
    let tab = document.getElementById('seltab')
    if (n1.value.length == 0) {
        window.alert('Por favor, digite um número!')        
    } else {
        let a = Number(n1.value)
        tab.innerHTML = ''
        for (let b = 1; b < 10; b++){
            let item = document.createElement('option')
            item.text = `${a} x ${b} = ${a*b}`
            item.value = `tab${b}`
            tab.appendChild(item)
        }   
    }    

}