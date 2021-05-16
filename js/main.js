$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".navbar");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	 $(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.navbar_nav, .btn_menu').length) {
			if($(".navbar").hasClass('open')) {
				$(".navbar").removeClass('open');
			}
		}
	});
	 $(".carousel_slick").slick({
		infinite: true,
      	dots: true,
      	autoplay: true,
      	autoplaySpeed: 3000,
      	arrows: false,
      	initialSlide: 1
  	});
});