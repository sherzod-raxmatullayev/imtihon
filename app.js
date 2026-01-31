const inmput = document.querySelector('.input')
const buttonadd = document.querySelector('.add')
const res = document.querySelector('.res')
const lis = document.querySelector('.list')

let DATA = [
    
]

function generetion() {
    ht = ' '
   
    for (let item of DATA) {
        ht += item
        
    }
    lis.innerHTML = ht

    


}

generetion()

res.addEventListener('click' ,() => {
    DATA = []
    generetion()
})

buttonadd.addEventListener('click' ,() => {
    text = inmput.value
    if (!!text) {
        DATA.push(`<div class="tasks"><p>${text}</p></div>`)
        inmput.value = ' '
        generetion()
    }
})
















