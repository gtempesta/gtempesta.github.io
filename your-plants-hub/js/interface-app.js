$(document).ready(function() {

      var $levelometer = $('.levelometer');
      //var brick_h = $('.big-square').outerHeight()/51;
      var brick_h = 540/51;
      var indicatore = 100;

      for(var i=50; i >= 0; i--){

        var this_div = $('<div class="brick" data-meter-value='+ i*2 +'></div>');

        if(i%10 === 0){
          this_div.addClass("square");
          this_div.text(indicatore);
          $levelometer.append(this_div);
          indicatore = indicatore - 20;
        }else{
          $levelometer.append(this_div);
        }
        
      }

      $('.brick').css({
        height: brick_h
      });

      // scrollorama
      
      var scrollorama = $.scrollorama({ blocks:'.scrollblock' , enablePin:false});
      
      scrollorama
        .animate('#parallax2',{ delay: 0, duration: 800, property:'top', start:0, end:400 });
      

        // on/off
      $('.circle').click(function(){

        $(this).parent().toggleClass('on');

        if($(this).parent().hasClass('on')){
          $(this).parent().find('span').text('ON');
          $('.accesa-status').text('accesa');
        }else{
          $(this).parent().find('span').text('OFF');
          $('.accesa-status').text('spenta');
        }

      });
      
      
    });