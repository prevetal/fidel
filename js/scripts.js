$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		loop: true,
	    margin: 0,
	    dots: true,
	    nav: true,
	    navSpeed: 750,
	    smartSpeed: 750,
	    autoplaySpeed: 750,
	    items: 1,
	    autoplay: true,
		autoplayTimeout: 5000
	})


	// Мини всплывающие окна
	firstClick = false
	$('.mini_modal_link').click(function(e){
	    e.preventDefault()

	    var modalId = $(this).attr('data-modal-id')
	    if($(modalId).is(':visible')){
	        $(this).removeClass('active')
	        $('.mini_modal').fadeOut(200)
	        firstClick = false
	    }else{
	        $('.mini_modal_link').removeClass('active')
	        $(this).addClass('active')

	        $('.mini_modal').fadeOut(200)
	        $(modalId).fadeIn(300)
	        firstClick = true
	    }
	})

	// Закрываем всплывашку при клике вне неё
	$(document).click(function(e){
	    if (!firstClick && $(e.target).closest('.mini_modal').length == 0){
	        $('.mini_modal').fadeOut(300)
	        $('.mini_modal_link').removeClass('active')
	    }
	    firstClick = false
	})


	// Выбор города
    var $metroList = {
    	'Москва': [
    		'м. Бауманская',
			'м. Преображенская',
			'м. Улица 1905 года',
			'м. Октябрьская',
			'ул. Черноморского флота, 34',
			'ул. Свердлова, 25',
			'м. Академия Наук'
    	],

    	'Санкт-Петербург': [
    		'м. Бауманская',
			'м. Преображенская',
			'м. Улица 1905 года',
			'м. Октябрьская',
			'ул. Черноморского флота, 34',
			'ул. Свердлова, 25',
			'м. Академия Наук'
    	],

    	'Архангельск': [
    		'м. Бауманская',
			'м. Преображенская',
			'м. Улица 1905 года',
			'м. Октябрьская',
			'ул. Черноморского флота, 34',
			'ул. Свердлова, 25',
			'м. Академия Наук'
    	],
    }

    $('#city_modal .list li a').click(function(e) {
    	e.preventDefault()

    	var cityName = $(this).text()

		$('header .city_box > a .city').text( cityName )
    	$('#city_modal .metro .city_name').text( cityName )

    	$('header .city_box > a .metro').text('')
    	$('#city_modal .metro .metro_list').html('')

    	if( $metroList[ cityName ] ){
    		var metroHtml = '<ul>'

    		for (var key in $metroList[ cityName ]) {
	    		metroHtml += '<li><a href="#">' + $metroList[ cityName ][key] + '</a></li>'
			}

			metroHtml += '</ul>'
			$('#city_modal .metro .metro_list').html( metroHtml )
    	}
    })

    $('body').on('click', '#city_modal .metro .metro_list a', function(e) {
    	e.preventDefault()

    	var metroName = $(this).text()

    	$('header .city_box > a .metro').text( metroName )
    })


    // Фото галерея
	$('.gallery .photo .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
		        margin: 30
		    },
		    1024 : {
		        items: 4,
		        margin: 15
		    },
		    768 : {
		        items: 3,
		        margin: 30
		    },
		    480 : {
		        items: 2,
		        margin: 15
		    },
		    0 : {
		        items: 1,
		        margin: 15
		    }
		}
	})


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).attr('href'),
			type : 'inline',
			opts : {
				speed: 300,
				margin: [20,0],
				slideShow : false,
				fullScreen : false,
				thumbs : false,
				focus : false
			}
		})
	})

	$('.fancy_img').fancybox({
		margin: [20,0]
	})


	// СТРИЖКИ. БРИТЬЕ. МОДНЫЕ ТЕНДЕНЦИИ
	$('.haircuts .slider').owlCarousel({
		loop: false,
	    margin: 0,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1
	})


	// Гаши мастера
	$('.team .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
		        margin: 30
		    },
		    1024 : {
		        items: 4,
		        margin: 15
		    },
		    768 : {
		        items: 3,
		        margin: 30
		    },
		    480 : {
		        items: 2,
		        margin: 15
		    },
		    0 : {
		        items: 1,
		        margin: 15
		    }
		}
	})


	// Читать дальше
	$('.text_block a.toggle_link').toggle(function(){
		$(this).addClass('active').prev().slideDown()
	}, function(){
		$(this).removeClass('active').prev().slideUp()
	})


	// Кнопка 'Вверх'
	$('.buttonUp a').click(function(e) {
		e.preventDefault()

		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800)
	})


	// Кастомный select
	$('.form select').selectbox({
		effect: "fade"
	})


	// Плавный скролинг к якорю
	$('a.scroll').click(function(){
	    var selected = $(this).attr('href')

	    $.scrollTo(selected, 1000, { offset: -150 })

	    return false
	})


	$('.form').submit(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : '#success_modal',
			type : 'inline',
			opts : {
				speed: 300,
				margin: [20,0],
				slideShow : false,
				fullScreen : false,
				thumbs : false,
				focus : false
			}
		})
	})


	// Франшиза - крафики
	$owl = $('.franchise_about .grafiks .big .slider').owlCarousel({
		loop: false,
	    margin: 40,
	    dots: false,
	    nav: false,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1,
	    margin: 0,
	    onTranslate: function(event){
	    	$('.franchise_about .grafiks .thumbs a').removeClass('active')
	    	$('.franchise_about .grafiks .thumbs a:eq('+ event.item.index +')').addClass('active')
	    }
	})

	$('.franchise_about .grafiks .thumbs .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1024 : {
		        items: 4,
		        margin: 30
		    },
		    480 : {
		        items: 4,
		        margin: 15
		    },
		    0 : {
		        items: 2,
		        margin: 15
		    }
		}
	})

	$('.franchise_about .grafiks .thumbs .slide a').click(function(e) {
		e.preventDefault()

		$('.franchise_about .grafiks .thumbs .slide a').removeClass('active')
		$(this).addClass('active')

	    $owl.trigger('to.owl.carousel', $(this).attr('data-slide-index'))
	})


	// ЧТО ПОЛУЧАЕТ ПАРТНЕР FIDEL
	$owl2 = $('.franchise_get_partner .slider_box .slider').owlCarousel({
		loop: false,
	    margin: 40,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1,
	    margin: 0,
	    onTranslate: function(event){
	    	$('.franchise_get_partner .slider_box .thumbs a').removeClass('active')
	    	$('.franchise_get_partner .slider_box .thumbs a:eq('+ event.item.index +')').addClass('active')
	    }
	})

	$('.franchise_get_partner .slider_box .thumbs a').click(function(e) {
		e.preventDefault()

		$('.franchise_get_partner .slider_box .thumbs a').removeClass('active')
		$(this).addClass('active')

	    $owl2.trigger('to.owl.carousel', $(this).attr('data-slide-index'))
	})


	// ТРЕБОВАНИЯ К ПАРТНЕРУ FIDEL
	$('.franchise_requirements .slider_box .slider').owlCarousel({
		loop: false,
	    margin: 40,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    items: 1,
	    margin: 0
	})


	// ОТЗЫВЫ ФРАНЧАЙЗИ
	$('.franchise_reviews .big_slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    mouseDrag: false,
	    responsive : {
		    1024 : {
		        items: 2,
	    		margin: 30
		    },
		    0 : {
		        items: 1,
	    		margin: 30
		    }
		}
	})

	var $i = 1
	$('.franchise_reviews .item').each(function(){
		$(this).find('.slider').bxSlider({
			infiniteLoop: false,
			speed: 500,
			controls: false,
			touchEnabled: false,
			pagerCustom: '#bx-pager' + $i
		})

		$i++
	})
})


