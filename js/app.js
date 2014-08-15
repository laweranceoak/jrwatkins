// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


//Show and Hide Search Container
$("#icon-search").click(function(){
	$(".search").fadeToggle( "slow", "linear" );
});

//Add to cart CTA
var CTA_AddToCart = $(".cta-add-to-cart");
var AddedToCartDialog = $(".added-cart");


CTA_AddToCart.click(function(){
	$(this).toggleClass("added");

	if ($(this).hasClass("added")) {
		AddedToCartDialog.fadeIn( "slow", "linear" ).delay(1000).fadeOut("fast","linear");
	}
	else {
		AddedToCartDialog.hide();
	}
});






//Switching active for the language flags
$('.language li').click(function(e) {
    $('.language li.activeItem').removeClass('activeItem');
    var $this = $(this);
    if ($this.hasClass('activeItem')) {
        $this.addClass('activeItem');
    }
    e.preventDefault();
});

//Show and Hide Promo Container
    $(".close-promo").click(function () {
        $(".promo-area").fadeToggle("3000");
    });
















