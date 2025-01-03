let count = 0

let upg = false
let x2 = false

let upg2 = false
let x3 = false

function refresh() {
    document.getElementById('zagolovok').innerText = 'Нажатия: ' + count
}

document.querySelector('#btn').onclick = function(){
    if (x2 == false && x3 == false) {
        count += 1
    }
    else if (x2 == true) {
        count += 2
    }
    else if (x3 = true) {
        count += 3
    }
    
    refresh()
    console.log('Нажатия x' + count)
}

document.querySelector('#upg').onclick = function(){
    if (count >= 50 && upg == false) {
        count -= 50
        refresh()
        document.getElementById('upg').innerText = 'Куплено'
        upg = true
        x2 = true
    }
    else if (upg == true) {
        alert('Этот предмет уже куплен!')
    }
}

document.querySelector('#upg2').onclick = function(){
    if (count >= 200 && upg2 == false) {
        count -= 200
        refresh()
        document.getElementById('upg2').innerText = 'Куплено'
        upg2 = true
        x2 = false
        x3 = true
    }
    else if (upg == true) {
        alert('Этот предмет уже куплен!')
    }
}