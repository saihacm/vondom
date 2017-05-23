// JavaScript Document

var menu_contraido;
var almuadillas;
(function ($) {


	$(function () {
	 $('.botonVideo').click(function(event){
		 event.preventDefault();
	 	$(this).cargarVideo();

	 });



	$(document).on('click','a.openAdress',function(event){
		event.preventDefault();
		$('.operativo').removeClass('operativo');

			$(this).parent().next().addClass("operativo");
		});

/* cabecera, efecto parallax */
$(window).scroll(function() {
 alturaScroll()
})
$(window).resize(function(){
 alturaScroll()

})

/* ******************** */




function saveCookiesCookie(){

	var cookiename = "vondom_cookies";
	$.cookie(cookiename, 1, { expires : 100, path    : '/' });

}

$(document).on('click','.cookies_no',function(){

				$('#cookie_box').fadeOut('slow');

				return false;

			});

$(document).on('click','.cookies_ok',function(){

	saveCookiesCookie();

	$('#cookie_box').fadeOut('slow');

	return false;

});




	$(document).on('click','.texto-slider .play_video',function(){

		var src = $(this).parent().parent().find('iframe').attr('src');
		var newsrc = src.replace("&autoplay=0","")+"&autoplay=1";

		var ref = $(this).attr('ref');

		if(ref){
			$(this).parent().parent().find('iframe').attr('src',ref).fadeIn();
		}else{
			$(this).parent().parent().find('iframe').attr('src',newsrc).fadeIn();
		}


		return false;

	});



	$(document).on('click','.play_video',function(){

		var src = $(this).parent().find('iframe').attr('src');
		var newsrc = src.replace("&autoplay=0","")+"&autoplay=1";

		var ref = $(this).attr('ref');

		if(ref){
			$(this).parent().find('iframe').attr('src',ref).fadeIn();
		}else{
			$(this).parent().find('iframe').attr('src',newsrc).fadeIn();
		}


		return false;

	});


	$(document).on('click','.play_slide_video',function(){

		var src = $(this).parent().parent().find('iframe').attr('src');
		var newsrc = src.replace("&autoplay=0","")+"&autoplay=1";


		$(this).parent().addClass('playing').fadeOut();
		$(this).parent().parent().find('iframe').attr('src',newsrc).fadeIn();

		return false;

	});

	$(document).on('click','.close_cta',function(){

		$('.cta_lightbox').fadeOut();

		return false;

	});


       $(document).ready(function(){

       $('.fotosCollection a').click(function(){


         if($(this).hasClass('selected')){
           $(this).removeClass('selected');
         }else{
           $(this).addClass('selected');

         }

         var selected = "";

         $('.fotosCollection a.selected').each(function(){
	         var ref = $(this).attr('ref');

	         if(selected){

	         	selected = ref + "," + selected;

	         }else{
		         selected = ref;
	         }



         });


         $('#selected_fotos').val(selected);

         if(selected){
	         $('button#download_pictures').addClass('active');
         }else{
	         $('button#download_pictures').removeClass('active');
	       }

         return false;
       });


       $('#download_pictures').click(function(){

	       if(!$(this).hasClass('active')){ return false; }

       })




     });

	$(document).on('click','.toggle-lightbox',function(){

		var target = "#"+$(this).attr('ref');

		$(target).fadeIn();

		return false;

	});


	$(document).on('click','.toggle-search',function(){

		$(this).hide();

		$('#search_form').fadeIn();
		$('#search_form input').focus();

		return false;

	});



	$(document).on('click','.has_submenu',function(){

		$(this).parent().find('.submenu').animate({left:"0px"});

		return false;

	});


	$(document).on('click','.submenu .back',function(){

		$(this).parent().parent().animate({left:"100%"});

		return false;

	});


	$(document).on('click','.menu_icon',function(){

		 $('#mobile-menu').fadeIn();

		return false;

	});

	$(document).on('click','#close_mobile-menu',function(){

		 $('#mobile-menu').fadeOut();

		return false;

	});

	$(document).on('click','.manager_tabs a',function(){

		 var target = $(this).attr('href');
		 $('.manager_tabs a.current').removeClass('current');
		 $(this).addClass('current');

		 $('.manager_list').removeClass('current');
		 $(target).addClass('current').fadeIn();

		return false;

	});


	$('#slider-home').css({'opacity':1});
   	$(".multiselect").multiselect();

    $(window).load(function(){
		$("#slider-home").animate({'opacity':1},1000,"swing" );
		alturaScroll();
	});


     $(".tab a").click(function (event){
	     if($(this).hasClass('descarga')){
	     	return true;
	     }
	     if(!$(this).hasClass('descarga')){

        event.preventDefault();

        almuadillas=$(this).attr('href').substring(0,1);


				if(almuadillas=="#"){
         	$(this).menuTab();
        }

        }
     })


     $('.owl-carousel-video').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })


    if( $("#slider-home .item").length > 1){

    	var autoplay = true;

    	if($("#slider-home").hasClass('has_video')){
	    	autoplay = false;
    	}

	    $("#slider-home").owlCarousel({
		    nav : true,
		    autoplay:autoplay,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    loop:true,
		    items:1,
        video:true,
		    singleItem:true,
		    navSpeed:1000,
		    autoplaySpeed: 1000,
				navText : ["<\ ", " >"]
			 });
	     $("#slider-home").css('opacity','1');

    }else{
	     $("#slider-home").css('display','block');
    }


    $("#mostrar-todo").on('click',function(event){
        event.preventDefault();


				$(".sliderCollection").addClass('content');
				$("#slider-collection").hide();
				$("#list-collection").fadeIn();
       /* $.ajax({
			url: "collection-Ajax.php",
			success: function(data) {
				$('.carga_Ajax').html(data);
			}


    })*/ })



  var collectioncarousel = $("#slider-collection").owlCarousel({ items : 5, lazyLoad : true, nav : false });


// Go to the next item
$('#col-slide-next').click(function() {
    collectioncarousel.trigger('next.owl.carousel');
    return false;
})
// Go to the previous item
$('#col-slide-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    collectioncarousel.trigger('prev.owl.carousel');
    return false;
})

  $("#fotos-collection").owlCarousel({ items : 1, lazyLoad : true, nav : true, navText : ["<\ prev", "next >"], autoplay:true, autoplayTimeout:4000,autoplayHoverPause:true, autoplaySpeed: 1000 });

     $("#slider-workdesigners,#slider-designers, #slider-news").owlCarousel({ items : 4, lazyLoad : true, nav : false });
     $("#slider-fichaProducto").owlCarousel({
				items : 1,
				lazyLoad : true,
				navigation : true,
                 navigationText : ["<\ ", " >"],
                 responsive: true,
                singleItem:true,
		    autoplay:true,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    autoplaySpeed: 1000,

});


     $("#slider-fichaProductoNav").owlCarousel({
				items : 1,
				lazyLoad : true,
				nav : true,
        navText : ["<\ ", " >"],
        responsive: true,
        singleItem:true,
        loop: true,
		    autoplay:true,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    autoplaySpeed: 1000,

});


	  $("#slider-contact").owlCarousel({ items : 3, lazyLoad : true, nav : false,  merge: true, margin: 10 });
	  $("#slider-showrooms").owlCarousel({ items : 3, lazyLoad : true, nav : false,  merge: true, margin: 10 });
	  $("#slider-videos-destacados").owlCarousel({
		  items : 3,
		  lazyLoad : true,
		  merge: true,
		  margin: 10,
			nav : true,
      navText : ["<\ ", " >"]
      });

	heightScreen(".portada");
	$(window).on('resize',function(){
		 altura=$(".portada #slider-home img").height();
		 heightScreen(".portada");
	})
	$('#scrolldown').click(function(event){
		event.preventDefault();
		scrollToAnchor($(this).attr('data-direction'));
	});
	$('.btn_scrolldown').click(function(event){
		event.preventDefault();
		scrollToContent();
	});





	$('.products-filter li a').click(function(event){
		event.preventDefault();
		var target = $(this).attr('rel');

		$('.products-filter li a').removeClass('current');
		$(this).addClass('current');

		$('.products-list .item').addClass('filtered');
		$('.products-list .item.'+target).removeClass('filtered');

		return false;

	});



	$('.press-filters li a').click(function(event){
		event.preventDefault();
		var target = $(this).attr('rel');

		$('.press-filters li a').removeClass('current');
		$(this).addClass('current');

		$('.press-items .press-item').addClass('filtered');
		$('.press-items .press-item.'+target).removeClass('filtered');

		return false;

	});


	$('.video-filter li a').click(function(event){
		event.preventDefault();
		var target = $(this).attr('rel');

		$('.video-filter li a').removeClass('current');
		$(this).addClass('current');

		$('.video-list .box-tv').addClass('filtered');
		$('.video-list .box-tv.'+target).removeClass('filtered');

		return false;

	});




	setTimeout(function() {
        	 queMenu();
    },1000);


	$(window).scroll(function(){
        queMenu();
	});
    $('nav.primary a[href="#"]').click(function(event){
		event.preventDefault();
	})


      $(".creadores img").mismaAltura('.span_6_of_12.texto');
	  $(".ficha-producto .col:first-child").mismaAltura('.background-grey');

	 $(window).resize(function(){
        $(".ficha-producto .col:first-child").mismaAltura('.background-grey');
		      $(".creadores img").mismaAltura('.span_6_of_12.texto');

     })
		$(function (activar_pestanya) {
				var tabContainerssup = $('div.contenedor > div');
				$('div.tab a').click(function () {


	     if($(this).hasClass('descarga')){
	     	return true;
	     }

					if($(this).attr("class")!="fancybox active"){
						if($(this).attr('href').substring(0,1)=="#")
						{

							tabContainerssup.hide(400).filter(this.hash).show(400);
						}
					return false;
				}
				}).filter(':first').click();
		});


     $("a[href='#open_menu']").click(function(event){
        event.preventDefault();
         tit=$(this).parents();
         menu= $(this).parents().next('ul');
         if (menu.hasClass('open')){
             menu.removeClass('open');
              tit.removeClass('open');
        }else{
             menu.addClass('open');
             tit.addClass('open');
        }


     })


}); /* end ready*/


