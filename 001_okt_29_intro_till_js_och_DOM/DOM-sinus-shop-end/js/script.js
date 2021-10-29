//Här händer ingenting
document.querySelector('h2'); 

//noden, eller h2 elementet loggas till konsolen
//qyerySelecotr väljer endast det första elementet som passar in på css-selectorn
console.log( document.querySelector('h2') );

// ändrar textfärgen till orange
document.querySelector('h2').style.color = 'orange';

// alla h2 som finns i DOM:en
console.log( document.querySelectorAll('h2') );

//ändra textfärg på andra h2-elementet
document.querySelectorAll('h2')[1].style.color = 'hotpink';

//ändra textfärg på tredje h2-elementet
document.querySelectorAll('h2')[2].style.color = 'red';

//Vi kollar så att vi verkligen har hämtat de första a-elementet
console.log( document.querySelector('a') );

//Vi sätter attributet href till en ny länk
document.querySelector('a').setAttribute('href', 'https://esportal.com/sv/home');

//dubbelkollar så att vi hämtar nav-elementet
//vi använder css-selektorn för id
console.log( document.querySelector('#header-navigation') );

//Vi tar bort det andra a-elementet som är en child av nav-elementet
document.querySelector('#header-navigation').removeChild( document.querySelectorAll('a')[1] );

//Vi hämtar nav-elementet och lägger till en child
// the child är ett nyskapat element. I detta fallet ett h1-element
//Det syns inte för det har inget innehåll
//Men öppnar du DOM-inspector i devtools så ser du h1-elementet i nav-elementet
document.querySelector('#header-navigation').appendChild( document.createElement('h1') );

//nedan är ett element
document.querySelector('img');

//Det som loggas med console.log är information för oss
console.log('bra fråga Michaela');
console.log(333);

//Nedan två rader hämtar båda samma element med två olika metoder
console.log( document.querySelector('#header-navigation') );
console.log( document.getElementById('header-navigation') );