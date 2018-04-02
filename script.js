$(function () {
// 	document.onreadystatechange = function () {
// 		if (document.readyState == 'complete') {
// 			$('.loading').fadeOut()
// 		}
	setInterval(function(){
		$('.loading').fadeOut();
	},3000)
	
	// 导航栏
	var olist = $(".nav-list-li"),
		obox = $(".nav-second-list");
	for (var i = 0; i < olist.length; i++) {
		olist[i].id = i;
		olist[i].onmouseover = function () {
			for (var j = 0; j < obox.length; j++) {
				obox[j].style.display = "none";
				obox[this.id].style.display = "block";
			}
		}
	}
	$("#nav-list").bind("mouseover", function () {
		$("#nav-second").slideDown('fast');
	})

	$("#nav-list").bind("mouseleave", function () {
		$("#nav-second").slideUp('slow');
	})

	//轮播图圆点	
	var oli = $(".smallbtn li"),
		oImg = $(".pic-wrap img");
	picPlay($(".pic-li"), oli, $(".pic-wrap"), $(".pic-li>img:first"));
	function picPlay(pic, list, wrap, firstobj) {
		var len = list.length;
		var index = 0;  //从第一张开始
		var adTimer;
		list.mouseover(function () {
			index = list.index(this);  
			showImg(index);
		}).eq(0).mouseover();
		//鼠标移动上去暂停.
		wrap.hover(function () {
			clearInterval(adTimer);
		}, function () {
			adTimer = setInterval(function () {
				showImg(index);
				index++;
				if (index == len) {
					index = 0;
				}
			}, 5000);
		}).trigger("mouseleave");
		//切换类名
		function showImg(index) {
			var adHeight = firstobj.height();
			pic.animate({
				"marginTop": -adHeight * index + "px"
			}, 1);
			list.removeClass("bg-on")
				.eq(index).addClass("bg-on");
		}
	}
	//菜单栏
	$(".main1-nav-ul > li").bind('mouseover', function (event) {
		$(this).children(".main1-nav-list").show();
	});
	$(".main1-nav-ul > li").bind('mouseout', function (event) {
		$(this).children(".main1-nav-list").hide();
	});

	// main2
	oWidth = $(".main2").width();
	index = 0;
	timer = null;
	$("#spanleft").bind("click", leftPlay);

	function leftPlay() {
		$("#spanleft").removeClass('span-color');
		$("#main2-wrap").animate({
			"margin-left": 0 + "px"
		}, 500);
		$("#spanright").addClass("span-color");
	}

	$("#spanright").bind("click", rightPlay);

	function rightPlay() {
		$("#spanright").removeClass("span-color");
		$("#main2-wrap").animate({
			"margin-left": -oWidth + "px"
		}, 500);
		$("#spanleft").addClass("span-color")
	}

	$("#main2-wrap").hover(function () {
		clearInterval(timer);
		timer = null;
	}, function () {
		time = setInterval(timeAuto, 10000);
	});

	function timeAuto() {
		leftPlay();
		setTimeout(rightPlay, 4000);
	}
	timer = setInterval(timeAuto, 10000);


	//搭配
	var oLi = $(".dapei-head-list li"),
		oBox = $(".dapei-tab");
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].id = i;
		oLi[i].onmouseover = function () {
			for (var j = 0; j < oBox.length; j++) {
				oBox[j].style.display = "none";
				oLi[j].className = "";
			}
			oBox[this.id].style.display = "block";
			oLi[this.id].className = "dapei-lion";
		}
	}
	// 推荐
	var sWidth = $(".main-tuijian").width() + 13;
	index = 0;
	$(".spanleft").bind("click", function () {
		index++;
		if (index > 0) {
			index = 0
		}
		$(".tuijian-wrap").animate({
			"margin-left": sWidth * index + "px"
		}, 500);
		$(".span-btn span").removeClass("span-color");
		$(this).addClass("span-color");

		console.log(index);
	})

	$(".spanright").bind("click", function () {
		index--;
		if (index < -3) {
			index = -3
		}
		$(".tuijian-wrap").animate({
			"margin-left": sWidth * index + "px"
		}, 500)
		$(".span-btn span").removeClass("span-color");
		$(this).addClass("span-color");
	})

	
	function picChange(pic, list, wrap, btn) {
		list.click(function () {
			var index = 0;
			index = list.index(this);  
			showImg(index)
		})
		.
		wrap.hover(function () {
			btn.show();
		}, function () {
			btn.hide();
		}).trigger("mouseleave");

		
		function showImg(index) {
			var adWidth = $(".neirong-box").width();
			pic.animate({
				"marginLeft": -adWidth * index + "px"
			}, 200);
			list.removeClass("liOn").eq(index).addClass("liOn");
		}
	}
	picChange($("#neirong-tab1"), $("#card-list1>li"), $("#neirong-box1"), $("#neirong-tab1 span"));
	picChange($("#neirong-tab2"), $("#card-list2>li"), $("#neirong-box2"), $("#neirong-tab2 span"));
	picChange($("#neirong-tab3"), $("#card-list3>li"), $("#neirong-box3"), $("#neirong-tab3 span"));
	picChange($("#neirong-tab4"), $("#card-list4>li"), $("#neirong-box4"), $("#neirong-tab4 span"));

	function btnChange(leftbtn, rightbtn, boxwrap, listNum) {
		var index = 0;
		rightbtn.bind("click", function () {
			index--;
			if (index < -3) {
				index = -3
			}
			var bWidth = $(".neirong-box").width();
			boxwrap.animate({
				"marginLeft": bWidth * index
			}, 200);
			listNum[-index - 1].className = "";
			listNum[-index].className = "liOn";
		})
		leftbtn.bind("click", function () {
			index++;
			if (index > 0) {
				index = 0
			}
			var bWidth = $(".neirong-box").width();
			boxwrap.animate({
				"marginLeft": bWidth * index
			}, 200);
			listNum[-index + 1].className = "";
			listNum[-index].className = "liOn";
		})

	}
	btnChange($("#card-left1"), $("#card-right1"), $("#neirong-tab1"), $("#card-list1>li"));
	btnChange($("#card-left2"), $("#card-right2"), $("#neirong-tab2"), $("#card-list2>li"));
	btnChange($("#card-left3"), $("#card-right3"), $("#neirong-tab3"), $("#card-list3>li"));
	btnChange($("#card-left4"), $("#card-right4"), $("#neirong-tab4"), $("#card-list4>li"));


});
