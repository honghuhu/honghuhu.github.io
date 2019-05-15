(function ($) {

	// ------- 处理搜索侧边栏 -----------

	var searchForm = $('#search-form');
	var searchSubmit = searchForm.find('.btn-gal')
	searchSubmit.each(function () {
		$(this).on('click', function (event) {
			var searchInput = $(this).prev()
			var input = searchInput.val().trim()
			if(input === null || input === '') {
				event.preventDefault();
				searchInput.focus()
			}
		})
	})

	// ------- 处理搜索侧边栏结束 --------

    /*var slideList = []
    var prefix = window.slideConfig.prefix
    var ext = '.' + window.slideConfig.ext
    var maxCount = window.slideConfig.maxCount
    for(var k = 0; k < 6; k++) {
        var n = Math.floor(Math.random() * maxCount) + 1
        while(slideList.indexOf(n) !== -1) {
            n = Math.floor(Math.random() * maxCount) + 1
        }
        slideList.push(n)
    }

    // ------- 处理背景图 --------------

    var cdSlideShow = $('.cb-slideshow')
    cdSlideShow.find('span').each(function (i, span) {
        $(this).css('backgroundImage', 'url(\'' + prefix + slideList[i] + ext + '\')')
    })

    // ------- 处理背景图结束 -----------*/
    var slideList = []
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-e3d151d9cacf3222.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-8c9d9456e5e93aef.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-fe3113a32ba0c7a9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-a9a34f525744a033.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-00759cb6f8f360b4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-dac0ddc3f7604b22.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-cf367d05dc7c65db.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-3ca9eeb68446e3fc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-3ca9eeb68446e3fc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-93f32af32136d980.jpg&fm=jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-42764f0222ebcb41.jpg&fm=jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-a2d7dede1e0d52ae.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-5801a5bdb96ff694.jpg&fm=jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-f66305cc500c4e8d.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");
    slideList.push("https://upload-images.jianshu.io/upload_images/12906348-611e1f16d8805bb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240");

    var cdSlideShow = $('.cb-slideshow')
    /*cdSlideShow.find('span').each(function (i, span) {
        $(this).css('background-color', slideList[Math.floor(Math.random() * slideList.length)])
    })*/
    cdSlideShow.find('span').each(function (i, span) {
        $(this).css('backgroundImage', 'url(\'' + slideList[Math.floor(Math.random() * slideList.length)] + '\')')
    })
    // ------- 处理背景图结束 -----------

	var panelToggle = $('.panel-toggle')
	var panelRemove = $('.panel-remove')
	panelToggle.on('click', function () {
		var that = $(this)
		var panelGal = that.parents('.panel-gal')
		if(that.hasClass('fa-chevron-circle-up')) {
			that.removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down')
			panelGal.addClass('toggled')
		} else {
			that.removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up')
			panelGal.removeClass('toggled')
		}
	})
	panelRemove.on('click', function () {
		var that = $(this)
		// TODO 不用jqueryUI
		that.parents('.panel').animate({
			opacity: 0
		}, 1000, function () {
			$(this).css('display', 'none')
			// $(this).css('opacity', 1)
		})
	})

	var tagsTab = $('#tags-tab')
	var friendLinksTab = $('#friend-links-tab')
	var linksTab = $('#links-tab')

	friendLinksTab.tab('show')

	tagsTab.on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	friendLinksTab.on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	linksTab.on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	// ------- 处理返回顶端 -------------

	var goTop = $('#gal-gotop')
	goTop.css('bottom', '-40px')
	goTop.css('display', 'block')
	$(window).on('scroll', function () {
		if($(this).scrollTop() > 200) {
			goTop.css('bottom', '20px')
		} else {
			goTop.css('bottom', '-40px')
		}
	})
	goTop.on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800)
	})

	// ------- 处理返回顶端结束 ----------

})($)