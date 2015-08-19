/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
	    var logo = $('img.mijnlogo');
	    var sy = scrollY();


	    if (sy >= changeHeaderOn && !classie.has(header, 'navbar-shrink')) {
	        logo.hide();

		    classie.add(header, 'navbar-shrink');
		    logo.attr('src', 'img/logo2webw.png');
		    logo.fadeIn(1000);

        }
	    else if (sy < changeHeaderOn)  {
	        classie.remove(header, 'navbar-shrink');
		    logo.attr('src', 'img/logo2web.png');
		}

		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();