$(window).load(function(){
	// Шапка
	$('header').wrap('<div class="header_wrap" style="height: ' + $('header').innerHeight() + 'px"></div>')


	// Товары
	$('.products .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
	    		margin: 35
		    },
		    1024 : {
		        items: 4,
	    		margin: 15
		    },
		    768 : {
		        items: 3,
	    		margin: 30
		    },
		    480 : {
		        items: 2,
	    		margin: 15
		    },
		    0 : {
		        items: 1,
	    		margin: 15
		    }
		},
		onInitialized: function(event){
			productHeight( $(event.target).find('.product'), $(event.target).find('.product').size())
		}
	})


	$('.player_wrap').musicPlayer({
		playlistItemSelector: 'div',
        elements: ['information', 'controls', 'progress', 'volume'],
        controlElements: ['play', 'stop'],
        infoElements: [  'title' ],
        volume: 100,
        playerAbovePlaylist: true,
        loop: true,
        autoPlay: true
	})


	// Отзывы о академии
	$('.academy_reviews .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
		        margin: 43
		    },
		    1024 : {
		        items: 4,
		        margin: 15
		    },
		    768 : {
		        items: 3,
		        margin: 15
		    },
		    480 : {
		        items: 2,
		        margin: 15
		    },
		    0 : {
		        items: 1,
		        margin: 15
		    }
		}
	})


	// Тренерао академии
	$('.academy_coachs .slider').owlCarousel({
		loop: false,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
		        margin: 43
		    },
		    1024 : {
		        items: 4,
		        margin: 15
		    },
		    768 : {
		        items: 3,
		        margin: 15
		    },
		    480 : {
		        items: 2,
		        margin: 15
		    },
		    0 : {
		        items: 1,
		        margin: 15
		    }
		}
	})


    // СЕРТИФИЦИРОВАННЫЕ МАСТЕРА
	$('.certified_masters .slider').owlCarousel({
		loop: true,
	    dots: false,
	    nav: true,
	    navSpeed: 500,
	    smartSpeed: 500,
	    autoplaySpeed: 500,
	    responsive : {
	    	1215 : {
		        items: 4,
		        margin: 30
		    },
		    1024 : {
		        items: 4,
		        margin: 20
		    },
		    768 : {
		        items: 3,
		        margin: 20
		    },
		    480 : {
		        items: 2,
		        margin: 20
		    },
		    0 : {
		        items: 1,
		        margin: 20
		    }
		},
		onInitialized: function(event){
			setHeight( $(event.target).find('.master'))

			setTimeout(() => {
				$(event.target).find('.owl-nav .owl-prev, .owl-nav .owl-next').css(
					'top', $(event.target).find('.photo').outerHeight() * 0.5
				)
			})
		}
	})
})


