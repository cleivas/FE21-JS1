//URLen som vi ska använda för att hämta data
const url = `https://dog.ceo/api/breed/pomeranian/images/random/10`;

//För att visa hur Promise-objektet ser ut
// const dogPromise = fetch(url);
// console.log(dogPromise);

fetch(url).then(
    //När promiset från fetch är fulfilled tar vi emot datan i en callbackfunktion och väljer att hämta JSON-datan och göra om det till JS-objekt. 
    //json()-metoden returnerar ett nytt promise
    function(dogResponse){
        console.log(dogResponse);
        return dogResponse.json();
    }
).then(
    //När promiset från json()-metoden är fulfilled. Alltså när JSON-datan har konverterats till JS-objekt hanterar vi JS-objekten i en ny callback-funktion
    //Dessa bojekt innehåller nu infon om hundarna
    function(dogData){
        console.log(dogData.message);
        //Vi skickar img url:erna, en i taget, till funktionen createImg
        for(let i=0; i<dogData.message.length; i++){
            createImg(dogData.message[i]);
        }
    }
);

//skapar ett imgElement och sätter src-attributet till imgUrl
function createImg(imgUrl){
    const img = document.createElement('img');
    img.src = imgUrl;
    img.style.width = '50vw';
    document.body.appendChild(img);
}