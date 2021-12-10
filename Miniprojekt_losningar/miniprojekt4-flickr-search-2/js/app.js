//Lägg till din egna KEY
const KEY = "1268fb4f19e35fcb49e9d0332f9ee970";

//Knappen i formuläret som ska användas för att söka
const btn = document.getElementById("search");

btn.addEventListener("click", function(e){
  e.preventDefault(); //För att förhindra submit
  removeImages(); //Ta bort alla bilder och divar i .inner-carousel
  setMessage(''); //Ta bort eventuellt errormeddelande
  playAnimation(true); //Sätt igång animationen

  const input = getInputValues();  //Hämta alla input-värden från formuläret och spara i ett objekt
  getFlickrData(input); //fetch datan till fotona med hjälp av input-värdena
});

function getInputValues() {
  const inputValues = {};//Ett tomt objekt där alla input värden ska sparas
  inputValues.term = document.getElementById("search_term").value; //Textfältet
  inputValues.number = document.getElementById("search_number").value; //numberfältet

  const radio = document.querySelectorAll("input[type=radio]"); //Radioknapparna
  for (let i = 0; i < radio.length; i++) {
    //Om radio-elementet är checked sparar vi ner value vilket är samma som flickr size suffixen. Vi stoppar även for-loopen då
    if (radio[i].checked === true) {
      inputValues.size = radio[i].value;
      break;
    }
  }
  return inputValues; //Returnerar objektet med alla input-värden
} 

function getFlickrData( input ){
  const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${input.term}&format=json&nojsoncallback=1&per_page=${input.number}&page=1&safe_search=3&sort=relevance`;

  fetch(url)
    .then( function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json(); //Gör om json-datan till JS-objekt
      } else {
        throw "Something went wrong. :( Try again!";
      }
    })
    .then(function (data) {
      getImageUrls(data.photos.photo, input.size); //skapa image url:erna med 
    })
    .catch(function (error) {
      console.log(error);
      playAnimation(false); //Stoppa animationen
      setMessage("Something went wrong. No worries, try again!"); //Vad som än går fel visas detta meddelande för användare
    }); 
}

function getImageUrls(photoObjectArray, size) {
  
  const imgUrls = []; //Tom array som ska hålla alla url:er till bilderna
  for(photo of photoObjectArray){ 
    // Skapa en url för varje foto-objekt och lägg till till arrayen
    const imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    imgUrls.push(imgUrl);
  }
  displayImgs(imgUrls, size); //Lägg till alla bilder i carousel
}


function displayImgs(urls, size) {
  setMessage(''); //Ta bort meddelande
  playAnimation(false); //Stoppa animationen


  // Bestäm bredden på carousel-diven beroende på bildstorleken
  const carousel = document.querySelector('#carouselExampleControls');
  carousel.style.display = 'block';
  if (size === "m") {
    carousel.style.width = "240px";
  } else if (size === "z") {
    carousel.style.width = "640px";
  } else {
    carousel.style.width = "1024px";
  }

  const innerCarousel = document.querySelector('.carousel-inner'); //Diven där vi lägger till alla img
  for(let i=0; i<urls.length; i++){
    //img taggen med url:en för bilden från flickr
    const img = document.createElement("img"); 
    img.src = urls[i];
    img.classList.add('d-block', 'w-100');

    //Diven som behövs kring img taggen
    const carDiv = document.createElement("div");
    if(i===0){
      carDiv.classList.add('active'); //Är det första diven läggs klassen active till så att den visas i the carousel
    }
    carDiv.classList.add('carousel-item');
    carDiv.appendChild(img);

    innerCarousel.appendChild(carDiv);
  }
}

function removeImages() {
  const carousel = document.querySelector("#carouselExampleControls");
  carousel.style.display = 'none'; //Göm carousel

  const removeElements = document.querySelectorAll('.carousel-inner *'); //Alla element som ska tas bort
  for (el of removeElements) {
    el.remove();
  }
}

//Sätt meddelande till användaren
function setMessage(message) {
  const h2 = document.querySelector("#message");
  h2.innerText = message;

  if(message === ''){
    h2.style.display = "none";
  }
  else{
    h2.style.display = "block";
  }
}

//Animationen
const dotAnimation = anime({
  targets: '.animation div',
  translateX: '4rem',
  backgroundColor: `#0063dc`,
  delay: anime.stagger(200),
  direction: 'alternate',
  easing:  	'easeInOutQuad',
  duration: 500,
  loop: true,
  autoplay: false,
})

//Funktion för att sätta på eller pausa animationen
function playAnimation(play){
  const wrapper = document.querySelector('.animation');
  if(play){
    wrapper.style.display = 'block';
    dotAnimation.play();
  }
  else{
    wrapper.style.display = 'none';
    dotAnimation.pause();
  }
}