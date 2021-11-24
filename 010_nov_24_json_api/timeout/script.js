function first(){
    console.log(1);
}
function second(){
    console.log(2);
}
function third(){
    console.log(3);
}

//setTimeout(callbackFunction, milliseconds) där milliseconds är antal millisekunder vi ska vänta innan funktionen körs


setTimeout(third, 5000);
setTimeout(second, 3000);
setTimeout(first, 1000);