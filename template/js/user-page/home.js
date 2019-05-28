var timer = 5000;


var PresentFilm =  $(".Present>.ListFilm_Item")
var NowFilm =  $(".Future>.ListFilm_Item")

function slider(element){
    var i = 0;
    var max = element.length;
 
    element.eq(i).addClass('active').css('left','0');
    element.eq(i+1).addClass('active').css('left','25%');
    element.eq(i+2).addClass('active').css('left','50%');
    element.eq(i+3).addClass('active').css('left','75%');
    
    setInterval(function(){
        element.removeClass('active');
        element.eq(i).css('transition-delay','0.25s');
        element.eq(i+1).css('transition-delay','0.5s');
        element.eq(i+2).css('transition-delay','0.75s');
        element.eq(i+3).css('transition-delay','1s');
        if(i < max-4){
            i = i + 4;
        }
        else{
            i=0;
        }
    
        element.eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
        element.eq(i+1).css('left','25%').addClass('active').css('transition-delay','1.5s');
        element.eq(i+2).css('left','50%').addClass('active').css('transition-delay','1.75s');
        element.eq(i+3).css('left','75%').addClass('active').css('transition-delay','2s');
    }, timer);
}
slider(PresentFilm);
slider(NowFilm);