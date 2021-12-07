$('#fade-out').click(function(){
    $('div').fadeOut();
})

$('#fade-in').click(function(){
    $('div').fadeIn();
})

$('#animate').click(function(){
    $('section').animate(
        {
            left: '200px',
            width: '200px'
        }, 2000
    )
    $('section').animate(
        {
            left: '0px',
            width: '100px'
        }
    )
})