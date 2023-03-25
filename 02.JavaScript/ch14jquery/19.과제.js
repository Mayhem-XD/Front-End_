$(document).ready(function()
{
    var slideCount = $('.carousel-inner').children().length;
    for (var i = 0; i < slideCount; i++) 
    {
        if (i == 0) 
        {
            $('.carousel-indicators').append('<button type="button" data-bs-target="#imgSlide" data-bs-slide-to="' + i + '" class="active"></button>');
        } 
        else 
        {
            $('.carousel-indicators').append('<button type="button" data-bs-target="#imgSlide" data-bs-slide-to="' + i + '"></button>');
        }
    }
});



