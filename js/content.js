/**
 * Created by mark.bensley on 08/12/2015.
 */
// Content JS
// Contain JS for sizing guide, this is already uploaded on Staging.
// It's not minified.
// I'm renaming the file with an _ and removing it from the js folder because it give me too many errors on gulp
// If Sizing guide JS need an update, remove the _ and make the changes.



$(document).ready(function(){


  var sizeGuide = function() {
    var defaultNotChecked = $(document).find(".cont__toggle-btn-group input:not(:checked)").val();
    $(document).find(".size-table td, .size-table th").filter("." + defaultNotChecked).css("display", "none");
    $(document).on('click', ".cont__checkbox-group .cont__checkbox", function() {
      //Find the sizing charts block related to the toggle
      var selected = $(this).val();
      //check if the element is in the size guide page throught .size-guide__tables
      if ($(this).parents(".size-guide__tables").length == 1) {
        //find all the toggles inside the page and the input checked
        var allToggles = $(document).find('.size-guide__tables .cont__checkbox-group');
        var checkedElem = $(document).find("input:checked").val();
        //Check the same value for all the other toggles
        $(allToggles).each(function() {
          var input = $(this).find('input[value="' + checkedElem + '"]').prop('checked', true);
        });
      }

      var allColInch = $(document).find(".size-table td, .size-table th").filter(".cont__inch");
      var allColCm = $(document).find(".size-table td, .size-table th").filter(".cont__cm");

      if ($(this).val() === "cont__inch") {
        allColInch.fadeIn();
        allColCm.hide();
      } else {
        allColCm.fadeIn();
        allColInch.hide();
      }
    });
    var cont__elemTosync = $(document).find(".cont__sizing-charts .cont__tb-container");

    var cont__arrayElemTosync = [];
    var cont__allElements = "";
    //add a unique id to the elements that need to be synched and push it in the empty array
    $.each($(cont__elemTosync), function(ind) {
      $(this).attr('id', 'cont__tab-' + parseInt(ind + 1));
      cont__arrayElemTosync.push(this);
    });

    jQuery.each(cont__arrayElemTosync, function(i, val) {
      cont__arrayElemTosync.join(', ');
      cont__allElements = $(cont__arrayElemTosync);
    });

    var cont__sync = function(e) {
      var cont__currTable = $(this);
      var cont__otherTable = cont__allElements.not(cont__currTable).off('scroll');
      cont__allElements.not(cont__currTable).each(function(index) {
        $(this).scrollLeft(cont__currTable.scrollLeft());
      });
      setTimeout(function() {
        cont__otherTable.on('scroll', cont__sync);
      }, 10);
    };
    cont__allElements.on('scroll', cont__sync);

    //START Create accordion toggle for guide size

    $(document).find('.cont__accordion').on('click', function() {
      $(this).attr('aria-expanded', function(i, attr) {
        return attr == 'true' ? 'false' : 'true';
      });
      $(this).parent().find('.cont__accord-body').attr('aria-hidden', function(i, attr) {
        return attr == 'true' ? 'false' : 'true';
      });
      $(this).parent().find('.cont__accord-body').slideToggle();
    });
  };



  // START Sizing guide - Quick view
  //SHOW/HIDE COLUMNS
  //NEW TOGGlE
  $('.pdp-main__size-guide-link').click(function(){
    setTimeout(function(){
      sizeGuide();
    }, 300);
  });
  // END Sizing guide - quick view

  // START Sizing guide - sizing guide page
  var sizeGuidePagelinks = $("link[href*='/sizing-guides']");
  sizeGuidePagelinks.each(function(){
    if ($(this).length > 0) {
      setTimeout(function(){
        sizeGuide();
      }, 200);
      //console.log('size guide page');
      return false;
    }
  });

  // End sizing guide - sizing guide page

		// Add .hover class to columns/rows to highlight onHover
		$('table.size-table td').hover(
		function () {
				$('table.size-table td:nth-child(' + ($(this).index() + 1) + ')').addClass('hover');
		},

		function () {
			$('table.size-table td:nth-child(' + ($(this).index() + 1) + ')').removeClass('hover');
		});

	    //controls toggle arrows and hiding panels
     		var shortKonftoggle = false;
        var regKonftoggle = true;
        var longKonftoggle = false;

	  $(".sizingKonfShort").hide();
	  $(".sizingKonfLong").hide();
	  $(".sizingKonfRegular").show();
    $("p.konfectionRegular").toggle();


			$(".sizingToggler p.konfectionShort").click(function() {
				if(regKonftoggle){
					$("p.konfectionRegular").toggle();
					$(".sizingKonfRegular").hide();
          regKonftoggle = false;
			}

				if(longKonftoggle){
					$("p.konfectionLong").toggle();
					$(".sizingKonfLong").hide();
          longKonftoggle = false;
				}

        $("p.konfectionShort").toggle();
				$(".sizingKonfShort").toggle();
				shortKonftoggle = !shortKonftoggle;
			});


			$(".sizingToggler p.konfectionRegular").click(function() {
				if(shortKonftoggle){
					$("p.konfectionShort").toggle();
					$(".sizingKonfShort").hide();
					shortKonftoggle = false;
				}

				if(longKonftoggle){
					$("p.konfectionLong").toggle();
					$(".sizingKonfLong").hide();
          longKonftoggle = false;
				}

				$("p.konfectionRegular").toggle();
				$(".sizingKonfRegular").toggle();
				regKonftoggle = !regKonftoggle;

			});

			$(".sizingToggler p.konfectionLong").click(function() {
				if(shortKonftoggle){
					$("p.konfectionShort").toggle();
					$(".sizingKonfShort").hide();
                    shortKonftoggle = false;
				}

				if(regKonftoggle){
					$("p.konfectionRegular").toggle();
					$(".sizingKonfRegular").hide();
                    regKonftoggle = false;
				}

				$("p.konfectionLong").toggle();
				$(".sizingKonfLong").toggle();
				longKonftoggle = !longKonftoggle;
			});


/* ---------------------------------------------------- /
   END Sizing guides scripts for Lightbox formatting
/ ---------------------------------------------------- */



    $('.single-item').slick({
        dots: true,
        infinite: true,
        draggable: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: '.ct-slick-next',
        prevArrow: '.ct-slick-prev',
        pauseOnHover: true
    });

    //Full width slider
    $('.ct-product-slider-full-container').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: '<button type="button" class="ct-slick-next"Next</button>',
        prevArrow: '<button type="button" class="ct-slick-prev">Previous</button>'

    });

    //Add scrollinmg to iframe on help page
    //var addScrolling = function(){
    //    $('#rightNowFrame').attr('scrolling', 'yes');
    //};
    //
    //setTimeout(addScrolling, 500);


    var mainSizingImage = $('#mainimg2').attr('src');
    $('.size-guide__sizes-item').click(function(){
        var sizeType = $(this).attr('rel'),
            activeTab,
            activeTabClass,
            tabSetOne = 'tab2',
            tabSetTwo = 'tab4';
        if(sizeType == 'measure_yourself-cm'){
            activeTab = 'tab3';
            activeTabClass = '#li_' + activeTab;
            $('#li_' + tabSetTwo).removeClass('active');
            $('#' + tabSetTwo).css("display", "none");
            $('#mainimg2').attr('src', mainSizingImage);
            $('#' + activeTab).css("display", "block");
            $(activeTabClass).addClass('active');
        }
        else{
            activeTab = 'tab1';
            activeTabClass = '#li_' + activeTab;
            $('#li_' + tabSetOne).removeClass('active');
            $('#' + tabSetOne).css("display", "none");
            $('#mainimg').attr('src', mainSizingImage);
            $('#' + activeTab).css("display", "block");
            $(activeTabClass).addClass('active');
        }

    });


