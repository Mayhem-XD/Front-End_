$(document).ready(function()
{
    // Define the images array
    var images = 
    [
    "../../00.numbers_img/1.svg",
    "../../00.numbers_img/2.svg",
    "../../00.numbers_img/3.svg",
    "../../00.numbers_img/4.svg",
    "../../00.numbers_img/5.svg"
    ];

    // Loop through the images array and create carousel items
    $.each(images, function(index, value)
    {
        var item = $('<div class="carousel-item"><img src="' + value + '" alt="img' + (index+1) + '" class="d-block" style="width:100%"></div>');
        if(index == 0)
        {
            item.addClass('active');
        }
        $('#myCarousel .carousel-inner').append(item);
        // Activate the carousel
        $('#myCarousel').carousel();
    });

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



