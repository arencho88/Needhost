$(function(){

	$('.reviews__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-left.svg" alt=""></button>',
		responsive: [
			{
			  breakpoint: 800,
			  settings: {
				 arrows: false,
				 dots: true,
			  }
			}
		 ]
	});


	$('.partners__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1230,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 920,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2,
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1,
			  }
			}
		 ]
	});

	$('.styler').styler();

	$('.burger-menu').on('click', function(){
		$(this).toggleClass('burger-menu--active');
		$('.header__menu-list').slideToggle(200);
	});
});