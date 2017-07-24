$(document).ready(function() {  
    
	
		
// Toggle Menu Burger Button

var menu=0;

$(".menu-btn").click(function() {
	//alert('clicked');
	if (menu == 0) {
		$(".menu").css({'display':'inline-block'});
		$(this).css({'border':'2px solid #FFF', 'border-bottom':'none'});
		$(this).animate({'opacity':0}, 300, function() { $(this).css({'background-image':'url(img/close-btn-icon.png)', 'opacity':1}, 0) });
		menu=1;
	}
	else {
		$(".menu").css({'display':'none'});
		$(this).css({'border':'none'});
		$(this).animate({'opacity':0}, 300, function() { $(this).css({'background-image':'url(img/menu-btn-icon.png)', 'opacity':1}, 0) });
		menu=0;
	}
})
	
	

		
}); 



