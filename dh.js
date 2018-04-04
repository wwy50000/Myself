var index = 0;
//var startscroll = true;
//var pagecount = 0;
//var allpage = 5;
// function mouseWheel(obj, fn) {
// 	//obj是绑定滚轮事件的对象,fn是函数名,得到down之后，具体执行的函数名
// 	//嗅探浏览器
// 			var ff = navigator.userAgent.indexOf("Firefox");
// 			if(ff != -1) {
// 				obj.get(0).addEventListener("DOMMouseScroll", wheel, false);
// 			} else {
// 				obj.get(0).onmousewheel = wheel;
// 			}
// 			function wheel(event) {
// 				var _this = this;
// 				var ev = event || window.event;
// 				var down = true; //判断是否向下滚动
// 				if(ev.detail) {
// 					down = ev.detail > 0;
// 				} else {
// 					down = ev.wheelDelta < 0;				
// 				}				
// 				//函数调用！！！函数真正执行！！！
// 				fn(ev,down);
// 			}		
// 		}
		//调用鼠标监听函数
// 		var indexs ="";
// 		function dong(ev,down) {		
// 			if(down) {	
// 			indexs = true;				
// 			} else {
// 			indexs = false;
// 			}
			
// 			switch(indexs) {
// 				case true:
// 				setTimeout(function(){
// 					$(".feiru").css({
// 						animation: "flyout 1.5s "
// 					});
// //					setTimeout(function() {						
// 						//延时两秒，旋转出第二屏
//                         //qingyi();							
// 						$(".wrap1").hide();
// 						$("#wrap2").show();
// 						console.log(indexs);
// 					},1500)
// 					break;
			// 	case false:
			// 			$(".wrap1").show();
			// 			$("#wrap2").hide();	
			// 		break;
			// }
				
//			switch(indexs)
//				case true:
//					setTimeout(function() {
//						qingyi2();
//				}, 1000)
//
//				case false: {
//					// yi();
//					xianshi();
//					break;
//			}	
// }
		
//			switch(index) {
//				case true:
//					$(".feiru").css({
//						animation: "flyout 1.5s  "
//					});
//					setTimeout(function() { //延时两秒，旋转出第二屏
//							qingyi();
//						}, 1000)
//					break;
//
//				case false:
//					// yi();
//					xianshi();
//					break;

//				case 6:
//					$
//					setTimeout(function() {
//						qingyi2();
//					}, 1000)
//
//					break;
//
//				case 9:
//					qingyi3();
//					break;
//
//				case 12:
//					qingyi4();
//					break;
//				case 15:
//					qingyi5();
//					break;
//
//				default:
//
//			}
//		}s
		
		// mouseWheel($(".wrap1"),dong);
		// setTimeout(function(){
		// mouseWheel($(".wrap1"),dong);
		// },1500)
		
		// setTimeout(function(){
		// mouseWheel($("#wrap2"),dong);
		// },1500)
		// setTimeout(function(){
		// mouseWheel($("#wrap3"),dong);
		// },1500)
		
		// setTimeout(function(){
		// mouseWheel($("#wrap4"),dong);
		// },1500)
		
		// setTimeout(function(){
		// mouseWheel($("#wrap5"),dong);
		// },1500)
		
		// setTimeout(function(){
		// mouseWheel($("#wrap6"),dong);
		// },1500)
		
		
		//判断当前index 触发分屏的动画效果

		//第一屏需要触发的效果
		function yi() {
			//给开屏动画赋高度和top位置+++++++++++++++++++++++++++++++++++++++++++++++
			$(".huayuanbg").height($(".huayuanbg").width());
			var imgTop = $(".imgbg>img:nth-of-type(1)").offset().top;
			$(".huayuan").css({
				top: imgTop * 1.2
			});
			//动态打字动画--------------------------------------------------------
			var arr = ["W", "W", "Y", "<br>", "{", "<br>", "&nbsp&nbsp&nbsp&nbsp", "r", "e", "t", "u", "r", "n", "&nbsp&nbsp", "/", "程", "序", "猿", "/", ";", "<br>", "}", ];
			var num = 0;
			var str = "";
			setTimeout(function() {
				var time = setInterval(function() {
					if(num == arr.length - 1) {
						clearInterval(time);
					}
					str = str + arr[num];
					num++;
					$(".dazi>span:nth-of-type(1)").html(str);
				}, 200);
			}, 6000);
		}
		yi();

		//第一屏需要清除的效果
		function qingyi() {

			$(".wrap1").hide();
			$("#wrap2").show();
			ziyan();
		}

		function xianshi() {
			$(".wrap1").show();
			$("#wrap2").hide();
			ziyan();
		}

		function qingyi2() {
			$("#wrap2").hide();
			$("#wrap3").show();
			ziyan();	
		}

		function qingyi3() {
			$("#wrap3").hide();
			$("#wrap4").show();
			ziyan();
		}

		function qingyi4() {
			$("#wrap4").hide();
			$("#wrap5").show();
			ziyan();
		}

		function qingyi5() {
			$("#wrap5").hide();
			$("#wrap6").show();

			$(".title>p").css({
				color: "black"
			});
			$(".daohang>span").css({
				color: "black"
			});
			$(".dianji>li").css({
				color: "black"
			});
			zidong();

		}

		function zidong() {
			var arr1 = ["x", "x", "y", "5", "0", "0", "0", ".", "x", "y", "z", ];
			var num1 = 0;
			var str1 = "";
			setTimeout(function() {
				var time1 = setInterval(function() {
					if(num1 == arr1.length - 1) {
						clearInterval(time1);
					}
					str1 = str1 + arr1[num1];
					num1++;
					$(".dazi2>span:nth-of-type(1)").html(str1);
				}, 200);
			}, 1000);
			 $(".dazi2>span:nth-of-type(2)").hide();
		}
//		 qingyi5();
//		 }

		function ziyan() {
			$(".title>p").css({
				color: "white"
			});
			$(".daohang>span").css({
				color: "white"
			});
			$(".dianji>li a").css({
				color: "white"
			});

		};