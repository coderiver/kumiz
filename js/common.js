$(document).ready(function() {

	function lotos () {
		var item = $('.js-lotos');

		item.hover(
			function() {
				$(this).nextAll('.js-lotos').addClass('is-hidden');
			}, function() {
				item.removeClass('is-hidden');
			}
		);
	}
	lotos();

	// ui slider nav for tabs

		function tab2() {

			var tab_link = $(".js-birth").find("span");
        	var tab_cont = $(".js-birth-cont");
        	
        	$(".js-tab3").addClass('is-active');

        	// init slider ui
			var slider = $( "#slider-vertical" ).slider({
	    		orientation: "vertical",
	    		range: "max",
	    		min: 1,
	    		max: 3,
	    		value: 3,
	    		animate: "fast",
	    		change: function( event, ui ) {
	    			var tabNumber = ui.value;
	    			
	    			tab_link.parent().removeClass('is-active');
	    			$('.js-birth').find('span[data-number = '+tabNumber+']').parent().addClass('is-active');
	    			tab_cont.removeClass('is-active');
	    			$('.js-tab'+tabNumber+'').addClass('is-active');

	    		}
	    	});
	       		
			// native tabs click event
        	tab_link.on("click", function() {
        	   	var tabIndex = $(this).data('number');
        	   	slider.slider( 'value', tabIndex);
        	   	
        	});
	  	}
	  	if ($('.js-birth').length) {
	  		tab2();
	  	};
	  	

	// target tree load animation
	function treeLoad(){
		var height = $(window).height(),
			tree = $('.js-target-tree').position().top;

		if (tree < (height/2)) {
			$('.js-target-tree').addClass('is-loaded');
		};	
	}
	if ($('.js-target-tree').length) {
		treeLoad();
	};
	

	// usefull
	$('.usefull__more').on('click', function(){
		$(this).parents('.usefull').find('.usefull__wrap').slideToggle();
		$(this).hide();
	});

	// mobile menu

	$('.container, .js-mob-close').on('click', function(){
		$('.out').removeClass('open-menu');
		$('.bg').removeClass('is-hidden');

	});
	$('.menu-button').on('click', function(event){
		$('.out').addClass('open-menu');
		$('.bg').addClass('is-hidden');
		event.stopPropagation();
	});

	//scrollTo
	function scrollTo(page){

		$('#viewport').animate({
			scrollTop: $(page).offset().top - 80
		}, 800);

	}

	$('.js-link').click(function (e) {

		e.preventDefault();
		var page = $(this).attr("href");
		scrollTo(page);

	});

	$('.js-top').click(function(e){

	  	e.preventDefault();
	  	$('#viewport').animate({
	  	 scrollTop: 0,
	  	}, 800);
	 });

	function moveAll(){
		var top = $('#viewport').scrollTop();

		if(top > 100){
			$('.logo').addClass('small');
			$('.js-bg').addClass('position');
		} else{
			$('.logo').removeClass('small');
			$('.js-bg').removeClass('position');
	  	}
	}
	moveAll();

	$('#viewport').scroll(function(){
		moveAll();
		if ($('.js-target-tree').length) {
			treeLoad();
		};
	});

	// slick slider

	$('.js-federations').slick({
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.js-doctors').slick({
		slidesToShow: 3,
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.js-farm-slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
  		adaptiveHeight: true,
  		responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false
					}
				}
			]
	});

	$('.js-pride-slider').each(function(){
		$(this).slick({
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});
	$('.js-pride-slider2').slick({
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.js-packing-slider').slick({
		slidesToShow: 1
	});

	$('.js-slider').slick({
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.js-slider2').slick({
		slidesToShow: 1
	});

	$('.js-target-slider').slick({
		slidesToShow: 1
	});

	$('.slick-product').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});

	$('.slick-product .slick-dots').append('<li aria-hidden="true"><button type="button" data-role="none">4</button></li>');

	$('.js-blog').slick({
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
				}
			}
		]
	});

	//slick slider inner
	var total = $('.gallery__item').length;

	$('.js-slick').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 1
	 });
	$('.gallery__total').text(total);

	$('.js-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.gallery__current').text($('.slick-active').index());
	});

	$('.gallery__prev').on('click', function(){
		$('.slick-prev').trigger('click');
		return false;
	 });

	$('.gallery__next').on('click', function(){
		$('.slick-next').trigger('click');
		return false;
	});

	//tabs
	$(".js-tab-btn").click(function () {

		$('.js-tab-btn').removeClass('is-active');
		$(this).addClass('is-active');

		var id = $(this).data("btn"),
		$item = $('.js-tab-block');

		var $currItem = $('.js-tab-block[data-block=' + id + ']');

		$('.js-tab-block[data-block=' + id + ']').addClass('is-active');
		$item.not($currItem).removeClass('is-active');

		return false;

	 });

	//plus/minus
	function number() {
		var number = $(".js-number");
		number.each(function(){
			var max_number = +($(this).attr("data-max-number"));
			var input = $(this).find("input");
			var plus = $(this).find(".js-plus-number");
			var minus = $(this).find(".js-minus-number");
			plus.on("click", function(){
				var val = +(input.val());
				if (val >= max_number) {
					return false
				}
				else {
					val += 1;
					input.val(val);
				};				
				input.trigger('change');
			});
			minus.on("click", function(){
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
				};
				input.trigger('change');
				return false;
			});
			input.on("change", function(){
				var val = +$(this).val();
				if (val > max_number) {
					val = max_number;
					$(this).val(val);
				}
				if (val == '') {
					val = 1;
					$(this).val(val);
				}
			});
		});
	}
	number();

	//validate
	var form_validate = $('.js-validate');

		if (form_validate.length) {

		form_validate.each(function () {

			var form_this = $(this);
			$.validate({
				form : form_this,
				validateOnBlur : false,
				borderColorOnError : false,
				scrollToTopOnError : false,

			onSuccess : function() {
				$('.js-form').addClass('is-success');
				$('.js-form-back').addClass('is-success');
		 		// ajaxSubmit(form_this);
				return false;
		   }
	   	});

	  	});

	 };

	$('.js-form-return').on('click', function(){

	 	$('.js-validate').trigger('reset');
	 	$('.js-form').removeClass('is-open is-success');
		$('.js-form-back').removeClass('is-success');

	 });

	// lotos flowers animation

	if ($('.js-usefull-wrap').length) {
		$('.js-usefull-wrap').mousemove(function(e) {;
			
			$('.js-usefull').each(function() {
				var speed = $(this).data('speed');
				speed = parseInt(speed);
				x = -e.pageX/speed;
				y = -e.pageY/speed;

				$(this).css({
					'transform': 'translate('+x+'px, '+y+'px)'
				});	
			});
		})
	};

	// room animation

    if ($('.js-room').length) {
    	$(".js-room").mousemove( function(e) {
    	    var l = $(window).width(),
    	    	w = $('.js-room').width(),
    	    	x = e.pageX;

    	    	var m = (l - w)/2;
    	    	var delta = (x - m);
    	    	var koef = (100 - (delta/w)*100);

    	    if(koef < 50){
    	    	$('.js-room-text-r').addClass('is-visible');
    	    	$('.js-room-text-l').removeClass('is-visible');
    	    }
    	    else{
    	    	$('.js-room-text-l').addClass('is-visible');
    	    	$('.js-room-text-r').removeClass('is-visible');
    	    };

    	    if(koef < 15){
    	    	$(".js-room-clean").css('width', '15%');
    	    	$(".js-room-line").css('left', '15%');
    	    	
    	    }
    	    else if(koef > 85){
    	    	$(".js-room-clean").css('width', '85%');
    	    	$(".js-room-line").css('left', '85%');
    	    }
    	    else {
    	    	$(".js-room-clean").css('width', koef+'%');
    	    	$(".js-room-line").css('left', koef+'%');
    	    }
    	});
    };

	// tabs

	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_item = $(this).find("li");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
        	tab_item.first().addClass("is-active");
        	$(this).parents(".js-tab-group").find(".js-tab1").show();

        	tab_link.on("click", function() {
        	   	var index = $(this).attr("href");
        	   	var activeTab = $(this).parents(".js-tab-group").find("."+index);
        	   	tab_item.removeClass("is-active");
        	   	$(this).parent().addClass("is-active");
        	   	tab_cont.hide().removeClass('is-active');
        	   	activeTab.show().find('.slider').slick('reinit');
        	   	setTimeout(function(){
        	   		activeTab.addClass('is-active');
        	   	}, 10);
        	   	return false;
        	});

        	if ($(this).parents('.js-tab-group').find('.js-prev').length) {
        		var prev = $(this).parents(".js-tab-group").find(".js-prev");
        		var next = $(this).parents(".js-tab-group").find(".js-next");

        		prev.on('click', function(){
        			var activeLink = $(this).parents('.js-tab-group').find('.js-tab').find("li.is-active"),
        				prevLink = activeLink.prev().find('a');
        			var	nextTab = prevLink.attr('href');

        			if (activeLink.prev().length) {
        				activeLink.removeClass("is-active").prev().addClass('is-active');
        				tab_cont.hide().removeClass('is-active');
        				$(this).parents(".js-tab-group").find('.'+nextTab).show();
        				setTimeout(function(){
        					$('.'+nextTab).addClass('is-active');
        				}, 10);
        			}
        		});
        		next.on('click', function(){
        			var activeLink = $(this).parents('.js-tab-group').find('.js-tab').find("li.is-active"),
        				nextLink = activeLink.next().find('a');
        			var	nextTab = nextLink.attr('href');
        			if (activeLink.next().length) {
        				activeLink.removeClass("is-active").next().addClass('is-active');
        				tab_cont.hide().removeClass('is-active');
        				$(this).parents(".js-tab-group").find('.'+nextTab).show();
        				setTimeout(function(){
        					$('.'+nextTab).addClass('is-active');
        				}, 10);
        			}
        		});
        	};
       });
  	}
  	tab();

	// human block

	function human(){
		// hint appearance
		$('.system').hover(function() {
			var name = $(this).data('name');
			$('.system').addClass('non-active');
			$(this).removeClass('non-active');
			$(this).find('.system__hint').addClass('is-visible');
			$('.' + name).addClass('is-visible');
		}, function() {
			var name = $(this).data('name');
			$('.system').removeClass('non-active');
			$(this).find('.system__hint').removeClass('is-visible');
			$('.' + name).removeClass('is-visible');
		});
	}
	human();

	function nav(){
		$('.section').each(function(){
		    var pos = $(this).position().top;
		    var id = $(this).attr('id');
		    if( $('#viewport').scrollTop() >= (pos - 100)){
		        $('.nav ul li a').removeClass('is-active');
		        $('[href = #'+id+']').addClass('is-active');
		    }
		});

	}
	nav();

	$('#viewport').scroll(function(){
		nav();
	});

	$(".nav a").on('click', function (){
	    var page = $(this).attr("href");
	    $('#viewport').animate({
	        scrollTop: $(page).position().top
	    }, 500);
	    return false;
	});

	// svg snap animations
	(function() {

		function SVGHamburger( el, options ) {
			this.el = el;
			this.init();
		}

		SVGHamburger.prototype.init = function() {
			this.shapeEl = this.el.querySelector( 'span.morph-shape' );

			var s = Snap( this.shapeEl.querySelector( 'svg' ) );
			this.pathEl1 = s.select( 'path:nth-of-type(1)' );
			this.pathEl2 = s.select( 'path:nth-of-type(2)' );
			this.paths = {
				reset : {
					path1 : this.pathEl1.attr( 'd' ),
					path2 : this.pathEl2.attr( 'd' )
				},
				open : this.shapeEl.getAttribute( 'data-morph-open' ).split( ';' ),
				close : this.shapeEl.getAttribute( 'data-morph-close' ).split( ';' )
			};

			this.isOpen = false;

			this.initEvents();
		};

		SVGHamburger.prototype.initEvents = function() {
			this.el.addEventListener( 'mouseover', this.toggleShow.bind(this) );
			this.el.addEventListener( 'mouseout', this.toggleHide.bind(this) );
		};

		SVGHamburger.prototype.toggleShow = function() {
			var self = this,
				paths = this.isOpen ? this.paths.close : this.paths.open;

				setTimeout( function() { classie.add( self.el, 'is-open' ); }, 200 );

			this.pathEl1.stop().animate( { 'path' : paths[0] }, 300, mina.easeout, function() {
				self.pathEl1.stop().animate( { 'path' : self.paths.reset.path1 }, 800, mina.elastic );
			} );
			this.pathEl2.stop().animate( { 'path' : paths[1] }, 300, mina.easeout, function() {
				self.pathEl2.stop().animate( { 'path' : self.paths.reset.path2 }, 800, mina.elastic );
			} );

			this.isOpen = !this.isOpen;
		};


		SVGHamburger.prototype.toggleHide = function() {
			var self = this,
				paths = this.isOpen ? this.paths.close : this.paths.open;

				setTimeout( function() { classie.remove( self.el, 'is-open' ); }, 200 );

			this.pathEl1.stop().animate( { 'path' : paths[0] }, 300, mina.easeout, function() {
				self.pathEl1.stop().animate( { 'path' : self.paths.reset.path1 }, 800, mina.elastic );
			} );
			this.pathEl2.stop().animate( { 'path' : paths[1] }, 300, mina.easeout, function() {
				self.pathEl2.stop().animate( { 'path' : self.paths.reset.path2 }, 800, mina.elastic );
			} );

			this.isOpen = !this.isOpen;
		};

		new SVGHamburger( document.getElementById( 'hamburger' ) );

	})();

	// buttons animations

	(function() {

		function extend( a, b ) {
			for( var key in b ) {
				if( b.hasOwnProperty( key ) ) {
					a[key] = b[key];
				}
			}
			return a;
		}

		function SVGButton( el, options ) {
			this.el = el;
			this.options = extend( {}, this.options );
			extend( this.options, options );
			this.init();
		}

		SVGButton.prototype.options = {
			speed : { reset : 800, active : 150 },
			easing : { reset : mina.elastic, active : mina.easein }
		};

		SVGButton.prototype.init = function() {
			this.shapeEl = this.el.querySelector( 'span.morph-shape' );

			var s = Snap( this.shapeEl.querySelector( 'svg' ) );
			this.pathEl = s.select( 'path' );
			this.paths = {
				reset : this.pathEl.attr( 'd' ),
				active : this.shapeEl.getAttribute( 'data-morph-active' )
			};

			this.initEvents();
		};

		SVGButton.prototype.initEvents = function() {
			this.el.addEventListener( 'mouseover', this.down.bind(this) );
			this.el.addEventListener( 'touchstart', this.down.bind(this) );

			this.el.addEventListener( 'touchend', this.up.bind(this) );

			this.el.addEventListener( 'mouseout', this.up.bind(this) );
		};

		SVGButton.prototype.down = function() {
			this.pathEl.stop().animate( { 'path' : this.paths.active }, this.options.speed.active, this.options.easing.active );
		};

		SVGButton.prototype.up = function() {
			this.pathEl.stop().animate( { 'path' : this.paths.reset }, this.options.speed.reset, this.options.easing.reset );
		};

		[].slice.call( document.querySelectorAll( 'button.button--effect-1' ) ).forEach( function( el ) {
			new SVGButton( el );
		} );

		[].slice.call( document.querySelectorAll( 'button.button--effect-2' ) ).forEach( function( el ) {
			new SVGButton( el, {
				speed : { reset : 650, active : 650 },
				easing : { reset : mina.elastic, active : mina.elastic }
			} );
		} );

	})();

	// popups

	(function() {

		$('.js-popup').on( 'click', function () {
			var somedialog = $(this).data('dialog'),

			somedialog = $('#' + somedialog);


			var morphEl = somedialog.find( '.morph-shape' ),
				morphElSvg = morphEl.find('svg');

			var s = Snap( morphElSvg[0] ),
			path = s.select( 'path' ),
			steps = {
				open : morphEl.attr( 'data-morph-open' ),
				close : morphEl.attr( 'data-morph-close' )
			},
			dlg = new DialogFx( somedialog[0], {
				onOpenDialog : function( instance ) {
					// animate path
					path.stop().animate( { 'path' : steps.open }, 400, mina.easeinout );
				},
				onCloseDialog : function( instance ) {
					// animate path
					path.stop().animate( { 'path' : steps.close }, 400, mina.easeinout );
				}
			} );

			dlg.toggle();
			$('.out').toggleClass('no-scroll');
			event.stopPropagation();
		});


	})();

	$(window).load(function(){
  		$('.header').addClass('is-visible');
	});
	//price 
	$('.js-price').each(function() {
		$('.js-price-input').on('change', function() {
			$(this).parents('.js-price').find('.js-price-text').text($(this).val()*$(this).parents('.js-price').find('.js-price-text').data('price'));
			$('.js-price-text').map(function() {
				$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
			})
		});
	});
	$(window).load(function() {
		$('.js-price-text').map(function() {
			$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		});
	});
});