var findPageId = $('.ct-style-wrapper').attr('id');
    if (findPageId == 'aboutCareers'){
        //Career list
        $.getJSON("http://200ca38b8ddafb1f879229472a541d18.api.ctshirtscareers.co.uk/get/job/listing/-/-/-/-/JSON", { get_param: 'value' }, function(data) {
            $.each(data, function(index, element) {
                $(".careers--container").append('<div class="careers--block-container"><div class="careers--block"><h3>'+ data[index].title +', '+ data[index].role +'<br />'+ data[index].location +'</h3><form method="get" action="http://apply.ctshirtscareers.co.uk/'+ data[index].id +'"><button type="submit">Apply now</button></form> <p class="careers--show" id="job_desc'+data[index].id+'"><b>Job description</b> for '+ data[index].title +'</p></div><div class="careers--details"  id="job'+data[index].id+'"></div></div>');

                //getting desk for each job - OPEN
                $.getJSON('http://200ca38b8ddafb1f879229472a541d18.api.ctshirtscareers.co.uk/get/job/description/'+ data[index].id +'/JSON', { get_param: 'value' }, function(data2) {
                    $.each(data2, function(index2, element2) {
                        $("#job"+data[index].id).append(data2[index2].advertText);
                    });



                    $("#job_desc"+data[index].id).click(function(){
                        $("#job"+data[index].id).toggle();
							//var clickId = data[index].id;

                    });

                });
                //getting desk for each job - CLOSE

            });

        });
    }

