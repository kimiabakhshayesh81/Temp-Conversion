let $ = document
let titelElem = $.querySelector('.titel')
let changeBtn = $.querySelector('.changeButton')
let resetBtn = $.querySelector('.resetButton')
let convertBtn = $.querySelector('.convertButton')
let inputElem = $.querySelector('#converter')
let result = $.querySelector('.result')
let Cmessage = $.querySelector('.C')
let Fmessage = $.querySelector('.F')


function changeHandler(){

    if(Cmessage.innerHTML === '°C'){
        Cmessage.innerHTML = '°F'
        Fmessage.innerHTML ='°C'
        inputElem.setAttribute('placeholder' , '°F')
    }
    else{
        Cmessage.innerHTML = '°C'
        Fmessage.innerHTML = '°F'
        inputElem.setAttribute('placeholder' , '°C')
    }
}


function resetHandler(){
    result.innerHTML = ''
    inputElem.value = ''
}


function convertHandler(){
    if(inputElem.value === ''){
        result.innerHTML = 'insert correct ansewr'
        result.style.color = 'red'
    }
    else{
        if(Cmessage.innerHTML === '°C'){
            let finalValue = (inputElem.value * 1.8) + 32
            result.innerHTML = inputElem.value + '°C To ' + finalValue + '°F'
        }
        else{
            let finalValue = (inputElem.value - 32) * 5/9
            result.innerHTML = inputElem.value + '°F To ' + finalValue.toFixed(2) + '°C'
        }
        
    }
    
}

changeBtn.addEventListener('click' , changeHandler)
resetBtn.addEventListener('click' , resetHandler)
convertBtn.addEventListener('click' , convertHandler)