function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime(date)
{
    return (`${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}`+
    `-${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`)
}

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
    setInterval(function(){
        const now = new Date();
        const week = '일월화수목금토'.split('')[now.getDay()];  
        const date_ = myDatetime(now).substring(2, 10);     
        const currentTIME = myDatetime(now).substring(11, 19);  
        const currentDate =`${date_} (${week})`;        
        $('#date').text(currentDate);       
        const imgChange = [0, 1, 3, 4, 6, 7];
        $('.numImg').each(function(index, _) 
        {
            $(this).attr('src', `../00.img/${currentTIME[imgChange[index]]}.svg`);
        });
                
    },1000);
});