/*
		var findJobId2 = $('.ct-style-wrappers').attr('id');

		if (findJobId == 'jobsAdvert'){

		function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}

		var clickID = getParameterByName('jobsRoles');

				$.getJSON("http://200ca38b8ddafb1f879229472a541d18.api.ctshirtscareers.co.uk/get/job/listing/-/-/-/-/JSON", { get_param: 'value' }, function(dataAd) {
    		    $.each(dataAd, function(index3, element3) {
							if (clickId == dataAd[index3].id){
            		$("#job--description").append('<div class="careers--block-container"><div class="careers--block"><h3>'+ clickId.title +', '+ clickId.role +'<br />'+ clickId.location +'</h3><div class="job--role">'+ clickId.advertText +'</div><form method="get" action="http://apply.ctshirtscareers.co.uk/'+ clickId.id +'"><button type="submit">Apply now</button></form></div></div>');
							}

            });

        });
    }  //close findJobId


*/

    $('.ct-btt').click(function(event){
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 2000);

    });

    var linkDown = $('.ct-terms--list').find('a');
    $(linkDown).click(function(event){
        event.preventDefault();
        var linkDownId = $(this).attr('href'),
            linkPagePosition = $(linkDownId).offset(),
            headerHeight = $('#header').height();
        linkPagePosition = linkPagePosition.top - headerHeight - 20;
        $("html, body").animate({ scrollTop: linkPagePosition}, 2000);

    });


    //Adds active state to navigation on about us and style hints and tips plus prev and next page navigation
    var editorialNavigation = function(){
        var linksToFind = $('.styletips__sidebar-link-item'),
            linksArray = [],
            aboutLinks =  linksToFind.find('a'),
            pageOn = window.location.href,
            addId = 0,
            shortendUrl,
            findIndex,
            nextPageLink,
            prevPageLink,
            nextPageUrl,
            prevPageUrl,
            nextPageArrow,
            prevPageArrow,
            cleanLinksArray = [];

        //Gather all links of the navigation
        $(aboutLinks).each(function() {
            linksArray.push({'url': $(this).attr('href'), 'urlId': 'urlId' + addId++, 'title':$(this).attr('title') });
        });

        //Add active colour background to active page
        for(var i = 0; i < linksArray.length; i++){
            if(pageOn.indexOf(linksArray[i].url) >= 0 ){
                shortendUrl = linksArray[i].url;
                $("a[href|='" +  linksArray[i].url + "']").css('background', '#eee');

            }
        }

        // Loop through the old array to find the links with a null title
        for (findIndex = 0; findIndex < linksArray.length; findIndex++){
          //Create a new array with a valid title
          if (linksArray[findIndex].title != 'null') {
            cleanLinksArray.push({'url': linksArray[findIndex].url, 'urlId': 'urlId' + addId++, 'title':linksArray[findIndex].title });
          }
        }

        // Loop through the new array to find current, next and previous page
        for (findIndex = 0; findIndex < cleanLinksArray.length; findIndex++) {
          if(cleanLinksArray[findIndex].url == shortendUrl){
              nextPageLink = findIndex + 1;
              prevPageLink = findIndex - 1;
              if(nextPageLink === cleanLinksArray.length){
                  nextPageUrl = 'undefined';
              }
              else
              {
                  nextPageUrl = cleanLinksArray[nextPageLink].url;
              }

              if(prevPageLink < 0){
                  prevPageUrl = 'undefined';

              }
              else
              {
                  prevPageUrl = cleanLinksArray[prevPageLink].url;
              }
          }
        }

        nextPageArrow = $('.ct-article-arrows--right');
        prevPageArrow = $('.ct-article-arrows--left');

        if (nextPageUrl === 'undefined'){
            nextPageArrow.css('display', 'none');
            prevPageArrow.attr('href', prevPageUrl);
        }
        else if (prevPageUrl === 'undefined') {
            prevPageArrow.css('display', 'none');
            nextPageArrow.attr('href', nextPageUrl);
        }
        else
        {
            prevPageArrow.attr('href', prevPageUrl);
            nextPageArrow.attr('href', nextPageUrl);
        }

    }();

    //Used to set the height of Range block title height.
    var setHeightRangeTitle = function(){
        var maxHeight = 0,
            rangeTitleHeight = $('.ct-range--title');
        rangeTitleHeight.each(function(){
            maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
        });
        rangeTitleHeight.css('height', maxHeight);
    }();





    //Resize code for Booking iframe
    ! function() {
        "use strict";

        function a(a, b, c) {
            "addEventListener" in window ? a.addEventListener(b, c, !1) : "attachEvent" in window && a.attachEvent("on" + b, c)
        }

        function b() {
            var a, b = ["moz", "webkit", "o", "ms"];
            for (a = 0; a < b.length && !w; a += 1) w = window[b[a] + "RequestAnimationFrame"];
            w || c(" RequestAnimationFrame not supported")
        }

        function c(a) {
            y.log && "object" == typeof console && console.log(s + "[Host page" + u + "]" + a)
        }

        function d(a) {
            function b() {
                function a() {
                    h(z), f(), y.resizedCallback(z)
                }
                i(a, z, "resetPage")
            }

            function d(a) {
                var b = a.id;
                c(" Removing iFrame: " + b), a.parentNode.removeChild(a), y.closedCallback(b), c(" --")
            }

            function e() {
                var a = x.substr(t).split(":");
                return {
                    iframe: document.getElementById(a[0]),
                    id: a[0],
                    height: a[1],
                    width: a[2],
                    type: a[3]
                }
            }

            function j(a) {
                var b = Number(y["max" + a]),
                    d = Number(y["min" + a]),
                    e = a.toLowerCase(),
                    f = Number(z[e]);
                if (d > b) throw new Error("Value for min" + a + " can not be greater than max" + a);
                c(" Checking " + e + " is in range " + d + "-" + b), d > f && (f = d, c(" Set " + e + " to min value")), f > b && (f = b, c(" Set " + e + " to max value")), z[e] = "" + f
            }

            function k() {
                var b = a.origin,
                    d = z.iframe.src.split("/").slice(0, 3).join("/");
                if (y.checkOrigin && (c(" Checking connection is from: " + d), "" + b != "null" && b !== d)) throw new Error("Unexpected message received from: " + b + " for " + z.iframe.id + ". Message was: " + a.data + ". This error can be disabled by adding the checkOrigin: false option.");
                return !0
            }

            function l() {
                return s === ("" + x).substr(0, t)
            }

            function m() {
                var a = z.type in {
                        "true": 1,
                        "false": 1
                    };
                return a && c(" Ignoring init message from meta parent page"), a
            }

            function n() {
                var a = x.substr(x.indexOf(":") + r + 6);
                c(" MessageCallback passed: {iframe: " + z.iframe.id + ", message: " + a + "}"), y.messageCallback({
                    iframe: z.iframe,
                    message: a
                }), c(" --")
            }

            function o() {
                if (null === z.iframe) throw new Error("iFrame (" + z.id + ") does not exist on " + u);
                return !0
            }

            function q() {
                c(" Reposition requested from iFrame"), v = {
                    x: z.width,
                    y: z.height
                }, f()
            }

            function w() {
                switch (z.type) {
                    case "close":
                        d(z.iframe), y.resizedCallback(z);
                        break;
                    case "message":
                        n();
                        break;
                    case "scrollTo":
                        q();
                        break;
                    case "reset":
                        g(z);
                        break;
                    case "init":
                        b(), y.initCallback(z.iframe);
                        break;
                    default:
                        b()
                }
            }
            var x = a.data,
                z = {};
            l() && (c(" Received: " + x), z = e(), j("Height"), j("Width"), !m() && o() && k() && (w(), p = !1))
        }

        function e() {
            null === v && (v = {
                x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
                y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
            }, c(" Get position: " + v.x + "," + v.y))
        }

        function f() {
            null !== v && (window.scrollTo(v.x, v.y), c(" Set position: " + v.x + "," + v.y), v = null)
        }

        function g(a) {
            function b() {
                h(a), j("reset", "reset", a.iframe)
            }
            c(" Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")), e(), i(b, a, "init")
        }

        function h(a) {
            function b(b) {
                a.iframe.style[b] = a[b] + "px", c(" IFrame (" + a.iframe.id + ") " + b + " set to " + a[b] + "px")
            }
            y.sizeHeight && b("height"), y.sizeWidth && b("width")
        }

        function i(a, b, d) {
            d !== b.type && w ? (c(" Requesting animation frame"), w(a)) : a()
        }

        function j(a, b, d) {
            c("[" + a + "] Sending msg to iframe (" + b + ")"), d.contentWindow.postMessage(s + b, "*")
        }

        function k() {
            function b() {
                function a(a) {
                    1 / 0 !== y[a] && 0 !== y[a] && (k.style[a] = y[a] + "px", c(" Set " + a + " = " + y[a] + "px"))
                }
                a("maxHeight"), a("minHeight"), a("maxWidth"), a("minWidth")
            }

            function d(a) {
                return "" === a && (k.id = a = "iFrameResizer" + o++, c(" Added missing iframe ID: " + a + " (" + k.src + ")")), a
            }

            function e() {
                //c(" IFrame scrolling " + (y.scrolling ? "enabled" : "disabled") + " for " + l), k.style.overflow = !1 === y.scrolling ? "hidden" : "auto", k.scrolling = !1 === y.scrolling ? "no" : "yes"
            }

            function f() {
                ("number" == typeof y.bodyMargin || "0" === y.bodyMargin) && (y.bodyMarginV1 = y.bodyMargin, y.bodyMargin = "" + y.bodyMargin + "px")
            }

            function h() {
                return l + ":" + y.bodyMarginV1 + ":" + y.sizeWidth + ":" + y.log + ":" + y.interval + ":" + y.enablePublicMethods + ":" + y.autoResize + ":" + y.bodyMargin + ":" + y.heightCalculationMethod + ":" + y.bodyBackground + ":" + y.bodyPadding + ":" + y.tolerance
            }

            function i(b) {
                a(k, "load", function() {
                    var a = p;
                    j("iFrame.onload", b, k), !a && y.heightCalculationMethod in x && g({
                        iframe: k,
                        height: 0,
                        width: 0,
                        type: "init"
                    })
                }), j("init", b, k)
            }
            var k = this,
                l = d(k.id);
            e(), b(), f(), i(h())
        }

        function l(a) {
            if ("object" != typeof a) throw new TypeError("Options is not an object.")
        }

        function m() {
            function a(a) {
                if ("IFRAME" !== a.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + a.tagName + ">.");
                k.call(a)
            }

            function b(a) {
                a = a || {}, l(a);
                for (var b in z) z.hasOwnProperty(b) && (y[b] = a.hasOwnProperty(b) ? a[b] : z[b])
            }
            return function(c, d) {
                b(c), Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a)
            }
        }

        function n(a) {
            a.fn.iFrameResize = function(b) {
                return b = b || {}, l(b), y = a.extend({}, z, b), this.filter("iframe").each(k).end()
            }
        }
        var o = 0,
            p = !0,
            q = "message",
            r = q.length,
            s = "[iFrameSizer]",
            t = s.length,
            u = "",
            v = null,
            w = window.requestAnimationFrame,
            x = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            },
            y = {},
            z = {
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !0,
                enablePublicMethods: !1,
                heightCalculationMethod: "offset",
                interval: 32,
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                tolerance: 0,
                closedCallback: function() {},
                initCallback: function() {},
                messageCallback: function() {},
                resizedCallback: function() {}
            };
        b(), a(window, "message", d), "jQuery" in window && n(jQuery), "function" == typeof define && define.amd ? define(function() {
            return m()
        }) : window.iFrameResize = m()
    }();
    $('iframe').iFrameResize({});

   var toggleFunction = function() {
       $('.toggle--controler').click(function (event) {
           event.preventDefault();
           var toggleId = $(this).attr('href');
           $(toggleId).toggle();
       })
   }();

    var springPageId = $('.ct-article--spring-collection').attr('id');
    if(springPageId == 'GoFullWidth'){

    }


    //DEEP BANNER Template

    var deepBannerCarousel = function(arrowPos) {
      var options_slick = {
        dots: true,
        accessibility: true,
        speed: 500,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        swipe: true,
        fade: true,
        cssEase: 'linear'
      };

			//console.log("arrowPos", arrowPos);

			if (typeof arrowPos != 'undefined' && arrowPos !== '' ) {
				options_slick.appendArrows = arrowPos;
			} else {
				$('.cont__copy-container .slick-arrow').remove();
			}

			//console.log(options_slick);

			$('.cont__deep-banner .cont__carousel.slick-initialized').slick("unslick");
      $('.cont__deep-banner .cont__carousel').not('.slick-initialized').slick(options_slick);

      //Activate PREV and NEXT arrows
      $('.cont__deep-banner .cont__copy-container .slick-prev').on('click', function(){
        // Get the current slide
        var currentSlide = $('.cont__deep-banner .cont__carousel').slick('slickCurrentSlide');
        $('.cont__deep-banner .cont__carousel').slick("slickPrev");
      });
      $('.cont__deep-banner .cont__copy-container .slick-next').on('click', function(){
        // Get the current slide
        var currentSlide = $('.cont__deep-banner .cont__carousel').slick('slickCurrentSlide');
        $('.cont__deep-banner .cont__carousel').slick("slickNext");
      });
    };

		$(window).on('resize', function() {
      //console.log('resize');
      if ($(window).width() < 736) {
      	if (!$('.cont__deep-banner .cont__copy-container .slick-arrow').length) {
					deepBannerCarousel('.cont__copy-container');
				}
      } else {
				deepBannerCarousel();
			}
    });

    if ($(window).width() < 736) {
      if (!$('.cont__deep-banner .cont__copy-container .slick-arrow').length) {
        deepBannerCarousel('.cont__copy-container');
      }
    } else {
      deepBannerCarousel();
    }

    //END DEEP BANNER Template


});


function tab(tab) {
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'none';
    document.getElementById('li_tab1').setAttribute("class", "");
    document.getElementById('li_tab2').setAttribute("class", "");
    document.getElementById(tab).style.display = 'block';
    document.getElementById('li_'+tab).setAttribute("class", "active");

    document.getElementById('tab3').style.display = 'none';
    document.getElementById('tab4').style.display = 'none';
    document.getElementById('li_tab3').setAttribute("class", "");
    document.getElementById('li_tab4').setAttribute("class", "");
    document.getElementById(tab).style.display = 'block';
    document.getElementById('li_'+tab).setAttribute("class", "active");
}
function myHandler(source){
    document.getElementById('mainimg').src=source;
    document.getElementById('mainimg2').src=source;
}
