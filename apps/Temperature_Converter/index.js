// TEMPERATURE CONVERTER PROGRAM

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = (Number(textBox.value) * 9/5) + 32;
        result.textContent = `${textBox.value}°C is ${temp.toFixed(1)}°F`;
    }
    else if(toCelsius.checked){
        temp = (textBox.value - 32) * 5/9;
        result.textContent = `${textBox.value}°F is ${temp.toFixed(1)}°C`;
    }
    else{
        result.textContent = 'Please select a conversion type';
    }
}