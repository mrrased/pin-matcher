

document.getElementById('pin-generate').addEventListener('click', function(){
    displayRandomPin();

})    

function randomPin(){
    
  const pinRandom = Math.round(Math.random()*10000);
  return pinRandom;
  
}

function randomPinLength(){
    
    const setDigit = randomPin();
    const stringConvert = setDigit + '';
    if(stringConvert.length == 4){
        
        return setDigit;
    }
    else{
        
        randomPinLength();
    }
}

function displayRandomPin(){
    
    const show = randomPinLength();
    

    document.getElementById('input-random-pin').value = show;
}

// calculate part start

document.getElementById('calc-body').addEventListener('click', function(event){
    
    caculateValue(event);
    
})

function caculateValue(event){

    const calculatorInput = event.target.innerText;
    const previousValue = document.getElementById('calc-input');
    if(isNaN(calculatorInput)){
        console.log(calculatorInput);
        if(calculatorInput == "C"){
            previousValue.value = '';
        }
    }
    else{
        const newValue = previousValue.value;
        const currentInput = newValue + calculatorInput;
        previousValue.value = currentInput;
    }
    

    return previousValue;
}

document.getElementById('submit-button').addEventListener('click', function(){
    submitValue();
})
function submitValue(){
    
    const randomPinInput = document.getElementById('input-random-pin').value;
    const calcTypeValue =  document.getElementById('calc-input').value;
    if(calcTypeValue == ''){
        alert('PLEASE TYPE GENERATE CODE !!');
        
    }

    if(randomPinInput == calcTypeValue && calcTypeValue != ''){

        window.location.href = 'nextPage.html';
    }
    else{
        alert('PLEASE ENTER THE RIGHT PIN !!');
    }
    // console.log(randomPinInput);
    // console.log(calcTypeValue);




}