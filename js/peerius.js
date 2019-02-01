/*jslint plusplus:true,browser:true */
/*global jQuery:false,app:false */

peerius = {
	init : function() {
		var peeriusData = jQuery('#peeriusdata'), // container that holds the Peerius configuration
		config,

		// store multiple used strings in variables
		sPeerius = 'Peerius', sRecContainer = '.peerius-rec-container', sPeeriusUrl = 'peeriusurl';

		if (peeriusData.length) { // Only initialize if there's a peerius configuration
			config = peeriusData.data('peerius');
			var peeriusPage = config.peeriuspage;
			// define the PeeriusCallbacks global variable
			window.PeeriusCallbacks = {
				track : config.track,
				smartRecs : function(data) {
					var recs, pidList = [], peeriusIdList = [], i, recContainer = jQuery(sRecContainer), url;
					if (recContainer.length && data && data.length) {
						// retrieve Peerius URL from recommendation container or body element
						url = recContainer.data(sPeeriusUrl)
								|| jQuery('body').data(sPeeriusUrl);

						if (url) {
							recs = data[0].recs || [];

							// prepare productID and peeriusID lists
							for (i = 0; i < recs.length; i++) {
								pidList.push(recs[i].refCode);
								peeriusIdList.push(recs[i].id);
							}
							// send an AJAX request to the Demandware Server to render the recommendation products in the recommendation container
							$.ajax({
								url : url,
								data : {
									productids : JSON.stringify(pidList),
									peeriusids : JSON.stringify(peeriusIdList),
									peeriuspage :  JSON.stringify(config.peeriuspage)
								},
								success : function(res) {
									recContainer.html(res);
									if ($(window).width() < 768) {
										$('.js-peerius').slick({
											arrows: true,
											speed: 300,
											slidesToShow: 2,
											slidesToScroll: 2
										});
									}
									
									if (window.pageContext.ns !== 'cart') {
										var $tiles = $('.js-peerius .tile__product');
								        $tiles.syncHeight();
								    }
									
									//Add cookie if it doesnt exist, set expiration date/time to 10 minutes
								    if (document.cookie.indexOf('CTrecprod=') < 0) {
								        //Create an array
								        var recommendations_clicked = [];

								        // set a new cookie
								        var expiry = new Date();
								        expiry.setTime(expiry.getTime() + (7 * 60 * 60 * 1000)); // 7 hours
								        document.cookie = 'CTrecprod=' + JSON.stringify(recommendations_clicked) +'; expires=' + expiry.toGMTString() + '; path=/';
								        
								    }
									
									 //hook into product anchor and add listener for click event
								    $('.list__item--recommendations').on('click','a.thumb-link', function () {

								        //Get current cookie values (array)
								        var storedAry = JSON.parse(readCookie('CTrecprod'));

								        //Extract SKU from anchor and add to current array
								        var SKU = getSKU(this);
								        storedAry.push(SKU);

								        //change and save cookie
								        expiry = new Date();
								        expiry.setTime(expiry.getTime() + (7 * 60 * 60 * 1000)); // 7 hours
								        document.cookie = 'CTrecprod=' + JSON.stringify(storedAry) +'; expires=' + expiry.toGMTString() + '; path=/';

								    });

								    //functions
								    function readCookie(name) {
								            var nameEQ = name + '=';
								            var ca = document.cookie.split(';');
								            for (var i = 0; i < ca.length; i++) {
								                var c = ca[i];
								                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
								                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
								            }
								            return null;
								    }

								    function getSKU(obj){
								        var url = obj.pathname;
								        var urlparts = url.split('/');
								        var SKU = urlparts[urlparts.length-1]
								        SKU = SKU.replace('.html','');
								        return SKU;
								    }
								}
							});

						}
					}
				}

			};
			// console.debug('Peerius data: ', PeeriusCallbacks.track);

			// check if Peerius has already been loaded (global variable "Peerius" is defined).
			if (window[sPeerius]) {
				// re-excecute Peerius call -> PeeriusCallbacks will be triggered again
				window[sPeerius].dynamic();
			} else {
				// Peerius script isn't loaded -> load it, PeeriusCallbacks will be triggered
				jQuery.getScript(config.url, function() {
					// check if Peerius is loaded successfully
					var peeriusAPI = window[sPeerius];
					if (peeriusAPI) {

						// register click event handler for Peerius product recommendations and report the click
						jQuery(document).on(
								'click',
								sRecContainer + ' .peerius-rec-prod',
								function() {
									peeriusAPI.markClick(jQuery(this).data(
											'peeriusid'));
								});
					}
				});
			}
		}
	}
};
// Initialize peerius init method
$(document).ready(function() {
	peerius.init();
});