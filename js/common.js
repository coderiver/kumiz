head.ready(function() {

	
	// human block

	function human(){
		// hint appearance 
		$('.system').hover(function() {
			var name = $(this).data('name');
			$('.system').addClass('non-active');
			$(this).removeClass('non-active');
			$(this).find('.system__hint').slideDown('fast');
			$('.' + name).addClass('is-visible');
		}, function() {
			var name = $(this).data('name');
			$('.system').removeClass('non-active');
			$(this).find('.system__hint').slideUp('fast');
			$('.' + name).removeClass('is-visible');
		});
	}
	human();

	// scroll down btn
	function scrollBtn(){
		if ($(window).scrollTop() > 1) {
			$('.js-scroll-down').addClass('is-scrolled');
		}
		else {
			$('.js-scroll-down').removeClass('is-scrolled');
		}
	}	
	function topperScroll(){
		var anchor;

		$('.js-scroll-down').on('click', function(){
			if (!$('.nav a.is-active').length) {
				anchor = $('#orgamism');
			}
			else {
				anchor = $('.nav a.is-active').parent().next().find('a').attr('href');
			}

			$('html, body').animate({
				scrollTop: $(anchor).offset().top
			}, 500);

			return false;
		});
	};

	if ($('.js-scroll-down').length) {
		scrollBtn();
		topperScroll();
	};
	
	// window scroll events
	$(window).scroll(function(){
		if ($('.js-scroll-down').length) {
			scrollBtn();
		};
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
			
		$('.js-sysmem-info').on( 'click', function () {
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
		});
		

	})();
		

});