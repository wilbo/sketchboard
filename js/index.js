var newGrid = function(option) { 
  
  $('#container-grid').html(""); // empty container
  
  var input = prompt("Choose a number below 100.");
  
  var blockSize = $('#container-grid').width() / input - 2;
 
  if (input < 100) {
    
    for (var j = 1; j <= input; j++) {
      
      for (var i = 1; i <= input; i++) {  
        $('#container-grid').append('<div class="block"></div>');
      }  
      $('#container-grid').append("<div class='row'></div>");
      
    }
    
    $('.block').css('width', blockSize);
    $('.block').css('height', blockSize);
    
    switch(option) {
      case 1:
        $('.block').mouseenter(function(){
          $(this).css('background-color', '#333');
        });
        break;
      case 2:
        $('.block').mouseenter(function(){
          var hue = 'rgb(' + (Math.floor((256-150)*Math.random()) + 150) + ',' + (Math.floor((256-150)*Math.random()) + 150) + ',' + (Math.floor((256-150)*Math.random()) + 150) + ')';
    	   $(this).css("background-color", hue);
        }); 
        break;
      case 3:
        $('.block').css('background-color', 'black');
        $('.block').css('opacity', '0');
        $('.block').mouseenter(function(){
          $(this).css('opacity', '+=0.1');
        });
        $('.block').click(function(){
          $(this).css('opacity', '+=0.1');
        });
        break;
    }
    
  } else {
   alert("Fill in a smaller number please!");
  }
}