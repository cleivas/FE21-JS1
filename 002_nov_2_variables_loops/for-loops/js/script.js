const outsideTheLoops = 'Den här variabeln kan användas överallt i koden';

//Loopen körs 20 gånger från 0 till 19
for(let i = 0; i<20; i++){
    const loop1 = 'Den här variabeln är deklarerad inuti en for-loop';
    console.log(loop1, i);
}

//Loopen körs 20 gånger från 20 till 1
for(let i = 20; i>0; i--){
    console.log(i);
    // Nedan rad fungerar ej
    // console.log(loop1);
    // Nedan rad fungerar
    // console.log(outsideTheLoops);
}

// Template literal i en for loop
// För att kunna använda en template literal måste texten skrivas med backtck 
for(let i=0; i<5; i++){
    const textAttLogga = `Det här är varv ${i+1} utav 5`;
    console.log(textAttLogga);
}

// Vill man ha citationstecken som del av en text behöver man också använda backtick
// console.log("Det här ett citat: "yolo" ");
console.log(`Det här ett citat: "yolo" `);