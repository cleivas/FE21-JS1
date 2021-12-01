 //Lägg till din egna KEY
const KEY = "1268fb4f19e35fcb49e9d0332f9ee970";

//Knappen i formuläret som ska användas för att söka
const btn = document.getElementById("search");
btn.addEventListener("click", function(){
  //Ta bort alla bilder som finns där nu och visa användaren ett meddelande
  removeImages();
  setMessage("Searching...");

  //Hämta alla input-värden, spara i ett objekt och använd värdena i URL:en 
  const input = getInputValues();
  // console.log(input);

  const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${input.term}&format=json&nojsoncallback=1&per_page=${input.number}&page=1`;

  //Hämta data till fotona med URL:en
  fetch(url)
    .then( function(response) {
      // console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response.json(); //Gör om json-datan till JS-objekt
      } else {
        throw "Something went wrong. :( Try again!";
      }
    })
    .then(function (data) {
      console.log(data);
      const arrayOfPhotos = data.photos.photo;
        //Ta bort meddelandet innan vi visar bilderna
      const h2 = document.querySelector("#message");
      h2.style.display = "none";

      //Vi anropar getImageUrl och displayImage en gång för varje foto
      //getImageUrl returnerar url:en till fotot som sedan skickas till display image
      for (let i = 0; i < input.number; i++) {
        const imgUrl = getImageUrl(arrayOfPhotos[i], input.size);
        displayImg(imgUrl, input.size);
      }
    })
    .catch(function (error) {
      console.log(error);
      setMessage("Something went wrong. :( Try again!");
    }); // End Fetch
}); //End Event listener

function getInputValues() {
  //Ett tomt objekt där alla input värden skapas
  const inputValues = {};
  inputValues.term = document.getElementById("search_term").value;
  inputValues.number = document.getElementById("search_number").value;

  const radio = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < radio.length; i++) {
    //OM radio-elementet är checked sparar vi ner value av det elementet vilket korresponderar till flickr size suffixen. Vi stoppar även for-loopen då
    if (radio[i].checked === true) {
      inputValues.size = radio[i].value;
      break;
    }
  }
  return inputValues; //Returnerar objektet med alla input-värden
} 

//Ta bort alla bilder
function removeImages() {
  const imgs = document.querySelectorAll(".flex-wrapper img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].remove();
  }
}

//här pusslar vi ihop bild-urlen
function getImageUrl(photoObject, size) {
  // console.log(photoObject);
  const imgUrl = `https://live.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}_${size}.jpg`;

  return imgUrl;
}

//Visa bilderna
function displayImg(url, size) {
  const img = document.createElement("img");
  img.src = url;

  //Bestäm bredden på flexcontainern beroende på bildstorleken
  const flexWrapper = document.querySelector(".flex-wrapper");
  if (size === "m") {
    flexWrapper.style.width = "52rem";
  } else if (size === "z") {
    flexWrapper.style.width = "88rem";
  } else {
    flexWrapper.style.width = "100%";
  }

  flexWrapper.appendChild(img);
}

//Lägg till ett meddelande till användaren
function setMessage(message) {
  const h2 = document.querySelector("#message");
  h2.style.display = "block";
  h2.innerText = message;
}
