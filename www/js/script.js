
var ua = $.browser;
if ( ua.msie && ua.fullVersion.slice(0,1) == "6" ) {
	$(document).ready(function(){
		$("body").addClass("ie6");
	});
}
if ( ua.msie && ua.fullVersion.slice(0,1) == "7" ) {
	$(document).ready(function(){
		$("body").addClass("ie7");
	});
}	
if ( ua.msie && ua.fullVersion.slice(0,1) == "8" ) {
	$(document).ready(function(){
		$("body").addClass("ie8");
	});
}

function resizeImages() {
	if ($('body').width() > 700) {
		var photoNumber = $('.alp-gal a').length;
		var imgMarginL = 0 - (248 - ($('body').width() / photoNumber)) / 2;
		var imgMarginR = imgMarginL;
		if (imgMarginL > 10) {imgMarginL = 10; imgMarginR = 10;}
		
		var docH = $('body').height();
		var contentH = 248 + $('.main').height();
		if (photoNumber > 0) {
			if ($('body').height() > 750 && $('body').height() - contentH > 200) {
				var imgMarginT = ($('body').height() - contentH - 200)/2;
				$('.alp-gal').css('margin-top', imgMarginT);
			} else {
				$('.alp-gal').css('margin-top', '20px');
				$('.alp-gal').css('margin-bottom', '10px');
			}
		}
	} else {
		var imgMarginL = '0';
		var imgMarginR = '2%';
		$('.alp-gal').css('margin-top', '0');
	}
	
	$('.fancy').css('margin-left', imgMarginL);
	$('.fancy').css('margin-right', imgMarginR);
	
}

function showTel() {
	var wrapSize = $('body').height() - $('.wrap').height() - $('.alp-gal').height() - 120;
	var wrapWidth = $('body').width();
	// if ((wrapSize < 0) || (wrapWidth < 600)) {
	// 	$('.top-phone').show();
	// } else {
	// 	$('.top-phone').hide();
	// }
	setTimeout(function () {
		resizeImages();
	},150);
}

// lightbox.option({
//   'resizeDuration': 300,
//   'wrapAround': false,
//   //'positionFromTop': 0,
//   'fitImagesInViewport': true,
//   'albumLabel': '',
//   'showImageNumberLabel':false,
//   'fileCloseImage' : 'img/close-green.png'
// })


