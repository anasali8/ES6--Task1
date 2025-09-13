function swap(){

    var xValue= document.getElementById("xValue").value;
    var yValue= document.getElementById("yValue").value;
    var arr = [xValue, yValue]; 
    [arr[0], arr[1]] = [arr[1], arr[0]];
    document.getElementById("result").innerHTML = `After Swap: x = ${arr[0]} , y = ${arr[1]}`;    
}


function MaxMin(...numbers){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    
    numbers = [num1, num2, num3, num4, num5, num6];
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    document.getElementById("maxmin").innerHTML = `Max = ${max} , Min = ${min}`;    
}


var arr = ['apple' ,'strawberry' , 'banana', 'orange'];
document.getElementById("arrValues").innerHTML =  arr;

function checkEvery(){
    var isEvery = arr.every(value => value instanceof String);
    document.getElementById("everyResult").innerHTML = `Is every element a string? : ${isEvery}`;
}

function checkSome(){
    var isSome = arr.some(value => value.startsWith('a'));
    document.getElementById("someResult").innerHTML = `Is some element starts with 'a'? : ${isSome}`;
}

function filterFtuits(){
    var filter = arr.filter(value => value.startsWith('b') || value.startsWith('s'));
    document.getElementById("filterResult").innerHTML = `Fruits starts with 'b' or 's': ${filter}`;
}

function mapFruits(){
    var map = arr.map(value => ' I Like ' + value);
    document.getElementById("mapResult").innerHTML = `: ${map}`;
}

function forEachFruits(){
    var text = "";
    arr.forEach(value => text += value + " ");
    document.getElementById("forEachResult").innerHTML = `Fruits: ${text}`;
}