queMenu= function(){

	 $('nav.primary').mouseover(function(event){

		 if (menu_contraido) {
			 $("nav.primary").removeClass("menuFixed");
			 $("nav.primary").addClass("menuBurger");
		 }
     	})
	 $('nav.primary').mouseout(function(event){
		 if (menu_contraido) {
			 $("nav.primary").addClass("menuFixed");
			 $("nav.primary").removeClass("menuBurger");
		 }
     })
	window_y = $(window).scrollTop();

				scroll_critical = parseInt($("header").height());
        scroll_critical-=100;

		if (window_y > scroll_critical) {
						menu_contraido = true;
            if ($("nav.primary").hasClass('menuBurger')){
								$("nav.primary").addClass("menuBurger");
            }else{
                $("nav.primary").addClass("menuFixed");
            }

		} else {
			menu_contraido = false;
			 $("nav.primary").removeClass("menuFixed").removeClass("menuBurger");

        }

    if(window_y > 150){

	    	if(!$('.texto-slider').hasClass('noHide')){
		    	$('.texto-slider').fadeOut();
	    	}

    }else{

				$('.texto-slider').fadeIn();
    }


}// que menu END


heightScreen = function(a){
	$(a+' #slider-home img').removeAttr('style');
	anchoItem=$(window).width();
	altoItem=$(window).height();
	anchoFoto=$(a+' #slider-home .item img').width();
	altoFoto=$(a+' #slider-home .item img').height();
	anchoImg=(altoItem*anchoFoto/altoFoto)-anchoItem;
	if ($(window).height()>$(window).width() && $(window).width() > 767){
		$(a+' #slider-home img').css({'height':$(window).height()+'px','margin-left':-(anchoImg*0.5	)+'px'});

	}else{
		$(a+' #slider-home img').css({'width':$(window).width()+'px','margin-left':'0px'});
	}

	$(a).removeAttr('style');
			altura=$(a+' #slider-home').height();
			if (altura>$(window).height()){
				$(a).css({'height':$(window).height()+'px'});
				$(a+' #slider-home').addClass("centrarVertical");
			}else{
				$(a+' #slider-home').removeClass("centrarVertical");
			}
	}
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
	point=aTag.offset().top+30;
    $('html,body').animate({scrollTop: point+"px"}, '1000' );

}