function showGallery() {
	var zz = document.location.href;
	var folder = '';
	var files = 0;
	if (zz.search("bans") > 0) 			{files="26"; folder = "bans";}
	if (zz.search("lighting") > 0) 		{files="17"; folder = "lighting";}
	if (zz.search("drains") > 0) 		{files="9"; folder = "drains";}
	if (zz.search("alarm") > 0) 		{files="4"; folder = "alarm";}
	if (zz.search("towers") > 0) 		{files="19"; folder = "towers";}
	
	if (zz.search("restoration") > 0) 	{files="32"; folder = "restoration";}
	if (zz.search("sealing") > 0) 		{files="8"; folder = "sealing";}
	if (zz.search("facades") > 0) 		{files="2"; folder = "facades";}
	if (zz.search("metal") > 0) 		{files="12"; folder = "metal";}
	if (zz.search("cleaning") > 0) 		{files="29"; folder = "cleaning";}
	
	if (zz.search("conditioners") > 0) 	{files="8"; folder = "conditioners";}
	if (zz.search("airducts") > 0) 		{files="8"; folder = "airducts";}
	if (zz.search("ventilation") > 0) 	{files="5"; folder = "ventilation";}
	if (zz.search("ourstore") > 0) 		{files="15"; folder = "ourstore";}
	
	if (zz.search("maintenance") > 0) 	{files="25"; folder = "maintenance";}
	if (zz.search("hoisting") > 0) 		{files="1"; folder = "hoisting";}
	if (zz.search("snow") > 0) 			{files="8"; folder = "snow";}
	if (zz.search("doors") > 0) 		{files="0"; folder = "doors";}
	if (zz.search("trees") > 0) 		{files="8"; folder = "trees";}
	if (zz.search("wells") > 0) 		{files="3"; folder = "wells";}
	
	if (zz.search("fun") > 0) 			{files="20"; folder = "fun";}
	if (zz.search("views") > 0) 		{files="97"; folder = "views";}
	if (zz.search("sport") > 0) 		{files="51"; folder = "sport";}
	
	var abc = 0;
	var galleryHtml = '';
	while (abc < files) {
		var num = abc + 1;
		var imgTitleBlock = ".pt-" + folder + num;
		if( $(imgTitleBlock).length > 0 ) {
			var imgTitle = $(imgTitleBlock).html();
		} else {
			var imgTitle = '';
		}
		galleryHtml = galleryHtml 
			+ "<a href='http://alpinist.net.ua/img/"+ folder + "/" + folder + num + ".jpg' class='mPopUp fancy' data-toggle='lightbox'  title='" + imgTitle +"' id='img-" + folder + num + "' rel='gallery-" + folder 
			+ "'" + " >" 
			+ "<img src='http://alpinist.net.ua/img/" + folder + "/small/" + folder + num + ".jpg' id='img-" + folder + num + "' /></a>";
		abc++;
	} 
	
	$('.alp-gal').hide();
	$('.alp-gal').html(galleryHtml);
	
	$('.alp-gal').fadeIn();
	
	$('.mPopUp').magnificPopup({
		type:'image',
		image: {
		  markup: '<div class="mfp-figure">'+
		            '<div class="mfp-close"></div>'+
		            '<div class="mfp-img"></div>'+
		            '<div class="mfp-bottom-bar">'+
		              '<div class="mfp-title"></div>'+
		              '<div class="mfp-counter"></div>'+
		            '</div>'+
		          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

		  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

		  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
		  // Or the function that should return the title. For example:
		  // titleSrc: function(item) {
		  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		  // }

		  verticalFit: true, // Fits image in area vertically

		  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
		},
		gallery:{enabled:true}
	});
	
	//jQuery(".fancy").lightBox();


	
	// $('.alp-gal .fancy').fancybox({
	// 	'transitionIn'	: 'elastic',
	// 	'transitionOut'	: 'elastic',
	// 	'titlePosition' : 'over',
	// 	'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
	// 		return '<div id="fancybox-title-over"> ' + (title.length ? ' &nbsp; ' + title : '') + '</div>';
	// 	},
	// 	padding:0,
	// 	margin:0,
	// 	overlayOpacity:0.7,
	// 	overlayColor:'#666',
	// 	cyclic:true
	// });
}

	
$(window).resize(function () {
	showTel();
});

$(window).on("orientationchange",function(e){
	showTel();
})

