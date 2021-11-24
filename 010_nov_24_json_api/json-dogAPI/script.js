//Här är datan vi hämtade genom våran förfrågan till dogAPI 
const jsonString = `{"message":["https:\/\/images.dog.ceo\/breeds\/terrier-yorkshire\/n02094433_2609.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_8971.jpg","https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_3515.jpg","https:\/\/images.dog.ceo\/breeds\/tervuren\/maverick.JPG","https:\/\/images.dog.ceo\/breeds\/terrier-wheaten\/n02098105_474.jpg"],"status":"success"}`;

//Vi gör om stringen i JSON format till ett JS objekt
const dogUrlObj = JSON.parse(jsonString);

//Vi sparar ner arrayen i egenskapen message till urlArr som nu innehåller 5 URL:er
const urlArr = dogUrlObj.message;
console.log(urlArr);

//För varje element i arrayen skapar vi ett img-element och sätter src attributet till innehållet i urlArr
for(let i =0; i<urlArr.length; i++){
    const img = document.createElement('img');
    img.src = urlArr[i];

    document.body.appendChild(img);
}