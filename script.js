let number = document.querySelector('.number')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let random = document.querySelector('.random')
let reboot = document.querySelector('.reboot')


let count = 0 

plus.onclick = () => {
    if(count < 10) {
        count++
        number.innerText = count
    }

}

minus.onclick = () => {
    if(count > 0) {
        count--
        number.innerText = count
    }
}

reboot.onclick = () => {
    number.innerText = 0
}

random.onclick = () => {
    number.innerText = Math.round(Math.random() * 10)
}




  





