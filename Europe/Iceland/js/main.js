$(document).ready(function(){


$("#map").on("click", "span", switchingPictures);
$(".pictureChange").on("click", switchingPictures);

function switchingPictures() {
	$("#placeHolder").css("display","none");
	$("#showImage").show();
	$(".show").css("display", "none");
		if($(this).hasClass("location1") ){
			$(".location1").show();
	}	if($(this).hasClass("location2") ){
			$(".location2").show();
	}	if($(this).hasClass("location3") ){
			$(".location3").show();
	}	if($(this).hasClass("location4") ){
			$(".location4").show();
	}	if($(this).hasClass("location5") ){
			$(".location5").show();
	}	if($(this).hasClass("location6") ){
			$(".location6").show();
	}  if($(this).hasClass("location7") ){
      $(".location7").show();
  } if($(this).hasClass("location8") ){
      $(".location8").show();
  } if($(this).hasClass("location9") ){
      $(".location9").show();
  } if($(this).hasClass("location10") ){
      $(".location10").show();	
  } if($(this).hasClass("location11") ){
      $(".location11").show();
  } if($(this).hasClass("location12") ){
      $(".location12").show();
  }
};

$("button").on("click", switchingbox);
function switchingbox (){
  $("photoLibrary").show();
  $(".picContainer").css("display", "none");
    if($(this).hasClass("number1") ){
      $(".box1").show();
  } if($(this).hasClass("number2") ){
      $(".box2").show().css("display", "flex");
  } if($(this).hasClass("number3") ){
      $(".box3").show().css("display", "flex");
  }
};

  //when user change windows size, reload the site.
$(window).resize(function(){location.reload();});

//changenumber of images depends on screensize
screenClass();
$(window).bind('resize',function(){
    screenClass();
});

 function screenClass() {
	if ($(window).width() > 600) {
    	$('#mySlider').slick({
    		  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });  	
}


  if ($(window).width() < 600) {
		$('#mySlider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
};
};

// $(window).resize(function() {
// 	if ($(window).width() < 560)  {
// 	 	$('#mySlider').slick({
//   		 infinite: true,
//   		slidesToShow: 3,
//   		slidesToScroll: 3
//   		});
// };
// });


 //  if ($(window).width() < 760)  {
	//  $('#mySlider').slick({
 //  		 infinite: true,
 //  		slidesToShow: 3,
 //  		slidesToScroll: 3
 //  		});
	// }



	
 

  });