function scrollToContent(){
    var aTag = $("section.content");
	point=aTag.offset().top-100;
    $('html,body').animate({scrollTop: point+"px"}, '1000' );

}


/* ficha producto*/
$.fn.mismaAltura = function(final){
        altura= $(this).height();
        altura-=13;
        $(final).css({'min-height':altura+'px'});
}
/* menue ficha-producto*/
$.fn.menuTab = function (){
    numDivs=$(this).parent();
    $(numDivs).children('a').removeClass( "active" );
    $(this).addClass("active");
}

function alturaScroll(){
	altoFoto=$('#slider-home img').height();
	$('section.content:first-child').css({"margin-top":0})
	var altura = $(window).scrollTop();
	$('#slider-home').css({height:altoFoto-altura});
}
$.fn.cargarVideo = function(){
	direccion=$(this).attr('data-video');
	$('#videoCargado').attr("src","https://www.youtube.com/embed/"+direccion+"?rel=0");
}

 })(jQuery)






$(document).ready(function(){


	heightScreen(".portada");

});



 $(window).bind('scroll', function() {

    var scrollTop = $(window).scrollTop();


			if (scrollTop > 300){
				$('#back_to_top_actions').fadeIn();
			}else{
				$('#back_to_top_actions').fadeOut();

			}




  });


  /* Back to top */


  /* home menu behaviour */

	$('#back_to_top_actions a').click(function(){
	 var target = "body";

	 $('html, body').animate({
    scrollTop: $(target).offset().top + 1
		}, 1000);

		return false;

	});




  /* atmospheres-filter */

	$('.atmospheres-filter a').click(function(){

		var target = $(this).attr('ref');

		$('.filter-select').removeClass('filter-select');
		$(this).addClass('filter-select');

		$('.atmosphere-item').each(function(){

			if($(this).hasClass(target)){
				$(this).fadeIn();
			}else{
				$(this).fadeOut();
			}

		});

		return false;

	});



$(window).load(function(){


		var src = $('#video_portada').attr('src');
		if(src){
		var newsrc = src.replace("&autoplay=0","")+"&autoplay=1";
		$('#video_portada').attr('src', newsrc);
		}

});


 $(document).ready(function() {
	var s = $("#aux-menu");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos && pos && windowpos >= pos.top) {
			$('body').addClass("sub-menu-fixed");
		} else {
			$('body').removeClass("sub-menu-fixed");
		}
	});

	$( ".item .hovercolor" ).hover(
  function() {

	  	var hovercolor = $(this).attr('ref');
			$( this ).css( "color", hovercolor );
			$( this ).css( "border-color", hovercolor );

  }, function() {
    $( this ).css( "color", "#FFF" );
    $( this ).css( "border-color", "#FFF" );
  }
);


});










