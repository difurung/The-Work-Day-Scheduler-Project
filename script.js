

$(function () {

  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM, D'));



$(".example").addClass("myClass").removeClass("example");

$('.time-block').each(function(){

var presentHour = dayjs().hour();
var colorBlk = $(this).attr('id')


    if (colorBlk == presentHour) $(this).addClass("present").removeClass("future").removeClass("past")

    if (colorBlk > presentHour) $(this).addClass("future").removeClass("past").removeClass("present")

    if (colorBlk < presentHour) $ (this).addClass("past").removeClass("present").removeClass("future")
        

});


var buttonEl = $('.saveBtn');
var key;
var input;


  $(buttonEl).click(function () {
    
    key = $(this).parent().attr('id')
    input = $(this).siblings('.description').val()
    
    localStorage.setItem(key, input);   

})

    
  $('.description').each(function(){
    
    
    
    var block = $(this).parent().attr('id')
    
    var stored = localStorage.getItem(block);


    
    console.log(stored);
    
    $(this).val(stored)
    
    
    
    
  });

  
});