$(document).ready(function(){
	showTel();
	function cleanVis() {$(".sm0").removeClass('vis');}
	function cleanMenu() {
		$('.main-menu a').removeClass('act');
		$('.sub-menu-item').removeClass('active');
	}
	
	var zz = document.location.href;
	if (zz.search("bans") > 0) 			{cleanVis();  $(".sm1").addClass('vis');  $("#sm1").addClass('show');}
	if (zz.search("lighting") > 0) 		{cleanVis();  $(".sm2").addClass('vis');  $("#sm2").addClass('show');}
	if (zz.search("drains") > 0) 		{cleanVis();  $(".sm3").addClass('vis');  $("#sm3").addClass('show');}
	if (zz.search("alarm") > 0) 		{cleanVis();  $(".sm4").addClass('vis');  $("#sm4").addClass('show');}
	if (zz.search("towers") > 0) 		{cleanVis();  $(".sm5").addClass('vis');  $("#sm5").addClass('show');}
	
	if (zz.search("restoration") > 0) 	{cleanVis();  $(".sm6").addClass('vis');  $("#sm6").addClass('show'); cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
	if (zz.search("sealing") > 0) 		{cleanVis();  $(".sm7").addClass('vis');  $("#sm7").addClass('show'); cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
	if (zz.search("facades") > 0) 		{cleanVis();  $(".sm8").addClass('vis');  $("#sm8").addClass('show'); cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
	if (zz.search("metal") > 0) 		{cleanVis();  $(".sm9").addClass('vis');  $("#sm9").addClass('show'); cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
	if (zz.search("cleaning") > 0) 		{cleanVis(); $(".sm10").addClass('vis'); $("#sm10").addClass('show'); cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
	
	if (zz.search("conditioners") > 0) 	{cleanVis();  $(".sm11").addClass('vis');  $("#sm11").addClass('show'); cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
	if (zz.search("airducts") > 0) 		{cleanVis(); $(".sm12").addClass('vis'); $("#sm12").addClass('show'); cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
	if (zz.search("ventilation") > 0) 	{cleanVis(); $(".sm13").addClass('vis'); $("#sm13").addClass('show'); cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
	if (zz.search("ourstore") > 0) 		{cleanVis(); $(".sm14").addClass('vis'); $("#sm14").addClass('show'); cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
	
	if (zz.search("maintenance") > 0) 	{cleanVis(); $(".sm15").addClass('vis'); $("#sm15").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	if (zz.search("hoisting") > 0) 		{cleanVis(); $(".sm16").addClass('vis'); $("#sm16").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	if (zz.search("snow") > 0) 			{cleanVis(); $(".sm17").addClass('vis'); $("#sm17").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	if (zz.search("doors") > 0) 		{cleanVis(); $(".sm18").addClass('vis'); $("#sm18").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	if (zz.search("trees") > 0) 		{cleanVis(); $(".sm19").addClass('vis'); $("#sm19").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	if (zz.search("wells") > 0) 		{cleanVis(); $(".sm25").addClass('vis'); $("#sm25").addClass('show'); cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
	
	if (zz.search("video") > 0) 		{cleanVis(); $(".sm20").addClass('vis'); $("#sm20").addClass('show'); cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
	if (zz.search("price") > 0) 		{cleanVis(); $(".sm21").addClass('vis'); $("#sm21").addClass('show'); cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
	if (zz.search("fun") > 0) 			{cleanVis(); $(".sm22").addClass('vis'); $("#sm22").addClass('show'); cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
	if (zz.search("views") > 0) 		{cleanVis(); $(".sm23").addClass('vis'); $("#sm23").addClass('show'); cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
	if (zz.search("sport") > 0) 		{cleanVis(); $(".sm24").addClass('vis'); $("#sm24").addClass('show'); cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
	
	$('.vis').fadeIn();
	// $('.exaple-photo-link').fancybox({
	// 	'transitionIn'	: 'elastic',
	// 	'transitionOut'	: 'elastic',
	// 	'titlePosition' : 'over',
	// 	'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
	// 		return '<div id="fancybox-title-over"> ' + (title.length ? ' &nbsp; ' + title : '') + '</div>';
	// 	},
	// 	padding:0,
	// 	margin:0,
	// 	overlayOpacity:0.7,
	// 	overlayColor:'#666',
	// 	cyclic:true
	// });
	
	$('.menu').hover(function(){}, function(){
		if ($('.main-menu').children().hasClass('cur')) { }
		else {
			var zz2 = document.location.href;
			if (zz2.search("bans") > 0) 		{cleanMenu(); $('#m1').addClass('act'); $('.mm1').addClass('active');}
			if (zz2.search("lighting") > 0) 	{cleanMenu(); $('#m1').addClass('act'); $('.mm1').addClass('active');}
			if (zz2.search("drains") > 0) 		{cleanMenu(); $('#m1').addClass('act'); $('.mm1').addClass('active');}
			if (zz2.search("alarm") > 0) 		{cleanMenu(); $('#m1').addClass('act'); $('.mm1').addClass('active');}
			if (zz2.search("towers") > 0) 		{cleanMenu(); $('#m1').addClass('act'); $('.mm1').addClass('active');}
			
			if (zz2.search("restoration") > 0) 	{cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
			if (zz2.search("sealing") > 0) 		{cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
			if (zz2.search("facades") > 0) 		{cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
			if (zz2.search("metal") > 0) 		{cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
			if (zz2.search("cleaning") > 0) 		{cleanMenu(); $('#m2').addClass('act'); $('.mm2').addClass('active');}
			
			if (zz2.search("conditioners") > 0) {cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
			if (zz2.search("airducts") > 0) 	{cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
			if (zz2.search("ventilation") > 0) 	{cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
			if (zz2.search("ourstore") > 0) 	{cleanMenu(); $('#m3').addClass('act'); $('.mm3').addClass('active');}
			
			if (zz2.search("maintenance") > 0) 	{cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
			if (zz2.search("hoisting") > 0) 	{cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
			if (zz2.search("snow") > 0) 		{cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
			if (zz2.search("doors") > 0) 		{cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
			if (zz2.search("trees") > 0) 		{cleanMenu(); $('#m4').addClass('act'); $('.mm4').addClass('active');}
			
			if (zz2.search("video") > 0) 		{cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
			if (zz2.search("price") > 0) 		{cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
			if (zz2.search("fun") > 0) 			{cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
			if (zz2.search("views") > 0) 		{cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
			if (zz2.search("sport") > 0) 		{cleanMenu(); $('#m5').addClass('act'); $('.mm5').addClass('active');}
		}
	})
	
	$('.bxslider').bxSlider({
		mode: 'vertical',
		useCSS: false,
		//easing: 'easeOutBounce',
		speed: 1800,
		touchEnabled: false,
		captions: true,
		autoDirection: 'back',
		auto: true,
		pause: 8000,
		adaptiveHeight: false,
		startSlide:5,
		onSlideNext:function(){
			$('.bx-caption').stop(true,true).hide();
			$('.bx-caption').fadeIn(2200);
		},
		onSlidePrev:function(){
			$('.bx-caption').stop(true,true).hide();
			$('.bx-caption').fadeIn(2200);
		},
		onSlideBefore:function(){
			$('.bx-caption').stop(true,true).hide();
			$('.bx-caption').fadeIn(2200);
		}
	});
	
	$('.main-menu a').on('click', function(){
		$('.main-menu a').removeClass('cur');
		$('.main-menu a').removeClass('act');
		$('.sub-menu .sub-menu-item').removeClass('active');
		var now = '.m' + $(this).attr('id');
		$(now).addClass('active');
		$(this).addClass('cur');
		$(this).addClass('act');
	});
	
	$('.main-menu a').hover(function(){
		if ($(this).parent().children().hasClass('cur')) {
			
		} else {
			$('.main-menu a').removeClass('act');
			$('.sub-menu .sub-menu-item').removeClass('active');
			var now = '.m' + $(this).attr('id');
			$(now).addClass('active');
			$(this).addClass('act');
		}
	}, function(){ });
	
	
	$('.sub-menu .sub-menu-item a').on('click', function(){
		$('.sub-menu .sub-menu-item a').removeClass('show');
		$('.vis').css('position','absolute').hide().removeClass('vis');
		$(this).addClass('show');
		var content = '.' + $(this).attr('id');
		$(content).stop(true,true).css('position','relative').fadeIn().addClass('vis');
		
		if ($('body').hasClass('gal-body')) {
			setTimeout(function () {
				showGallery();
				showTel();
			},50);
		}
		showTel();
	});

	$('.gal-link a').on('click', function(){
		$('body').addClass('gal-body');
		$('.slider').slideUp(600);
		$('.exaple-photo').hide();

		$('.gal-link').fadeOut();
		setTimeout(function () {
			showGallery();
			$('.gal-body .slider').hide();
		},400);
		setTimeout(function () {
			resizeImages();
		},410);
	});
	
	
	$('.imgBox').magnificPopup({
		type:'image',
		image: {
		  markup: '<div class="mfp-figure">'+
		            '<div class="mfp-close"></div>'+
		            '<div class="mfp-img"></div>'+
		            '<div class="mfp-bottom-bar">'+
		              '<div class="mfp-title"></div>'+
		              '<div class="mfp-counter"></div>'+
		            '</div>'+
		          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

		  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

		  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
		  // Or the function that should return the title. For example:
		  // titleSrc: function(item) {
		  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		  // }

		  verticalFit: true, // Fits image in area vertically

		  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
		},
		gallery:{enabled:true}
	});
	
	(function() {
	  /* Define a variável que dá swipe no lightbox */
	  var magnificPopup = $.magnificPopup.instance;


	  $(".gal-link").click(function(e) {
	  	console.log('gg');
	  	setTimeout(function() {
	  		
			  $("a.fancy").click(function(e) {

			    /* Espera carregar o lightbox */
			    setTimeout(function() {
			        /* Swipe para a esquerda - Próximo */
			        $(".mfp-container").swipe( {
			          swipeLeft:function(event, direction, distance, duration, fingerCount) {
			            //console.log("swipe right");
			            magnificPopup.next();
			          },

			        /* Swipe para a direita - Anterior */
			        swipeRight:function(event, direction, distance, duration, fingerCount) {
			          //console.log("swipe left");
			          magnificPopup.prev();
			        },
			        });
			    }, 500);
			  });
	  
	  	}, 500);
	  });

	}).call(this); 



});











