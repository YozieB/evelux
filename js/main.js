$(window).on('load', function() 
{
	
	var catalogH2 = false;
	
	// ======================================== catalogOwl
	catalogOwl = $(".catalog-slider");
	
	catalogOwl.owlCarousel(
	{
		items: 1,
		nav: true,
		dots: false,
		pagination: true,
		loop: false,
		merge: true,
		mouseDrag: false,
		autoWidth: true,
		startPosition: 0,
		smartSpeed: 750,
		onInitialized: function(event)
		{
			catalogOwl.find('.owl-nav').html('<button type="button" role="presentation" class="owl-prev"><svg width="18" height="28" viewBox="0 0 14 22" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.0002L1.93934 9.93958L0.87868 11.0002L1.93934 12.0609L3 11.0002ZM13.0604 18.9393L4.06066 9.93958L1.93934 12.0609L10.9391 21.0607L13.0604 18.9393ZM4.06066 12.0609L13.0604 3.06115L10.9391 0.939828L1.93934 9.93958L4.06066 12.0609Z"></path></svg></button><button type="button" role="presentation" class="owl-next"><svg width="18" height="28" viewBox="0 0 14 22" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M11 11.0002L12.0607 9.93958L13.1213 11.0002L12.0607 12.0609L11 11.0002ZM0.939584 18.9393L9.93934 9.93958L12.0607 12.0609L3.0609 21.0607L0.939584 18.9393ZM9.93934 12.0609L0.939584 3.06115L3.0609 0.939828L12.0607 9.93958L9.93934 12.0609Z"></path></svg></button>');

			$('.owl-prev').click(function()
			{
				
				if (catalogCurrent > 0) 
				{
					catalogCurrent -= 1;
					catalogOwl.trigger('prev.owl.carousel');
				}

			});
			$('.owl-next').click(function()
			{

				if (catalogCurrent < 2) 
				{
					catalogOwl.trigger('next.owl.carousel');
					catalogOwl.trigger('refresh.owl.carousel');
					catalogCurrent += 1;
				}

				
			});

			$('.catalog .catalog-item').mouseenter(function()
			{
				ggg($(this));
			});
			$('.catalog h2').mouseenter(function()
			{
				catalogH2 = true;
			});
			$('.catalog h2').mouseleave(function()
			{
				catalogH2 = false;
			});
	
		}
		
		/*
		responsive: 
		{
			480: { items: 1 }, // from zero to 480 screen width 4 items
			768: { items: 2 }, // from 480 screen widthto 768 6 items
			1024: {
				items: 5, // from 768 screen width to 1024 8 items
			},
		},
		*/
	});
	
	catalogOwl.on('refreshed.owl.carousel', function(event) 
	{

	});
	
	
	$('.catalog .catalog-item').width(Math.round($(window).width() / 5));
	
	var catalogCurrent = 0;

	function ggg (thisEl)
	{
		var addedWidth = Math.round(($(window).width() - 1440) / 4);
		
		//console.log($(window).width());
		
		$('.catalog .catalog-item').find('span').css('opacity', '0.2');
		$('.catalog .catalog-item-arrow').css('opacity', '0');
		thisEl.find('span').css('opacity', '1');
		thisEl.find('.catalog .catalog-item-arrow').css('opacity', '1');
		
		$('.catalog .catalog-item').find('.item-bg').stop();
		$('.catalog .catalog-item').find('.item-bg').animate({opacity: "0"}, 500, function() { });
		
		
		thisEl.find('.item-bg').stop();
		thisEl.find('.item-bg').animate({opacity: "1"}, 500, function() { });
		
		
		$('.catalog .catalog-item-inner').stop();
		$('.catalog .catalog-item-inner').animate({paddingLeft: "38px"}, 500, function() { });
		
		
		thisEl.find('.catalog .catalog-item-inner').stop();
		thisEl.find('.catalog .catalog-item-inner').animate({paddingLeft: "52px"}, 500, function() { });
		

		$('.catalog .catalog-item').stop();
		$('.catalog .catalog-item').animate({width: 229 + addedWidth + "px"}, 500, function() { });

		thisEl.stop();
		thisEl.animate({width: "524px"}, 500, function() { });
		


		
		//$('.catalog .catalog-item').width('230');
		//$(this).width('520');

		
		catalogOwl.trigger('refresh.owl.carousel');
		
		catalogOwl.trigger('to.owl.carousel', [catalogCurrent, 0]);
	}

	
	// ======================================== lgSlider
	var lgSlider = $(".lg2");
	
	if ($(window).width() <= 1000)
	{
		lgSlider.owlCarousel(
		{
			items: 1,
			nav: false,
			dots: false,
			pagination: true,
			merge: false,
			smartSpeed: 750,
			autoWidth: true
		});
	}
	
	
	
	// ======================================== newsSlider
	var newsSlider = $(".newsSlider");
	
	newsSlider.owlCarousel(
	{
		items: 1,
		nav: true,
		dots: false,
		pagination: true,
		merge: false,
		smartSpeed: 750,
		autoWidth: true,
		navText: 
		[
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.0002L1.93934 9.93958L0.87868 11.0002L1.93934 12.0609L3 11.0002ZM13.0604 18.9393L4.06066 9.93958L1.93934 12.0609L10.9391 21.0607L13.0604 18.9393ZM4.06066 12.0609L13.0604 3.06115L10.9391 0.939828L1.93934 9.93958L4.06066 12.0609Z" /></svg>',
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M11 11.0002L12.0607 9.93958L13.1213 11.0002L12.0607 12.0609L11 11.0002ZM0.939584 18.9393L9.93934 9.93958L12.0607 12.0609L3.0609 21.0607L0.939584 18.9393ZM9.93934 12.0609L0.939584 3.06115L3.0609 0.939828L12.0607 9.93958L9.93934 12.0609Z" /></svg>',
		],
		onInitialized: function(event)
		{
			newsSlider.find('.owl-prev').after('<span class="navslider-wrapper">1</span><span>&mdash;</span><span>' + (event.item.count - 2) + '</span>');
		},
		responsive: 
		{
			375: {
				margin: 11
			},
			1000: {
				margin: 28
			}
		}
	});
	
/* 	newsSlider.on('translated.owl.carousel', function(event) 
	{
		var slideNumber = false;
		newsSlider.find('.owl-item.active').each(function()
		{
			if (!slideNumber) slideNumber = $(this).find('.newsItem').data('number');
		});
		
		newsSlider.find('.navslider-wrapper').html(slideNumber);
	});
	
	
	$(window).resize(function()
	{
		if ($(window).width() > 1000)
		{
			$('.news').css('padding-left', (($(window).width() - 1336) / 2) + 'px');
		}
		else
		{
			$('.news').css('padding-left', '18px');
		}
		if ($(window).width() > 1678) $('.slider-desc-block').css('padding-left', (167 + ($(window).width() - 1678) / 2) + 'px');
		if ($(window).width() > 1678) $('.slider-wrapper .owl-nav').css('left', (163 + ($(window).width() - 1678) / 2) + 'px');
		
		$('.catalog .catalog-item').width(Math.round($(window).width() / 5));
		$('.item-bg').css('opacity', "0");
		$('.catalog .catalog-item-inner').css('padding-left', "38px");
		$('.catalog .catalog-item').find('span').css('opacity', '0.2');
		$('.catalog .catalog-item-arrow').css('opacity', '0');
		
		//$('main').height($(window).height() - 158);
		
		if ($(window).width() <= 1000)
		{
			lgSlider.owlCarousel(
			{
				items: 1,
				nav: false,
				dots: false,
				pagination: true,
				merge: false,
				smartSpeed: 750,
				autoWidth: true
			});
		}
		else
		{
			lgSlider.trigger('destroy.owl.carousel');
		}
		
		
		if ($(window).width() <= 1000) 
		{
			hide_MobMenuC();
		}
	});
	
	if ($(window).width() > 1000)
	{
		$('.news').css('padding-left', (($(window).width() - 1336) / 2) + 'px');
	}
	//$('main').height($(window).height() - 158);

	
	if ($(window).width() <= 1000) 
	{
		hide_MobMenuC();
	}
	
	if ($(window).width() > 1678) $('.slider-desc-block').css('padding-left', (167 + ($(window).width() - 1678) / 2) + 'px');
	

	
	let nwsli = $(".newsSlider .owl-item");
	nwsli[0].classList.add("hb");
	nwsli.hover((e) => 
	{
		nwsli.removeClass("hb");
		nwsli[0].classList.remove("hb");
		e.currentTarget.classList.add("hb");
	});
	
 */
	// ======================================== sliderWripper 
	var sliderWripper = $(".slider-wrapper");

	sliderWripper.owlCarousel(
	{
		loop:true,
		items: 1,
		nav: true,
		dots: false,
		pagination: true,
		smartSpeed: 750,
		navText: 
		[
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.0002L1.93934 9.93958L0.87868 11.0002L1.93934 12.0609L3 11.0002ZM13.0604 18.9393L4.06066 9.93958L1.93934 12.0609L10.9391 21.0607L13.0604 18.9393ZM4.06066 12.0609L13.0604 3.06115L10.9391 0.939828L1.93934 9.93958L4.06066 12.0609Z" /></svg>',
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M11 11.0002L12.0607 9.93958L13.1213 11.0002L12.0607 12.0609L11 11.0002ZM0.939584 18.9393L9.93934 9.93958L12.0607 12.0609L3.0609 21.0607L0.939584 18.9393ZM9.93934 12.0609L0.939584 3.06115L3.0609 0.939828L12.0607 9.93958L9.93934 12.0609Z" /></svg>',
		],
		onInitialized: function(event)
		{
			sliderWripper.find('.owl-prev').after('<span class="navslider-wrapper">1</span><span>&mdash;</span><span>' + event.item.count + '</span>');
			 
			if ($(window).width() > 1678) $('.slider-wrapper .owl-nav').css('left', (163 + ($(window).width() - 1678) / 2) + 'px');
			
			$('.bunner-img').height($('.over img').height() );
			$('.slider-wrapper .owl-nav').css('top', ($('.over img').height() - 58) + 'px');
		}
	});

	sliderWripper.on('translated.owl.carousel', function(event) 
	{
		var curNumber = sliderWripper.find('.owl-item.active .slider-item').data('number');
		sliderWripper.find('.navslider-wrapper').html(curNumber);
	});
	
	sliderWripper.on('resized.owl.carousel', function(event) 
	{
		$('.bunner-img').height($('.over img').height() );
		$('.slider-wrapper .owl-nav').css('top', ($('.over img').height() - 58) + 'px');
	});
	
	// ======================================== sliderWripper 
	var kitSlider = $(".kitSlider");
	
	kitSlider.owlCarousel(
	{
		items: 1,
		nav: true,
		dots: false,
		pagination: true,
		loop: true,
		smartSpeed: 750,
		navText: 
		[
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.0002L1.93934 9.93958L0.87868 11.0002L1.93934 12.0609L3 11.0002ZM13.0604 18.9393L4.06066 9.93958L1.93934 12.0609L10.9391 21.0607L13.0604 18.9393ZM4.06066 12.0609L13.0604 3.06115L10.9391 0.939828L1.93934 9.93958L4.06066 12.0609Z" /></svg>',
			'<svg width="14" height="22" viewBox="0 0 14 22" fill="#202121" xmlns="http://www.w3.org/2000/svg"><path d="M11 11.0002L12.0607 9.93958L13.1213 11.0002L12.0607 12.0609L11 11.0002ZM0.939584 18.9393L9.93934 9.93958L12.0607 12.0609L3.0609 21.0607L0.939584 18.9393ZM9.93934 12.0609L0.939584 3.06115L3.0609 0.939828L12.0607 9.93958L9.93934 12.0609Z" /></svg>',
		],
		onInitialized: function(event)
		{
			kitSlider.find('.owl-prev').after('<span class="navslider-wrapper">1</span><span>&mdash;</span><span>' + event.item.count + '</span>');
		},
		responsive: 
		{
			375: {
				margin: -25
			},
			1000: {
				margin: 0
			}
		}
	});

	kitSlider.on('translated.owl.carousel', function(event) 
	{
		var curNumber = kitSlider.find('.owl-item.active .slider-kits').data('number');
		kitSlider.find('.navslider-wrapper').html(curNumber);
	});

	// ======================================== animComplete  	
	/*
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
	  e.preventDefault();
	}

	function preventDefaultForScrollKeys(e) {
	  if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	  }
	}

	// modern Chrome requires { passive: false } when adding event
	var supportsPassive = false;
	try {
	  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
		get: function () { supportsPassive = true; } 
	  }));
	} catch(e) {}

	var wheelOpt = supportsPassive ? { passive: false } : false;
	var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

	
	// call this to Disable
	function disableScroll() 
	{
		console.log('D');
		window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
		window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);
	}

	// call this to Enable
	function enableScroll() 
	{
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
		window.removeEventListener('touchmove', preventDefault, wheelOpt);
		window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
	}
	
	disableScroll();
	*/
	
	var animComplete = true;
	var animHeaderComplete = false;
	var scrollTo = 0;
	
	setTimeout(function() {animHeaderComplete = true;}, 500);
	//console.log($(".pp-scrollable"));


	

/*
elem = window;
	if (elem.addEventListener) {
	  if ('onwheel' in document) {
		// IE9+, FF17+, Ch31+
		elem.addEventListener("wheel", onWheel);
	  } else if ('onmousewheel' in document) {
		// устаревший вариант события
		elem.addEventListener("mousewheel", onWheel);
	  } else {
		// Firefox < 17
		elem.addEventListener("MozMousePixelScroll", onWheel);
	  }
	} else { // IE8-
	  elem.attachEvent("onmousewheel", onWheel);
	}

	var aComplete = true;
	var sTo = 0;
	var sNum = 0;

	function onWheel(e) 
	{
		e = e || window.event;

		// wheelDelta не даёт возможность узнать количество пикселей
		var delta = e.deltaY || e.detail || e.wheelDelta;

		
		
		if (aComplete)
		{
			aComplete = false;
			
			if (delta > 0) 
			{
				sNum += 1;
				if (sNum > 2) sTo -= 50;
				else sTo -= $(window).height() - 155;
			}
			else 
			{
				sNum -= 1;
				if (sNum > 2) sTo += 50;
				else sTo += $(window).height() - 155;
			}
			
			if (sNum < 0) sNum = 0;
			if (sTo > 0) sTo = 0;
			
			
			
			console.log(sNum);

			if (sNum > 2) 
			{
				$('#pagepiling').animate({ marginTop: sTo }, 50, function() 
				{ 
					//clearTimeout(timerId);
					//timerId = setTimeout(function() { enableScroll(); }, 500);
					
					aComplete = true; 
				});
			}
			else
			{
				$('#pagepiling').animate({ marginTop: sTo }, 500, function() 
				{ 
					//clearTimeout(timerId);
					//timerId = setTimeout(function() { enableScroll(); }, 500);
					
					aComplete = true; 
				});
			}
		
		}

	}
	
	*/
	

/*
    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            console.log('scrolling up !');
        }
        else{
            console.log('scrolling down !');
        }
    });
*/
	var scrollPrev = $(window).scrollTop();
	$(window).scroll(function(e) 
	{
		//console.log(1);
		//disableScroll();
		
		if ($(window).width() > 1000)
		{
			
			var sTop = 1;
			var cTop = $('.catalog').offset().top - 156;
			var contTop = $('.main-block-3').offset().top - 250;
			var wTop = $(window).scrollTop();

			var toScroll = false;
			var toHeaderTop = false;
			var m = 30;
			var timerId = false;

			// Вниз
			if (wTop > scrollPrev)
			{			
				if (wTop > sTop + m && wTop < cTop - m ) toScroll = cTop;
				else if (wTop > cTop + m && wTop < contTop - m) toScroll = contTop;
				
				//console.log("DOWN", toScroll, animComplete);
				
				toHeaderTop = -164;
				let sub = document.querySelectorAll(".sub");
				sub[0].classList.remove("subwhite");
				sub[0].querySelector("svg").classList.remove("svgact");
				sub[0].querySelector(".top-menu_bottom").classList.remove("bact");
				sub[1].classList.remove("subwhite");
				sub[1].querySelector("svg").classList.remove("svgact");
				sub[1].querySelector(".top-menu_bottom").classList.remove("bact");
				document.querySelector(".header-menu-btn").classList.remove("activem-btn");
				document.querySelector(".main-menu").classList.remove("active-menu");
			}
			// Вверх
			else
			{
				if (wTop > sTop + m && wTop < cTop - m ) toScroll = sTop;
				else if (wTop > cTop + m && wTop < contTop - m) toScroll = cTop;
				
				toHeaderTop = 0;
				//console.log("UP", toScroll);
			}
			
			
			
			if (toScroll && animComplete)
			{
				$('html, body').animate(
				{
					scrollTop: toScroll
				}, 500, function() 
				{ 
					//clearTimeout(timerId);
					//timerId = setTimeout(function() { enableScroll(); }, 500);
					
					animComplete = true; 
				});
			}
			
			if (wTop <= contTop) toHeaderTop = 0;
			
			if (animHeaderComplete)
			{
				animHeaderComplete = false;
				$('header').animate(
				{
					top: toHeaderTop + "px"
				}, 300, function() { animHeaderComplete = true; });
			}
			
			if (toScroll !== false) 
			{
				animComplete = false;
				animHeaderComplete = false;
			}
			
			scrollPrev = wTop;
		
		}
		
		return true;
	});

	


	let sub = document.querySelectorAll(".sub");
	let menuBtn = document.querySelector(".header-menu-btn");

	$('.sub-button').click(function()
	{
		var par = $(this).parent('.sub');
		var curClass = par.hasClass('subwhite');
		$('.sub-button').parent('.sub').find('svg').removeClass('svgact');
		$('.sub-button').parent('.sub').removeClass('subwhite');
		$('.sub-button').parent('.sub').find('.top-menu_bottom').removeClass('bact');
		
		
		if (!curClass)
		{
			par.addClass('subwhite');
			par.find('svg').addClass('svgact');
			par.find('.top-menu_bottom').addClass('bact');
		}
	});

	$(window).click(function(e)
	{
		//console.log(222);
		var div = $('.top-menu_bottom'); 
		var div1 = $('.sub-button'); 
		if (!div.is(e.target) && div.has(e.target).length === 0 && 
			!div1.is(e.target) && div1.has(e.target).length === 0) 
		{
			div1.parent('.sub').find('svg').removeClass('svgact');
			div1.parent('.sub').removeClass('subwhite');
			div1.parent('.sub').find('.top-menu_bottom').removeClass('bact');
		}
	});

	menuBtn.addEventListener("click", (e) => 
	{
		e.currentTarget.classList.toggle("activem-btn");
		document.querySelector(".main-menu").classList.toggle("active-menu");
		// $(".main-menu").fadeIn();
		sub[1].querySelector("svg").classList.remove("svgact");
		sub[1].classList.remove("subwhite");
		sub[1].querySelector(".top-menu_bottom").classList.remove("bact");
		sub[0].querySelector("svg").classList.remove("svgact");
		sub[0].classList.remove("subwhite");
		sub[0].querySelector(".top-menu_bottom").classList.remove("bact");

		window.addEventListener("click", (e) => {
		e.currentTarget;
		// console.log(sub[0]);
		if (e.target.tagName === "BUTTON") {
		return;
		}
		if (e.target.className == "main-menu active-menu") {
		return;
		// sub[0].querySelector(".top-menu_bottom").classList.remove("bact");
		} else {
		menuBtn.classList.remove("activem-btn");
		document.querySelector(".main-menu").classList.remove("active-menu");
		}
		});
	});


	var curX = 0;
	
	var el = $(".fr");
	var img = 1030;

	//console.log(img);

	var rightBorder = -1 * (2717 - document.body.clientWidth);
	var leftBorder = -1 * (2717 - document.body.clientWidth) - img * 1 + 434;

	el.css("left", leftBorder + "px");



/* 	var interv = setInterval(() =>
	{

		img = $('.over img').width();
		rightBorder = -1 * (2717 - document.body.clientWidth);
		leftBorder = -1 * (2717 - document.body.clientWidth) - img * 1 + 434;

		var elX = el.css("left").replace('px', '') * 1;


		var way = 0;


		//console.log(elX);


		if (elX < curX - 1 && way < 0.1 && elX  < rightBorder)
		{
		if (Math.abs(curX - elX) > 1) way = 1 * Math.abs(curX - elX) / 50 * 0.5;
		else way = 1 * 0.5;

		}
		else if (elX > curX + 1 && way > -0.1 && elX  > leftBorder)
		{

		if (Math.abs(curX - elX) > 1) way = -1 * Math.abs(curX - elX) / 50 * 0.5;
		else way = -1 * 0.5;
		}

		el.css("left", elX + way + "px");

	}, 1); */

	window.addEventListener("mousemove", (e) =>
	{
		if (catalogH2)
		{
			if (e.pageX < $('.catalog .owl-stage .owl-item:nth-child(1) .catalog .catalog-item').width()) { ggg($('.catalog .owl-stage .owl-item:nth-child(1) .catalog .catalog-item')); catalogH2 = false; }
			if (e.pageX >= $('.catalog .owl-stage .owl-item:nth-child(1) .catalog .catalog-item').width()) { ggg($('.catalog .owl-stage .owl-item:nth-child(2) .catalog .catalog-item'));  }
		}
		
		const target = e.target;
		if (!target) return;

		var imgLeft = $('.owl-item.active .over img').length > 0 ? $('.owl-item.active .over img').offset().left : 0;
		//console.log($('.owl-item.active .over img').offset().left);

		if 
		(
			e.pageY < 1000 && e.pageY > 150 
			&& e.pageX > imgLeft
			&& (!$('.header-menu-btn').hasClass('activem-btn') 
			|| $('.header-menu-btn').hasClass('activem-btn') && e.pageY > 650 
			|| $('.header-menu-btn').hasClass('activem-btn') && e.pageX > ($(window).width() - 1336) / 2 + 1258)
		)
		{

		curX = -1 * (2717 - e.pageX) + 434 / 2;

		prevX = e.pageX;

		}

	});


	function hide_secondLevel()
	{
		$('.c-mob-items').css('width', 'auto').css('margin-left', '0');
		$('.c-mob-items-inner').hide();
	}

	function hide_MobMenuC()
	{
		if ($(window).height() <= 813) $('.c-mob-items').height(650 - (813 - $(window).height()));
		else $('.c-mob-items').height(650 + ($(window).height() - 813));
		
		$('main').css('position', 'relative');
		$('main').show(); 
		$('.c-mob-bg').css('opacity', "0");
		$('.c-mob-menu').hide();
		$('.c-mob-bg').height($(window).height());
		
		hide_secondLevel();
	}

	function open_MobMenuC()
	{
		$('.c-mob-menu').show(); $('.c-mob-bg').animate({opacity: "0.7", height: "79px"}, 500, function() { $('main').css('position', 'fixed'); });
		$('.c-mob-items-inner').width($(window).width() - 28);
		$('.c-mob-items-1').show().html($('.c-mob-open-0').html());
		
		// click
		$('.c-mob-item-open-right').click(function()
		{
			$('.c-mob-items').width($(window).width() * 2);
			
			$('.c-mob-items-2').html($('.c-mob-open-' + $(this).data('open')).html());
			
			$('.c-mob-items-2').show();
			$('.c-mob-items').animate({marginLeft: -1 * $(window).width() + "px"}, 500, function() 
			{  
			
				if ($('.c-mob-items-2 .c-mob-open-inner').height() < $(window).height() - 164) $('.c-mob-items').css('overflow', 'hidden');
				else 
				{
					$('.c-mob-items').css('overflow', 'scroll');
					$('.c-mob-items-inner').height($('.c-mob-items-2 .c-mob-open-inner').height());
				}
				
				// click
				$('.c-mob-items-2 .c-mob-item-open-left').click(function()
				{
					if ($('.c-mob-items-1 .c-mob-open-inner').height() < $(window).height() - 164) $('.c-mob-items').css('overflow', 'hidden');
					else 
					{
						$('.c-mob-items').css('overflow', 'scroll');
						$('.c-mob-items-inner').height($('.c-mob-items-1 .c-mob-open-inner').height());
					}
					
					$('.c-mob-items').animate({marginLeft: "0"}, 500, function() 
					{
						$('.c-mob-items').width($(window).width() * 1);
						$('.c-mob-items-inner').hide();
						$('.c-mob-items-1').show();
					});
				});
				
				// click
				$('.c-mob-items-2 .c-mob-item-open-right').click(function()
				{	
					$('.c-mob-items').width($(window).width() * 3);
					
					$('.c-mob-items-3').html($('.c-mob-open-' + $(this).data('open')).html());
					
					$('.c-mob-items-3').show();
					$('.c-mob-items').animate({marginLeft: -2 * $(window).width() + "px"}, 500, function() 
					{ 
					
						if ($('.c-mob-items-3 .c-mob-open-inner').height() < $(window).height() - 164) $('.c-mob-items').css('overflow', 'hidden');
						else 
						{
							$('.c-mob-items').css('overflow', 'scroll');
							$('.c-mob-items-inner').height($('.c-mob-items-3 .c-mob-open-inner').height());
						}
						
						// click
						$('.c-mob-items-3 .c-mob-item-open-left').click(function()
						{
							
							if ($('.c-mob-items-2 .c-mob-open-inner').height() < $(window).height() - 164) $('.c-mob-items').css('overflow', 'hidden');
							else 
							{
								$('.c-mob-items').css('overflow', 'scroll');
								$('.c-mob-items-inner').height($('.c-mob-items-2 .c-mob-open-inner').height());
							}
							
							$('.c-mob-items').animate({marginLeft: -1 * $(window).width() + "px"}, 500, function() 
							{
								$('.c-mob-items').width($(window).width() * 2);
								$('.c-mob-items-inner').hide();
								$('.c-mob-items-1').show();
								$('.c-mob-items-2').show();
							});
						});
					}); 
				});
			
			});
		});
		
	}

	function close_MobMenuC()
	{
		$('main').css('position', 'relative'); $('.c-mob-bg').animate({opacity: "0", height: $(window).height() + "px"}, 500, function() { $('.c-mob-menu').hide(); hide_secondLevel(); });
	}

	// mobile
	$('.mob-menu-open-c').click(function()
	{
		open_MobMenuC();
	});
	
	$('.c-mob-bg').click(function()
	{
		close_MobMenuC();
	});
	
	$('.c-mob-top').swipe(
	{
		swipeStatus: function(event, phase, direction, distance , duration , fingerCount) 
		{
			console.log(phase, direction, distance , duration , fingerCount);
			
			if (phase == 'move')
			{
				if (direction == 'down')
				{
					$('.c-mob-bg').height(79 + distance);
				}
				/*
				else if (direction == 'up')
				{
					$('.c-mob-bg').height(79);
				}
				*/
			}	
			
			if (phase == 'end')
			{
				if (direction == 'down')
				{
					close_MobMenuC();
				}
				else
				{
					open_MobMenuC();
				}
				
			}
		},
		threshold: 0
	});




	// Product Page






});

