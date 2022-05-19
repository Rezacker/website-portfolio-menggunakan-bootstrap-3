// event pada saat link di klik
$('.scroll').on('click', function(e){

	// ambil href
	var tujuan = $(this).attr('href');
	// tangkap elemen
	var elemenTujuan = $(tujuan);

	// pindah scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 800, 'easeInOutExpo');

	e.preventDefault();

});


// Parallax
// Tentang
$(window).on('load', function() {
	$('.pLeft').addClass('pNongol')
	$('.pRight').addClass('pNongol')
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/2.4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// Portfolio
	if( wScroll > $('.portfolio').offset().top - 240 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('nongol');
			}, 320 * (i+1));
		});
	}



});