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
	}	
};



// slide pictures from slick slider
  // $('#mySlider').slick({
  // 	infinite: true,
 	// slidesToShow: 3,
  // 	slidesToScroll: 3


//If I have one pictures and would like to play auto use below
	// autoplay: true
//for 3 pictures sliding 
  	//  infinite: true,
  	// slidesToShow: 3,
  	// slidesToScroll: 3

//for 4 picturesdots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
  
//   ]
// 


  // centerMode: true,
  // centerPadding: '60px',
  // slidesToShow: 3,
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]

  // });

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