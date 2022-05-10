function odliczanie()
{
       var dzisiaj = new Date();

   var godzina = dzisiaj.getHours();
   if(godzina<10) godzina="0"+godzina;

   var minuta = dzisiaj.getMinutes();
   if(minuta<10) minuta="0"+minuta;
   
   var sekunda = dzisiaj.getSeconds();
   if(sekunda<10) sekunda="0"+sekunda;
   

   document.getElementById("zegar").innerHTML =
    godzina+":"+minuta+":"+sekunda;

    setTimeout("odliczanie()",1000);
}




function dancing(event, pixel){
    $(event.target).animate({top: pixel + 'px'}, function(){
    dancing(event, -pixel);
});
}
$(document).ready(function(){
var speed=120;//speed ot the text
$('#dance a').hover(function(event){
    $(this).stop().animate({top: '-5px'}, speed, function(){
    dancing(event, 5);
});
}, function(){
//mouse out
$(this).stop().animate({top: '0'}, speed);
});

});