$(window).scroll(function(){
	// Кнопка 'Вверх'
	if( $(this).scrollTop() > $(window).innerHeight() ){
		$('.buttonUp').fadeIn(300)
	} else {
		$('.buttonUp').fadeOut(200)
	}


	// Шапка
	if( $(window).width() > 1023 && $(window).scrollTop() > $('.header_wrap header').innerHeight() ) {
		$('.header_wrap header').addClass('fixed')
	}else{
		$('.header_wrap header').removeClass('fixed')
	}
})


$(window).resize(function(){
	// Шапка
	if( $(window).width() < 1024 ) {
		$('.header_wrap header').removeClass('fixed')
		$('.header_wrap').height('auto')
	}
})


function productHeight(selector, step){
	var start = 0
	var finish = step

	var products = selector

	for( var i = 0; i < products.length; i++ ){
		var obj = products.slice(start, finish).find('.name')
		setHeight( obj )

		var obj2 = products.slice(start, finish).find('.desc')
		setHeight( obj2 )

		start = start+step
		finish = finish+step
	}
}


function setHeight(className){
    var maxheight = 0
    $(className).each(function() {
        if($(this).innerHeight() > maxheight) {
        	maxheight = $(this).innerHeight()
        }
    })
    $(className).innerHeight(maxheight)
}