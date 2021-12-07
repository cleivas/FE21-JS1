//Objekten vi hämtar från DOMen ser olika ut
console.log( document.querySelector('h1'));
console.log( $('h1') );

//Ändra css med jQuery
$('h1').css('color', 'hotpink');
$('h1').css('border', '3px solid black');
//Loggar rgb-värdet av hotpink
console.log($('h1').css('color'));

//Event listener med jQuery
$('h1').click(function(){
    alert('h1-elementet har klickats!');
});

$('h1').on('mouseenter', function(){
    $('h1').css('backgroundColor', 'black');
});

$('h1').on('mouseleave', function(){
    $('h1').css('backgroundColor', 'transparent');
});

$('h2').hover(function(event){
    console.log( event.type );
})

//HTTP requets (ajax)
$.get('https://dog.ceo/api/breeds/image/random', function(data){
    console.log( data.message);

    let dog = $("<img></img>");
    dog.attr("src", data.message);
    $("body").append(dog);
});


