

$(document).ready(mainMenu);

var contador = 1;

function mainMenu(){
    $('div.menu_bar').click(function(){
        if(contador==1){
            $('nav').animate({
            	left: '0'
            });
            contador = 0;
        }else{
               $('nav').animate({
            	left: '-100%'
            });
            contador = 1;
        }

    });

}