

$(function () {

  //Sets the date in the header
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM, D'));

//This function changes the CSS class bases on the 0 - 23 hour clock in dayJS/
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

// This function eill save the user input after a click event
  $(buttonEl).click(function () {
    
    key = $(this).parent().attr('id')
    input = $(this).siblings('.description').val()
    
    localStorage.setItem(key, input);   

})

// This function will pull from local storage and render the saves user imput on the page.
  $('.description').each(function(){
        
    var block = $(this).parent().attr('id')
    var stored = localStorage.getItem(block);
  
    $(this).val(stored)
        
  });

  
});
