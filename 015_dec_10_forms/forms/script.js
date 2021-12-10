const email = document.getElementById("email");
 
// Custom meddelande om det som skrivs in i email-inputen inte följer email-formatet
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("HÄR KAN DU SKRIVA VAD F*N DU VILL");
  } else {
    email.setCustomValidity(""); //Ta bort meddelandet
  }
});

const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', function(event){
  console.log(event);
  event.preventDefault(); //Gör så att default submit inte händer
})