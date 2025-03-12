function Tabuada() {
    let numero = document.getElementById('num')
    let tabua = document.getElementById('seltab')
    
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabua.innerHTML = ''
        while(c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tabua.appendChild(item)
        c++
        }
    }
}