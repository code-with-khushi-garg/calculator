let btn = document.querySelector("#showNumber")
console.log(btn);
function clearDisplay(){
    document.getElementById('showNumber').value = ' ';
}
function appendToDisplay(value){
    document.getElementById('showNumber').value += value; 
}

function deleteNumber(){
    var currentValue= document.getElementById('showNumber').value; 
    document.getElementById('showNumber').value = currentValue.slice(0,-1); 
}

function calculate(){
    try{
    if(btn.value == "undefined" || btn.value == "")
    {   console.log(btn.value)
        document.getElementById('showNumber').innerHTML = ""
    }
    else{

        document.getElementById('showNumber').value =  eval(document.getElementById('showNumber').value);
    }
    }
    catch(error){
        document.getElementById('showNumber').value=' Error';
        }
}

