// let result=document.getElementById("result");
// function getResult(value){
    // if(value=== "="){
// result.value = eval(result.value)
    // }else{
        // result.value += value;
    // }
// }
// function clearResult (){
    // result.value ="";
// }
let result = document.getElementById("result");

function getResult(value) {
    result.value += value;
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "";
}

function clearLastEntry() {
    result.value = result.value.slice(0, -1);
}